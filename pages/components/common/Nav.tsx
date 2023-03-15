import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import MenuModal from "./menuModal";
import { AnimatePresence } from "framer-motion";

const menuLinks = [
  { path: "/", title: "home" },
  { path: "/", title: "product" },
  { path: "/", title: "about" },
  { path: "/", title: "contact" },
];

function Nav() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  const handleMenuModal = () => {
    menuModalOpen ? setMenuModalOpen(false) : setMenuModalOpen(true);
  };
  return (
    <div className="mx-5 pt-5 z-50 relative">
      <div className="px-5 bg-navGreen h-16 flex justify-between items-center rounded-xl">
        <div className="w-12 md:w-16">
          <Link href={"/"}>
            <Image
              src={"/logo/logo.png"}
              alt="logo-koffee store"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div
          onClick={handleMenuModal}
          className="text-3xl text-textGreen1 hover:scale-110 cursor-pointer duration-150 md:hidden"
        >
          {menuModalOpen ? <IoClose /> : <TiThMenu />}
        </div>
        <div className="hidden md:flex space-x-8">
          {menuLinks.map(({ path, title, id }: any) => (
            <div key={id} className="">
              <Link href={path}>{title}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-24 md:hidden">
        {menuModalOpen ? (
          <AnimatePresence>
            <MenuModal />
          </AnimatePresence>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Nav;
