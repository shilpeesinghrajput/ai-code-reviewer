import { motion } from "framer-motion";

type StepCardProps = {
  number: string;
  title: string;
  description: string;
};

function StepCard({
  number,
  title,
  description,
}: StepCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-3xl border border-slate-200 bg-white/70 p-8 text-center shadow-xl backdrop-blur-md"
    >
      {/* Number */}
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-violet-600 text-2xl font-bold text-white shadow-lg transition duration-300 group-hover:rotate-12">
        {number}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}

export default StepCard;