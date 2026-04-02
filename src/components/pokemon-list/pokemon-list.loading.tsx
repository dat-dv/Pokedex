import { motion } from "framer-motion";

const PokemonListLoading = () => {
  return (
    <motion.div
      key="skeleton"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="glass-effect rounded-[2rem] h-80 animate-pulse bg-white/5 border border-white/5"
        />
      ))}
    </motion.div>
  );
};

export default PokemonListLoading;
