export interface Chapter {
  num: number;
  title: string;
  subtitle: string;
  desc: string;
  mission: string;
}

export interface Part {
  part: string;
  partTitle: string;
  chapters: Chapter[];
}

export const chapters: Part[] = [
  {
    part: "I",
    partTitle: "Confrontation (Siege)",
    chapters: [
      { num: 1, title: "The Usurper on the Throne", subtitle: "Terminating the Illusory Treaty", desc: "Discover how your lower self hijacked your operating system. Learn to recognize the Trance of the Usurper and issue your first sovereign decrees.", mission: "Ruthless Honesty Protocol" },
      { num: 2, title: "Terminating the Illusory Treaty", subtitle: "The End of the Savior Myth", desc: "Break the silent contract that keeps you waiting for rescue. Understand why action creates motivation, not the other way around.", mission: "The Decree of Self-Reliance" },
      { num: 3, title: "The Clockwork Mechanism", subtitle: "Daily Decrees Designing Your Reality", desc: "Realize the staggering power of your thousands of daily micro-decisions. Learn to shift from Victim to Architect of your experience.", mission: "The Clockwork Audit" },
    ],
  },
  {
    part: "II",
    partTitle: "Underground Alchemy",
    chapters: [
      { num: 4, title: "The Currency of Growth", subtitle: "Mastering the Discomfort of Transformation", desc: "Transform pain into your greatest asset. Master the Anchor Protocol and learn why growth always costs discomfort.", mission: "The Discomfort Drill" },
      { num: 5, title: "The Protocol of Ruthless Honesty", subtitle: "Auditing the Ministries of Your Life", desc: "Conduct a full audit of your Six Ministries: Physical Health, Mental Health, Finance, Relationships, Career, and Personal Growth.", mission: "The Absolute Audit" },
      { num: 6, title: "Relational Kintsugi", subtitle: "Terminating External Validation", desc: "Build your Internal Lighthouse and stop depending on external flashlights. Transform relationships from dependency to sovereign alliance.", mission: "The Lighthouse Protocol" },
    ],
  },
  {
    part: "III",
    partTitle: "The Ascent",
    chapters: [
      { num: 7, title: "The Sovereign's Trust Bank", subtitle: "Strategic Deposits for Dominion", desc: "Every kept promise is a deposit into your Internal Bank of Trust. Build the foundation of unshakeable self-belief through consistent action.", mission: "The Architect's Deposit" },
      { num: 8, title: "The Triad of Dominion", subtitle: "Bio-Hacking Your State", desc: "Master your physiology, focus, and language to engineer peak states on demand. Your body is the hardware of your sovereignty.", mission: "The 90-Second Override" },
      { num: 9, title: "The Great Decree", subtitle: "The Architecture of Your Ideal Reign", desc: "Design the master blueprint of your life. Issue the final decree that transforms vision into reality through strategic, relentless execution.", mission: "The Constitution of the Reign" },
    ],
  },
];
