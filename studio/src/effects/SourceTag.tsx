import React from "react";
import { brand } from "../brand";

/** Any statistic must carry its source. Missing source = a loud SOURCE NEEDED tag so a draft can't ship by accident. */
export const SourceTag: React.FC<{ source?: string; style?: React.CSSProperties }> = ({ source, style }) => (
  <span
    style={{
      display: "inline-block",
      padding: "10px 20px",
      borderRadius: 999,
      fontFamily: brand.sans,
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      ...(source
        ? { color: "rgba(247,244,238,0.55)", border: "1px solid rgba(247,244,238,0.25)" }
        : { color: brand.ink, background: brand.alert }),
      ...style,
    }}
  >
    {source ? `Source: ${source}` : "⚠ Source needed"}
  </span>
);
