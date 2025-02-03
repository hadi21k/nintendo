"use client"
import { Coins, Truck } from "lucide-react";
import Link from "next/link";
import React from "react";

const DetailedNavbar = () => {
  return (
    <div className="border-y h-12 p-3 bg-white-gray">
      <div className="max-w-4xl m-auto">
        <div className="flex gap-6 justify-center items-center">
          <div className="flex items-center gap-4 max-xl:hidden">
            <Truck className="text-main" />
            <div>
              <span className="font-medium">Free shipping</span>
              on orders over $50 or more.{" "}
              <Link
                href="/"
                className="font-medium underline underline-offset-2"
              >
                Restrictions apply.
              </Link>
            </div>
          </div>
          <div className="w-[0.5px] max-xl:hidden h-7 bg-black" />
          <div className="flex items-center gap-4">
            <Coins className="text-main" />
            <div>
              Earn{" "}
              <Link
                href="/"
                className="underline underline-offset-2 font-medium"
              >
                My Nintendo Points
              </Link>{" "}
              on digital games
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedNavbar;
