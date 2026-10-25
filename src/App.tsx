import Hero from './components/Hero';
import Nav from './components/Nav';

export default function App() {
  return (
    <div className="frame">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  );
}
