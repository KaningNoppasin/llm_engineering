# 0001 — Week 1 recap baseline

**Date:** 2026-06-24
**Status:** Active

## Context
Learner is mid–career switch into AI engineering: a strong junior backend engineer, new
to AI, working through Ed Donner's *LLM Engineering* course. They asked for a Week 1
recap of Days 1–5 from the video subtitles and `day{1..5}.ipynb` notebooks.

## What was taught
Five daily recap lessons (HTML, in `week1/recap/lessons/`), each ending in an interactive
active-recall quiz:
1. First API call, system/user prompts, `.env`, Ollama vs cloud, web summarizer.
2. The Chat Completions endpoint; one client → many providers (Gemini, Ollama); open vs
   frontier; distillation; the 8-week arc.
3. Model taxonomy (base / chat / reasoning / hybrid), RLHF, budget forcing, hallucination,
   agentic AI.
4. Transformers & attention, LSTM→transformer, parameters, tokens/tiktoken, context
   windows, the illusion of memory (statelessness).
5. Prompt chaining, JSON structured output (`response_format`), one-shot prompting,
   streaming — the brochure generator.

## Zone of proximal development (assumed, to verify)
- Assumed comfortable: Python, HTTP, env vars, reading code. → went light on these.
- Assumed *new*: tokens, attention, RLHF, statelessness, structured output, streaming.
- **Not yet verified by retrieval.** First real signal will be quiz performance.

## Next steps / revisit triggers
- After 1–2 days spacing: run a **mixed-day Week 1 exam** to convert fluency → storage.
- If quizzes are too easy → raise difficulty (free-recall / code-completion, not MCQ).
- If Day 4 (transformers/attention) is shaky → schedule a focused 3Blue1Brown-backed lesson.
- When solid → begin **Week 2** recap.
