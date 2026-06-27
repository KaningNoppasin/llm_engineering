# 0006 — Week 6 recap: data curation, baselines & fine-tuning

**Date:** 2026-06-27
**Status:** Active
**Builds on:** [0005-week5-rag](../../../week5/recap/learning-records/0005-week5-rag.md)

## Context
Same learner (junior backend eng, career switch into AI). Week 6 starts the multi-week
"Price is Right" capstone (predict a product price from its description). Recap generated
from `week6/sub-title/*.vtt` and `week6/day{1..5}.ipynb` (+ redemption_train.ipynb). All five
days have notebooks; the week is one continuous project climbing an error (MAE) ladder.

## What was taught (lessons 0026–0030, in `week6/recap/lessons/`)
26. **Data curation** — capstone goal; generalization; transfer learning; filter/clean Amazon
    data; weighted sampling for skew; dedup to avoid leakage; train/val/test splits; push to HF Hub.
27. **5-step process & batch** — Understand→Prepare→Select→Apply→Productionize; MLOps & model drift;
    LLM data pre-processing; JSONL batch mode (~50% cheaper); 22k requests for <$1; custom_id matching.
28. **Traditional ML baselines** — why baseline first; random ($382)→constant ($106)→linear ($102)→
    Bag-of-Words+linear ($77)→Random Forest ($72)→XGBoost ($68); features > algorithm; MAE & R².
29. **Neural nets vs frontier** — PyTorch net (8 layers, ~669k params) + the 4-step training loop;
    human baseline ($87.62); zero-shot frontier models BEAT the trained net (GPT-5.1 $44.74 best).
30. **Fine-tuning** — SFT via OpenAI API, JSONL chat format, jobs/monitoring; **fine-tuning made
    gpt-4o-mini WORSE ($75.91)** — SFT is for behavior not knowledge; use RAG/prompt for knowledge;
    289M-param from-scratch net redemption ($46.49, beat Claude Opus).

## Conventions reused
- Copied shared assets into `week6/recap/assets/` (self-contained week).
- Continued global lesson numbering (0026–0030).
- Week 6 glossary lists only new terms, links back to Weeks 1–5.
- Quizzes interleave 1–2 earlier questions each; escaping rule applied (`&#39;`, `\"`),
  validated with browser-accurate check (Day 1 had a &quot; instance — fixed).

## Zone of proximal development / next steps
- **Big interview-grade lesson:** fine-tune vs RAG vs prompt decision (Day 5) — reinforce; it ties
  Week 5 (RAG=knowledge) and Week 6 (SFT=behavior) together.
- Day 4's "zero-shot frontier beats trained net" and Day 5's "fine-tuning made it worse" are the
  counterintuitive keepers — good candidates for the eventual mixed exam.
- Capstone continues: **Week 7** = fine-tuning an OPEN-SOURCE model (QLoRA) from scratch to beat
  the frontier baseline; **Week 8** = productionizing it. Per the 8-week arc.
- After spacing: a **mixed Week 1–6 exam**.
