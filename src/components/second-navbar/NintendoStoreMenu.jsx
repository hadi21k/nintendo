import { Cloud, Gamepad, X } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import AnimatedButton from "../ui/animated-button";
import Link from "next/link";

const items = [
  {
    title: "Games",
    icon: <Gamepad className="w-6 h-6" />,
    children: [
      { name: "Nintendo Switch games", url: "/" },
      { name: "New releases", url: "/" },
      { name: "Sale & deals", url: "/" },
    ],
  },
  {
    title: "Hardware",
    icon: <Gamepad className="w-6 h-6" />,
    children: [
      { name: "Nintendo Switch systems", url: "/" },
      { name: "Joy-Con & controllers", url: "/" },
      { name: "Cases & more", url: "/" },
      { name: "amiibo", url: "/" },
    ],
  },
  {
    title: "Merchandise",
    icon: <Gamepad className="w-6 h-6" />,
    children: [
      { name: "Apparel & accessories", url: "/" },
      { name: "Home & office", url: "/" },
      { name: "Plush", url: "/" },
      { name: "Toys", url: "/" },
    ],
  },
  {
    title: "Store exclusives",
    icon: <Gamepad className="w-6 h-6" />,
    children: [
      { name: "Exclusive products", url: "/" },
      { name: "My Nintendo rewards", url: "/" },
      { name: "Nintendo Switch Online offers", url: "/" },
    ],
  },
  {
    title: "Characters",
    icon: <Gamepad className="w-6 h-6" />,
    children: [
      { name: "Pikmin", url: "/" },
      { name: "Splatoon", url: "/" },
      { name: "Super Mario", url: "/" },
      { name: "The Legend of Zelda", url: "/" },
    ],
  },
  {
    title: "Sales & deals",
    icon: <Gamepad className="w-6 h-6" />,
    children: [
      {
        name: "Create a Nintendo Switch starter set",
        url: "/",
        icon: <Gamepad className="w-6 h-6" />,
      },
    ],
  },
];

const NintendoStoreMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <motion.div
      layout
      className="w-full h-screen bg-black/50 absolute top-10 z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      onClick={() => setActiveMenu("")}
    >
      <motion.div
        className="bg-white w-full min-h-64 overflow-hidden 2xl:flex"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        exit={{ y: "-100%" }}
        key={activeMenu}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col w-full">
          <div className="min-h-16 bg-main gap-2 text-white flex items-center justify-center relative text-lg w-full">
            <Cloud className="w-6 h-6" />
            <span className="font-semibold">My Nintendo Store</span>
            <Button
              className="bg-white hover:bg-black/30 text-black absolute right-4 rounded-full w-8 h-8"
              onClick={() => setActiveMenu("")}
            >
              <X className="w-8 h-8" />
            </Button>
          </div>
          <div className="zigzag" />
          <div className="flex justify-center m-auto text-sm">
            {items.map((item, index) => (
              <div key={index} className="p-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 text-main">{item.icon}</span>
                  <span className="font-semibold hover:text-main cursor-pointer">
                    {item.title}
                  </span>
                </div>
                <div className="mt-4 space-y-2 flex flex-col">
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.url}
                      className={`text-sm text-black hover:text-main flex items-center gap-2 ${
                        child.icon
                          ? "font-bold hover:text-main transition-colors duration-300"
                          : ""
                      }`}
                    >
                      {child.icon && (
                        <span className="w-6 h-6 text-main">{child.icon}</span>
                      )}
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center py-2">
            <AnimatedButton
              className="px-6 rounded-xl py-3 text-main font-bold"
              hoverClassName="bg-transparent border px-4 rounded-2xl border-main"
            >
              Shop all
            </AnimatedButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NintendoStoreMenu;
