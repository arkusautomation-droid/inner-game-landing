import { Briefcase, MessageSquare, TrendingUp, Quote } from "lucide-react";

export default function AuthorSection() {
  const stats = [
    { icon: Briefcase, value: "15+", label: "Years in Business" },
    { icon: MessageSquare, value: "1000s", label: "Conversations with Founders" },
    { icon: TrendingUp, value: "Dozens", label: "Industries Served" },
  ];

  return (
    <section className="py-24 bg-section-alt relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gold-500/[0.03] blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4">The Author</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Forged in the <span className="text-gradient-gold">Trenches</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Arkadiusz Szustak</h3>
              <p className="text-gold-400 italic">Arkadius Sixer</p>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              For over 15 years, I&apos;ve been running a marketing agency, sitting across the table from business owners in every industry imaginable &mdash; retail, tech, real estate, healthcare, e-commerce, manufacturing, and beyond.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Thousands of conversations. Thousands of strategies. Thousands of hours watching brilliant, capable people build, stumble, and sometimes &mdash; quietly give up. Not because they lacked talent, capital, or opportunity. But because something inside them kept pulling the handbrake.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I saw the same pattern in every industry: the founder who had the perfect plan but couldn&apos;t execute. The CEO who scaled to seven figures but destroyed everything else in the process. The entrepreneur who knew exactly what to do &mdash; and still chose comfort over confrontation.
            </p>

            <p className="text-gray-300 leading-relaxed font-medium">
              Then I recognized it in myself.
            </p>

            <p className="text-gray-400 leading-relaxed">
              That&apos;s when I stopped just observing and started building a system. I combined 15 years of front-line business experience with deep personal transformation and distilled it all into one book. No filler. No stories about monks on mountaintops. <span className="text-gold-400 font-semibold">Just the meat.</span>
            </p>

            <p className="text-gray-400 leading-relaxed">
              Every framework in &ldquo;The Inner Game of Life&rdquo; was forged in real conversations with real people facing real problems &mdash; and in my own war with The Usurper.
            </p>

            <div className="pt-4">
              <a
                href="https://www.agencjamedialna.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold-400/70 hover:text-gold-400 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                agencjamedialna.pl &mdash; Marketing Agency since 2011
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-5 rounded-xl border border-gold-500/10 bg-[#0D0D15] hover:border-gold-500/25 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                    <stat.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-5 rounded-xl border border-gold-500/10 bg-[#0D0D15]">
              <Quote className="w-6 h-6 text-gold-500/20 mb-3" />
              <p className="text-gray-300 italic leading-relaxed">
                &ldquo;I didn&apos;t write this book from an enlightened mountaintop. I wrote it from the trenches. Every chapter is battle-tested &mdash; in real life, in real business, in real conversations at 2 AM when the mask comes off.&rdquo;
              </p>
              <p className="text-gold-400 text-sm mt-3">&mdash; Arkadius Sixer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
