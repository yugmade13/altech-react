import Container from './components/Container.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './sections/Hero.tsx';
import About from './sections/About.tsx';
import Pricing from './sections/Pricing.tsx';
import Contact from './sections/Contact.tsx';
import Footer from './components/Footer.tsx';
import Blob from './components/Blob.tsx';
import blob from '../public/blob1.png';
import wave from '../public/wave.png';

function App() {
  return (
    <Container>
      <Blob
        style="-top-[350px] -left-[350px] min-w-[700px] lg:w-[100px]"
        src={blob}
      />
      <Blob
        style="top-[225px] -right-[500px] min-w-[1000px] lg:top-[170px] lg:-right-[320px]"
        src={wave}
      />
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </Container>
  )
}

export default App
