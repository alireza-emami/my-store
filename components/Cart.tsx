"use client";
import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Product } from "@/app/page";
import { deleteCookie } from "cookies-next";

interface Prop {
  product: Product;
}
export default function Cart({ product }: Prop) {
  return (
    <Card className="">
      <CardBody className="flex-row justify-between">
        <div>
          <p>{product.title}</p>
          <p>{product.category}</p>
        </div>
        <div className="flex items-center justify-center ">
          <Image src={product.image} className="w-24 h-24 " />
        </div>
      </CardBody>
      <CardFooter>
        <Button
          onPress={() => {
            deleteCookie(product.title);
          }}
        >
          delete from cart
        </Button>
      </CardFooter>
    </Card>
  );
}
