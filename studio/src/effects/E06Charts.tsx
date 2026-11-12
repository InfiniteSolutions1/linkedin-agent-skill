import React from "react";
import { interpolateColors, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Illustrative } from "./Illustrative";
import { Stage } from "./Stage";
import { rand, tween } from "./util";

/** E06 Charts — bars grow in a staggered wave on a dark dashboard panel, with a KPI counter. */
export const Charts: React.FC<{ kpi: string; value: number; suffix: string; sub: string }> = ({
  kpi,
  value,
  suffix,
  sub,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const n = 16;
  const count = Math.round(tween(frame, 8, 2 * fps, 0, value));

  return (
    <Stage>
      <div
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 300,
          height: 1240,
          borderRadius: 48,
          background: "rgba(39,49,58,0.75)",
          border: "2px solid rgba(247,244,238,0.08)",
          padding: 70,
        }}
      >
        <div style={{ fontFamily: brand.sans, fontSize: 34, letterSpacing: 3, textTransform: "uppercase", color: brand.goldLight }}>
          {kpi}
        </div>
        <div style={{ fontFamily: brand.serif, fontSize: 220, lineHeight: 1, color: brand.cream, marginTop: 20 }}>
          {count}
          <span style={{ fontSize: 110, color: brand.goldLight }}>{suffix}</span>
        </div>
        <div style={{ fontFamily: brand.sans, fontSize: 38, color: "rgba(247,244,238,0.65)", marginTop: 10 }}>{sub}</div>
        <div style={{ position: "absolute", left: 70, right: 70, bottom: 70, height: 560, display: "flex", alignItems: "flex-end", gap: 14 }}>
          {Array.from({ length: n }).map((_, i) => {
            const t = i / (n - 1);
            const g1 = spring({ frame: frame - 6 - i * 2, fps, config: { damping: 14 } });
            const g2 = spring({ frame: frame - 34 - i * 2, fps, config: { damping: 18 } });
            const h = (0.25 + 0.55 * t + 0.12 * rand(i)) * (0.75 * g1 + 0.25 * g2);
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h * 100}%`,
                  borderRadius: "14px 14px 4px 4px",
                  background: interpolateColors(t, [0, 1], [brand.teal, brand.goldLight]),
                  filter: `blur(${(1 - g1) * 6}px)`,
                }}
              />
            );
          })}
        </div>
      </div>
      <Illustrative />
    </Stage>
  );
};
