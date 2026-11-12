import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Stage } from "./Stage";
import { tween , usePacedFrame } from "./util";

/**
 * Logo sting (Wiggle-style bounce). PLACEHOLDER wordmark: an infinity mark + "Infinite Solutions"
 * in Lora until the real SVG logo is dropped into public/logo.svg.
 */
export const LogoSting: React.FC<{ cta?: string }> = ({ cta }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const draw = tween(frame, 0, 1.1 * fps, 0, 1);
  const pop = spring({ frame: frame - 0.8 * fps, fps, config: { damping: 7, stiffness: 140 } });
  const len = 1000;
  return (
    <Stage>
      <div style={{ position: "absolute", left: 0, right: 0, top: 620, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <svg width={420} height={210} viewBox="0 0 200 100" style={{ scale: String(0.9 + 0.1 * pop) }}>
          <path
            d="M100 50 C 80 20, 30 20, 30 50 C 30 80, 80 80, 100 50 C 120 20, 170 20, 170 50 C 170 80, 120 80, 100 50 Z"
            fill="none"
            stroke={brand.goldLight}
            strokeWidth={9}
            strokeLinecap="round"
            pathLength={len}
            strokeDasharray={len}
            strokeDashoffset={len * (1 - draw)}
          />
        </svg>
        <div
          style={{
            marginTop: 40,
            fontFamily: brand.serif,
            fontSize: 96,
            color: brand.cream,
            opacity: pop,
            transform: `translateY(${(1 - pop) * 40}px) rotate(${(1 - pop) * -4}deg)`,
          }}
        >
          {brand.name}
        </div>
        <div style={{ marginTop: 16, fontFamily: brand.sans, fontSize: 36, letterSpacing: 4, color: brand.goldLight, opacity: tween(frame, 1.4 * fps, 1.9 * fps, 0, 1) }}>
          OPERATIONS & AI FOR PLAINTIFF FIRMS
        </div>
        {cta ? (
          <div
            style={{
              marginTop: 120,
              padding: "28px 52px",
              borderRadius: 999,
              border: `3px solid ${brand.gold}`,
              fontFamily: brand.sans,
              fontWeight: 600,
              fontSize: 40,
              color: brand.cream,
              opacity: tween(frame, 1.8 * fps, 2.3 * fps, 0, 1),
            }}
          >
            {cta}
          </div>
        ) : null}
      </div>
    </Stage>
  );
};
