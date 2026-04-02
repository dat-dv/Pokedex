import { FADE_IN } from "@/constants/animations";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCcw } from "lucide-react";

const PokemonListError = ({ refetch }: { refetch: () => void }) => {
  return (
    <motion.div
      variants={FADE_IN}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center justify-center p-20 glass-effect rounded-[3rem] border-red-500/20"
    >
      <AlertCircle size={48} className="text-red-500 mb-4 opacity-50" />
      <h3 className="text-2xl font-black text-white/90">Data sync failed</h3>
      <p className="text-white/50 mb-8 max-w-xs text-center font-medium">
        Unable to establish connection with the PokeAPI neural network.
      </p>
      <button
        onClick={refetch}
        className="px-8 py-3 bg-red-500/10 text-red-500 rounded-full border border-red-500/30 hover:bg-red-500 hover:text-white transition-all flex items-center gap-3 font-black text-xs tracking-widest"
      >
        <RefreshCcw size={16} />
        RETRY COMMAND
      </button>
    </motion.div>
  );
};

export default PokemonListError;
