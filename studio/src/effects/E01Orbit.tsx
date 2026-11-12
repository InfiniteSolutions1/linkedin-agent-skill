import React from "react";
import { spring, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Stage } from "./Stage";
import { rand, tween , usePacedFrame } from "./util";

/** E01 Orbit — a phone flies up the frame, its feed scrolling at blur speed, a label riding its top edge. */
export const Orbit: React.FC<{ label: string; caption: string }> = ({ label, caption }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const rise = spring({ frame, fps, config: { damping: 18, mass: 0.9 } });
  const y = (1 - rise) * 1500;
  const rotY = tween(frame, 0, 3 * fps, -28, 12);
  const scroll = frame * 46 * (1 - tween(frame, 1.2 * fps, 2.4 * fps, 0, 0.92));
  const blur = tween(frame, 0.8 * fps, 2.2 * fps, 6, 0);
  const ring = (frame % 24) / 24;

  return (
    <Stage>
      <div style={{ position: "absolute", inset: 0, perspective: 1600 }}>
        <div
          style={{
            position: "absolute",
            left: 540 - 270,
            top: 360,
            width: 540,
            height: 1100,
            transform: `translateY(${y}px) rotateY(${rotY}deg) rotateX(8deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* ring pulse behind the phone */}
          <div
            style={{
              position: "absolute",
              left: 270 - 300 * (0.6 + ring),
              top: 550 - 300 * (0.6 + ring),
              width: 600 * (0.6 + ring),
              height: 600 * (0.6 + ring),
              borderRadius: "50%",
              border: `3px solid ${brand.goldLight}`,
              opacity: 0.5 * (1 - ring),
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 72,
              background: brand.charcoal,
              border: `10px solid #2f3a44`,
              boxShadow: `0 60px 120px rgba(0,0,0,0.6), 0 0 0 2px ${brand.gold}55`,
              overflow: "hidden",
            }}
          >
            <div style={{ filter: `blur(${blur}px)`, transform: `translateY(${-(scroll % 2400)}px)` }}>
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    margin: "22px 26px",
                    height: 150 + rand(i) * 90,
                    borderRadius: 26,
                    background: i % 5 === 2 ? `${brand.teal}cc` : "rgba(247,244,238,0.08)",
                  }}
                />
              ))}
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: -46,
              left: "50%",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
              padding: "18px 34px",
              borderRadius: 999,
              background: brand.gold,
              color: brand.ink,
              fontFamily: brand.sans,
              fontWeight: 700,
              fontSize: 34,
              letterSpacing: 1.5,
            }}
          >
            {label}
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 1560,
          textAlign: "center",
          fontFamily: brand.serif,
          fontSize: 84,
          lineHeight: 1.1,
          color: brand.cream,
          opacity: tween(frame, 1.2 * fps, 1.8 * fps, 0, 1),
          transform: `translateY(${tween(frame, 1.2 * fps, 1.8 * fps, 30, 0)}px)`,
        }}
      >
        {caption}
      </div>
    </Stage>
  );
};
