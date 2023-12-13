"use client";
import { Input } from "@nextui-org/react";
import { FC, useState } from "react";
interface Prop {
  className: string;
  placeholder: string;
  type: string;
}

const CInput: FC<Prop> = ({ className, placeholder, type }) => {
const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Input
        value={quantity.toString()}
        onChange={(e) => {
          setQuantity(+e.target.value);
        }}
        type={type}
        className={className}
        placeholder={placeholder}
      />
    </>
  );
};

export default CInput;
