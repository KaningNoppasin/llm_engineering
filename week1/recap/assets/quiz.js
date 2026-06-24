/* Reusable active-recall quiz widget for the Week 1 recap.
   Usage: a <div class="quiz" data-quiz='[...JSON...]'></div>
   Each item: { q: "question", options: ["a","b","c","d"], answer: 0, why: "explanation" }
   Renders multiple choice with IMMEDIATE feedback (storage strength via effortful retrieval).
   Answer order should be shuffled in the data; options should be similar length so
   formatting gives nothing away. */

(function () {
  function build(el) {
    let items;
    try { items = JSON.parse(el.getAttribute("data-quiz")); }
    catch (e) { el.textContent = "Quiz failed to load."; return; }

    const state = { answered: 0, correct: 0, total: items.length };

    const head = document.createElement("div");
    head.className = "quiz-head";
    head.innerHTML =
      '<span class="quiz-title">Active recall</span>' +
      '<span class="quiz-score" aria-live="polite">0 / ' + state.total + "</span>";
    el.appendChild(head);

    const score = head.querySelector(".quiz-score");

    items.forEach((item, qi) => {
      const card = document.createElement("div");
      card.className = "q-card";

      const qp = document.createElement("p");
      qp.className = "q-text";
      qp.innerHTML = "<b>Q" + (qi + 1) + ".</b> " + item.q;
      card.appendChild(qp);

      let locked = false;
      item.options.forEach((opt, oi) => {
        const b = document.createElement("button");
        b.className = "opt";
        b.type = "button";
        b.textContent = opt;
        b.addEventListener("click", () => {
          if (locked) return;
          locked = true;
          state.answered++;
          const right = oi === item.answer;
          if (right) { state.correct++; b.classList.add("correct"); }
          else {
            b.classList.add("wrong");
            card.querySelectorAll(".opt")[item.answer].classList.add("correct");
          }
          card.querySelectorAll(".opt").forEach((x) => (x.disabled = true));
          const fb = document.createElement("p");
          fb.className = "q-why " + (right ? "ok" : "no");
          fb.innerHTML = (right ? "✓ Correct. " : "✗ Not quite. ") + item.why;
          card.appendChild(fb);
          score.textContent = state.correct + " / " + state.total;
          if (state.answered === state.total) {
            score.textContent += state.correct === state.total ? "  — perfect" : "";
          }
        });
        card.appendChild(b);
      });

      el.appendChild(card);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".quiz").forEach(build);
  });
})();
