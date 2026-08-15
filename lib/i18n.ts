export type Lang = "en" | "ru";

/** The site has two audiences and one route per audience.
 *  "home"     — the visitor. What COBA is, who you'll meet, why you'd come.
 *  "partners" — the collaborator. Residency, sponsorship, freelance practice.
 *  Header, footer and the enquiry form all read this to pick their copy. */
export type Page = "home" | "partners";

/** A hero footer fact. `count` opts the number into the scroll count-up. */
type Fact = { label: string; value: string; count?: number };

const en = {
  meta: {
    title: "COBA — A Premium Community Hub in Abu Dhabi",
    description:
      "COBA is a premium community hub in Nation Towers Mall, Abu Dhabi, where people, ideas and opportunities come together — for families, creators, professionals, clubs and communities.",
    ogTitle: "COBA — Create. Explore. Connect.",
    ogDescription:
      "A premium community hub in Abu Dhabi where people, ideas and opportunities come together.",
    ogLocale: "en_AE",
  },
  metaPartners: {
    title: "Work with COBA — Residents, Collaborators, Sponsors",
    description:
      "Run a club, class, community or brand? Take a standing slot at COBA — a permanent address in Nation Towers Mall, Abu Dhabi, with the audience already in the building.",
    ogTitle: "Work with COBA",
    ogDescription:
      "Bring your club, class or community to a room that is already full.",
  },
  header: {
    homeLabel: "COBA — home",
    /* Two anchors, never more. Everything else on these pages is found by
       scrolling or from the footer — a nav bar that lists every section is a
       table of contents, not navigation. */
    navHome: [
      { href: "#meet", label: "Who You'll Meet" },
      { href: "#happens", label: "What's On" },
    ],
    navPartners: [
      { href: "#roles", label: "Who We Work With" },
      { href: "#residency", label: "The Model" },
    ],
    /* The one link that changes route, kept visually apart from the anchors. */
    crossHome: "Work with us",
    crossPartners: "Visit the hub",
    ctaHome: "Plan your visit",
    ctaPartners: "Start a conversation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langSwitchLabel: "Language",
  },
  hero: {
    title: ["Where people, ideas", "and opportunities meet."],
    lede: "A premium community hub in Nation Towers Mall, Abu Dhabi — for families, creators, professionals, clubs and communities.",
    ctaPrimary: "Plan your visit",
    ctaPrimaryHref: "#visit",
    ctaSecondary: "What's on",
    ctaSecondaryHref: "#happens",
    facts: [
      { label: "Experience", value: "years of community", count: 15 },
      { label: "Address", value: "Nation Towers Mall, 1st Floor" },
      { label: "Open", value: "Seven days a week" },
    ] as Fact[],
  },
  voice: { create: "Create", explore: "Explore", connect: "Connect" },
  idea: {
    num: "01",
    title: "The Idea",
    h2: ["More than a venue.", "A place to belong, connect and grow."],
    place: "Nation Towers Mall, Abu Dhabi",
    p1: "A premium community hub where people from different cultures, backgrounds and professions come together to inspire one another and build something meaningful.",
    p2: "Families, clubs, professionals, creators, entrepreneurs and communities — all under one roof, all part of the same ecosystem.",
    imgAlt:
      "A resident leads a session at COBA, sketching on an easel while a group listens around an oak table.",
  },
  mission: {
    eyebrow: "Our mission",
    lines: [
      "Every talent is valued.",
      "Every connection matters.",
      "Every connection has the potential to become an opportunity.",
    ],
    ar: "كل موهبة لها قيمة، وكل صلة فرصة",
  },
  meet: {
    num: "02",
    title: "Who You'll Meet",
    h2: "Who you'll meet at COBA.",
    body: "COBA is an ecosystem, not an activity centre. On any given week the room holds all of these at once — and that is exactly the point.",
    items: [
      {
        label: "Families",
        ar: "عائلات",
        note: "Weekends, workshops and mornings that work for every age at once.",
      },
      {
        label: "Children & Teens",
        ar: "أطفال ويافعون",
        note: "Art, science, chess and clubs where a talent gets discovered.",
      },
      {
        label: "Creators",
        ar: "مبدعون",
        note: "Artists, makers and photographers with somewhere to show the work.",
      },
      {
        label: "Professionals",
        ar: "مهنيون",
        note: "Evening meet-ups, skill shares and talks among peers.",
      },
      {
        label: "Entrepreneurs",
        ar: "روّاد أعمال",
        note: "Introductions that become collaborations, and collaborations that become work.",
      },
      {
        label: "Community Leaders",
        ar: "قادة المجتمع",
        note: "People who gather others, given a permanent address to do it from.",
      },
      {
        label: "Clubs & Associations",
        ar: "أندية وجمعيات",
        note: "Book clubs, cultural groups and hobby circles with a standing place in the week.",
      },
      {
        label: "Women's Groups",
        ar: "مجموعات نسائية",
        note: "Circles, mornings and networks built around one another.",
      },
    ],
    strandEyebrow: "What happens between them",
    strand: [
      "Private gatherings",
      "Networking",
      "Talks",
      "Introductions",
      "Collaborations",
    ],
  },
  room: {
    num: "03",
    title: "In the Room",
    h2: [
      "COBA is more than a beautiful space.",
      "It is about the people who bring it to life.",
    ],
    body: "A room only becomes a hub when someone fills it. These are the people COBA is built for — and the reason every image here has someone in it.",
    rule: "Every hero image contains people. It is a rule, not a preference.",
    shots: [
      { img: "room-laughing", cap: "People laughing" },
      { img: "act-science", cap: "Teen science sessions" },
      { img: "room-artists", cap: "Artists creating" },
      { img: "act-chess", cap: "Chess evenings" },
      { img: "room-children", cap: "Children building" },
      { img: "act-lego", cap: "LEGO builders" },
      { img: "room-coffee", cap: "Coffee conversations" },
      { img: "act-etiquette", cap: "Etiquette classes" },
      { img: "room-parents", cap: "Parents talking" },
      { img: "act-mumtoddler", cap: "Mum & toddler mornings" },
      { img: "room-networking", cap: "Business networking" },
      { img: "act-boardgames", cap: "Board game nights" },
    ],
  },
  happens: {
    num: "04",
    title: "What's On",
    cards: [
      {
        idx: "One",
        title: "Classes & workshops",
        ar: "دورات وورش عمل",
        body: "Art, craft and skills sessions for adults and children — weekly, taught by practitioners who know their craft.",
        media: { type: "video" as const, src: "loop-craft" },
      },
      {
        idx: "Two",
        title: "Clubs & community",
        ar: "أندية ومجتمع",
        body: "Book clubs, women's circles and cultural groups, each with a permanent home and a standing place in the week.",
        media: { type: "image" as const, src: "club-community" },
      },
      {
        idx: "Three",
        title: "Meet-ups & talks",
        ar: "لقاءات وحوارات",
        body: "Evening gatherings, introductions and skill shares — peers in a circle, not a lecture.",
        media: { type: "video" as const, src: "loop-majlis" },
      },
    ],
    noteEyebrow: "How the week works",
    noteBody:
      "Every session keeps a fixed slot, so you always know where to find it. The week is announced on Instagram and posted at reception — walk in, or write ahead and we will tell you which hour suits you.",
  },
  children: {
    imgAlt:
      "Children painting and shaping clay at the COBA children's art club, with two teachers helping.",
    eyebrow: "Our community",
    h2: "A place where children discover their talents — and adults discover connections, friendships and opportunities.",
    tierLine1: "Children's art club · Every Saturday",
    tierLine2: "Nation Towers Mall, Abu Dhabi",
  },
  founders: {
    num: "05",
    title: "Fifteen Years",
    portraitAlt:
      "Hana Kash and Natalia Scully, co-founders of COBA, beside the owl mark on a plaster wall.",
    plateCaption: "The founders",
    h2: "15 Years of Experience. A New Chapter in Abu Dhabi.",
    quote: "A room only becomes a hub when someone tends it.",
    p1: "For more than fifteen years we have built and nurtured a thriving community hub in Ireland — a place where children discovered their talents, parents found friendships, professionals collaborated, and ideas turned into opportunities.",
    p2: "Today we are bringing that same spirit to Abu Dhabi.",
    railLabel: "From Ireland to Abu Dhabi",
    rail: [
      { place: "Ireland", note: "Fifteen years of community" },
      { place: "Abu Dhabi", note: "Nation Towers Mall · August 2026" },
    ],
    people: [
      { name: "Hana Kash", role: "Co-founder" },
      { name: "Natalia Scully", role: "Co-founder" },
    ],
    note: "Between them, fifteen years of building the community COBA is modelled on — and the conviction that a room only becomes a hub when someone tends it.",
  },
  house: {
    shopfrontAlt:
      "The COBA shopfront at Nation Towers Mall — black metal lettering and the owl mark on beige brick.",
    scrollHint: "Scroll to step inside",
    eyebrow: "Nation Towers Mall, 1st Floor · Abu Dhabi",
    h2: ["A room you'll", "photograph unasked."],
    body: "Lime plaster, light oak, brushed brass. Open seven days.",
    specs: [
      ["Capacity", "70+ guests"],
      ["Configurations", "Coffee circle, workshop or lounge"],
      ["On arrival", "Reception & concierge"],
      ["Between sessions", "Materials kept on site"],
    ],
  },
  /* Visitor enquiry — the form on the home page. */
  visit: {
    eyebrow: "The invitation",
    h2: "Come and see the house.",
    lede: "Drop in, join a session, or bring the family for the morning. Tell us what you are looking for and we will point you to the right hour of the week.",
    findUs: "Find us",
    address: [
      "Nation Towers Mall, 1st Floor",
      "Abu Dhabi, United Arab Emirates",
    ],
    social: "Social",
    open: "Open",
    openValue: "Seven days a week",
    formEyebrow: "Plan your visit",
    nameLabel: "Your name",
    orgLabel: "Your email or phone",
    tierLabel: "What brings you to COBA?",
    tiers: [
      "Classes & workshops",
      "Clubs & community",
      "Children & teens",
      "Meet-ups, talks & networking",
      "A private gathering",
      "Just looking around",
    ],
    messageLabel: "Anything you would like us to know?",
    submit: "Send",
    sentNote: "Your mail app should now be open with the message ready to send.",
    unsentNote: "Opens in your own mail app. This site stores nothing.",
    mailSubjectPrefix: "Visit enquiry — ",
    mailFields: {
      name: "Name",
      org: "Email or phone",
      tier: "Interested in",
    },
  },
  /* The one place the home page speaks to collaborators, and the door to /partners. */
  partnerStrip: {
    eyebrow: "Work with COBA",
    h2: "Run a club, class or community? Bring it to COBA.",
    body: "Residents, collaborators, sponsors and freelancers take a standing slot in the week — with the audience already in the building.",
    cta: "Work with us",
  },
  partners: {
    hero: {
      title: ["Bring what you do", "to a room that's already full."],
      lede: "For clubs, instructors, collaborators, sponsors and freelancers. You bring the talent — COBA holds the address, the audience and everything around it.",
      ctaPrimary: "Start a conversation",
      ctaPrimaryHref: "#apply",
      ctaSecondary: "How it works",
      ctaSecondaryHref: "#residency",
      facts: [
        { label: "Formats", value: "Residency, collaboration or sponsorship" },
        { label: "Basis", value: "Per event, per session or revenue share" },
        { label: "Commitment", value: "No lock-in, no tenancy" },
      ] as Fact[],
    },
    roles: {
      num: "01",
      title: "Who We Work With",
      h2: "Four ways to work with COBA.",
      body: "A residency is the best known of them, but it is not the only one. Every arrangement below is built on the same thing: a permanent address and a community that already turns up.",
      items: [
        [
          "Residents & clubs",
          "Take a recurring slot in the week and keep it — the same room, the same hour, the same members.",
        ],
        [
          "Collaborators",
          "Co-host a workshop, a series or a whole season with COBA, and share the audience in both directions.",
        ],
        [
          "Sponsors & brands",
          "Put your name to a programme that a real community attends, week after week, rather than a one-night activation.",
        ],
        [
          "Freelancers & practitioners",
          "Teach, coach or consult from a premium address without signing a lease or hiring a room by the hour.",
        ],
      ],
    },
  },
  why: {
    num: "02",
    title: "Why COBA",
    h2Lead: "A function room is somewhere you leave. ",
    h2Em: "COBA is somewhere you belong.",
    body: "Everywhere else you rent the room and bring the audience. Here, ",
    bodyStrong: "the audience is already in the building.",
    quote: "We are not renting out a space — we are building a relationship.",
    cite: "COBA — Founders",
    reasons: [
      ["One", "A permanent community", "An address, not a booking."],
      ["Two", "Recurring residency", "The same room, the same hour, every week."],
      ["Three", "A shared audience", "The room is full before you arrive."],
      ["Four", "Cross-promotion", "Our following becomes yours."],
      ["Five", "Collaboration by design", "Residents find residents."],
      ["Six", "Design worth arriving for", "A room your members photograph unasked."],
      ["Seven", "A premium experience", "You bring the talent. We hold the rest."],
    ],
  },
  model: {
    num: "03",
    title: "The Model",
    arabic: "النموذج",
    h2: ["A booking ends.", "An address does not."],
    rentLabel: "Renting a room",
    residencyLabel: "A COBA residency",
    rent: [
      "A new space each season",
      "Paid by the hour, empty or full",
      "The audience is yours to find",
      "Materials packed away",
      "Members told the address each time",
    ],
    residency: [
      "One permanent address",
      "A standing slot in the week",
      "A room full before you arrive",
      "Materials stored on site",
      "Members who always know where to find you",
    ],
    kicker:
      "One address. A standing hour. Members who always know where to find you.",
  },
  tiers: {
    num: "04",
    title: "Residency Formats",
    h2: "Choose your hour of the day.",
    body: "Three hours of the day, seven days of the week. A resident takes one and keeps it — the same room, the same hour, every week.",
  },
  week: {
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    tiers: [
      {
        tier: "Tier A",
        hours: "09:00 — 13:00",
        name: "Morning sanctuary",
        suits: "Wellness, parent and child, book clubs.",
      },
      {
        tier: "Tier B",
        hours: "14:00 — 17:30",
        name: "Afternoon salon",
        suits: "Masterclasses and youth enrichment.",
      },
      {
        tier: "Tier C",
        hours: "18:30 — 22:00",
        name: "Evening gathering",
        suits: "Clubs, meet-ups and cultural circles.",
      },
    ],
    taken: { "2-0": "Art Club", "1-5": "Children's Art Club" },
    every: "Every",
    yours: "Yours",
    panelEyebrow: "The residency model",
    panelName: "Take an hour. Keep it.",
    panelSuits:
      "Choose any hour of any day — it becomes your standing slot, week after week. The same room, the same hour, the same members.",
    hintClaimed: "That hour is yours every week. Enquire to make it real.",
    hintUnclaimed: "Choose an hour to see how it works.",
  },
  receive: {
    num: "05",
    title: "What You Receive",
    h2: ["Everything except", "the talent."],
    includedEyebrow: "Included in every residency",
    items: [
      "A permanent address, listed and findable",
      "Marketing, social and your own listing",
      "Concierge, reception and refreshments",
      "The room dressed before your first guest",
      "Introductions, referrals and member perks",
    ],
    kitAlt:
      "The COBA membership kit — brass-foil keycard, olive notebook, black card wallet and a sage mug on lime plaster.",
    kitSpots: [
      { x: 27, y: 25, label: "Black card wallet", side: "right" as const },
      { x: 71, y: 29, label: "Resident notebook", side: "left" as const },
      { x: 24, y: 72, label: "Brass-foil keycard", side: "right" as const },
      { x: 70, y: 73, label: "The house mug", side: "left" as const },
    ],
    partnershipTitle: "A partnership, not a tenancy.",
    partnershipLede:
      "You bring your activity, your facilitators and your voice. We provide the space, the marketing, the community and the clients.",
    partnership: [
      [
        "Flexible basis",
        "Per event, per session, or a revenue share — chosen to suit the activity.",
      ],
      [
        "No lock-in",
        "No fixed employment commitment and no long tenancy to sign.",
      ],
      [
        "Built to last",
        "Long-term partnerships that help you reach more clients and grow.",
      ],
    ],
  },
  welcome: {
    num: "06",
    title: "Who We Welcome",
    h2: "Every community that brings people together.",
    body: "Community groups · Business and networking · Hobby clubs · Language exchange — and any initiative that brings people together.",
    items: [
      { img: "who-women", label: "Women's groups", ar: "مجموعات نسائية" },
      { img: "who-parenting", label: "Parenting communities", ar: "مجتمعات الأمومة" },
      { img: "who-books", label: "Book clubs", ar: "أندية الكتاب" },
      { img: "who-cultural", label: "Cultural associations", ar: "جمعيات ثقافية" },
      { img: "who-creative", label: "Creative collectives", ar: "تجمعات إبداعية" },
      { img: "who-wellness", label: "Wellness communities", ar: "مجتمعات العافية" },
    ],
  },
  /* Partner enquiry — the form on /partners. */
  enquiry: {
    eyebrow: "The invitation",
    h2: "An invitation to make COBA your permanent address.",
    lede: "You bring the community. We hold everything else — a standing place in the week, and a room already full.",
    findUs: "Find us",
    address: [
      "Nation Towers Mall, 1st Floor",
      "Abu Dhabi, United Arab Emirates",
    ],
    social: "Social",
    open: "Open",
    openValue: "Seven days a week",
    formEyebrow: "Start a conversation",
    nameLabel: "Your name",
    orgLabel: "Your community, practice or brand",
    tierLabel: "How would you like to work with us?",
    tiers: [
      "A residency · a recurring slot in the week",
      "A collaboration · co-hosting with COBA",
      "Sponsorship · putting your name to a programme",
      "Freelance practice · teaching or consulting",
      "Not sure yet",
    ],
    messageLabel: "What would you host?",
    submit: "Send enquiry",
    sentNote: "Your mail app should now be open with the enquiry ready to send.",
    unsentNote: "Opens in your own mail app. This site stores nothing.",
    mailSubjectPrefix: "Partnership enquiry — ",
    mailFields: {
      name: "Name",
      org: "Community, practice or brand",
      tier: "Interested in",
    },
  },
  footer: {
    tagline: "Create · Explore · Connect",
    houseEyebrow: "The house",
    houseBody: [
      "Nation Towers Mall, 1st Floor",
      "Abu Dhabi, United Arab Emirates",
      "Open seven days a week",
    ],
    visitEyebrow: "Visit",
    visitLinksHome: [
      { href: "#idea", label: "The idea" },
      { href: "#meet", label: "Who you'll meet" },
      { href: "#happens", label: "What's on" },
      { href: "#fifteen", label: "Fifteen years" },
      { href: "#house", label: "The house" },
    ],
    visitLinksPartners: [
      { href: "#roles", label: "Who we work with" },
      { href: "#why", label: "Why COBA" },
      { href: "#residency", label: "The model" },
      { href: "#formats", label: "Residency formats" },
      { href: "#receive", label: "What you receive" },
    ],
    followEyebrow: "Follow",
    instagram: "Instagram — @cobaabudhabi",
    workWithUs: "Work with COBA",
    backHome: "Back to the hub",
    rights: "All rights reserved.",
  },
};

const ru: typeof en = {
  meta: {
    title: "COBA — премиальный центр сообщества в Абу-Даби",
    description:
      "COBA — премиальный центр сообщества в Nation Towers Mall, Абу-Даби, где встречаются люди, идеи и возможности: для семей, творцов, специалистов, клубов и сообществ.",
    ogTitle: "COBA — Твори. Исследуй. Общайся.",
    ogDescription:
      "Премиальный центр сообщества в Абу-Даби, где встречаются люди, идеи и возможности.",
    ogLocale: "ru_AE",
  },
  metaPartners: {
    title: "Сотрудничество с COBA — резиденты, партнёры, спонсоры",
    description:
      "Ведёте клуб, занятия, сообщество или бренд? Займите постоянный слот в COBA — постоянный адрес в Nation Towers Mall, Абу-Даби, где аудитория уже в здании.",
    ogTitle: "Сотрудничество с COBA",
    ogDescription:
      "Приведите своё дело в зал, который уже полон.",
  },
  header: {
    homeLabel: "COBA — на главную",
    navHome: [
      { href: "#meet", label: "Кого вы встретите" },
      { href: "#happens", label: "Что происходит" },
    ],
    navPartners: [
      { href: "#roles", label: "С кем мы работаем" },
      { href: "#residency", label: "Модель" },
    ],
    crossHome: "Сотрудничество",
    crossPartners: "О центре",
    ctaHome: "Запланировать визит",
    ctaPartners: "Начать разговор",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    langSwitchLabel: "Язык",
  },
  hero: {
    title: ["Где встречаются люди,", "идеи и возможности."],
    lede: "Премиальный центр сообщества в Nation Towers Mall, Абу-Даби — для семей, творцов, специалистов, клубов и сообществ.",
    ctaPrimary: "Запланировать визит",
    ctaPrimaryHref: "#visit",
    ctaSecondary: "Что происходит",
    ctaSecondaryHref: "#happens",
    facts: [
      { label: "Опыт", value: "лет сообщества", count: 15 },
      { label: "Адрес", value: "Nation Towers Mall, 1-й этаж" },
      { label: "Открыто", value: "Семь дней в неделю" },
    ] as Fact[],
  },
  voice: { create: "Твори", explore: "Исследуй", connect: "Общайся" },
  idea: {
    num: "01",
    title: "Идея",
    h2: ["Больше, чем площадка.", "Место, где принадлежишь, общаешься и растёшь."],
    place: "Nation Towers Mall, Абу-Даби",
    p1: "Премиальный центр сообщества, где люди разных культур, происхождения и профессий собираются, чтобы вдохновлять друг друга и создавать что-то значимое.",
    p2: "Семьи, клубы, специалисты, творцы, предприниматели и сообщества — под одной крышей, в одной экосистеме.",
    imgAlt:
      "Резидент ведёт занятие в COBA, рисуя на мольберте, пока группа слушает за дубовым столом.",
  },
  mission: {
    eyebrow: "Наша миссия",
    lines: [
      "Ценится любой талант.",
      "Важна каждая связь.",
      "Любая связь может стать возможностью.",
    ],
    ar: "كل موهبة لها قيمة، وكل صلة فرصة",
  },
  meet: {
    num: "02",
    title: "Кого вы встретите",
    h2: "Кого вы встретите в COBA.",
    body: "COBA — это экосистема, а не кружок. В любую неделю все они оказываются в одном зале одновременно — и в этом весь смысл.",
    items: [
      {
        label: "Семьи",
        ar: "عائلات",
        note: "Выходные, мастер-классы и утренние программы сразу для всех возрастов.",
      },
      {
        label: "Дети и подростки",
        ar: "أطفال ويافعون",
        note: "Творчество, наука, шахматы и клубы, где раскрывается талант.",
      },
      {
        label: "Творцы",
        ar: "مبدعون",
        note: "Художники, мастера и фотографы, которым есть где показать работы.",
      },
      {
        label: "Специалисты",
        ar: "مهنيون",
        note: "Вечерние встречи, обмен опытом и беседы среди равных.",
      },
      {
        label: "Предприниматели",
        ar: "روّاد أعمال",
        note: "Знакомства, которые становятся сотрудничеством, а сотрудничество — работой.",
      },
      {
        label: "Лидеры сообществ",
        ar: "قادة المجتمع",
        note: "Те, кто объединяет других, — теперь у них есть постоянный адрес.",
      },
      {
        label: "Клубы и объединения",
        ar: "أندية وجمعيات",
        note: "Книжные клубы, культурные группы и хобби-кружки с постоянным местом в неделе.",
      },
      {
        label: "Женские сообщества",
        ar: "مجموعات نسائية",
        note: "Круги, утренние встречи и сети поддержки друг друга.",
      },
    ],
    strandEyebrow: "Что происходит между ними",
    strand: [
      "Частные встречи",
      "Нетворкинг",
      "Беседы",
      "Знакомства",
      "Сотрудничество",
    ],
  },
  room: {
    num: "03",
    title: "В зале",
    h2: [
      "COBA — это больше, чем красивое пространство.",
      "Это люди, которые его оживляют.",
    ],
    body: "Зал становится центром притяжения только тогда, когда его наполняют люди. Именно для них создан COBA — и поэтому на каждом фото здесь кто-то есть.",
    rule: "На каждом ключевом изображении есть люди. Это правило, а не предпочтение.",
    shots: [
      { img: "room-laughing", cap: "Люди смеются" },
      { img: "act-science", cap: "Научные занятия для подростков" },
      { img: "room-artists", cap: "Художники творят" },
      { img: "act-chess", cap: "Шахматные вечера" },
      { img: "room-children", cap: "Дети мастерят" },
      { img: "act-lego", cap: "Строители LEGO" },
      { img: "room-coffee", cap: "Разговоры за кофе" },
      { img: "act-etiquette", cap: "Уроки этикета" },
      { img: "room-parents", cap: "Родители общаются" },
      { img: "act-mumtoddler", cap: "Утро для мам и малышей" },
      { img: "room-networking", cap: "Деловые знакомства" },
      { img: "act-boardgames", cap: "Вечера настольных игр" },
    ],
  },
  happens: {
    num: "04",
    title: "Что происходит",
    cards: [
      {
        idx: "Один",
        title: "Занятия и мастер-классы",
        ar: "دورات وورش عمل",
        body: "Занятия творчеством, рукоделием и навыками для взрослых и детей — еженедельно, с практиками, знающими своё дело.",
        media: { type: "video" as const, src: "loop-craft" },
      },
      {
        idx: "Два",
        title: "Клубы и сообщества",
        ar: "أندية ومجتمع",
        body: "Книжные клубы, женские круги и культурные объединения — у каждого свой постоянный дом и постоянное место в неделе.",
        media: { type: "image" as const, src: "club-community" },
      },
      {
        idx: "Три",
        title: "Встречи и беседы",
        ar: "لقاءات وحوارات",
        body: "Вечерние встречи, знакомства и обмен опытом — на равных, в кругу, а не с трибуны.",
        media: { type: "video" as const, src: "loop-majlis" },
      },
    ],
    noteEyebrow: "Как устроена неделя",
    noteBody:
      "У каждого занятия свой постоянный слот, поэтому вы всегда знаете, где его найти. Расписание недели публикуется в Instagram и на ресепшене — заходите просто так или напишите заранее, и мы подскажем подходящий час.",
  },
  children: {
    imgAlt:
      "Дети рисуют и лепят из глины в детском арт-клубе COBA, им помогают два педагога.",
    eyebrow: "Наше сообщество",
    h2: "Место, где дети раскрывают свои таланты, а взрослые находят связи, дружбу и возможности.",
    tierLine1: "Детский арт-клуб · Каждую субботу",
    tierLine2: "Nation Towers Mall, Абу-Даби",
  },
  founders: {
    num: "05",
    title: "Пятнадцать лет",
    portraitAlt:
      "Хана Каш и Наталия Скалли, соучредители COBA, у знака совы на оштукатуренной стене.",
    plateCaption: "Основательницы",
    h2: "15 лет опыта. Новая глава в Абу-Даби.",
    quote: "Зал становится центром притяжения только тогда, когда о нём кто-то заботится.",
    p1: "Более пятнадцати лет мы создавали и развивали процветающий центр сообщества в Ирландии — место, где дети раскрывали свои таланты, родители находили друзей, специалисты сотрудничали, а идеи превращались в возможности.",
    p2: "Сегодня мы привозим тот же дух в Абу-Даби.",
    railLabel: "Путь из Ирландии в Абу-Даби",
    rail: [
      { place: "Ирландия", note: "Пятнадцать лет сообщества" },
      { place: "Абу-Даби", note: "Nation Towers Mall · Август 2026" },
    ],
    people: [
      { name: "Hana Kash", role: "Соучредитель" },
      { name: "Natalia Scully", role: "Соучредитель" },
    ],
    note: "Вместе — пятнадцать лет создания сообщества, по образцу которого построен COBA, и убеждённость в том, что зал становится центром притяжения только тогда, когда о нём кто-то заботится.",
  },
  house: {
    shopfrontAlt:
      "Витрина COBA в Nation Towers Mall — чёрные металлические буквы и знак совы на бежевом кирпиче.",
    scrollHint: "Прокрутите, чтобы войти",
    eyebrow: "Nation Towers Mall, 1-й этаж · Абу-Даби",
    h2: ["Зал, который хочется", "сфотографировать без подсказки."],
    body: "Известковая штукатурка, светлый дуб, матовая латунь. Открыто семь дней в неделю.",
    specs: [
      ["Вместимость", "70+ гостей"],
      ["Форматы", "Кофейный круг, мастер-класс или лаунж"],
      ["По прибытии", "Ресепшен и консьерж"],
      ["Между занятиями", "Материалы хранятся на месте"],
    ],
  },
  visit: {
    eyebrow: "Приглашение",
    h2: "Приходите посмотреть.",
    lede: "Загляните, присоединитесь к занятию или приходите всей семьёй на утро. Расскажите, что вам интересно, и мы подскажем подходящий час недели.",
    findUs: "Как нас найти",
    address: [
      "Nation Towers Mall, 1-й этаж",
      "Абу-Даби, Объединённые Арабские Эмираты",
    ],
    social: "Соцсети",
    open: "Часы работы",
    openValue: "Семь дней в неделю",
    formEyebrow: "Запланировать визит",
    nameLabel: "Ваше имя",
    orgLabel: "Ваш e-mail или телефон",
    tierLabel: "Что привело вас в COBA?",
    tiers: [
      "Занятия и мастер-классы",
      "Клубы и сообщества",
      "Дети и подростки",
      "Встречи, беседы и нетворкинг",
      "Частное мероприятие",
      "Просто осмотреться",
    ],
    messageLabel: "Что нам стоит знать?",
    submit: "Отправить",
    sentNote: "Ваше почтовое приложение должно открыться с готовым сообщением.",
    unsentNote: "Откроется в вашем почтовом приложении. Этот сайт ничего не сохраняет.",
    mailSubjectPrefix: "Запрос на визит — ",
    mailFields: {
      name: "Имя",
      org: "E-mail или телефон",
      tier: "Интересует",
    },
  },
  partnerStrip: {
    eyebrow: "Сотрудничество с COBA",
    h2: "Ведёте клуб, занятия или сообщество? Приводите их в COBA.",
    body: "Резиденты, партнёры, спонсоры и фрилансеры занимают постоянный слот в неделе — с аудиторией, которая уже в здании.",
    cta: "Сотрудничать с нами",
  },
  partners: {
    hero: {
      title: ["Приведите своё дело", "в зал, который уже полон."],
      lede: "Для клубов, преподавателей, партнёров, спонсоров и фрилансеров. Вы приносите талант — COBA берёт на себя адрес, аудиторию и всё остальное.",
      ctaPrimary: "Начать разговор",
      ctaPrimaryHref: "#apply",
      ctaSecondary: "Как это работает",
      ctaSecondaryHref: "#residency",
      facts: [
        { label: "Форматы", value: "Резидентство, партнёрство или спонсорство" },
        { label: "Условия", value: "За мероприятие, за сессию или доля от дохода" },
        { label: "Обязательства", value: "Без долгосрочной аренды" },
      ] as Fact[],
    },
    roles: {
      num: "01",
      title: "С кем мы работаем",
      h2: "Четыре способа работать с COBA.",
      body: "Резидентство — самый известный из них, но не единственный. В основе каждого варианта одно и то же: постоянный адрес и сообщество, которое уже приходит.",
      items: [
        [
          "Резиденты и клубы",
          "Займите регулярный слот в неделе и сохраните его за собой — тот же зал, тот же час, те же участники.",
        ],
        [
          "Партнёры",
          "Проводите мастер-класс, серию или целый сезон вместе с COBA и делитесь аудиторией в обе стороны.",
        ],
        [
          "Спонсоры и бренды",
          "Поставьте своё имя на программу, на которую реальное сообщество приходит неделя за неделей, а не на разовую активацию.",
        ],
        [
          "Фрилансеры и практики",
          "Преподавайте, консультируйте или ведите практику по премиальному адресу — без аренды и почасовой оплаты зала.",
        ],
      ],
    },
  },
  why: {
    num: "02",
    title: "Почему COBA",
    h2Lead: "Банкетный зал — место, которое покидают. ",
    h2Em: "COBA — место, которому принадлежишь.",
    body: "Везде и всегда вы арендуете зал и сами приводите аудиторию. Здесь ",
    bodyStrong: "аудитория уже в здании.",
    quote: "Мы не сдаём пространство в аренду — мы выстраиваем отношения.",
    cite: "COBA — основатели",
    reasons: [
      ["Один", "Постоянное сообщество", "Адрес, а не бронирование."],
      ["Два", "Регулярное резидентство", "Тот же зал, тот же час, каждую неделю."],
      ["Три", "Общая аудитория", "Зал полон ещё до вашего прихода."],
      ["Четыре", "Взаимное продвижение", "Наша аудитория становится вашей."],
      ["Пять", "Сотрудничество по замыслу", "Резиденты находят резидентов."],
      ["Шесть", "Дизайн, ради которого стоит приехать", "Зал, который ваши участники фотографируют без подсказки."],
      ["Семь", "Премиальный опыт", "Вы приносите талант. Остальное берём на себя мы."],
    ],
  },
  model: {
    num: "03",
    title: "Модель",
    arabic: "النموذج",
    h2: ["Бронирование заканчивается.", "Адрес — нет."],
    rentLabel: "Аренда зала",
    residencyLabel: "Резидентство в COBA",
    rent: [
      "Новое пространство каждый сезон",
      "Оплата по часам, независимо от заполненности",
      "Аудиторию нужно искать самим",
      "Материалы каждый раз собираются и увозятся",
      "Участникам каждый раз нужно сообщать адрес",
    ],
    residency: [
      "Один постоянный адрес",
      "Постоянное место в расписании недели",
      "Зал полон ещё до вашего прихода",
      "Материалы хранятся на месте",
      "Участники всегда знают, где вас найти",
    ],
    kicker:
      "Один адрес. Постоянный час. Участники, которые всегда знают, где вас найти.",
  },
  tiers: {
    num: "04",
    title: "Форматы резидентства",
    h2: "Выберите свой час дня.",
    body: "Три часа в дне, семь дней в неделе. Резидент выбирает один слот и сохраняет его за собой — тот же зал, тот же час, каждую неделю.",
  },
  week: {
    days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    tiers: [
      {
        tier: "Тариф A",
        hours: "09:00 — 13:00",
        name: "Утреннее убежище",
        suits: "Велнес, занятия родителей с детьми, книжные клубы.",
      },
      {
        tier: "Тариф B",
        hours: "14:00 — 17:30",
        name: "Дневной салон",
        suits: "Мастер-классы и развивающие программы для детей.",
      },
      {
        tier: "Тариф C",
        hours: "18:30 — 22:00",
        name: "Вечерняя встреча",
        suits: "Клубы, встречи и культурные кружки.",
      },
    ],
    taken: { "2-0": "Арт-клуб", "1-5": "Детский арт-клуб" },
    every: "Каждый",
    yours: "Ваш",
    panelEyebrow: "Модель резидентства",
    panelName: "Выберите час. Он останется вашим.",
    panelSuits:
      "Выберите любой час любого дня — он станет вашим постоянным слотом, неделя за неделей. Тот же зал, тот же час, те же участники.",
    hintClaimed: "Этот час ваш каждую неделю. Оставьте заявку, чтобы закрепить его.",
    hintUnclaimed: "Выберите час, чтобы увидеть, как это работает.",
  },
  receive: {
    num: "05",
    title: "Что вы получаете",
    h2: ["Всё, кроме", "самого таланта."],
    includedEyebrow: "Включено в каждое резидентство",
    items: [
      "Постоянный адрес, указанный в списках и легко находимый",
      "Маркетинг, соцсети и собственная карточка в каталоге",
      "Консьерж, ресепшен и угощения",
      "Зал, оформленный к приходу первого гостя",
      "Знакомства, рекомендации и привилегии для участников",
    ],
    kitAlt:
      "Членский набор COBA — карта с латунным тиснением, оливковый блокнот, чёрный картхолдер и кружка шалфейного цвета на известковой штукатурке.",
    kitSpots: [
      { x: 27, y: 25, label: "Чёрный картхолдер", side: "right" as const },
      { x: 71, y: 29, label: "Блокнот резидента", side: "left" as const },
      { x: 24, y: 72, label: "Карта с латунным тиснением", side: "right" as const },
      { x: 70, y: 73, label: "Фирменная кружка", side: "left" as const },
    ],
    partnershipTitle: "Партнёрство, а не аренда.",
    partnershipLede:
      "Вы приносите свою деятельность, своих специалистов и свой голос. Мы предоставляем пространство, маркетинг, сообщество и клиентов.",
    partnership: [
      [
        "Гибкие условия",
        "За мероприятие, за сессию или доля от дохода — в зависимости от формата деятельности.",
      ],
      [
        "Без долгосрочных обязательств",
        "Никакого штатного найма и долгосрочной аренды.",
      ],
      [
        "Рассчитано на долгий срок",
        "Долгосрочное партнёрство, которое помогает вам привлекать больше клиентов и расти.",
      ],
    ],
  },
  welcome: {
    num: "06",
    title: "Кого мы рады видеть",
    h2: "Любое сообщество, которое объединяет людей.",
    body: "Клубы по интересам · Бизнес и нетворкинг · Хобби-клубы · Языковой обмен — и любая инициатива, которая объединяет людей.",
    items: [
      { img: "who-women", label: "Женские сообщества", ar: "مجموعات نسائية" },
      { img: "who-parenting", label: "Родительские сообщества", ar: "مجتمعات الأمومة" },
      { img: "who-books", label: "Книжные клубы", ar: "أندية الكتاب" },
      { img: "who-cultural", label: "Культурные объединения", ar: "جمعيات ثقافية" },
      { img: "who-creative", label: "Творческие коллективы", ar: "تجمعات إبداعية" },
      { img: "who-wellness", label: "Сообщества велнеса", ar: "مجتمعات العافية" },
    ],
  },
  enquiry: {
    eyebrow: "Приглашение",
    h2: "Приглашаем сделать COBA вашим постоянным адресом.",
    lede: "Вы приносите сообщество. Всё остальное — на нас: постоянное место в расписании недели и уже заполненный зал.",
    findUs: "Как нас найти",
    address: [
      "Nation Towers Mall, 1-й этаж",
      "Абу-Даби, Объединённые Арабские Эмираты",
    ],
    social: "Соцсети",
    open: "Часы работы",
    openValue: "Семь дней в неделю",
    formEyebrow: "Начать разговор",
    nameLabel: "Ваше имя",
    orgLabel: "Ваше сообщество, практика или бренд",
    tierLabel: "Как вы хотели бы с нами работать?",
    tiers: [
      "Резидентство · регулярный слот в неделе",
      "Партнёрство · совместные мероприятия с COBA",
      "Спонсорство · ваше имя на программе",
      "Фриланс-практика · преподавание или консультирование",
      "Пока не уверен(а)",
    ],
    messageLabel: "Что бы вы хотели проводить?",
    submit: "Отправить заявку",
    sentNote: "Ваше почтовое приложение должно открыться с готовой заявкой.",
    unsentNote: "Откроется в вашем почтовом приложении. Этот сайт ничего не сохраняет.",
    mailSubjectPrefix: "Заявка на сотрудничество — ",
    mailFields: {
      name: "Имя",
      org: "Сообщество, практика или бренд",
      tier: "Интересует",
    },
  },
  footer: {
    tagline: "Твори · Исследуй · Общайся",
    houseEyebrow: "Дом",
    houseBody: [
      "Nation Towers Mall, 1-й этаж",
      "Абу-Даби, Объединённые Арабские Эмираты",
      "Открыто семь дней в неделю",
    ],
    visitEyebrow: "Разделы",
    visitLinksHome: [
      { href: "#idea", label: "Идея" },
      { href: "#meet", label: "Кого вы встретите" },
      { href: "#happens", label: "Что происходит" },
      { href: "#fifteen", label: "Пятнадцать лет" },
      { href: "#house", label: "Дом" },
    ],
    visitLinksPartners: [
      { href: "#roles", label: "С кем мы работаем" },
      { href: "#why", label: "Почему COBA" },
      { href: "#residency", label: "Модель" },
      { href: "#formats", label: "Форматы резидентства" },
      { href: "#receive", label: "Что вы получаете" },
    ],
    followEyebrow: "Мы в сети",
    instagram: "Instagram — @cobaabudhabi",
    workWithUs: "Сотрудничество с COBA",
    backHome: "Вернуться на главную",
    rights: "Все права защищены.",
  },
};

const DICT: Record<Lang, typeof en> = { en, ru };

export function copy(lang: Lang) {
  return DICT[lang];
}

/** Locale-aware route helpers — `/partners` in English, `/ru/partners` in Russian. */
export function homeHref(lang: Lang) {
  return lang === "ru" ? "/ru" : "/";
}

export function partnersHref(lang: Lang) {
  return lang === "ru" ? "/ru/partners" : "/partners";
}
