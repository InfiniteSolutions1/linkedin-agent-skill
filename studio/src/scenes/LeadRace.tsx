import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { SourceTag } from "../effects/SourceTag";
import { Stage } from "../effects/Stage";
import { tween, usePacedFrame } from "../effects/util";

export type Lane = { firm: string; callsAt: string; at: number; you?: boolean };

/** One lead, several firms. Each lane's timer runs until that firm calls back; the first call wins. */
/** needsSource: true when stat/claim are statistics (shows SOURCE NEEDED until sourced); false for plain, non-numeric lines. */
export const LeadRace: React.FC<{ heading: string; lanes: Lane[]; stat: string; statSource?: string; claim: string; claimSource?: string; needsSource?: boolean }> = ({ heading, lanes, stat, statSource, claim, claimSource, needsSource = true }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const run = tween(frame, 10, 70, 0, 1, (t) => t);
  const winner = lanes.reduce((a, b) => (b.at < a.at ? b : a));
  return (
    <Stage>
      <div style={{ position: "absolute", left: 90, right: 90, top: 200, fontFamily: brand.serif, fontSize: 80, lineHeight: 1.08, color: brand.cream }}>{heading}</div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 470, opacity: tween(frame, 4, 14, 0, 1) }}>
        <div style={{ fontFamily: brand.sans, fontSize: 38, color: "rgba(247,244,238,0.8)" }}>{stat}</div>
        {needsSource || statSource ? <SourceTag source={statSource} style={{ marginTop: 14 }} /> : null}
      </div>
      {lanes.map((l, i) => {
        const done = run >= l.at;
        const prog = Math.min(run, l.at) / 1;
        const won = done && l === winner;
        const pop = spring({ frame: frame - (10 + l.at * 60), fps, config: { damping: 12 } });
        return (
          <div key={l.firm} style={{ position: "absolute", left: 90, right: 90, top: 680 + i * 170, height: 130, borderRadius: 24, background: l.you ? `${brand.teal}66` : brand.charcoal, border: `2px solid ${won ? brand.gold : "rgba(247,244,238,0.08)"}`, overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${prog * 100}%`, background: won ? `${brand.gold}55` : "rgba(247,244,238,0.07)" }} />
            <div style={{ position: "absolute", left: 34, top: 0, bottom: 0, display: "flex", alignItems: "center", fontFamily: brand.sans, fontWeight: 700, fontSize: 40, color: brand.cream }}>{l.firm}</div>
            <div style={{ position: "absolute", right: 34, top: 0, bottom: 0, display: "flex", alignItems: "center", gap: 18, fontFamily: brand.sans, fontSize: 34, color: done ? (won ? brand.goldLight : "rgba(247,244,238,0.6)") : "rgba(247,244,238,0.4)" }}>
              {done ? <span style={{ scale: String(pop) }}>{won ? "📞 Called first · " : "Called · "}{l.callsAt}</span> : "waiting…"}
            </div>
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 90, right: 90, top: 1400, opacity: tween(frame, 72, 84, 0, 1) }}>
        <div style={{ fontFamily: brand.serif, fontSize: 68, lineHeight: 1.1, color: brand.goldLight }}>{claim}</div>
        {needsSource || claimSource ? <SourceTag source={claimSource} style={{ marginTop: 18 }} /> : null}
      </div>
    </Stage>
  );
};
