# 0002 — Week 2 recap: the applied/product week

**Date:** 2026-06-26
**Status:** Active
**Builds on:** [0001-week1-baseline](../../../week1/recap/learning-records/0001-week1-baseline.md)

## Context
Same learner (junior backend eng, career switch into AI). Week 1 covered fundamentals;
Week 2 is the hands-on build week. Recap generated from `week2/sub-title/*.vtt` and
`week2/day{1..5}.ipynb` (+ `extra.ipynb` for Day 5). All five days have notebooks.

## What was taught (lessons 0006–0010, in `week2/recap/lessons/`)
6. **Multi-provider APIs** — Anthropic native shape (max_tokens, separate system,
   content[0].text), GPT-5 `reasoning_effort`, OpenRouter, LangChain vs LiteLLM,
   prompt caching, multi-model conversations.
7. **Gradio UIs** — `gr.Interface(fn, inputs, outputs).launch()`, callbacks by reference,
   components, `share=True`, streaming via generator `yield`.
8. **Chat & prompting** — `gr.ChatInterface`, the `[system] + history + [user]` recipe,
   multi-shot prompting, primitive RAG by prompt injection.
9. **Tool calling** — the no-magic round-trip, tool JSON schema, `finish_reason == "tool_calls"`,
   `role:"tool"` + `tool_call_id`, the `while` loop, SQLite-backed tools. **(Keystone lesson.)**
10. **Multimodal & agentic** — DALL·E 3 (`b64_json`), TTS (`gpt-4o-mini-tts`), `gr.Blocks`
    layouts + event chaining, definition of agentic AI.

## Conventions reused
- Copied `week1/recap/assets/style.css` + `quiz.js` into `week2/recap/assets/` so each week
  is self-contained and lesson paths stay `../assets/...`.
- Continued global lesson numbering (0006–0010).
- Week 2 glossary lists only new terms and links back to the Week 1 glossary.
- Quizzes interleave 1–2 earlier-week questions each (storage strength).
- **Apostrophe rule applied** (from the Week 1 quiz bug): all apostrophes inside `data-quiz`
  JSON are written as `&#39;`, never raw `'` or `''`.

## Zone of proximal development / next steps
- Tool calling (Day 4) is the highest-leverage concept and the most error-prone — verify it
  landed; if shaky, do a focused hands-on (add a second tool, wire SQLite).
- After spacing: a **mixed Week 1+2 exam** (stateless memory ↔ messages recipe ↔ tool round-trip).
- Natural next build: deploy the Day 5 assistant to Hugging Face Spaces (real-world wisdom).
- When solid → **Week 3** recap (deep open-source / Hugging Face).
