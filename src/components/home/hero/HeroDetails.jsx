import Image from "next/image";
import { useEffect, useRef } from "react";
import AnimatedButton from "@/components/ui/animated-button";
import { Download } from "lucide-react";
import AnimatedHeart from "@/components/ui/animated-heart";
import { useGlobal } from "@/context/GlobalContext";

const HeroDetails = () => {
  const downloadButtonRef = useRef(null);
  const { updateGlobalState } = useGlobal();

  useEffect(() => {
    const handleScroll = () => {
      if (!downloadButtonRef.current) return;

      const rect = downloadButtonRef.current.getBoundingClientRect();

      const isAboveViewport = rect.bottom < 0;
      updateGlobalState({
        showLargeDeviceScrolledNavbar: isAboveViewport,
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="md:w-2/3 px-3 flex flex-col space-y-6">
      <div className="flex items-center space-x-3">
        <div className="w-0.5 h-5 bg-main" />
        <h1>Nintendo Switch</h1>
      </div>
      <h1 className="text-4xl font-medium">Stardew Valley</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">$14.99</h1>
        <div className="w-10 h-10">
          <AnimatedHeart />
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <Image
          src="https://shadowindali.github.io/Nintendo/coin.avif"
          alt="coins"
          width={40}
          height={40}
        />
        <p className="text-xs">
          Eligible for up to <span className="font-bold">75</span> Gold Points
        </p>
      </div>

      <AnimatedButton
        ref={downloadButtonRef}
        hoverClassName="bg-main rounded-xl"
        className="py-4 rounded-xl bg-main font-bold text-white hover:bg-main"
      >
        <h1 className="text-white text-xl flex items-center justify-center gap-2 z-10">
          <Download className="w-5 h-5" />
          Direct Download
        </h1>
      </AnimatedButton>
      <p className="text-xs">
        This item will be sent to your system automatically after purchase.
      </p>
    </div>
  );
};

export default HeroDetails;
