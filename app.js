// app.js — 細胞生物學雙語教材 主邏輯

(function () {
  // 合併四個資料區塊
  const ALL_SLIDES = [].concat(SLIDES_PART1, SLIDES_PART2, SLIDES_PART3, SLIDES_PART4);

  // 八大概念分區的起始 slide id（用於導覽列錨點跳轉）
  const CONCEPTS = [
    { label: "封面", start: 1 },
    { label: "7.1 顯微鏡工具", start: 4 },
    { label: "7.2 真核細胞分隔", start: 7 },
    { label: "7.3 細胞核與核糖體", start: 17 },
    { label: "7.4 內膜系統", start: 20 },
    { label: "7.5 粒線體與葉綠體", start: 28 },
    { label: "7.6 細胞骨架", start: 33 },
    { label: "7.7 細胞外連結", start: 43 },
    { label: "7.8 整體大於部分", start: 50 }
  ];

  const container = document.getElementById("slidesContainer");
  const navContainer = document.getElementById("conceptNav");
  const progressPill = document.getElementById("progressPill");

  let openedSet = new Set();
  let currentUtterance = null;

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function buildSlideCard(slide) {
    const card = document.createElement("div");
    card.className = "slide-card";
    card.id = "slide-" + slide.id;

    const header = document.createElement("div");
    header.className = "slide-card-header";
    header.innerHTML = `
      <div class="slide-num">${slide.id}</div>
      <div class="slide-titles">
        <p class="slide-ch-title">${escapeHtml(slide.chTitle)}</p>
        <p class="slide-en-title">${escapeHtml(slide.enTitle)}</p>
      </div>
      <div class="expand-icon">+</div>
    `;
    header.addEventListener("click", () => toggleCard(card, slide.id));

    const body = document.createElement("div");
    body.className = "slide-body";

    const imgWrap = document.createElement("div");
    imgWrap.className = "slide-img-wrap";
    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = slide.img;
    img.alt = slide.enTitle;
    imgWrap.appendChild(img);
    body.appendChild(imgWrap);

    const hint = document.createElement("div");
    hint.className = "hint-bar";
    hint.innerHTML = `🔊 點擊下方英文句子可發音朗讀`;
    body.appendChild(hint);

    slide.sentences.forEach((s) => {
      const block = document.createElement("div");
      block.className = "sentence-block";

      const enLine = document.createElement("div");
      enLine.className = "en-line";
      enLine.innerHTML = `<span class="speaker-icon">🔊</span><span class="en-text">${escapeHtml(s.en)}</span>`;
      enLine.addEventListener("click", () => speak(s.en, enLine));

      const zhLine = document.createElement("div");
      zhLine.className = "zh-line";
      zhLine.textContent = s.zh;

      block.appendChild(enLine);
      block.appendChild(zhLine);
      body.appendChild(block);
    });

    card.appendChild(header);
    card.appendChild(body);
    return card;
  }

  function toggleCard(card, id) {
    const isOpen = card.classList.contains("open");
    if (isOpen) {
      card.classList.remove("open");
      card.querySelector(".expand-icon").textContent = "+";
      openedSet.delete(id);
    } else {
      card.classList.add("open");
      card.querySelector(".expand-icon").textContent = "+";
      openedSet.add(id);
    }
    updateProgress();
  }

  function updateProgress() {
    progressPill.textContent = openedSet.size + " / " + ALL_SLIDES.length + " 已展開";
  }

  function speak(text, lineEl) {
    if (!("speechSynthesis" in window)) {
      alert("您的瀏覽器不支援語音朗讀功能，建議使用 Chrome 或 Edge 瀏覽器。");
      return;
    }
    // 若正在念，再點一次就停止
    if (currentUtterance && lineEl.classList.contains("speaking")) {
      window.speechSynthesis.cancel();
      document.querySelectorAll(".en-line.speaking").forEach(el => el.classList.remove("speaking"));
      currentUtterance = null;
      return;
    }
    window.speechSynthesis.cancel();
    document.querySelectorAll(".en-line.speaking").forEach(el => el.classList.remove("speaking"));

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.92;
    utter.onend = () => {
      lineEl.classList.remove("speaking");
      currentUtterance = null;
    };
    utter.onerror = () => {
      lineEl.classList.remove("speaking");
      currentUtterance = null;
    };
    lineEl.classList.add("speaking");
    currentUtterance = utter;
    window.speechSynthesis.speak(utter);
  }

  function buildConceptNav() {
    CONCEPTS.forEach((c, idx) => {
      const chip = document.createElement("button");
      chip.className = "concept-chip";
      chip.textContent = c.label;
      chip.addEventListener("click", () => {
        document.querySelectorAll(".concept-chip").forEach(el => el.classList.remove("active"));
        chip.classList.add("active");
        const target = document.getElementById("slide-" + c.start);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          if (!target.classList.contains("open")) {
            toggleCard(target, c.start);
          }
        }
      });
      navContainer.appendChild(chip);
    });
  }

  function init() {
    ALL_SLIDES.forEach((slide) => {
      container.appendChild(buildSlideCard(slide));
    });
    buildConceptNav();
    updateProgress();

    document.getElementById("topBtn").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 停止朗讀：切換頁面或離開時
    window.addEventListener("beforeunload", () => {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
