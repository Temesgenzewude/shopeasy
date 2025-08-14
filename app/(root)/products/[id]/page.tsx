import ProductPrice from "@/components/shared/product/ProductPrice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductById } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductImages from "@/components/shared/product/ProductImages";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({ params }: PageProps) {
  const { id } = await params;

  const product = await getProductById(id);
  if (!product) {
    notFound();
  }
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Images column */}
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>

        {/* Details column  */}
        <div className="col-span-2 p-5 text-start">
          <div className="flex flex-col gap-2 items-start">
            <p>
              {product.brand} {product.category}
            </p>
            <h2 className="text-xl font-bold">{product.name}</h2>

            <p>
              {product.rating} of {product.numberOfReviews} Reviews
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <ProductPrice
                value={Number(product.price)}
                className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
              />
            </div>
          </div>

          <div className="mt-10">
            <p className="font-semibold">Description</p>
            <p>{product.description}</p>
          </div>
        </div>
        {/* Actions column */}
        <div>
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>

                <div>
                  <ProductPrice
                    value={Number(product.price)}
                    className="font-medium"
                  />
                </div>
              </div>

              <div className="mb-2 flex justify-between">
                <div>Status</div>

                {product.stock > 0 ? (
                  <Badge variant="outline" className="text-green-600">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-red-600">
                    Out of Stock
                  </Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div className="flex-center">
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Add to Cart
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      {/*  */}
    </section>
  );
}
