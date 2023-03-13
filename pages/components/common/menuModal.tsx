import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const menuLinks = [
  { path: "/", title: "home" },
  { path: "/", title: "product" },
  { path: "/", title: "about" },
  { path: "/", title: "contact" },
];

function MenuModal({ setMenuModalOpen }: any) {
  const handleClose = () => {
    setMenuModalOpen(false);
  };
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{
        height: 400,
      }}
      exit={{
        height: 0,
        transition: { delay: 0.7, duration: 0.3 },
      }}
      className="absolute top-0 w-screen bg-white h-fit shadow-xl"
    >
      <div className="px-5 flex items-center h-20 justify-between">
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
          onClick={handleClose}
          className="text-4xl text-textBlue1 hover:scale-110 cursor-pointer duration-150"
        >
          <IoClose />
        </div>
      </div>
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
        className="mx-5 my-10 space-y-10 text-xl"
      >
        {menuLinks.map(({ path, title, id }: any) => (
          <motion.div variants={itemVariants} key={id}>
            <Link href={path}>{title}</Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default MenuModal;
