import { motion, AnimatePresence } from "motion/react";
import SearchInputDetails from "./SearchInputDetails";

export const topics = [
  {
    title: "Nintendo Switch 2 trailer",
    url: "/",
  },
  {
    title: "Nintendo Switch OLED",
    url: "/",
  },
  {
    title: "Games on sale",
    url: "/",
  },
  {
    title: "New to Nintendo Switch?",
    url: "/",
  },
  {
    title: "Nintendo Switch",
    url: "/",
  },
  {
    title: "Games",
    url: "/",
  },
];

export const products = [
  {
    title: "Super Mario Party™ Jamborre",
    url: "/",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/My%20Nintendo%20Store/EN-US/Hardware/nintendo-switch-oled-model-mario-red-edition-112872/112872-nintendo-switch-oled-model-mario-red-edition-package-1200x675",
  },
  {
    title: "Donkey Kong Country™ Returns HD",
    url: "/",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000068688/87e8aa5f1fdc950b88eae7d7c62ed185c8a6373c845090bbdb2e2cf039b38da1",
  },
  {
    title: "Fortnite",
    url: "/",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000068678/5b072b55e8a6993071b4cde9f74d9cf7aeac0b52141177efed6c8ce9b580a435",
  },
  {
    title: "Mario Kart™ 8 Deluxe",
    url: "/",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000068683/fe4afe940b0e707798332e86f0af56cdbde48da59dc37cdfb8d59febb88ac72a",
  },
];

const SearchInputMenu = ({ isInputFocused, setIsInputFocused }) => {
  return (
    <AnimatePresence>
      {isInputFocused && (
        <motion.div
          className="w-full h-screen max-lg:hidden bg-black/40 fixed top-12 z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          onClick={() => setIsInputFocused(false)}
        >
          <motion.div
            className="bg-white w-full px-36 py-8 min-h-80 overflow-hidden 2xl:flex max-2xl:space-y-4 2xl:space-x-64"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{ y: "-100%" }}
            key={isInputFocused}
            onClick={(e) => e.stopPropagation()}
          >
            <SearchInputDetails topics={topics} products={products} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchInputMenu;
