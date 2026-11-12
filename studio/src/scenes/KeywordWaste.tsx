import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Illustrative } from "../effects/Illustrative";
import { Stage } from "../effects/Stage";
import { tween, usePacedFrame } from "../effects/util";

export type Keyword = { term: string; spend: string; leads: number; signed: number; waste?: boolean };

/** AI scans the search terms, then strikes the ones that spend money and never sign a case. */
export const KeywordWaste: React.FC<{ heading: string; rows: Keyword[]; total: string }> = ({ heading, rows, total }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const scanY = tween(frame, 14, 60, 0, 1);
  return (
    <Stage>
      <div style={{ position: "absolute", left: 90, right: 90, top: 200, fontFamily: brand.serif, fontSize: 80, lineHeight: 1.08, color: brand.cream, opacity: tween(frame, 0, 10, 0, 1) }}>{heading}</div>
      <div style={{ position: "absolute", left: 70, right: 70, top: 520, borderRadius: 36, background: "rgba(39,49,58,0.85)", padding: "40px 40px 50px", overflow: "hidden" }}>
        <div style={{ display: "flex", fontFamily: brand.sans, fontSize: 24, letterSpacing: 1, color: "rgba(247,244,238,0.5)", textTransform: "uppercase", padding: "0 16px 16px" }}>
          <div style={{ flex: 2.4 }}>Search term</div><div style={{ flex: 1 }}>Spend</div><div style={{ flex: 0.8 }}>Leads</div><div style={{ flex: 0.8 }}>Signed</div>
        </div>
        {rows.map((r, i) => {
          const flagged = r.waste && scanY > (i + 0.6) / rows.length;
          const strike = spring({ frame: frame - 18 - (i / rows.length) * 46, fps, config: { damping: 20 } });
          return (
            <div key={r.term} style={{ position: "relative", display: "flex", alignItems: "center", padding: "26px 16px", marginTop: 10, borderRadius: 16, background: flagged ? `${brand.alert}2e` : "rgba(17,18,15,0.55)", fontFamily: brand.sans, fontSize: 32, color: flagged ? "rgba(247,244,238,0.65)" : brand.cream }}>
              <div style={{ flex: 2.4 }}>“{r.term}”</div>
              <div style={{ flex: 1 }}>{r.spend}</div>
              <div style={{ flex: 0.8 }}>{r.leads}</div>
              <div style={{ flex: 0.8, fontWeight: 700, color: r.signed === 0 ? brand.alert : brand.goldLight }}>{r.signed}</div>
              {flagged ? (
                <>
                  <div style={{ position: "absolute", left: 16, top: "50%", height: 4, width: `${strike * 52}%`, background: brand.alert }} />
                  <div style={{ position: "absolute", right: 16, top: -14, padding: "6px 14px", borderRadius: 999, background: brand.alert, color: brand.ink, fontSize: 20, fontWeight: 800, letterSpacing: 1, scale: String(strike) }}>AI: NEGATIVE KEYWORD</div>
                </>
              ) : null}
            </div>
          );
        })}
        <div style={{ position: "absolute", left: 0, right: 0, top: 80 + scanY * 820, height: 6, background: `linear-gradient(90deg, transparent, ${brand.goldLight}, transparent)`, opacity: scanY < 1 ? 0.9 : 0 }} />
      </div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 1440, display: "flex", justifyContent: "space-between", alignItems: "baseline", opacity: tween(frame, 62, 74, 0, 1) }}>
        <span style={{ fontFamily: brand.sans, fontSize: 38, color: "rgba(247,244,238,0.75)" }}>Spend with zero signed cases</span>
        <span style={{ fontFamily: brand.serif, fontSize: 84, color: brand.alert }}>{total}</span>
      </div>
      <Illustrative bottom={250} />
    </Stage>
  );
};
