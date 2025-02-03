import { Download } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import AnimatedButton from "../ui/animated-button";

const FloatingDownloadScrollbar = ({ showLargeDeviceScrolledNavbar }) => {
  return (
    <AnimatePresence>
      {showLargeDeviceScrolledNavbar && (
        <motion.div
          initial={{ top: "100%" }}
          animate={{ top: "-100%" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          exit={{ top: "100%" }}
          className="bg-white-gray p-2 z-[100] rounded-t-3xl h-20 absolute w-full"
        >
          <div className="flex items-center gap-6 font-medium justify-between">
            <div className="flex flex-col items-center justify-between space-x-1">
              <span className="text-xs">Digital</span>
              <p>$14.99</p>
            </div>
            <AnimatedButton
              hoverClassName="bg-main"
              className="px-4 py-2 rounded-3xl bg-main text-white hover:bg-main"
            >
              <h1 className="text-white flex items-center gap-2 z-10">
                <Download className="w-5 h-5" />
                Direct Download
              </h1>
            </AnimatedButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingDownloadScrollbar;
