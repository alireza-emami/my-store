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
  console.log(params.category)
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
        <Card className="py-4 w-[300px] m-10">
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
              <Link className="text-white" href={`/details/${product.id}`}>ddd</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CategorysDetails;
