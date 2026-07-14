import { Metadata } from "next";
import { ServiceHero, DeliverablesList, MetricsRow, WorkflowSteps, TwoColumnTextSection, ServiceCTA } from "@/components/ServiceComponents";

export const metadata: Metadata = {
  title: "YouTube Thumbnail Design Services for Real Estate",
  description: "Professional YouTube thumbnail design services built for real estate agents. Higher click-through rates, more views, more leads. Book a free call.",
};

export default function ThumbnailDesign() {
  return (
    <>
      <ServiceHero 
        badge="CLICK BLUEPRINT"
        h1="YouTube Thumbnail Design Services That Make Viewers Click"
        subhead="A great video with a weak thumbnail never gets watched. We design thumbnails built to stop the scroll, match local search intent, and pull viewers in before they even hit play."
      />
      
      <DeliverablesList 
        items={[
          "Custom thumbnail design for every video upload",
          "A/B testing to identify your highest click-through designs",
          "Brand-consistent templates across your entire channel",
          "Text, color, and composition optimized for mobile and desktop"
        ]}
      />

      <MetricsRow 
        metrics={[
          "40%+ Avg. CTR Increase",
          "300+ Thumbnails Designed",
          "2.1x View Lift on Redesigns"
        ]}
      />

      <WorkflowSteps 
        steps={[
          { title: "Channel & Competitor Thumbnail Audit", desc: "We review your current thumbnails against top-ranking channels in your market to see exactly where clicks are being lost." },
          { title: "Concept & Template Design", desc: "We build a set of branded templates matched to your content style, so every thumbnail feels consistent and instantly recognizable." },
          { title: "Per-Video Custom Design", desc: "Each upload gets a thumbnail designed around its specific hook, with text and imagery tested to grab attention in a crowded feed." },
          { title: "Performance Review & Redesign", desc: "We track click-through data after publishing and refine underperforming thumbnails so every video keeps improving over time." }
        ]}
      />

      <TwoColumnTextSection content="Why Realtors Need to Design YouTube Thumbnail Assets Strategically: A thumbnail is the first thing a buyer or seller sees before they ever hit play. When you design YouTube thumbnail assets around local search intent and clear visual hierarchy, you turn casual scrollers into actual viewers, and viewers into leads." />
      
      <TwoColumnTextSection content="Professional Thumbnail Design Built for Real Estate Search: Generic thumbnail templates don't account for how real estate content gets searched. Our thumbnail design process is built around your listings, your market, and the exact searches your future clients are typing in, so your videos stand out the moment they appear in results." />

      <ServiceCTA 
        h2="Deploy thumbnails that convert scrolls into clicks"
        body="Ready to implement YouTube thumbnail design services built for realtors? Claim territory rights and schedule your launch strategy session."
        btn="Book Launch Call"
      />
    </>
  );
}
