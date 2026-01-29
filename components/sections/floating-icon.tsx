import { motion } from "framer-motion";

export function FloatingIcon({ children }: { children?: React.ReactNode }) {
  return (
    <motion.div
      className="absolute right-10 top-10 opacity-10"
      animate={{
        y: [0, -20, 0],
        x: [0, 5, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
