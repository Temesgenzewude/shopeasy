'use server';

import {PrismaClient} from '@prisma/client';
import { convertToPlainObject } from '../utils';

// Get latest products
export async function getLatestProducts(limit: number = 10) {
  const prisma = new PrismaClient();
  try {
    const products = await prisma.product.findMany({
      orderBy: {createdAt: 'desc'},
      take: limit,
    });
    return convertToPlainObject(products);
  } catch (error) {
    console.error('Error fetching latest products:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}