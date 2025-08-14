import { formatNumber } from "@/lib/utils";
import { z } from "zod";

const currency = z
  .string()
  .refine((value) => /^\d+(\.\d{2})?$/.test(formatNumber(Number(value))), {
    message: "Price must be a valid number with two decimal places",
  });
// schema for inserting a new product
export const createProductSchema = z.object({
  name: z
    .string("Product name is required!")
    .min(3, "Product name must be at least 3 characters"),
  description: z
    .string()
    .min(10, "Product description must be at least 10 characters")
    .optional(),
  price: currency,
  stock: z.coerce
    .number("Product stock must be a number")
    .min(0, "Stock cannot be negative")
    .default(0),
  category: z
    .string("Product category is required!")
    .min(3, "Product category must be at least 3 characters"),
  brand: z.string("Product brand must be string!").optional(),
  images: z.array(z.string()).min(1, "At least one image is required"),
  slug: z
    .string("Product slug is required!")
    .min(3, "Product slug must be at least 3 characters"),
  isFeatured: z.boolean().optional().default(false),
  banner: z.string().optional().nullable(),
});
