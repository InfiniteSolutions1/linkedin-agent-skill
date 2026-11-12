import React from "react";
import { useCurrentFrame } from "remotion";
import { brand } from "../brand";
import { Stage } from "./Stage";
import { tween } from "./util";

/** E04 Headlines — a tilted 3D wall of cards; neighbouring columns scroll in opposite directions. */
export const Headlines: React.FC<{ lines: string[]; title: string }> = ({ lines, title }) => {
  const frame = useCurrentFrame();
  const cols = 4;
  return (
    <Stage>
      <div style={{ position: "absolute", inset: 0, perspective: 1400 }}>
        <div
          style={{
            position: "absolute",
            left: -360,
            right: -360,
            top: -300,
            bottom: -300,
            display: "flex",
            gap: 28,
            transform: "rotateX(28deg) rotateZ(-10deg)",
          }}
        >
          {Array.from({ length: cols }).map((_, c) => {
            const dir = c % 2 === 0 ? -1 : 1;
            const offset = dir * frame * 5 - (dir > 0 ? 900 : 0);
            return (
              <div key={c} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 28, transform: `translateY(${offset}px)` }}>
                {Array.from({ length: 12 }).map((__, r) => {
                  const text = lines[(c * 3 + r) % lines.length];
                  const hot = (c + r) % 4 === 1;
                  return (
                    <div
                      key={r}
                      style={{
                        padding: "44px 40px",
                        borderRadius: 24,
                        background: hot ? brand.cream : brand.charcoal,
                        color: hot ? brand.ink : brand.cream,
                        fontFamily: brand.serif,
                        fontSize: 46,
                        lineHeight: 1.15,
                        border: `2px solid ${hot ? brand.gold : "rgba(247,244,238,0.08)"}`,
                      }}
                    >
                      “{text}”
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${brand.ink}00 40%, ${brand.ink}f2 72%)` }} />
      <div
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 1380,
          fontFamily: brand.serif,
          fontSize: 92,
          lineHeight: 1.08,
          color: brand.cream,
          opacity: tween(frame, 20, 34, 0, 1),
        }}
      >
        {title}
      </div>
    </Stage>
  );
};
