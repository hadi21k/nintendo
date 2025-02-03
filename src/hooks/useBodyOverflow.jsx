import { useEffect } from "react";

export const useBodyOverflow = (isActive) => {
  useEffect(() => {
    document.body.style.overflowY = isActive ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isActive]);
};
