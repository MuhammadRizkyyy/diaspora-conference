import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeOffer from "@/components/WhatWeOffer";
import Agenda from "@/components/Agenda";
import { GrowthPlans } from "@/components/GrowthPlans";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhatWeOffer />
      <Agenda />
      <GrowthPlans />
      <Speakers />
      <Sponsors />
      <Footer />
    </>
  );
}
