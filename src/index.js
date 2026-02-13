
/* ══════════════════════════════════════════════
   STATE
══════════════════════════════════════════════ */
let HER_NAME = 'my love';
let HIS_NAME = 'Someone who loves you';
let PLANS    = [];
let LANG     = 'en';
let noIndex  = 0, noClickCount = 0;
let musicPlaying = false;
let currentScene = 's-setup';

/* ══════════════════════════════════════════════
   I18N
══════════════════════════════════════════════ */
const T = {
  en: {
    langGreeting : n => `Welcome, ${n} 💕`,
    langTitle    : 'A message is waiting for you...',
    envTitle     : n => `${n}, someone sent you something very special 💌`,
    envHint      : '✨ Click to open ✨',
    qGreeting    : n => `My dearest,`,
    question     : n => `Will you be my Valentine, ${n}? 🌹`,
    yes          : '💕 Yes!',
    no           : 'No 😔',
    noTexts      : n => [
      `Will you be my Valentine, ${n}? 🌹`,
      `Are you sure? My heart is waiting... 💔`,
      `Please don't break my heart! 🥺 Reconsider?`,
      `Every rose in the world agrees — say yes! 🌹🌹🌹`,
      `Ok fine... but I'll keep asking forever 😅💕`,
    ],
    noLabels     : ['No 😔', 'Still no? 😒', 'Absolutely not 😤', 'Nope 🙅‍♀️', '...really? 💔'],
    sig          : him => `${him} made this with all her love ❤️`,
    yesMsg       : n => `${n} said YES! 🥰`,
    yesSub       : 'You\'ve made my heart the happiest in the world!',
    yesNext      : 'See what I have planned... 🗓️',
    plansTitle   : n => `Our Valentine's Day Together, ${n} 💝`,
    plansSub     : 'Everything I have planned for us today...',
    plansNext    : 'Read my love note to you 💌',
    poemTitle    : 'A little poem, just for you 🌷',
    poemLines_en : (her, him) => [
      `Roses bloom, butterflies dance,`,
      `In every heartbeat, you're my romance.`,
      `On this day of love, know this is true —`,
      `Every moment is better because of you.`,
      `So take my hand, let's make today`,
      `The most beautiful Valentine's Day.`,
    ],
    poemLines_fr : (her, him) => [ // same poem in EN scene (fr version below)
      `Roses bloom, butterflies dance,`,
      `In every heartbeat, you're my romance.`,
      `On this day of love, know this is true —`,
      `Every moment is better because of you.`,
    ],
    poemSig      : him => `— With all my heart, ${him} 💕`,
    poemNext     : 'One last surprise 💫',
    finaleTitle  : n => `Happy Valentine's Day, ${n}! 💖`,
    finaleSub    : him => `${him} loves you more than words can say 🌹`,
    finaleSig    : him => `${him} crafted this page with every bit of her love for you. ❤️`,
  },
  fr: {
    langGreeting : n => `Bienvenue, ${n} 💕`,
    langTitle    : 'Un message t\'attend...',
    envTitle     : n => `${n}, quelqu'un t'a envoyé quelque chose de très spécial 💌`,
    envHint      : '✨ Clique pour ouvrir ✨',
    qGreeting    : n => `Mon chérie,`,
    question     : n => `Veux-tu être mon Valentin, ${n} ? 🌹`,
    yes          : '💕 Oui !',
    no           : 'Non 😔',
    noTexts      : n => [
      `Veux-tu être mon Valentin, ${n} ? 🌹`,
      `Tu es sûr ? Mon cœur t'attend... 💔`,
      `S'il te plaît, ne brise pas mon cœur ! 🥺`,
      `Toutes les roses du monde disent oui ! 🌹🌹🌹`,
      `D'accord... mais je te le demanderai pour toujours 😅💕`,
    ],
    noLabels     : ['Non 😔', 'Toujours non ? 😒', 'Absolument pas 😤', 'Non merci 🙅‍♀️', '...vraiment ? 💔'],
    sig          : him => `${him} a créée ceci avec tout son amour ❤️`,
    yesMsg       : n => `${n} a dit OUI ! 🥰`,
    yesSub       : 'Tu as rendu mon cœur le plus heureux du monde !',
    yesNext      : 'Voir ce que j\'ai prévu... 🗓️',
    plansTitle   : n => `Notre Saint-Valentin Ensemble, ${n} 💝`,
    plansSub     : 'Tout ce que j\'ai prévu pour nous aujourd\'hui...',
    plansNext    : 'Lire ma lettre d\'amour 💌',
    poemTitle    : 'Un petit poème, rien que pour toi 🌷',
    poemLines_en : (her, him) => [
      `Les roses fleurissent, les papillons dansent,`,
      `Dans chaque battement, tu es mon roman.`,
      `En ce jour d'amour, sache que c'est vrai —`,
      `Chaque instant est plus beau grâce à toi.`,
      `Alors prends ma main, faisons de ce jour`,
      `Le plus beau des jours de toujours.`,
    ],
    poemLines_fr : (her, him) => [
      `Les roses fleurissent, les papillons dansent,`,
      `Dans chaque battement, tu es mon roman.`,
      `En ce jour d'amour, sache que c'est vrai —`,
      `Chaque instant est plus beau grâce à toi.`,
    ],
    poemSig      : him => `— De tout mon cœur, ${him} 💕`,
    poemNext     : 'Une dernière surprise 💫',
    finaleTitle  : n => `Joyeuse Saint-Valentin, ${n} ! 💖`,
    finaleSub    : him => `${him} t'aime plus que les mots ne peuvent le dire 🌹`,
    finaleSig    : him => `${him} a créée cette page avec tout son amour pour toi. ❤️`,
  },
  jp: {
    langGreeting : n => `ようこそ, ${n} 💕`,
    langTitle    : 'メッセージが届いています...',
    envTitle     : n => `${n}, 誰かがあなたにとても特別なものを送りました 💌`,
    envHint      : '✨ クリックして開く ✨',
    qGreeting    : n => `私の最愛の人,`,
    question     : n => `バレンタインになってくれますか, ${n}? 🌹`,
    yes          : '💕 はい!',
    no           : 'いいえ 😔',
    noTexts      : n => [
      `私のバレンタインになってくれる, ${n}? 🌹`,
      `本気ですか？私の心は待っています... 💔`,
      `お願い、私の心を壊さないで！🥺 考え直してくれない？`,
      `世界のすべてのバラが同意している — 「はい」と言って! 🌹🌹🌹`,
      `わかった、いいよ…でもずっと聞き続けるから 😅💕`,
    ],
    noLabels     : ['いいえ 😔', 'まだなの？ 😒', '絶対に違う 😤', 'いいえ 🙅‍♀️', '...本当に? 💔'],
    sig          : him => `${him} 彼のすべての愛を込めてこれを作った ❤️`,
    yesMsg       : n => `${n} はいと言った! 🥰`,
    yesSub       : 'あなたのおかげで、私の心は世界で一番幸せです!',
    yesNext      : '私が計画したことを見て... 🗓️',
    plansTitle   : n => `私たちのバレンタインデー, ${n} 💝`,
    plansSub     : '今日私たちのために計画したすべてのこと...',
    plansNext    : 'あなたへのラブレターを読んで 💌',
    poemTitle    : 'ちょっとした詩を、あなたのために 🌷',
    poemLines_en : (her, him) => [
      `バラが咲き、蝶が舞う,`,
      `どの心拍にも、あなたは私のロマンスです。`,
      `愛の日に、このことが真実であると知っていてください —`,
      `あなたのおかげで、どの瞬間もより良くなります。`,
      `だから手を取って、今日を作ろう`,
      `最も美しいバレンタインデー。`,
    ],
    poemLines_fr : (her, him) => [ // same poem in EN scene (fr version below)
      `バラが咲き、蝶が舞う,`,
      `どの心拍にも、あなたは私のロマンスです。`,
      `愛の日に、このことが真実であると知っていてください —`,
      `あなたのおかげで、どの瞬間もより良くなります。`,
    ],
    poemSig      : him => `— 心から, ${him} 💕`,
    poemNext     : '最後の驚き 💫',
    finaleTitle  : n => `ハッピーバレンタインデー, ${n}! 💖`,
    finaleSub    : him => `${him} 言葉では言い表せないほどあなたを愛している 🌹`,
    finaleSig    : him => `${him} 彼はあなたへの愛のすべてを込めてこのページを作りました。 ❤️`,
  },
  cn: {
    langGreeting : n => `欢迎, ${n} 💕`,
    langTitle    : '有一条消息在等你...',
    envTitle     : n => `${n}, 有人给你寄来了非常特别的东西 💌`,
    envHint      : '✨ 点击打开 ✨',
    qGreeting    : n => `我最亲爱的,`,
    question     : n => `你愿意做我的情人节吗, ${n}? 🌹`,
    yes          : '💕 愿意!',
    no           : '不愿意 😔',
    noTexts      : n => [
      `你愿意做我的情人节吗, ${n}? 🌹`,
      `你确定吗？我的心在等待... 💔`,
      `请不要伤我的心！🥺 能 重新考虑 一下吗？?`,
      `世界上的每一朵玫瑰都同意——说“是”! 🌹🌹🌹`,
      `好吧...但我会一直问下去 😅💕`,
    ],
    noLabels     : ['没有 😔', '还是没有吗? 😒', '绝对不 😤', '不 🙅‍♀️', '...真的吗? 💔'],
    sig          : him => `${him} 怀着满满的爱意做了这个 ❤️`,
    yesMsg       : n => `${n} 说了是! 🥰`,
    yesSub       : '你让我的心成为世界上最幸福的!',
    yesNext      : '看看我计划了什么... 🗓️',
    plansTitle   : n => `我们的情人节一起, ${n} 💝`,
    plansSub     : '我今天为我们安排的所有事情...',
    plansNext    : '读我写给你的情书 💌',
    poemTitle    : '一首小诗，只给你 🌷',
    poemLines_en : (her, him) => [
      `玫瑰盛开，蝴蝶起舞,`,
      `在每一次心跳中，你都是我的浪漫。`,
      `在这个充满爱的日子里，请记住这是真的 —`,
      `因为有你，每一刻都更美好。`,
      `所以牵起我的手，让我们创造今天`,
      `最美的情人节。`,
    ],
    poemLines_fr : (her, him) => [ // same poem in EN scene (fr version below)
      `玫瑰盛开，蝴蝶起舞,`,
      `在每一次心跳中，你都是我的浪漫。`,
      `在这个充满爱的日子里，请记住这是真的 -`,
      `因为有你，每一刻都更美好。`,
    ],
    poemSig      : him => `— 全心全意, ${him} 💕`,
    poemNext     : '最后一个惊喜 💫',
    finaleTitle  : n => `情人节快乐, ${n}! 💖`,
    finaleSub    : him => `${him} 爱你胜过言语所能表达的 🌹`,
    finaleSig    : him => `${him} 倾注了他对你所有的爱心而制作了这个页面。 ❤️`,
  }
};

/* ══════════════════════════════════════════════
   URL PARAMS
══════════════════════════════════════════════ */
function parseParams() {
  const p = new URLSearchParams(window.location.search);
  if (p.has('her')) HER_NAME = decodeURIComponent(p.get('her'));
  if (p.has('him')) HIS_NAME = decodeURIComponent(p.get('him'));
  if (p.has('plans')) {
    try { PLANS = JSON.parse(decodeURIComponent(p.get('plans'))); } catch(e){}
  }
  // If params present, skip setup → go to lang
  if (p.has('her') && p.has('him')) {
    hideSetup();
  }
}

function hideSetup() {
  const s = document.getElementById('s-setup');
  s.classList.remove('active');
  setTimeout(() => { s.style.display = 'none'; }, 800);
  setTimeout(() => { showScene('s-lang'); }, 300);
}

/* ══════════════════════════════════════════════
   SETUP SCENE
══════════════════════════════════════════════ */
function addPlan() {
  const container = document.getElementById('plans-inputs');
  const div = document.createElement('div');
  div.className = 'plan-item';
  div.innerHTML = `<input class="love-input" type="text" placeholder="Add another plan... 💕" maxlength="80"/>
    <button class="plan-remove" onclick="removePlan(this)">✕</button>`;
  container.appendChild(div);
  div.querySelector('input').focus();
}
function removePlan(btn) {
  const items = document.querySelectorAll('.plan-item');
  if (items.length > 1) btn.parentElement.remove();
}

function generateLink() {
  const her = document.getElementById('inp-her').value.trim();
  const him = document.getElementById('inp-him').value.trim();
  if (!her || !him) {
    document.getElementById('inp-her').style.borderColor = her ? '' : '#e74c3c';
    document.getElementById('inp-him').style.borderColor = him ? '' : '#e74c3c';
    setTimeout(() => {
      document.getElementById('inp-her').style.borderColor = '';
      document.getElementById('inp-him').style.borderColor = '';
    }, 1800);
    return;
  }
  const plans = [...document.querySelectorAll('#plans-inputs .plan-item input')]
    .map(i => i.value.trim()).filter(v => v.length > 0);
  if (plans.length === 0) plans.push('A wonderful day just for us 💕');

  const base = window.location.href.split('?')[0];
  const url = `${base}?her=${encodeURIComponent(her)}&him=${encodeURIComponent(him)}&plans=${encodeURIComponent(JSON.stringify(plans))}`;

  const lb = document.getElementById('link-box');
  const la = document.getElementById('link-display');
  la.href = url;
  la.textContent = url;
  lb.style.display = 'block';
  lb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyLink() {
  const url = document.getElementById('link-display').href;
  navigator.clipboard.writeText(url).then(() => {
    const s = document.getElementById('copy-success');
    s.style.display = 'block';
    setTimeout(() => s.style.display = 'none', 2500);
  }).catch(() => {
    // fallback
    const el = document.createElement('textarea');
    el.value = url;
    document.body.appendChild(el);
    el.select(); document.execCommand('copy');
    document.body.removeChild(el);
  });
}

/* ══════════════════════════════════════════════
   SCENE MANAGEMENT
══════════════════════════════════════════════ */
const SCENE_ORDER = ['s-lang','s-envelope','s-question','s-yes','s-plans','s-poem','s-finale'];

function showScene(id) {
  // Hide all
  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  // Show target
  document.getElementById(id).classList.add('active');
  currentScene = id;
  updateDots(id);
  buildBokeh(id);
}

function goToScene(id) {
  showScene(id);
  if (id === 's-plans') buildPlansScene();
  if (id === 's-poem')  buildPoemScene();
  if (id === 's-finale') buildFinaleScene();
}

function updateDots(sceneId) {
  const idx = SCENE_ORDER.indexOf(sceneId);
  const dots = document.getElementById('progress-dots');
  if (idx < 1) { dots.classList.remove('show'); return; }
  dots.classList.add('show');
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i < idx);
  });
}

/* ══════════════════════════════════════════════
   LANGUAGE CHOICE
══════════════════════════════════════════════ */
function chooseLang(lang) {
  LANG = lang;
  document.getElementById('lang-greeting').textContent = T[lang].langGreeting(HER_NAME);
  showScene('s-envelope');
  applyLangToEnvelope();
  buildFloatHearts('float-env');
}

function applyLangToEnvelope() {
  document.getElementById('env-title').textContent = T[LANG].envTitle(HER_NAME);
  document.getElementById('env-hint').textContent  = T[LANG].envHint;
}

/* ══════════════════════════════════════════════
   ENVELOPE
══════════════════════════════════════════════ */
function openEnvelope() {
  const env = document.getElementById('envelope');
  env.classList.add('opening');
  env.style.pointerEvents = 'none';
  setTimeout(() => {
    showScene('s-question');
    buildQuestionScene();
    buildBokeh('s-question');
    startConfetti(30);
  }, 900);
}

/* ══════════════════════════════════════════════
   QUESTION SCENE
══════════════════════════════════════════════ */
function buildQuestionScene() {
  const t = T[LANG];
  document.getElementById('q-name-span').textContent = HER_NAME;
  document.getElementById('q-text').textContent = t.question(HER_NAME);
  document.getElementById('btn-yes').textContent = t.yes;
  document.getElementById('btn-no').textContent  = t.no;
  document.getElementById('q-sig').textContent   = t.sig(HIS_NAME);
  noIndex = 0; noClickCount = 0;
}

function setQuestion(txt) {
  const el = document.getElementById('q-text');
  el.classList.add('fade');
  setTimeout(() => { el.textContent = txt; el.classList.remove('fade'); }, 500);
}

function noClicked() {
  noClickCount++;
  const t = T[LANG];
  const texts  = t.noTexts(HER_NAME);
  const labels = t.noLabels;

  const scale = Math.min(1 + noClickCount * 0.055, 1.5);
  const btn   = document.getElementById('btn-no');
  btn.style.transform = `scale(${scale})`;

  noIndex = noIndex === 0 ? 1 : (noIndex >= texts.length - 1 ? 1 : noIndex + 1);
  setQuestion(texts[noIndex]);
  btn.textContent = labels[(noClickCount - 1) % labels.length];

  if (noClickCount >= 3) {
    btn.style.background = 'linear-gradient(135deg, #c0392b, #922b21)';
    btn.style.boxShadow  = '0 6px 20px rgba(192,57,43,.5)';
  }
}

function yesClicked() {
  document.getElementById('btn-row').classList.add('gone');
  const t = T[LANG];
  document.getElementById('q-text').textContent = LANG === 'en'
    ? `You've made my heart the happiest! 💖✨` : LANG === 'fr'
    ? `Tu as rendu mon cœur le plus heureux ! 💖✨` : LANG === 'jp'
    ? `あなたは私の心をもっと幸せにしてくれた ! 💖✨` : `你让我心中最快乐 ! 💖✨`;
  startConfetti(160);
  setTimeout(() => {
    showScene('s-yes');
    buildYesScene();
    bigConfetti();
  }, 1200);
}

/* ══════════════════════════════════════════════
   YES BURST SCENE
══════════════════════════════════════════════ */
function buildYesScene() {
  const t = T[LANG];
  document.getElementById('yes-msg').textContent  = t.yesMsg(HER_NAME);
  document.getElementById('yes-sub').textContent  = t.yesSub;
  document.getElementById('yes-next').textContent = t.yesNext;
  buildBokeh('s-yes');
}

/* ══════════════════════════════════════════════
   PLANS SCENE
══════════════════════════════════════════════ */
const PLAN_EMOJIS = ['🌹','💕','🍽️','🎭','🌙','💃','🎶','🌸','🥂','🌟','💝','🎁','✨','🛁','🌅'];

function buildPlansScene() {
  const t = T[LANG];
  document.getElementById('plans-title').textContent = t.plansTitle(HER_NAME);
  document.getElementById('plans-sub').textContent   = t.plansSub;
  document.getElementById('plans-next').textContent  = t.plansNext;

  const list = document.getElementById('plan-list');
  list.innerHTML = '';

  const items = PLANS.length > 0 ? PLANS : [
    LANG === 'en' ? 'Breakfast in bed for you 🥞' : LANG === 'fr' ? 'Petit-déjeuner au lit pour toi 🥞' : LANG === 'jp' ? 'ベッドで朝食をあなたに 🥞' : '为你准备的床上早餐 🥞',
    LANG === 'en' ? 'A romantic walk in the park 🌸' : LANG === 'fr' ? 'Une promenade romantique dans le parc 🌸' : LANG === 'jp' ? '公園でのロマンチックな散歩 🌸' : '在公园里浪漫的散步 🌸',
    LANG === 'en' ? 'Candlelit dinner just for us 🕯️' : LANG === 'fr' ? 'Dîner aux chandelles rien que pour nous 🕯️' : LANG === 'jp' ? '私たちだけのキャンドルライトディナー 🕯️': '只为我们的烛光晚餐 🕯️',
    LANG === 'en' ? 'Stargazing together at midnight 🌟' : LANG === 'fr' ? 'Observer les étoiles ensemble à minuit 🌟' : LANG === 'jp' ? '真夜中に一緒に星を眺める 🌟': '半夜一起观星 🌟',
  ];

  items.forEach((plan, i) => {
    const li = document.createElement('li');
    li.className = 'plan-li';
    li.style.animationDelay = `${i * 0.12}s`;
    li.innerHTML = `
      <div class="plan-num">${i + 1}</div>
      <div class="plan-text">${plan}</div>
    `;
    list.appendChild(li);
  });
  buildBokeh('s-plans');
}

/* ══════════════════════════════════════════════
   POEM SCENE
══════════════════════════════════════════════ */
function buildPoemScene() {
  const t = T[LANG];
  document.getElementById('poem-title').textContent = t.poemTitle;
  document.getElementById('poem-sig').textContent   = t.poemSig(HIS_NAME);
  document.getElementById('poem-next').textContent  = t.poemNext;

  const lines = t.poemLines_fr(HER_NAME, HIS_NAME); // both en/fr have poemLines_fr as the main poem
  const container = document.getElementById('poem-lines');
  container.innerHTML = '';
  lines.forEach((line, i) => {
    const span = document.createElement('span');
    span.textContent = line;
    span.style.animationDelay = `${i * 0.18}s`;
    container.appendChild(span);
  });
  buildBokeh('s-poem');
}

/* ══════════════════════════════════════════════
   FINALE SCENE
══════════════════════════════════════════════ */
function buildFinaleScene() {
  const t = T[LANG];
  document.getElementById('finale-title').textContent = t.finaleTitle(HER_NAME);
  document.getElementById('finale-sub').textContent   = t.finaleSub(HIS_NAME);
  document.getElementById('finale-sig').textContent   = t.finaleSig(HIS_NAME);
  bigConfetti();
  buildEmojiOrbit();
}

function buildEmojiOrbit() {
  const orb = document.getElementById('emoji-orbit');
  orb.innerHTML = '';
  const emojis = ['🌹','💕','💖','🦋','🌸','✨','💝','❤️','🌷','💗'];
  const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  emojis.forEach((e, i) => {
    const el = document.createElement('div');
    el.className = 'eo';
    const r = Math.min(cx, cy) * 0.65;
    el.style.cssText = `
      left:${cx}px;top:${cy}px;
      --r:${r}px;
      font-size:${22 + Math.random()*14}px;
      animation-duration:${8+i*1.5}s;
      animation-delay:${-i*1.3}s;
    `;
    el.textContent = e;
    orb.appendChild(el);
  });
}

/* ══════════════════════════════════════════════
   BOKEH
══════════════════════════════════════════════ */
const bokehBuilt = {};
function buildBokeh(sceneId) {
  if (bokehBuilt[sceneId]) return;
  bokehBuilt[sceneId] = true;
  const id = {
    's-lang':'bokeh-lang','s-envelope':'bokeh-env',
    's-question':'bokeh-q','s-yes':'bokeh-yes',
    's-plans':'bokeh-plans','s-poem':'bokeh-poem'
  }[sceneId];
  if (!id) return;
  const container = document.getElementById(id);
  if (!container) return;
  const colors = ['rgba(192,57,43,','rgba(240,192,64,','rgba(231,76,60,','rgba(255,107,138,'];
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('div');
    el.className = 'bk';
    const sz = 50 + Math.random() * 130;
    const op = (.05 + Math.random() * .1).toFixed(2);
    el.style.cssText = `
      width:${sz}px;height:${sz}px;
      left:${Math.random()*100}%;top:${Math.random()*100}%;
      background:radial-gradient(circle,${colors[i%4]}0.8),transparent);
      opacity:${op};filter:blur(${10+Math.random()*14}px);
      animation-delay:${Math.random()*9}s;animation-duration:${7+Math.random()*7}s;
    `;
    container.appendChild(el);
  }
}

/* ══════════════════════════════════════════════
   FLOAT HEARTS
══════════════════════════════════════════════ */
const floatBuilt = {};
function buildFloatHearts(id) {
  if (floatBuilt[id]) return;
  floatBuilt[id] = true;
  const c = document.getElementById(id);
  if (!c) return;
  const em = ['❤️','🌹','💕','💗','💖','🌺','🌸','🦋','🌷'];
  for (let i = 0; i < 28; i++) {
    const el = document.createElement('span');
    el.className = 'fh';
    el.textContent = em[Math.floor(Math.random()*em.length)];
    el.style.cssText = `left:${Math.random()*100}%;font-size:${12+Math.random()*18}px;
      animation-delay:${Math.random()*7}s;animation-duration:${5+Math.random()*5}s;`;
    c.appendChild(el);
  }
}
function buildSetupHearts() {
  const c = document.getElementById('setup-hearts');
  const em = ['❤️','💕','🌹','💖'];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement('span');
    el.className = 'fh';
    el.textContent = em[Math.floor(Math.random()*em.length)];
    el.style.cssText = `left:${Math.random()*100}%;font-size:${10+Math.random()*16}px;
      animation-delay:${Math.random()*6}s;animation-duration:${5+Math.random()*5}s;`;
    c.appendChild(el);
  }
}

/* ══════════════════════════════════════════════
   PARTICLES — roses & butterflies rain
══════════════════════════════════════════════ */
const pCanvas = document.getElementById('pCanvas');
const pCtx    = pCanvas.getContext('2d');
let particles = [];
let pAnimId;

function resizePC() { pCanvas.width = window.innerWidth; pCanvas.height = window.innerHeight; }
window.addEventListener('resize', resizePC); resizePC();

const P_EMOJIS = ['🌹','🌹','🌹','🦋','🌸','💕','❤️','🌷','🦋','🌺'];

class Petal {
  constructor(init) {
    this.em   = P_EMOJIS[Math.floor(Math.random()*P_EMOJIS.length)];
    this.x    = Math.random() * pCanvas.width;
    this.y    = init ? Math.random()*pCanvas.height - pCanvas.height : -40;
    this.sz   = 15 + Math.random()*18;
    this.vy   = .55 + Math.random()*1.1;
    this.vx   = (Math.random()-.5)*.8;
    this.rot  = Math.random()*360;
    this.rv   = (Math.random()-.5)*2;
    this.a    = .55 + Math.random()*.4;
    this.sw   = Math.random()*Math.PI*2;
    this.ss   = .012 + Math.random()*.02;
    this.sa   = .4 + Math.random()*.9;
  }
  update() {
    this.sw += this.ss; this.x += this.vx + Math.sin(this.sw)*this.sa;
    this.y += this.vy; this.rot += this.rv;
    if (this.y > pCanvas.height + 44) { Object.assign(this, new Petal(false)); }
  }
  draw() {
    pCtx.save(); pCtx.globalAlpha = this.a;
    pCtx.font = `${this.sz}px serif`; pCtx.textAlign = 'center';
    pCtx.translate(this.x, this.y); pCtx.rotate(this.rot*Math.PI/180);
    pCtx.fillText(this.em, 0, 0); pCtx.restore();
  }
}

function startParticles() {
  particles = [];
  for (let i=0;i<55;i++) particles.push(new Petal(true));
  function loop() {
    pCtx.clearRect(0,0,pCanvas.width,pCanvas.height);
    particles.forEach(p=>{p.update();p.draw();});
    pAnimId = requestAnimationFrame(loop);
  }
  loop();
}

/* ══════════════════════════════════════════════
   CONFETTI
══════════════════════════════════════════════ */
const cCanvas = document.getElementById('confCanvas');
const cCtx    = cCanvas.getContext('2d');
function resizeCC() { cCanvas.width=window.innerWidth; cCanvas.height=window.innerHeight; }
window.addEventListener('resize', resizeCC); resizeCC();

let cPieces = [];
const cColors = ['#e74c3c','#f0c040','#27ae60','#ff6b8a','#fff','#c0392b','#f39c12','#fadbd8'];

function startConfetti(count) {
  for (let i=0;i<count;i++) cPieces.push(mkConfetti());
  if (cPieces.length === count) confettiLoop();
}
function bigConfetti() { startConfetti(220); }
function mkConfetti() {
  return {
    x:Math.random()*cCanvas.width, y:Math.random()*cCanvas.height-cCanvas.height,
    w:5+Math.random()*8, h:9+Math.random()*8,
    color:cColors[Math.floor(Math.random()*cColors.length)],
    rot:Math.random()*360, rv:(Math.random()-.5)*6,
    vy:2+Math.random()*3, vx:(Math.random()-.5)*2.5, alpha:1
  };
}
function confettiLoop() {
  cCtx.clearRect(0,0,cCanvas.width,cCanvas.height);
  cPieces = cPieces.filter(p => p.alpha > 0 && p.y < cCanvas.height+20);
  cPieces.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy; p.rot+=p.rv;
    if(p.y>cCanvas.height*.65) p.alpha-=.013;
    cCtx.save(); cCtx.globalAlpha=Math.max(0,p.alpha);
    cCtx.fillStyle=p.color; cCtx.translate(p.x,p.y);
    cCtx.rotate(p.rot*Math.PI/180); cCtx.fillRect(-p.w/2,-p.h/2,p.w,p.h);
    cCtx.restore();
  });
  if (cPieces.length>0) requestAnimationFrame(confettiLoop);
  else cCtx.clearRect(0,0,cCanvas.width,cCanvas.height);
}

/* ══════════════════════════════════════════════
   MUSIC
══════════════════════════════════════════════ */
function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  const note  = document.getElementById('music-note');
  if (musicPlaying) {
    audio.pause(); note.style.opacity='.35'; note.textContent='🔇'; musicPlaying=false;
  } else {
    audio.play().catch(()=>{});
    note.style.opacity='1'; note.textContent='🎵'; musicPlaying=true;
  }
}

/* ══════════════════════════════════════════════
   INIT
══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  parseParams();
  buildSetupHearts();

  // Pre-build float hearts for lang scene
  buildFloatHearts('float-lang');

  // Start particle rain (runs behind all scenes)
  startParticles();

  // Auto-try music on first interaction
  document.addEventListener('click', () => {
    if (!musicPlaying) {
      document.getElementById('bgMusic').play().then(() => {
        musicPlaying = true;
        document.getElementById('music-note').textContent = '🎵';
        document.getElementById('music-note').style.opacity = '1';
      }).catch(()=>{});
    }
  }, { once: true });
});
