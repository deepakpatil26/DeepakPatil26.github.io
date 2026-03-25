import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { GitHubStats } from "./components/github";
import { ThemeProvider } from "./context/ThemeContext";
import { BackToTop } from "./components/BackToTop";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 transition-theme min-h-screen">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <GitHubStats username="deepakpatil26" />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
