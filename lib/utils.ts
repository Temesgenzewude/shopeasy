import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert prisma object into a regular JS object
export function convertToPlainObject<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

// Formate number with decimal places
export function formatNumber(value: number): string {
  const [intPart, floatPart] = value.toString().split(".");

  return floatPart ? `${intPart}.${floatPart.padEnd(2, "0")}` : `${intPart}.00`;

}
