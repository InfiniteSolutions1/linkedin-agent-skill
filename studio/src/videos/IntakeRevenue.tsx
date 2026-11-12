import React from "react";
import { Charts } from "../effects/E06Charts";
import { PaperCut } from "../effects/E05PaperCut";
import { LogoSting } from "../effects/LogoSting";
import { Offer } from "../effects/Offer";
import { CallerLookup } from "../scenes/CallerLookup";
import { CallsByHour } from "../scenes/CallsByHour";
import { WelcomeDropoff } from "../scenes/WelcomeDropoff";
import { Beat, Reel } from "./buildReel";

const hours = [
  ["8a", 14, 2], ["9a", 22, 3], ["10a", 26, 4], ["11a", 24, 5], ["12p", 18, 7], ["1p", 21, 5],
  ["2p", 23, 4], ["3p", 20, 6], ["4p", 17, 8], ["5p", 9, 9], ["6p", 5, 8], ["7p", 3, 7],
] as const;

/** Reel: intake is a revenue department — calls per hour, abandonment, welcome-message drop-off, ASA, CRM lookup. */
export const intakeBeats: Beat[] = [
  { name: "Hook", vo: "201", sec: 3.4, then: "glitch", el: <PaperCut words={["Intake", "isn't", "a", "cost", "center.", "It's", "a", "revenue", "department."]} accent={[7, 8]} perWord={5} /> },
  {
    name: "Calls per hour", vo: "202",
    sec: 4.2,
    then: "zoom",
    el: (
      <CallsByHour
        heading="Calls per hour. How many were answered?"
        hours={hours.map(([label, answered, abandoned]) => ({ label, answered, abandoned }))}
        totals={[
          { label: "Inbound", value: "276" },
          { label: "Answered", value: "202" },
          { label: "Abandoned", value: "74", bad: true },
        ]}
      />
    ),
  },
  {
    name: "Welcome drop-off", vo: "203",
    sec: 4.2,
    then: "zoom",
    el: (
      <WelcomeDropoff
        heading="How many hung up during your welcome message?"
        message="Thank you for calling. This call may be recorded. For English, press one…"
        seconds={30}
        hangups={[6, 9, 11, 12, 16, 21]}
        avg="11 sec"
      />
    ),
  },
  { name: "Speed of answer", vo: "204", sec: 3.0, then: "zoom", el: <Charts kpi="Intake average speed of answer" value={38} suffix=" sec" sub="Tracked every hour, by queue and by agent" /> },
  {
    name: "CRM lookup", vo: "205",
    sec: 4.2,
    then: "glitch",
    el: (
      <CallerLookup
        heading="Is every caller looked up in your CRM automatically?"
        number="(626) 555-0148"
        badge="EXISTING CLIENT · MATCHED"
        fields={[
          { k: "Client", v: "M.R." },
          { k: "Case", v: "Motor vehicle · Pre-lit" },
          { k: "Case manager", v: "Assigned" },
          { k: "Last contact", v: "10 days ago" },
        ]}
      />
    ),
  },
  { name: "Numbers don't lie", vo: "206", sec: 3.2, then: "zoom", el: <PaperCut words={["Numbers", "don't", "lie.", "They", "show", "exactly", "where", "to", "fix."]} accent={[5, 6, 7, 8]} perWord={5} /> },
  { name: "Offer", vo: "207", sec: 3.8, then: "zoom", el: <Offer title="Free intake assessment" items={["Calls & answer rate by hour", "Abandonment & drop-off", "Average speed of answer", "CRM & automation review"]} /> },
  { name: "Logo", vo: "208", sec: 2.6, el: <LogoSting cta="We can help →" /> },
];

export const IntakeRevenue: React.FC = () => <Reel beats={intakeBeats} />;
