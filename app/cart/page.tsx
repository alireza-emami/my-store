import Cart from "@/components/Cart";
import { cookies } from "next/headers";
import { Product } from "../page";

const CartPage = async () => {
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
    <>
      <div>
        {products.map((product) => (
          <Cart
            product={product}
          />
        ))}
        <div></div>
      </div>
    </>
  );
};

export default CartPage;
