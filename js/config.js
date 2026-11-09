/**
 * Wedding Website Configuration
 * Updated with exact details for Mohammed Abrar Ali & Fathima Fairooza
 */
const WEDDING_CONFIG = {
  // Couple Information
  couple: {
    groom: "Mohammed Abrar Ali",
    groomFather: "Mohammad Razi TS",
    groomMother: "Saheedabi KA",
    groomParentsFormatted: "S/O Mohammad Razi TS & Saheedabi KA",
    groomGrandparents: "T Sulaiman Haji Thangees & A Zainabi Hajuma",
    groomFamily: "Aboobacker Bellakkaran & Khadeeja Hajuma Peediekkaran",

    bride: "Fathima Fairooza",
    brideFather: "Mohammed Imthiyaz",
    brideMother: "Khairunnisa",
    brideParentsFormatted: "D/O Mohammed Imthiyaz & Khairunnisa",
    brideGrandparents: "Abdul Rahman & Asiya",
    brideFamily: "T.A Abdullah Anjillam & Jameela",

    title: "Mohammed Abrar Ali & Fathima Fairooza",
    subtitle: "Wedding Invitation"
  },

  // Bismillah & Quranic Verse
  bismillah: {
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    english: "In the Name of Allah",
    subEnglish: "The Most Gracious & The Most Merciful"
  },

  // Wedding Quran Verse for Page 1 & Blessing
  weddingAyah: {
    arabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    reference: "SURAH AN-NABA | 78:8",
    translation: "\"And We created you in pairs.\""
  },
  
  invitationText: {
    heading: "You Are Cordially Invited",
    body: "With hearts full of joy and gratitude, we cordially invite your esteemed presence along with your family on the auspicious occasion of the wedding ceremony of our beloved ones. Your prayers, blessings, and gracious presence will make this sacred and joyous occasion truly memorable."
  },

  quranVerse: {
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    reference: "SURAH AL-FURQAN | 25:74",
    translation: "\"Our Lord, grant us from among our spouses and our offspring comfort to our eyes, and make us an example for the righteous.\""
  },

  // Wedding Date & Hijri
  dates: {
    gregorian: "Saturday, 19 December 2026",
    hijri: "10 Rajab 1448",
    time: "After Asr prayer – 4:30 PM",
    combinedDisplay: "Saturday, 19 December 2026 • 10 Rajab 1448"
  },

  // Event Schedule
  events: [
    {
      id: "nikkah",
      title: "NIKKAH & WEDDING CEREMONY",
      date: "Saturday, 19 December 2026",
      hijri: "10 Rajab 1448",
      time: "After Asr prayer – 4:30 PM"
    }
  ],

  // Venue Details
  venue: {
    name: "SASA Resort",
    address: "Citizen Nagar Road, Eriyapady, Alampady",
    mapUrl: "https://maps.google.com/?q=SASA+Resort+Citizen+Nagar+Road+Eriyapady+Alampady"
  },

  // Countdown target date & time (19 Dec 2026, 4:30 PM)
  countdown: {
    target: "2026-12-19T16:30:00",
    label: "COUNTING DOWN TO THE CEREMONY",
    dateDisplay: "SATURDAY, 19 DECEMBER 2026 • 4:30 PM"
  },

  // Contact / RSVP via WhatsApp
  contact: {
    whatsappNumber: "919876543210", // മാറ്റാവുന്ന WhatsApp നമ്പർ
    whatsappMessage: "Assalamu Alaikum! We are pleased to RSVP for the wedding of Mohammed Abrar Ali & Fathima Fairooza."
  },

  // Audio settings
  audio: {
    src: "assets/audio.m4a",
    enabled: true
  }
};
