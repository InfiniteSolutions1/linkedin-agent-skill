// ISC brand tokens, pulled from infinitesolutions1.com's stylesheet (2026-11-12).
import "@fontsource-variable/inter";
import "@fontsource-variable/lora";

export const brand = {
  ink: "#11120f",
  charcoal: "#27313a",
  cream: "#f7f4ee",
  paper: "#e5dfd2",
  gold: "#b48a4a",
  goldLight: "#d6aa66",
  goldDeep: "#7d5a22",
  teal: "#315f72",
  muted: "#9ca3af",
  alert: "#c0533f", // bottleneck red, warmed to sit with the gold palette
  serif: "'Lora Variable', Georgia, serif",
  sans: "'Inter Variable', system-ui, sans-serif",
  name: "Infinite Solutions",
  short: "ISC",
  handle: "{{@handle}}",
  url: "infinitesolutions1.com",
} as const;

// 1080x1920 safe area (Remotion layout rules + room for LinkedIn/IG UI)
export const SAFE = { x: 90, top: 160, bottom: 300 };
export const W = 1080;
export const H = 1920;
export const FPS = 30;
