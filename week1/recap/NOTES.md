# Notes

## About the learner
- Strong **junior backend engineer**, **new to AI**. Reads code fluently — keep Python
  scaffolding light, spend the budget on AI-specific *why*.
- Goal is a **career switch into AI engineering** → optimize for **storage strength**
  (long-term retention) and **interview-ready framing**, not just in-the-moment fluency.

## Format preferences (from the kickoff)
- Wants **one HTML lesson per day** (format 1) **plus interactive active-recall quizzes**
  (format 3). Delivered: Days 1–5, each with a quiz.
- Lessons live in `week1/recap/` to keep the forked course repo clean (not repo root).

## Teaching choices made
- Quizzes use **immediate feedback** + **interleaving** (later quizzes mix earlier days)
  for desirable difficulty. Options kept similar length so formatting gives no hints.
- Every day ties back to the mission via a "Why this matters for the switch" banner.
- Day 3 had no notebook — taught as conceptual taxonomy.

## Open threads / good next sessions
- A **Week 1 mixed-day exam** (cold recall across all 5 days) after a day or two of spacing.
- Hands-on: actually run `tiktoken` pricing and extend the brochure generator.

## Progress
- **Week 1 recap: done** (lessons 0001–0005, `week1/recap/`).
- **Week 2 recap: done** (lessons 0006–0010, `week2/recap/`) — applied/product week:
  multi-provider APIs, Gradio, chatbots, tool calling, multimodal+agentic. Assets copied
  into `week2/recap/assets/` so each week is self-contained; see
  [week2 learning record](../../week2/recap/learning-records/0002-week2-applied.md).
- **Next:** after spacing, a mixed Week 1+2 exam; then the **Week 3** recap.

## Quiz authoring rule (learned the hard way)
- Inside `data-quiz='...'` JSON, every apostrophe MUST be the entity `&#39;` — a raw `'`
  closes the single-quoted attribute early and a doubled `''` doesn't decode. Validate with
  a browser-accurate check (no raw `'` inside any quiz block) before shipping.
