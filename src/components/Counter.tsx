import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  from: number;
  to: number;
  className: string
}

function Counter({ from, to, className }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2 });
    }
  }, [count, inView, to]);

  return (
    <motion.span
      ref={ref}
      className={className}
    >
      {rounded}
    </motion.span>
  );
}

export default Counter;
