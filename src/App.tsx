import About from './components/About';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Recognition from './components/Recognition';
import Skills from './components/Skills';
import Work from './components/Work';
import { useHasKeyboard } from './hooks/useHasKeyboard';
import { useInPageLinks } from './hooks/useInPageLinks';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';

export default function App() {
  const hasKeyboard = useHasKeyboard();
  useKeyboardShortcuts(hasKeyboard);
  useInPageLinks();

  return (
    <div className="frame">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Projects />
        <Recognition />
        <Skills />
        <About />
        <Faq />
      </main>
      <Footer showShortcuts={hasKeyboard} />
    </div>
  );
}
