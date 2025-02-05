import React from "react";
import AnimatedHeart from "./ui/animated-heart";
import Image from "next/image";

const Game = ({ item }) => {
  return (
    <div className="border w-72 flex flex-col group space-y-4 rounded-xl h-80 item">
      <Image
        src={item.image}
        alt={item.title}
        width={450}
        height={450}
        className="w-full transition-transform duration-300 group-hover:-translate-y-12 h-1/2 object-cover rounded-xl flex-shrink-0"
      />

      <div className="h-3/4 px-4 flex justify-between flex-col">
        <div>
          <h1 className="text-lg group-hover:text-main font-semibold">
            {item.title}
          </h1>
          <p className="text-sm text-gray-500">{item.date}</p>
        </div>

        <div className="flex items-center space-x-4">
          {item.salePrice > 0 ? (
            <div className="space-y-3">
              <span className="bg-main p-1 font-medium text-xs rounded-xl text-white">
                Sale ends in {item.salesEndIn}
              </span>
              <div className="flex items-center space-x-4">
                <span className="text-red-500 font-bold text-lg">
                  ${item.salePrice.toFixed(2)}
                </span>
                <span className="text-gray-500 text-xs line-through text-md">
                  ${item.price.toFixed(2)}
                </span>
                <div className="relative flex items-center bg-main text-white text-sm font-semibold p-1">
                  <div className="absolute left-0 top-0 h-full -translate-x-full border-r-8 border-r-main border-y-[12px] border-y-transparent"></div>
                  -{item.salesPercentage}%
                </div>
              </div>
            </div>
          ) : (
            <span className="text-black font-bold text-lg">
              ${item.price.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-1 items-center">
            <div className="w-0.5 h-5 bg-main" />
            <h1 className="text-sm text-gray-700">Nintendo Switch</h1>
          </div>
          <div className="w-10 h-10">
            <AnimatedHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
