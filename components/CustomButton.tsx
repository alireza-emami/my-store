"use client";
import { Product } from "@/app/page";
import { Button } from "@nextui-org/react";
import { setCookie } from "cookies-next";
import { FC } from "react";
interface Prop {
  product: Product;
  className: string;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
    quantity:number
}
const CButton: FC<Prop> = ({ product, className, color , quantity }) => {
  return (
    <>
      <Button
        className={className}
        color={color}
        onPress={() => {
          setCookie(`${quantity}`, `${product.id}`);
        }}
      >
        Buy
      </Button>
    </>
  );
};

export default CButton;
