import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Illustrative } from "../effects/Illustrative";
import { Stage } from "../effects/Stage";
import { tween, usePacedFrame } from "../effects/util";

export type Hour = { label: string; answered: number; abandoned: number };

/** Inbound calls per hour, answered vs abandoned, stacked. The abandoned slice is what intake never sees. */
export const CallsByHour: React.FC<{ heading: string; hours: Hour[]; totals: { label: string; value: string; bad?: boolean }[] }> = ({ heading, hours, totals }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const max = Math.max(...hours.map((h) => h.answered + h.abandoned));
  const chartH = 640;
  return (
    <Stage>
      <div style={{ position: "absolute", left: 90, right: 90, top: 200, fontFamily: brand.serif, fontSize: 80, lineHeight: 1.08, color: brand.cream }}>{heading}</div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 470, display: "flex", gap: 30, fontFamily: brand.sans, fontSize: 30, color: "rgba(247,244,238,0.75)" }}>
        <span><span style={{ display: "inline-block", width: 24, height: 24, borderRadius: 6, background: brand.gold, marginRight: 12, verticalAlign: "middle" }} />Answered</span>
        <span><span style={{ display: "inline-block", width: 24, height: 24, borderRadius: 6, background: brand.alert, marginRight: 12, verticalAlign: "middle" }} />Abandoned</span>
      </div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 560, height: chartH, display: "flex", alignItems: "flex-end", gap: 12 }}>
        {hours.map((h, i) => {
          const g = spring({ frame: frame - 6 - i * 2.5, fps, config: { damping: 16 } });
          const a = (h.answered / max) * chartH * g;
          const b = (h.abandoned / max) * chartH * g;
          return (
            <div key={h.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "100%", height: b, background: brand.alert, borderRadius: "10px 10px 0 0" }} />
              <div style={{ width: "100%", height: a, background: brand.gold }} />
              <div style={{ marginTop: 12, fontFamily: brand.sans, fontSize: 20, color: "rgba(247,244,238,0.55)" }}>{h.label}</div>
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 1290, display: "flex", gap: 20 }}>
        {totals.map((t, i) => (
          <div key={t.label} style={{ flex: 1, padding: "26px 24px", borderRadius: 24, background: brand.charcoal, opacity: tween(frame, 40 + i * 6, 50 + i * 6, 0, 1) }}>
            <div style={{ fontFamily: brand.sans, fontSize: 24, letterSpacing: 1, textTransform: "uppercase", color: "rgba(247,244,238,0.6)" }}>{t.label}</div>
            <div style={{ fontFamily: brand.serif, fontSize: 64, color: t.bad ? brand.alert : brand.cream, marginTop: 6 }}>{t.value}</div>
          </div>
        ))}
      </div>
      <Illustrative bottom={250} />
    </Stage>
  );
};
