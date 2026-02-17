import { CheckCircle2 } from "lucide-react";

export default function AudienceSection() {
  const forYou = [
    "Entrepreneurs and leaders who feel the weight of performing but have lost connection with their purpose",
    "High-achievers trapped in the cycle of external success but internal emptiness",
    "Anyone who has tried 'self-help' but found it superficial and ineffective",
    "People who sense they have untapped potential but can't seem to break through invisible barriers",
    "Those ready for radical honesty and willing to pay the currency of growth",
  ];

  return (
    <section className="py-24 bg-dark-gradient">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            This Book Is For the <span className="text-gradient-gold">Ready</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Not everyone is prepared to face the truth. This arsenal is for those who are done playing the role of the Pawn.
          </p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {forYou.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-gold-500/10 bg-[#0D0D15] hover:border-gold-500/25 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-gold-400 shrink-0 mt-0.5" />
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
