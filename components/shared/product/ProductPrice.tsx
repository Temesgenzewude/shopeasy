import { cn } from "@/lib/utils";

export default function ProductPrice({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  // Ensure two decimal places for the price
  const formattedPrice = value.toFixed(2);
  // Get int/float parts
  const [intPart, floatPart] = formattedPrice.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intPart}
      <span className="text-xs align-super">.{floatPart}</span>
    </p>
  );
}
