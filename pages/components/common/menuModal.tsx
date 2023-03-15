import React from "react";
import Link from "next/link";
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
  { path: "/", title: "Home" },
  { path: "/store", title: "Product" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];

function MenuModal() {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{
        height: 150,
      }}
      exit={{
        height: 0,
        transition: { delay: 0.7, duration: 0.3 },
      }}
      className="w-fit h-fit flex justify-center items-center bg-navGreen rounded-xl"
    >
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
        className="mx-5 h-full flex flex-col justify-around"
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
