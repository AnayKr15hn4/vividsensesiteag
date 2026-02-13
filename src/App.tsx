import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MissionScroll } from './components/MissionScroll';
import { MissionStatement } from './components/MissionStatement';
import { ProductCarousel } from './components/ProductCarousel';
import { Updates } from './components/Updates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <MissionStatement />
      <MissionScroll />
      <ProductCarousel />
      <Updates />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;