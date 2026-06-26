# 0005 — Week 5 recap: RAG (retrieval-augmented generation)

**Date:** 2026-06-26
**Status:** Active
**Builds on:** [0004-week4-selection-and-eval](../../../week4/recap/learning-records/0004-week4-selection-and-eval.md)

## Context
Same learner (junior backend eng, career switch into AI). Week 5 is the RAG week — the
payoff of the "primitive RAG" preview from Week 2 Day 3. Recap generated from
`week5/sub-title/*.vtt` and `week5/day{1..5}.ipynb`. All five days have notebooks; the week
is a single arc (build → measure → improve one knowledge-worker system over a 76-doc base).

## What was taught (lessons 0021–0025, in `week5/recap/lessons/`)
21. **RAG & embeddings** — why RAG (ground LLM, cut hallucination); naive keyword lookup &
    its brittleness; vector embeddings; encoder vs generative models; word2vec arithmetic;
    cosine similarity; RAG ≠ fine-tuning.
22. **Chunking & vector stores** — RecursiveCharacterTextSplitter (chunk_size/overlap),
    why chunk; embedding models & their dims (384/1536/3072); Chroma vs FAISS; t-SNE viz;
    ingest must match query embedding model.
23. **Full RAG pipeline** — vectorstore.as_retriever(), top-k, inject+generate, temperature 0,
    multi-turn retrieval bug (retrieve on combined history), chunk-context limitation, Gradio wrap.
24. **RAG evaluation** — retrieval metrics (MRR, nDCG, recall/keyword coverage) vs answer
    quality (LLM-as-judge w/ Pydantic structured output); golden test data; iterate chunk
    size + embedding model (0.73→0.79 MRR); spanning/holistic = weak spots.
25. **Advanced RAG** — semantic chunking, document pre-processing, query rewriting, query
    expansion, re-ranking (cross-encoder/LLM), GraphRAG, build-without-LangChain, multiprocessing;
    stacked → MRR 0.73 → 0.91.

## Conventions reused
- Copied shared assets into `week5/recap/assets/` (self-contained week).
- Continued global lesson numbering (0021–0025).
- Week 5 glossary lists only new terms, links back to Weeks 1–4.
- Quizzes interleave 1–2 earlier questions each; escaping rule applied (`&#39;`, `\"`),
  validated with browser-accurate check.

## Zone of proximal development / next steps
- RAG is the most job-relevant week so far — strongly tied to the mission. Day 4 (evaluation)
  + Week 4's metrics give the learner a real "measure then improve" muscle; reinforce it.
- Great hands-on: add a re-ranker to the Day 3 pipeline and measure the MRR lift on a golden set.
- Synthesis build available: a RAG "knowledge worker" Gradio app over the user's own docs
  (combines Weeks 2, 3, 5).
- After spacing: a **mixed Week 1–5 exam**.
- Next: **Week 6** recap — fine-tuning & data prep (the RAG-vs-fine-tuning contrast from Day 1
  pays off here), per the 8-week arc.
