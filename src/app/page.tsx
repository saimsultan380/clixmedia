import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { StatBand } from "@/components/StatBand";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SearchIntentSection } from "@/components/SearchIntentSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ResultsSection } from "@/components/ResultsSection";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Real Estate Marketing That Gets You Clients",
  description: "Struggling to get leads? Our real estate marketing videos turn viewers into buyers and sellers. Book a free call.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatBand />
      <ProblemSection />
      <SolutionSection />
      <ServicesGrid />
      <SearchIntentSection />
      <WhyChooseUs />
      <ResultsSection />
      <TestimonialSlider />
      <ProcessTimeline />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
