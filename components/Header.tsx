import { cookies } from "next/headers";
import { Product } from "@/app/page";
import Menu from "./Menu";

export default async function Header() {
  const cookieStore = cookies();
  const cardItems = cookieStore.getAll();
  const products: Product[] = await Promise.all(
    cardItems.map((item) =>
      fetch(`https://fakestoreapi.com/products/${item.value}`, {
        cache: "no-store",
      }).then((res) => res.json() as any)
    )
  );
  return (
    <div>
      <Menu prductsLenth={products.length} />
    </div>
  );
}
