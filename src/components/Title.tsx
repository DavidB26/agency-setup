import { motion } from "framer-motion";
import { bottomToTop } from "../utils/variants";
import useAnimateInView from "../hooks/useAnimateInView";
import { twMerge } from "tailwind-merge";

interface TitleProps {
  title: string;
  align: "right" | "left" | "center";
  underline: "right" | "left" | "center";
}

function Title({ title, underline, align }: TitleProps) {
  const { ref: headingRef, controls: headingControls } = useAnimateInView();
  return (
    <motion.h3
      ref={headingRef}
      animate={headingControls}
      initial='hidden'
      variants={bottomToTop}
      className={twMerge(
        "lg:text-[40px] mb-6 pb-6 text-3xl font-black uppercase relative before:content-[''] before:w-14 before:h-1 before:inline-block before:bg-blue-brandable before:absolute before:bottom-0",
        align === "left" && "text-left",
        align === "center" && "text-center",
        align === "right" && "text-right",
        underline === "left" && "before:left-0",
        underline === "center" && "before:left-2/4 before:-ml-7",
        underline === "right" && "before:right-0"
      )}
    >
      {title}
    </motion.h3>
  );
}

export default Title;
