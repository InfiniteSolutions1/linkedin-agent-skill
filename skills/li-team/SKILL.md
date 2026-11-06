---
name: li-team
description: >-
  Run the LinkedIn account with a team of six specialist agents - strategist,
  writer, web designer, engager, outreach and editor - and route each job to the right one.
  Use when the user says "run my LinkedIn", "do my LinkedIn week", "use the
  team", "which agent should do this", or hands over a mixed batch of LinkedIn
  work (posts, comments, DMs, profile, analytics, visuals) at once.
---

# li-team

The eleven skills are split across six agents in `agents/`. You, the main
session, are the lead: subagents cannot start other subagents, so you read
the request, send each piece to the right agent, and put their results
together for the user.

## The roster

| agent | owns | send it |
| --- | --- | --- |
| `linkedin-strategist` | `li-plan`, `li-audit`, `li-profile` | weekly planning, analytics, profile scoring and rewrites |
| `linkedin-writer` | `li-post`, `li-carousel`, `li-repurpose` | new posts, hooks, carousels, turning long content into posts |
| `linkedin-web-designer` | `li-carousel` (design + PDF), `li-profile` (banner, featured) | banners, carousel PDFs, post images, newsletter covers, landing pages |
| `linkedin-engager` | `li-comment`, `li-reply` | comments on others' posts, replies under the user's posts |
| `linkedin-outreach` | `li-dm`, `li-inbox` | connection notes, DMs, follow-ups, inbox triage |
| `linkedin-editor` | `li-human` | the quality gate: any draft without a passing HUMAN SCORE |

Every agent also runs `li-human` on its own output, so the editor is for
drafts that come in from outside the team, or that still score REVIEW or
FLAGGED.

## Routing

1. Split the request into jobs. One job = one skill's worth of work.
2. Order matters only where one job feeds another:
   - **Strategist first** when there is no current `~/.claude/linkedin/plan.md`,
     or the user pasted analytics. Its **Hand-off** section is your dispatch
     list for the rest of the week.
   - **Writer before web designer** for carousels and anything with copy on
     it. The designer only lays out approved copy.
   - **Engager before outreach** when comments may contain leads, so the
     engager can flag them.
3. Everything else is independent. Start those agents in parallel, in one
   message.
4. Give each agent everything it needs in the prompt: the pasted text, the
   relevant plan slot, and any constraints the user gave. The agent sees
   nothing else from this conversation.
5. When results come back, check each draft carries a HUMAN SCORE. Send
   anything below PASS to `linkedin-editor`.

## A full week, end to end

1. `linkedin-strategist`: audit (if analytics given), then `li-plan`.
2. In parallel, from the hand-off: `linkedin-writer` (the week's posts),
   `linkedin-engager` (comments for the 10 target accounts, only on posts
   the user has pasted), `linkedin-outreach` (DMs for named people).
3. `linkedin-web-designer` on approved carousel copy, plus the banner or
   featured landing page if the strategist's profile score lost points there.
4. `linkedin-editor` on anything still below PASS.
5. Give the user one ordered list: what to post on which day, what to
   comment where, who to message and when.

## Rules that do not bend

- Nothing is posted, sent, scheduled or automated on LinkedIn. Agents return
  copy-ready text and the user does the posting.
- No agent browses or scrapes LinkedIn. They work from what the user pastes.
- Nothing fabricated. A missing fact becomes `{{your number}}` with a flag.
