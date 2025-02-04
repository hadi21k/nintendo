"use client";
import { useRef, useState } from "react";
import { AnimatePresence, useAnimate, motion } from "framer-motion";
import { HeroBreadCrumb } from "./HeroBreadCrumb";
import ImageGallery from "./ImageGallery";
import Image from "next/image";
import HeroDetails from "./HeroDetails";
import ScrolledImages from "./ScrolledImages";
import { IoMdCloseCircle } from "react-icons/io";
import { useBodyOverflow } from "@/hooks/useBodyOverflow";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [expandedActiveImage, setExpandedActiveImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imagesExpanded, setImagesExpanded] = useState(false);
  const scrollHeroContainerRef = useRef(null);
  const scrollExpandedContainerRef = useRef(null);
  const [_, animate] = useAnimate();

  useBodyOverflow(imagesExpanded);

  const handleImageChange = async (
    currentIndex,
    nextIndex,
    containerRef,
    isExpanded
  ) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const container = containerRef.current;
    let images;
    if (isExpanded)
      images = container.querySelectorAll(".scroll-expanded-image");
    else images = container.querySelectorAll(".scroll-image");
    const currentImage = images[currentIndex];

    console.log(currentIndex, nextIndex);
    console.log(container);
    console.log(images);
    await animate(currentImage, { scale: 0.9 }, { duration: 0.3 });
    images[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    await new Promise((resolve) => setTimeout(resolve, 500));

    const newImage = images[nextIndex];
    await animate(newImage, { scale: 1 }, { duration: 0.2 });

    if (isExpanded) setExpandedActiveImage(nextIndex);
    else setActiveImage(nextIndex);
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
              setImagesExpanded={setImagesExpanded}
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

      {/* add to custom component */}
      <AnimatePresence>
        {imagesExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => {
              if (isAnimating) return;
              setImagesExpanded(false);
              setExpandedActiveImage(0);
            }}
            className="fixed z-[4000] min-w-full bg-black/40 inset-0 flex items-center justify-center backdrop-filter backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative xl:w-2/3 w-full h-3/4 justify-center items-center flex flex-col space-y-6"
            >
              <div className="absolute top-2 right-2 z-20">
                <IoMdCloseCircle
                  onClick={() => {
                    if (isAnimating) return;
                    setImagesExpanded(false);
                    setExpandedActiveImage(0);
                  }}
                  className="text-4xl cursor-pointer text-white"
                />
              </div>

              <div
                ref={scrollExpandedContainerRef}
                className="w-[900px] flex overflow-hidden group"
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-[900px] h-[500px] flex-shrink-0 scroll-expanded-image"
                    style={{ scale: index === expandedActiveImage ? 1 : 0.9 }}
                  >
                    <Image
                      src={image}
                      alt={`Image ${index}`}
                      layout="fill"
                      className="rounded-xl"
                    />
                  </div>
                ))}{" "}
                <button
                  onClick={() =>
                    handleImageChange(
                      expandedActiveImage,
                      expandedActiveImage === 0
                        ? images.length - 1
                        : expandedActiveImage - 1,
                      scrollExpandedContainerRef,
                      true
                    )
                  }
                  className="absolute left-4 top-1/2 hover:scale-150 opacity-0 group-hover:opacity-100 -translate-y-1/2 text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-12 h-12" />
                </button>
                <button
                  onClick={() =>
                    handleImageChange(
                      expandedActiveImage,
                      expandedActiveImage === images.length - 1
                        ? 0
                        : expandedActiveImage + 1,
                      scrollExpandedContainerRef,
                      true
                    )
                  }
                  className="absolute right-4 top-1/2 hover:scale-150 opacity-0 group-hover:opacity-100 -translate-y-1/2 text-white transition-all duration-300"
                >
                  <ChevronRight className="w-12 h-12" />
                </button>
              </div>
              <ImageGallery
                images={images}
                activeImage={expandedActiveImage}
                setActiveImage={setExpandedActiveImage}
                handleImageChange={handleImageChange}
                scrollHeroContainerRef={scrollExpandedContainerRef}
                isExpanded={true}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
