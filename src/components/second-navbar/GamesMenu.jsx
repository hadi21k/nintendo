import { Gamepad, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";

const games = [
  {
    title: "Nintendo Switch games",
    url: "/",
    icon: <Gamepad className="w-14 h-14" />,
  },
  {
    title: "New releases",
    url: "/",
    icon: <Gamepad className="w-14 h-14" />,
  },
  {
    title: "Coming soon",
    url: "/",
    icon: <Gamepad className="w-14 h-14" />,
  },
  {
    title: "Shop games",
    url: "/",
    icon: <Gamepad className="w-14 h-14" />,
  },
];

const GamesMenu = ({ activeMenu, setActiveMenu }) => {
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
          <div className="grid grid-cols-4 gap-4">
            {games.map((game, index) => (
              <div
                className="flex flex-col items-center space-y-2 cursor-pointer group"
                key={index}
              >
                <div className="grid place-items-center border group-hover:bg-main group-hover:text-white transition-colors duration-300 rounded-xl w-9/12 h-20">
                  {game.icon}
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

export default GamesMenu;
