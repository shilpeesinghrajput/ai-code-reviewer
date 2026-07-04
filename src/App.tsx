
import Hero from "./components/home/Hero";
import Navbar from "./components/layout/Navbar";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Reviewer from "./components/reviewer/Reviewer";

function App() {
  return (
    <>
      <Navbar />
      <main>
  <Hero />
  <Features />
  <HowItWorks />
  <Reviewer />
</main>

    </>
  );
}

export default App;