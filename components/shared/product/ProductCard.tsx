import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./ProductPrice";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <Card className="w-full max-w-sm">
        <CardHeader className="p-0 items-center">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            priority={true}
          />
        </CardHeader>
        <CardContent className="p-4 grid gap-4">
          <div className="text-xs">{product.brand}</div>

          <h2 className="text-sm font-medium">{product.name}</h2>

          <div className="flex items-center justify-between gap-4">
            <p>{product.rating} Stars</p>

            {product.stock > 0 ? (
              <ProductPrice value={Number(product.price)} className="font-medium" />
            ) : (
              <p className="text-destructive">Out of Stock</p>
            )}
          </div>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </Link>
  );
}
