import Image from "next/image";
import React from "react";
import AnimatedHeart from "../ui/animated-heart";
import Link from "next/link";

const SearchInputDetails = ({ topics, products }) => {
  return (
    <>
      <div className="space-y-1">
        <h1>Trending topics</h1>
        <ul>
          {topics.map((topic, index) => (
            <li key={index} className="py-0.5 text-main hover:text-main/80">
              <Link href={topic.url}>
                <span>{topic.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* products */}
      <div className="space-y-2">
        <h1>Top store products</h1>

        <div className="grid md:grid-cols-2 max-w-4xl gap-y-10 gap-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg max-h-24 max-w-96 flex space-x-4 group"
            >
              <Link href={product.url} className="relative">
                <div className="absolute w-full h-full inset-0 bg-black/30 transition-opacity group-hover:opacity-100 duration-300 opacity-0" />
                <Image
                  src={product.image}
                  alt={product.title}
                  width={230}
                  height={230}
                  className="h-full rounded-md object-fill"
                />
              </Link>
              <div
                key={index}
                className="flex flex-col justify-between gap-2 w-full text-sm font-medium text-wrap py-2"
              >
                <Link
                  className="group-hover:text-main transition-colors duration-300"
                  href={product.url}
                >
                  {product.title}
                </Link>
                <div className="flex items-center justify-between pr-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-0.5 h-4 bg-main" />
                    <div>Nintendo Switch</div>
                  </div>
                  <div className="w-9 h-9">
                    <AnimatedHeart />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchInputDetails;
