import React from "react";
import { Vertigo } from "../effects/E02Vertigo";
import { PaperCut } from "../effects/E05PaperCut";
import { LogoSting } from "../effects/LogoSting";
import { Offer } from "../effects/Offer";
import { AttributionLoop } from "../scenes/AttributionLoop";
import { KeywordWaste } from "../scenes/KeywordWaste";
import { SourceDashboard } from "../scenes/SourceDashboard";
import { Beat, Reel } from "./buildReel";

/** Reel: live marketing dashboard (GA4 + Meta + LSA), AI wasted-spend, attribution back to the platforms. */
export const marketingBeats: Beat[] = [
  { name: "Hook", sec: 3.2, then: "glitch", el: <PaperCut words={["Your", "agency", "reports", "clicks.", "Who", "reports", "signed", "cases?"]} accent={[6, 7]} perWord={5} /> },
  {
    name: "Blind spot",
    sec: 2.8,
    then: "zoom",
    el: <Vertigo center="What did one signed case cost you last month?" caption="Three platforms. Three answers." wall={["Google Ads", "Meta Ads", "Google LSA", "GA4", "CRM", "Agency PDF", "Spreadsheet", "Call tracking"]} />,
  },
  {
    name: "Live dashboard",
    sec: 4.4,
    then: "zoom",
    el: (
      <SourceDashboard
        sources={["GA4", "Meta Ads", "Google LSA"]}
        kpis={[
          { label: "Spend today", value: "$4,820" },
          { label: "Cost per lead", value: "$212" },
          { label: "Cost per case", value: "$3,940" },
        ]}
        campaigns={[
          { name: "Auto accident · search", source: "Google Ads", spend: "$1,960", cpl: "$188", cpa: "$2,610" },
          { name: "Truck accident · LSA", source: "Google LSA", spend: "$1,240", cpl: "$155", cpa: "$2,070" },
          { name: "Injury lead form", source: "Meta Ads", spend: "$980", cpl: "$61", cpa: "$9,800", tone: "bad" },
          { name: "Brand + retargeting", source: "Meta Ads", spend: "$640", cpl: "$94", cpa: "$3,200" },
        ]}
      />
    ),
  },
  {
    name: "AI wasted spend",
    sec: 4.2,
    then: "glitch",
    el: (
      <KeywordWaste
        heading="AI flags the keywords burning your budget."
        total="$6,110"
        rows={[
          { term: "car accident lawyer near me", spend: "$2,300", leads: 14, signed: 4 },
          { term: "free legal advice", spend: "$1,480", leads: 22, signed: 0, waste: true },
          { term: "personal injury lawyer salary", spend: "$960", leads: 3, signed: 0, waste: true },
          { term: "truck accident attorney", spend: "$1,720", leads: 9, signed: 3 },
          { term: "how to sue without a lawyer", spend: "$2,140", leads: 17, signed: 0, waste: true },
          { term: "pro bono injury attorney", spend: "$1,530", leads: 11, signed: 0, waste: true },
        ]}
      />
    ),
  },
  { name: "Attribution", sec: 4.2, then: "zoom", el: <AttributionLoop question="Are you sending signed-case data back?" platforms={["Google Ads", "Meta", "LSA"]} /> },
  { name: "Offer", sec: 3.8, then: "zoom", el: <Offer title="Free full marketing audit" items={["Marketing analytics", "SEO", "GEO · AI search engines", "AEO · answer engines"]} /> },
  { name: "Logo", sec: 2.6, el: <LogoSting cta="Request your free audit →" /> },
];

export const MarketingDashboard: React.FC = () => <Reel beats={marketingBeats} />;
