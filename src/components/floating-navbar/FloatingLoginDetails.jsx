import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import LoginDetails from "../navbar/LoginDetails";

const FloatingLoginDetails = ({ loginDetails, setLoginDetails }) => {
  return (
    <AnimatePresence>
      {loginDetails && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-[99]"
            onClick={() => setLoginDetails(false)}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-white-gray z-[100] rounded-t-3xl w-full fixed inset-x-0 bottom-0 max-w-[440px] mx-auto max-h-[80vh] overflow-y-auto"
          >
            <div className="bg-white relative rounded-t-3xl py-4 flex items-center justify-center">
              Sign Up / Login
              <X
                className="w-8 h-8 absolute right-4 text-gray-500 hover:text-main cursor-pointer"
                onClick={() => setLoginDetails(false)}
              />
            </div>
            <div className="flex flex-col space-y-2 py-4 px-2">
              <LoginDetails />
            </div>
            <button
              onClick={() => setLoginDetails(false)}
              className="mt-4 text-main w-full py-2 font-semibold"
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingLoginDetails;
