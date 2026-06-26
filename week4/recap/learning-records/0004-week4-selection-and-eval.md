# 0004 — Week 4 recap: model selection & evaluation

**Date:** 2026-06-26
**Status:** Active
**Builds on:** [0003-week3-open-source](../../../week3/recap/learning-records/0003-week3-open-source.md)

## Context
Same learner (junior backend eng, career switch into AI). Week 4 is about *choosing* and
*evaluating* models, then a practical code-generation thread. Recap generated from
`week4/sub-title/*.vtt` and the notebooks. **Days 1 and 2 have NO notebook** (conceptual:
benchmarks + leaderboards); Days 3–5 have notebooks (day3/4/5.ipynb) building one
evolving code-conversion app.

## What was taught (lessons 0016–0020, in `week4/recap/lessons/`)
16. **Model selection & benchmarks** — 2-phase workflow (basics → benchmarks → your task);
    Chinchilla (~20 tokens/param); GPQA, MMLU-Pro, HLE; contamination & overfitting.
17. **Leaderboards** — Artificial Analysis (intelligence vs cost, count reasoning tokens),
    Vellum, SEAL, LiveBench (contamination-resistant), LM Arena (blind human Elo);
    automation → augmentation → agentic.
18. **Python → C++ (frontier)** — translation system/user prompt, strip ```cpp fences, native
    compile (clang++ -Ofast -mcpu=native), model speedups (Claude 148×, GPT-5 230×, Grok 1060×,
    Gemini 1440× winner); leaderboard ≠ task winner.
19. **Open-source code models + compare UI** — dispatch dict (Ollama/OpenRouter/Groq), gr.Blocks
    dropdown + .click(); open GPT-OSS 20B (238×) beat GPT-5 & Claude; bigger ≠ better (120B bad pragma).
20. **Evaluation & Rust** — technical (loss/perplexity/accuracy) vs business (KPI/ROI) metrics;
    perplexity (1 = certain); Python→Rust + Kadane's O(n); open GPT-OSS 120B won (304µs, ~111,000×).

## Conventions reused
- Copied shared assets into `week4/recap/assets/` (self-contained week).
- Continued global lesson numbering (0016–0020).
- Week 4 glossary lists only new terms, links back to Weeks 1–3.
- Quizzes interleave 1–2 earlier questions each; escaping rule applied (`&#39;`, `\"`),
  validated with browser-accurate check.

## Zone of proximal development / next steps
- Strong recurring theme to reinforce: **"validate on your own task"** (Days 1, 3, 4, 5 all hit it).
- Days 3–5 are the same app evolving — good for a hands-on: run the Python→C++ port on the user's own slow code.
- After spacing: a **mixed Week 1–4 exam**.
- Next: **Week 5** recap — RAG (retrieval-augmented generation), per the 8-week arc; ties back to
  the "primitive RAG" preview in Week 2 Day 3.
