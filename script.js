// ============================================================
// ✏️ DAILY CONTENT — atualize aqui sempre que quiser
// ============================================================

// ✏️ Troque o plano no index.html em: <body data-plan="Foundation">
var PLAN = document.body.getAttribute("data-plan") || "Foundation";

const DAILY = {
  date: "30 de abril, 2026",
  text: "Sarah and Tom are at a coffee shop. Sarah is a teacher and Tom is her student. Tom is nervous, but Sarah is very kind. Are you okay? she asks. I am fine, thank you! I am just a little tired, Tom says. That is okay. We are here to learn, not to be perfect! Sarah smiles.",
  questions: [
    {
      question: "Where are Sarah and Tom?",
      options: [
        { letter: "a", text: "At school" },
        { letter: "b", text: "At a coffee shop" },
        { letter: "c", text: "At home" },
        { letter: "d", text: "At work" },
        { letter: "e", text: "At the park" }
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
        { letter: "e", text: "She is a chef" }
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
        { letter: "e", text: "He is excited" }
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
        { letter: "e", text: "Are you ready?" }
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
        { letter: "e", text: "We are here to drink coffee" }
      ],
      answer: "d"
    }
  ]
};

// ============================================================
// ✏️ SEMANAS DA ALUNA
// ============================================================

const WEEKS = [
  {
    number: 1,
    title: "To Be",
    focus: "Aprender a estrutura de frases de ser/estar na afirmativa. Nao se preocupe com perfeicao — ouse falar!",
    pdfs: [],
    exercises: [
      "Pratique as frases do PDF enviado no WhatsApp",
      "Escreva 3 frases apresentando voce em ingles no caderno"
    ],
    audios: [
      { label: "Pronuncia — enviado pelo WhatsApp", url: "" }
    ],
    links: [],
    videos: [],
    notes: [],
    classwork: [],
    vocabulary: [
      { word: "to be",        translation: "ser / estar",                    phonetic: "/tu bi/" },
      { word: "to know",      translation: "saber / conhecer",               phonetic: "/tu nou/" },
      { word: "to love",      translation: "amar",                           phonetic: "/tu lav/" },
      { word: "to have",      translation: "ter",                            phonetic: "/tu hav/" },
      { word: "to like",      translation: "gostar",                         phonetic: "/tu laik/" },
      { word: "to want",      translation: "querer",                         phonetic: "/tu wont/" },
      { word: "to hurt",      translation: "machucar",                       phonetic: "/tu hert/" },
      { word: "to drive",     translation: "dirigir",                        phonetic: "/tu draiv/" },
      { word: "today",        translation: "hoje",                           phonetic: "/tudei/" },
      { word: "tomorrow",     translation: "amanha",                         phonetic: "/tomorou/" },
      { word: "yesterday",    translation: "ontem",                          phonetic: "/iesterdei/" },
      { word: "week",         translation: "semana",                         phonetic: "/uik/" },
      { word: "month",        translation: "mes",                            phonetic: "/manth/" },
      { word: "year",         translation: "ano",                            phonetic: "/ier/" },
      { word: "here",         translation: "aqui",                           phonetic: "/hier/" },
      { word: "there",        translation: "la",                             phonetic: "/dher/" },
      { word: "pen",          translation: "caneta",                         phonetic: "/pen/" },
      { word: "pencil",       translation: "lapis",                          phonetic: "/pensil/" },
      { word: "cousin",       translation: "primo(a)",                       phonetic: "/cazin/" },
      { word: "how",          translation: "como / quantos",                 phonetic: "/hau/" },
      { word: "relationship", translation: "relacao",                        phonetic: "/rileichenship/" },
      { word: "salad",        translation: "salada",                         phonetic: "/salad/" },
      { word: "brand",        translation: "marca",                          phonetic: "/brand/" },
      { word: "before",       translation: "antes",                          phonetic: "/bifor/" },
      { word: "after",        translation: "depois",                         phonetic: "/after/" },
      { word: "healthy",      translation: "saudavel",                       phonetic: "/helthi/" },
      { word: "great",        translation: "otimo",                          phonetic: "/greit/" },
      { word: "water",        translation: "agua",                           phonetic: "/woter/" },
      { word: "dress",        translation: "vestido",                        phonetic: "/dres/" },
      { word: "about",        translation: "sobre",                          phonetic: "/abaut/" },
      { word: "mug",          translation: "caneca",                         phonetic: "/mag/" },
      { word: "all",          translation: "tudo / todos / todas",           phonetic: "/ol/" },
      { word: "that",         translation: "aquilo — objeto ou pessoa longe", phonetic: "/dhat/" },
      { word: "this",         translation: "isso — objeto ou pessoa perto",  phonetic: "/dhis/" },
      { word: "just",         translation: "apenas",                         phonetic: "/djast/" },
      { word: "a / an",       translation: "um / uma",                       phonetic: "/e/ /an/" },
      { word: "but",          translation: "mas",                            phonetic: "/bat/" },
      { word: "beer",         translation: "cerveja",                        phonetic: "/bier/" }
    ]
  },

  {
    number: 2,
    title: "Questions using To Be",
    focus: "Praticar estruturas gramaticais interrogativas com ser/estar.",
    pdfs: [],
    exercises: [
      "Escreva 4 perguntas usando To Be",
      "Transforme estas frases em perguntas: You are okay. / She is home. / They are friends."
    ],
    audios: [
      { label: "Pronuncia — enviado pelo WhatsApp", url: "" }
    ],
    links: [],
    videos: [],
    notes: [],
    classwork: [],
    vocabulary: []
  },

  {
    number: 3,
    title: "Review + Can/Can't",
    focus: "Revisar To Be e Do/Does na pratica e aprender a usar Can e Can't para falar o que voce consegue fazer.",
    pdfs: [],
    exercises: [],
    audios: [
      { label: "Pronuncia — enviado pelo WhatsApp", url: "" }
    ],
    links: [],
    videos: [],
    notes: [
      "DO / DOES — usados para perguntas e negativas com verbos de acao",
      "DO — I, You, We, They | DOES — He, She, It",
      "Pergunta: Does your cousin drive a car? / Do you have a mug?",
      "CAN = poder / conseguir — I can dance. She can speak English.",
      "CAN'T = nao poder / nao conseguir — I can't drive. He can't see.",
      "SPEAK = falar | SEE = ver | WATCH = assistir | DANCE = dancar"
    ],
    classwork: [
      {
        title: "Parte 2 — Traducao",
        instruction: "Use as palavras da sua lista para traduzir as frases abaixo.",
        items: [
          { q: "Voce tem uma caneca?",                          a: "Do you have a mug?" },
          { q: "A cerveja esta aqui?",                          a: "Is the beer here?" },
          { q: "Ele gosta de salada, mas eu quero cerveja.",    a: "He likes salad but I want beer." },
          { q: "Como esta a relacao?",                          a: "How is the relationship?" },
          { q: "Hoje e um otimo dia.",                          a: "Today is a great day." }
        ]
      },
      {
        title: "Parte 3 — Transformacao",
        instruction: "Transforme a frase positiva em uma pergunta.",
        items: [
          { q: "That pencil is great.",       a: "Is that pencil great?" },
          { q: "Your cousin drives a car.",   a: "Does your cousin drive a car?" },
          { q: "This hurts today.",           a: "Does this hurt today?" }
        ]
      },
      {
        title: "Parte 4 — Complete as frases",
        instruction: "Complete as frases usando as palavras logicas da lista.",
        items: [
          { q: "I drink ___ before the weekend, but I drink ___ after.", a: "I drink coke before the weekend, but I drink water after." },
          { q: "___ you know about that relationship?",                  a: "Do you know about that relationship?" },
          { q: "It is ___.",                                             a: "It is great!" }
        ]
      }
    ],
    vocabulary: [
      { word: "can",   translation: "poder / conseguir",        phonetic: "/kan/" },
      { word: "can't", translation: "nao poder / nao conseguir", phonetic: "/kant/" },
      { word: "speak", translation: "falar",                    phonetic: "/spik/" },
      { word: "see",   translation: "ver",                      phonetic: "/si/" },
      { word: "watch", translation: "assistir",                 phonetic: "/wotch/" },
      { word: "drive", translation: "dirigir",                  phonetic: "/draiv/" },
      { word: "dance", translation: "dancar",                   phonetic: "/dans/" }
    ]
  }
];

// ============================================================
// CLASSWORK ANSWERS — armazenado separado para evitar bugs
// ============================================================
var CW_ANSWERS = {};

// ============================================================
// DAILY CONTENT FUNCTIONS
// ============================================================

function openDaily() {
  var overlay = document.getElementById("dailyOverlay");
  var body    = document.getElementById("dailyBody");
  var dateEl  = document.getElementById("dailyDate");
  dateEl.textContent = DAILY.date;

  if (PLAN !== "Fluency") {
    body.innerHTML = '<div class="daily-locked">'
      + '<span class="daily-lock-icon">🔒</span>'
      + '<h3>Conteudo Fluency</h3>'
      + '<p>O Daily Content e exclusivo para alunas do plano <strong>Fluency</strong>.</p>'
      + '<p>Fale com a Yas para fazer o upgrade! ✦</p>'
      + '</div>';
  } else {
    var html = '<div class="daily-text-wrap">'
      + '<h3 class="res-title">Texto de hoje</h3>'
      + '<div class="daily-text">' + DAILY.text + '</div>'
      + '</div>'
      + '<div class="daily-questions-wrap">'
      + '<h3 class="res-title" style="margin-top:24px">Exercicios</h3>'
      + '<div class="daily-questions">';

    DAILY.questions.forEach(function(q, qi) {
      html += '<div class="daily-q" id="q' + qi + '">'
        + '<p class="daily-q-text"><strong>' + (qi+1) + '.</strong> ' + q.question + '</p>'
        + '<div class="daily-options">';
      q.options.forEach(function(opt) {
        html += '<button class="daily-opt" id="q' + qi + '-' + opt.letter + '"'
          + ' onclick="checkAnswer(' + qi + ',\'' + opt.letter + '\',\'' + q.answer + '\')">'
          + '<span class="opt-letter">' + opt.letter + '</span>'
          + '<span class="opt-text">' + opt.text + '</span>'
          + '</button>';
      });
      html += '</div><p class="daily-feedback" id="feedback' + qi + '"></p></div>';
    });

    html += '</div><button class="daily-reset-btn" onclick="openDaily()">Recomecar ↺</button></div>';
    body.innerHTML = html;
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function checkAnswer(qi, chosen, correct) {
  var opts = document.querySelectorAll("#q" + qi + " .daily-opt");
  opts.forEach(function(btn) { btn.disabled = true; });
  var chosenBtn  = document.getElementById("q" + qi + "-" + chosen);
  var correctBtn = document.getElementById("q" + qi + "-" + correct);
  var feedback   = document.getElementById("feedback" + qi);
  if (chosen === correct) {
    chosenBtn.classList.add("correct");
    feedback.textContent = "✦ Correct!";
    feedback.className = "daily-feedback feedback-correct";
  } else {
    chosenBtn.classList.add("wrong");
    correctBtn.classList.add("correct");
    feedback.textContent = "The correct answer is " + correct.toUpperCase() + ".";
    feedback.className = "daily-feedback feedback-wrong";
  }
}

function closeDaily() {
  document.getElementById("dailyOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("dailyOverlay").addEventListener("click", function(e) {
  if (e.target === this) closeDaily();
});

// ============================================================
// MAIN FUNCTIONS
// ============================================================

function speakWord(word, btn) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(word);
  u.lang = "en-US";
  u.rate = 0.85;
  if (btn) {
    btn.classList.add("speaking");
    u.onend  = function() { btn.classList.remove("speaking"); };
    u.onerror = function() { btn.classList.remove("speaking"); };
  }
  window.speechSynthesis.speak(u);
}

function hasContent(arr) {
  return Array.isArray(arr) && arr.filter(function(i) { return i && i.label; }).length > 0;
}

function renderGrid() {
  var grid = document.getElementById("weeksGrid");
  var html = "";
  WEEKS.forEach(function(w, i) {
    var icons = "";
    if (hasContent(w.pdfs))        icons += '<span class="ricon ricon-pdf"      title="PDF">P</span>';
    if (hasContent(w.audios))      icons += '<span class="ricon ricon-audio"    title="Audio">A</span>';
    if (hasContent(w.exercises))   icons += '<span class="ricon ricon-exercise" title="Exercicios">E</span>';
    if (hasContent(w.links))       icons += '<span class="ricon ricon-link"     title="Links">L</span>';
    if (hasContent(w.videos))      icons += '<span class="ricon ricon-video"    title="Videos">V</span>';
    if (w.vocabulary && w.vocabulary.length) icons += '<span class="ricon ricon-vocab" title="Vocabulario">W</span>';

    html += '<article class="week-card" onclick="openModal(' + i + ')" tabindex="0">'
      + '<div class="card-head">'
      + '<p class="card-number">Semana ' + w.number + '</p>'
      + '<h2 class="card-title">' + w.title + '</h2>'
      + '</div>'
      + '<div class="card-body">'
      + '<div class="card-icons">' + icons + '</div>'
      + '<div class="card-cta"><span>Ver material</span><span class="card-cta-arrow">→</span></div>'
      + '</div>'
      + '</article>';
  });
  grid.innerHTML = html;
}

function openModal(index) {
  var w = WEEKS[index];
  document.getElementById("modalWeekLabel").textContent = "Semana " + w.number;
  document.getElementById("modalTitle").textContent     = w.title;
  document.getElementById("modalFocus").textContent     = w.focus || "";
  document.getElementById("modalBody").innerHTML =
    renderPdfs(w.pdfs) +
    renderExercises(w.exercises) +
    renderAudios(w.audios) +
    renderLinks(w.links) +
    renderVideos(w.videos) +
    renderNotes(w.notes) +
    renderClasswork(w.classwork) +
    renderVocabulary(w.vocabulary) +
    '<div class="yas-tip"><strong>Dica da YV</strong>Pratique todos os dias um pouco. Consistencia e o que te leva a fluencia. ✦</div>';
  document.getElementById("overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  document.getElementById("overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function renderPdfs(pdfs) {
  var items = (pdfs || []).filter(function(p) { return p.label; });
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">PDFs</h3><div class="res-list">';
  items.forEach(function(p) {
    html += '<div class="res-item"><span class="res-item-label">' + p.label + '</span>'
      + '<div class="res-actions">'
      + '<a href="' + p.url + '" target="_blank" class="btn-open">Abrir ↗</a>'
      + '<a href="' + p.url + '" download class="btn-download">Baixar</a>'
      + '</div></div>';
  });
  return html + '</div></div>';
}

function renderExercises(exercises) {
  var items = (exercises || []).filter(Boolean);
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Exercicios</h3><ul class="exercise-list">';
  items.forEach(function(e) { html += '<li>' + e + '</li>'; });
  return html + '</ul></div>';
}

function renderAudios(audios) {
  var items = (audios || []).filter(function(a) { return a.label; });
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Audios</h3><div class="res-list">';
  items.forEach(function(a) {
    if (a.url) {
      html += '<div class="res-item audio-item"><span class="res-item-label">' + a.label + '</span>'
        + '<audio controls preload="none"><source src="' + a.url + '"></audio></div>';
    } else {
      html += '<div class="res-item"><span class="res-item-label">' + a.label + '</span>'
        + '<span class="via-whatsapp">via WhatsApp</span></div>';
    }
  });
  return html + '</div></div>';
}

function renderLinks(links) {
  var items = (links || []).filter(function(l) { return l.label; });
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Links</h3><div class="res-list">';
  items.forEach(function(l) {
    html += '<div class="res-item"><span class="res-item-label">' + l.label + '</span>'
      + '<div class="res-actions"><a href="' + l.url + '" target="_blank" class="btn-open">Abrir ↗</a></div></div>';
  });
  return html + '</div></div>';
}

function renderVideos(videos) {
  var items = (videos || []).filter(function(v) { return v.label; });
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Videos</h3><div class="res-list">';
  items.forEach(function(v) {
    html += '<div class="res-item"><span class="res-item-label">' + v.label + '</span>'
      + '<div class="res-actions"><a href="' + v.url + '" target="_blank" class="btn-open">Assistir ↗</a></div></div>';
  });
  return html + '</div></div>';
}

function renderNotes(notes) {
  var items = (notes || []).filter(Boolean);
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Notas da Aula</h3><ul class="notes-list">';
  items.forEach(function(n) { html += '<li>' + n + '</li>'; });
  return html + '</ul></div>';
}

function renderClasswork(classwork) {
  var sections = (classwork || []).filter(function(s) { return s.title; });
  if (!sections.length) return "";
  var html = "";
  sections.forEach(function(section, si) {
    html += '<div class="resource-section">'
      + '<h3 class="res-title">' + section.title + '</h3>'
      + '<p class="classwork-instruction">' + section.instruction + '</p>'
      + '<div class="classwork-list">';
    section.items.forEach(function(item, ii) {
      var key = "cw_" + si + "_" + ii;
      CW_ANSWERS[key] = item.a;
      html += '<div class="classwork-item">'
        + '<p class="classwork-q"><strong>' + (ii+1) + '.</strong> ' + item.q + '</p>'
        + '<button class="classwork-reveal-btn" onclick="revealAnswer(this,\'' + key + '\')">Ver resposta</button>'
        + '<p class="classwork-answer" id="' + key + '" style="display:none"></p>'
        + '</div>';
    });
    html += '</div></div>';
  });
  return html;
}

function revealAnswer(btn, key) {
  var el = document.getElementById(key);
  if (el) {
    el.textContent = CW_ANSWERS[key] || "";
    el.style.display = "block";
  }
  btn.style.display = "none";
}

function renderVocabulary(vocabulary) {
  var items = (vocabulary || []).filter(function(v) { return v.word; });
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Vocabulario</h3><div class="vocab-grid">';
  items.forEach(function(v) {
    var safeWord = v.word.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
    html += '<div class="vocab-card" tabindex="0" onclick="this.classList.toggle(\'flipped\')">'
      + '<div class="vocab-front">'
      + '<button class="vocab-speak-btn" onclick="event.stopPropagation();speakWord(\'' + safeWord + '\',this)" title="Ouvir">🔊</button>'
      + '<div class="vocab-front-inner">'
      + '<span class="vocab-word">' + v.word + '</span>'
      + (v.phonetic ? '<span class="vocab-phonetic">' + v.phonetic + '</span>' : '')
      + '</div>'
      + '<span class="vocab-hint">toque para ver</span>'
      + '</div>'
      + '<div class="vocab-back"><span class="vocab-translation">' + v.translation + '</span></div>'
      + '</div>';
  });
  return html + '</div></div>';
}

function buildGlossaryHTML() {
  var all = [];
  WEEKS.forEach(function(w) {
    (w.vocabulary || []).filter(function(v) { return v.word; }).forEach(function(v) {
      all.push({ word: v.word, translation: v.translation, phonetic: v.phonetic, week: w.number });
    });
  });
  if (!all.length) return '<p class="glossary-empty">O glossario vai aparecer aqui conforme as semanas forem avancando. ✦</p>';

  // Store words in a lookup to avoid inline quote issues
  window._glossWords = window._glossWords || [];
  window._glossWords = [];
  var html = "";
  all.forEach(function(v, i) {
    window._glossWords[i] = v.word;
    html += '<div class="glossary-row">'
      + '<span class="glos-word">' + v.word + '</span>'
      + '<span class="glos-trans">' + v.translation
      + (v.phonetic ? ' <span class="glos-phonetic">' + v.phonetic + '</span>' : '')
      + '</span>'
      + '<button class="glos-speak" onclick="speakGloss(' + i + ',this)" title="Ouvir">🔊</button>'
      + '<span class="glos-week-badge">Sem. ' + v.week + '</span>'
      + '</div>';
  });
  return html;
}

function speakGloss(i, btn) {
  if (window._glossWords && window._glossWords[i]) {
    speakWord(window._glossWords[i], btn);
  }
}

var glossaryOpen = false;

function toggleGlossary() {
  var section = document.getElementById("glossarySection");
  var cta     = document.getElementById("glossaryBtnCta");
  if (!section) return;
  glossaryOpen = !glossaryOpen;
  if (glossaryOpen) {
    if (!section.innerHTML.trim()) section.innerHTML = buildGlossaryHTML();
    section.style.display = "block";
    if (cta) cta.textContent = "Fechar ↑";
    setTimeout(function() { section.scrollIntoView({ behavior: "smooth", block: "start" }); }, 80);
  } else {
    section.style.display = "none";
    if (cta) cta.textContent = "Ver palavras →";
  }
}

function renderGlossary() {
  // glossary now loads on demand via toggleGlossary
}
renderGrid();
renderGlossary();
