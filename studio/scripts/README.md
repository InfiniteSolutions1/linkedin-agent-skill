# Voiceover scripts (option A: your own voice)

How to record: phone voice memo, quiet room, phone ~8 inches from your mouth.
Read each numbered line as its own take with a one-second pause between lines.
Don't rush: the scene holds will be re-timed to your recording, not the other
way round. Send the files over and I'll sync the captions and cuts to them.

Lines marked ⚠ contain a statistic with no source yet. Don't record or post
those until there's a source (or we reword them).

## Current voice: Nora (Higgsfield preset)

All lines are generated with Higgsfield `seed_audio`, preset voice "Nora"
(voice_id d081b915-6623-4a44-bacf-80d0f1c90a03), then trimmed (edge silence
removed, pauses capped ~0.4s) and loudness-normalised to -16 LUFS into
`studio/public/vo/<id>.mp3`. Clip lengths live in `studio/src/vo.ts`; each
beat in a reel stretches to fit its line. To swap the voice, regenerate the
same ids and re-run the measuring step.
