import React from "react";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { Audio } from "@remotion/media";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { VO_SECONDS } from "../vo";
import { brand, FPS, PACE } from "../brand";
import { glitch, zoomThrough } from "../effects/transitions";

/** vo: id of a clip in public/vo/<id>.mp3. The beat stretches so the line always finishes before the cut. */
export type Beat = { name: string; sec: number; el: React.ReactNode; then?: "zoom" | "glitch"; vo?: string };

const VO_LEAD = 0.35; // seconds of picture before the voice comes in
const VO_TAIL = 0.6; // breathing room after the line, before the transition starts

const TRANS = { zoom: 22, glitch: 12 } as const;
const frames = (b: Beat) => {
  const visual = Math.round(b.sec * PACE * FPS);
  if (!b.vo) return visual;
  const voice = Math.ceil((VO_LEAD + (VO_SECONDS[b.vo] ?? 0) + VO_TAIL) * FPS) + (b.then ? TRANS[b.then] : 0);
  return Math.max(visual, voice);
};

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
            {b.vo ? (
              <Sequence from={Math.round(VO_LEAD * FPS)} name={`VO ${b.vo}`} layout="none">
                <Audio src={staticFile(`vo/${b.vo}.mp3`)} />
              </Sequence>
            ) : null}
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
