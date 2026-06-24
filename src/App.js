import { useState } from "react";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import ProgressBar from "./components/ProgressBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  if (loading) return <LoadingScreen onDone={() => setLoading(false)} />;
  return (
    <>
      <CustomCursor />
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Research />
        <Projects />
        <Education />
        <Achievements />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
