import React from "react";
import { Composition } from "remotion";
import { FPS, H, W } from "./brand";
import { EffectsReel } from "./videos/EffectsReel";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="EffectsReel" component={EffectsReel} durationInFrames={Math.round(29.2 * FPS - 110)} fps={FPS} width={W} height={H} />
    </>
  );
};
