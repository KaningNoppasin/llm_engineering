# Reusable recap prompt (Week 2+)
<!-- /teach recap Week 2 of LLM Engineering, same as Week 1 — sources in week2/sub-title and week2/dayX.ipynb  -->
Paste this after `/teach`, swapping the week number and source paths.
It reproduces the Week 1 recap workflow.

---

```
/teach Recap Week N of the LLM Engineering course, same format as the Week 1 recap.

Sources (ground every claim in these — never your own memory):
- Subtitles: weekN/sub-title/*.vtt
- Notebooks: weekN/dayX.ipynb (note which days have no notebook)

Reuse the existing workspace and conventions in week1/recap/:
- Reuse assets/style.css and assets/quiz.js as-is (don't re-create them).
- New lessons go in weekN/recap/lessons/000M-dayX-<slug>.html, continuing the numbering.
- Update/extend reference/glossary.html with new Week N terms (keep the table format).
- Add a learning record and update NOTES.md.

Deliverables — one HTML lesson per day, each with:
1. Masthead: Week N · Day X, a one-line theme, and a "why this matters for the
   career switch into AI engineering" mission banner.
2. A single "today's win" box.
3. Key concepts as precise factual bullets (junior backend eng, new to AI —
   light on Python, heavy on AI-specific *why*).
4. The essential code shape to memorize (minimal, real, from the notebook).
5. Gotchas / interview-ready framing callouts where useful.
6. An interactive active-recall quiz (assets/quiz.js): 5 multiple-choice
   questions, immediate feedback, options kept similar length so formatting
   gives nothing away. INTERLEAVE 1–2 questions from earlier days/weeks.
7. A primary-source recommendation (official docs or a high-trust paper) + an
   "ask me, your teacher, anything" reminder + nav links to adjacent lessons
   and the glossary.

Process: first read all the subtitles + notebooks (fan out parallel sub-agents,
one per day) to extract a grounded digest, THEN build the lessons. Tie everything
to the mission in MISSION.md. Open the index + first lesson in the browser when done.
```

---

## Notes for the prompt
- The two deliberate quality levers to keep: **interleaving** (mix earlier days
  into later quizzes) and **similar-length answer options** (no formatting tells).
- Keep lessons short — one tangible win each, within working-memory limits.
- Verify model names / prices / context-window numbers against live docs before
  quoting; they change fast.
