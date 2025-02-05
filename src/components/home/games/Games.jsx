"use client";
import Game from "@/components/Game";
import AnimatedHeart from "@/components/ui/animated-heart";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const items = [
  {
    image: "https://shadowindali.github.io/Nintendo/ooblet.avif",
    title: "Ooblets",
    date: "July 15, 2020",
    price: 49.99,
    salePrice: 0,
    salesPercentage: 0,
  },
  {
    image: "https://shadowindali.github.io/Nintendo/potionpermet.avif",
    title: "Potion Permit",
    date: "July 15, 2020",
    isFree: false,
    price: 49.99,
    salePrice: 0,
    salesPercentage: 0,
  },
  {
    image: "https://shadowindali.github.io/Nintendo/cozygrove.avif",
    title: "My time at Portia",
    date: "July 15, 2020",
    isFree: false,
    price: 49.99,
    salePrice: 0,
    salesPercentage: 0,
  },
  {
    image: "https://shadowindali.github.io/Nintendo/animalcrossing.avif",
    title: "Bear and Breakfast",
    date: "July 15, 2020",
    isFree: false,
    price: 49.99,
    salePrice: 0,
    salesPercentage: 0,
  },
  {
    image: "https://shadowindali.github.io/Nintendo/mytime.avif",
    title: "Wytchwood",
    date: "July 15, 2020",
    isFree: false,
    price: 49.99,
    salePrice: 0,
    salesPercentage: 0,
  },
  {
    image: "https://shadowindali.github.io/Nintendo/ooblet.avif",
    title: "Fae Farm",
    date: "July 15, 2020",
    isFree: false,
    price: 49.99,
    salePrice: 0,
    salesPercentage: 0,
  },
  {
    image: "https://shadowindali.github.io/Nintendo/potionpermet.avif",
    title: "Garden Story",
    date: "July 15, 2020",
    isFree: false,
    price: 49.99,
    salePrice: 0,
    salesPercentage: 0,
  },
  {
    image: "https://shadowindali.github.io/Nintendo/cozygrove.avif",
    title: "Littlewood",
    date: "July 15, 2020",
    isFree: false,
    price: 44.99,
    salePrice: 29.99,
    salesPercentage: 33,
    salesEndIn: "2 days",
  },
  {
    image: "https://shadowindali.github.io/Nintendo/animalcrossing.avif",
    title: "DRAGON QUEST BUILDERS 2",
    date: "July 15, 2020",
    isFree: true,
    price: 19.99,
  },
  {
    image: "https://shadowindali.github.io/Nintendo/mytime.avif",
    title: "Let's Build a Zoo",
    date: "July 15, 2020",
    isFree: false,
    price: 49.99,
    salePrice: 0,
    salesPercentage: 0,
  },
  {
    image: "https://shadowindali.github.io/Nintendo/ooblet.avif",
    title: "Cat Cafe Manager",
    date: "July 15, 2020",
    isFree: false,
    price: 19.99,
    salePrice: 11.99,
    salesPercentage: 40,
    salesEndIn: "2 days",
  },
  {
    image: "https://shadowindali.github.io/Nintendo/potionpermet.avif",
    title: "Moonstone Island",
    date: "July 15, 2020",
    isFree: false,
    price: 19.99,
    salePrice: 14.99,
    salesPercentage: 25,
    salesEndIn: "2 days",
  },
];

const Games = () => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const containerRef = useRef(null);

  const checkScrollPosition = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, []);

  const calculateScrollAmount = () => {
    const container = containerRef.current;
    if (!container) return 0;

    const firstItem = container.querySelector(".item");
    if (!firstItem) return 0;

    const nextSibling = firstItem.nextElementSibling;
    let spacing = 0;

    if (nextSibling) {
      const nextStyle = window.getComputedStyle(nextSibling);
      spacing = parseFloat(nextStyle.marginLeft);
    }

    return firstItem.offsetWidth + spacing;
  };

  const goToPrevious = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = calculateScrollAmount();
    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const goToNext = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = calculateScrollAmount();
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <div className="relative flex flex-col space-y-10 md-container">
        <h1 className="text-3xl font-medium">More like this</h1>
        <div
          ref={containerRef}
          onScroll={checkScrollPosition}
          className="h-96 px-4 overflow-x-hidden"
        >
          <div className="flex w-max h-full space-x-4">
            {items.map((item, index) => (
              <Game key={index} item={item} />
            ))}
          </div>
        </div>
        {showLeftButton && (
          <button
            onClick={goToPrevious}
            className="absolute w-16 grid place-items-center left-0 rounded-xl top-0 bottom-0 text-white-gray transition-all duration-300 bg-black/40 hover:bg-black/40"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
        )}
        {showRightButton && (
          <button
            onClick={goToNext}
            className="absolute w-16 grid place-items-center rounded-xl right-0 top-0 bottom-0 text-white-gray transition-all duration-300 bg-black/40 hover:bg-black/40"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        )}{" "}
      </div>
    </div>
  );
};

export default Games;
