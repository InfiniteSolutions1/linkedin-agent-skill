import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Illustrative } from "./Illustrative";
import { Stage } from "./Stage";
import { tween } from "./util";

export type FlowStep = { title: string; detail: string; owner?: string };

/** System walkthrough — nodes draw in one by one, connectors animate between them. */
export const FlowDiagram: React.FC<{ heading: string; steps: FlowStep[]; perStep?: number }> = ({
  heading,
  steps,
  perStep = 22,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const top = 420;
  const gap = 270;

  return (
    <Stage glow={brand.teal}>
      <div
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 190,
          fontFamily: brand.serif,
          fontSize: 76,
          color: brand.cream,
          lineHeight: 1.1,
          opacity: tween(frame, 0, 12, 0, 1),
        }}
      >
        {heading}
      </div>
      {steps.map((s, i) => {
        const f = frame - 10 - i * perStep;
        const pop = spring({ frame: f, fps, config: { damping: 16 } });
        const line = tween(frame, 10 + i * perStep + 8, 10 + (i + 1) * perStep, 0, 1);
        const done = f > perStep;
        return (
          <React.Fragment key={i}>
            {i < steps.length - 1 ? (
              <div
                style={{
                  position: "absolute",
                  left: 168,
                  top: top + i * gap + 120,
                  width: 6,
                  height: (gap - 120) * line,
                  background: `linear-gradient(${brand.gold}, ${brand.goldLight})`,
                  borderRadius: 3,
                }}
              />
            ) : null}
            <div
              style={{
                position: "absolute",
                left: 90,
                right: 90,
                top: top + i * gap,
                height: 160,
                display: "flex",
                alignItems: "center",
                gap: 40,
                opacity: f < 0 ? 0 : pop,
                transform: `translateX(${(1 - pop) * 80}px)`,
              }}
            >
              <div
                style={{
                  width: 160,
                  height: 160,
                  flexShrink: 0,
                  borderRadius: 40,
                  background: done ? brand.gold : brand.charcoal,
                  border: `3px solid ${brand.gold}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: brand.sans,
                  fontWeight: 700,
                  fontSize: 56,
                  color: done ? brand.ink : brand.goldLight,
                }}
              >
                {done ? "✓" : String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div style={{ fontFamily: brand.sans, fontWeight: 700, fontSize: 52, color: brand.cream }}>
                  {s.title}
                </div>
                <div style={{ fontFamily: brand.sans, fontSize: 36, color: "rgba(247,244,238,0.65)", marginTop: 8 }}>
                  {s.detail}
                  {s.owner ? <span style={{ color: brand.goldLight }}> · {s.owner}</span> : null}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
      <Illustrative />
    </Stage>
  );
};
