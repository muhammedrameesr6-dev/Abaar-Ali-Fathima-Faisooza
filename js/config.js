/**
 * Wedding Website Configuration
 * Updated with exact details for Fathima Fairooza & Mohammed Abrar Ali
 */
const WEDDING_CONFIG = {
  // Couple Information (Bride First, Groom Second)
  couple: {
    bride: "Fathima Fairooza",
    brideFather: "Mohammed Imthiyaz",
    brideMother: "Khairunnisa",
    brideParentsFormatted: "D/O Mohammed Imthiyaz & Khairunnisa",
    brideGrandparents: "Abdul Rahman & Asiya",
    brideFamily: "T.A Abdullah Anjillam & Jameela",

    groom: "Mohammed Abrar Ali",
    groomFather: "Mohammad Razi TS",
    groomMother: "Saheedabi KA",
    groomParentsFormatted: "S/O Mohammad Razi TS & Saheedabi KA",
    groomGrandparents: "T Sulaiman Haji Thangees & A Zainabi Hajuma",
    groomFamily: "Aboobacker Bellakkaran & Khadeeja Hajuma Peediekkaran",

    title: "Fathima Fairooza & Mohammed Abrar Ali",
    subtitle: "Wedding Invitation"
  },

  // Bismillah
  bismillah: {
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    english: "In the Name of Allah",
    subEnglish: "The Most Gracious & The Most Merciful"
  },

  // Invitation Letter Text
  invitationText: {
    heading: "You Are Cordially Invited",
    body: "With hearts full of joy and gratitude, we cordially invite your esteemed presence along with your family to the auspicious occasion of the wedding ceremony of our beloved daughter"
  },

  // Sacred Quranic Verse (Surah Ar-Rum 30:21)
  quranVerse: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    reference: "SURAH AR-RUM | 30:21",
    translation: "\"And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them; and He placed between you affection and mercy. Indeed in that are signs for a people who reflect.\""
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

  // Contact / Wishes via WhatsApp
  contact: {
    whatsappNumber: "919876543210", // മാറ്റാവുന്ന WhatsApp നമ്പർ
    whatsappMessage: "Assalamu Alaikum! Sending our warmest wishes and prayers to Fathima Fairooza & Mohammed Abrar Ali on their wedding!"
  },

  // Audio settings
  audio: {
    src: "assets/audio.m4a",
    enabled: true
  }
};
