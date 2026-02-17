import { Brain, Shield, Target, Flame, Zap, Crown } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    { icon: Brain, title: "Master Your Mind", desc: "Recognize and terminate the Usurper's propaganda. Take control of the thousands of micro-decrees you issue daily." },
    { icon: Shield, title: "Build Unshakeable Resilience", desc: "Transform discomfort into the currency of growth. Use the Anchor Protocol to stay grounded when every nerve screams at you to run." },
    { icon: Target, title: "Audit Your Entire Life", desc: "Evaluate your Six Ministries: Physical Health, Mental Health, Finance, Relationships, Career, and Personal Growth." },
    { icon: Flame, title: "End the Savior Myth", desc: "Stop waiting for permission, motivation, or rescue. Learn that action creates motivation, not the other way around." },
    { icon: Zap, title: "Engineer Peak States", desc: "Bio-hack your physiology, focus, and language with the Triad of Dominion to perform at your highest level on demand." },
    { icon: Crown, title: "Architect Your Reality", desc: "Design and execute the master blueprint of your ideal life through strategic, disciplined action." },
  ];

  return (
    <section className="py-24 bg-dark-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4">The Transformation</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            What You Will <span className="text-gradient-gold">Gain</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-6 rounded-xl border border-gold-500/10 bg-[#0D0D15] hover:border-gold-500/25 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
