"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { FaqItem } from "@/types/site";

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.setAttribute("data-hydrated", "true");
  }, []);

  return (
    <div
      ref={listRef}
      className="faq-list"
      data-testid="faq-list"
      data-hydrated="false"
    >
      {items.map((item, index) => {
        const open = index === openIndex;
        const panelId = `faq-panel-${index}`;
        const triggerId = `faq-trigger-${index}`;

        return (
          <article className="faq-item" key={item.question}>
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span className="faq-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.question}</span>
                <span className="faq-arrow" aria-hidden="true">
                  {open ? "↗" : "→"}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="faq-answer"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 24 }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
