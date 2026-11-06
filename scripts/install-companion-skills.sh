#!/usr/bin/env bash
# Install the third-party skills the LinkedIn team's agents use.
# They are pulled from their upstream repos, never vendored here: each keeps
# its own licence (transitions.dev in particular forbids redistribution).
#
#   scripts/install-companion-skills.sh              # into ~/.claude/skills
#   scripts/install-companion-skills.sh --project    # into ./.claude/skills
#   scripts/install-companion-skills.sh --only design|leads
set -euo pipefail

DEST="${HOME}/.claude/skills"
ONLY=""
while [ $# -gt 0 ]; do
  case "$1" in
    --project) DEST="$(pwd)/.claude/skills" ;;
    --dest) DEST="$2"; shift ;;
    --only) ONLY="$2"; shift ;;
    -h|--help) sed -n 2,9p "$0"; exit 0 ;;
    *) echo "unknown option: $1" >&2; exit 2 ;;
  esac
  shift
done

# group | repo | path to the skill folder(s) inside the repo
SOURCES='
design|pbakaus/impeccable|.claude/skills/impeccable
design|greensock/gsap-skills|skills/gsap-core skills/gsap-timeline skills/gsap-scrolltrigger skills/gsap-plugins skills/gsap-utils skills/gsap-react skills/gsap-frameworks skills/gsap-performance
design|Jakubantalik/transitions.dev|skills/transitions-dev skills/transitions-polish skills/transitions-ui-generation
design|jakubkrehel/make-interfaces-feel-better|skills/make-interfaces-feel-better
leads|gosom/google-maps-scraper|skills/google-maps-scraper
'

command -v git >/dev/null || { echo "git is required" >&2; exit 1; }
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
mkdir -p "$DEST"

installed=0
while IFS='|' read -r group repo paths; do
  [ -z "$group" ] && continue
  [ -n "$ONLY" ] && [ "$ONLY" != "$group" ] && continue
  name="${repo#*/}"
  echo "-> $repo"
  git clone -q --depth 1 "https://github.com/$repo.git" "$WORK/$name"
  for p in $paths; do
    src="$WORK/$name/$p"
    [ -f "$src/SKILL.md" ] || { echo "   missing $p (upstream layout changed?)" >&2; continue; }
    skill="$(basename "$p")"
    rm -rf "${DEST:?}/$skill"
    cp -R "$src" "$DEST/$skill"
    echo "   + $skill"
    installed=$((installed + 1))
  done
done <<< "$SOURCES"

echo "Installed $installed skills into $DEST. Restart Claude Code so they load."
