import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Stage } from "./Stage";
import { tween, usePacedFrame } from "./util";

/** The ISC offer card: what the free audit covers, ISC's real terms, and the next step. */
export const Offer: React.FC<{ title: string; items: string[]; foot?: string }> = ({
  title,
  items,
  foot = "Free, under NDA. We reply the same business day.",
}) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const card = spring({ frame, fps, config: { damping: 16 } });
  return (
    <Stage>
      <div style={{ position: "absolute", left: 90, right: 90, top: 300, padding: "80px 70px", borderRadius: 44, background: brand.cream, boxShadow: "0 50px 110px rgba(0,0,0,0.55)", transform: `translateY(${(1 - card) * 200}px)`, opacity: card }}>
        <div style={{ fontFamily: brand.sans, fontSize: 30, letterSpacing: 4, color: brand.goldDeep, textTransform: "uppercase" }}>Let ISC take a look</div>
        <div style={{ fontFamily: brand.serif, fontSize: 92, lineHeight: 1.05, color: brand.ink, marginTop: 20 }}>{title}</div>
        <div style={{ marginTop: 50, display: "flex", flexDirection: "column", gap: 26 }}>
          {items.map((it, i) => {
            const p = spring({ frame: frame - 14 - i * 8, fps, config: { damping: 14 } });
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 28, opacity: p, transform: `translateX(${(1 - p) * 50}px)` }}>
                <div style={{ width: 64, height: 64, borderRadius: 18, background: brand.gold, color: brand.ink, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: brand.sans, fontWeight: 800, fontSize: 36, flexShrink: 0 }}>✓</div>
                <div style={{ fontFamily: brand.sans, fontWeight: 600, fontSize: 46, color: brand.ink }}>{it}</div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 56, fontFamily: brand.sans, fontSize: 32, color: "rgba(17,18,15,0.6)", opacity: tween(frame, 14 + items.length * 8, 24 + items.length * 8, 0, 1) }}>{foot}</div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 1580, textAlign: "center", fontFamily: brand.serif, fontSize: 52, color: brand.cream, opacity: tween(frame, 30 + items.length * 8, 42 + items.length * 8, 0, 1) }}>
        {brand.url}
      </div>
    </Stage>
  );
};
