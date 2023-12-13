
import { Product } from "@/app/page";
import Details from "@/components/Details";

async function DetailsPage({ params }: { params: { id: number } }) {
  //   console.log(params);

  const fetchProducts = await fetch(
    `https://fakestoreapi.com/products/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const product: Product = await fetchProducts.json();
  
  return (
<Details product={product}/>
  );
}

export default DetailsPage;
