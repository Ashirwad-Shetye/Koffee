import React from "react";
import Image from "next/image";
import Nav from "./components/common/Nav";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import Filter from "./components/store/filter";

function Store({ products }: any) {
  return (
    <main className="h-fit m-0">
      <div className="max-w-[1600px] mx-auto">
        <Nav />
        <div className="mt-5">
          <Filter />
        </div>
        {/* <div>
          {products?.map((product: any) => (
            <div key={product.id}>
              <div className="relative w-full h-96">
                <Image
                  src={urlFor(product.image[0]).url()}
                  alt="product image"
                  height={400}
                  width={400}
                />
              </div>
            </div>
          ))}
        </div> */}
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
