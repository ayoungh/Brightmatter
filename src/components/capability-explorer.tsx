"use client";

import { motion } from "motion/react";
import { useState } from "react";
import type { Capability } from "@/types/site";

type CapabilityExplorerProps = {
  capabilities: Capability[];
};

export function CapabilityExplorer({
  capabilities,
}: CapabilityExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="capability-list" data-testid="capability-list">
      {capabilities.map((capability, index) => {
        const active = index === activeIndex;
        return (
          <motion.article
            key={capability.number}
            className="capability-row"
            data-active={active}
            onPointerEnter={() => setActiveIndex(index)}
            onFocusCapture={() => setActiveIndex(index)}
            animate={{ x: active ? 6 : 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <button
              type="button"
              className="capability-target"
              aria-expanded={active}
              onClick={() => setActiveIndex(index)}
            >
              <span className="capability-number" aria-hidden="true">
                {capability.number}
              </span>
              <span className="capability-title">{capability.title}</span>
              <span className="capability-summary">
                {capability.description}
              </span>
              <span className="capability-plus" aria-hidden="true">
                {active ? "−" : "+"}
              </span>
            </button>
            <motion.div
              className="capability-detail"
              aria-hidden={!active}
              animate={{ height: active ? "auto" : 0 }}
              initial={false}
            >
              <p>{capability.detail}</p>
              <a href="#workflow" tabIndex={active ? 0 : -1}>
                Explore capability <span aria-hidden="true">↘</span>
              </a>
            </motion.div>
          </motion.article>
        );
      })}
    </div>
  );
}
