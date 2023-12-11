"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Product } from "@/app/page";

export default async function Header() {
  //   const icons = {
  //     chevron: <ChevronDown fill="currentColor" size={16} />,
  //     scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  //     lock: <Lock className="text-success" fill="currentColor" size={30} />,
  //     activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
  //     flash: <Flash className="text-primary" fill="currentColor" size={30} />,
  //     server: <Server className="text-success" fill="currentColor" size={30} />,
  //     user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  //   };

  const fetchProducts = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products: Product[] = await fetchProducts.json();
  return (
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">TurboStore</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent "
                endContent={<IoIosArrowDown />}
                radius="sm"
                variant="light"
              >
                Categories
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          {products.map((i)=>(
          <DropdownMenu
          aria-label="ACME features"
          className="w-[340px]"
          itemClasses={{
            base: "gap-4",
          }}
        >
          <DropdownItem
            key="autoscaling"
            description="Men's clothing"
            //   startContent={icons.scale}
          >
            <Link href={`/category/${i.category}`}>+10 than Men's clothing</Link>
          </DropdownItem>
          <DropdownItem
            key="usage_metrics"
            description="Jewelery"
            //   startContent={icons.activity}
          >
            +11 than Jewelery
          </DropdownItem>
          <DropdownItem
            key="production_ready"
            description="Electronics"
            //   startContent={icons.flash}
          >
            +12 than Electronics
          </DropdownItem>
          <DropdownItem
            key="99_uptime"
            description="Women's clothing
            "
            //   startContent={icons.server}
          >
            +13 than Women's clothing
          </DropdownItem>
        </DropdownMenu>
          ))}

        </Dropdown>
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact-to-us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <div className="flex gap-4 items-center">
            <Button isIconOnly color="danger" aria-label="Like">
              <CiShoppingCart size={20} />
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
