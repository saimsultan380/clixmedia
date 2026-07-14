import { Metadata } from "next";
import { ServiceHero, DeliverablesList, MetricsRow, WorkflowSteps, TwoColumnTextSection, ServiceCTA } from "@/components/ServiceComponents";

export const metadata: Metadata = {
  title: "YouTube Growth Service for Real Estate Agents",
  description: "Our YouTube growth service helps realtors turn local searches into leads. Strategy, editing, and channel growth handled for you. Book a free call.",
};

export default function YouTubeGrowth() {
  return (
    <>
      <ServiceHero 
        badge="GROWTH BLUEPRINT"
        h1="The YouTube Growth Service Built to Turn Realtors Into Local Authorities"
        subhead="We don't just edit your videos, we run a full YouTube growth service built around your market. Keyword research, content strategy, optimization, and channel management, all handled so you show up first when buyers and sellers search."
      />
      
      <DeliverablesList 
        items={[
          "Local market keyword research and SEO strategy",
          "Content ideation, scripting, and hook formulation",
          "End-to-end channel management and scheduling",
          "Click-through optimization (titles, tags, descriptions)"
        ]}
      />

      <MetricsRow 
        metrics={[
          "12+/mo Avg. Inbound Leads",
          "4.8% View-to-Lead Ratio",
          "+45% Closing Growth"
        ]}
      />

      <WorkflowSteps 
        steps={[
          { title: "Market & Competitor Audit", desc: "We analyze your local market, pull competitor channels, and identify exactly which searches your future clients are typing in. This becomes the foundation for every video we script." },
          { title: "Monthly Scripting & Strategy Prep", desc: "Every month, we hand you a ready-to-film content plan. Topics, hooks, talking points, and structure, mapped to the keywords your buyers and sellers are actually searching." },
          { title: "Recording Guidance & Setup Check", desc: "We walk you through simple setup and delivery tips so your videos look and sound professional, no expensive gear or editing experience required on your end." },
          { title: "Publishing & Lead Capture Integration", desc: "We optimize titles, descriptions, and tags, then publish on schedule and connect each video to your lead capture flow, so views turn into booked calls, not just watch time." }
        ]}
      />

      <TwoColumnTextSection content="Why Realtors Choose Our YouTube Growth Agency Over DIY Posting: Posting on your own gets views from people who already know you. Working with a YouTube growth agency built for real estate gets you in front of buyers and sellers who don't know you yet, but are actively searching for a home in your market right now. We build the strategy, you show up on camera, the rest is handled." />
      
      <TwoColumnTextSection content="A YouTube Channel Growth Service Built Around Local Search Intent: Generic content marketing treats every channel the same. Our YouTube channel growth service starts with your specific market, your neighborhoods, your buyer and seller searches, so every video is built to rank for the exact terms your future clients are typing in." />

      <ServiceCTA 
        h2="Deploy this engine in your MLS territory"
        body="Ready to implement a YouTube growth service built for realtors? Claim territory rights and schedule your launch strategy session."
        btn="Book Launch Call"
      />
    </>
  );
}
