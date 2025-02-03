import { X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "../ui/button";

const items = [
  {
    title: "For kids",
    image: (
      <Image
        src="https://shadowindali.github.io/Nintendo/emotions.png"
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
        src="https://shadowindali.github.io/Nintendo/smile.png"
        alt="Online Service"
        width={50}
        height={50}
      />
    ),
  },
];

const PlayMenu = ({ activeMenu, setActiveMenu }) => {
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
          className="bg-white hover:bg-black/30 text-black absolute right-4 rounded-full w-8 h-8"
          onClick={() => setActiveMenu("")}
        >
          <X className="w-8 h-8" />
        </Button>
        <div className="m-auto w-full max-w-lg">
          <div className="grid grid-cols-2">
            {items.map((game, index) => (
              <div
                className="flex flex-col items-center space-y-2 cursor-pointer group"
                key={index}
              >
                <div className="grid place-items-center border group-hover:bg-main group-hover:text-white transition-colors duration-300 rounded-xl w-9/12 h-20">
                  {game.image}
                </div>
                <h1 className="text-sm group-hover:text-main">{game.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PlayMenu;
