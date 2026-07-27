"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import type { GeneratedAsset } from "@/types/site";

type HeroGradeShiftProps = {
  baseImage: GeneratedAsset;
  activeImage: GeneratedAsset;
};

export function HeroGradeShift({
  baseImage,
  activeImage,
}: HeroGradeShiftProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(46);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 24 });
  const maskImage = useMotionTemplate`radial-gradient(circle 38% at ${smoothX}% ${smoothY}%, black 0%, black 42%, transparent 78%)`;
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const activeScale = useTransform(scrollYProgress, [0, 0.6], [1.02, 1]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  function handlePointerLeave() {
    pointerX.set(50);
    pointerY.set(46);
  }

  return (
    <div
      ref={frameRef}
      className="hero-media-frame"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      data-testid="hero-grade-shift"
    >
      <Image
        className="hero-image"
        src={baseImage.src}
        alt={baseImage.alt}
        fill
        priority
        sizes="(max-width: 767px) 100vw, 62vw"
      />
      <motion.div
        className="hero-active-layer"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
          scale: activeScale,
        }}
      >
        <Image
          className="hero-image"
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 767px) 100vw, 62vw"
        />
      </motion.div>
      <div className="hero-reticle" aria-hidden="true">
        <span />
        <span />
      </div>
      <p className="hero-media-note">Move through the field</p>
    </div>
  );
}
