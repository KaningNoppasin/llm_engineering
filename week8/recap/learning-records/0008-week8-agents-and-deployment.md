# 0008 — Week 8 recap: agents & deployment (course finale)

**Date:** 2026-06-27
**Status:** Active — **course recap complete (Weeks 1–8)**
**Builds on:** [0007-week7-qlora-finetuning](../../../week7/recap/learning-records/0007-week7-qlora-finetuning.md)

## Context
Same learner (junior backend eng, career switch into AI). Week 8 is the finale: deploy the
fine-tuned model and build the full autonomous "Price is Right" agentic platform. Recap from
`week8/sub-title/*.vtt`, `week8/day{1..5}.ipynb`, and the .py modules (pricer_service,
deal_agent_framework, price_is_right). All five days covered.

## What was taught (lessons 0036–0040, in `week8/recap/lessons/`)
36. **Modal deployment** — serverless (image/gpu/secrets/volume); ephemeral vs deployed; cold
    starts; deploy the QLoRA pricer; call via .remote(); first agent.
37. **RAG ensemble** — RAG pricer without LangChain (raw Chroma + encoder); frontier RAG ($30.19)
    beat the fine-tuned specialist ($39.85); ensemble of 3 diverse pricers → $29.90 MAE, R²≈87%;
    why uncorrelated errors cancel.
38. **Structured outputs** — Pydantic BaseModel + constrained decoding; chat.completions.parse →
    typed object; deal scanner over RSS; "$100 off $500"→400; Pushover notifications.
39. **Multi-agent** — Planning agent orchestrating Scanner/Ensemble/Messaging agents as tools;
    the while-not-done agent loop; DealAgentFramework; persistent memory.json; ~34 model calls/cycle.
40. **Shipping the platform** — gr.Timer(300) autonomous loop; deals dataframe + live logs + 3D
    vector viz; memory prevents repeats; the 8-week stack synthesized; "you are an AI engineer."

## Conventions reused
- Copied shared assets into `week8/recap/assets/` (self-contained week).
- Continued global lesson numbering (0036–0040). **Whole course = lessons 0001–0040.**
- Week 8 glossary lists only new terms, links back to Weeks 1–7.
- Quizzes interleave earlier weeks (Day 5 quiz synthesizes Weeks 1/5/7/8); escaping rule applied
  (`&#39;`, `\"`), validated with browser-accurate check.

## Zone of proximal development / next steps
- **The course recap is complete.** Best next sessions, in order:
  1. A **spaced mixed Week 1–8 exam** (cold recall across all weeks) — convert fluency → storage.
  2. Help **turning the capstone into a portfolio piece** (GitHub README, HF Space, write-up) — the
     mission is the job switch, so a shippable artifact + the ability to narrate it matters most now.
  3. **Interview prep**: the recurring interview-framing callouts across all 8 weeks are the raw
     material for a mock-interview drill.
- Mission accomplished on knowledge coverage; shift emphasis toward WISDOM (community + real projects)
  and interview readiness.
