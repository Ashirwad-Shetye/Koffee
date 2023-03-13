import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import MenuModal from "./menuModal";
import { AnimatePresence } from "framer-motion";

interface Props {
  setMenuModalOpen: any;
}

function Nav() {
  const handleMenuModal = () => {
    setMenuModalOpen(true);
  };
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  return (
    <div className="relative">
      <div className="px-5 h-20 flex justify-between items-center">
        <div className="w-16">
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
          className="text-3xl text-textBlue1 hover:scale-110 cursor-pointer duration-150"
        >
          <TiThMenu />
        </div>
      </div>
      {menuModalOpen ? (
        <AnimatePresence>
          <MenuModal setMenuModalOpen={setMenuModalOpen} />
        </AnimatePresence>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Nav;
