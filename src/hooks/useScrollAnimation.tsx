import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationOptions {
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once ?? true,
    margin: "-100px 0px",
    amount: options.threshold ?? 0.1,
  });

  const animationProps = {
    ref,
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: {
      duration: options.duration ?? 0.6,
      delay: options.delay ?? 0,
      ease: "easeOut",
    },
  };

  return animationProps;
};

export const useStaggeredScrollAnimation = (
  itemCount: number,
  baseDelay: number = 0,
) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px",
    amount: 0.1,
  });

  const containerProps = {
    ref,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: baseDelay,
        },
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return { containerProps, itemVariants };
};
