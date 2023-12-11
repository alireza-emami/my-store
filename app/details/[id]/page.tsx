import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Input,
  Button,
} from "@nextui-org/react";
import { Product } from "@/app/page";
import HandleBuy from "@/components/HandleBuy";

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
    <div>
      <Card className="m-12">
        <CardHeader className="flex gap-3 text-center justify-center">
          <div className="flex flex-col">
            <p className="text-md">{product.title}</p>
            <p className="text-small text-default-500">{product.category}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col-reverse justify-between items-center md:flex-row">
          <div>
            <p className=" md:w-[550px] p-2">{product.description}</p>
            <p className="p-2">{product.rating.count}</p>
            <p className="p-2">{product.rating.rate}</p>
            <p className="p-2">{product.price}</p>
            <Input type="number" placeholder="0" className="w-14 " />
          </div>
          <Image
            alt="nextui logo"
            height={240}
            radius="sm"
            src={product.image}
            width={240}
            isZoomed={true}
          />
        </CardBody>
        <Divider />
        <CardFooter>
          <HandleBuy product={product} />
        </CardFooter>
      </Card>
    </div>
  );
}

export default DetailsPage;
