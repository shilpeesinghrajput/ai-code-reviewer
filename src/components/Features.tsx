
import FeatureCard from "./ui/FeatureCard";
import { Bot, Zap, ShieldCheck, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Bot size={32} />,
    title: "AI Bug Detection",
    description: "Detect bugs instantly with AI-powered code analysis.",
  },
  {
    icon: <Zap size={32} />,
    title: "Performance Analysis",
    description: "Optimize your code for better speed and efficiency.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Security Scan",
    description: "Find security vulnerabilities before deployment.",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Best Practices",
    description: "Learn clean coding standards with detailed AI explanations.",
  },
];

function Features() {
  return (
    <section 
     id="features"
    className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Powerful Features
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Everything you need to review code with AI.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;