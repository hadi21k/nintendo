import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = ({
  images,
  setActiveImage,
  activeImage,
  handleImageChange,
  scrollHeroContainerRef,
}) => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const containerRef = useRef(null);

  const checkScrollPosition = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    // when activeImage change scroll to the active image
    const container = containerRef.current;
    if (!container) return;

    const firstImage = container.querySelector("img");
    if (!firstImage) return;

    const imageStyle = window.getComputedStyle(firstImage);
    const marginRight = parseFloat(imageStyle.marginRight);
    const imageWidth = firstImage.offsetWidth;
    const scrollAmount = (imageWidth + marginRight) * activeImage;

    container.scrollTo({
      left: scrollAmount,
      block: "center",
      behavior: "smooth",
    });
  }, [activeImage]);

  const goToPrevious = () => {
    const container = containerRef.current;
    if (!container) return;

    const firstImage = container.querySelector("img");
    if (!firstImage) return;

    const imageStyle = window.getComputedStyle(firstImage);
    const marginRight = parseFloat(imageStyle.marginRight);
    const imageWidth = firstImage.offsetWidth;
    const scrollAmount = imageWidth + marginRight;

    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const goToNext = () => {
    const container = containerRef.current;
    if (!container) return;

    const firstImage = container.querySelector("img");
    if (!firstImage) return;

    const imageStyle = window.getComputedStyle(firstImage);
    const marginRight = parseFloat(imageStyle.marginRight);
    const imageWidth = firstImage.offsetWidth;
    const scrollAmount = imageWidth + marginRight;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleImageClick = (index) => {
    if (index === activeImage) return;

    handleImageChange(activeImage, index, scrollHeroContainerRef);

    setActiveImage(index);

    const container = containerRef.current;
    const firstImage = container.querySelector("img");
    if (!firstImage) return;

    const imageStyle = window.getComputedStyle(firstImage);
    const marginRight = parseFloat(imageStyle.marginRight);
    const imageWidth = firstImage.offsetWidth;
    const scrollAmount = (imageWidth + marginRight) * index;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={`flex overflow-hidden w-full space-x-4`}
        onScroll={checkScrollPosition}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={index}
            onClick={() => handleImageClick(index)}
            className={`w-36 cursor-pointer h-14 object-cover rounded-xl flex-shrink-0 ${
              index === activeImage ? "border-2 border-main" : ""
            }`}
          />
        ))}
      </div>

      {showLeftButton && (
        <button
          onClick={goToPrevious}
          className="absolute w-16 grid place-items-center left-0 rounded-xl top-0 bottom-0 text-white-gray transition-all duration-300 bg-black/40 hover:bg-black/60"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
      )}

      {showRightButton && (
        <button
          onClick={goToNext}
          className="absolute w-16 grid place-items-center rounded-xl right-0 top-0 bottom-0 text-white-gray transition-all duration-300 bg-black/40 hover:bg-black/60"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      )}
    </div>
  );
};

export default ImageGallery;
