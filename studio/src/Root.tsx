import React from "react";
import { Composition } from "remotion";
import { FPS, H, W } from "./brand";
import { EffectsReel } from "./videos/EffectsReel";
import { reelLength } from "./videos/buildReel";
import { MarketingDashboard, marketingBeats } from "./videos/MarketingDashboard";
import { IntakeRevenue, intakeBeats } from "./videos/IntakeRevenue";
import { SpeedToLead, speedBeats } from "./videos/SpeedToLead";

export const RemotionRoot: React.FC = () => {
  const v = { fps: FPS, width: W, height: H };
  return (
    <>
      <Composition id="EffectsReel" component={EffectsReel} durationInFrames={1252} {...v} />
      <Composition id="MarketingDashboard" component={MarketingDashboard} durationInFrames={reelLength(marketingBeats)} {...v} />
      <Composition id="IntakeRevenue" component={IntakeRevenue} durationInFrames={reelLength(intakeBeats)} {...v} />
      <Composition id="SpeedToLead" component={SpeedToLead} durationInFrames={reelLength(speedBeats)} {...v} />
    </>
  );
};
