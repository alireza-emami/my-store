"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Input,
} from "@nextui-org/react";
import CButton from "./CustomButton";
import { Product } from "@/app/page";
import { FC, useState } from "react";

interface Prop {
  product: Product;
  updatedQuantity: number;
}
const Details: FC<Prop> = ({ product ,updatedQuantity }) => {
  const [quantity, setQuantity] = useState(updatedQuantity);

  return (
    <Card className="m-12  ">
      <CardHeader className="flex gap-3 text-center justify-center">
        <div className="flex flex-col">
          <p className="text-md">{product.title}</p>
          <p className="text-small text-default-500">{product.category}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col-reverse justify-between items-center md:flex-row ">
        <div>
          <p className=" md:w-[550px] p-2">{product.description}</p>
          <p className="p-2">{product.rating.count}</p>
          <p className="p-2">{product.rating.rate}</p>
          <p className="p-2">{product.price}</p>
          <Input
            type="number"
            placeholder="0"
            className="w-14 "
            value={quantity.toString()}
            onChange={(e) => {
              setQuantity(+e.target.value);
            }}
          />
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
        <CButton
          product={product}
          className="flex flex-1 "
          color="danger"
          quantity={quantity}
        />
      </CardFooter>
    </Card>
  );
};

export default Details;
