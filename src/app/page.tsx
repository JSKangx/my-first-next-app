import NewProductList from "@/app/components/NewProductList";
import ProductList from "@/app/components/ProductList";
import Loading from "@/app/loading";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="p-8 m-4">
      <h1>Sparta Shop</h1>
      <Suspense fallback={<Loading />}>
        <NewProductList />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  );
}

export interface Product {
  id: string;
  isNew: boolean;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: { name: string; values: string[] }[];
  price: { amount: string; currencyCode: string };
  variants: {
    id: string;
    title: string;
    price: string;
    availableForSale: boolean;
  }[];
  images: string;
  featuredImage: string;
  seo: { title: string; description: string };
  tags: string[];
  updatedAt: string;
}
