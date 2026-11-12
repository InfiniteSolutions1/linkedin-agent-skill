import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Illustrative } from "../effects/Illustrative";
import { Stage } from "../effects/Stage";
import { rand, tween, usePacedFrame } from "../effects/util";

/** The welcome message as a waveform; red pins drop where callers hang up before reaching a person. */
export const WelcomeDropoff: React.FC<{ heading: string; message: string; seconds: number; hangups: number[]; avg: string }> = ({ heading, message, seconds, hangups, avg }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const play = tween(frame, 10, 70, 0, 1, (t) => t);
  const bars = 56;
  const left = 90;
  const width = 900;
  return (
    <Stage>
      <div style={{ position: "absolute", left: 90, right: 90, top: 200, fontFamily: brand.serif, fontSize: 80, lineHeight: 1.08, color: brand.cream }}>{heading}</div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 560, padding: "34px 40px", borderRadius: 26, background: brand.cream, fontFamily: brand.serif, fontStyle: "italic", fontSize: 40, lineHeight: 1.3, color: brand.ink }}>
        “{message}”
      </div>
      <div style={{ position: "absolute", left, top: 900, width, height: 260, display: "flex", alignItems: "center", gap: 6 }}>
        {Array.from({ length: bars }).map((_, i) => {
          const on = i / bars < play;
          const h = 40 + rand(i * 3) * 200;
          return <div key={i} style={{ flex: 1, height: h, borderRadius: 6, background: on ? brand.goldLight : "rgba(247,244,238,0.15)" }} />;
        })}
      </div>
      {hangups.map((s, i) => {
        const x = left + (s / seconds) * width;
        const show = play >= s / seconds;
        const drop = spring({ frame: frame - (10 + (s / seconds) * 60), fps, config: { damping: 10 } });
        return show ? (
          <div key={i} style={{ position: "absolute", left: x - 22, top: 830 - (1 - drop) * 80, opacity: drop }}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: brand.alert, color: brand.ink, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 800, fontFamily: brand.sans }}>✕</div>
            <div style={{ width: 4, height: 340, background: `${brand.alert}99`, margin: "0 auto" }} />
          </div>
        ) : null;
      })}
      <div style={{ position: "absolute", left, top: 1200, width, display: "flex", justifyContent: "space-between", fontFamily: brand.sans, fontSize: 26, color: "rgba(247,244,238,0.5)" }}>
        <span>0s</span><span>{Math.round(seconds / 2)}s</span><span>{seconds}s · agent picks up</span>
      </div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 1300, display: "flex", justifyContent: "space-between", alignItems: "baseline", opacity: tween(frame, 70, 80, 0, 1) }}>
        <span style={{ fontFamily: brand.sans, fontSize: 38, color: "rgba(247,244,238,0.75)" }}>Average hang-up</span>
        <span style={{ fontFamily: brand.serif, fontSize: 96, color: brand.alert }}>{avg}</span>
      </div>
      <Illustrative bottom={250} />
    </Stage>
  );
};
