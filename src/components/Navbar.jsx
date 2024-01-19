"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import avatar from "@/assets/images/image-avatar.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import Cart from "./Cart";
const Navbar = () => {
  const [isCartClicked, setIsCartClicked] = useState(false);

  const openCart = ()=>{
    setIsCartClicked(!isCartClicked)
  }


  const links = [
    {
      href: "#",
      title: "Collections",
    },
    {
      href: "#",
      title: "Men",
    },
    {
      href: "#",
      title: "Women",
    },
    {
      href: "#",
      title: "About",
    },
    {
      href: "#",
      title: "Contact",
    },
  ];
  return (
    <div className="flex items-center justify-between max-w-[1024px] border-b-[1px] mx-auto h-[80px] transition-all">
      {/* left */}

      <div className="flex gap-10 items-center">
        <div className="flex gap-2 items-center">
          <LuMenu className="sm:hidden h-7 w-7" />
          <Image src={logo}></Image>
        </div>
        <div className="hidden sm:flex gap-7 text-sm text-gray-400 h-[80px] ">
          {links.map((data, i) => (
            <Link
              key={i}
              className="flex items-center hover:border-b-[4px] hover:border-orange-400"
              href={data.href}
            >
              {data.title}
            </Link>
          ))}
        </div>
      </div>
      {/* rightt */}
      <div className="flex gap-7 items-center ">
        <div className="relative">
          <MdOutlineShoppingCart
          onClick={openCart}
            size={20}
            className="text-gray-400 cursor-pointer "
          />
          {isCartClicked && <Cart />}
        </div>
        <Image
          src={avatar}
          className="h-8 w-auto rounded-full ring-0 hover:ring-1 hover:ring-orange-400"
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
