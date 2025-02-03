import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const AnimatedButton = ({ className, children, hoverClassName, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative cursor-pointer">
      <motion.div
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
        className={className}
        {...props}
      >
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 10,
            duration: 0.3,
          }}
          className={cn(
            `w-full rounded-3xl h-full absolute inset-0 m-auto`,
            hoverClassName
          )}
        ></motion.div>
        <div className="relative">{children}</div>
      </motion.div>
    </div>
  );
};

export default AnimatedButton;
