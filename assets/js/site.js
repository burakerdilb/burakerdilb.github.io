/* Theme toggle + client-side i18n.
 * Pages are rendered in English by Jekyll. Elements carrying data-i18n="dotted.path"
 * get their text replaced from /assets/i18n/<lang>.json; missing keys fall back to English.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var SITE = window.SITE || {};
  var base = SITE.baseurl || '';
  var dicts = {};

  /* ---------- theme ---------- */
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch (e) {}
  }
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }
  // Follow the OS setting until the visitor picks a theme explicitly.
  try {
    if (!localStorage.getItem('theme') && window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      });
    }
  } catch (e) {}

  /* ---------- i18n ---------- */
  function get(obj, path) {
    var parts = path.split('.');
    for (var i = 0; i < parts.length && obj != null; i++) obj = obj[parts[i]];
    return obj;
  }

  function load(lang) {
    if (dicts[lang]) return Promise.resolve(dicts[lang]);
    // The build time in the URL makes browsers fetch fresh text after every update.
    return fetch(base + '/assets/i18n/' + lang + '.json?v=' + (SITE.version || ''))
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (d) { dicts[lang] = d; return d; });
  }

  function lookup(lang, key) {
    var v = get(dicts[lang], key);
    if (v == null && dicts.en) v = get(dicts.en, key);
    return v;
  }

  function formatDates(lang) {
    var opts = { year: 'numeric', month: 'long', day: 'numeric' };
    document.querySelectorAll('[data-date]').forEach(function (el) {
      var d = new Date(el.getAttribute('data-date') + 'T00:00:00');
      if (!isNaN(d)) el.textContent = d.toLocaleDateString(lang, opts);
    });
    document.querySelectorAll('[data-date-month]').forEach(function (el) {
      var d = new Date(el.getAttribute('data-date-month') + 'T00:00:00');
      if (!isNaN(d)) el.textContent = d.toLocaleDateString(lang, { year: 'numeric', month: 'long' });
    });
  }

  function apply(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = lookup(lang, el.getAttribute('data-i18n'));
      if (typeof v !== 'string') return;
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = v; else el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      // data-i18n-attr="aria-label:ui.theme_toggle;title:ui.foo"
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':');
        var v = lookup(lang, p[1]);
        if (typeof v === 'string') el.setAttribute(p[0], v);
      });
    });

    if (SITE.pageTitleKey) {
      var t = lookup(lang, SITE.pageTitleKey);
      if (typeof t === 'string') document.title = t + ' · ' + SITE.name;
    }
    formatDates(lang);
    root.setAttribute('lang', lang);
    root.removeAttribute('data-i18n-pending');
    document.dispatchEvent(new CustomEvent('i18n:applied', { detail: { lang: lang } }));
  }

  var currentLang = root.getAttribute('lang') || 'en';

  function setLang(lang, persist) {
    currentLang = lang;
    if (persist) { try { localStorage.setItem('lang', lang); } catch (e) {} }
    var select = document.getElementById('lang-select');
    if (select) select.value = lang;
    var jobs = [load(lang)];
    if (lang !== 'en') jobs.push(load('en'));
    Promise.all(jobs).then(function () { apply(lang); }).catch(function () {
      root.removeAttribute('data-i18n-pending');
    });
  }

  // Never leave the page hidden if the dictionary cannot be fetched.
  setTimeout(function () { root.removeAttribute('data-i18n-pending'); }, 1500);

  var select = document.getElementById('lang-select');
  if (select) {
    select.addEventListener('change', function () { setLang(select.value, true); });
  }

  // Carry the language to the next page in the URL as well, for browsers or
  // previews where localStorage is blocked. The next page strips it again.
  function carryLang(e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.origin !== location.origin) return;
    if (a.pathname === location.pathname && a.hash) return;
    var url = new URL(a.href);
    url.searchParams.set('lang', currentLang);
    a.href = url.href;
  }
  document.addEventListener('click', carryLang);
  document.addEventListener('auxclick', carryLang);

  var initial = currentLang;
  if (initial !== 'en') {
    setLang(initial, false);
  } else {
    if (select) select.value = 'en';
    formatDates('en');
  }

  /* ---------- photo lightbox ---------- */
  var box = document.getElementById('lightbox');
  if (box) {
    var links = Array.prototype.slice.call(document.querySelectorAll('.gallery-link'));
    var img = document.getElementById('lightbox-img');
    var cap = document.getElementById('lightbox-caption');
    var current = -1;
    function show(i) {
      current = (i + links.length) % links.length;
      var a = links[current];
      img.src = a.getAttribute('href');
      img.alt = a.getAttribute('aria-label');
      var c = a.querySelector('.gallery-caption');
      var place = c.querySelector('.place');
      cap.textContent = '';
      if (place) {
        var p = document.createElement('span');
        p.className = 'place';
        p.textContent = place.textContent;
        cap.appendChild(p);
        cap.appendChild(document.createTextNode(' · '));
      }
      var city = document.createElement('span');
      city.className = 'city';
      city.textContent = c.querySelector('.city').textContent;
      cap.appendChild(city);
      box.hidden = false;
      document.body.classList.add('lightbox-open');
    }
    function hide() { box.hidden = true; document.body.classList.remove('lightbox-open'); }
    // Keep alt text and labels in the current language.
    function labelPhotos() {
      links.forEach(function (a) {
        var place = a.querySelector('.place');
        var label = (place ? place.textContent + ', ' : '') + a.querySelector('.city span').textContent;
        a.setAttribute('aria-label', label);
        a.querySelector('img').setAttribute('alt', label);
      });
    }
    document.addEventListener('i18n:applied', labelPhotos);
    labelPhotos();
    links.forEach(function (a, i) {
      a.addEventListener('click', function (e) { e.preventDefault(); show(i); });
    });
    document.getElementById('lightbox-close').addEventListener('click', hide);
    document.getElementById('lightbox-prev').addEventListener('click', function () { show(current - 1); });
    document.getElementById('lightbox-next').addEventListener('click', function () { show(current + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) hide(); });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') hide();
      else if (e.key === 'ArrowLeft') show(current - 1);
      else if (e.key === 'ArrowRight') show(current + 1);
    });
  }

  /* ---------- course search ---------- */
  var search = document.getElementById('course-search');
  if (search) {
    // Case- and accent-insensitive, so "isaret" finds "İşaret" and "ehb211" finds "EHB 211E".
    var norm = function (t) {
      return t.toLowerCase().replace(/ı/g, 'i').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };
    var rows = Array.prototype.slice.call(document.querySelectorAll('.course-list li'));
    var groups = Array.prototype.slice.call(document.querySelectorAll('.course-group'));
    var empty = document.getElementById('course-empty');
    var filter = function () {
      var words = norm(search.value).split(/\s+/).filter(Boolean);
      var shown = 0;
      rows.forEach(function (li) {
        // Match the English name and code as well as the name in the current language.
        var hay = norm(li.firstElementChild.textContent + ' ' + li.getAttribute('data-search'));
        hay += ' ' + hay.replace(/\s+/g, '');
        var hit = words.every(function (w) { return hay.indexOf(w) !== -1; });
        li.hidden = !hit;
        if (hit) shown++;
      });
      groups.forEach(function (g) {
        g.hidden = !g.querySelector('.course-list li:not([hidden])');
      });
      empty.hidden = shown > 0;
    };
    search.addEventListener('input', filter);
    document.addEventListener('i18n:applied', filter);
  }

  // Keep ?lang= out of the address bar once applied.
  if (location.search.indexOf('lang=') !== -1 && window.history && history.replaceState) {
    var url = new URL(location.href);
    try { localStorage.setItem('lang', initial); } catch (e) {}
    url.searchParams.delete('lang');
    history.replaceState(null, '', url.pathname + url.search + url.hash);
  }
})();
