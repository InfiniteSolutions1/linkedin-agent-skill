import React from "react";
import { useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Stage } from "./Stage";
import { tween , usePacedFrame } from "./util";

/** E02 Vertigo — the centre card holds its size while the corridor of cards stretches away behind it. */
export const Vertigo: React.FC<{ center: string; wall: string[]; caption: string }> = ({ center, wall, caption }) => {
  const frame = usePacedFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  const rings = 14;
  return (
    <Stage glow={brand.alert}>
      {Array.from({ length: rings }).map((_, i) => {
        const d = 1 + ((i + t * 1.6) % rings); // depth grows: camera dollies back
        const s = 2.6 / d;
        const op = Math.min(1, (rings - d) / 4) * Math.max(0, Math.min(1, (d - 1.4) / 1.2));
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 540 - 520 * s,
              top: 900 - 900 * s,
              width: 1040 * s,
              height: 1800 * s,
              border: `${Math.max(1, 6 * s)}px solid ${i % 3 === 0 ? brand.gold : "rgba(247,244,238,0.25)"}`,
              borderRadius: 30 * s,
              opacity: op,
            }}
          >
            {[0, 1, 2, 3].map((k) => (
              <div
                key={k}
                style={{
                  position: "absolute",
                  ...(k === 0 ? { left: 40 * s, top: 300 * s } : k === 1 ? { right: 40 * s, top: 900 * s } : k === 2 ? { left: 260 * s, top: 30 * s } : { left: 300 * s, bottom: 30 * s }),
                  padding: `${14 * s}px ${22 * s}px`,
                  borderRadius: 12 * s,
                  background: brand.charcoal,
                  color: brand.cream,
                  fontFamily: brand.sans,
                  fontSize: 30 * s,
                  whiteSpace: "nowrap",
                }}
              >
                {wall[(i * 4 + k) % wall.length]}
              </div>
            ))}
          </div>
        );
      })}
      <div
        style={{
          position: "absolute",
          left: 190,
          right: 190,
          top: 760,
          padding: "60px 50px",
          borderRadius: 36,
          background: brand.cream,
          color: brand.ink,
          fontFamily: brand.serif,
          fontSize: 66,
          lineHeight: 1.12,
          textAlign: "center",
          boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
        }}
      >
        {center}
      </div>
      <div
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 1420,
          textAlign: "center",
          fontFamily: brand.serif,
          fontSize: 84,
          color: brand.cream,
          textShadow: `0 0 40px ${brand.ink}, 0 0 20px ${brand.ink}`,
          opacity: tween(frame, 0.8 * fps, 1.4 * fps, 0, 1),
        }}
      >
        {caption}
      </div>
    </Stage>
  );
};
