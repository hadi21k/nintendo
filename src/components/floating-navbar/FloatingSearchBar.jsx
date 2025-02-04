import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef } from "react";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import SearchInputDetails from "../navbar/SearchInputDetails";
import { products, topics } from "../navbar/SearchInputMenu";

const FloatingSearchBar = ({ modals, setModals }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [modals.showSearchBar]);
  return (
    <AnimatePresence>
      {modals.showSearchBar && (
        <motion.div
          className="bg-white w-full max-h-full overflow-y-auto fixed inset-0 z-[1200] px-6 py-2 min-h-screen overflow-hidden 2xl:flex max-2xl:space-y-4 2xl:space-x-64"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          exit={{ y: "-100%" }}
          key={modals.showSearchBar}
        >
          <div className="border-b mb-2 border-main hover:border-main flex items-center justify-between w-full">
            <div className="flex items-center">
              <CiSearch className="text-3xl text-main" />
              <Input
                type="text"
                ref={inputRef}
                placeholder="Search"
                className="w-full h-8"
              />
            </div>
            <IoMdCloseCircle
              onClick={() => setModals({ showSearchBar: false })}
              className="text-5xl px-2 cursor-pointer"
            />
          </div>
          <SearchInputDetails products={products} topics={topics} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingSearchBar;
