import React from "react";
import { brand } from "../brand";

/** ISC labels every mock "Illustrative. No real client data." So do we. */
export const Illustrative: React.FC<{ dark?: boolean; bottom?: number }> = ({
  dark = true,
  bottom = 220,
}) => (
  <div
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom,
      textAlign: "center",
      fontFamily: brand.sans,
      fontSize: 26,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: dark ? "rgba(247,244,238,0.45)" : "rgba(17,18,15,0.45)",
    }}
  >
    Illustrative · No real client data
  </div>
);
