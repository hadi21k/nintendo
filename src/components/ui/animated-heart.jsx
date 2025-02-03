import { useState } from "react";
import { motion } from "motion/react";

const AnimatedHeart = () => {
  const [isHoverd, setIsHoverd] = useState(false);
  return (
    <motion.svg
      className="cursor-pointer text-main"
      viewBox="0 0 54 54"
      fill="currentColor"
      stroke="currentColor"
      role="presentation"
      onHoverStart={() => {
        setIsHoverd(true);
        setTimeout(() => {
          setIsHoverd(false);
        }, 500);
      }}
    >
      <g className="hearts">
        <path

          className="heart w-full h-full heart-outline"
          d="M27,38.9c-0.4,0-0.6-0.1-0.8-0.4L16.7,29c-1.8-1.8-2.7-3.8-2.7-6c0-4.4,3.5-8,7.9-8c1.9,0,3.7,0.8,5.1,2.3c1.4-1.4,3.2-2.3,5.1-2.3c4.4,0,7.9,3.6,7.9,8c0,2.6-1.5,4.6-2.7,6.1l-9.5,9.4C27.6,38.8,27.2,38.9,27,38.9z M21.9,17.5c-3.1,0-5.6,2.5-5.6,5.6c0,1.9,1.1,3.3,2,4.3l8.6,8.7l8.5-8.6c1.4-1.5,2.1-3,2.1-4.4c0-3.1-2.5-5.6-5.6-5.6c-1.5,0-3,1-4.1,2.5c-0.5,0.6-1.4,0.6-1.9,0C24.9,18.4,23.5,17.5,21.9,17.5z"
        ></path>
      </g>
      <g className="sparks">
        <motion.path
          animate={{ pathLength: isHoverd ? 1 : 0 }}
          transition={{
            default: { duration: 0.2, ease: "easeInOut" },
            fill: { duration: 0.2, ease: [1, 0, 0.8, 1] },
          }}
          d="M 27 8 L 27 0"
          strokeWidth="2"
        ></motion.path>
        <motion.path
          animate={{ pathLength: isHoverd ? 1 : 0 }}
          transition={{
            default: { duration: 0.2, ease: "easeInOut" },
            fill: { duration: 0.2, ease: [1, 0, 0.8, 1] },
          }}
          d="M 27 46 L 27 54"
          strokeWidth="2"
        ></motion.path>
        <motion.path
          animate={{ pathLength: isHoverd ? 1 : 0 }}
          transition={{
            default: { duration: 0.2, ease: "easeInOut" },
            fill: { duration: 0.2, ease: [1, 0, 0.8, 1] },
          }}
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 19.9584 -28.1838)"
          d="M 44 14 L 44 6"
          strokeWidth="2"
        ></motion.path>
        <motion.path
          animate={{ pathLength: isHoverd ? 1 : 0 }}
          transition={{
            default: { duration: 0.2, ease: "easeInOut" },
            fill: { duration: 0.2, ease: [1, 0, 0.8, 1] },
          }}
          transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 24.1421 10)"
          d="M 10 6 L 10 14"
          strokeWidth="2"
        ></motion.path>
        <motion.path
          animate={{ pathLength: isHoverd ? 1 : 0 }}
          transition={{
            default: { duration: 0.2, ease: "easeInOut" },
            fill: { duration: 0.2, ease: [1, 0, 0.8, 1] },
          }}
          transform="matrix(4.547455e-11 1 -1 4.547455e-11 77 -23)"
          d="M 50 31 L 50 23"
          strokeWidth="2"
        ></motion.path>
        <motion.path
          animate={{ pathLength: isHoverd ? 1 : 0 }}
          transform="matrix(-9.049490e-11 1 -1 -9.049490e-11 31 23)"
          transition={{
            default: { duration: 0.2, ease: "easeInOut" },
            fill: { duration: 0.2, ease: [1, 0, 0.8, 1] },
          }}
          d="M 4 23 L 4 31"
          strokeWidth="2"
        ></motion.path>
        <motion.path
          animate={{ pathLength: isHoverd ? 1 : 0 }}
          transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 106.2254 44)"
          transition={{
            default: { duration: 0.2, ease: "easeInOut" },
            fill: { duration: 0.2, ease: [1, 0, 0.8, 1] },
          }}
          d="M 44 48 L 44 40"
          strokeWidth="2"
        ></motion.path>
        <motion.path
          animate={{ pathLength: isHoverd ? 1 : 0 }}
          transition={{
            default: { duration: 0.2, ease: "easeInOut" },
            fill: { duration: 0.2, ease: [1, 0, 0.8, 1] },
          }}
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 34.0416 5.8162)"
          d="M 10 40 L 10 48"
          strokeWidth="2"
        ></motion.path>
      </g>
    </motion.svg>
  );
};

export default AnimatedHeart;
