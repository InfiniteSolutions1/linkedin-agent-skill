import React from "react";
import { Composition } from "remotion";
import { FPS, H, W } from "./brand";
import { EffectsReel } from "./videos/EffectsReel";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="EffectsReel" component={EffectsReel} durationInFrames={1252} fps={FPS} width={W} height={H} />
    </>
  );
};
