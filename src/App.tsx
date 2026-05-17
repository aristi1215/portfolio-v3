import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SystemOverview from "./components/SystemOverview";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import KnowledgeGraph from "./components/KnowledgeGraph";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a href="#system" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <SystemOverview />
        <Sep />
        <About />
        <Sep />
        <Skills />
        <Sep />
        <Work />
        <Sep />
        <Experience />
        <Sep />
        <KnowledgeGraph />
        <Sep />
        <Quotes />
      </main>
      <Footer />
    </>
  );
}

function Sep() {
  return (
    <div className="px-6">
      <div className="max-w-6xl mx-auto section-divider">::</div>
    </div>
  );
}

export default App;
