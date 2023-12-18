import { Product } from "@/app/page";
import Details from "@/components/Details";
import { cookies } from "next/headers";

async function DetailsPage({ params }: { params: { id: string } }) {
  const fetchProducts = await fetch(
    `https://fakestoreapi.com/products/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const product: Product = await fetchProducts.json();
  // console.log(product)

  const cookieStore = cookies();
  const updatedQuantity = cookieStore.get(`${product.id}`)?.value || "1";

  return <Details product={product} updatedQuantity={+updatedQuantity} />;
}

export default DetailsPage;
