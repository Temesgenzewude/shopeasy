import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: "Home",
  description: "Welcome to the home page of our application.",
};

export default async function HomePage() {
  const latestProducts= await getLatestProducts(5);
  return (
    <div className="mx-auto">
      <ProductList data={latestProducts} title="New Arrivals" />
    </div>
  );
}
