import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Button from "../ui/Button";

function Navbar() {
  const scrollToReviewer = () => {
    document
      .getElementById("reviewer")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-5 left-1/2 z-50 flex w-[90%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-8 py-3 shadow-xl backdrop-blur-xl"
    >
      {/* Logo */}
      <a
        href="#"
        className="flex items-center gap-2"
      >
        <Code2 className="h-8 w-8 text-blue-600" />

        <h1 className="text-2xl font-bold">
          <span className="text-slate-900">AI</span>{" "}
          <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Code Reviewer
          </span>
        </h1>
      </a>

      {/* Navigation */}
      <ul className="hidden items-center gap-8 font-medium text-slate-700 md:flex">
        <li>
          <a
            href="#features"
            className="transition hover:text-blue-600"
          >
            Features
          </a>
        </li>

        <li>
          <a href="#how-it-works">
  How It Works
</a>
        </li>
      </ul>

      {/* CTA */}
      <Button
        variant="primary"
        className="px-5 py-2 text-sm"
        onClick={scrollToReviewer}
      >
        🚀 Start Reviewing
      </Button>
    </motion.nav>
  );
}

export default Navbar;