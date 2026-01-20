import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CampingInfo } from "@/components/CampingInfo";
import { Bungalows } from "@/components/Bungalows";
import { Gallery } from "@/components/Gallery";
import { Experiences } from "@/components/Experiences";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-clay selection:text-white">
      <Navbar />
      <Hero />
      <CampingInfo />
      <Bungalows />
      <Gallery />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}