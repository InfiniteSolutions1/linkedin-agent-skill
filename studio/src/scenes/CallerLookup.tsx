import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Illustrative } from "../effects/Illustrative";
import { Stage } from "../effects/Stage";
import { tween, usePacedFrame } from "../effects/util";

/** An inbound number is looked up in the CRM before anyone says hello; the matched record pops in. */
export const CallerLookup: React.FC<{ heading: string; number: string; fields: { k: string; v: string }[]; badge: string }> = ({ heading, number, fields, badge }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const ring = spring({ frame, fps, config: { damping: 12 } });
  const searching = frame > 14 && frame < 40;
  const found = spring({ frame: frame - 40, fps, config: { damping: 14 } });
  const dots = ".".repeat(1 + (Math.floor(frame / 5) % 3));
  return (
    <Stage glow={brand.teal}>
      <div style={{ position: "absolute", left: 90, right: 90, top: 200, fontFamily: brand.serif, fontSize: 80, lineHeight: 1.08, color: brand.cream }}>{heading}</div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 520, padding: "40px 46px", borderRadius: 30, background: brand.charcoal, border: `2px solid ${brand.gold}88`, display: "flex", alignItems: "center", gap: 34, scale: String(ring) }}>
        <div style={{ width: 110, height: 110, borderRadius: 55, background: brand.gold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56 }}>📞</div>
        <div>
          <div style={{ fontFamily: brand.sans, fontSize: 28, letterSpacing: 2, color: brand.goldLight }}>INBOUND CALL</div>
          <div style={{ fontFamily: brand.sans, fontWeight: 700, fontSize: 60, color: brand.cream }}>{number}</div>
        </div>
      </div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 790, textAlign: "center", fontFamily: brand.sans, fontSize: 36, color: brand.goldLight, opacity: searching ? 1 : 0 }}>
        Searching CRM{dots}
      </div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 870, padding: "44px 46px", borderRadius: 30, background: brand.cream, opacity: found, transform: `translateY(${(1 - found) * 80}px)` }}>
        <div style={{ display: "inline-block", padding: "10px 22px", borderRadius: 999, background: brand.gold, color: brand.ink, fontFamily: brand.sans, fontWeight: 800, fontSize: 26, letterSpacing: 1 }}>{badge}</div>
        {fields.map((f, i) => (
          <div key={f.k} style={{ display: "flex", justifyContent: "space-between", padding: "22px 0", borderBottom: i < fields.length - 1 ? "1px solid rgba(17,18,15,0.12)" : "none", fontFamily: brand.sans, fontSize: 36, opacity: tween(frame, 46 + i * 5, 54 + i * 5, 0, 1) }}>
            <span style={{ color: "rgba(17,18,15,0.55)" }}>{f.k}</span>
            <span style={{ color: brand.ink, fontWeight: 600 }}>{f.v}</span>
          </div>
        ))}
      </div>
      <Illustrative bottom={250} />
    </Stage>
  );
};
