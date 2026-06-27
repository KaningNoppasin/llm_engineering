# 0007 — Week 7 recap: QLoRA fine-tuning an open-source model

**Date:** 2026-06-27
**Status:** Active
**Builds on:** [0006-week6-data-and-finetuning](../../../week6/recap/learning-records/0006-week6-data-and-finetuning.md)

## Context
Same learner (junior backend eng, career switch into AI). Week 7 is the capstone climax:
fine-tune the open-source Llama 3.2 3B base with QLoRA to beat the frontier models on the
"Price is Right" task. Recap generated from `week7/sub-title/*.vtt` and notebooks. **Days 3 & 4
share one notebook** (`day3 and 4.ipynb`); day1, day2, day5, results are separate. All days covered.

## What was taught (lessons 0031–0035, in `week7/recap/lessons/`)
31. **QLoRA** — LoRA (freeze base, train low-rank adapters); QLoRA adds 4-bit quantized base;
    hyperparameters r / lora_alpha (=2r) / target_modules (q,k,v,o) / lora_dropout; ~0.6% trainable;
    BitsAndBytesConfig + LoraConfig + get_peft_model.
32. **Dataset prep** — fine-tune the BASE not chat model; prompt template ("Price is $"); Llama
    tokenizes 0–999 as single tokens; round prices for training; token cutoff ~110 → max_seq 128;
    untrained base baseline ~$110 MAE.
33. **Training config** — epochs/batch/learning rate (1e-4)/cosine+warmup/grad accumulation/
    paged_adamw; TRL SFTTrainer + SFTConfig; Weights & Biases tracking.
34. **Monitoring & overfitting** — train vs validation loss; overfitting signature (train↓ val↑,
    epoch-boundary spike); 800K × 3 epochs on A100 (~21h); push_to_hub checkpoints; pick lowest-val
    checkpoint; keep test set sacred.
35. **Results & cross-entropy** — base+adapters inference (PeftModel); top-k weighted price; softmax;
    cross-entropy = −log(p_true); backprop only adapters; **fine-tuned 3B = $39.85, beats GPT-5.1 $44.74**.

## Conventions reused
- Copied shared assets into `week7/recap/assets/` (self-contained week).
- Continued global lesson numbering (0031–0035).
- Week 7 glossary lists only new terms, links back to Weeks 1–6.
- Quizzes interleave 1–2 earlier questions each; escaping rule applied (`&#39;`, `\"`),
  validated with browser-accurate check (Day 1 had a &quot; instance — fixed).

## Zone of proximal development / next steps
- This is the most impressive résumé/portfolio result so far (small open model beats frontier).
  Reinforce the WHY: specialization beats scale on narrow, data-rich tasks — and contrast with
  Week 6 where fine-tuning a *frontier* model got worse (different starting point).
- Cross-entropy (Day 5) is foundational; pairs with Week 6 perplexity. Good exam material.
- **Week 8** = the finale: productionize the capstone (agents, deployment, the full pipeline).
- After spacing: a **mixed Week 1–7 exam**. The course is nearly complete (7 of 8 weeks recapped).
