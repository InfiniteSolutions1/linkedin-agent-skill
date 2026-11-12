# Plan: `/li-video` — the ISC motion content expert

Status: **PLAN, awaiting approval. Nothing built yet.**

A new skill for this repo that turns an ISC idea (a bottleneck, a department, a
KPI) into a finished, code-rendered 9:16 reel for LinkedIn (and IG/TikTok
re-use): script, voiceover, storyboard, Remotion scenes, captions, MP4, and the
post copy that goes with it. Same rule as every other skill here: it renders
the file, **you post it**.

---

## 1. What the agent knows (the content brain)

### The story ISC tells, in one line
> Law firms don't have a lead problem or a staff problem. They have a
> **systems** problem — and ISC installs the system, department by department,
> with AI in every seat and a dashboard on top.

### The four departments + the layer over them

| # | Department | Bottlenecks we show | ISC solution we show | KPI on the dashboard |
|---|---|---|---|---|
| 1 | **Marketing** | Spend with no attribution. Nobody knows cost per *signed* case. Leads come in and go cold. | Source tracking end to end, AI ad/content engine, lead routing in seconds | Cost per lead, cost per signed case, ROAS by source |
| 2 | **Intake** | Missed after-hours calls. Slow speed-to-lead. Every intake specialist qualifies differently. Retainers sit unsigned. | 24/7 AI intake agent (voice + SMS), scripted qualification protocol, instant e-sign, auto-handoff to case team | Speed to lead, answer rate, lead→signed %, time to retainer |
| 3 | **Pre-Lit** | Treatment gaps. Clients ghost. Records & bills take weeks to chase. Demand prep is manual. Case managers drown in "any update?" calls. | Automated treatment check-ins, records/bills request automation, AI medical chronology, AI demand draft, client status updates pushed automatically | Treatment compliance, days to records, days to demand, client touchpoints, case manager load |
| 4 | **Litigation** | Messy pre-lit → lit handoff. Deadline risk. Discovery & depo volume eats attorney hours. | Structured handoff protocol, deadline calendaring automation, AI discovery & deposition summaries | Deadlines met, days in stage, attorney hours per case |
| ★ | **The ISC layer** | Partners are blind. Data lives in 6 tools. No SOPs, so nothing scales. | **Structure + protocols (SOPs), automations, AI agents, live KPI dashboards** → visibility & transparency from first click to settlement | Case velocity, pipeline value, firm-wide scorecard |

These live in `skills/li-video/isc.json` so every video draws from one source
of truth and you edit services/KPIs in one place.

### Honesty rule (inherited from this repo)
No invented stats or client results. Any number a script needs comes back as
`{{your number}}` and is flagged until you supply it (e.g. "{{X}}% of leads
call after 5pm", "{{client}} cut days-to-demand from {{A}} to {{B}}").

### Needed from you before build
- ISC full name, logo (SVG preferred), brand colors, fonts
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

### Type 1 — "The $0-overhead intake system PI firms are installing" (~75s, VO)

| t | VO (draft) | On screen | Effect |
|---|---|---|---|
| 0–2s | "It's 9:47pm. A car-accident victim is calling your firm." | 3D phone flies up, ringing; label "MISSED CALL #{{N}}" | **E01 Orbit** |
| 2–6s | "Nobody answers. They call the next firm on Google." | Phone screen glitches to a competitor's logo (generic) | **E10 Glitch** |
| 6–10s | "That one call was worth {{$avg case value}}." | Number slams on cream paper | **E05 Paper Cut** |
| 10–14s | "Here's the system that makes that impossible." | Crash-zoom into a tile → system canvas | **E03 Zoom-through** |
| 14–40s | Step by step: AI agent answers → qualifies on protocol → books & e-signs → hands to case manager | Nodes draw in one by one, connectors animate, each node opens a mini UI mock (chat bubbles, e-sign check, CRM card) | Remotion `<Sequence>` + spring nodes, Lottie icons |
| 40–52s | "And every step lands on one dashboard." | KPI bars grow: speed to lead, sign rate, cost per signed case | **E06 Charts** |
| 52–62s | "That's intake. We do this for marketing, pre-lit and litigation too." | Pull back from intake row to full 4-department board | **E09 Pullback** |
| 62–75s | "Comment SYSTEM and I'll send you the full map." | Terminal types the CTA line; ISC logo wiggle | **E11 Typewriter** + Wiggle logo |

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
