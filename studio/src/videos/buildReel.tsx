import React from "react";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { AbsoluteFill } from "remotion";
import { brand, FPS, PACE } from "../brand";
import { glitch, zoomThrough } from "../effects/transitions";

export type Beat = { name: string; sec: number; el: React.ReactNode; then?: "zoom" | "glitch" };

const TRANS = { zoom: 22, glitch: 12 } as const;
const frames = (b: Beat) => Math.round(b.sec * PACE * FPS);

/** Total length of a reel: every beat's hold minus each transition's overlap. */
export const reelLength = (beats: Beat[]) =>
  beats.reduce((n, b, i) => n + frames(b) - (b.then && i < beats.length - 1 ? TRANS[b.then] : 0), 0);

/** Lay a list of beats out on one TransitionSeries over the ink backdrop. */
export const Reel: React.FC<{ beats: Beat[] }> = ({ beats }) => (
  <AbsoluteFill style={{ backgroundColor: brand.ink }}>
    <TransitionSeries>
      {beats.flatMap((b, i) => {
        const out = [
          <TransitionSeries.Sequence key={b.name} name={b.name} durationInFrames={frames(b)}>
            {b.el}
          </TransitionSeries.Sequence>,
        ];
        if (b.then && i < beats.length - 1) {
          out.push(
            <TransitionSeries.Transition
              key={`${b.name}-t`}
              presentation={b.then === "zoom" ? zoomThrough() : glitch()}
              timing={linearTiming({ durationInFrames: TRANS[b.then] })}
            />,
          );
        }
        return out;
      })}
    </TransitionSeries>
  </AbsoluteFill>
);
