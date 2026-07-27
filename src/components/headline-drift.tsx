"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";

type HeadlineDriftProps = {
  children: ReactNode;
  className?: string;
};

export function HeadlineDrift({
  children,
  className = "",
}: HeadlineDriftProps) {
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

  return (
    <div ref={target} className={`headline-clip ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
