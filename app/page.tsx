import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RegisterBar from "@/components/RegisterBar";
import About from "@/components/About";
import WhatWeOffer from "@/components/WhatWeOffer";
import Agenda from "@/components/Agenda";
import { GrowthPlans } from "@/components/GrowthPlans";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <RegisterBar />
      <About />
      <WhatWeOffer />
      <Agenda />
      <GrowthPlans />
      <Speakers />
      <Sponsors />
      <Contact />
      <Footer />
    </>
  );
}
