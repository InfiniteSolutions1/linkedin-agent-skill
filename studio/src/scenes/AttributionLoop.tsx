import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Stage } from "../effects/Stage";
import { tween, usePacedFrame } from "../effects/util";

/** Signed-case data flowing from the CRM back to the ad platforms. First broken (✗), then connected (✓). */
export const AttributionLoop: React.FC<{ question: string; platforms: string[]; crm?: string }> = ({ question, platforms, crm = "Case management / CRM" }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const fixed = frame > 50;
  const fix = spring({ frame: frame - 50, fps, config: { damping: 12 } });
  const topY = 620;
  const botY = 1260;
  return (
    <Stage>
      <div style={{ position: "absolute", left: 90, right: 90, top: 200, fontFamily: brand.serif, fontSize: 80, lineHeight: 1.08, color: brand.cream }}>{question}</div>
      {platforms.map((p, i) => {
        const x = 90 + i * ((1080 - 180) / platforms.length) + 10;
        const w = (1080 - 180) / platforms.length - 20;
        const cx = x + w / 2;
        const travel = ((frame / fps) * 0.9 + i * 0.2) % 1;
        return (
          <React.Fragment key={p}>
            <div style={{ position: "absolute", left: x, top: topY, width: w, padding: "30px 0", borderRadius: 22, background: brand.charcoal, border: `2px solid ${fixed ? brand.gold : "rgba(247,244,238,0.15)"}`, textAlign: "center", fontFamily: brand.sans, fontWeight: 700, fontSize: 32, color: brand.cream }}>{p}</div>
            <div style={{ position: "absolute", left: cx - 3, top: topY + 110, width: 6, height: botY - topY - 110, background: fixed ? brand.gold : "rgba(247,244,238,0.12)", opacity: fixed ? 0.5 + 0.5 * fix : 1 }} />
            {!fixed ? (
              <div style={{ position: "absolute", left: cx - 34, top: (topY + botY) / 2 - 10, width: 68, height: 68, borderRadius: 34, background: brand.alert, color: brand.ink, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: brand.sans, fontWeight: 800, fontSize: 40, opacity: tween(frame, 16 + i * 6, 24 + i * 6, 0, 1) }}>✗</div>
            ) : (
              <>
                <div style={{ position: "absolute", left: cx - 14, top: botY - travel * (botY - topY - 110) - 14, width: 28, height: 28, borderRadius: 14, background: brand.goldLight, boxShadow: `0 0 24px ${brand.goldLight}` }} />
                <div style={{ position: "absolute", left: cx - 34, top: (topY + botY) / 2 - 10, width: 68, height: 68, borderRadius: 34, background: brand.gold, color: brand.ink, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: brand.sans, fontWeight: 800, fontSize: 40, scale: String(fix) }}>✓</div>
              </>
            )}
          </React.Fragment>
        );
      })}
      <div style={{ position: "absolute", left: 90, right: 90, top: botY, padding: "40px 0", borderRadius: 28, background: brand.cream, textAlign: "center", fontFamily: brand.sans, fontWeight: 700, fontSize: 40, color: brand.ink }}>
        {crm}
        <div style={{ fontWeight: 500, fontSize: 30, color: brand.goldDeep, marginTop: 8 }}>Signed case · case type · fee</div>
      </div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 1500, textAlign: "center", fontFamily: brand.serif, fontSize: 56, color: fixed ? brand.goldLight : "rgba(247,244,238,0.7)" }}>
        {fixed ? "Now the algorithm learns who signs." : "The ad platforms optimize for clicks."}
      </div>
    </Stage>
  );
};
