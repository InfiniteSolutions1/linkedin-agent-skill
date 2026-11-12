import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Stage } from "./Stage";
import { tween, usePacedFrame } from "./util";

/** A rhetorical "Do you know…?" beat. Words rise in; below, the metric slot sits empty — the point is you don't know. */
export const Question: React.FC<{ kicker?: string; lines: string[]; unknown?: string[] }> = ({ kicker, lines, unknown = [] }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  return (
    <Stage>
      {kicker ? (
        <div style={{ position: "absolute", left: 90, top: 300, fontFamily: brand.sans, fontSize: 34, letterSpacing: 4, color: brand.goldLight, textTransform: "uppercase", opacity: tween(frame, 0, 10, 0, 1) }}>
          {kicker}
        </div>
      ) : null}
      <div style={{ position: "absolute", left: 90, right: 90, top: 380 }}>
        {lines.map((l, i) => {
          const p = spring({ frame: frame - 6 - i * 14, fps, config: { damping: 18 } });
          return (
            <div key={i} style={{ fontFamily: brand.serif, fontSize: 96, lineHeight: 1.1, color: i === lines.length - 1 ? brand.goldLight : brand.cream, opacity: p, transform: `translateY(${(1 - p) * 50}px)`, marginBottom: 26 }}>
              {l}
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 1240, display: "flex", flexDirection: "column", gap: 22 }}>
        {unknown.map((u, i) => {
          const p = tween(frame, 30 + i * 8, 42 + i * 8, 0, 1);
          return (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "30px 40px", borderRadius: 24, background: brand.charcoal, border: "2px dashed rgba(247,244,238,0.2)", opacity: p, transform: `translateX(${(1 - p) * 60}px)` }}>
              <span style={{ fontFamily: brand.sans, fontSize: 38, color: "rgba(247,244,238,0.8)" }}>{u}</span>
              <span style={{ fontFamily: brand.serif, fontSize: 56, color: brand.alert }}>?</span>
            </div>
          );
        })}
      </div>
    </Stage>
  );
};
