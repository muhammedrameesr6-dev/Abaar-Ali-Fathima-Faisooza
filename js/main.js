/**
 * Wedding Invitation Website Logic
 * Mohammed Abrar Ali & Fathima Fairooza
 */
document.addEventListener('DOMContentLoaded', () => {
  initFromConfig();
  initCountdown();
  initAudioPlayer();
  initScrollAnimations();
  initCalendarButtons();
  initWishesForm();
  initEnvelopeIntro();
});

// Populate content from WEDDING_CONFIG
function initFromConfig() {
  if (typeof WEDDING_CONFIG === 'undefined') return;

  // Title & Metadata (Bride First, Groom Second)
  document.title = `${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom} | Wedding Invitation`;

  // Couple names & Parents
  const brideEl = document.getElementById('bride-name');
  if (brideEl) brideEl.textContent = WEDDING_CONFIG.couple.bride;

  const brideParentsEl = document.getElementById('bride-parents');
  if (brideParentsEl) brideParentsEl.textContent = WEDDING_CONFIG.couple.brideParentsFormatted || WEDDING_CONFIG.couple.brideParents;

  const groomEl = document.getElementById('groom-name');
  if (groomEl) groomEl.textContent = WEDDING_CONFIG.couple.groom;

  const groomParentsEl = document.getElementById('groom-parents');
  if (groomParentsEl) groomParentsEl.textContent = WEDDING_CONFIG.couple.groomParentsFormatted || WEDDING_CONFIG.couple.groomParents;

  // Footer couple names
  const footerCoupleEl = document.getElementById('footer-couple-name');
  if (footerCoupleEl) {
    footerCoupleEl.textContent = `${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom}`;
  }

  // Invitation text
  const inviteBodyEl = document.getElementById('invite-body');
  if (inviteBodyEl && WEDDING_CONFIG.invitationText) {
    inviteBodyEl.textContent = WEDDING_CONFIG.invitationText.body;
  }

  // Bismillah
  const bismillahArabic = document.getElementById('bismillah-arabic');
  if (bismillahArabic) bismillahArabic.textContent = WEDDING_CONFIG.bismillah.arabic;

  const bismillahEng = document.getElementById('bismillah-english');
  if (bismillahEng) bismillahEng.textContent = WEDDING_CONFIG.bismillah.english;

  const bismillahSub = document.getElementById('bismillah-subenglish');
  if (bismillahSub) bismillahSub.textContent = WEDDING_CONFIG.bismillah.subEnglish;

  // Quran Verse
  const quranArabic = document.getElementById('quran-arabic');
  if (quranArabic) quranArabic.textContent = WEDDING_CONFIG.quranVerse.arabic;

  const quranRef = document.getElementById('quran-ref');
  if (quranRef) quranRef.textContent = WEDDING_CONFIG.quranVerse.reference;

  const quranTrans = document.getElementById('quran-translation');
  if (quranTrans) quranTrans.textContent = WEDDING_CONFIG.quranVerse.translation;

  // Date banner
  const dateBanner = document.getElementById('wedding-date-display');
  if (dateBanner && WEDDING_CONFIG.dates) dateBanner.textContent = WEDDING_CONFIG.dates.gregorian;

  const hijriBanner = document.getElementById('hijri-date-display');
  if (hijriBanner && WEDDING_CONFIG.dates) hijriBanner.textContent = `✦ ${WEDDING_CONFIG.dates.hijri} ✦`;

  // Event schedule
  const eventDate = document.getElementById('event-date');
  if (eventDate && WEDDING_CONFIG.dates) {
    eventDate.textContent = `${WEDDING_CONFIG.dates.gregorian} (${WEDDING_CONFIG.dates.hijri})`;
  }

  const eventTime = document.getElementById('event-time');
  if (eventTime && WEDDING_CONFIG.dates) {
    eventTime.textContent = WEDDING_CONFIG.dates.time;
  }

  // Venue
  const venueName = document.getElementById('venue-name');
  if (venueName) venueName.textContent = WEDDING_CONFIG.venue.name;

  const venueCardName = document.getElementById('venue-card-name');
  if (venueCardName) venueCardName.textContent = WEDDING_CONFIG.venue.name;

  const venueLandmark = document.getElementById('venue-landmark');
  if (venueLandmark) venueLandmark.textContent = WEDDING_CONFIG.venue.address;

  const venueCardSub = document.getElementById('venue-card-sub');
  if (venueCardSub) venueCardSub.textContent = WEDDING_CONFIG.venue.address;

  const mapBtn = document.getElementById('map-btn');
  if (mapBtn) {
    mapBtn.href = WEDDING_CONFIG.venue.mapUrl;
    mapBtn.target = "_blank";
  }

  // Countdown Date Label
  const countdownDateDisplay = document.getElementById('countdown-date-display');
  if (countdownDateDisplay) countdownDateDisplay.textContent = WEDDING_CONFIG.countdown.dateDisplay;
}

// Live Countdown Timer
function initCountdown() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const targetDateStr = WEDDING_CONFIG?.countdown?.target || "2026-12-19T16:30:00";
  const targetDate = new Date(targetDateStr).getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      const labelEl = document.querySelector('.countdown-header-title');
      if (labelEl) labelEl.textContent = "THE CELEBRATION HAS BEGUN!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// Audio Player with Floating Toggle Button
function initAudioPlayer() {
  const audio = document.getElementById('bg-audio');
  const musicBtn = document.getElementById('music-toggle-btn');
  if (!audio || !musicBtn) return;

  let isPlaying = false;

  function togglePlay() {
    if (isPlaying) {
      audio.pause();
      musicBtn.classList.remove('playing');
      isPlaying = false;
    } else {
      audio.play().then(() => {
        musicBtn.classList.add('playing');
        isPlaying = true;
      }).catch(err => {
        console.log("Audio play blocked until direct user interaction", err);
      });
    }
  }

  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlay();
  });

  // Global first interaction trigger for smooth experience
  const startAudioOnFirstClick = () => {
    if (!isPlaying) {
      audio.play().then(() => {
        musicBtn.classList.add('playing');
        isPlaying = true;
      }).catch(() => {});
    }
    document.removeEventListener('click', startAudioOnFirstClick);
    document.removeEventListener('touchstart', startAudioOnFirstClick);
  };

  document.addEventListener('click', startAudioOnFirstClick, { once: true });
  document.addEventListener('touchstart', startAudioOnFirstClick, { once: true });
}

// Interactive Invitation Opening Intro Overlay
function initEnvelopeIntro() {
  const overlay = document.getElementById('welcome-overlay');
  const openBtn = document.getElementById('open-invitation-btn');
  const audio = document.getElementById('bg-audio');
  const musicBtn = document.getElementById('music-toggle-btn');

  if (!overlay || !openBtn) return;

  openBtn.addEventListener('click', () => {
    if (audio) {
      audio.play().then(() => {
        if (musicBtn) musicBtn.classList.add('playing');
      }).catch(() => {});
    }

    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 800);
  });
}

// Scroll-triggered subtle reveal animations
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

// Add to Calendar feature (.ics and Google Calendar)
function initCalendarButtons() {
  const gCalBtn = document.getElementById('add-gcal-btn');
  const icsBtn = document.getElementById('add-ics-btn');

  const title = encodeURIComponent(`${WEDDING_CONFIG.couple.groom} & ${WEDDING_CONFIG.couple.bride}'s Wedding Ceremony`);
  const details = encodeURIComponent(`You are cordially invited to celebrate the Wedding of ${WEDDING_CONFIG.couple.groom} & ${WEDDING_CONFIG.couple.bride}. Date: ${WEDDING_CONFIG.dates.gregorian} (${WEDDING_CONFIG.dates.hijri}) at ${WEDDING_CONFIG.dates.time}. Venue: ${WEDDING_CONFIG.venue.name}, ${WEDDING_CONFIG.venue.address}`);
  const location = encodeURIComponent(`${WEDDING_CONFIG.venue.name}, ${WEDDING_CONFIG.venue.address}`);

  // Format date for Google Calendar: 19 Dec 2026 at 4:30 PM IST (11:00 UTC) -> 20261219T110000Z
  const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=20261219T110000Z/20261219T153000Z`;

  if (gCalBtn) {
    gCalBtn.href = gCalUrl;
    gCalBtn.target = "_blank";
  }

  if (icsBtn) {
    icsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const icsData = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Abrar & Fathima Wedding//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        "UID:wedding-abrar-fathima-20261219",
        "DTSTAMP:20261219T110000Z",
        "DTSTART:20261219T110000Z",
        "DTEND:20261219T153000Z",
        `SUMMARY:${WEDDING_CONFIG.couple.groom} & ${WEDDING_CONFIG.couple.bride}'s Wedding`,
        `DESCRIPTION:Wedding Ceremony at ${WEDDING_CONFIG.venue.name}`,
        `LOCATION:${WEDDING_CONFIG.venue.name}, ${WEDDING_CONFIG.venue.address}`,
        "STATUS:CONFIRMED",
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\r\n");

      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', 'wedding-invitation.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}

// Interactive On-Page Wishes Guestbook Display
function initWishesForm() {
  const form = document.getElementById('wishes-form');
  const wishesList = document.getElementById('wishes-list');
  const wishesCountEl = document.getElementById('wishes-count');
  if (!form || !wishesList) return;

  const STORAGE_KEY = 'wedding_wishes_abrar_fathima';

  // Default sweet blessings
  const defaultWishes = [
    {
      name: "Shafi & Family",
      message: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fee khair! Wishing Fathima & Abrar a blessed married life.",
      time: "Recent"
    },
    {
      name: "Uncle & Family",
      message: "Heartiest congratulations to the dearest couple! May your home always be filled with joy, barakah, and love.",
      time: "Recent"
    }
  ];

  function getWishes() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("localStorage not accessible", e);
    }
    return defaultWishes;
  }

  function saveWishes(wishes) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    } catch (e) {
      console.warn("Failed to save to localStorage", e);
    }
  }

  function escapeHTML(str) {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
  }

  function renderWishes() {
    const wishes = getWishes();
    if (wishesCountEl) {
      wishesCountEl.textContent = `(${wishes.length})`;
    }

    wishesList.innerHTML = wishes.map((w, idx) => `
      <div class="wish-item ${idx === 0 ? 'wish-item-new' : ''}">
        <div class="wish-header">
          <span class="wish-author">${escapeHTML(w.name)}</span>
          <span class="wish-time">${escapeHTML(w.time || 'Just now')}</span>
        </div>
        <p class="wish-text">“${escapeHTML(w.message)}”</p>
      </div>
    `).join('');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('wish-name');
    const msgInput = document.getElementById('wish-message');
    const guestName = nameInput?.value.trim() || '';
    const message = msgInput?.value.trim() || '';

    if (!guestName || !message) return;

    const newWish = {
      name: guestName,
      message: message,
      time: 'Just now'
    };

    const wishes = getWishes();
    wishes.unshift(newWish);
    saveWishes(wishes);
    renderWishes();

    // Reset input fields
    nameInput.value = '';
    msgInput.value = '';

    // Show smooth feedback toast
    const feedback = document.getElementById('wish-feedback');
    if (feedback) {
      feedback.style.display = 'block';
      feedback.textContent = '✨ Thank you for your warm wishes!';
      setTimeout(() => {
        feedback.style.display = 'none';
      }, 3500);
    }

    // Scroll wishes list to top to see newly added wish
    wishesList.scrollTo({ top: 0, behavior: 'smooth' });
  });

  renderWishes();
}
