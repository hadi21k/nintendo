"use client";
import { AnimatePresence, motion } from "motion/react";
import { AlignJustify, Heart, Search, ShoppingCart, User } from "lucide-react";
import React, { useState } from "react";
import { useGlobal } from "@/context/GlobalContext";
import { useBodyOverflow } from "@/hooks/useBodyOverflow";
import FloatingLoginDetails from "./FloatingLoginDetails";
import FloatingDownloadScrollbar from "./FloatingDownloadScrollbar";
import FloatingSearchBar from "./FloatingSearchBar";
import FloatingMenu from "./FloatingMenu";
import { IoMdCloseCircle } from "react-icons/io";

const FloatingNavbar = () => {
  const [modals, setModals] = useState({
    loginDetails: false,
    showSearchBar: false,
    showMenu: false,
  });
  console.log(modals);
  const { state, updateGlobalState } = useGlobal();
  // const [loginDetails, setLoginDetails] = useState(false);
  // const [showSearchBar, setShowSearchBar] = useState(false);
  // const [showMenu, setShowMenu] = useState(false);

  useBodyOverflow(
    modals.loginDetails || modals.showSearchBar || modals.showMenu
  );

  const toggleLoginDetails = () => {
    updateGlobalState({ showLargeDeviceScrolledNavbar: false });
    setModals((prev) => ({
      loginDetails: !prev.loginDetails,
      showSearchBar: false,
      showMenu: false,
    }));
  };

  const toggleMenu = () => {
    updateGlobalState({ showLargeDeviceScrolledNavbar: false });
    setModals((prev) => ({
      loginDetails: false,
      showSearchBar: false,
      showMenu: !prev.showMenu,
    }));
  };

  const toggleSearchBar = () => {
    setModals((prev) => ({
      loginDetails: false,
      showSearchBar: !prev.showSearchBar,
      showMenu: false,
    }));
  };

  return (
    <div className="lg:hidden z-[1000] fixed py-0 bottom-0 min-h-16 inset-x-0 flex flex-col items-center justify-center">
      <div className="h-full relative w-full md:w-[440px]">
        <div className="z-[240] relative w-full bg-white rounded-3xl flex items-center px-10 justify-between shadow-2xl p-1 transition-colors duration-300">
          {modals.showMenu ? (
            <IoMdCloseCircle
              onClick={toggleMenu}
              className="text-3xl cursor-pointer"
            />
          ) : (
            <AlignJustify
              onClick={toggleMenu}
              className="w-8 h-8 text-gray-500 hover:text-main cursor-pointer"
            />
          )}

          <Heart className="w-8 h-8 text-gray-500 hover:text-main cursor-pointer" />

          <div
            onClick={toggleSearchBar}
            className="rounded-full cursor-pointer bg-main text-white -translate-y-4 w-12 h-12 grid place-items-center"
          >
            <Search className="w-8 h-8" />
          </div>

          <ShoppingCart className="w-8 h-8 text-gray-500 hover:text-main cursor-pointer" />

          <User
            onClick={toggleLoginDetails}
            className="w-8 h-8 text-gray-500 hover:text-main cursor-pointer"
          />
        </div>

        <FloatingMenu modals={modals} setModals={setModals} />

        <FloatingSearchBar modals={modals} setModals={setModals} />

        <FloatingDownloadScrollbar
          showLargeDeviceScrolledNavbar={state.showLargeDeviceScrolledNavbar}
        />

        <FloatingLoginDetails modals={modals} setModals={setModals} />
      </div>
    </div>
  );
};

export default FloatingNavbar;
