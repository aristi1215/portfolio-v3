import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import KnowledgeGraph from "./components/KnowledgeGraph";
import Terminal from "./components/Terminal";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";
import AmbientGlow from "./components/AmbientGlow";

function App() {
  return (
    <>
      <a href="#intro" className="skip-link">
        Skip to content
      </a>
      <AmbientGlow />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <KnowledgeGraph />
        <Terminal />
        <Quotes />
      </main>
      <Footer />
    </>
  );
}

export default App;
