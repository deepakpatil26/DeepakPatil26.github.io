import React from "react";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { GitHubStats } from "./components/github";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-primary-light dark:bg-primary-dark transition-colors duration-200">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <GitHubStats username="deepakpatil26" />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
