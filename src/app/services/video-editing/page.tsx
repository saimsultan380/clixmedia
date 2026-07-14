import { Metadata } from "next";
import { ServiceHero, DeliverablesList, MetricsRow, WorkflowSteps, ServiceCTA } from "@/components/ServiceComponents";

export const metadata: Metadata = {
  title: "Real Estate Video Editing Services That Convert",
  description: "Professional real estate video editing services that boost watch time and leads. Fast turnaround, YouTube-ready edits. Book your free strategy call today.",
};

export default function VideoEditing() {
  return (
    <>
      <ServiceHero 
        badge="EDIT BLUEPRINT"
        h1="Real Estate Video Editing Services That Convert Viewers Into Clients"
        subhead="We don't just cut clips together, we build edits that hold attention and drive action. We handle pacing, sound design, captions, color, and platform optimization so every video looks sharp and performs like it should."
      />
      
      <DeliverablesList 
        items={[
          "Retention-focused pacing, sound design, and color grading",
          "Platform-ready formatting for YouTube, Reels, and Shorts",
          "Caption, thumbnail, and title support built into every edit"
        ]}
      />

      <MetricsRow 
        metrics={[
          "500+ Videos Edited",
          "68% Avg. Watch Time Retention",
          "+32% Engagement Growth"
        ]}
      />

      <WorkflowSteps 
        steps={[
          { title: "Footage Review & Edit Plan", desc: "We review your raw footage, flag your strongest takes, and map out a structure built around what will actually keep viewers watching." },
          { title: "Rough Cut & Structure Pass", desc: "We assemble the story, tighten pacing, cut dead air, and shape the video around a clear hook and flow before any polish is added." },
          { title: "Sound Design & Color Grade", desc: "We layer in clean audio mixing, music, and color correction so every video looks and sounds consistent with your brand." },
          { title: "Final Delivery & Platform Export", desc: "We export in the right formats and specs for YouTube, Reels, and Shorts, then deliver files ready to upload with zero extra work on your end." }
        ]}
      />

      <ServiceCTA 
        h2="Deploy edits that keep viewers watching"
        body="Ready to work with the best video editing services for real estate? Book your free strategy call and see how a professional video editing service can turn raw footage into results."
        btn="Book Your Free Strategy Call"
      />
    </>
  );
}
