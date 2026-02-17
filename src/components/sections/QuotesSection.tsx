import { Quote } from "lucide-react";

export default function QuotesSection() {
  const quotes = [
    { text: "Courage is not 'Amazon Prime' \u2014 it is not delivered to your door with free shipping. It is a resource you must generate yourself within the depths of your own Kingdom.", chapter: "Prologue" },
    { text: "Your life is not built in years; it is manufactured in seconds. Every micro-decision is a brick. What are you building today?", chapter: "Chapter 3" },
    { text: "Discipline is not a punishment. It is loving yourself enough to do what is best for you, even when you absolutely do not feel like doing it.", chapter: "Chapter 2" },
  ];

  return (
    <section className="py-24 bg-section-alt relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/[0.03] blur-[120px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4">From the Book</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Words of the <span className="text-gradient-gold">Sovereign</span>
          </h2>
        </div>

        <div className="space-y-8">
          {quotes.map((quote, i) => (
            <div key={i} className="p-8 rounded-xl border border-gold-500/10 bg-[#0D0D15]/80 backdrop-blur-sm">
              <Quote className="w-8 h-8 text-gold-500/20 mb-4" />
              <p className="text-xl md:text-2xl font-display text-gray-200 leading-relaxed italic mb-4">
                &ldquo;{quote.text}&rdquo;
              </p>
              <p className="text-sm text-gold-400">&mdash; {quote.chapter}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
