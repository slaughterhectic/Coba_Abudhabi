export type Lang = "en" | "ru";

/** The site has two audiences. The customer gets three routes —
 *  "home"     — the world of COBA: what's happening, what you can do.
 *  "children" — What's On for children, incl. birthday parties.
 *  "adults"   — What's On for adults, incl. private events.
 *  The collaborator side stays deliberately minor —
 *  "partners"    — residency, sponsorship, freelance practice (B2B).
 *  "collaborate" — the individual practitioner: a painter, a singer,
 *                  a coach introducing themselves and what they'd host.
 *  Header, footer and the enquiry form all read this to pick their copy. */
export type Page = "home" | "children" | "adults" | "partners" | "collaborate";

/** A hero footer fact. `count` opts the number into the scroll count-up. */
type Fact = { label: string; value: string; count?: number };

const en = {
  meta: {
    title: "COBA — A Creative Community Hub in Abu Dhabi",
    description:
      "A creative community hub for children, families and adults in Abu Dhabi. Discover activities, join workshops, meet your community and create meaningful experiences — all under one roof at Nation Towers Mall.",
    ogTitle: "COBA — Create. Explore. Connect.",
    ogDescription:
      "A creative community hub for children, families and adults in Abu Dhabi — all under one roof.",
    ogLocale: "en_AE",
  },
  metaChildren: {
    title: "What's On for Children — COBA Abu Dhabi",
    description:
      "Kids art club, LEGO, science, chess, etiquette, crafts, mother & toddler mornings and birthday parties for up to 70 guests — every week at COBA, Nation Towers Mall, Abu Dhabi.",
    ogTitle: "What's On for Children at COBA",
    ogDescription:
      "Art, LEGO, science, chess, crafts and birthday parties — a week built for young talent in Abu Dhabi.",
  },
  metaAdults: {
    title: "What's On for Adults — COBA Abu Dhabi",
    description:
      "Floristic workshops, art classes, book club, coffee mornings, image masterclasses, talks, networking and private events — every week at COBA, Nation Towers Mall, Abu Dhabi.",
    ogTitle: "What's On for Adults at COBA",
    ogDescription:
      "Floristry, art, book club, coffee mornings, masterclasses and networking — mornings and evenings for you.",
  },
  metaCollab: {
    title: "Collaborate with COBA — Bring Your Craft",
    description:
      "A painter, a singer, a coach, a maker? Introduce yourself and what you'd host — a masterclass, a weekly session, a performance or a show — at COBA, Nation Towers Mall, Abu Dhabi.",
    ogTitle: "Collaborate with COBA",
    ogDescription:
      "Tell us who you are and what you'd host — the room, the audience and everything around it are already here.",
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
    /* The customer menu the client asked for, in her own order:
       children first, then adults, then about, then contact.
       "Work with COBA" stays outside this list — a careers-style side door. */
    navHome: [
      { href: "/children", label: "For Children" },
      { href: "/adults", label: "For Adults" },
      { href: "#about", label: "About" },
      { href: "#visit", label: "Contact" },
    ],
    navChildren: [
      { href: "#parties", label: "Birthday Parties" },
      { href: "/adults", label: "For Adults" },
      { href: "#visit", label: "Contact" },
    ],
    navAdults: [
      { href: "#private", label: "Private Events" },
      { href: "/children", label: "For Children" },
      { href: "#visit", label: "Contact" },
    ],
    navPartners: [
      { href: "#roles", label: "Who We Work With" },
      { href: "#residency", label: "The Model" },
      { href: "/collaborate", label: "Collaborate" },
    ],
    navCollab: [
      { href: "#who", label: "Who Are You" },
      { href: "#formats", label: "What You'd Host" },
      { href: "/partners", label: "The Residency Model" },
    ],
    /* The one link that changes audience, kept visually apart from the menu. */
    crossHome: "Work with COBA",
    crossPartners: "Visit the hub",
    ctaHome: "Plan your visit",
    ctaPartners: "Start a conversation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langSwitchLabel: "Language",
  },
  hero: {
    title: ["A creative community hub for", "children, families and adults."],
    lede: "Discover activities, join workshops, meet your community and create meaningful experiences — all under one roof in Nation Towers Mall, Abu Dhabi.",
    ctaPrimary: "See what's happening",
    ctaPrimaryHref: "#happening",
    ctaSecondary: "Plan your visit",
    ctaSecondaryHref: "#visit",
    facts: [
      { label: "Experience", value: "years of community", count: 15 },
      { label: "Address", value: "Nation Towers Mall, 1st Floor" },
      { label: "Open", value: "Seven days a week" },
    ] as Fact[],
  },
  /* The hero slideshow — one image per community, so a visitor sees
     themselves in the first three seconds (client ask, 2026-08-16). */
  heroSlides: [
    { img: "hero-kidsart-v3", tag: "Art clubs for children" },
    { img: "hero-birthday-v3", tag: "Kids birthday parties" },
    { img: "hero-family-v3", tag: "Mother & toddler mornings" },
    { img: "hero-ladies-v3", tag: "Workshops for ladies" },
    { img: "hero-networking-v3", tag: "Networking & private events" },
  ],
  voice: { create: "Create", explore: "Explore", connect: "Connect" },
  /* The slideshow the client asked for, twice: "an image for each activity",
     changing as soon as the site opens, so a customer can visualize the week
     before reading a single paragraph of philosophy. */
  happening: {
    num: "01",
    title: "What's Happening",
    eyebrow: "What's happening at COBA",
    h2: ["One roof.", "A week full of things to do."],
    lede: "Kids birthday parties, floristic workshops, art for children and for adults, book club, mother & toddler mornings, image masterclasses, etiquette for kids and teens, art shows, movie nights, networking — this is what you can do at COBA. Join what's already running, or book the room and make one of these your own.",
    prevLabel: "Previous activity",
    nextLabel: "Next activity",
    pauseLabel: "Pause slideshow",
    playLabel: "Play slideshow",
    goToLabel: "Go to slide",
    ofLabel: "of",
    items: [
      { img: "act-birthday-w", cap: "Kids birthday parties", tag: "For children" },
      { img: "act-floristry-w", cap: "Floristic workshops", tag: "For adults" },
      { img: "act-kidsart-v4", cap: "Kids art club", tag: "For children" },
      { img: "act-makeup-v4", cap: "Image masterclasses", tag: "For adults" },
      { img: "act-lego-v3", cap: "LEGO workshops", tag: "For children" },
      { img: "act-bookclub-w", cap: "Book club", tag: "For adults" },
      { img: "act-craft-w", cap: "Art & craft — bags and t-shirts", tag: "For kids & teens" },
      { img: "act-coffee", cap: "Ladies' coffee mornings", tag: "For adults" },
      { img: "act-science-v2", cap: "Science sessions", tag: "For children" },
      { img: "act-adultart-v4", cap: "Adult art classes", tag: "For adults" },
      { img: "act-mumtoddler-v4", cap: "Mother & toddler mornings", tag: "For families" },
      { img: "act-networking", cap: "Networking evenings", tag: "For adults" },
      { img: "act-chess-v2", cap: "Chess club", tag: "For children" },
      { img: "act-artshow-w", cap: "Art shows", tag: "For everyone" },
      { img: "act-etiquette-v4", cap: "Kids & teens etiquette", tag: "For children" },
      { img: "act-movienight-v2", cap: "Movie nights", tag: "For families" },
      { img: "act-boardgames-v2", cap: "Board game nights", tag: "For families" },
    ],
  },
  /* The two customer doors — a child's week or your own. */
  audience: {
    eyebrow: "Find your week",
    childrenCard: {
      title: "What's on for children",
      ar: "للأطفال",
      img: "act-craft-w",
      note: "Art club, LEGO, science, chess, etiquette, crafts, movie nights — and birthday parties the whole house celebrates.",
      cta: "Explore children's activities",
    },
    adultsCard: {
      title: "What's on for adults",
      ar: "للكبار",
      img: "act-floristry-w",
      note: "Floristry, art, book club, coffee mornings, image masterclasses, talks, clubs and networking — mornings and evenings for you.",
      cta: "Explore adult activities",
    },
  },
  /* The room is a bookable space — the site invites the customer to hire
     it, not just to watch the week (client, 2026-08-16: "we are renting
     out the space… we invite them to rent this place"). */
  book: {
    eyebrow: "Make it yours",
    h2: "This room is yours to book.",
    body: "Everything in the slideshow happens right here, in one bookable room. Celebrate a birthday, gather your people for a private evening, or host the workshop you have always wanted to run — up to 70 guests, dressed and ready before you arrive.",
    ctaVisit: "Book it for an occasion",
    ctaHost: "Host your own sessions",
  },
  idea: {
    num: "03",
    title: "About COBA",
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
    num: "04",
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
    num: "05",
    title: "In the Room",
    h2: [
      "COBA is more than a beautiful space.",
      "It is about the people who bring it to life.",
    ],
    body: "A room only becomes a hub when someone fills it. These are the people COBA is built for — and the reason every image here has someone in it.",
    rule: "Every hero image contains people. It is a rule, not a preference.",
    shots: [
      { img: "act-private", cap: "People laughing" },
      { img: "act-science-v2", cap: "Teen science sessions" },
      { img: "act-artists", cap: "Artists creating" },
      { img: "act-chess-v2", cap: "Chess evenings" },
      { img: "act-blocks", cap: "Children building" },
      { img: "act-lego-v3", cap: "LEGO builders" },
      { img: "act-coffee", cap: "Coffee conversations" },
      { img: "act-etiquette-v4", cap: "Etiquette classes" },
      { img: "act-parents", cap: "Parents talking" },
      { img: "act-mumtoddler-v4", cap: "Mum & toddler mornings" },
      { img: "act-networking", cap: "Business networking" },
      { img: "act-boardgames-v2", cap: "Board game nights" },
    ],
  },
  /* The four pillars, copy supplied verbatim by the client (2026-08-16). */
  happens: {
    num: "02",
    title: "What You Can Do",
    h2: "What you can do at COBA.",
    cards: [
      {
        idx: "One",
        title: "Learn",
        ar: "تعلَّم",
        body: "Workshops for children and adults.",
        media: { type: "video" as const, src: "loop-craft" },
      },
      {
        idx: "Two",
        title: "Create",
        ar: "أبدِع",
        body: "Art, music, crafts, creative projects and special experiences.",
        media: { type: "image" as const, src: "act-adultart-v4" },
      },
      {
        idx: "Three",
        title: "Connect",
        ar: "تواصَل",
        body: "Clubs, communities, networking and social gatherings.",
        media: { type: "video" as const, src: "loop-majlis" },
      },
      {
        idx: "Four",
        title: "Celebrate",
        ar: "احتفِل",
        body: "Birthdays, private events and special occasions.",
        media: { type: "image" as const, src: "act-birthday-w" },
      },
    ],
    noteEyebrow: "How the week works",
    noteBody:
      "Every session keeps a fixed slot, so you always know where to find it. The week is announced on Instagram and posted at reception — walk in, or write ahead and we will tell you which hour suits you. And when you want an hour of your own — a birthday, a private evening, a class you teach — the room is yours to book.",
  },
  children: {
    imgAlt:
      "Children painting and shaping clay at the COBA children's art club, with two teachers helping.",
    eyebrow: "Our community",
    h2: "A place where children discover their talents — and adults discover connections, friendships and opportunities.",
    tierLine1: "Children's art club · Every Saturday",
    tierLine2: "Nation Towers Mall, Abu Dhabi",
    cta: "What's on for children",
  },
  founders: {
    num: "06",
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
      ["Capacity", "Up to 70 guests"],
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
    directionsLabel: "Get directions",
    whatsappLabel: "WhatsApp",
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
      "A birthday party",
      "Meet-ups, talks & networking",
      "A private gathering",
      "Just looking around",
    ],
    messageLabel: "Anything you would like us to know?",
    submit: "Send",
    sentNote: "WhatsApp should now be open with your message ready to send.",
    unsentNote: "Opens in your own WhatsApp, straight to us. This site stores nothing.",
    mailSubjectPrefix: "Visit enquiry — ",
    mailFields: {
      name: "Name",
      org: "Email or phone",
      tier: "Interested in",
    },
  },
  /* ---- What's On for Children — /children ---- */
  childrenPage: {
    hero: {
      eyebrow: "What's on · For children",
      title: ["Where young talent", "finds its people."],
      lede: "Art, LEGO, science, chess, etiquette and crafts — taught every week under one roof at Nation Towers Mall. And when the big day comes, the whole house celebrates with them.",
      capsLine: "Weekly sessions · Babies to teens · Nation Towers Mall",
    },
    gridEyebrow: "The activities",
    gridTitle: "A week built for children.",
    items: [
      {
        img: "act-kidsart-v4",
        title: "Kids art club",
        ar: "نادي الفن",
        body: "Painting, drawing and clay every Saturday — the room where a talent gets discovered.",
      },
      {
        img: "act-lego-v3",
        title: "LEGO workshops",
        ar: "ليغو",
        body: "Engineering disguised as play — towers, bridges and whole worlds, brick by brick.",
      },
      {
        img: "act-science-v2",
        title: "Science sessions",
        ar: "علوم",
        body: "Hands-on experiments for curious minds — the kind of lesson nobody calls a lesson.",
      },
      {
        img: "act-chess-v2",
        title: "Chess club",
        ar: "شطرنج",
        body: "Openings, endgames and deep quiet concentration — evenings around the board.",
      },
      {
        img: "act-craft-w",
        title: "Art & craft",
        ar: "فنون وحرف",
        body: "Painting tote bags and t-shirts, seasonal makes and projects that go home proudly.",
      },
      {
        img: "act-etiquette-v4",
        title: "Kids & teens etiquette",
        ar: "إتيكيت",
        body: "Confidence, courtesy and presence — the small skills that carry a long way.",
      },
      {
        img: "act-mumtoddler-v4",
        title: "Mother & toddler",
        ar: "أم وطفل",
        body: "Soft mornings for the smallest members — stories, songs and first friendships.",
      },
      {
        img: "act-boardgames-v2",
        title: "Board game nights",
        ar: "ألعاب لوحية",
        body: "Strategy, laughter and a full table — family game evenings for every age.",
      },
      {
        img: "act-movienight-v2",
        title: "Movie nights",
        ar: "ليلة سينما",
        body: "Cushions, popcorn and the big screen — family films in a room full of friends.",
      },
    ],
    parties: {
      eyebrow: "Kids birthday parties",
      h2: ["Their day.", "The whole house celebrates."],
      body: "Bring the birthday to COBA. The room is dressed before you arrive, the activity is led by people who do this every week — an art party, a LEGO party, a craft party, or an idea of your own — and the grown-ups get to be guests at their own child's party.",
      facts: [
        ["Capacity", "Up to 70 guests"],
        ["Setup", "Decorated and ready before you arrive"],
        ["Formats", "Art, LEGO, craft, science — or your idea"],
      ],
      cta: "Plan a party",
    },
    cross: {
      note: "And while they create —",
      label: "See what's on for adults",
    },
  },
  /* ---- What's On for Adults — /adults ---- */
  adultsPage: {
    hero: {
      eyebrow: "What's on · For adults",
      title: ["Mornings and evenings", "that belong to you."],
      lede: "Floristic workshops, art classes, book club, coffee mornings, image masterclasses, talks, clubs and networking — a standing place in your week, in a room worth arriving for.",
      capsLine: "Weekly sessions · Mornings & evenings · Nation Towers Mall",
    },
    gridEyebrow: "The activities",
    gridTitle: "A week that is yours.",
    items: [
      {
        img: "act-floristry-w",
        title: "Floristic workshops",
        ar: "تنسيق الزهور",
        body: "Fresh stems, secateurs and kraft paper — leave with a bouquet you built yourself.",
      },
      {
        img: "act-adultart-v4",
        title: "Art classes",
        ar: "فنون",
        body: "Easels, palettes and patient teaching — painting and sketching for every level.",
      },
      {
        img: "act-bookclub-w",
        title: "Book club",
        ar: "نادي الكتاب",
        body: "One book, good coffee and better company — the standing hour readers protect.",
      },
      {
        img: "act-makeup-v4",
        title: "Image masterclasses",
        ar: "ماستركلاس",
        body: "Makeup, styling and presence — small classes for ladies, taught hands-on at the mirror.",
      },
      {
        img: "act-coffee",
        title: "Coffee mornings",
        ar: "قهوة الصباح",
        body: "Ladies' mornings that start with coffee and end with plans — the week's soft opening.",
      },
      {
        img: "act-networking",
        title: "Networking evenings",
        ar: "تواصل مهني",
        body: "Introductions that become collaborations — peers in a circle, not a lecture.",
      },
      {
        img: "act-artshow-w",
        title: "Art shows",
        ar: "معارض فنية",
        body: "Openings on our own walls — the work made in this room, shown in this room.",
      },
      {
        img: "club-community",
        title: "Clubs & circles",
        ar: "أندية",
        body: "Women's circles, cultural groups and hobby clubs, each with a standing place in the week.",
      },
      {
        img: "act-movienight-v2",
        title: "Movie nights",
        ar: "ليلة سينما",
        body: "A projector, a late film and a room of friends — evenings that run past bedtime.",
      },
    ],
    parties: {
      eyebrow: "Private events",
      h2: ["An address", "for your occasion."],
      body: "Celebrations, launches, gatherings and evenings of your own design. The room is dressed before your first guest arrives — coffee circle, workshop or lounge — with reception, concierge and everything in between taken care of.",
      facts: [
        ["Capacity", "Up to 70 guests"],
        ["Configurations", "Coffee circle, workshop or lounge"],
        ["On the night", "Reception, concierge and refreshments"],
      ],
      cta: "Plan an event",
    },
    cross: {
      note: "And for the small ones —",
      label: "See what's on for children",
    },
  },
  /* The one place the home page speaks to collaborators — the doors to
     /partners (organisations) and /collaborate (individual practitioners). */
  partnerStrip: {
    eyebrow: "Work with COBA",
    h2: "Run a club, class or community? Bring it to COBA.",
    body: "Residents, collaborators, sponsors and freelancers take a standing slot in the week — with the audience already in the building.",
    cta: "Work with us",
    cta2: "A painter, a singer, a coach? Introduce yourself",
  },
  /* ---- Collaborate — /collaborate. The individual practitioner's door. ---- */
  collab: {
    hero: {
      eyebrow: "Collaborate with COBA",
      title: ["Bring your craft.", "The room is ready."],
      lede: "A painter, a singer, a florist, a coach — if you have a craft people gather around, COBA is built for you. Tell us who you are and what you would host; we hold the address, the audience and everything around it.",
      capsLine: "Individual practitioners · Sessions, classes & shows · Nation Towers Mall",
    },
    who: {
      num: "01",
      title: "Who Are You",
      h2: "First — who are you?",
      body: "Choose the craft that sounds most like you. It shapes the conversation we start.",
      options: [
        { key: "painter", label: "Painter & artist", ar: "رسّام" },
        { key: "musician", label: "Singer & musician", ar: "موسيقي" },
        { key: "maker", label: "Craft & DIY maker", ar: "حِرَفي" },
        { key: "florist", label: "Florist", ar: "منسّق زهور" },
        { key: "stylist", label: "Makeup & style artist", ar: "خبير إطلالة" },
        { key: "photographer", label: "Photographer", ar: "مصوّر" },
        { key: "chef", label: "Chef & baker", ar: "طاهٍ" },
        { key: "wellness", label: "Wellness & movement coach", ar: "مدرب عافية" },
        { key: "teacher", label: "Teacher & tutor", ar: "معلّم" },
        { key: "author", label: "Author & storyteller", ar: "كاتب" },
        { key: "dance", label: "Dance instructor", ar: "مدرب رقص" },
        { key: "other", label: "Something else entirely", ar: "شيء آخر" },
      ],
    },
    formats: {
      num: "02",
      title: "What You'd Host",
      h2: "And what could it become?",
      body: "Pick as many as you like — a session can start as one evening and grow into a standing hour.",
      options: [
        "A one-off masterclass",
        "A weekly class",
        "A club or circle",
        "A performance or recital",
        "An exhibition or show",
        "A children's programme",
        "A private session",
      ],
    },
    how: {
      eyebrow: "How it works",
      steps: [
        ["One", "Introduce yourself", "Who you are, what you make, where we can see it."],
        ["Two", "We find your hour", "A slot in the week that suits your craft and your people."],
        ["Three", "The room is ready", "Dressed before your first guest — audience, reception and materials handled."],
      ],
    },
    form: {
      eyebrow: "Introduce yourself",
      h2: "You bring the craft. We hold the rest.",
      lede: "A line or two is enough — who you are, what you make, and what you would host. We reply with the hour of the week that fits.",
      nameLabel: "Your name",
      contactLabel: "Your email or phone",
      portfolioLabel: "Instagram or portfolio link (optional)",
      messageLabel: "Tell us about what you'd host",
      submit: "Send introduction",
      sentNote: "WhatsApp should now be open with your introduction ready to send.",
      unsentNote: "Opens in your own WhatsApp, straight to us. This site stores nothing.",
      mailSubjectPrefix: "Collaboration — ",
      mailFields: {
        craft: "Craft",
        formats: "Would host",
        contact: "Email or phone",
        portfolio: "Portfolio",
      },
      noCraft: "Not chosen yet",
    },
    strip: {
      note: "Running an organisation, a brand or a club?",
      label: "See the residency model",
    },
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
    directionsLabel: "Get directions",
    whatsappLabel: "WhatsApp",
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
    sentNote: "WhatsApp should now be open with your enquiry ready to send.",
    unsentNote: "Opens in your own WhatsApp, straight to us. This site stores nothing.",
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
      { href: "#happening", label: "What's happening" },
      { href: "/children", label: "For children" },
      { href: "/adults", label: "For adults" },
      { href: "#about", label: "About COBA" },
      { href: "#visit", label: "Contact" },
    ],
    /* Shown on /children and /adults — route links, since those pages
       don't carry the home anchors. */
    visitLinksWhatsOn: [
      { href: "/", label: "The hub" },
      { href: "/children", label: "For children" },
      { href: "/adults", label: "For adults" },
      { href: "#visit", label: "Contact" },
    ],
    visitLinksPartners: [
      { href: "#roles", label: "Who we work with" },
      { href: "#why", label: "Why COBA" },
      { href: "#residency", label: "The model" },
      { href: "#formats", label: "Residency formats" },
      { href: "/collaborate", label: "Collaborate — introduce yourself" },
    ],
    visitLinksCollab: [
      { href: "#who", label: "Who are you" },
      { href: "#formats", label: "What you'd host" },
      { href: "#apply", label: "Introduce yourself" },
      { href: "/partners", label: "The residency model" },
      { href: "/", label: "Visit the hub" },
    ],
    followEyebrow: "Follow",
    instagram: "Instagram — @cobaabudhabi",
    whatsapp: "WhatsApp — +971 52 505 4366",
    workWithUs: "Work with COBA",
    backHome: "Back to the hub",
    rights: "All rights reserved.",
  },
};

const ru: typeof en = {
  meta: {
    title: "COBA — креативный центр сообщества в Абу-Даби",
    description:
      "Креативный центр сообщества для детей, семей и взрослых в Абу-Даби. Открывайте занятия, приходите на мастер-классы, знакомьтесь с сообществом и создавайте значимые впечатления — всё под одной крышей в Nation Towers Mall.",
    ogTitle: "COBA — Твори. Исследуй. Общайся.",
    ogDescription:
      "Креативный центр сообщества для детей, семей и взрослых в Абу-Даби — всё под одной крышей.",
    ogLocale: "ru_AE",
  },
  metaChildren: {
    title: "Что проходит для детей — COBA Абу-Даби",
    description:
      "Детский арт-клуб, LEGO, наука, шахматы, этикет, рукоделие, утро для мам и малышей и дни рождения до 70 гостей — каждую неделю в COBA, Nation Towers Mall, Абу-Даби.",
    ogTitle: "Что проходит для детей в COBA",
    ogDescription:
      "Творчество, LEGO, наука, шахматы, рукоделие и дни рождения — неделя, построенная для юных талантов в Абу-Даби.",
  },
  metaAdults: {
    title: "Что проходит для взрослых — COBA Абу-Даби",
    description:
      "Флористика, занятия живописью, книжный клуб, кофейные утра, мастер-классы по имиджу, беседы, нетворкинг и частные мероприятия — каждую неделю в COBA, Nation Towers Mall, Абу-Даби.",
    ogTitle: "Что проходит для взрослых в COBA",
    ogDescription:
      "Флористика, живопись, книжный клуб, кофейные утра, мастер-классы и нетворкинг — утра и вечера для вас.",
  },
  metaCollab: {
    title: "Сотрудничество с COBA — принесите своё ремесло",
    description:
      "Художник, певец, коуч, мастер? Расскажите, кто вы и что хотели бы проводить — мастер-класс, еженедельное занятие, выступление или выставку — в COBA, Nation Towers Mall, Абу-Даби.",
    ogTitle: "Сотрудничество с COBA",
    ogDescription:
      "Расскажите, кто вы и что хотели бы проводить — зал, аудитория и всё остальное уже здесь.",
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
      { href: "/ru/children", label: "Детям" },
      { href: "/ru/adults", label: "Взрослым" },
      { href: "#about", label: "О нас" },
      { href: "#visit", label: "Контакты" },
    ],
    navChildren: [
      { href: "#parties", label: "Дни рождения" },
      { href: "/ru/adults", label: "Взрослым" },
      { href: "#visit", label: "Контакты" },
    ],
    navAdults: [
      { href: "#private", label: "Частные события" },
      { href: "/ru/children", label: "Детям" },
      { href: "#visit", label: "Контакты" },
    ],
    navPartners: [
      { href: "#roles", label: "С кем мы работаем" },
      { href: "#residency", label: "Модель" },
      { href: "/ru/collaborate", label: "Сотрудничество" },
    ],
    navCollab: [
      { href: "#who", label: "Кто вы" },
      { href: "#formats", label: "Что бы вы проводили" },
      { href: "/ru/partners", label: "Модель резидентства" },
    ],
    crossHome: "Сотрудничество с COBA",
    crossPartners: "О центре",
    ctaHome: "Запланировать визит",
    ctaPartners: "Начать разговор",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    langSwitchLabel: "Язык",
  },
  hero: {
    title: ["Креативный центр сообщества", "для детей, семей и взрослых."],
    lede: "Открывайте занятия, приходите на мастер-классы, знакомьтесь с сообществом и создавайте значимые впечатления — всё под одной крышей в Nation Towers Mall, Абу-Даби.",
    ctaPrimary: "Что происходит",
    ctaPrimaryHref: "#happening",
    ctaSecondary: "Запланировать визит",
    ctaSecondaryHref: "#visit",
    facts: [
      { label: "Опыт", value: "лет сообщества", count: 15 },
      { label: "Адрес", value: "Nation Towers Mall, 1-й этаж" },
      { label: "Открыто", value: "Семь дней в неделю" },
    ] as Fact[],
  },
  heroSlides: [
    { img: "hero-kidsart-v3", tag: "Арт-клубы для детей" },
    { img: "hero-birthday-v3", tag: "Детские дни рождения" },
    { img: "hero-family-v3", tag: "Утро для мам и малышей" },
    { img: "hero-ladies-v3", tag: "Мастер-классы для леди" },
    { img: "hero-networking-v3", tag: "Нетворкинг и частные события" },
  ],
  voice: { create: "Твори", explore: "Исследуй", connect: "Общайся" },
  happening: {
    num: "01",
    title: "Что происходит",
    eyebrow: "Что происходит в COBA",
    h2: ["Одна крыша.", "Неделя, полная занятий."],
    lede: "Детские дни рождения, флористика, творчество для детей и взрослых, книжный клуб, утро для мам и малышей, мастер-классы по имиджу, этикет для детей и подростков, выставки, киновечера, нетворкинг — всё это можно делать в COBA. Присоединяйтесь к тому, что уже идёт, или забронируйте зал и сделайте одно из этого своим.",
    prevLabel: "Предыдущее занятие",
    nextLabel: "Следующее занятие",
    pauseLabel: "Остановить слайд-шоу",
    playLabel: "Запустить слайд-шоу",
    goToLabel: "Перейти к слайду",
    ofLabel: "из",
    items: [
      { img: "act-birthday-w", cap: "Детские дни рождения", tag: "Детям" },
      { img: "act-floristry-w", cap: "Флористические мастер-классы", tag: "Взрослым" },
      { img: "act-kidsart-v4", cap: "Детский арт-клуб", tag: "Детям" },
      { img: "act-makeup-v4", cap: "Мастер-классы по имиджу", tag: "Взрослым" },
      { img: "act-lego-v3", cap: "LEGO-мастерские", tag: "Детям" },
      { img: "act-bookclub-w", cap: "Книжный клуб", tag: "Взрослым" },
      { img: "act-craft-w", cap: "Роспись сумок и футболок", tag: "Детям и подросткам" },
      { img: "act-coffee", cap: "Кофейные утра для леди", tag: "Взрослым" },
      { img: "act-science-v2", cap: "Научные занятия", tag: "Детям" },
      { img: "act-adultart-v4", cap: "Живопись для взрослых", tag: "Взрослым" },
      { img: "act-mumtoddler-v4", cap: "Утро для мам и малышей", tag: "Семьям" },
      { img: "act-networking", cap: "Вечера нетворкинга", tag: "Взрослым" },
      { img: "act-chess-v2", cap: "Шахматный клуб", tag: "Детям" },
      { img: "act-artshow-w", cap: "Художественные выставки", tag: "Для всех" },
      { img: "act-etiquette-v4", cap: "Этикет для детей и подростков", tag: "Детям" },
      { img: "act-movienight-v2", cap: "Киновечера", tag: "Семьям" },
      { img: "act-boardgames-v2", cap: "Вечера настольных игр", tag: "Семьям" },
    ],
  },
  audience: {
    eyebrow: "Найдите свою неделю",
    childrenCard: {
      title: "Что проходит для детей",
      ar: "للأطفال",
      img: "act-craft-w",
      note: "Арт-клуб, LEGO, наука, шахматы, этикет, рукоделие, киновечера — и дни рождения, которые празднует весь дом.",
      cta: "Смотреть детские занятия",
    },
    adultsCard: {
      title: "Что проходит для взрослых",
      ar: "للكبار",
      img: "act-floristry-w",
      note: "Флористика, живопись, книжный клуб, кофейные утра, мастер-классы по имиджу, беседы, клубы и нетворкинг — утра и вечера для вас.",
      cta: "Смотреть занятия для взрослых",
    },
  },
  book: {
    eyebrow: "Сделайте его своим",
    h2: "Этот зал можно забронировать.",
    body: "Всё, что вы видите в слайд-шоу, происходит здесь — в одном зале, который можно забронировать. Отпразднуйте день рождения, соберите своих на частный вечер или проведите мастер-класс, о котором давно мечтали, — до 70 гостей, зал оформлен и готов до вашего прихода.",
    ctaVisit: "Забронировать для события",
    ctaHost: "Проводить свои занятия",
  },
  idea: {
    num: "03",
    title: "О COBA",
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
    num: "04",
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
    num: "05",
    title: "В зале",
    h2: [
      "COBA — это больше, чем красивое пространство.",
      "Это люди, которые его оживляют.",
    ],
    body: "Зал становится центром притяжения только тогда, когда его наполняют люди. Именно для них создан COBA — и поэтому на каждом фото здесь кто-то есть.",
    rule: "На каждом ключевом изображении есть люди. Это правило, а не предпочтение.",
    shots: [
      { img: "act-private", cap: "Люди смеются" },
      { img: "act-science-v2", cap: "Научные занятия для подростков" },
      { img: "act-artists", cap: "Художники творят" },
      { img: "act-chess-v2", cap: "Шахматные вечера" },
      { img: "act-blocks", cap: "Дети мастерят" },
      { img: "act-lego-v3", cap: "Строители LEGO" },
      { img: "act-coffee", cap: "Разговоры за кофе" },
      { img: "act-etiquette-v4", cap: "Уроки этикета" },
      { img: "act-parents", cap: "Родители общаются" },
      { img: "act-mumtoddler-v4", cap: "Утро для мам и малышей" },
      { img: "act-networking", cap: "Деловые знакомства" },
      { img: "act-boardgames-v2", cap: "Вечера настольных игр" },
    ],
  },
  happens: {
    num: "02",
    title: "Что вас ждёт",
    h2: "Что вас ждёт в COBA.",
    cards: [
      {
        idx: "Один",
        title: "Учитесь",
        ar: "تعلَّم",
        body: "Мастер-классы для детей и взрослых.",
        media: { type: "video" as const, src: "loop-craft" },
      },
      {
        idx: "Два",
        title: "Творите",
        ar: "أبدِع",
        body: "Живопись, музыка, рукоделие, творческие проекты и особенные впечатления.",
        media: { type: "image" as const, src: "act-adultart-v4" },
      },
      {
        idx: "Три",
        title: "Общайтесь",
        ar: "تواصَل",
        body: "Клубы, сообщества, нетворкинг и дружеские встречи.",
        media: { type: "video" as const, src: "loop-majlis" },
      },
      {
        idx: "Четыре",
        title: "Празднуйте",
        ar: "احتفِل",
        body: "Дни рождения, частные события и особые случаи.",
        media: { type: "image" as const, src: "act-birthday-w" },
      },
    ],
    noteEyebrow: "Как устроена неделя",
    noteBody:
      "У каждого занятия свой постоянный слот, поэтому вы всегда знаете, где его найти. Расписание недели публикуется в Instagram и на ресепшене — заходите просто так или напишите заранее, и мы подскажем подходящий час. А когда захочется собственного часа — день рождения, частный вечер или занятие, которое ведёте вы, — зал можно забронировать.",
  },
  children: {
    imgAlt:
      "Дети рисуют и лепят из глины в детском арт-клубе COBA, им помогают два педагога.",
    eyebrow: "Наше сообщество",
    h2: "Место, где дети раскрывают свои таланты, а взрослые находят связи, дружбу и возможности.",
    tierLine1: "Детский арт-клуб · Каждую субботу",
    tierLine2: "Nation Towers Mall, Абу-Даби",
    cta: "Что проходит для детей",
  },
  founders: {
    num: "06",
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
      ["Вместимость", "До 70 гостей"],
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
    directionsLabel: "Построить маршрут",
    whatsappLabel: "WhatsApp",
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
      "День рождения",
      "Встречи, беседы и нетворкинг",
      "Частное мероприятие",
      "Просто осмотреться",
    ],
    messageLabel: "Что нам стоит знать?",
    submit: "Отправить",
    sentNote: "WhatsApp должен открыться с готовым сообщением.",
    unsentNote: "Откроется в вашем WhatsApp и попадёт прямо к нам. Этот сайт ничего не сохраняет.",
    mailSubjectPrefix: "Запрос на визит — ",
    mailFields: {
      name: "Имя",
      org: "E-mail или телефон",
      tier: "Интересует",
    },
  },
  childrenPage: {
    hero: {
      eyebrow: "Что проходит · Детям",
      title: ["Здесь юный талант", "находит своих."],
      lede: "Творчество, LEGO, наука, шахматы, этикет и рукоделие — каждую неделю под одной крышей в Nation Towers Mall. А когда наступает большой день — весь дом празднует вместе с ними.",
      capsLine: "Еженедельные занятия · От малышей до подростков · Nation Towers Mall",
    },
    gridEyebrow: "Занятия",
    gridTitle: "Неделя, построенная для детей.",
    items: [
      {
        img: "act-kidsart-v4",
        title: "Детский арт-клуб",
        ar: "نادي الفن",
        body: "Живопись, рисунок и лепка каждую субботу — зал, где раскрывается талант.",
      },
      {
        img: "act-lego-v3",
        title: "LEGO-мастерские",
        ar: "ليغو",
        body: "Инженерия под видом игры — башни, мосты и целые миры, кирпичик за кирпичиком.",
      },
      {
        img: "act-science-v2",
        title: "Научные занятия",
        ar: "علوم",
        body: "Эксперименты своими руками для любознательных — урок, который никто не называет уроком.",
      },
      {
        img: "act-chess-v2",
        title: "Шахматный клуб",
        ar: "شطرنج",
        body: "Дебюты, эндшпили и глубокая тишина сосредоточенности — вечера за доской.",
      },
      {
        img: "act-craft-w",
        title: "Творчество и рукоделие",
        ar: "فنون وحرف",
        body: "Роспись сумок и футболок, сезонные поделки и проекты, которые с гордостью несут домой.",
      },
      {
        img: "act-etiquette-v4",
        title: "Этикет для детей и подростков",
        ar: "إتيكيت",
        body: "Уверенность, вежливость и умение держаться — маленькие навыки на всю жизнь.",
      },
      {
        img: "act-mumtoddler-v4",
        title: "Мама и малыш",
        ar: "أم وطفل",
        body: "Мягкие утра для самых маленьких — сказки, песни и первая дружба.",
      },
      {
        img: "act-boardgames-v2",
        title: "Вечера настольных игр",
        ar: "ألعاب لوحية",
        body: "Стратегия, смех и полный стол — семейные игровые вечера для любого возраста.",
      },
      {
        img: "act-movienight-v2",
        title: "Киновечера",
        ar: "ليلة سينما",
        body: "Подушки, попкорн и большой экран — семейное кино в зале, полном друзей.",
      },
    ],
    parties: {
      eyebrow: "Детские дни рождения",
      h2: ["Их день.", "Празднует весь дом."],
      body: "Принесите день рождения в COBA. Зал украшен до вашего прихода, программу ведут те, кто делает это каждую неделю — арт-праздник, LEGO-праздник, праздник рукоделия или ваша собственная идея, — а взрослые наконец могут побыть гостями на празднике своего ребёнка.",
      facts: [
        ["Вместимость", "До 70 гостей"],
        ["Подготовка", "Украшено и готово до вашего прихода"],
        ["Форматы", "Творчество, LEGO, рукоделие, наука — или ваша идея"],
      ],
      cta: "Спланировать праздник",
    },
    cross: {
      note: "А пока они творят —",
      label: "Что проходит для взрослых",
    },
  },
  adultsPage: {
    hero: {
      eyebrow: "Что проходит · Взрослым",
      title: ["Утра и вечера,", "которые принадлежат вам."],
      lede: "Флористика, живопись, книжный клуб, кофейные утра, мастер-классы по имиджу, беседы, клубы и нетворкинг — постоянное место в вашей неделе, в зале, ради которого хочется приехать.",
      capsLine: "Еженедельные занятия · Утром и вечером · Nation Towers Mall",
    },
    gridEyebrow: "Занятия",
    gridTitle: "Неделя, которая принадлежит вам.",
    items: [
      {
        img: "act-floristry-w",
        title: "Флористические мастер-классы",
        ar: "تنسيق الزهور",
        body: "Свежие стебли, секатор и крафт-бумага — уходите с букетом, собранным своими руками.",
      },
      {
        img: "act-adultart-v4",
        title: "Живопись",
        ar: "فنون",
        body: "Мольберты, палитры и терпеливые педагоги — живопись и рисунок для любого уровня.",
      },
      {
        img: "act-bookclub-w",
        title: "Книжный клуб",
        ar: "نادي الكتاب",
        body: "Одна книга, хороший кофе и ещё лучшая компания — час, который читатели берегут.",
      },
      {
        img: "act-makeup-v4",
        title: "Мастер-классы по имиджу",
        ar: "ماستركلاس",
        body: "Макияж, стиль и умение подать себя — камерные занятия для леди, вживую у зеркала.",
      },
      {
        img: "act-coffee",
        title: "Кофейные утра",
        ar: "قهوة الصباح",
        body: "Утра для леди, которые начинаются с кофе и заканчиваются планами — мягкое открытие недели.",
      },
      {
        img: "act-networking",
        title: "Вечера нетворкинга",
        ar: "تواصل مهني",
        body: "Знакомства, которые становятся сотрудничеством — на равных, в кругу, а не с трибуны.",
      },
      {
        img: "act-artshow-w",
        title: "Художественные выставки",
        ar: "معارض فنية",
        body: "Вернисажи на наших собственных стенах — работы, созданные в этом зале, показаны в этом зале.",
      },
      {
        img: "club-community",
        title: "Клубы и круги",
        ar: "أندية",
        body: "Женские круги, культурные группы и хобби-клубы — у каждого постоянное место в неделе.",
      },
      {
        img: "act-movienight-v2",
        title: "Киновечера",
        ar: "ليلة سينما",
        body: "Проектор, поздний фильм и зал друзей — вечера, которые длятся дольше запланированного.",
      },
    ],
    parties: {
      eyebrow: "Частные события",
      h2: ["Адрес", "для вашего события."],
      body: "Праздники, презентации, встречи и вечера по вашему замыслу. Зал оформлен до прихода первого гостя — кофейный круг, мастер-класс или лаунж, — а ресепшен, консьерж и всё остальное мы берём на себя.",
      facts: [
        ["Вместимость", "До 70 гостей"],
        ["Форматы", "Кофейный круг, мастер-класс или лаунж"],
        ["В этот вечер", "Ресепшен, консьерж и угощения"],
      ],
      cta: "Спланировать событие",
    },
    cross: {
      note: "А для самых маленьких —",
      label: "Что проходит для детей",
    },
  },
  partnerStrip: {
    eyebrow: "Сотрудничество с COBA",
    h2: "Ведёте клуб, занятия или сообщество? Приводите их в COBA.",
    body: "Резиденты, партнёры, спонсоры и фрилансеры занимают постоянный слот в неделе — с аудиторией, которая уже в здании.",
    cta: "Сотрудничать с нами",
    cta2: "Художник, певец, коуч? Расскажите о себе",
  },
  collab: {
    hero: {
      eyebrow: "Сотрудничество с COBA",
      title: ["Принесите своё ремесло.", "Зал уже готов."],
      lede: "Художник, певец, флорист, коуч — если вокруг вашего дела собираются люди, COBA создан для вас. Расскажите, кто вы и что хотели бы проводить; адрес, аудитория и всё остальное — на нас.",
      capsLine: "Частные практики · Занятия, сессии и выступления · Nation Towers Mall",
    },
    who: {
      num: "01",
      title: "Кто вы",
      h2: "Для начала — кто вы?",
      body: "Выберите ремесло, которое больше всего похоже на вас. С этого начнётся наш разговор.",
      options: [
        { key: "painter", label: "Художник", ar: "رسّام" },
        { key: "musician", label: "Певец и музыкант", ar: "موسيقي" },
        { key: "maker", label: "Мастер рукоделия", ar: "حِرَفي" },
        { key: "florist", label: "Флорист", ar: "منسّق زهور" },
        { key: "stylist", label: "Визажист и стилист", ar: "خبير إطلالة" },
        { key: "photographer", label: "Фотограф", ar: "مصوّر" },
        { key: "chef", label: "Шеф и кондитер", ar: "طاهٍ" },
        { key: "wellness", label: "Коуч по велнесу и движению", ar: "مدرب عافية" },
        { key: "teacher", label: "Преподаватель и репетитор", ar: "معلّم" },
        { key: "author", label: "Автор и рассказчик", ar: "كاتب" },
        { key: "dance", label: "Преподаватель танцев", ar: "مدرب رقص" },
        { key: "other", label: "Что-то совсем другое", ar: "شيء آخر" },
      ],
    },
    formats: {
      num: "02",
      title: "Что бы вы проводили",
      h2: "И во что это может вырасти?",
      body: "Выбирайте сколько угодно — сессия может начаться с одного вечера и вырасти в постоянный час.",
      options: [
        "Разовый мастер-класс",
        "Еженедельное занятие",
        "Клуб или круг",
        "Выступление или концерт",
        "Выставка или показ",
        "Детская программа",
        "Частная сессия",
      ],
    },
    how: {
      eyebrow: "Как это устроено",
      steps: [
        ["Один", "Расскажите о себе", "Кто вы, что создаёте и где это можно увидеть."],
        ["Два", "Мы находим ваш час", "Слот в неделе, который подходит вашему делу и вашим людям."],
        ["Три", "Зал уже готов", "Оформлен до прихода первого гостя — аудитория, ресепшен и материалы на нас."],
      ],
    },
    form: {
      eyebrow: "Расскажите о себе",
      h2: "Вы приносите ремесло. Остальное — на нас.",
      lede: "Достаточно пары строк — кто вы, что создаёте и что хотели бы проводить. Мы ответим и подскажем подходящий час недели.",
      nameLabel: "Ваше имя",
      contactLabel: "Ваш e-mail или телефон",
      portfolioLabel: "Instagram или портфолио (необязательно)",
      messageLabel: "Расскажите, что бы вы проводили",
      submit: "Отправить рассказ о себе",
      sentNote: "WhatsApp должен открыться с готовым рассказом о себе.",
      unsentNote: "Откроется в вашем WhatsApp и попадёт прямо к нам. Этот сайт ничего не сохраняет.",
      mailSubjectPrefix: "Сотрудничество — ",
      mailFields: {
        craft: "Ремесло",
        formats: "Хотел(а) бы проводить",
        contact: "E-mail или телефон",
        portfolio: "Портфолио",
      },
      noCraft: "Пока не выбрано",
    },
    strip: {
      note: "Представляете организацию, бренд или клуб?",
      label: "Посмотреть модель резидентства",
    },
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
    directionsLabel: "Построить маршрут",
    whatsappLabel: "WhatsApp",
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
    sentNote: "WhatsApp должен открыться с готовой заявкой.",
    unsentNote: "Откроется в вашем WhatsApp и попадёт прямо к нам. Этот сайт ничего не сохраняет.",
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
      { href: "#happening", label: "Что происходит" },
      { href: "/ru/children", label: "Детям" },
      { href: "/ru/adults", label: "Взрослым" },
      { href: "#about", label: "О COBA" },
      { href: "#visit", label: "Контакты" },
    ],
    visitLinksWhatsOn: [
      { href: "/ru", label: "Главная" },
      { href: "/ru/children", label: "Детям" },
      { href: "/ru/adults", label: "Взрослым" },
      { href: "#visit", label: "Контакты" },
    ],
    visitLinksPartners: [
      { href: "#roles", label: "С кем мы работаем" },
      { href: "#why", label: "Почему COBA" },
      { href: "#residency", label: "Модель" },
      { href: "#formats", label: "Форматы резидентства" },
      { href: "/ru/collaborate", label: "Сотрудничество — расскажите о себе" },
    ],
    visitLinksCollab: [
      { href: "#who", label: "Кто вы" },
      { href: "#formats", label: "Что бы вы проводили" },
      { href: "#apply", label: "Рассказать о себе" },
      { href: "/ru/partners", label: "Модель резидентства" },
      { href: "/ru", label: "О центре" },
    ],
    followEyebrow: "Мы в сети",
    instagram: "Instagram — @cobaabudhabi",
    whatsapp: "WhatsApp — +971 52 505 4366",
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

export function childrenHref(lang: Lang) {
  return lang === "ru" ? "/ru/children" : "/children";
}

export function adultsHref(lang: Lang) {
  return lang === "ru" ? "/ru/adults" : "/adults";
}

export function collaborateHref(lang: Lang) {
  return lang === "ru" ? "/ru/collaborate" : "/collaborate";
}
