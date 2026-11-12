import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { Stage } from "./Stage";
import { tween } from "./util";

/** E05 Paper Cut — a cream sheet slaps onto the dark stage; words press on one at a time. */
export const PaperCut: React.FC<{ words: string[]; accent?: number[]; perWord?: number; source?: string }> = ({
  words,
  accent = [],
  perWord = 6,
  source,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const slap = spring({ frame, fps, config: { damping: 11, stiffness: 160 } });
  const start = 10;

  return (
    <Stage>
      <div
        style={{
          position: "absolute",
          left: 110,
          right: 110,
          top: 430,
          height: 1000,
          background: brand.cream,
          borderRadius: 6,
          boxShadow: "0 50px 100px rgba(0,0,0,0.55)",
          transform: `scale(${1.25 - 0.25 * slap}) rotate(${-4 + 2.5 * slap}deg)`,
          opacity: tween(frame, 0, 4, 0, 1),
          padding: "110px 90px",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          gap: "6px 26px",
        }}
      >
        {words.map((w, i) => {
          const f = frame - start - i * perWord;
          const press = spring({ frame: f, fps, config: { damping: 14, stiffness: 220 } });
          return (
            <span
              key={i}
              style={{
                fontFamily: brand.serif,
                fontWeight: 600,
                fontSize: 104,
                lineHeight: 1.12,
                color: accent.includes(i) ? brand.goldDeep : brand.ink,
                opacity: f < 0 ? 0 : 1,
                transform: `scale(${1.35 - 0.35 * press})`,
                textShadow: `0 ${3 * (1 - press)}px 0 rgba(0,0,0,0.12)`,
                fontStyle: accent.includes(i) ? "italic" : "normal",
              }}
            >
              {w}
            </span>
          );
        })}
        {source ? (
          <div
            style={{
              width: "100%",
              marginTop: 50,
              fontFamily: brand.sans,
              fontSize: 32,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: brand.goldDeep,
              opacity: tween(frame, start + words.length * perWord, start + words.length * perWord + 10, 0, 1),
            }}
          >
            {source}
          </div>
        ) : null}
      </div>
    </Stage>
  );
};
