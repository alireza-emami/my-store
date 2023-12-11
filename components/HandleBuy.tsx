"use client";
import { FC } from "react";
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

const HandleBuy: FC<Prop> = ({ product }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button className="flex flex-1 " color={'danger'} onPress={onOpen}>Buy</Button>

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
                  <Input type="number" placeholder="0" className="w-14 " />
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
export default HandleBuy;
