"use client";

import { useState, useEffect, useEffectEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

type FooterType = "hidden" | "fixed";

export function StickyFooterWatcher({
  children,
}: {
  children: React.ReactNode;
}) {
  const [footerType, setFooterType] = useState<FooterType>("hidden");

  console.log(footerType);
  const updateFooterState = useEffectEvent(() => {
    const totalScroll = document.documentElement.scrollHeight;
    const hasScroll = totalScroll > window.innerHeight;

    if (!hasScroll) {
      setFooterType("fixed");
      return;
    }

    const vh100 = window.innerHeight;
    const scrollOffSetTop = window.scrollY;
    const currentScrollHeight = scrollOffSetTop + vh100;
    const scrollPoint = 1.1;
    const isTotalScrollGratherThan110vh = totalScroll / vh100 > scrollPoint;
    const isOver110vh = currentScrollHeight / vh100 >= scrollPoint;

    if (isTotalScrollGratherThan110vh && !isOver110vh) {
      setFooterType("hidden");
    } else {
      setFooterType("fixed");
    }
  });

  useEffect(() => {
    // Check height frequently during initial load and after DOM changes
    updateFooterState();

    const observer = new MutationObserver(() => {
      // Small delay to ensure browser has calculated the new heights
      setTimeout(updateFooterState, 50);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    window.addEventListener("scroll", updateFooterState, { passive: true });
    window.addEventListener("resize", updateFooterState);

    return () => {
      window.removeEventListener("scroll", updateFooterState);
      window.removeEventListener("resize", updateFooterState);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full max-h-[60vh] overflow-hidden">
      <AnimatePresence mode="wait">
        {footerType !== "hidden" && (
          <motion.div
            key="fixed-footer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className={cn(
              "w-full z-50 bg-[#0a0a0a] border-t border-solid border-white/10",
              footerType === "fixed"
                ? "fixed bottom-0 left-1/2 -translate-x-1/2"
                : "fixed bottom-0 left-1/2 -translate-x-1/2",
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
