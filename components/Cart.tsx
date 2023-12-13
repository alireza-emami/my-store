"use client";
import React, { useEffect } from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Product } from "@/app/page";
import { deleteCookie } from "cookies-next";
import { Relaod } from "@/app/action";

interface Prop {
  product: Product;
}
export default function Cart({ product  }: Prop) {
  return (
    <Card className=" m-5">
      <CardBody className="flex-row justify-between">
        <div>
          <p>{product.title}</p>
          <p>{product.category}</p>
        </div>
        <div className=" ">
          <Image src={product.image} className="w-32 h-36 " />
        </div>
      </CardBody>
      <CardFooter>
        <Button
          className=""
          color="danger"
          onPress={() => {
            deleteCookie(product.title);
            Relaod()
          }}
        >
          delete from cart
        </Button>
      </CardFooter>
    </Card>
  );
}
