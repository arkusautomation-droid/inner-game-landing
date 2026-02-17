export default function ProblemSection() {
  const symptoms = [
    "You feel successful on paper but empty inside",
    "You're waiting for 'the right moment' to truly start living",
    "You make plans but sabotage yourself before executing them",
    "You seek validation from others to feel worthy",
    "You know you're capable of more but can't break through",
    "You react to life instead of designing it",
  ];

  return (
    <section className="py-24 bg-section-alt relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4">The Diagnosis</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Are You a <span className="text-gradient-gold">Pawn</span> on Your Own Board?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Millions live in a trance &mdash; running on autopilot, controlled by a force they call &ldquo;stress&rdquo; or &ldquo;habit.&rdquo; In this book, we call it{" "}
            <span className="text-gold-400 font-semibold">The Usurper</span>.
          </p>
        </div>

        <div className="grid gap-4 max-w-2xl mx-auto">
          {symptoms.map((symptom, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-red-900/30 bg-red-950/10 hover:border-red-800/50 transition-colors">
              <div className="w-6 h-6 rounded-full bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-red-400 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-300">{symptom}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-300 font-display italic">
            &ldquo;There is no rescue coming. The Sovereign does not wait.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
