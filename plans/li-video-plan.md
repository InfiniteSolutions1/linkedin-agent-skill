# Plan: `/li-video` — the ISC motion content expert

Status: **PLAN, awaiting approval. Nothing built yet.**

A new skill for this repo that turns an ISC idea (a bottleneck, a department, a
KPI) into a finished, code-rendered 9:16 reel for LinkedIn (and IG/TikTok
re-use): script, voiceover, storyboard, Remotion scenes, captions, MP4, and the
post copy that goes with it. Same rule as every other skill here: it renders
the file, **you post it**.

---

## 1. What the agent knows (the content brain)

Source: infinitesolutions1.com (home, About, and the service pages), read
2026-11-12. Phrases in quotes are ISC's own wording.

### The story ISC tells, in one line
> **"Sign more of the cases you already pay to generate."** ISC is operations
> & AI consulting for plaintiff firms, from solo practices to 500+ people.
> It fixes intake, case movement and reporting, "then add[s] AI where it earns
> its place."

The point of view every video argues (from About):
1. "Demand is rarely the first constraint. What happens in the first hour after an inquiry usually is."
2. "Software does not fix an undefined process. It moves the same gaps faster."
3. "A report that stops at lead volume is not a growth report. The chain ends at signed cases."
4. "AI belongs inside a workflow with an owner, a control, and a measure."
5. "Signed cases are the scorecard."

### The departments + the layer over them (ISC's own services)

| # | Department (ISC service) | Bottleneck, in ISC's words | What ISC builds | KPI on the dashboard |
|---|---|---|---|---|
| 1 | **Marketing**: Growth Marketing & Revenue Intelligence | "Cost per lead tracked, cost per signed case unknown." Agencies report clicks, intake reports leads, the CMS holds signed cases, and "nobody owns the link between them." | Campaign-to-signed-case attribution, vendor/paid-media oversight, conversion analysis, executive dashboards & forecasting | Cost per signed case, signed cases & fees by source |
| 2 | **Intake**: AI Contact Center & Intake Optimization | "Calls go unanswered after hours. Web forms wait in an inbox." "Qualification depends on who picked up." Follow-up "stops after one or two attempts." | AI contact center, after-hours coverage, missed-call recovery in minutes, qualification logic, QA & coaching dashboards. AI transcribes the call, fills case fields, flags high-value cases by Slack/SMS, and a person reviews | Speed to lead (under 5 min), answer rate, inquiry → consult → signed |
| 3 | **Pre-Lit**: Pre-Litigation Case Management | "Case managers are busy. Cases are still waiting." "Clients calling for updates the team should have sent." Records "requested late, or twice." | 7 stages: sign-up → coverage → treatment → records & bills → liens → demand → resolution. Treatment-gap alerts, records requests that reissue on a timer, a 14-day client-contact rule, AI demand prep with attorney review | "No client quiet for two weeks," days to records, days to demand |
| 4 | **Litigation**: Litigation Case Management | "After filing, cases wait on service, discovery, depositions and experts." | "Every phase an owner, a deadline and a next step." Deficiency letters drafted automatically, AI deposition summaries, AI-drafted mediation brief, all reviewed by attorneys | Time on desk per phase, days back per case |
| ★ | **The ISC layer**: AI Strategy & Executive Roadmap · Fractional AI/Ops Leadership · Case Management Automation · Staffing | "The plan exists. Nobody senior is running it." "No weekly scorecard anyone trusts." | Assess → Design → Operate. SOPs, routing rules, dashboards, automations. "One scorecard, named owners and a weekly cadence." "You own what we build." | The weekly firm scorecard: conversion, cycle time, capacity, profitability |

These live in `skills/li-video/isc.json` so every video draws from one source
of truth and you edit services/KPIs in one place.

### Brand (pulled from the site's stylesheet)
- Ink `#11120f` · cream `#f7f4ee` · gold `#b48a4a` / light gold `#d6aa66` / deep gold `#7d5a22` · slate teal `#315f72` · charcoal `#27313a`
- Type: **Lora** (serif headlines) + **Inter** (UI, captions)
- Feel: calm, premium, precise. No hype. This means **quieter versions** of
  the reference reels' motion: the same pacing and structure, without the
  neon-and-glitch overload. Effect E05 Paper Cut (a cream sheet on a dark
  stage) is already on-brand.
- The site labels every mock "Illustrative. No real client data." **Every
  video keeps that label** on any mock UI or number.

### CTAs ISC already has (better than a bare comment keyword)
- Free assessment ("Free, under NDA. We reply the same business day.")
- The tools: **Speed-to-Lead Calculator**, **Revenue Leak Calculator**, **Case Cycle Calculator**
- Pairing: each video ends on the matching calculator (intake → Speed-to-Lead, marketing → Revenue Leak, pre-lit/lit → Case Cycle), plus a comment keyword for LinkedIn reach.

### Honesty rule (inherited from this repo)
No invented stats or client results. Any number a script needs comes back as
`{{your number}}` and is flagged until you supply it (e.g. "{{X}}% of leads
call after 5pm", "{{client}} cut days-to-demand from {{A}} to {{B}}").

### Needed from you before build
- Logo as SVG (colors and fonts are now pulled from the site)
- Your handle(s) + the comment keyword CTA you want (e.g. comment "SYSTEM")
- 3–5 real proof points you're allowed to use
- Voice choice (see §4)

---

## 2. The three formats (mapped to your reference reels)

> I pulled metadata + captions for all five reels. Frame-by-frame analysis
> was queued but hadn't finished when I wrote this, so before I build I'll
> confirm motion details against the actual frames.

| | **Type 1 — The System Walkthrough (Voiceover)** | **Type 2 — The Reveal** | **Type 3 — The Hot Take + List** |
|---|---|---|---|
| Refs | @shanepduggan "$3000 AI automation for real estate agents" (68s) · @speedy_devv "How Supabase really works under the hood" (154s) | @getripping "New Claude Plugin 2.0" (54s) | @getripping "Your real competitor isn't another app" (79s) · @duncanrogoff "Parasite SEO" (59s) |
| What it is | Faceless, voice-led explainer. A system gets **built on screen** step by step: flow diagram → UI mock → result. | One thing, revealed big. Fast, punchy, a product-launch feel. | A contrarian opener, then a numbered list. Each item gets its own visual beat. |
| Length | 60–90s | 30–55s | 45–75s |
| ISC use | "The AI intake system that answers every lead in 60 seconds" · "How a PI case moves through ISC, under the hood" | "Meet the ISC dashboard" · "Your intake agent, live" · "The AI demand drafter" | "Your firm doesn't have a lead problem" · "5 bottlenecks killing your pre-lit" · "Why your best intake rep is your biggest risk" |
| CTA | Comment "{{KEYWORD}}" and I'll send the full system map | Comment "{{KEYWORD}}" for a walkthrough | Comment "{{KEYWORD}}" for the other {{N}} |

All three: 1080×1920, 30fps, burned-in kinetic captions (most LinkedIn video
plays muted), handle in the corner, safe zones kept clear of the UI overlay.

---

## 3. Storyboards (first video of each type)

Effects are from your **11-effects pack** (numbered E01–E11 below).

### Type 1 — "One call, from ring to review" (~75s, VO; built on the site's own intake-automation story)

| t | VO (draft) | On screen | Effect |
|---|---|---|---|
| 0–2s | "It's 9:47pm. A car-accident victim is calling your firm." | 3D phone flies up, ringing; label "MISSED CALL #{{N}}" | **E01 Orbit** |
| 2–6s | "Nobody answers. They call the next firm on Google." | Phone screen glitches to a competitor's logo (generic) | **E10 Glitch** |
| 6–10s | "That one call was worth {{$avg case value}}." | Number slams on cream paper | **E05 Paper Cut** |
| 10–14s | "Here's the system that makes that impossible." | Crash-zoom into a tile → system canvas | **E03 Zoom-through** |
| 14–40s | Step by step: the call is answered → AI transcribes it and fills the case fields → a high-value case is flagged to the team by Slack/SMS → a person reviews and decides → consult booked | Nodes draw in one by one (Inquiry received → Routed by fit → Follow-up launched → Consult booked, as on the site), connectors animate, each node opens a mini UI mock | Remotion `<Sequence>` + spring nodes, Lottie icons |
| 40–52s | "And every step lands on one dashboard." | KPI bars grow: speed to lead, sign rate, cost per signed case | **E06 Charts** |
| 52–62s | "That's intake. We do this for marketing, pre-lit and litigation too." | Pull back from intake row to full 4-department board | **E09 Pullback** |
| 62–75s | "Find your own number with the Speed-to-Lead Calculator, or comment SYSTEM and I'll send you the map." | Terminal types the CTA line; ISC logo wiggle | **E11 Typewriter** + Wiggle logo |

### Type 2 — "Meet the ISC Command Center" (~45s)

| t | On screen | Effect |
|---|---|---|
| 0–2s | "Your partners are flying blind." | E02 Vertigo (corridor of scattered spreadsheets) |
| 2–8s | Wall of 6 disconnected tools / headlines ("Where's the file?", "Did they sign?") | **E04 Headlines** |
| 8–10s | Hard reset | **E08 Frame Break** |
| 10–35s | Dashboard reveal on 3D phone/laptop: tiles for each department, KPI rings breathing, labels pop in | **E07 Phone Screens** + E06 |
| 35–45s | CTA + logo | E11 + Wiggle |

### Type 3 — "5 bottlenecks killing your pre-lit" (~60s)

| t | On screen | Effect |
|---|---|---|
| 0–3s | Hook: "Your settlements aren't slow. Your pre-lit is." | E05 Paper Cut |
| 3–50s | 5 beats, ~9s each: bottleneck (red) → ISC fix (green) → KPI it moves. Items: treatment gaps · records chase · client ghosting · manual demands · update calls | E03 Zoom-through between items, E06 for each KPI |
| 50–60s | Recap list (the screenshot frame) + CTA | E09 Pullback → E11 |

---

## 4. Voiceover options

| Option | How | Trade-off |
|---|---|---|
| **A. Your real voice** (recommended for trust) | Record the script on a phone; I sync captions to it | Most authentic; needs 5 min of your time per video |
| **B. Clone of your voice** | Higgsfield `create_voice` from a clean sample of you, then `generate_audio` | Scales; only with your explicit consent and a sample you provide |
| **C. Stock AI voice** | Higgsfield/ElevenLabs-style stock voice | Fastest; sounds less like ISC |

Captions are word-timed from the VO either way (Remotion captions).

---

## 5. Tech stack (repos you sent, and what each does)

From the carousel (@rakeshmahantiai1, "8 top free Claude skills for
animation"). I found the repos on GitHub. ✓ = confident match, ~ = best guess.

| Skill in carousel | Repo | Role in `/li-video` |
|---|---|---|
| Remotion Skill ✓ | `remotion-dev/skills` (official) | **Core.** The render engine — every scene is a React component, rendered to MP4 |
| GSAP Skills ✓ | `greensock/gsap-skills` (official) | Timeline/easing patterns; we port the easing into Remotion's `interpolate`/`spring` |
| Text-to-Lottie ~ | `zhanziyang/text-to-lottie-plugin` | Department icons (phone, e-sign, gavel, chart) as Lottie → `@remotion/lottie` |
| Wiggle ✓ | `talknerdytome-labs/wiggle-claude-skill` | ISC logo sting at the end of every video |
| Three.js Animation ~ | (several candidates; e.g. `Moh4696/open-3d-skills`) | 3D phone/laptop for E01/E07 via `@remotion/three` |
| Animate ~ | `delphi-ai/animate-skill` | Motion-decision rules (purpose, easing, timing, exits) baked into the skill's style guide |
| Rive Skills ~ | `BowTiedSwan/rive-skills` | **Not needed for video** (Rive is for interactive web). Park it. |
| UI Motion & Micro-interactions ~ | unclear (`AThevon/genjutsu` or `iart-ai/web-animation-skills`) | UI mock micro-motion (chat bubbles, button taps) inside scenes |

How they get "added": vendored as git submodules under `vendor/` (keeps their
licenses and lets us pull updates), with the skill pointing to them. Not copied
into our code.

Also available in this environment: Higgsfield (VO, AI b-roll if ever wanted),
Canva (thumbnail/cover frame), Apify (pull competitor reels for reference).

---

## 6. What gets built (files)

```
skills/li-video/
  SKILL.md            the agent: intake questions → format pick → script → storyboard → build → render → post copy
  isc.json            services, bottlenecks, solutions, KPIs (§1) — the content source of truth
  formats.json        Type 1/2/3 beat structures, lengths, hook formulas, CTA patterns
  effects.md          the 11 effects + when to use each (from your pack)
studio/               Remotion project
  src/brand.ts        ISC colors, fonts, logo, handle
  src/effects/        E01–E11 as reusable components
  src/scenes/         FlowDiagram, DashboardKPI, DeptBoard, UIMock, CaptionTrack, LogoSting
  src/videos/         one composition per video (props-driven: swap script, re-render)
vendor/               the repos in §5 as submodules
```

Workflow per video: `/li-video "intake bottleneck, type 1"` → you approve the
script → VO recorded/generated → `npx remotion render` → MP4 + cover frame +
LinkedIn post copy (run through `/li-human`) → you post.

---

## 7. Build order (once you approve)

1. Scaffold Remotion studio + brand file (needs your colors/logo).
2. Build the 11 effects as components; render a 15s effects reel for your sign-off on look & motion.
3. Build Type 1 video #1 end to end (script → VO → render). **Checkpoint with you.**
4. Type 2 #1, Type 3 #1.
5. Write `SKILL.md` so the agent can produce new ones from `isc.json`.
6. Content calendar: 12-video series (4 departments × 3 formats) handed to `/li-plan`.

## 8. Decisions I need from you

1. Approve the three formats + first three video topics (or swap topics).
2. Voiceover: A, B or C?
3. Brand assets + 3–5 real proof points.
4. Comment-keyword CTA word(s).
5. Rive and UI-Motion skills: park them (my recommendation), or include?
