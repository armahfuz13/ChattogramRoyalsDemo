/* Chattogram Royals demo site (GitHub Pages ready) */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const DATA = {
  squad: [
    // Batters
    { name: "Adam Rossington", role: "Wicket-keeper Batter", group: "batters", tags: ["WK"], flags: ["✈️"] },
    { name: "Masood Gurbaz", role: "Batter", group: "batters", tags: ["Top-order"] },
    { name: "Mirza Tahir Baig", role: "Batter", group: "batters", tags: ["Batter"], flags: ["✈️"] },
    { name: "Mahfijul Islam", role: "Batter", group: "batters", tags: ["Batter"] },
    { name: "Mahmudul Hasan Joy", role: "Top order Batter", group: "batters", tags: ["Top-order"] },
    { name: "Mohammad Naim", role: "Batter", group: "batters", tags: ["Opener"] },

    // Allrounders
    { name: "Abu Hider", role: "Bowling Allrounder", group: "allrounders", tags: ["AR"] },
    { name: "Aamir Jamal", role: "Allrounder", group: "allrounders", tags: ["AR"], flags: ["✈️"] },
    { name: "Mahedi Hasan", role: "Allrounder (C)", group: "allrounders", tags: ["Captain"], star: true },
    { name: "Salman Hossain Emon", role: "Allrounder", group: "allrounders", tags: ["AR"] },
    { name: "Shuvagata Hom", role: "Batting Allrounder", group: "allrounders", tags: ["AR"] },
    { name: "Asif Ali", role: "Batting Allrounder", group: "allrounders", tags: ["AR"], flags: ["✈️"] },
    { name: "Ziaur Rahman", role: "Allrounder", group: "allrounders", tags: ["AR"] },

    // Bowlers
    { name: "Arafat Sunny", role: "Bowler", group: "bowlers", tags: ["Spin"] },
    { name: "Mukidul Islam", role: "Bowler", group: "bowlers", tags: ["Pace"] },
    { name: "Shoriful Islam", role: "Bowler", group: "bowlers", tags: ["Pace"] },
    { name: "Sumon Khan", role: "Bowler", group: "bowlers", tags: ["Pace"] },
    { name: "Tanvir Islam", role: "Bowler", group: "bowlers", tags: ["Spin"] },
    { name: "Zahiduzzaman", role: "Bowler", group: "bowlers", tags: ["Pace"] },
  ],
  fixtures: [
    { date: "Fri, 26 Dec 2025", venue: "Sylhet", status: "Result • 2nd Match (N)", home: "CHR", away: "NOE", note: "Chattogram won by 65 runs", extra: ["CHR 174/6", "NOE 109", "16.5/20 ov"] },
    { date: "Mon, 29 Dec 2025", venue: "Sylhet", status: "Result • 5th Match", home: "CHR", away: "RAR", note: "Rangpur won by 7 wickets (with 30 balls remaining)", extra: ["CHR 102", "RAR 107/3", "15/20 ov"] },
    { date: "Fri, 02 Jan 2026", venue: "Sylhet", status: "Result • 9th Match", home: "DKA", away: "CHR", note: "Chattogram won by 10 wickets (with 44 balls remaining)", extra: ["DKA 122", "CHR 123/0", "12.4/20 ov"] },
    { date: "Sun, 04 Jan 2026", venue: "Sylhet", status: "Result • 11th Match", home: "SYT", away: "CHR", note: "Chattogram won by 9 wickets (with 24 balls remaining)", extra: ["SYT 126/7", "CHR 130/1", "16/20 ov"] },
    { date: "Mon, 05 Jan 2026", venue: "Sylhet", status: "Upcoming • 14th Match (N)", home: "CHR", away: "RAR", note: "Match yet to begin", time: "6:00 PM" },
    { date: "Wed, 07 Jan 2026", venue: "Sylhet", status: "Upcoming • 16th Match (N)", home: "SYT", away: "CHR", note: "Match yet to begin", time: "6:00 PM" },
    { date: "Fri, 09 Jan 2026", venue: "Sylhet", status: "Upcoming • 19th Match", home: "CHR", away: "RJW", note: "Match yet to begin", time: "2:00 PM" },
    { date: "Thu, 15 Jan 2026", venue: "Mirpur", status: "Upcoming • 25th Match", home: "CHR", away: "NOE", note: "Match yet to begin", time: "1:00 PM" },
    { date: "Fri, 16 Jan 2026", venue: "Mirpur", status: "Upcoming • 28th Match (N)", home: "CHR", away: "RJW", note: "Match yet to begin", time: "7:00 PM" },
    { date: "Sat, 17 Jan 2026", venue: "Mirpur", status: "Upcoming • 30th Match (N)", home: "DKA", away: "CHR", note: "Match yet to begin", time: "6:00 PM" },
  ],
  points: [
    // Real points table (as provided)
    { team: "Chattogram Royals", short: "CHR", p: 4, w: 3, l: 1, nr: 0, pts: 6, nrr: "1.517", highlight: true },
    { team: "Rajshahi Warriors", short: "RJW", p: 4, w: 3, l: 1, nr: 0, pts: 6, nrr: "0.145" },
    { team: "Rangpur Riders", short: "RAR", p: 3, w: 2, l: 1, nr: 0, pts: 4, nrr: "0.885" },
    { team: "Sylhet Titans", short: "SYT", p: 5, w: 2, l: 3, nr: 0, pts: 4, nrr: "-0.452" },
    { team: "Dhaka Capitals", short: "DKA", p: 3, w: 1, l: 2, nr: 0, pts: 2, nrr: "-0.937" },
    { team: "Noakhali Express", short: "NOE", p: 3, w: 0, l: 3, nr: 0, pts: 0, nrr: "-1.393" },
  ],
  logos: {
    CHR: "./Chattogram_Royals_logo.png",
    BPL: "./Bpl-2026-Logo.png",
  }
};

function setYear(){
  const y = new Date().getFullYear();
  const el = $("#year");
  if(el) el.textContent = y;
}

function initTheme(){
  const root = document.documentElement;
  const btn = $("#themeToggle");
  const saved = localStorage.getItem("theme");
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = saved || (prefersLight ? "light" : "dark");
  root.setAttribute("data-theme", theme);

  const renderBtn = () => {
    const t = root.getAttribute("data-theme") || "dark";
    btn.querySelector(".btn__icon").textContent = (t === "dark") ? "🌙" : "☀️";
    btn.querySelector(".btn__text").textContent = (t === "dark") ? "Dark" : "Light";
  };

  renderBtn();

  btn?.addEventListener("click", () => {
    const next = (root.getAttribute("data-theme") === "dark") ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    renderBtn();
  });
}

function initMobileNav(){
  const toggle = $(".nav__toggle");
  const links = $("#navLinks");
  if(!toggle || !links) return;

  const close = () => {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  $$(".nav__link", links).forEach(a => a.addEventListener("click", close));
  document.addEventListener("click", (e) => {
    const inside = links.contains(e.target) || toggle.contains(e.target);
    if(!inside) close();
  });
}

function renderSquad(filter = "all"){
  const grid = $("#squadGrid");
  if(!grid) return;

  const list = DATA.squad.filter(p => filter === "all" ? true : p.group === filter);
  grid.innerHTML = list.map(p => {
    const tags = (p.tags || []).map((t,i) => {
      const cls = (i % 2 === 0) ? "tag" : "tag tag--blue";
      return `<span class="${cls}">${t}</span>`;
    }).join("");
    const flags = (p.flags || []).join(" ");
    return `
      <article class="player" data-group="${p.group}">
        <div class="player__top">
          <div>
            <h3 class="player__name">${p.name} ${flags ? `<span class="muted" title="Overseas player">${flags}</span>` : ""}</h3>
            <p class="player__role">${p.role}</p>
          </div>
          ${p.star ? `<div class="star" title="Featured">★</div>` : ``}
        </div>
        <div class="player__meta">${tags}</div>
      </article>
    `;
  }).join("");
}

function initSquadFilters(){
  const buttons = $$(".filter");
  if(!buttons.length) return;

  buttons.forEach(btn => btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter || "all";
    renderSquad(f);
  }));
}

function renderFixtures(){
  const el = $("#fixturesList");
  if(!el) return;

  const chip = (code) => {
    const nameMap = { CHR: "Chattogram Royals", DKA: "Dhaka Capitals", SYT: "Sylhet Titans", RAR: "Rangpur Riders", NOE: "Noakhali Express", RJW: "Rajshahi Warriors" };
    const isChr = code === "CHR";
    return `
      <span class="teamChip">
        ${isChr ? `<img src="${DATA.logos.CHR}" alt="Chattogram Royals logo">` : `<span aria-hidden="true">🏏</span>`}
        <strong>${nameMap[code] || code}</strong>
      </span>
    `;
  };

  el.innerHTML = DATA.fixtures.map(m => {
    const extras = (m.extra || []).map(x => `<span class="pill">${x}</span>`).join("");
    return `
      <article class="match">
        <div class="match__top">
          <div>
            <div class="match__date">${m.date}</div>
            <div class="muted">${m.venue} • Bangladesh Premier League</div>
          </div>
          <div class="match__status">${m.status}${m.time ? ` • ${m.time}` : ""}</div>
        </div>

        <div class="match__teams">
          ${chip(m.home)}
          <span class="vs">vs</span>
          ${chip(m.away)}
        </div>

        <div class="match__note">${m.note}</div>
        ${extras ? `<div class="kv">${extras}</div>` : ""}
      </article>
    `;
  }).join("");
}

function renderPoints(){
  const body = $("#pointsBody");
  if(!body) return;
  const row = (t) => `
    <tr ${t.highlight ? 'style="outline: 2px solid rgba(255,208,0,.18); outline-offset:-2px;"' : ""}>
      <td>
        <div class="teamCell">
          ${t.short === "CHR" ? `<img src="${DATA.logos.CHR}" alt="Chattogram Royals logo">` : `<span aria-hidden="true">🏏</span>`}
          <strong>${t.team}</strong>
        </div>
      </td>
      <td>${t.p}</td>
      <td>${t.w}</td>
      <td>${t.l}</td>
      <td>${t.nr}</td>
      <td><strong>${t.pts}</strong></td>
      <td>${t.nrr}</td>
    </tr>
  `;
  body.innerHTML = DATA.points.map(row).join("");
}

function initScrollSpy(){
  const links = $$(".nav__link");
  const sections = links
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const activate = (id) => {
    links.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`));
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) activate(e.target.id);
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 });

  sections.forEach(s => io.observe(s));
}

function initReveal(){
  const els = $$(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

function initHeaderElevate(){
  const header = document.querySelector("[data-elevate]");
  if(!header) return;
  const onScroll = () => header.classList.toggle("is-elevated", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initCountdown(){
  // Uses the first upcoming fixture as "next match"
  const upcoming = DATA.fixtures.find(f => (f.status || "").toLowerCase().includes("upcoming"));
  const line = $("#nextMatchLine");
  if(!upcoming || !line) {
    if(line) line.textContent = "Schedule coming soon.";
    return;
  }

  line.textContent = `${upcoming.date} • ${upcoming.time || ""} • ${upcoming.home} vs ${upcoming.away}`;

  // Try to parse a real date (assumes local timezone)
  const parsed = new Date(upcoming.date.replace(",", "") + " " + (upcoming.time || "18:00"));
  if(isNaN(parsed.getTime())) return;

  const tick = () => {
    const now = new Date();
    const ms = Math.max(0, parsed - now);
    const totalMins = Math.floor(ms / 60000);
    const days = Math.floor(totalMins / (60 * 24));
    const hours = Math.floor((totalMins % (60 * 24)) / 60);
    const mins = totalMins % 60;

    $("#cdDays").textContent = String(days).padStart(2, "0");
    $("#cdHours").textContent = String(hours).padStart(2, "0");
    $("#cdMins").textContent = String(mins).padStart(2, "0");
  };

  tick();
  setInterval(tick, 60 * 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  initTheme();
  initMobileNav();
  initHeaderElevate();

  renderSquad("all");
  initSquadFilters();

  renderFixtures();
  renderPoints();

  initScrollSpy();
  initReveal();
  initCountdown();
});
