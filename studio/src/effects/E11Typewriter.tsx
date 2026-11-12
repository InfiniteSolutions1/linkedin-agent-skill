import React from "react";
import { useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Stage } from "./Stage";
import { tween , usePacedFrame } from "./util";

/** E11 Typewriter — a terminal types the line out with a blinking cursor. */
export const Typewriter: React.FC<{ line: string; cps?: number; prompt?: string }> = ({ line, cps = 26, prompt = "isc" }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const n = Math.min(line.length, Math.floor(Math.max(0, frame - 8) * (cps / fps)));
  const cursorOn = Math.floor(frame / 15) % 2 === 0 || n < line.length;
  return (
    <Stage>
      <div
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 560,
          borderRadius: 32,
          background: "#171915",
          border: `2px solid ${brand.gold}55`,
          boxShadow: "0 40px 90px rgba(0,0,0,0.5)",
          overflow: "hidden",
          opacity: tween(frame, 0, 8, 0, 1),
          transform: `translateY(${tween(frame, 0, 10, 40, 0)}px)`,
        }}
      >
        <div style={{ display: "flex", gap: 14, padding: "26px 30px", background: brand.charcoal }}>
          {[brand.alert, brand.goldLight, brand.teal].map((c) => (
            <div key={c} style={{ width: 24, height: 24, borderRadius: 12, background: c }} />
          ))}
        </div>
        <div style={{ padding: "50px 46px 70px", fontFamily: "'SF Mono', Menlo, monospace", fontSize: 54, lineHeight: 1.35, color: brand.cream, minHeight: 420 }}>
          <span style={{ color: brand.goldLight }}>{prompt} ›</span> {line.slice(0, n)}
          <span style={{ opacity: cursorOn ? 1 : 0, color: brand.goldLight }}>▍</span>
        </div>
      </div>
    </Stage>
  );
};
