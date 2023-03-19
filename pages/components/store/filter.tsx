import React from "react";

function Filter() {
  return (
    <div className="mx-5 bg-slate-200 rounded-lg h-fit">
      <div>
        <h1>Category</h1>
        <div></div>
      </div>
      <div>
        <h1>Color</h1>
        <div className="space-x-1">
          <button className="w-6 h-6 rounded-full bg-red-500"></button>
          <button className="w-6 h-6 rounded-full bg-yellow-500"></button>
          <button className="w-6 h-6 rounded-full bg-orange-500"></button>
          <button className="w-6 h-6 rounded-full bg-green-500"></button>
          <button className="w-6 h-6 rounded-full bg-blue-500"></button>
          <button className="w-6 h-6 rounded-full bg-black"></button>
          <button className="w-6 h-6 rounded-full bg-white"></button>
        </div>
      </div>
      <div>
        <h1>Price Range</h1>
        <div className="flex flex-col space-y-1">
          <button aria-label="0$ to 10$">0$ to 10$</button>
          <button aria-label="10$ to 50$">10$ to 50$</button>
          <button aria-label="50$ to 100$">50$ to 100$</button>
          <button aria-label="100$ and more">100$ and more</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
