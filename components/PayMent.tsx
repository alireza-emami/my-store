import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { Product } from "@/app/page";

interface Prop {
  products: (Product & {
    item: {
      name: string;
      value: string;
    };
  })[];
  quantity: number;
}
export default function PayMent({ products }: Prop) {
  let totalPrice = 0;
  for (const product of products) {
    totalPrice += product.price * +product.item.value;
  }
  return (
    <Card className="fixed bottom-5 right-20 left-20 ">
      <CardBody>
        <div className="flex justify-between p-5 pr-16 pl-16 ">
          <p>Total Price : {totalPrice} $</p>
          <p>Total Products : {products.length}</p>
        </div>
        <Button>PayMent</Button>
      </CardBody>
    </Card>
  );
}
