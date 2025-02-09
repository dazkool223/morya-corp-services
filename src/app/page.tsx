import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PayrollToolbox from "@/components/PayrollToolbox";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <PayrollToolbox />
      <Footer />
    </main>
  );
}
