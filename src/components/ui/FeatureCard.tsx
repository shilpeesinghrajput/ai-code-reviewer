import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-blue-200"
    >
      <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4 text-blue-600 transition group-hover:rotate-6">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;