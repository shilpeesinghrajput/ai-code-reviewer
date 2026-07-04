
import Button from "../ui/Button";
import { motion } from "framer-motion";

function Hero() {
  return (

<motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="relative overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100"
>
<motion.div
  animate={{
    x: [0, 30, 0],
    y: [0, 20, 0],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-blue-300 opacity-20 blur-3xl"
/>
<motion.div
  animate={{
    x: [0, -40, 0],
    y: [0, -20, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500 opacity-20 blur-3xl"
/>
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pt-40 pb-20 md:flex-row">
        {/* Left Section */}
       <motion.div
  className="flex-1"
  initial={{ x: -80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 px-5 py-2 text-sm font-semibold text-blue-600 shadow backdrop-blur-md">
            🚀 AI-Powered Code Review
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
            Review Your Code
<motion.span
  animate={{
    backgroundPosition: ["0%", "100%", "0%"],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
  }}
  className="bg-linear-to-r from-cyan-500 via-blue-600 to-violet-600 bg-size-[200%_200%] bg-clip-text text-transparent"
>    with AI
</motion.span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Get instant AI-powered feedback on your code. Detect bugs,
            improve performance, identify security issues, and learn best
            coding practices with detailed explanations.
          </p>

         <div className="mt-8 flex flex-wrap gap-4">
  <Button>
    Start Reviewing
  </Button>

  <Button variant="secondary">
    View Demo
  </Button>
</div>
        </motion.div>

        {/* Right Section */}
      <motion.div
  className="flex-1"
  initial={{ x: 80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
<motion.div
  animate={{
    y: [0, -12, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl hover:shadow-blue-500/20"
>            <div className="flex items-center gap-2 border-b border-slate-700 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            <pre className="overflow-x-auto p-6 text-sm text-green-400">
{`function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));
`}
            </pre>

            <div className="border-t border-slate-700 bg-slate-800 p-4 text-green-300">
              ✅ No bugs found
              <br />
              ⚡ Performance: Excellent
              <br />
              🔒 Security: Safe
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;