"use client";

import { useState, useEffect, useEffectEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FooterType = "hidden" | "static" | "fixed";

export function StickyFooterWatcher({
  children,
}: {
  children: React.ReactNode;
}) {
  const [footerType, setFooterType] = useState<FooterType>("hidden");

  const updateFooterState = useEffectEvent(() => {
    const scrollY = window.scrollY;
    const bodyHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    // Threshold: only hide if page is significantly longer than 1.1x viewport
    const longPageThreshold = viewportHeight * 1.1;

    // Condition A: Short page (< 110vh) -> Absolutely must show static footer
    if (bodyHeight <= longPageThreshold) {
      setFooterType("static");
      return;
    }

    // Condition B: Long page (> 110vh)
    // Logic: Hide at the very top, but show sticky once scrolled past 300px
    // This allows better visibility on pages that are just over the limit
    if (scrollY > 300) {
      setFooterType("fixed");
    } else {
      setFooterType("hidden");
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
  }, [updateFooterState]);

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {footerType === "fixed" ? (
          <motion.div
            key="fixed-footer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed bottom-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-t border-white/10"
          >
            <div className="max-w-[1440px] mx-auto px-12 py-4">{children}</div>
          </motion.div>
        ) : footerType === "static" ? (
          <div
            key="static-footer"
            className="mt-16 py-8 border-t border-white/5 w-full bg-transparent text-center"
          >
            <div className="max-w-[1440px] mx-auto px-12">{children}</div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
