"use client";
import { useRef, useState } from "react";
import { useAnimate } from "framer-motion";
import { HeroBreadCrumb } from "./HeroBreadCrumb";
import ImageGallery from "./ImageGallery";
import Image from "next/image";
import HeroDetails from "./HeroDetails";
import ScrolledImages from "./ScrolledImages";

const images = [
  "https://shadowindali.github.io/Nintendo/main1.avif",
  "https://shadowindali.github.io/Nintendo/main2.avif",
  "https://shadowindali.github.io/Nintendo/main3.avif",
  "https://shadowindali.github.io/Nintendo/main4.avif",
  "https://shadowindali.github.io/Nintendo/main6.avif",
  "https://shadowindali.github.io/Nintendo/main7.avif",
];

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollHeroContainerRef = useRef(null);
  const [_, animate] = useAnimate();

  const handleImageChange = async (currentIndex, nextIndex, containerRef) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const container = containerRef.current;
    const images = container.querySelectorAll(".scroll-image");
    const currentImage = images[currentIndex];

    await animate(currentImage, { scale: 0.8 }, { duration: 0.3 });
    console.log(currentIndex, nextIndex);
    images[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    await new Promise((resolve) => setTimeout(resolve, 500));

    const newImage = images[nextIndex];
    await animate(newImage, { scale: 1 }, { duration: 0.3 });

    setActiveImage(nextIndex);
    setIsAnimating(false);
  };

  return (
    <div className="min-h-[600px] bg-[#d6f0fa] mx-auto flex justify-center">
      <div className="max-w-[1250px] h-full p-8 xl:translate-y-10 shadow-lg bg-white w-full xl:rounded-xl">
        <HeroBreadCrumb />
        <div className="flex max-md:flex-col mt-4 gap-10">
          <div className="relative flex flex-col space-y-4">
            <ScrolledImages
              handleImageChange={handleImageChange}
              images={images}
              scrollHeroContainerRef={scrollHeroContainerRef}
              activeImage={activeImage}
            />

            <ImageGallery
              images={images}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
              handleImageChange={handleImageChange}
              scrollHeroContainerRef={scrollHeroContainerRef}
            />

            <div className="flex space-x-4">
              <Image
                src="https://nintendo-khodor.surge.sh/E.svg"
                alt="E"
                width={40}
                height={40}
              />
              <div className="max-w-sm text-gray-400">
                <h1 className="text-xs border-b py-1 border-black">
                  Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                  Gambling, Mild Language, Mild Blood
                </h1>
                <h1 className="text-xs py-1">Users Interact</h1>
              </div>
            </div>
          </div>
          <HeroDetails />
        </div>
      </div>
    </div>
  );
};

export default Hero;
