"use client";
import { Cloud, Gamepad, Newspaper, Sparkle, SwatchBook } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import NintendoStoreMenu from "./NintendoStoreMenu";
import { AnimatePresence } from "motion/react";
import GamesMenu from "./GamesMenu";
import SwitchMenu from "./SwitchMenu";
import PlayMenu from "./PlayMenu";
import { useBodyOverflow } from "@/hooks/useBodyOverflow";

export const menus = [
  {
    name: "My nintendo Store",
    key: "store",
    icon: <Cloud className="text-main w-4 h-4" />,
  },
  {
    name: "Game",
    key: "game",
    icon: <Gamepad className="text-main w-4 h-4" />,
  },
  {
    name: "Nintendo Switch",
    key: "switch",
    icon: <SwatchBook className="text-main w-4 h-4" />,
  },
  {
    name: "News & Events",
    url: "/",
    icon: <Newspaper className="text-main w-4 h-4" />,
  },
  {
    name: "Play Nintendo",
    key: "play",
    icon: <Sparkle className="text-main w-4 h-4" />,
  },
];

const SecondNavbar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  useBodyOverflow(!!activeMenu);

  return (
    <div className="border-y h-12 max-xl:hidden flex items-center relative">
      <div className="max-w-4xl m-auto">
        <div className="flex gap-6 items-center">
          {menus.map((menu, index) => (
            <div key={index}>
              {menu.url ? (
                <Link href={menu.url} className="flex items-center gap-2">
                  {menu.icon}
                  <p>{menu.name}</p>
                </Link>
              ) : (
                <div
                  className={`flex items-center gap-2 cursor-pointer ${
                    activeMenu === menu.key ? "border-b-4 border-main" : ""
                  }`}
                  onClick={() => {
                    if (activeMenu === menu.key) {
                      setActiveMenu("");
                    } else {
                      setActiveMenu(menu.key);
                    }
                  }}
                >
                  {menu.icon}
                  <p>{menu.name}</p>
                  <MdOutlineKeyboardArrowUp
                    className={`transition-transform duration-300 ${
                      activeMenu === menu.key ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeMenu === "store" && (
          <NintendoStoreMenu
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        )}

        {activeMenu === "game" && (
          <GamesMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        )}

        {activeMenu === "switch" && (
          <SwitchMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        )}

        {activeMenu === "play" && (
          <PlayMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        )}
      </AnimatePresence>{" "}
    </div>
  );
};

export default SecondNavbar;
