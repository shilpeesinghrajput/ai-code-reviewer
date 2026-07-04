import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
   className?: string;
};

function Button({
  children,
  variant = "primary",
  onClick,
   className = "",
  
}: ButtonProps) {
  const baseClasses =
    "rounded-xl px-6 py-3 font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg hover:shadow-blue-400/40",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;