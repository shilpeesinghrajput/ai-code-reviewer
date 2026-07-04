import { motion } from "framer-motion";
import StepCard from "./ui/StepCard";

const steps = [
  {
    number: "01",
    title: "Paste Your Code",
    description:
      "Paste your JavaScript, React, or TypeScript code into the editor.",
  },
  {
    number: "02",
    title: "AI Analysis",
    description:
      "Our AI checks your code for bugs, security issues, and performance.",
  },
  {
    number: "03",
    title: "Get Smart Feedback",
    description:
      "Receive instant suggestions, explanations, and improved code.",
  },
];

function HowItWorks() {
  return (
    <section
     id="how-it-works"
    className="relative overflow-hidden bg-linear-to-b from-slate-50 to-white py-28">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Simple Process
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            How It Works
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Review your code in three easy steps with our AI-powered reviewer.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;