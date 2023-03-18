import React from "react";
import Nav from "./components/common/Nav";
import { client } from "@/lib/sanity.client";

function Store({ products }: any) {
  return (
    <main className="h-fit m-0">
      <div className="max-w-[1600px] mx-auto">
        <Nav />
        <div>{products?.map((product: any) => console.log(product))}</div>
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const productQuery = `*[_type == "product"]`;
  const products = await client.fetch(productQuery);
  return {
    props: { products },
  };
};
export default Store;
