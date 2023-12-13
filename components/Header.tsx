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
  Input,
  Image,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaTshirt } from "react-icons/fa";
import { GiJewelCrown } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import { GiSkirt } from "react-icons/gi";

export default function Header() {
  const icons = {
    man: "../public/polo.png",
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  return (
    <div>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarBrand>
          <p className="font-bold text-inherit">TurboStore</p>
        </NavbarBrand>
        <Input className="h-10" type="Search" label="Search" />

        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            className="text-black"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
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
                startContent={<FaTshirt size={25} color={"blue"} />}
              >
                <Link className="text-black" href={`/category/men's clothing`}>
                  +10 than Men's clothing
                </Link>
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Jewelery"
                startContent={<GiJewelCrown size={25} color={"gold"} />}
              >
                <Link className="text-black" href={`/category/jewelery`}>
                  +11 than Jewelery
                </Link>
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="Electronics"
                startContent={<FcElectronics size={25} />}
              >
                <Link className="text-black" href={`/category/electronics`}>
                  +12 than Electronics
                </Link>
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Women's clothing
            "
                startContent={<GiSkirt size={25} color={"red"} />}
              >
                <Link
                  className="text-black"
                  href={`/category/women's clothing`}
                >
                  +13 than Women's clothing
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link className="text-black" href="/" aria-current="page">
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
                <Link className="text-white" href="/cart">
                  <CiShoppingCart size={20} />
                </Link>
              </Button>
            </div>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem className="flex justify-between items-start">
            <NavbarItem>
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
                    startContent={<FaTshirt size={25} color={"blue"} />}
                  >
                    <Link
                      className="text-black"
                      href={`/category/men's clothing`}
                    >
                      +10 than Men's clothing
                    </Link>
                  </DropdownItem>
                  <DropdownItem
                    key="usage_metrics"
                    description="Jewelery"
                    startContent={<GiJewelCrown size={25} color={"gold"} />}
                  >
                    <Link className="text-black" href={`/category/jewelery`}>
                      +11 than Jewelery
                    </Link>
                  </DropdownItem>
                  <DropdownItem
                    key="production_ready"
                    description="Electronics"
                    startContent={<FcElectronics size={25} />}
                  >
                    <Link className="text-black" href={`/category/electronics`}>
                      +12 than Electronics
                    </Link>
                  </DropdownItem>
                  <DropdownItem
                    key="99_uptime"
                    description="Women's clothing
            "
                    startContent={<GiSkirt size={25} color={"red"} />}
                  >
                    <Link
                      className="text-black"
                      href={`/category/women's clothing`}
                    >
                      +13 than Women's clothing
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavbarItem className="pb-2">
                <Link className="text-black" href="/" aria-current="page">
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#">
                  Contact-to-us
                </Link>
              </NavbarItem>
            </NavbarItem>

            <NavbarItem>
              <div className="flex gap-4 items-center">
                <Button isIconOnly color="danger" aria-label="Like">
                  <Link className="text-white" href="/cart">
                    <CiShoppingCart size={20} />
                  </Link>
                </Button>
              </div>
            </NavbarItem>
          </NavbarMenuItem>
        </NavbarMenu>
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
    </div>
  );
}
