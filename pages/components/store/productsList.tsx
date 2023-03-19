import React from "react";
import urlFor from "@/lib/urlFor";
import Image from "next/image";

function ProductsList({ products }: any) {
  return (
    <div className="flex justify-center">
      <div className="mx-5 w-full grid productGrid pb-5">
        {products?.map((product: any) => (
          <div
            key={product.id}
            className="relative rounded-xl bg-gray-100 md:w-80 flex justify-around md:flex-col items-center md:justify-center"
          >
            <div className="px-2 py-4 w-full space-y-2">
              <div className="relative w-72 md:w-64 h-72 md:h-64 object-cover mx-auto rounded-lg overflow-hidden">
                <Image
                  src={urlFor(product.image[0]).url()}
                  alt="product image"
                  fill
                  className="object-cente w-full"
                />
              </div>
              <div className="space-y-2 text-center md:text-left mx-5">
                <h1 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h1>
                <div className="flex justify-between max-w-[16rem] mx-auto">
                  <button className="bg-red-500 px-2 py-1 rounded-md text-white font-bold">
                    Buy Now
                  </button>
                  <h1 className="font-bold text-gray-500">{product.price}$</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
