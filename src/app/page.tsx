import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <Process />
      <Footer />
    </main>
  );
}
