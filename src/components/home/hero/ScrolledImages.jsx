import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const ScrolledImages = ({
  handleImageChange,
  images,
  scrollHeroContainerRef,
  activeImage,
}) => {
  return (
    <div className="h-[380px] w-full max-w-8xl relative overflow-x-auto group">
      <div
        ref={scrollHeroContainerRef}
        className="max-w-6xl w-full flex overflow-x-hidden h-full scroll-smooth snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={index}
            className="w-full h-full object-cover flex-shrink-0 rounded-xl scroll-image"
            style={{ scale: index === activeImage ? 1 : 0.9 }}
          />
        ))}
      </div>

      <button
        onClick={() =>
          handleImageChange(
            activeImage,
            activeImage === 0 ? images.length - 1 : activeImage - 1,
            scrollHeroContainerRef
          )
        }
        className="absolute max-md:hidden left-4 top-1/2 hover:scale-150 opacity-0 group-hover:opacity-100 -translate-y-1/2 text-white transition-all duration-300"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>

      <button
        onClick={() =>
          handleImageChange(
            activeImage,
            activeImage === images.length - 1 ? 0 : activeImage + 1,
            scrollHeroContainerRef
          )
        }
        className="absolute max-md:hidden right-4 top-1/2 hover:scale-150 opacity-0 group-hover:opacity-100 -translate-y-1/2 text-white transition-all duration-300"
      >
        <ChevronRight className="w-12 h-12" />
      </button>
    </div>
  );
};

export default ScrolledImages;
