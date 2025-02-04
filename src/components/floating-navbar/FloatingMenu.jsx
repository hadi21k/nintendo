import { ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { menus } from "../second-navbar/SecondNavbar";
import Link from "next/link";

const FloatingMenu = ({ showMenu, setShowMenu }) => {
  return (
    <AnimatePresence>
      {showMenu && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-[99]"
            onClick={() => setShowMenu(false)}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-white-gray z-[100] rounded-t-3xl w-full fixed inset-x-0 bottom-0 max-w-[440px] mx-auto max-h-[80vh] h-full overflow-y-auto"
          >
            <div className="bg-white relative rounded-t-3xl py-4 flex items-center justify-center">
              Menu
              <X
                className="w-8 h-8 absolute right-4 text-gray-500 hover:text-main cursor-pointer"
                onClick={() => setShowMenu(false)}
              />
            </div>
            {menus.map((menu, index) => (
              <div
                key={index}
                className={`py-1 cursor-pointer border-gray-400
                ${index === 0 ? "border-y" : "border-b"}
              `}
              >
                {menu.url ? (
                  <Link
                    luc
                    href={menu.url}
                    className="flex items-center gap-2 p-4 hover:bg-gray-100"
                  >
                    {menu.icon}
                    <p>{menu.name}</p>
                  </Link>
                ) : (
                  <div className="flex items-center gap-2 p-4 hover:bg-gray-100 justify-between">
                    <div className="flex items-center space-x-2">
                      {menu.icon}
                      <p>{menu.name}</p>
                    </div>
                    <ChevronRight className="w-6 h-6 cursor-pointer" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingMenu;
