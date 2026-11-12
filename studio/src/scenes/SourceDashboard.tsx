import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Illustrative } from "../effects/Illustrative";
import { Stage } from "../effects/Stage";
import { tween, usePacedFrame } from "../effects/util";

export type Campaign = { name: string; source: string; spend: string; cpl: string; cpa: string; tone?: "good" | "bad" };

/** Ad sources stream into one live scorecard: spend, CPL, CPA, then per-campaign rows. */
export const SourceDashboard: React.FC<{ sources: string[]; kpis: { label: string; value: string }[]; campaigns: Campaign[] }> = ({ sources, kpis, campaigns }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const panelTop = 560;
  const live = Math.floor(frame / 15) % 2 === 0;
  return (
    <Stage glow={brand.teal}>
      {/* source chips */}
      <div style={{ position: "absolute", left: 90, right: 90, top: 200, display: "flex", justifyContent: "space-between" }}>
        {sources.map((s, i) => {
          const p = spring({ frame: frame - i * 6, fps, config: { damping: 14 } });
          return (
            <div key={s} style={{ padding: "24px 30px", borderRadius: 22, background: brand.charcoal, border: `2px solid ${brand.gold}88`, fontFamily: brand.sans, fontWeight: 700, fontSize: 34, color: brand.cream, scale: String(p), opacity: p }}>
              {s}
            </div>
          );
        })}
      </div>
      {/* data streams */}
      {sources.map((_, i) => {
        const x = 90 + 60 + i * ((1080 - 180 - 120) / (sources.length - 1));
        return Array.from({ length: 4 }).map((__, k) => {
          const t = ((frame / fps) * 1.2 + k / 4 + i * 0.13) % 1;
          return <div key={`${i}-${k}`} style={{ position: "absolute", left: x + (540 - x) * t * 0.0, top: 300 + t * (panelTop - 300), width: 12, height: 12, borderRadius: 6, background: brand.goldLight, opacity: tween(frame, 10, 20, 0, 1) * (1 - t) }} />;
        });
      })}
      <div style={{ position: "absolute", left: 70, right: 70, top: panelTop, bottom: 330, borderRadius: 40, background: "rgba(39,49,58,0.85)", border: "2px solid rgba(247,244,238,0.08)", padding: 50, opacity: tween(frame, 8, 20, 0, 1) }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: brand.serif, fontSize: 52, color: brand.cream }}>Marketing scorecard</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: brand.sans, fontSize: 26, fontWeight: 700, color: brand.goldLight }}>
            <span style={{ width: 16, height: 16, borderRadius: 8, background: live ? brand.alert : "transparent", border: `2px solid ${brand.alert}` }} /> LIVE
          </div>
        </div>
        <div style={{ display: "flex", gap: 20, marginTop: 36 }}>
          {kpis.map((k, i) => {
            const p = spring({ frame: frame - 16 - i * 6, fps, config: { damping: 15 } });
            return (
              <div key={k.label} style={{ flex: 1, padding: "28px 24px", borderRadius: 24, background: brand.ink, opacity: p, transform: `translateY(${(1 - p) * 30}px)` }}>
                <div style={{ fontFamily: brand.sans, fontSize: 24, letterSpacing: 1, color: "rgba(247,244,238,0.6)", textTransform: "uppercase" }}>{k.label}</div>
                <div style={{ fontFamily: brand.serif, fontSize: 60, color: brand.cream, marginTop: 8 }}>{k.value}</div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 40, display: "flex", fontFamily: brand.sans, fontSize: 24, letterSpacing: 1, color: "rgba(247,244,238,0.5)", textTransform: "uppercase", padding: "0 20px" }}>
          <div style={{ flex: 2.3 }}>Campaign</div><div style={{ flex: 1 }}>Spend</div><div style={{ flex: 1 }}>CPL</div><div style={{ flex: 1 }}>CPA</div>
        </div>
        {campaigns.map((c, i) => {
          const p = tween(frame, 34 + i * 6, 44 + i * 6, 0, 1);
          return (
            <div key={c.name} style={{ marginTop: 14, display: "flex", alignItems: "center", padding: "22px 20px", borderRadius: 18, background: "rgba(17,18,15,0.6)", borderLeft: `8px solid ${c.tone === "bad" ? brand.alert : brand.gold}`, fontFamily: brand.sans, fontSize: 32, color: brand.cream, opacity: p, transform: `translateX(${(1 - p) * 40}px)` }}>
              <div style={{ flex: 2.3 }}>
                {c.name}
                <div style={{ fontSize: 22, color: brand.goldLight, marginTop: 4 }}>{c.source}</div>
              </div>
              <div style={{ flex: 1 }}>{c.spend}</div>
              <div style={{ flex: 1 }}>{c.cpl}</div>
              <div style={{ flex: 1, color: c.tone === "bad" ? brand.alert : brand.cream, fontWeight: 700 }}>{c.cpa}</div>
            </div>
          );
        })}
      </div>
      <Illustrative bottom={250} />
    </Stage>
  );
};
