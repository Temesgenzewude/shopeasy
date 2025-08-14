"use server";

import { prisma } from "@/db/prisma";
import { Product } from "@/types/product";
import { convertToPlainObject } from "../utils";

// Convert Prisma product to Product type
function convertPrismaProductToProduct(prismaProduct: {
  id: string;
  name: string;
  description: string | null;
  slug: string;
  category: string;
  price: string;
  stock: number;
  rating: string;
  brand: string | null;
  images: string[];
  numberOfReviews: number;
  isFeatured: boolean;
  banner: string | null;
  createdAt: Date;
  updatedAt: Date;
}): Product {
  const plainObject = convertToPlainObject(prismaProduct);
  return {
    ...plainObject,
    description: plainObject.description ?? undefined,
    brand: plainObject.brand ?? undefined,
    price: plainObject.price.toString(),
    rating: Number(plainObject.rating), // Convert Decimal to Number
  };
}

// Get latest products
export async function getLatestProducts(
  limit: number = 10
): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
    });
    return products.map(convertPrismaProductToProduct);
  } catch (error) {
    console.error("Error fetching latest products:", error);
    throw error;
  } finally {
    console.log("Latest products fetched successfully");
  }
}

// Get product by id
export async function getProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    return convertToPlainObject(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  } finally {
    console.log("Product fetched successfully");
  }
}
