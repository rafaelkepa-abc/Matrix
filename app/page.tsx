import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import Services from "./components/Services";
import WhyMatrix from "./components/WhyMatrix";
import Pricing from "./components/Pricing";
import Areas from "./components/Areas";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyCall from "./components/StickyCall";

export default function Home() {
  return (
    <>
      {/* <Topbar /> */}
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <WhyMatrix />
        <Pricing />
        <Areas />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
