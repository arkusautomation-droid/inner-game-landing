import { Sword, Flame, Crown } from "lucide-react";

export default function SolutionSection() {
  const pillars = [
    { icon: Sword, title: "Confrontation", subtitle: "The Siege", description: "Terminate the illusory treaty with your Usurper. End the savior myth and take command of your thousands of daily micro-decrees." },
    { icon: Flame, title: "Underground Alchemy", subtitle: "Integrating the Shadow", description: "Transform discomfort into the currency of growth. Master ruthless honesty, audit your Six Ministries, and build your Internal Lighthouse." },
    { icon: Crown, title: "The Ascent", subtitle: "Manifestation of Power", description: "Build your Sovereign's Trust Bank, bio-hack your state with the Triad of Dominion, and architect your ideal reality." },
  ];

  return (
    <section className="py-24 bg-dark-gradient relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4">The System</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Your Path to <span className="text-gradient-gold">Total Dominion</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This is not a self-help book. It is an Arsenal &mdash; a strategic manual built on three pillars of transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="group relative p-8 rounded-xl border border-gold-500/10 bg-[#0D0D15] hover:border-gold-500/30 transition-all hover:glow-gold">
              <div className="absolute top-0 left-8 -translate-y-1/2">
                <span className="text-gold-500/20 text-7xl font-display font-bold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="w-14 h-14 rounded-lg bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">{pillar.title}</h3>
              <p className="text-gold-400 text-sm mb-4 italic">{pillar.subtitle}</p>
              <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
