import React from "react";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Orbit } from "../effects/E01Orbit";
import { PaperCut } from "../effects/E05PaperCut";
import { FlowDiagram } from "../effects/FlowDiagram";
import { Charts } from "../effects/E06Charts";
import { Headlines } from "../effects/E04Headlines";
import { Vertigo } from "../effects/E02Vertigo";
import { PhoneScreens } from "../effects/E07PhoneScreens";
import { Pullback } from "../effects/E09Pullback";
import { Typewriter } from "../effects/E11Typewriter";
import { LogoSting } from "../effects/LogoSting";
import { glitch, zoomThrough } from "../effects/transitions";

/** ~25s sign-off reel: every effect once, in ISC's palette and wording. */
export const EffectsReel: React.FC = () => {
  const { fps } = useVideoConfig();
  const T = (frames: number) => linearTiming({ durationInFrames: frames });
  return (
    <AbsoluteFill style={{ backgroundColor: brand.ink }}>
    <TransitionSeries>
      <TransitionSeries.Sequence name="E01 Orbit" durationInFrames={2.5 * fps}>
        <Orbit label="INQUIRY RECEIVED · 9:47 PM" caption="Who answers?" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={glitch()} timing={T(10)} />
      <TransitionSeries.Sequence name="E05 Paper Cut" durationInFrames={3 * fps}>
        <PaperCut words={["Demand", "is", "rarely", "the", "first", "constraint."]} accent={[2]} source="The ISC point of view" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={zoomThrough()} timing={T(14)} />
      <TransitionSeries.Sequence name="Flow" durationInFrames={4 * fps}>
        <FlowDiagram
          heading="One call, from ring to review."
          steps={[
            { title: "Inquiry received", detail: "AI transcribes the call" },
            { title: "Routed by fit", detail: "Case fields filled", owner: "intake" },
            { title: "Follow-up launched", detail: "High-value flag by Slack/SMS" },
            { title: "Consult booked", detail: "A person reviews and decides", owner: "attorney" },
          ]}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={zoomThrough()} timing={T(14)} />
      <TransitionSeries.Sequence name="E06 Charts" durationInFrames={2.6 * fps}>
        <Charts kpi="Responded under five minutes" value={78} suffix="%" sub="Inquiry → consult, by source" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={glitch()} timing={T(10)} />
      <TransitionSeries.Sequence name="E04 Headlines" durationInFrames={2.7 * fps}>
        <Headlines
          title="Sound familiar?"
          lines={[
            "Cost per signed case unknown",
            "Calls go unanswered after hours",
            "Web forms wait in an inbox",
            "Follow-up stops after two attempts",
            "Clients calling for updates",
            "Records requested late, or twice",
            "Files ready for demand nobody flagged",
            "No weekly scorecard anyone trusts",
            "Budget moved on instinct",
          ]}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={zoomThrough()} timing={T(14)} />
      <TransitionSeries.Sequence name="E02 Vertigo" durationInFrames={2.4 * fps}>
        <Vertigo
          center="Which marketing dollars produce signed cases?"
          caption="Six tools. No answer."
          wall={["Agency report", "Call tracking", "CMS", "Spreadsheet", "Intake log", "Ad platform", "Email", "Texts"]}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={glitch()} timing={T(10)} />
      <TransitionSeries.Sequence name="E07 Phone Screens" durationInFrames={3.4 * fps}>
        <PhoneScreens
          title="This week"
          tiles={[
            { label: "Speed to lead", value: "4m 12s" },
            { label: "Inquiry → signed", value: "31%" },
            { label: "Clients quiet > 14 days", value: "3", tone: "warn" },
            { label: "Records outstanding", value: "12" },
            { label: "Files ready for demand", value: "5" },
            { label: "Cost per signed case", value: "$—" },
          ]}
          labels={["Intake", "Pre-lit", "Marketing", "Litigation"]}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={zoomThrough()} timing={T(14)} />
      <TransitionSeries.Sequence name="E09 Pullback" durationInFrames={3.2 * fps}>
        <Pullback
          title="Every department. One operating system."
          focus={1}
          depts={[
            { name: "Marketing", items: ["Source → signed case", "Vendor oversight", "Conversion analysis", "Forecasting"] },
            { name: "Intake", items: ["After-hours coverage", "Missed-call recovery", "Qualification logic", "QA dashboards"] },
            { name: "Pre-Lit", items: ["Treatment-gap alerts", "Records on a timer", "14-day contact rule", "AI demand prep"] },
            { name: "Litigation", items: ["Owner per phase", "Deadline tracking", "AI depo summaries", "Mediation brief"] },
          ]}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={glitch()} timing={T(10)} />
      <TransitionSeries.Sequence name="E11 Typewriter" durationInFrames={2.6 * fps}>
        <Typewriter line="Put a number on the leak in thirty seconds." />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={zoomThrough()} timing={T(14)} />
      <TransitionSeries.Sequence name="Logo sting" durationInFrames={2.8 * fps}>
        <LogoSting cta="Speed-to-Lead Calculator →" />
      </TransitionSeries.Sequence>
    </TransitionSeries>
    </AbsoluteFill>
  );
};
