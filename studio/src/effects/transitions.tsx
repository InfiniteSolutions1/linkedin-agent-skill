import React from "react";
import { AbsoluteFill } from "remotion";
import type { TransitionPresentationComponentProps } from "@remotion/transitions";
import { brand } from "../brand";
import { easeInOut, rand } from "./util";

type P = TransitionPresentationComponentProps<Record<string, never>>;

/** E03 Zoom-through — crash into the frame, pass through it, land on the next layer. */
const ZoomThroughComp: React.FC<P> = ({ children, presentationDirection, presentationProgress }) => {
  const p = easeInOut(presentationProgress);
  if (presentationDirection === "exiting") {
    return (
      <AbsoluteFill style={{ scale: String(1 + p * 5), opacity: 1 - Math.max(0, (p - 0.45) / 0.55), filter: `blur(${p * 14}px)` }}>
        {children}
      </AbsoluteFill>
    );
  }
  return (
    <AbsoluteFill style={{ scale: String(0.55 + 0.45 * p), opacity: Math.min(1, p * 1.8), filter: `blur(${(1 - p) * 10}px)` }}>
      {children}
    </AbsoluteFill>
  );
};
export const zoomThrough = () => ({ component: ZoomThroughComp, props: {} });

/** E10 Glitch — colour split and sliced bands for a few frames, then a clean snap. */
const GlitchComp: React.FC<P> = ({ children, presentationDirection, presentationProgress }) => {
  const exiting = presentationDirection === "exiting";
  // exiting scene owns the first half, entering scene the second half
  const visible = exiting ? presentationProgress < 0.5 : presentationProgress >= 0.5;
  if (!visible) return null;
  const amt = exiting ? presentationProgress * 2 : (1 - presentationProgress) * 2; // 0 → 1 → 0
  const step = Math.floor(presentationProgress * 12);
  const bands = 9;
  return (
    <AbsoluteFill>
      {Array.from({ length: bands }).map((_, i) => {
        const shift = (rand(i * 31 + step * 7) - 0.5) * 220 * amt;
        return (
          <AbsoluteFill
            key={i}
            style={{
              clipPath: `inset(${(i / bands) * 100}% 0 ${100 - ((i + 1) / bands) * 100}% 0)`,
              translate: `${shift}px 0`,
            }}
          >
            {children}
          </AbsoluteFill>
        );
      })}
      <AbsoluteFill style={{ background: brand.alert, mixBlendMode: "screen", opacity: 0.22 * amt, translate: `${14 * amt}px 0` }} />
      <AbsoluteFill style={{ background: brand.teal, mixBlendMode: "screen", opacity: 0.3 * amt, translate: `${-14 * amt}px 0` }} />
    </AbsoluteFill>
  );
};
export const glitch = () => ({ component: GlitchComp, props: {} });
