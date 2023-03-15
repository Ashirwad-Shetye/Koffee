import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="grid grid-rows-6 lg:grid-rows-none lg:grid lg:grid-cols-5 mx-5 mt-5 gap-5">
      <div className="h-fit grid grid-rows-2 row-span-4 lg:row-span-6 lg:col-span-3">
        <div className="bg-gray-100 rounded-xl min-h-[200px] h-[40vh] max-h-fit flex justify-center items-center row-span-1">
          <div className="p-5 space-y-5">
            <div className="text-4xl font-bold">
              Find Your
              <br /> Trailblazing Style With <br /> Our New Collection
            </div>
            <p className="text-gray-500">
              Shop Our Latest Collection And Discover The Perfect Blend Of
              Comfort And Performance For Your Hiking Needs. Find Your New
              Must-Have Apparels Of The Season.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-dense grid-rows-2 md:grid-rows-none md:grid-cols-2 mt-5 gap-5 row-span-1">
          <div className="relative rounded-xl h-full cursor-pointer select-none overflow-hidden">
            <div className="bg-cover bg-center bg-hero3 h-full hover:scale-105 duration-150"></div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent h-28 flex items-center">
              <div className="mx-5 text-white space-y-2">
                <h2 className="text-xl font-bold">Season Specials</h2>
                <p className="text-sm text-gray-300">
                  Experience the Latest Fashion Trends at Our Season Special
                  collection!
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl h-full cursor-pointer select-none overflow-hidden">
            <div className="bg-cover hover:bg-scale-105 bg-bottom bg-hero2 h-full hover:scale-105 duration-150"></div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent h-28 flex items-center">
              <div className="mx-5 text-white space-y-2">
                <h2 className="text-xl font-bold">Step into Challenge</h2>
                <p className="text-sm text-gray-300">
                  Discover Our Latest Collection of Practical and Comfortable
                  Clothes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-2 lg:row-span-6 lg:col-span-2 relative h-full rounded-xl cursor-pointer select-none overflow-hidden">
        <div className="bg-cover hover:bg-scale-105 bg-center bg-hero1 h-full hover:scale-105 duration-150"></div>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent h-28 flex items-center">
          <div className="mx-5 text-white space-y-2">
            <h2 className="text-xl font-bold">Snacks for Recharge</h2>
            <p className="text-sm text-gray-300">
              Grab Our Best Protien bars filled with Energy and in Multiple
              Flavors for Your Next Hike!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
