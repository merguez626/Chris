
const serviceCards = [
  {
    badge: "Offre lancement",
    title: "Coupe de cheveux",
    desc: "Coupes modernes ou classiques adaptées à votre visage et à votre style.",
    duration: "30 min",
    oldPrice: "25€",
    newPrice: "20€"
  },
  {
    badge: "Offre lancement",
    title: "Barbe",
    desc: "Sculpture et entretien précis pour un rendu élégant et harmonieux.",
    duration: "15-20 min",
    oldPrice: "15€",
    newPrice: "15€"
  },
  {
    badge: "Offre lancement",
    title: "Rasage traditionnel",
    desc: "Techniques classiques de barbier pour un confort optimal et un résultat soigné.",
    duration: "30 min",
    oldPrice: "25€",
    newPrice: "25€"
  },
  {
    badge: "Offre lancement",
    title: "Coupe + barbe",
    desc: "Pack complet avec finition cheveux et barbe pour une allure nette.",
    duration: "45 min",
    oldPrice: "30€",
    newPrice: "30€"
  },
  {
    badge: "Service",
    title: "Coupe enfant",
    desc: "Coupe soignée pour enfants jusqu'à 10 ans, dans une ambiance détendue.",
    duration: "30 min",
    oldPrice: "15€",
    newPrice: "15€"
  },
  {
    badge: "Offre lancement",
    title: "Coloration / mèches",
    desc: "Coloration adaptée au style et à la carnation pour un résultat naturel.",
    duration: "45 min",
    oldPrice: "35€",
    newPrice: "35€"
  },
  {
    badge: "Extra",
    title: "Shampoing & soin",
    desc: "Nourrit, protège et apporte de la brillance au cheveu.",
    duration: "10 min",
    oldPrice: "5€",
    newPrice: "5€"
  },
  {
    badge: "Extra",
    title: "Épilation cire joues",
    desc: "Nettoie les contours pour un visage net et une barbe soignée.",
    duration: "10 min",
    oldPrice: "5€",
    newPrice: "5€"
  }
];

const galleryCards = [
  {
    title: "Dégradé texturé",
    text: "Fondu bas précis avec volume structuré sur le dessus.",
    beforeLabel: "Avant",
    afterLabel: "Après",
    beforeImg: "assets/media/photos/coupe-homme.png",
    afterImg: "assets/media/photos/coiffure-tendance.png"
  },
  {
    title: "Barbe redessinée",
    text: "Lignes nettes et densité retravaillée pour une barbe équilibrée.",
    beforeLabel: "Avant",
    afterLabel: "Après",
    beforeImg: "assets/media/photos/service-barbier.png",
    afterImg: "assets/media/photos/style-barbe-et-cheveux.png"
  },
  {
    title: "Classic modernisé",
    text: "Coupe classique revisitée avec finition plus moderne.",
    beforeLabel: "Avant",
    afterLabel: "Après",
    beforeImg: "assets/media/photos/coloration-homme.png",
    afterImg: "assets/media/photos/coiffage.png"
  }
];

const localizedContent = {
  nl: {
    services: [
      {
        badge: "Lanceringsdeal",
        title: "Herenknipbeurt",
        desc: "Moderne of klassieke coupes, afgestemd op je gezicht en stijl."
      },
      {
        badge: "Lanceringsdeal",
        title: "Baard",
        desc: "Nauwkeurige vormgeving en onderhoud voor een elegante look."
      },
      {
        badge: "Lanceringsdeal",
        title: "Traditionele scheerbeurt",
        desc: "Klassieke barbertechnieken voor maximaal comfort en nette afwerking."
      },
      {
        badge: "Lanceringsdeal",
        title: "Knipbeurt + baard",
        desc: "Volledig pakket met haar- en baardafwerking voor een strakke uitstraling."
      },
      {
        badge: "Service",
        title: "Kindersnit",
        desc: "Verzorgde knipbeurt voor kinderen tot 10 jaar in een ontspannen sfeer."
      },
      {
        badge: "Lanceringsdeal",
        title: "Kleuring / highlights",
        desc: "Kleur aangepast aan stijl en huidskleur voor een natuurlijk resultaat."
      },
      {
        badge: "Extra",
        title: "Shampoo & verzorging",
        desc: "Voedt, beschermt en geeft glans aan het haar."
      },
      {
        badge: "Extra",
        title: "Wax wangen",
        desc: "Reinigt contouren voor een net gezicht en verzorgde baard."
      }
    ],
    gallery: [
      {
        title: "Textured fade",
        text: "Nauwkeurige low fade met gestructureerd volume bovenaan.",
        beforeLabel: "Voor",
        afterLabel: "Na"
      },
      {
        title: "Baard redesign",
        text: "Strakke lijnen en herwerkte dichtheid voor balans.",
        beforeLabel: "Voor",
        afterLabel: "Na"
      },
      {
        title: "Modern classic",
        text: "Klassieke snit met moderne afwerking en heldere contouren.",
        beforeLabel: "Voor",
        afterLabel: "Na"
      }
    ]
  },
  en: {
    services: [
      {
        badge: "Launch offer",
        title: "Haircut",
        desc: "Modern or classic cuts tailored to your face and style."
      },
      {
        badge: "Launch offer",
        title: "Beard",
        desc: "Precise shaping and maintenance for an elegant look."
      },
      {
        badge: "Launch offer",
        title: "Traditional shave",
        desc: "Classic barber techniques for comfort and a clean finish."
      },
      {
        badge: "Launch offer",
        title: "Haircut + beard",
        desc: "Full package with hair and beard finishing for a sharp look."
      },
      {
        badge: "Service",
        title: "Kid haircut",
        desc: "Neat haircut for kids up to 10 years old in a relaxed atmosphere."
      },
      {
        badge: "Launch offer",
        title: "Color / highlights",
        desc: "Color adapted to your style and skin tone for a natural result."
      },
      {
        badge: "Extra",
        title: "Shampoo & care",
        desc: "Nourishes, protects and adds shine to the hair."
      },
      {
        badge: "Extra",
        title: "Cheek wax",
        desc: "Cleans contours for a neat face and a tidy beard."
      }
    ],
    gallery: [
      {
        title: "Textured fade",
        text: "Precise low fade with structured top volume.",
        beforeLabel: "Before",
        afterLabel: "After"
      },
      {
        title: "Beard redesign",
        text: "Clean lines and reworked density for a balanced beard.",
        beforeLabel: "Before",
        afterLabel: "After"
      },
      {
        title: "Modern classic",
        text: "Classic cut refreshed with a more modern finish.",
        beforeLabel: "Before",
        afterLabel: "After"
      }
    ]
  }
};

const i18n = {
  fr: {
    title: "Mr Chris | Barbershop Bruxelles",
    navHome: "Accueil",
    navAbout: "À propos",
    navServices: "Prestations",
    navGallery: "Galerie",
    navBooking: "Réservation",
    navContact: "Contact",
    navBookNow: "Prendre RDV",
    floatingBooking: "Réserver",
    heroBadge: "Accueil",
    heroTitle: "Mr Chris – Barbershop à Bruxelles",
    heroSubtitle: "Salon de coiffure masculin situé à rue de la Montagne 29, en plein coeur de Bruxelles, à deux pas de la Grand-Place.",
    heroSubtitle2: "Que tu viennes pour un dégradé moderne, une coupe classique, un rasage traditionnel ou une barbe travaillée, tu seras accueilli dans un lieu à taille humaine, chaleureux et convivial. Ici, on t'écoute, on te connaît et tu te sens comme à la maison.",
    heroSubtitle3: "Notre objectif : révéler l'identité de chaque homme, avec justesse et style. Être barbier, ce n'est pas seulement couper des cheveux : c'est comprendre qui tu es et mettre en valeur ce qui te rend unique.",
    homeStoryLabel: "Accueil",
    homeStoryTitle: "L'expérience Mr Chris",
    heroPrompt: "Prêt à révéler votre style ?",
    heroCtaLine: "Prenez rendez-vous dès maintenant et vivez l'expérience Mr Chris",
    heroPrimaryBtn: "Prendre rendez-vous",
    heroSecondaryBtn: "Voir les prestations",
    heroQuickTitle: "Réservation rapide",
    heroQuickText: "Choisissez coiffeur, service, date et heure en moins d'une minute.",
    heroQuickBtn: "Je réserve maintenant",
    statYearsLabel: "Ans d'expérience",
    statClientsLabel: "Clients stylés",
    statStyleLabel: "Sur mesure",
    aboutLabel: "À propos",
    aboutTitle: "Je m'appelle Chris, coiffeur-barbier spécialisé dans l'univers masculin.",
    aboutP1: "Après plus de dix années d'apprentissage, d'expérience et de travail acharné, j'ai décidé de créer mon propre salon, entièrement pensé par moi et dédié aux hommes. Chaque détail, chaque outil, chaque mètre carré a été réfléchi et gagné à la sueur du front.",
    aboutP2: "Mr Chris, c'est bien plus qu'un simple barbershop : c'est le résultat de passion, de détermination et de travail intense. Aujourd'hui, j'ai l'honneur d'accueillir ma clientèle dans un espace qui reflète ma vision du barber : un résultat unique, qui te ressemble.",
    aboutCommitTitle: "Mon savoir-faire",
    aboutSkill1: "Coupes modernes et classiques",
    aboutSkill2: "Barbes sculptées avec précision",
    aboutSkill3: "Techniques traditionnelles de barber",
    aboutSkill4: "Adaptation à chaque visage et à chaque style",
    aboutSkill5: "Mèche/coloration",
    aboutP3: "J'ai choisi ce métier parce qu'il me passionne : donner du style, de la confiance et une allure unique à chaque homme qui passe entre mes mains.",
    aboutP4: "Mon engagement est simple : mettre en valeur la personnalité de chacun et révéler ce qui le rend différent.",
    servicesLabel: "Services / Nos prestations",
    servicesTitle: "Offre de lancement et prestations sur mesure",
    servicesIntro: "Du classique au moderne, chaque service est adapté à ton visage, ton style et ton rythme. Les prix barrés indiquent le tarif initial.",
    galleryLabel: "Galerie / Nos réalisations",
    galleryTitle: "Du style au détail, chaque coupe raconte une histoire.",
    galleryIntro: "Le résultat de notre savoir-faire, pour que chaque homme se sente à sa place.",
    galleryNote: "(Inclure photos avant/après)",
    videoTitle1: "Clip style #01",
    videoText1: "Placeholder vidéo: transformation dégradé progressif.",
    videoTitle2: "Clip style #02",
    videoText2: "Placeholder vidéo: contours barbe et finition lame.",
    bookingLabel: "Réservation",
    bookingTitle: "Réservez votre créneau en quelques clics",
    bookingIntro: "Les rendez-vous sont gérés via notre plateforme partenaire: accès rapide et confirmation immédiate.",
    bookingPolicyTitle: "Politique rendez-vous",
    bookingPolicy: "En cas d'annulation ou de modification du rendez-vous, merci de prévenir au moins 24h à l'avance afin de libérer le créneau pour un autre client.",
    bookingExternalTitle: "Réservation en ligne",
    bookingExternalIntro: "Les rendez-vous sont gérés via notre plateforme partenaire. Clique sur le bouton ci-dessous pour choisir ton service et ton créneau.",
    bookingPoint1: "1. Choisissez le service qui vous convient.",
    bookingPoint2: "2. Sélectionnez la date, l'heure et le coiffeur.",
    bookingPoint3: "3. Recevez votre confirmation automatiquement.",
    bookingExternalBtn: "Accéder à la réservation",
    bookingExternalNote: "Si vous n'avez pas encore de lien de réservation actif, remplacez simplement l'URL dans assets/js/app.js.",
    contactLabel: "Contact",
    contactTitle: "Passez au salon ou contactez-nous",
    contactIntro: "Avec ou sans réservation. L'équipe vous accueille du lundi au samedi de 10h à 20h.",
    contactCardAddressTitle: "Adresse",
    contactCardRoute: "Itinéraire direct",
    contactCardPhoneTitle: "Téléphone",
    contactCardEmailTitle: "Email",
    mapTitle: "Carte du salon",
    formFirstName: "Prénom",
    formLastName: "Nom",
    formEmail: "Adresse email",
    formPhone: "Numéro de téléphone",
    formBarber: "Coiffeur",
    formService: "Service",
    formDate: "Date",
    formTime: "Heure",
    formMessage: "Détail (optionnel)",
    formSubmitBooking: "Confirmer ma demande",
    formSubmitContact: "Envoyer le message",
    modalKicker: "Réservation express",
    modalTitle: "Bloquez votre créneau maintenant",
    footerTagline: "Révéler l'identité de chaque homme, avec justesse et style.",
    footerHoursTitle: "Horaires",
    footerHoursWeek: "Lundi à samedi: 10h00 - 20h00",
    footerHoursSun: "Dimanche: fermé",
    footerWalkIn: "Avec ou sans réservation",
    footerSocialTitle: "Réseaux",
    toastBooking: "Ouverture de votre email pour finaliser la réservation.",
    toastContact: "Ouverture de votre email pour envoyer votre message.",
    barberOptions: ["Peu importe", "Chris", "Yassin", "Rachid"],
    serviceOptions: ["Coupe de cheveux", "Barbe", "Rasage traditionnel", "Coupe + barbe", "Coupe enfant (jusqu'à 10 ans)", "Coloration / mèches", "Shampoing & soin (extra)", "Épilation cire joues (extra)"]
  },
  nl: {
    title: "Mr Chris | Barbershop Brussel",
    navHome: "Home",
    navAbout: "Over ons",
    navServices: "Diensten",
    navGallery: "Galerij",
    navBooking: "Reserveren",
    navContact: "Contact",
    navBookNow: "Boek nu",
    floatingBooking: "Boeken",
    heroBadge: "Home",
    heroTitle: "Mr Chris - Barbershop in Brussel",
    heroSubtitle: "Herenkapsalon gelegen aan Rue de la Montagne 29, in het hart van Brussel, vlak bij de Grote Markt.",
    heroSubtitle2: "Of je nu komt voor een moderne fade, een klassieke snit, een traditionele scheerbeurt of een verzorgde baard, je wordt verwelkomd in een warme en gezellige zaak op mensenmaat.",
    heroSubtitle3: "Ons doel: de identiteit van elke man naar voren brengen met precisie en stijl. Barbier zijn betekent meer dan haar knippen: het is begrijpen wie je bent en benadrukken wat je uniek maakt.",
    homeStoryLabel: "Home",
    homeStoryTitle: "De Mr Chris ervaring",
    heroPrompt: "Klaar om je stijl te onthullen?",
    heroCtaLine: "Boek nu en beleef de Mr Chris ervaring",
    heroPrimaryBtn: "Maak een afspraak",
    heroSecondaryBtn: "Bekijk diensten",
    heroQuickTitle: "Snelle reservatie",
    heroQuickText: "Kies kapper, dienst, datum en uur in minder dan een minuut.",
    heroQuickBtn: "Nu reserveren",
    statYearsLabel: "Jaar ervaring",
    statClientsLabel: "Tevreden klanten",
    statStyleLabel: "Maatwerk",
    aboutLabel: "Over",
    aboutTitle: "Ik ben Chris, kapper-barbier gespecialiseerd in de mannenwereld.",
    aboutP1: "Na meer dan tien jaar opleiding, ervaring en hard werk heb ik beslist mijn eigen salon te openen, volledig door mij bedacht en toegewijd aan mannen. Elk detail, elk hulpmiddel en elke vierkante meter is doordacht en met inzet opgebouwd.",
    aboutP2: "Mr Chris is veel meer dan een gewone barbershop: het is het resultaat van passie, vastberadenheid en intens werk. Vandaag heb ik de eer mijn klanten te ontvangen in een ruimte die mijn visie op barbering weerspiegelt: een uniek resultaat dat bij jou past.",
    aboutCommitTitle: "Mijn expertise",
    aboutSkill1: "Moderne en klassieke snitten",
    aboutSkill2: "Nauwkeurig gesculpteerde baarden",
    aboutSkill3: "Traditionele barbertechnieken",
    aboutSkill4: "Aangepast aan elk gezicht en elke stijl",
    aboutSkill5: "Meche/kleuring",
    aboutP3: "Ik koos voor dit vak omdat het mijn passie is: stijl, zelfvertrouwen en een unieke uitstraling geven aan elke man die in mijn stoel zit.",
    aboutP4: "Mijn engagement is eenvoudig: de persoonlijkheid van iedereen versterken en laten zien wat hem anders maakt.",
    servicesLabel: "Diensten / Aanbod",
    servicesTitle: "Lanceringsaanbod en diensten op maat",
    servicesIntro: "Van klassiek tot modern: elke service wordt aangepast aan je gezicht, stijl en ritme. Doorgestreepte prijzen zijn de oorspronkelijke tarieven.",
    galleryLabel: "Galerij / Resultaten",
    galleryTitle: "Van stijl tot detail, elke snit vertelt een verhaal.",
    galleryIntro: "Het resultaat van ons vakmanschap, zodat elke man zich op zijn plaats voelt.",
    galleryNote: "(Foto's voor/na inbegrepen)",
    videoTitle1: "Style clip #01",
    videoText1: "Video-placeholder: progressieve fade transformatie.",
    videoTitle2: "Style clip #02",
    videoText2: "Video-placeholder: baardcontouren en afwerking met mes.",
    bookingLabel: "Reservatie",
    bookingTitle: "Reserveer je tijdslot in enkele klikken",
    bookingIntro: "Afspraken worden beheerd via ons partnerplatform, met directe bevestiging.",
    bookingPolicyTitle: "Afsprakenbeleid",
    bookingPolicy: "Bij annulatie of wijziging vragen we minstens 24 uur op voorhand te verwittigen, zodat het tijdslot vrij kan komen voor een andere klant.",
    bookingExternalTitle: "Online reservatie",
    bookingExternalIntro: "Afspraken verlopen via ons partnerplatform. Klik op de knop hieronder om je dienst en tijdslot te kiezen.",
    bookingPoint1: "1. Kies de dienst die bij je past.",
    bookingPoint2: "2. Selecteer datum, uur en barber.",
    bookingPoint3: "3. Ontvang automatisch je bevestiging.",
    bookingExternalBtn: "Ga naar reservatie",
    bookingExternalNote: "Heb je nog geen actieve reservatielink? Vervang dan gewoon de URL in assets/js/app.js.",
    contactLabel: "Contact",
    contactTitle: "Kom langs of neem contact op",
    contactIntro: "Met of zonder afspraak. We verwelkomen je van maandag tot zaterdag van 10u tot 20u.",
    contactCardAddressTitle: "Adres",
    contactCardRoute: "Route plannen",
    contactCardPhoneTitle: "Telefoon",
    contactCardEmailTitle: "E-mail",
    mapTitle: "Salonkaart",
    formFirstName: "Voornaam",
    formLastName: "Naam",
    formEmail: "E-mailadres",
    formPhone: "Telefoonnummer",
    formBarber: "Barbier",
    formService: "Dienst",
    formDate: "Datum",
    formTime: "Uur",
    formMessage: "Details (optioneel)",
    formSubmitBooking: "Mijn aanvraag bevestigen",
    formSubmitContact: "Bericht versturen",
    modalKicker: "Snelle reservatie",
    modalTitle: "Reserveer je tijdslot nu",
    footerTagline: "De identiteit van elke man versterken met precisie en stijl.",
    footerHoursTitle: "Openingsuren",
    footerHoursWeek: "Maandag tot zaterdag: 10:00 - 20:00",
    footerHoursSun: "Zondag: gesloten",
    footerWalkIn: "Met of zonder reservatie",
    footerSocialTitle: "Social",
    toastBooking: "Je e-mailclient wordt geopend om je reservatie af te ronden.",
    toastContact: "Je e-mailclient wordt geopend om je bericht te verzenden.",
    barberOptions: ["Maakt niet uit", "Chris", "Yassin", "Rachid"],
    serviceOptions: ["Herenknipbeurt", "Baard", "Traditionele scheerbeurt", "Knipbeurt + baard", "Kindersnit (tot 10 jaar)", "Kleuring / highlights", "Shampoo & verzorging (extra)", "Wax wangen (extra)"]
  },
  en: {
    title: "Mr Chris | Barbershop Brussels",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navGallery: "Gallery",
    navBooking: "Booking",
    navContact: "Contact",
    navBookNow: "Book now",
    floatingBooking: "Book",
    heroBadge: "Home",
    heroTitle: "Mr Chris - Barbershop in Brussels",
    heroSubtitle: "Men's barbershop located at Rue de la Montagne 29, in the heart of Brussels, just steps from Grand-Place.",
    heroSubtitle2: "Whether you come for a modern fade, a classic cut, a traditional shave or a shaped beard, you'll be welcomed in a warm and friendly place.",
    heroSubtitle3: "Our goal: reveal each man's identity with precision and style. Being a barber is more than cutting hair: it's understanding who you are and highlighting what makes you unique.",
    homeStoryLabel: "Home",
    homeStoryTitle: "The Mr Chris experience",
    heroPrompt: "Ready to reveal your style?",
    heroCtaLine: "Book now and experience Mr Chris",
    heroPrimaryBtn: "Book an appointment",
    heroSecondaryBtn: "See services",
    heroQuickTitle: "Quick booking",
    heroQuickText: "Choose barber, service, date and time in less than a minute.",
    heroQuickBtn: "Book now",
    statYearsLabel: "Years experience",
    statClientsLabel: "Styled clients",
    statStyleLabel: "Tailored",
    aboutLabel: "About",
    aboutTitle: "My name is Chris, a barber specialized in men's grooming.",
    aboutP1: "After more than ten years of learning, experience and hard work, I decided to create my own salon, entirely designed by me and dedicated to men. Every detail, every tool and every square meter has been carefully built with determination.",
    aboutP2: "Mr Chris is much more than a simple barbershop: it is the result of passion, determination and intense work. Today, I have the honor of welcoming my clients into a space that reflects my vision of barbering: a unique result that fits you.",
    aboutCommitTitle: "My expertise",
    aboutSkill1: "Modern and classic cuts",
    aboutSkill2: "Precisely sculpted beards",
    aboutSkill3: "Traditional barber techniques",
    aboutSkill4: "Adapted to every face and every style",
    aboutSkill5: "Highlights/coloring",
    aboutP3: "I chose this profession because it drives me: giving style, confidence and a unique look to every man who sits in my chair.",
    aboutP4: "My commitment is simple: highlight each personality and reveal what makes every client different.",
    servicesLabel: "Services",
    servicesTitle: "Launch offer and tailored services",
    servicesIntro: "From classic to modern, every service is adapted to your face, style and pace. Striked prices indicate the initial rates.",
    galleryLabel: "Gallery / Results",
    galleryTitle: "From style to detail, every cut tells a story.",
    galleryIntro: "The result of our know-how, so that every man feels in the right place.",
    galleryNote: "(Before/after photos included)",
    videoTitle1: "Style clip #01",
    videoText1: "Video placeholder: progressive fade transformation.",
    videoTitle2: "Style clip #02",
    videoText2: "Video placeholder: beard contour and blade finish.",
    bookingLabel: "Booking",
    bookingTitle: "Book your slot in just a few clicks",
    bookingIntro: "Appointments are handled through our partner booking platform with instant confirmation.",
    bookingPolicyTitle: "Appointment policy",
    bookingPolicy: "In case of cancellation or modification, please notify us at least 24 hours in advance so the slot can be offered to another client.",
    bookingExternalTitle: "Online booking",
    bookingExternalIntro: "Appointments are managed on our partner platform. Click below to choose your service and time slot.",
    bookingPoint1: "1. Choose the service that fits you best.",
    bookingPoint2: "2. Select date, time and barber.",
    bookingPoint3: "3. Receive your confirmation automatically.",
    bookingExternalBtn: "Go to booking",
    bookingExternalNote: "If your booking link is not active yet, just replace the URL in assets/js/app.js.",
    contactLabel: "Contact",
    contactTitle: "Visit the salon or contact us",
    contactIntro: "With or without booking. Open Monday to Saturday from 10am to 8pm.",
    contactCardAddressTitle: "Address",
    contactCardRoute: "Get directions",
    contactCardPhoneTitle: "Phone",
    contactCardEmailTitle: "Email",
    mapTitle: "Salon map",
    formFirstName: "First name",
    formLastName: "Last name",
    formEmail: "Email address",
    formPhone: "Phone number",
    formBarber: "Barber",
    formService: "Service",
    formDate: "Date",
    formTime: "Time",
    formMessage: "Details (optional)",
    formSubmitBooking: "Confirm my request",
    formSubmitContact: "Send message",
    modalKicker: "Express booking",
    modalTitle: "Lock your slot now",
    footerTagline: "Reveal every man's identity with precision and style.",
    footerHoursTitle: "Opening hours",
    footerHoursWeek: "Monday to Saturday: 10:00 - 20:00",
    footerHoursSun: "Sunday: closed",
    footerWalkIn: "Walk-ins welcome",
    footerSocialTitle: "Social",
    toastBooking: "Opening your email app to finalize booking.",
    toastContact: "Opening your email app to send your message.",
    barberOptions: ["No preference", "Chris", "Yassin", "Rachid"],
    serviceOptions: ["Haircut", "Beard", "Traditional shave", "Haircut + beard", "Kid haircut (up to 10 years)", "Color / highlights", "Shampoo & care (extra)", "Cheek wax (extra)"]
  }
};

const dom = {
  html: document.documentElement,
  title: document.querySelector("title"),
  mobileMenuBtn: document.getElementById("mobileMenuBtn"),
  mobileMenu: document.getElementById("mobileMenu"),
  header: document.getElementById("siteHeader"),
  servicesGrid: document.getElementById("servicesGrid"),
  galleryGrid: document.getElementById("galleryGrid"),
  toast: document.getElementById("toast"),
  scrollProgress: document.getElementById("scrollProgress")
};

const state = { lang: localStorage.getItem("mrchris_lang") || "fr" };
const BOOKING_URL = "https://example.com/votre-lien-reservation";
const contactTargetEmail = "info@mrchris.be";
const contactCcEmail = "mrchris.barbershop@gmail.com";

function escapeHtml(input) {
  return String(input).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function applyTranslations(lang) {
  const dict = i18n[lang] || i18n.fr;
  state.lang = lang;
  dom.html.lang = lang;
  dom.title.textContent = dict.title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  renderServices();
  renderGallery();
  refreshCounterLocale(lang);
  localStorage.setItem("mrchris_lang", lang);
}

function renderServices() {
  if (!dom.servicesGrid) return;
  const translatedGroup = localizedContent[state.lang] || {};
  const translated = translatedGroup.services || [];
  const cards = serviceCards.map((item, index) => Object.assign({}, item, translated[index] || {}));

  dom.servicesGrid.innerHTML = cards
    .map((item, index) => {
      const delay = 60 * ((index % 3) + 1);
      const showOld = item.oldPrice && item.oldPrice !== item.newPrice;
      return `
        <article class="service-card reveal" data-delay="${delay}">
          <span class="service-badge">${escapeHtml(item.badge)}</span>
          <h3 class="service-title">${escapeHtml(item.title)}</h3>
          <p class="service-desc">${escapeHtml(item.desc)}</p>
          <div class="service-meta">
            <span class="service-duration">${escapeHtml(item.duration)}</span>
            <span class="price-wrap">
              ${showOld ? `<span class="price-old">${escapeHtml(item.oldPrice)}</span>` : ""}
              <span class="price-new">${escapeHtml(item.newPrice)}</span>
            </span>
          </div>
        </article>
      `;
    })
    .join("");
  observeReveals();
}

function renderGallery() {
  if (!dom.galleryGrid) return;
  const translatedGroup = localizedContent[state.lang] || {};
  const translated = translatedGroup.gallery || [];
  const cards = galleryCards.map((item, index) => Object.assign({}, item, translated[index] || {}));

  dom.galleryGrid.innerHTML = cards
    .map((item, index) => {
      const delay = 70 * ((index % 3) + 1);
      return `
        <article class="gallery-card reveal" data-delay="${delay}">
          <div class="gallery-images">
            <figure>
              <img src="${escapeHtml(item.beforeImg)}" alt="${escapeHtml(item.title)} - ${escapeHtml(item.beforeLabel)}" loading="lazy" />
              <span class="gallery-tag">${escapeHtml(item.beforeLabel)}</span>
            </figure>
            <figure>
              <img src="${escapeHtml(item.afterImg)}" alt="${escapeHtml(item.title)} - ${escapeHtml(item.afterLabel)}" loading="lazy" />
              <span class="gallery-tag">${escapeHtml(item.afterLabel)}</span>
            </figure>
          </div>
          <div class="gallery-content">
            <h3 class="gallery-title">${escapeHtml(item.title)}</h3>
            <p class="gallery-text">${escapeHtml(item.text)}</p>
          </div>
        </article>
      `;
    })
    .join("");
  observeReveals();
}

function updateLanguageButtons() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.langBtn === state.lang);
  });
}

function initLanguageSwitch() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const requested = btn.dataset.langBtn;
      if (!i18n[requested]) return;
      applyTranslations(requested);
      updateLanguageButtons();
    });
  });

  const selected = i18n[state.lang] ? state.lang : "fr";
  applyTranslations(selected);
  updateLanguageButtons();
}

function initMenu() {
  if (!dom.mobileMenuBtn || !dom.mobileMenu) return;
  dom.mobileMenuBtn.addEventListener("click", () => dom.mobileMenu.classList.toggle("hidden"));
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", () => dom.mobileMenu.classList.add("hidden"));
  });
}

function initBookingLinks() {
  document.querySelectorAll("[data-booking-link]").forEach((link) => {
    link.setAttribute("href", BOOKING_URL);
  });
}

function initHeaderEffects() {
  const onScroll = () => {
    const y = window.scrollY;
    dom.header.classList.toggle("header-scrolled", y > 8);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? (y / docHeight) * 100 : 0;
    dom.scrollProgress.style.width = `${Math.min(100, ratio)}%`;

    document.querySelectorAll("[data-parallax]").forEach((node) => {
      const speed = Number(node.dataset.parallax || 0.1);
      node.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

let revealObserver;
function observeReveals() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("in-view"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target;
          if (target.dataset.delay) target.style.setProperty("--delay", `${target.dataset.delay}ms`);
          target.classList.add("in-view");
          revealObserver.unobserve(target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
    );
  }

  revealItems.forEach((item) => {
    if (!item.classList.contains("in-view")) revealObserver.observe(item);
  });
}

function initCounterAnimation() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!("IntersectionObserver" in window)) {
    counters.forEach((c) => (c.textContent = c.dataset.counter || "0"));
    return;
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target, Number(entry.target.dataset.counter || 0));
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.7 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

function animateCounter(el, target) {
  const duration = 1200;
  const start = performance.now();
  const locale = state.lang === "nl" ? "nl-BE" : state.lang === "en" ? "en-GB" : "fr-BE";

  function tick(now) {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(target * eased).toLocaleString(locale);
    if (progress < 1) {
      requestAnimationFrame(tick);
      return;
    }
    el.dataset.counted = "true";
  }

  requestAnimationFrame(tick);
}

function refreshCounterLocale(lang) {
  const locale = lang === "nl" ? "nl-BE" : lang === "en" ? "en-GB" : "fr-BE";
  document.querySelectorAll("[data-counter]").forEach((counter) => {
    if (counter.dataset.counted === "true") counter.textContent = Number(counter.dataset.counter || 0).toLocaleString(locale);
  });
}

function initTiltCards() {
  document.querySelectorAll(".tilt-card").forEach((card) => {
    const damp = 12;
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) * 2 - 1) * -damp;
      const rotateY = ((x / rect.width) * 2 - 1) * damp;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    });
  });
}

function showToast(message) {
  if (!dom.toast) return;
  dom.toast.textContent = message;
  dom.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => dom.toast.classList.remove("show"), 2800);
}

function initFormHandlers() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const dict = i18n[state.lang] || i18n.fr;
    const fullName = `${data.get("firstName") || ""} ${data.get("lastName") || ""}`.trim();
    const subject = `[Contact Site Mr Chris] ${fullName || "Nouveau message"}`;
    const body = [
      `Nom: ${data.get("lastName") || ""}`,
      `Prénom: ${data.get("firstName") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Téléphone: ${data.get("phone") || ""}`,
      `Message: ${data.get("message") || ""}`
    ].join("\r\n");

    const mailto = `mailto:${contactTargetEmail}?cc=${encodeURIComponent(contactCcEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast(dict.toastContact);
    window.location.href = mailto;
    contactForm.reset();
  });
}

function init() {
  initBookingLinks();
  initLanguageSwitch();
  initMenu();
  initHeaderEffects();
  observeReveals();
  initCounterAnimation();
  initTiltCards();
  initFormHandlers();
}

init();
