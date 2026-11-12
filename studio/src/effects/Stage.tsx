import React from "react";
import { AbsoluteFill } from "remotion";
import { brand } from "../brand";

/** Dark ink stage with a soft gold glow and a fine grid. */
export const Stage: React.FC<{ children: React.ReactNode; glow?: string }> = ({
  children,
  glow = brand.gold,
}) => (
  <AbsoluteFill style={{ backgroundColor: brand.ink, overflow: "hidden" }}>
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse 70% 45% at 50% 42%, ${glow}33 0%, transparent 70%)`,
      }}
    />
    <AbsoluteFill
      style={{
        backgroundImage:
          "linear-gradient(rgba(247,244,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(247,244,238,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    {children}
  </AbsoluteFill>
);
