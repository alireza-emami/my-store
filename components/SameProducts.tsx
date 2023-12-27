import { Product } from "@/app/page";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

interface Prop {
  category: string;
}

const SameProducts = async ({ category }: Prop) => {
  const fetchProducts = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
    {
      cache: "no-store",
    }
  );
  const products: Product[] = await fetchProducts.json();
  return (
    <div className="grid grid-cols-3">
      <div className=" flex flex-wrap justify-center">
        {products.map((product: Product) => (
          <Card className="py-4 w-[150px] m-10">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{product.title}</p>
              <small className="text-default-500">{product.category}</small>
              {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt={product.title}
                className="object-cover rounded-xl"
                src={product.image}
                width={270}
              />
            </CardBody>
            <CardFooter>
              {/* <Detailssss product={product} /> */}
              <Button className="flex flex-1 " color={"danger"}>
                <Link href={`/details/${product.id}`}>See more</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SameProducts;
