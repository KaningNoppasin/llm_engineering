# 0003 — Week 3 recap: the open-source / Hugging Face week

**Date:** 2026-06-26
**Status:** Active
**Builds on:** [0002-week2-applied](../../../week2/recap/learning-records/0002-week2-applied.md)

## Context
Same learner (junior backend eng, career switch into AI). Weeks 1–2 used hosted APIs;
Week 3 is where the course goes open-source: running models yourself on Hugging Face +
Colab GPUs. Recap generated from `week3/sub-title/*.vtt` and `week3/day{1..5}.ipynb`.
All five days have notebooks.

## What was taught (lessons 0011–0015, in `week3/recap/lessons/`)
11. **Hugging Face & Colab** — platform (Models/Datasets/Spaces) vs libraries (hub/datasets/
    transformers); Colab T4/A100 GPUs; HF token (write scope) via Colab Secrets; diffusion
    image generation (SDXL/FLUX).
12. **Pipelines** — `pipeline(task)` as the high-level API hiding tokenize→run→post-process;
    task zoo (sentiment/ner/qa/summarization/zero-shot/image/audio); `device="cuda"`;
    default-model caveat.
13. **Tokenizers** — `AutoTokenizer.from_pretrained`, encode/decode, model-specific vocab,
    special tokens (BOS/EOS), `apply_chat_template` + `add_generation_prompt`, vocab-size
    tradeoffs (Llama 128,256).
14. **Quantization & internals** — `BitsAndBytesConfig` 4-bit nf4, `AutoModelForCausalLM`,
    `device_map="auto"`, embedding→decoder layers (attention + MLP + norm)→LM head, why
    non-linearity matters. **(Densest lesson — flagged for two passes.)**
15. **Audio → minutes** — Whisper transcription + open Llama 3.2 generation, token-by-token
    generation, temperature, `TextStreamer`, runs on free T4 thanks to quantization.

## Conventions reused
- Copied shared `style.css` + `quiz.js` into `week3/recap/assets/` (self-contained week).
- Continued global lesson numbering (0011–0015).
- Week 3 glossary lists only new terms, links back to Weeks 1–2.
- Quizzes interleave 1–2 earlier questions each.
- Apostrophe/quote escaping rule applied (`&#39;` and `\"`) — validated with browser-accurate check.

## Zone of proximal development / next steps
- Day 4 (quantization + transformer internals) is the conceptual peak of the week; verify it landed.
- Strong synthesis opportunity: Week 3 (open models) + Week 2 (Gradio/tools) → deploy the
  audio→minutes app as a Gradio Space (real-world wisdom).
- After spacing: a **mixed Week 1–3 exam** (stateless memory ↔ tool round-trip ↔ tokenizers/quant).
- When solid → **Week 4** recap (model selection / evaluation, per the 8-week arc).
