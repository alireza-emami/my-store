import Cart from "@/components/Cart";
import { cookies } from "next/headers";
import { Product } from "../page";
import PayMent from "@/components/PayMent";

interface Prop {
}


const CartPage = async () => {
  const cookieStore = cookies();
  const cardItems = cookieStore.getAll();
  const products: Product[] = await Promise.all(
    cardItems.map((item) =>
      fetch(`https://fakestoreapi.com/products/${item.name}`, {
        cache: "no-store",
      })
        .then((res) => res.json() as any)
        .then((res) => ({
          ...res,
          item,
        }))
    )
  );

  return (
    <>
      <div className="flex flex-col justify-center mb-40">
        {products.map((product) => (
          <div key={product.id}>
            <Cart key={product.id}  product={product}  />
          </div>
        ))}
        <PayMent key={products.length} 
         products={products}  />
      </div>
    </>
  );
};

export default CartPage;
