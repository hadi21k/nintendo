import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const items = [
  {
    title: "Nintendo Switch lineup",
    image: (
      <Image
        src="https://shadowindali.github.io/Nintendo/exchange.png"
        alt="Nintendo Switch lineup"
        width={50}
        height={50}
      />
    ),
  },
  {
    title: "Online Service",
    image: (
      <Image
        src="https://shadowindali.github.io/Nintendo/boxart.avif"
        alt="Online Service"
        width={50}
        height={50}
      />
    ),
  },
  {
    title: "Accessories",
    image: (
      <Image
        src="https://shadowindali.github.io/Nintendo/procon.avif"
        alt="Accessories"
        width={100}
        height={100}
      />
    ),
  },
];

const SwitchMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <motion.div
      className="w-full h-screen bg-black/40 absolute top-12 z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      onClick={() => setActiveMenu("")}
    >
      <motion.div
        className="bg-white w-full flex justify-center py-6 min-h-50 overflow-hidden"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        exit={{ y: "-100%" }}
        key={activeMenu}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          className="bg-white hover:bg-black/30 top-3 text-black absolute right-4 rounded-full w-8 h-8"
          onClick={() => setActiveMenu("")}
        >
          <X className="w-8 h-8" />
        </Button>
        <div className="m-auto w-full max-w-3xl">
          <div className="grid grid-cols-4">
            {items.map((item, index) => (
              <div
                className={`flex flex-col items-center space-y-2 cursor-pointer group ${
                  index === items.length - 1 ? "col-span-2" : ""
                }`}
                key={index}
              >
                <div className="grid place-items-center border group-hover:bg-main group-hover:text-white transition-colors duration-300 rounded-xl w-9/12 h-20">
                  {item.image}
                </div>
                <h1 className="text-sm group-hover:text-main">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SwitchMenu;
