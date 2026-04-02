export function Footer() {
  return (
    <footer className="mt-48 py-12 border-t border-white/5 text-center">
      <div className="text-[9px] font-black tracking-[0.2em] text-white/10 uppercase">
        Crafted by @{" "}
        <a
          href="https://datdoan.dev"
          target="_blank"
          className="hover:text-blue-500 underline underline-offset-4 decoration-white/5 transition-colors"
        >
          datdoan.dev
        </a>
      </div>
    </footer>
  );
}
