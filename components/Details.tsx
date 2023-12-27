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
import { IoMdStar } from "react-icons/io";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";

interface Prop {
  product: Product;
  updatedQuantity: number;
}
const Details: FC<Prop> = ({ product, updatedQuantity }) => {
  const [quantity, setQuantity] = useState(updatedQuantity);

  return (
    <div>
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
            <div className="flex items-center">
              <h3>Count :</h3>

              <p className="p-2">{product.rating.count}</p>
              <RiAccountCircleFill size={25} />
            </div>

            <div className="flex items-center">
              <h3>Rate :</h3>
              <p className="p-2">{product.rating.rate}</p>
              <div className="bg-black p-1 rounded-full">
                <IoMdStar color="yellow" />
              </div>
            </div>

            <div className="flex items-center">
              <h3>Price :</h3>
              <p className="p-2">{product.price}</p>
              <AiTwotoneDollarCircle color="green" size={25} />
            </div>

            <div className="flex items-center">
              <h3>Quantity :</h3>
              <Input
                type="number"
                placeholder="0"
                className="w-14 m-1"
                min={"1"}
                max={"5"}
                value={quantity.toString()}
                onChange={(e) => {
                  setQuantity(+e.target.value);
                }}
              />
            </div>
          </div>
          <Image
            alt={product.title}
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
      {/* <div>
        <SameProducts category={product.category} />
      </div> */}
    </div>
  );
};

export default Details;
