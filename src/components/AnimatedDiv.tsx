import { HTMLMotionProps, motion } from "framer-motion"
import useAnimateInView from "../hooks/useAnimateInView";

interface AnimatedDivProps extends HTMLMotionProps<"div"> {
  className?: string,
  children: React.ReactNode,
  variant: {},
}

function AnimatedDiv({className, children, variant, ...props}: AnimatedDivProps) {
  const { ref: divRef, controls: divControls } = useAnimateInView();

  
  return (
    <motion.div ref={divRef} animate={divControls} initial="hidden" variants={variant} className={className} {...props}>
      {children}
    </motion.div>
  )
}

export default AnimatedDiv