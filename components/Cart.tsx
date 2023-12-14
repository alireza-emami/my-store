"use client";
import React, { useEffect } from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Product } from "@/app/page";
import { deleteCookie } from "cookies-next";
import { Relaod } from "@/app/action";

interface Prop {
  product: Product & {
    item: {
      name: string;
      value: string;
    };
  };
}
export default function Cart({ product }: Prop) {
  return (
    <Card className=" m-5 mr-20 ml-20  ">
      <CardBody className="flex-row justify-between">
        <div>
          <p>Title : {product.title}</p>
          <p>Category : {product.category}</p>
          <p>Quantity : {product.item.value}</p>
          <p>Price : {product.price * +product.item.value}</p>
        </div>
        <div className="">
          <Image src={product.image} className="w-32 h-36 z-0" />
        </div>
      </CardBody>
      <CardFooter>
        <Button
          className=""
          color="danger"
          onClick={() => {
            deleteCookie(`${product.id}`);
            Relaod();
          }}
        >
          delete from cart
        </Button>
      </CardFooter>
    </Card>
  );
}
