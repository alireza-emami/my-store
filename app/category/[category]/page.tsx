import { Product } from "@/app/page";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
  Link
} from "@nextui-org/react";
const CategorysDetails = async ({ params }: { params: { category: string } }) => {
  const fetchProducts = await fetch(
    `https://fakestoreapi.com/products/category/${params.category}`,
    {
      cache: "no-store",
    }
  );
  const products: Product[] = await fetchProducts.json();
  return (
    <div className=" flex flex-wrap justify-center">
      {products.map((product: Product) => (
        <Card className="py-4 w-[300px] m-10" key={product.id}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{product.title}</p>
            <small className="text-default-500">{product.category}</small>
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
            <Button className="flex flex-1 " color={"danger"}>
              <Link className="text-white" href={`/details/${product.id}`}>See more</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CategorysDetails;
