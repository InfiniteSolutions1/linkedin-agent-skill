import React from "react";
import { Orbit } from "../effects/E01Orbit";
import { PaperCut } from "../effects/E05PaperCut";
import { LogoSting } from "../effects/LogoSting";
import { Offer } from "../effects/Offer";
import { Question } from "../effects/Question";
import { FollowUpCadence } from "../scenes/FollowUpCadence";
import { LeadRace } from "../scenes/LeadRace";
import { Beat, Reel } from "./buildReel";

/**
 * Reel: speed to lead. The race scene uses plain, non-numeric lines (matching the voiceover).
 * The original stats (4+ firms, 80% first-to-call) were removed until a source is provided.
 */
export const speedBeats: Beat[] = [
  { name: "Hook", vo: "301", sec: 2.8, then: "glitch", el: <Orbit label="NEW LEAD · META FORM · 2:14 PM" caption="Who calls first?" /> },
  {
    name: "Do you know", vo: "302",
    sec: 3.6,
    then: "zoom",
    el: (
      <Question
        kicker="Paid ads · Google · Meta · web forms"
        lines={["How fast does your intake team call a new lead?", "Is anyone tracking it?"]}
        unknown={["Minutes from form to first call", "Leads never called", "Speed to lead by source"]}
      />
    ),
  },
  {
    name: "The race", vo: "303",
    sec: 4.6,
    then: "zoom",
    el: (
      <LeadRace
        heading="They didn't only contact you."
        stat="Right now, your lead is filling out forms with other firms too."
        claim="The first one to call usually wins."
        needsSource={false}
        lanes={[
          { firm: "Firm A", callsAt: "1 min", at: 0.12 },
          { firm: "Firm B", callsAt: "9 min", at: 0.45 },
          { firm: "Your firm", callsAt: "47 min", at: 0.95, you: true },
          { firm: "Firm D", callsAt: "next day", at: 1.0 },
        ]}
      />
    ),
  },
  {
    name: "Can't connect", vo: "304",
    sec: 3.2,
    then: "zoom",
    el: <Question kicker="Can't reach the new lead?" lines={["How many times does your team follow up?"]} unknown={["Attempts per lead", "Hours between attempts", "Leads dropped after 1 try"]} />,
  },
  {
    name: "Auto-dialer", vo: "305",
    sec: 4.8,
    then: "glitch",
    el: (
      <FollowUpCadence
        heading="Let the auto-dialer set the call-backs."
        footer="Rules change in real time"
        attempts={[
          { when: "Instantly", how: "Call + text" },
          { when: "+5 min", how: "Call" },
          { when: "+30 min", how: "Call + text" },
          { when: "+2 hours", how: "Call" },
          { when: "Next morning", how: "Call + email" },
          { when: "Day 3", how: "Call + text" },
        ]}
      />
    ),
  },
  { name: "No excuses", vo: "306", sec: 2.8, then: "zoom", el: <PaperCut words={["No", "excuses.", "Just", "logic."]} accent={[2, 3]} perWord={6} /> },
  { name: "Offer", vo: "307", sec: 3.8, then: "zoom", el: <Offer title="Free intake assessment" items={["Speed to lead, by source", "Follow-up attempts per lead", "Contact & sign-up rate", "A detailed report: what to fix first"]} /> },
  { name: "Logo", vo: "308", sec: 2.6, el: <LogoSting cta="Know exactly what to fix →" /> },
];

export const SpeedToLead: React.FC = () => <Reel beats={speedBeats} />;
