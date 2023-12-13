"use client";
import { FC, useState } from "react";
import { Product } from "../app/page";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Image,
} from "@nextui-org/react";

interface Prop {
  product: Product;
}

const Details: FC<Prop> = ({ product }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <>
      <Button className="flex flex-1 " color={"danger"} onPress={onOpen}>
        Open Modal
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={"4xl"}
        className="bg-slate-900  "
      >
        <ModalContent>
          {(onClose: any) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                {product.title}
              </ModalHeader>
              <ModalBody className="flex flex-row justify-between">
                <div className="">
                  <p className="pb-5 w-[550px]">{product.description}</p>
                  <p className="pb-5">{product.category}</p>
                  <p className="pb-5">{product.rating.rate}</p>
                  <p className="pb-5">{product.price} $</p>
                  <Input
                    type="number"
                    className="w-14 "
                    value={quantity.toString()}
                    onChange={(e)=>{setQuantity(+e.target.value)}}
                  />
                </div>
                <Image
                  alt="NextUI Fruit Image with Zoom"
                  src={product.image}
                  className="w-64 h-72"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default Details;
