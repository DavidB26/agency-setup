import { motion } from "framer-motion";
import useAnimateInView from "../hooks/useAnimateInView";
import { bottomToTop } from "../utils/variants";
import { twMerge } from "tailwind-merge";

interface SpotlightTextProps {
  text: string;
  align?: "left" | "center" | "right";
}

function SpotlightText({ text, align }: SpotlightTextProps) {
  const { ref: paragraphRef, controls: paragraphControls } = useAnimateInView();

  return (
    <motion.p
      ref={paragraphRef}
      animate={paragraphControls}
      initial='hidden'
      className={twMerge("text-2xl font-extrabold text-center text-blue-brandable", align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left')}
      variants={bottomToTop}
    >
      {text}
    </motion.p>
  );
}

export default SpotlightText;
