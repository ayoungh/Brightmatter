"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type ParallaxMediaProps = {
  children: ReactNode;
  className?: string;
};

export function ParallaxMedia({
  children,
  className = "",
}: ParallaxMediaProps) {
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1, 1.02]);

  return (
    <div ref={target} className={`parallax-shell ${className}`}>
      <motion.div
        className="parallax-inner"
        style={{ y, scale }}
      >
        {children}
      </motion.div>
    </div>
  );
}
