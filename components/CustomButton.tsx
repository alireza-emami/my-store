"use client";
import { Relaod } from "@/app/action";
import { Product } from "@/app/page";
import { Button } from "@nextui-org/react";
import { setCookie } from "cookies-next";
import { useRouter } from 'next/navigation';

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
  quantity: number;
}
const CButton: FC<Prop> = ({ product, className, color, quantity}) => {
  const router = useRouter()
  return (
    <Button
      className={className}
      color={color}
      onPress={() => {
        setCookie(`${product.id}`, `${quantity}`);
        Relaod();
        router.push("/cart");
      }}
    >
      Buy
    </Button>
  );
};

export default CButton;
