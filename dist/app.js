const eventim = 'https://www.eventim.com.br/artist/jao/jao-turne-memorias-postumas-4252486/';
const spLouis = 'https://www.ticketmaster.com.br/event/louis-tomlinson';
const artists = {
  louis: {
    tour: 'How Did We Get Here? · Turnê na América Latina',
    videos: [
      { id: 'Gnf1mpQa1dc', title: 'Faith in the Future no Rio', meta: 'Rio de Janeiro · 2024' },
      { id: '3WmNyeTpRk8', title: 'How Did We Get Here? em Toronto', meta: 'Toronto · 2026' },
      { id: 'zIKlHR1xK-g', title: 'How Did We Get Here? em Nova York', meta: 'Madison Square Garden · 2026' },
      { id: 'XjLv4n3gvZs', title: 'How Did We Get Here? no Red Rocks', meta: 'Morrison, Colorado · 2026' },
      { id: 'Umydyt9PTVo', title: 'World Tour em Austin', meta: 'Austin, Texas · 2022 · 1h42' },
      { id: 'YCa4DBj3XVc', title: 'World Tour em Dallas', meta: 'Dallas, Texas · 2022 · 1h32' },
      { id: 'l46wov2No60', title: 'World Tour em San Juan', meta: 'Porto Rico · 2022 · 1h26' },
      { id: 'Hjhhdd4N4mQ', title: 'Away From Home Festival', meta: 'Londres · 2021 · Show e bastidores' },
      { id: '7EzWl9LWe0M', title: 'Live From London', meta: 'Londres · 2020 · Show transmitido ao vivo' }
    ],
    events: [
      ['2027-03-31', 'Santiago, Chile', 'Santander Arena · 21h', 'https://www.puntoticket.com/louis-tomlinson-live-scl-2027'],
      ['2027-04-02', 'Buenos Aires, Argentina', 'Movistar Arena', 'https://www.movistararena.com.ar/show/e54347b1-38ae-4d8f-952d-e96ffa248bb8'],
      ['2027-04-06', 'São Paulo, Brasil', 'Suhai Music Hall · 21h', spLouis],
      ['2027-04-07', 'São Paulo, Brasil', 'Suhai Music Hall · 21h · Data extra', 'https://www.ticketmaster.com.br/event/vg-louis-tomlinson-07'],
      ['2027-04-10', 'Cidade do México, México', 'Estadio GNP Seguros · 20h', 'https://www.ticketmaster.com.mx/event/140064A6B451C456']
    ]
  },
  jao: {
    tour: 'Turnê Memórias Póstumas e festivais',
    videos: [
      { id: '2C-j8kxGXFc', title: 'Superturnê: A Primeira e a Última Noite', meta: 'São Paulo · Filme-concerto de 2025', official: true },
      { id: 'Wjn8UAhs8-c', title: 'Superturnê em Belém', meta: 'Belém · 2024' },
      { id: 'ziLVopqrFgM', title: 'Turnê Pirata no Vivo Rio', meta: 'Rio de Janeiro · 2022' },
      { id: 'jIzCm-giQwc', title: 'Encerramento da Turnê Pirata no Anhangabaú', meta: 'São Paulo · 2022 · 1h46', label: 'Repost da transmissão' },
      { id: 'aHEni-EhIJk', title: 'Especial de Natal no Qualistage', meta: 'Rio de Janeiro · 2024' },
      { id: 'mtHc_zcIX_o', title: 'Cada Lembrança Nos Trouxe Até Aqui', meta: 'Spotify ao vivo · 2026' }
    ],
    events: [
      ['2026-11-28', 'Recife, Brasil', 'Ginásio Geraldão · 21h', eventim],
      ['2026-12-12', 'Brasília, Brasil', 'Ginásio Nilson Nelson · 21h', eventim],
      ['2027-01-24', 'Salvador, Brasil', 'Arena Festival · Festival de Verão', 'https://www.salvadordabahia.com/eventos/festival-de-verao-salvador-2027-confira-programacao/', 'Detalhes'],
      ['2027-03-19', 'Lisboa, Portugal', 'Sagres Campo Pequeno · 21h', 'https://www.sagrescampopequeno.pt/pt/agenda/jao'],
      ['2027-03-27', 'São Paulo, Brasil', 'Nubank Parque · 20h', eventim]
    ]
  },
  taylor: {
    tour: 'Taylor Swift',
    agenda: { url: 'https://www.taylorswift.com/tour%202/', label: 'Consultar agenda oficial' },
    videos: [
      { id: 'S_EREX_hgPE', title: 'The Eras Tour em Singapura', meta: 'Primeira noite · 2024', label: 'Gravado por fã' },
      { id: '8WEV-_Dav-A', title: 'The Eras Tour em Santa Clara', meta: 'Segunda noite · 2023 · 3h27', label: 'Gravado por fã', embed: false },
      { id: 'h2HhlUk3ldk', title: 'Speak Now Tour', meta: 'Montagem com gravações de várias noites · 1h50', label: 'Montagem de fãs' },
      { id: 'FvVnP8G6ITs', title: 'Tiny Desk Concert', meta: 'Sessão acústica completa · 2019', official: true, label: 'NPR Music' }
    ],
    events: []
  },
  onedirection: {
    tour: 'One Direction',
    agenda: { url: 'https://www.ticketmaster.com/one-direction-tickets/artist/1645840', label: 'Consultar datas na Ticketmaster' },
    videos: [
      { id: '-w8NbwgltDU', title: 'Where We Are Tour em São Paulo', meta: 'Estádio do Morumbi · 2014', label: 'Gravado por fã' },
      { id: 'l4MgoZBox7g', title: 'Where We Are Tour em Buenos Aires', meta: 'Argentina · 2014', label: 'Montagem de fãs' },
      { id: '8p19ogmVYV8', title: 'Where We Are Tour na Suíça', meta: 'Suíça · 2014', label: 'Gravado por fã' },
      { id: 'GAe3p9uwyms', title: 'On The Road Again Tour no Japão', meta: 'Região de Tóquio · 2015', label: 'Gravado por fã' }
    ],
    events: []
  },
  sabrina: {
    tour: 'Sabrina Carpenter',
    agenda: { url: 'https://store.sabrinacarpenter.com/pages/tour', label: 'Consultar agenda oficial' },
    videos: [
      { id: 'kq7qwB_Af18', title: 'Lollapalooza Chile', meta: 'Santiago · 2026 · 1h14', label: 'Gravado por fã' },
      { id: '6Zmbn7vv8Tg', title: 'Short n’ Sweet Tour em Nova York', meta: 'Madison Square Garden · 2024', label: 'Gravado por fã' },
      { id: 'eRS3p-YBxII', title: 'Emails I Can’t Send Tour', meta: 'Montagem da turnê nos EUA · 2h15', label: 'Montagem de fãs' }
    ],
    events: []
  },
  olivia: {
    tour: 'The Unraveled Tour',
    agenda: { url: 'https://store.oliviarodrigo.com/pages/tour', label: 'Ver todas as datas oficiais' },
    videos: [
      { id: 'psKkDdY1Nog', title: 'The Unraveled Tour na Filadélfia', meta: 'Segunda noite · 2026 · 1h35', label: 'Gravado por fã' },
      { id: '3KAH8LXLmxo', title: 'The Unraveled Tour em Hartford', meta: 'Segunda noite · 2026', label: 'Gravado por fã' },
      { id: 'ryMpEG6H2mI', title: 'GUTS World Tour em Curitiba', meta: 'Brasil · 2025', label: 'Postado por fãs' },
      { id: '80l35y5NjBo', title: 'GUTS World Tour em Toronto', meta: 'Canadá · 2024', label: 'Gravado por fã' },
      { id: 'c1yAAybDBcI', title: 'SOUR Tour', meta: '2022 · 1h03', label: 'Postado por fãs' }
    ],
    events: [
      ["2026-11-23", "Nashville, EUA", "Bridgestone Arena", "https://www.ticketmaster.com/olivia-rodrigo-the-unraveled-tour-nashville-tennessee-11-23-2026/event/1B00649D0DA1A0A0"],
      ["2026-11-24", "Nashville, EUA", "Bridgestone Arena", "https://www.ticketmaster.com/olivia-rodrigo-the-unraveled-tour-nashville-tennessee-11-24-2026/event/1B00649D0E9FA33C"],
      ["2026-12-01", "Vancouver, Canadá", "Rogers Arena", "https://www.ticketmaster.ca/olivia-rodrigo-the-unraveled-tour-vancouver-british-columbia-12-01-2026/event/1100649D82B16018"],
      ["2026-12-02", "Vancouver, Canadá", "Rogers Arena", "https://www.ticketmaster.ca/olivia-rodrigo-the-unraveled-tour-vancouver-british-columbia-12-02-2026/event/1100649D82B46026"],
      ["2026-12-07", "Seattle, EUA", "Climate Pledge Arena", "https://www.ticketmaster.com/olivia-rodrigo-the-unraveled-tour-seattle-washington-12-07-2026/event/0F00649DD1062FF0"],
      ["2026-12-08", "Seattle, EUA", "Climate Pledge Arena", "https://www.ticketmaster.com/olivia-rodrigo-the-unraveled-tour-seattle-washington-12-08-2026/event/0F00649DE731624A"]
    ]
  }
};

const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
const get = (id) => document.getElementById(id);
const tabs = [...document.querySelectorAll('[role="tab"]')];
const player = get('player');
const screen = get('screen');
const playerStatus = get('player-status');
const canEmbed = window.top === window && /^https?:$/.test(location.protocol);
let apiLoad;
let activePlayer;
const youtube = (id) => 'https://www.youtube.com/watch?v=' + id;
function artistFromUrl() {
  const key = new URL(location.href).searchParams.get('artista');
  return Object.hasOwn(artists, key) ? key : 'louis';
}

function videoCard(video) {
  const { id, title, meta, official, label = official ? 'Canal oficial' : 'Postado por fãs' } = video;
  const playHere = canEmbed && video.embed !== false;
  const article = document.createElement('article');
  article.className = 'card';
  article.innerHTML = `
    <div class="preview">
      <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" width="480" height="360" loading="lazy" decoding="async">
    </div>
    <div class="details">
      <h3>${title}</h3>
      <p class="meta">${meta}</p>
      <p class="video-source">${label}</p>
      <div class="video-actions">
        <a class="watch" href="${youtube(id)}">${playHere ? 'Assistir' : 'Assistir no YouTube'}</a>
        ${playHere ? `<a class="out" href="${youtube(id)}">YouTube</a>` : ''}
      </div>
    </div>`;
  const watch = article.querySelector('.watch');
  watch.setAttribute('aria-label', `Assistir${playHere ? '' : ' no YouTube'}: ${title}`);
  wirePlayerLink(watch, video);
  const image = article.querySelector('img');
  image.addEventListener('error', () => image.remove(), { once: true });
  article.querySelector('.out')?.setAttribute('aria-label', 'Assistir no YouTube: ' + title);
  return article;
}

function wirePlayerLink(link, video) {
  if (!canEmbed || video.embed === false) return;
  link.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    openPlayer(video);
  });
}

const featurePhoto = get('feature-photo');
const featureVideoId = new URL(get('feature-watch').href).searchParams.get('v');
function useFeatureThumbnail() {
  if (featurePhoto.src.endsWith('/maxresdefault.jpg')) {
    featurePhoto.src = 'https://i.ytimg.com/vi/' + featureVideoId + '/hqdefault.jpg';
  }
}
featurePhoto.addEventListener('error', useFeatureThumbnail, { once: true });
featurePhoto.addEventListener('load', () => {
  if (featurePhoto.naturalWidth <= 120) useFeatureThumbnail();
}, { once: true });
if (featurePhoto.complete && featurePhoto.naturalWidth <= 120) useFeatureThumbnail();

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  apiLoad ??= new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const timer = setTimeout(fail, 10000);

    function fail() {
      clearTimeout(timer);
      delete window.onYouTubeIframeAPIReady;
      script.remove();
      reject(new Error('YouTube player API unavailable'));
    }

    window.onYouTubeIframeAPIReady = () => {
      clearTimeout(timer);
      delete window.onYouTubeIframeAPIReady;
      resolve(window.YT);
    };
    script.src = 'https://www.youtube.com/iframe_api';
    script.addEventListener('error', fail, { once: true });
    document.head.append(script);
  }).catch((error) => {
    apiLoad = undefined;
    throw error;
  });
  return apiLoad;
}

async function openPlayer(video) {
  const session = { player: null, timer: null };
  activePlayer = session;
  get('player-title').textContent = video.title;
  get('player-link').href = youtube(video.id);
  playerStatus.textContent = 'Carregando o player do YouTube…';
  screen.hidden = false;
  player.showModal();
  get('close-player').focus();

  function showFallback(message) {
    if (!player.open || activePlayer !== session) return;
    stopPlayer();
    screen.hidden = true;
    playerStatus.textContent = message;
  }

  try {
    const api = await loadYouTubeApi();
    if (!player.open || activePlayer !== session) return;
    const iframe = document.createElement('iframe');
    const query = new URLSearchParams({
      enablejsapi: '1', origin: location.origin, autoplay: '1', rel: '0', playsinline: '1'
    });
    iframe.title = 'YouTube: ' + video.title;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen; web-share';
    iframe.allowFullscreen = true;
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + video.id + '?' + query;
    screen.replaceChildren(iframe);

    session.timer = setTimeout(() => showFallback('O player demorou para carregar. Abra o show no YouTube.'), 10000);
    session.player = new api.Player(iframe, {
      events: {
        onReady() {
          if (activePlayer !== session) return;
          clearTimeout(session.timer);
          playerStatus.textContent = '';
        },
        onAutoplayBlocked() {
          if (activePlayer === session) playerStatus.textContent = 'Clique em reproduzir no player para iniciar.';
        },
        onError({ data }) {
          const blocked = [101, 150].includes(data);
          showFallback(blocked
            ? 'O canal permite assistir a este show apenas no YouTube.'
            : 'O YouTube não conseguiu reproduzir este vídeo aqui. Confira a disponibilidade no YouTube.');
        }
      }
    });
  } catch {
    showFallback('O player não carregou. Abra o show no YouTube.');
  }
}

function stopPlayer() {
  const session = activePlayer;
  activePlayer = undefined;
  clearTimeout(session?.timer);
  session?.player?.destroy();
  screen.replaceChildren();
}

function eventRow([date, city, venue, url, label = 'Ingressos']) {
  const [year, month, day] = date.split('-');
  const row = document.createElement('div');
  row.className = 'event';
  row.innerHTML = `
    <time datetime="${date}"><strong>${day}</strong><span>${months[Number(month) - 1]}</span><span>${year}</span></time>
    <div><strong>${city}</strong><p>${venue}</p></div>
    <a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  row.querySelector('a').setAttribute('aria-label', label + ' para ' + city + ', ' + day + '/' + month + '/' + year);
  return row;
}

let tabAnimation;
const motionToggle = get('motion-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPreference;
try { motionPreference = localStorage.getItem('entre-palcos-motion'); } catch {}

function updateMotion() {
  const enabled = motionPreference === null || motionPreference === undefined
    ? !reducedMotion.matches
    : motionPreference === 'on';
  document.documentElement.dataset.motion = enabled ? 'on' : 'off';
  motionToggle.setAttribute('aria-pressed', String(enabled));
  motionToggle.textContent = enabled ? 'Animações ligadas' : 'Animações desligadas';
  if (!enabled) tabAnimation?.cancel();
}

motionToggle.hidden = false;
motionToggle.addEventListener('click', () => {
  motionPreference = document.documentElement.dataset.motion === 'on' ? 'off' : 'on';
  try { localStorage.setItem('entre-palcos-motion', motionPreference); } catch {}
  updateMotion();
});
reducedMotion.addEventListener('change', updateMotion);
updateMotion();

function renderArtist(key, animate = false) {
  const artist = artists[key];
  for (const tab of tabs) {
    const active = tab.dataset.artist === key;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  }
  const panel = get('artista');
  panel.setAttribute('aria-labelledby', 'tab-' + key);
  const videos = [...artist.videos].sort((a, b) => Number(Boolean(b.official)) - Number(Boolean(a.official)));
  get('video-count').textContent = videos.length + (videos.length === 1 ? ' vídeo' : ' vídeos');
  get('videos').replaceChildren(...videos.map(videoCard));
  get('tour').textContent = artist.tour;
  const agendaSource = get('tour-source');
  agendaSource.hidden = !artist.agenda;
  if (artist.agenda) {
    const link = agendaSource.querySelector('a');
    link.href = artist.agenda.url;
    link.textContent = artist.agenda.label;
  }

  const today = new Intl.DateTimeFormat('sv-SE', { timeZone: 'America/Sao_Paulo' }).format(new Date());
  const upcoming = artist.events.filter(([date]) => date >= today);
  const dates = get('dates');
  dates.replaceChildren(...upcoming.map(eventRow));
  if (!upcoming.length) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = 'Sem próximas datas confirmadas no acervo.';
    dates.append(empty);
  }

  tabAnimation?.cancel();
  if (animate && document.documentElement.dataset.motion === 'on') {
    tabAnimation = panel.animate(
      [{ opacity: .28, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 330, easing: 'ease-out' }
    );
  }
}

function selectArtist(key) {
  if (artistFromUrl() === key) return;
  const url = new URL(location.href);
  if (key === 'louis') url.searchParams.delete('artista');
  else url.searchParams.set('artista', key);
  history.pushState(null, '', url);
  renderArtist(key, true);
}

for (const [index, tab] of tabs.entries()) {
  tab.addEventListener('click', () => selectArtist(tab.dataset.artist));
  tab.addEventListener('keydown', (event) => {
    const destinations = { ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1 };
    const target = tabs[destinations[event.key]];
    if (!target) return;
    event.preventDefault();
    selectArtist(target.dataset.artist);
    target.focus();
  });
}

get('close-player').addEventListener('click', () => player.close());
player.addEventListener('close', () => { if (!player.open) stopPlayer(); });
window.addEventListener('popstate', () => renderArtist(artistFromUrl(), true));
renderArtist(artistFromUrl());
