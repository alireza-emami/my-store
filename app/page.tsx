// import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

export default async function Home() {
  const products: Product[] = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" flex flex-wrap justify-center">
        {products.map((product: Product) => (
          <Card className="py-4 w-[300px] m-10" key={product.id}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{product.title}</p>
              <small className="text-default-500">{product.category}</small>
              {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
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
    </main>
  );
}
