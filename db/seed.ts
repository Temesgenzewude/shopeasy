
import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  console.log("Seeding database with sample data...");
  const prisma = new PrismaClient();

  // Clear existing data
  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    const prisma = new PrismaClient();
    await prisma.$disconnect();
  });
