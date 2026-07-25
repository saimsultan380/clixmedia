import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { StatBand } from "@/components/StatBand";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SearchIntentSection } from "@/components/SearchIntentSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ResultsSection } from "@/components/ResultsSection";
import { WorkSlider } from "@/components/WorkSlider";
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
      <div className="w-full border-b border-white/10" />
      <StatBand />
      <div className="w-full border-b border-white/10" />
      <ProblemSection />
      <div className="w-full border-b border-white/10" />
      <SolutionSection />
      <div className="w-full border-b border-white/10" />
      <WhyChooseUs />
      <div className="w-full border-b border-white/10" />
      <ServicesGrid />
      <div className="w-full border-b border-white/10" />
      <SearchIntentSection />
      <div className="w-full border-b border-white/10" />
      <ResultsSection />
      <div className="w-full border-b border-white/10" />
      <WorkSlider />
      <div className="w-full border-b border-white/10" />
      <TestimonialSlider />
      <div className="w-full border-b border-white/10" />
      <ProcessTimeline />
      <div className="w-full border-b border-white/10" />
      <FAQAccordion />
      <div className="w-full border-b border-white/10" />
      <FinalCTA />
    </>
  );
}
