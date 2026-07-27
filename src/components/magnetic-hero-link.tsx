"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

type MagneticHeroLinkProps = {
  href: string;
  label: string;
};

export function MagneticHeroLink({ href, label }: MagneticHeroLinkProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 18 });
  const springY = useSpring(y, { stiffness: 160, damping: 18 });

  function handlePointerMove(event: React.PointerEvent<HTMLAnchorElement>) {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.12);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.12);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      className="hero-route"
      href={href}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onBlur={reset}
      style={{ x: springX, y: springY }}
    >
      <span>{label}</span>
      <span className="hero-route-arrow" aria-hidden="true">
        →
      </span>
    </motion.a>
  );
}
