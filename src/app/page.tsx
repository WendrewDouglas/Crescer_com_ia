import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Benefits from "@/components/Benefits";
import WhyEarly from "@/components/WhyEarly";
import Difference from "@/components/Difference";
import ForParents from "@/components/ForParents";
import PracticalInfo from "@/components/PracticalInfo";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Methodology />
        <Benefits />
        <WhyEarly />
        <Difference />
        <ForParents />
        <PracticalInfo />
        <Testimonials />
        <FAQ />
        <CTA />
        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}
