import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutDashboard from "./components/AboutDashboard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <AboutDashboard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;