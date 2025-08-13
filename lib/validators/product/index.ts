import { z } from "zod";

// schema for insergting a new product
export const createProductSchema = z.object({
  name: z
    .string("Product name is required!")
    .min(3, "Product name must be at least 3 characters"),
  description: z
    .string("Product description is required!")
    .min(10, "Product description must be at least 10 characters"),
  price: z.string().refine(
    (value) => /^\d+(\.\d{2})?$/.test(for),
    {
      message: "Product price must be a number",
    }
  ),
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
