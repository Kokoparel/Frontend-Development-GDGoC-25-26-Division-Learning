import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
