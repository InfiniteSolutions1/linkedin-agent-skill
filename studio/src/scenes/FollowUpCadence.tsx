import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Illustrative } from "../effects/Illustrative";
import { Stage } from "../effects/Stage";
import { tween, usePacedFrame } from "../effects/util";

export type Attempt = { when: string; how: string };

/** The auto-dialer's call-back schedule: attempts fire on rules, not on memory. Rules are editable live. */
export const FollowUpCadence: React.FC<{ heading: string; attempts: Attempt[]; footer: string }> = ({ heading, attempts, footer }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const knob = tween(frame, 70, 90, 0, 1);
  return (
    <Stage glow={brand.teal}>
      <div style={{ position: "absolute", left: 90, right: 90, top: 200, fontFamily: brand.serif, fontSize: 80, lineHeight: 1.08, color: brand.cream }}>{heading}</div>
      <div style={{ position: "absolute", left: 170, top: 520, width: 6, height: attempts.length * 118 * tween(frame, 6, 10 + attempts.length * 8, 0, 1), background: `linear-gradient(${brand.gold}, ${brand.teal})`, borderRadius: 3 }} />
      {attempts.map((a, i) => {
        const p = spring({ frame: frame - 8 - i * 8, fps, config: { damping: 14 } });
        return (
          <div key={i} style={{ position: "absolute", left: 120, right: 90, top: 490 + i * 118, display: "flex", alignItems: "center", gap: 34, opacity: p, transform: `translateX(${(1 - p) * 60}px)` }}>
            <div style={{ width: 106, height: 66, borderRadius: 33, background: brand.gold, color: brand.ink, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: brand.sans, fontWeight: 800, fontSize: 28, flexShrink: 0 }}>#{i + 1}</div>
            <div style={{ fontFamily: brand.sans, fontWeight: 700, fontSize: 40, color: brand.cream, width: 280 }}>{a.when}</div>
            <div style={{ fontFamily: brand.sans, fontSize: 34, color: "rgba(247,244,238,0.65)" }}>{a.how}</div>
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 90, right: 90, top: 500 + attempts.length * 118 + 30, padding: "30px 40px", borderRadius: 26, background: brand.charcoal, display: "flex", alignItems: "center", justifyContent: "space-between", opacity: tween(frame, 60, 70, 0, 1) }}>
        <span style={{ fontFamily: brand.sans, fontSize: 34, color: brand.cream }}>{footer}</span>
        <div style={{ width: 120, height: 64, borderRadius: 32, background: knob > 0.5 ? brand.gold : "rgba(247,244,238,0.2)", position: "relative" }}>
          <div style={{ position: "absolute", top: 6, left: 6 + knob * 56, width: 52, height: 52, borderRadius: 26, background: brand.cream }} />
        </div>
      </div>
      <Illustrative bottom={250} />
    </Stage>
  );
};
