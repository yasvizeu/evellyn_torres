// ============================================================
// ✏️ DAILY CONTENT — atualize aqui sempre que quiser
// ============================================================

const PLAN = "Foundation"; // ✏️ Troque para "Fluency" para liberar o conteúdo

const DAILY = {
  date: "30 de abril, 2026",   // ✏️ Data de hoje

  // ✏️ TEXTO — pode ser um parágrafo curto, diálogo, notícia, etc.
  text: `Sarah and Tom are at a coffee shop. Sarah is a teacher and Tom is her student.
Tom is nervous, but Sarah is very kind. "Are you okay?" she asks.
"I am fine, thank you! I am just a little tired," Tom says.
"That's okay. We are here to learn, not to be perfect!" Sarah smiles.`,

  // ✏️ 5 PERGUNTAS DE MÚLTIPLA ESCOLHA (a, b, c, d, e)
  questions: [
    {
      question: "Where are Sarah and Tom?",
      options: [
        { letter: "a", text: "At school" },
        { letter: "b", text: "At a coffee shop" },
        { letter: "c", text: "At home" },
        { letter: "d", text: "At work" },
        { letter: "e", text: "At the park" },
      ],
      answer: "b"
    },
    {
      question: "What is Sarah's job?",
      options: [
        { letter: "a", text: "She is a doctor" },
        { letter: "b", text: "She is a student" },
        { letter: "c", text: "She is a teacher" },
        { letter: "d", text: "She is a nurse" },
        { letter: "e", text: "She is a chef" },
      ],
      answer: "c"
    },
    {
      question: "How does Tom feel?",
      options: [
        { letter: "a", text: "He is happy" },
        { letter: "b", text: "He is angry" },
        { letter: "c", text: "He is nervous" },
        { letter: "d", text: "He is sad" },
        { letter: "e", text: "He is excited" },
      ],
      answer: "c"
    },
    {
      question: "What does Sarah ask Tom?",
      options: [
        { letter: "a", text: "Are you tired?" },
        { letter: "b", text: "Are you okay?" },
        { letter: "c", text: "Are you a teacher?" },
        { letter: "d", text: "Are you hungry?" },
        { letter: "e", text: "Are you ready?" },
      ],
      answer: "b"
    },
    {
      question: "What does Sarah say about learning?",
      options: [
        { letter: "a", text: "We are here to be perfect" },
        { letter: "b", text: "We are here to be tired" },
        { letter: "c", text: "We are here to work" },
        { letter: "d", text: "We are here to learn, not to be perfect" },
        { letter: "e", text: "We are here to drink coffee" },
      ],
      answer: "d"
    },
  ]
};

// ============================================================
// ⬇️ FUNÇÕES DO DAILY CONTENT — não mexa
// ============================================================

function openDaily() {
  const overlay = document.getElementById("dailyOverlay");
  const body    = document.getElementById("dailyBody");
  const dateEl  = document.getElementById("dailyDate");

  dateEl.textContent = DAILY.date || "";

  if (PLAN !== "Fluency") {
    body.innerHTML = `
      <div class="daily-locked">
        <span class="daily-lock-icon">🔒</span>
        <h3>Conteúdo Fluency</h3>
        <p>O Daily Content é exclusivo para alunas do plano <strong>Fluency</strong>.</p>
        <p>Fale com a Yas para fazer o upgrade e ter acesso a textos e exercícios diários! ✦</p>
      </div>`;
  } else {
    const answers = {};
    body.innerHTML = `
      <div class="daily-text-wrap">
        <h3 class="res-title">Texto de hoje</h3>
        <div class="daily-text">${DAILY.text.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="daily-questions-wrap">
        <h3 class="res-title" style="margin-top:24px">Exercícios</h3>
        <div class="daily-questions">
          ${DAILY.questions.map((q, qi) => `
            <div class="daily-q" id="q${qi}">
              <p class="daily-q-text"><strong>${qi + 1}.</strong> ${q.question}</p>
              <div class="daily-options">
                ${q.options.map(opt => `
                  <button class="daily-opt" onclick="checkAnswer(${qi}, '${opt.letter}', '${q.answer}')"
                          id="q${qi}-${opt.letter}">
                    <span class="opt-letter">${opt.letter}</span>
                    <span class="opt-text">${opt.text}</span>
                  </button>`).join('')}
              </div>
              <p class="daily-feedback" id="feedback${qi}"></p>
            </div>`).join('')}
        </div>
        <button class="daily-reset-btn" onclick="resetDaily()">Recomeçar ↺</button>
      </div>`;
  }

  overlay.classList.add("open");
  document.body.style.overflow = 'hidden';
}

function checkAnswer(qi, chosen, correct) {
  // Disable all options for this question
  const opts = document.querySelectorAll(`#q${qi} .daily-opt`);
  opts.forEach(btn => btn.disabled = true);

  // Color chosen and correct
  const chosenBtn  = document.getElementById(`q${qi}-${chosen}`);
  const correctBtn = document.getElementById(`q${qi}-${correct}`);
  const feedback   = document.getElementById(`feedback${qi}`);

  if (chosen === correct) {
    chosenBtn.classList.add('correct');
    feedback.textContent = "✦ Correct!";
    feedback.className = "daily-feedback feedback-correct";
  } else {
    chosenBtn.classList.add('wrong');
    correctBtn.classList.add('correct');
    feedback.textContent = "The correct answer is " + correct.toUpperCase() + ".";
    feedback.className = "daily-feedback feedback-wrong";
  }
}

function resetDaily() {
  openDaily();
}

function closeDaily() {
  document.getElementById("dailyOverlay").classList.remove("open");
  document.body.style.overflow = '';
}

document.getElementById("dailyOverlay").addEventListener("click", function(e) {
  if (e.target === this) closeDaily();
});

// ============================================================
// ✏️ EDITE AQUI — DADOS DA ALUNA
// ============================================================

const WEEKS = [
  {
    number: 1,
    title: "To Be",
    focus: "Aprender a estrutura de frases de ser/estar na afirmativa. Não se preocupe com perfeição — ouse falar!",

    pdfs: [],

    exercises: [
      "Pratique as frases do PDF enviado no WhatsApp",
      "Escreva 3 frases apresentando você em inglês no caderno"
    ],

    audios: [
      { label: "Pronúncia — enviado pelo WhatsApp", url: "" }
    ],

    links: [],
    videos: [],

    vocabulary: [
      { word: "to be",         translation: "ser / estar",               phonetic: "/tu bi/" },
      { word: "to know",       translation: "saber / conhecer",          phonetic: "/tu noʊ/" },
      { word: "to love",       translation: "amar",                      phonetic: "/tu lʌv/" },
      { word: "to have",       translation: "ter",                       phonetic: "/tu hæv/" },
      { word: "to like",       translation: "gostar",                    phonetic: "/tu laɪk/" },
      { word: "to want",       translation: "querer",                    phonetic: "/tu wɒnt/" },
      { word: "to hurt",       translation: "machucar",                  phonetic: "/tu hɜːt/" },
      { word: "to drive",      translation: "dirigir",                   phonetic: "/tu draɪv/" },
      { word: "today",         translation: "hoje",                      phonetic: "/təˈdeɪ/" },
      { word: "tomorrow",      translation: "amanhã",                    phonetic: "/təˈmɒroʊ/" },
      { word: "yesterday",     translation: "ontem",                     phonetic: "/ˈjɛstərdeɪ/" },
      { word: "week",          translation: "semana",                    phonetic: "/wiːk/" },
      { word: "month",         translation: "mês",                       phonetic: "/mʌnθ/" },
      { word: "year",          translation: "ano",                       phonetic: "/jɪər/" },
      { word: "here",          translation: "aqui",                      phonetic: "/hɪər/" },
      { word: "there",         translation: "lá",                        phonetic: "/ðɛər/" },
      { word: "pen",           translation: "caneta",                    phonetic: "/pɛn/" },
      { word: "pencil",        translation: "lápis",                     phonetic: "/ˈpɛnsɪl/" },
      { word: "cousin",        translation: "primo(a)",                  phonetic: "/ˈkʌzɪn/" },
      { word: "how",           translation: "como / quantos",            phonetic: "/haʊ/" },
      { word: "relationship",  translation: "relação",                   phonetic: "/rɪˈleɪʃənʃɪp/" },
      { word: "salad",         translation: "salada",                    phonetic: "/ˈsæləd/" },
      { word: "brand",         translation: "marca",                     phonetic: "/brænd/" },
      { word: "before",        translation: "antes",                     phonetic: "/bɪˈfɔːr/" },
      { word: "after",         translation: "depois",                    phonetic: "/ˈɑːftər/" },
      { word: "healthy",       translation: "saudável",                  phonetic: "/ˈhɛlθi/" },
      { word: "great",         translation: "ótimo",                     phonetic: "/ɡreɪt/" },
      { word: "water",         translation: "água",                      phonetic: "/ˈwɔːtər/" },
      { word: "dress",         translation: "vestido",                   phonetic: "/drɛs/" },
      { word: "about",         translation: "sobre",                     phonetic: "/əˈbaʊt/" },
      { word: "mug",           translation: "caneca",                    phonetic: "/mʌɡ/" },
      { word: "all",           translation: "tudo / todos / todas",      phonetic: "/ɔːl/" },
      { word: "that",          translation: "aquilo — objeto/pessoa longe", phonetic: "/ðæt/" },
      { word: "this",          translation: "isso — objeto/pessoa perto",   phonetic: "/ðɪs/" },
      { word: "just",          translation: "apenas",                    phonetic: "/dʒʌst/" },
      { word: "a / an",        translation: "um / uma",                  phonetic: "/ə/ /æn/" },
      { word: "but",           translation: "mas",                       phonetic: "/bʌt/" },
      { word: "beer",          translation: "cerveja",                   phonetic: "/bɪər/" },
    ]
  },

  {
    number: 2,
    title: "Questions using To Be",
    focus: "Praticar estruturas gramaticais interrogativas com ser/estar.",

    pdfs: [],

    exercises: [
      "Escreva 4 perguntas usando To Be",
      "Transforme estas frases em perguntas: 'You are okay.' / 'She is home.' / 'They are friends.'",
    ],

    audios: [
      { label: "Pronúncia — enviado pelo WhatsApp", url: "" }
    ],

    links: [],
    videos: [],

    vocabulary: []
  }


  ,{
    number: 3,
    title: "Review + Can/Can't",
    focus: "Revisar To Be e Do/Does na prática e aprender a usar Can e Can't para falar o que você consegue fazer.",

    pdfs: [],

    exercises: [],

    audios: [
      { label: "Pronúncia — enviado pelo WhatsApp", url: "" }
    ],

    links: [],
    videos: [],

    notes: [
      "DO / DOES → usados para perguntas e negativas com verbos de ação",
      "DO → I, You, We, They | DOES → He, She, It",
      "Pergunta: Does your cousin drive a car? / Do you have a mug?",
      "CAN = poder / conseguir → I can dance. She can speak English.",
      "CAN'T = não poder / não conseguir → I can't drive. He can't see.",
      "SPEAK = falar | SEE = ver | WATCH = assistir | DANCE = dançar",
    ],

    vocabulary: [
      { word: "can",      translation: "poder / conseguir",     phonetic: "/kæn/" },
      { word: "can't",    translation: "não poder / não conseguir", phonetic: "/kɑːnt/" },
      { word: "speak",    translation: "falar",                 phonetic: "/spiːk/" },
      { word: "see",      translation: "ver",                   phonetic: "/siː/" },
      { word: "watch",    translation: "assistir",              phonetic: "/wɒtʃ/" },
      { word: "drive",    translation: "dirigir",               phonetic: "/draɪv/" },
      { word: "dance",    translation: "dançar",                phonetic: "/dæns/" },
    ],

    classwork: [
      {
        title: "Parte 2 — Tradução (Português → Inglês)",
        instruction: "Use as palavras da sua lista para traduzir as frases abaixo.",
        items: [
          { question: "Você tem uma caneca?",              answer: "Do you have a mug?" },
          { question: "A cerveja está aqui?",              answer: "Is the beer here?" },
          { question: "Ele gosta de salada, mas eu quero cerveja.", answer: "He likes salad but I want beer." },
          { question: "Como está a relação?",              answer: "How is the relationship?" },
          { question: "Hoje é um ótimo dia.",              answer: "Today is a great day." },
        ]
      },
      {
        title: "Parte 3 — Transformação (Afirmativa → Interrogativa)",
        instruction: "Transforme a frase positiva em uma pergunta.",
        items: [
          { question: "That pencil is great.",         answer: "Is that pencil great?" },
          { question: "Your cousin drives a car.",     answer: "Does your cousin drive a car?" },
          { question: "This hurts today.",             answer: "Does this hurt today?" },
        ]
      },
      {
        title: "Parte 4 — Preencha com o Vocabulário Correto",
        instruction: "Complete as frases usando as palavras lógicas da lista.",
        items: [
          { question: "I drink ___ before the weekend, but I drink ___ after.", answer: "I drink coke before the weekend, but I drink water after." },
          { question: "___ you know about that relationship?",                  answer: "Do you know about that relationship?" },
          { question: "It is ___.",                                             answer: "It is great! (ou qualquer adjetivo positivo)" },
        ]
      }
    ]
  }

  // ============================================================
  // ✏️ PARA ADICIONAR UMA NOVA SEMANA:
  // ,{
  //   number: 3,
  //   title: "Título",
  //   focus: "Foco da semana.",
  //   pdfs:      [],
  //   exercises: ["Exercício 1"],
  //   audios:    [],
  //   links:     [],
  //   videos:    [],
  //   vocabulary: [
  //     { word: "word", translation: "tradução", phonetic: "/.../" },
  //   ]
  // }
  // ============================================================
];

// ============================================================
// ⬇️ A PARTIR DAQUI NÃO PRECISA MEXER
// ============================================================

function speakWord(word, btn) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(word);
  u.lang = 'en-US';
  u.rate = 0.85;
  if (btn) {
    btn.classList.add('speaking');
    u.onend  = () => btn.classList.remove('speaking');
    u.onerror = () => btn.classList.remove('speaking');
  }
  window.speechSynthesis.speak(u);
}

function hasContent(arr) {
  return Array.isArray(arr) && arr.filter(i => i && i.label).length > 0;
}

function renderGrid() {
  const grid = document.getElementById("weeksGrid");
  grid.innerHTML = WEEKS.map((w, i) => {
    const icons = [
      hasContent(w.pdfs)        ? '<span class="ricon ricon-pdf"      title="PDF">P</span>'        : '',
      hasContent(w.audios)      ? '<span class="ricon ricon-audio"    title="Áudio">A</span>'      : '',
      hasContent(w.exercises)   ? '<span class="ricon ricon-exercise" title="Exercícios">E</span>' : '',
      hasContent(w.links)       ? '<span class="ricon ricon-link"     title="Links">L</span>'      : '',
      hasContent(w.videos)      ? '<span class="ricon ricon-video"    title="Vídeos">V</span>'     : '',
      (w.vocabulary||[]).length ? '<span class="ricon ricon-vocab"    title="Vocabulário">W</span>': '',
    ].join('');
    return `
      <article class="week-card" onclick="openModal(${i})" tabindex="0"
               onkeydown="if(event.key==='Enter')openModal(${i})">
        <div class="card-head">
          <p class="card-number">Semana ${w.number}</p>
          <h2 class="card-title">${w.title}</h2>
        </div>
        <div class="card-body">
          <div class="card-icons">${icons}</div>
          <div class="card-cta">
            <span>Ver material</span>
            <span class="card-cta-arrow">→</span>
          </div>
        </div>
      </article>`;
  }).join('');
}

function openModal(index) {
  const w = WEEKS[index];
  document.getElementById("modalWeekLabel").textContent = `Semana ${w.number}`;
  document.getElementById("modalTitle").textContent     = w.title;
  document.getElementById("modalFocus").textContent     = w.focus || '';
  document.getElementById("modalBody").innerHTML = [
    renderPdfs(w.pdfs),
    renderExercises(w.exercises),
    renderAudios(w.audios),
    renderLinks(w.links),
    renderVideos(w.videos),
    renderNotes(w.notes),
    renderClasswork(w.classwork),
    renderVocabulary(w.vocabulary),
    `<div class="yas-tip"><strong>Dica da YV</strong>Pratique todos os dias um pouco. Consistência é o que te leva à fluência. ✦</div>`
  ].join('');
  document.getElementById("overlay").classList.add("open");
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  window.speechSynthesis && window.speechSynthesis.cancel();
  document.getElementById("overlay").classList.remove("open");
  document.body.style.overflow = '';
}

function renderPdfs(pdfs) {
  const items = (pdfs || []).filter(p => p.label);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">PDFs</h3>
    <div class="res-list">
      ${items.map(p => `
        <div class="res-item">
          <span class="res-item-label">${p.label}</span>
          <div class="res-actions">
            <a href="${p.url}" target="_blank" class="btn-open">Abrir ↗</a>
            <a href="${p.url}" download class="btn-download">Baixar</a>
          </div>
        </div>`).join('')}
    </div>
  </div>`;
}

function renderExercises(exercises) {
  const items = (exercises || []).filter(Boolean);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">Exercícios</h3>
    <ul class="exercise-list">
      ${items.map(e => `<li>${e}</li>`).join('')}
    </ul>
  </div>`;
}

function renderAudios(audios) {
  const items = (audios || []).filter(a => a.label);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">Áudios</h3>
    <div class="res-list">
      ${items.map(a => a.url
        ? `<div class="res-item audio-item">
             <span class="res-item-label">${a.label}</span>
             <audio controls preload="none"><source src="${a.url}"></audio>
           </div>`
        : `<div class="res-item">
             <span class="res-item-label">${a.label}</span>
             <span class="via-whatsapp">via WhatsApp</span>
           </div>`
      ).join('')}
    </div>
  </div>`;
}

function renderLinks(links) {
  const items = (links || []).filter(l => l.label);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">Links</h3>
    <div class="res-list">
      ${items.map(l => `
        <div class="res-item">
          <span class="res-item-label">${l.label}</span>
          <div class="res-actions">
            <a href="${l.url}" target="_blank" class="btn-open">Abrir ↗</a>
          </div>
        </div>`).join('')}
    </div>
  </div>`;
}

function renderVideos(videos) {
  const items = (videos || []).filter(v => v.label);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">Vídeos</h3>
    <div class="res-list">
      ${items.map(v => `
        <div class="res-item">
          <span class="res-item-label">${v.label}</span>
          <div class="res-actions">
            <a href="${v.url}" target="_blank" class="btn-open">Assistir ↗</a>
          </div>
        </div>`).join('')}
    </div>
  </div>`;
}

function renderNotes(notes) {
  const items = (notes || []).filter(Boolean);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">Notas da Aula</h3>
    <ul class="notes-list">
      ${items.map(n => `<li>${n}</li>`).join('')}
    </ul>
  </div>`;
}

function renderVocabulary(vocabulary) {
  const items = (vocabulary || []).filter(v => v.word);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">Vocabulário</h3>
    <div class="vocab-grid">
      ${items.map(v => `
        <div class="vocab-card" tabindex="0"
             onclick="this.classList.toggle('flipped')"
             onkeydown="if(event.key==='Enter')this.classList.toggle('flipped')">
          <div class="vocab-front">
            <button class="vocab-speak-btn"
              onclick="event.stopPropagation(); speakWord('${v.word.replace(/'/g,"\\'")}', this)"
              title="Ouvir pronúncia">🔊</button>
            <div class="vocab-front-inner">
              <span class="vocab-word">${v.word}</span>
              ${v.phonetic ? `<span class="vocab-phonetic">${v.phonetic}</span>` : ''}
            </div>
            <span class="vocab-hint">toque para ver</span>
          </div>
          <div class="vocab-back">
            <span class="vocab-translation">${v.translation}</span>
          </div>
        </div>`).join('')}
    </div>
  </div>`;
}


function renderClasswork(classwork) {
  const sections = (classwork || []).filter(s => s.title);
  if (!sections.length) return '';
  return sections.map(section => `
    <div class="resource-section">
      <h3 class="res-title">${section.title}</h3>
      <p class="classwork-instruction">${section.instruction}</p>
      <div class="classwork-list">
        ${section.items.map((item, i) => `
          <div class="classwork-item" id="cw-${section.title.replace(/\s/g,'')}-${i}">
            <p class="classwork-q"><strong>${i + 1}.</strong> ${item.question}</p>
            <button class="classwork-reveal-btn"
              onclick="revealAnswer(this, '${item.answer.replace(/'/g, "\'")}')">
              Ver resposta
            </button>
            <p class="classwork-answer" style="display:none">${item.answer}</p>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

function revealAnswer(btn, answer) {
  const item = btn.parentElement;
  const answerEl = item.querySelector('.classwork-answer');
  answerEl.style.display = 'block';
  btn.style.display = 'none';
}

function renderGlossary() {
  const section = document.getElementById("glossarySection");
  if (!section) return;
  const all = [];
  WEEKS.forEach(w => {
    (w.vocabulary || []).filter(v => v.word).forEach(v => {
      all.push({ ...v, week: w.number });
    });
  });
  if (!all.length) {
    section.innerHTML = '<p class="glossary-empty">O glossário vai aparecer aqui conforme as semanas forem avançando. ✦</p>';
    return;
  }
  section.innerHTML = all.map(v => `
    <div class="glossary-row">
      <span class="glos-word">${v.word}</span>
      <span class="glos-trans">
        ${v.translation}
        ${v.phonetic ? `<span class="glos-phonetic">${v.phonetic}</span>` : ''}
      </span>
      <button class="glos-speak" onclick="speakWord('${v.word.replace(/'/g,"\\'")}', this)" title="Ouvir">🔊</button>
      <span class="glos-week-badge">Sem. ${v.week}</span>
    </div>`).join('');
}

document.getElementById("overlay").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

let touchStartY = 0;
document.addEventListener("touchstart", e => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });
document.addEventListener("touchmove", e => {
  if (document.getElementById("overlay").classList.contains("open")) {
    if (e.touches[0].clientY - touchStartY > 100) closeModal();
  }
}, { passive: true });

renderGrid();
renderGlossary();
