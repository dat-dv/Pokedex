import { cn } from "@/utils/cn";
import { StickyFooterWatcher } from "./sticky-footer-watcher";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("py-6 text-center", className)}>
      <div className="text-[9px] font-black tracking-[0.2em] text-white/20 uppercase">
        Crafted by @{" "}
        <a
          href="mailto:datdoan.dev@gmail.com"
          className="hover:text-white transition-colors"
        >
          datdoan.dev
        </a>
      </div>
    </footer>
  );
}

export default function StickyFooter() {
  return (
    <StickyFooterWatcher>
      <Footer />
    </StickyFooterWatcher>
  );
}
