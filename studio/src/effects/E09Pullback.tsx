import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Stage } from "./Stage";
import { easeInOut, tween } from "./util";

export type Dept = { name: string; items: string[] };

/** E09 Pullback — start tight on one row, crane up until the whole board fills the frame. */
export const Pullback: React.FC<{ depts: Dept[]; focus?: number; title: string }> = ({ depts, focus = 1, title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const z = tween(frame, 0.4 * fps, 2.4 * fps, 3.2, 1, easeInOut);
  const colW = 210;
  const boardW = depts.length * colW + (depts.length - 1) * 20;
  const focusX = (focus - (depts.length - 1) / 2) * (colW + 20);
  const tx = -focusX * (z - 1) / (3.2 - 1) * 1;
  return (
    <Stage>
      <div
        style={{
          position: "absolute",
          left: 540 - boardW / 2,
          top: 520,
          width: boardW,
          display: "flex",
          gap: 20,
          transform: `translateX(${tx * 1}px) scale(${z})`,
          transformOrigin: `${boardW / 2 + focusX}px 140px`,
        }}
      >
        {depts.map((d, c) => (
          <div key={c} style={{ width: colW, display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                padding: "22px 12px",
                borderRadius: 18,
                background: c === focus ? brand.gold : brand.teal,
                color: c === focus ? brand.ink : brand.cream,
                fontFamily: brand.sans,
                fontWeight: 700,
                fontSize: 28,
                textAlign: "center",
              }}
            >
              {d.name}
            </div>
            {d.items.map((it, r) => (
              <div
                key={r}
                style={{
                  padding: "20px 14px",
                  minHeight: 120,
                  borderRadius: 16,
                  background: brand.charcoal,
                  border: `2px solid ${c === focus ? brand.gold + "88" : "rgba(247,244,238,0.08)"}`,
                  color: brand.cream,
                  fontFamily: brand.sans,
                  fontSize: 24,
                  lineHeight: 1.25,
                  opacity: tween(frame, 0.3 * fps + (r + Math.abs(c - focus)) * 4, 0.3 * fps + (r + Math.abs(c - focus)) * 4 + 10, 0, 1),
                }}
              >
                {it}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 190,
          fontFamily: brand.serif,
          fontSize: 80,
          lineHeight: 1.1,
          color: brand.cream,
          opacity: tween(frame, 2 * fps, 2.6 * fps, 0, 1),
        }}
      >
        {title}
      </div>
      <div
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 1600,
          textAlign: "center",
          fontFamily: brand.sans,
          fontSize: 38,
          color: brand.goldLight,
          letterSpacing: 2,
          opacity: tween(frame, 2.4 * fps, 3 * fps, 0, 1),
        }}
      >
        SOPs · AUTOMATION · AI AGENTS · ONE SCORECARD
      </div>
    </Stage>
  );
};
