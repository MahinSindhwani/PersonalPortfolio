import Doing from './components/Doing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Recognition from './components/Recognition';
import Stack from './components/Stack';
import Whoami from './components/Whoami';
import Work from './components/Work';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';

export default function App() {
  useKeyboardShortcuts();

  return (
    <div className="frame">
      <Nav />
      <main>
        <Hero />
        <Whoami />
        <Doing />
        <Stack />
        <Work />
        <Projects />
        <Recognition />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
