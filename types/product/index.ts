import { createProductSchema } from "@/lib/validators/product";
import { z } from "zod";

export type Product = z.infer<typeof createProductSchema> & {
  id: string;
  rating: number;
  numberOfReviews: number;
  createdAt: Date;
  updatedAt: Date;
};
