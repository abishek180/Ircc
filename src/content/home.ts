// Homepage content, copied from https://www.ircc.world/ (first three sections).

export const contact = {
  phone: "+1 (617) 201-4330",
  phoneHref: "tel:+16172014330",
  email: "ignite@ircc.world",
};

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61588472968130", icon: "facebook" },
  { name: "WhatsApp", href: "https://wa.me/9714008683", icon: "whatsapp" },
  { name: "YouTube", href: "https://www.youtube.com/@KidventureLab/playlists", icon: "youtube" },
  { name: "Instagram", href: "https://www.instagram.com/ircc_gyra?igsh=NTc4MTIwNjQ2YQ==", icon: "instagram" },
] as const;

export type NavLink = { label: string; href: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

// Same structure as the live site: Conference and Media are dropdown menus.
export const navLinks: NavItem[] = [
  { label: "About", href: "https://www.ircc.world/about" },
  { label: "Guidelines", href: "https://www.ircc.world/guidelines" },
  {
    label: "Conference",
    children: [
      { label: "Speakers", href: "https://www.ircc.world/speakers" },
      { label: "Program Schedule", href: "https://www.ircc.world/program-schedule" },
      { label: "Committee", href: "https://www.ircc.world/committee" },
      { label: "Donation", href: "https://www.ircc.world/donation" },
    ],
  },
  {
    label: "Media",
    children: [
      { label: "Awards", href: "https://www.ircc.world/awards" },
      { label: "Gallery", href: "https://www.ircc.world/gallery" },
    ],
  },
  { label: "Contact", href: "https://www.ircc.world/contact-us" },
];

export const authLinks = {
  login: "https://www.ircc.world/login",
  register: "https://www.ircc.world/register",
};

// IRCC'27 @ Thrissur team, cropped from the original ircc27-banner.jpg.
export const ircc27Team = [
  { name: "Mrs. Renjitha Krishna", role: "Convener", image: "/images/team/renjitha-krishna.jpg" },
  { name: "Prof. Ramachandran Thekkedath", role: "Scientific Chair", image: "/images/team/ramachandran-thekkedath.jpg" },
  { name: "Prof. Dr. Sr. Beena Rose", role: "National Coordinator", image: "/images/team/beena-rose.jpg" },
  { name: "Dr. Usha Thekkedath", role: "International Coordinator", image: "/images/team/usha-thekkedath.jpg" },
  { name: "Ms. Preethi Pinto", role: "Stem4Girls Ambassador", image: "/images/team/preethi-pinto.jpg" },
  { name: "Ankith Surya", role: "Student Ambassador", image: "/images/team/ankith-surya.jpg" },
];

export const hero = {
  title: "International Research Conference for Children 2026",
  venue: "525 Los Coches St, Milpitas, CA 95035.",
  speakersHref: "https://www.ircc.world/speakers",
  buttons: [
    { label: "Login", href: "https://www.ircc.world/login" },
    { label: "Register Now", href: "https://www.ircc.world/register", primary: true },
    { label: "Guidelines", href: "https://www.ircc.world/guidelines" },
    { label: "Awards", href: "https://www.ircc.world/awards" },
  ],
};

export const speakers = [
  {
    name: "Prof. Brian Kobilka",
    role: "2012 Nobel Laureate in Chemistry",
    org: "Department of Molecular and Cellular Physiology, Stanford University School of Medicine",
    image: "/images/speakers/2.png",
  },
  {
    name: "Prof. E. Dale Abel",
    role: "William S. Adams Distinguished Professor of Medicine, Chair and Executive Medical Director",
    org: "Department of Medicine, David Geffen School of Medicine and UCLA Health",
    image: "/images/speakers/22.jpg",
  },
  {
    name: "Prof. Devendra K. Agrawal",
    role: "Professor and Director",
    org: "Department of Translational Research, Western University of Health Sciences",
    image: "/images/speakers/1.png",
  },
  {
    name: "Prof. John McGeehan",
    role: "Principal Scientist - Biochemical Engineering",
    org: "National Laboratory of the Rockies (NLR)",
    image: "/images/speakers/3.png",
  },
  {
    name: "Dr. Irimpan Mathews",
    role: "Lead Scientist",
    org: "SLAC National Accelerator Laboratory, Stanford University",
    image: "/images/speakers/4.png",
  },
  {
    name: "Prof. Pavan Antony",
    role: "Professor",
    org: "Ruth S. Ammon College of Education and Health Sciences, Adelphi University",
    image: "/images/speakers/5.png",
  },
  {
    name: "Prof. Stephen Shore",
    role: "Professor",
    org: "Ruth S. Ammon College of Education and Health Sciences, Adelphi University",
    image: "/images/speakers/6.png",
  },
  {
    name: "Mr. Anoop Sreenivasan",
    role: "VP of Product and Design, Go-To-Market Technologies",
    org: "INTUIT",
    image: "/images/speakers/9.jpeg",
  },
  {
    name: "Prof. Jia Gou",
    role: "Assistant Professor",
    org: "Department of Mathematics, University of California, Riverside",
    image: "/images/speakers/29.png",
  },
  {
    name: "Mr. Gaurav Gupta",
    role: "Co-Founder & CTO",
    org: "Nuaav Inc.",
    image: "/images/speakers/30.png",
  },
  {
    name: "Dr. Sharvari Deshpande",
    role: "Postdoctoral Associate",
    org: "Washington University School of Medicine",
    image: "/images/speakers/36.png",
  },
];

export const sponsors = {
  poweredBy: {
    label: "Powered By",
    name: "Lifology",
    href: "https://www.lifology.us",
    display: "www.lifology.us",
    logo: "/images/lifology-logo.png",
    width: 3896,
    height: 570,
  },
  gold: {
    label: "Gold Sponsor",
    name: "Growing Stars",
    href: "https://www.growingstars.com",
    logo: "/images/growing-stars-logo.jpeg",
    width: 1600,
    height: 533,
  },
  event: {
    label: "Event Sponsor",
    name: "Bay Area Champions",
    tagline: "Nurturing Minds. Creating Champions",
    logo: "/images/bayareachampions.jpeg",
    width: 420,
    height: 384,
  },
};

export const about = {
  video: "https://www.ircc.world/uploads/videos/ircc-all-speakers-full.mp4",
  title: "IRCC: A Global Platform for Young Researchers",
  subtitle: "Empowering Young Minds on a Global Stage",
  paragraphs: [
    "IRCC is an international platform that brings together school-level student researchers, eminent scientists, teachers, parents, administrators, and stakeholders from around the world.",
    "The conference will feature keynote sessions, plenaries, and special lectures by internationally established scientists, along with talks, poster sessions, and presentations by school students.",
  ],
  academicValue: [
    { text: "Category-wise Best Presentation and Poster Awards", link: { label: "View Awards", href: "https://www.ircc.world/awards" } },
    { text: "Abstract Publication in Official Proceedings" },
    { text: "Expert Judges from Stanford, MIT & Harvard" },
    { text: "Authentic Research Presentation Experience" },
    { text: "International Certificate of Participation" },
    { text: "STEM and non-STEM Leadership Platform" },
  ],
  collegeImpact: [
    "International Research Presentation Experience",
    "Interact with Nobel Laureates & top Scientists",
    "Global Academic Networking",
    "Distinctive Edge in University Admissions",
  ],
  note: "Submitting a paper is not necessary to attend the conference.",
};
