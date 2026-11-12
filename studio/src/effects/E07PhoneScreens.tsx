import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Illustrative } from "./Illustrative";
import { Stage } from "./Stage";
import { tween , usePacedFrame } from "./util";

export type Tile = { label: string; value: string; tone?: "ok" | "warn" };

/** E07 Phone Screens — a phone shows a live scorecard while rings breathe out behind it; labels pop in on each side. */
export const PhoneScreens: React.FC<{ title: string; tiles: Tile[]; labels: string[] }> = ({ title, tiles, labels }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 16 } });
  const scroll = tween(frame, fps, 4 * fps, 0, 260);
  return (
    <Stage glow={brand.teal}>
      {[0, 1, 2, 3].map((k) => {
        const r = ((frame / fps) * 0.45 + k / 4) % 1;
        return (
          <div
            key={k}
            style={{
              position: "absolute",
              left: 540 - 700 * r,
              top: 960 - 700 * r,
              width: 1400 * r,
              height: 1400 * r,
              borderRadius: "50%",
              border: `3px solid ${brand.goldLight}`,
              opacity: 0.45 * (1 - r),
            }}
          />
        );
      })}
      <div
        style={{
          position: "absolute",
          left: 540 - 250,
          top: 460,
          width: 500,
          height: 1000,
          borderRadius: 66,
          background: brand.ink,
          border: "10px solid #2f3a44",
          boxShadow: `0 50px 120px rgba(0,0,0,0.7), 0 0 0 2px ${brand.gold}66`,
          overflow: "hidden",
          transform: `translateY(${(1 - enter) * 300}px) scale(${0.9 + 0.1 * enter})`,
        }}
      >
        <div style={{ padding: "60px 34px 0", fontFamily: brand.sans, fontSize: 24, letterSpacing: 2, color: brand.goldLight }}>
          FIRM COMMAND VIEW
        </div>
        <div style={{ padding: "8px 34px 20px", fontFamily: brand.serif, fontSize: 40, color: brand.cream }}>{title}</div>
        <div style={{ position: "absolute", left: 0, right: 0, top: 190, bottom: 0, overflow: "hidden" }}>
        <div style={{ transform: `translateY(${-scroll}px)` }}>
          {tiles.map((t, i) => (
            <div
              key={i}
              style={{
                margin: "16px 26px",
                padding: "26px 26px",
                borderRadius: 22,
                background: brand.charcoal,
                borderLeft: `8px solid ${t.tone === "warn" ? brand.alert : brand.gold}`,
                opacity: tween(frame, 10 + i * 5, 20 + i * 5, 0, 1),
              }}
            >
              <div style={{ fontFamily: brand.sans, fontSize: 22, color: "rgba(247,244,238,0.6)" }}>{t.label}</div>
              <div style={{ fontFamily: brand.serif, fontSize: 52, color: brand.cream, marginTop: 6 }}>{t.value}</div>
            </div>
          ))}
        </div>
        </div>
      </div>
      {labels.map((l, i) => {
        const left = i % 2 === 0;
        const p = spring({ frame: frame - 20 - i * 9, fps, config: { damping: 12 } });
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 560 + i * 200,
              ...(left ? { left: 40 } : { right: 40 }),
              padding: "18px 26px",
              borderRadius: 999,
              background: brand.cream,
              color: brand.ink,
              fontFamily: brand.sans,
              fontWeight: 700,
              fontSize: 30,
              scale: String(p),
              opacity: p,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            {l}
          </div>
        );
      })}
      <Illustrative bottom={300} />
    </Stage>
  );
};
