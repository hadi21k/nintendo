import { AnimatePresence, motion } from "motion/react";
import { Download } from "lucide-react";
import AnimatedButton from "../ui/animated-button";
import { useGlobal } from "@/context/GlobalContext";

const LargeDeviceScrolledNavbar = ({ showLargeDeviceScrolledNavbar }) => {
  const { state } = useGlobal();

  return (
    <AnimatePresence>
      {state.showLargeDeviceScrolledNavbar && (
        <motion.div
          initial={{ top: "-50%" }}
          animate={{ top: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          exit={{ top: "-50%" }}
          key={showLargeDeviceScrolledNavbar}
          className="h-16 flex max-lg:hidden justify-center z-50 shadow-md bg-white-gray text-dark-gray fixed left-0 right-0"
        >
          <div className="flex justify-between font-bold items-center md-container">
            <h1>Stardew Vallery</h1>
            <div className="flex items-center gap-6 font-medium">
              <div className="flex font-bold items-center space-x-2">
                <span className="text-xs">Digital</span>
                <p>$14.99</p>
              </div>
              <AnimatedButton
                hoverClassName="bg-red-500"
                className="px-14 py-2 rounded-3xl bg-main text-white hover:bg-main"
              >
                <h1 className="text-white font-bold flex items-center gap-2 z-10">
                  <Download className="w-5 h-5" />
                  Direct Download
                </h1>
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LargeDeviceScrolledNavbar;
