import { BackNavigation } from "../back-button";

export default function PokeNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#0a0a0a]">
      <h2 className="text-4xl font-black text-white/90 uppercase mb-4 tracking-tighter italic">
        Species Not Found
      </h2>
      <BackNavigation />
    </div>
  );
}
