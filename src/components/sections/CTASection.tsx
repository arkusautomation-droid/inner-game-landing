"use client";

import { useState } from "react";
import { BookOpen, Target, Star, CheckCircle2, Mail, Lock } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section id="get-book" className="py-24 bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold-500/5 blur-[150px]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="p-10 md:p-14 rounded-2xl border border-gold-500/20 bg-[#0D0D15] glow-gold text-center">
          <div className="w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-gold-400" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Reclaim Your <span className="text-gradient-gold">Throne</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Enter your email to get instant access to &ldquo;The Inner Game of Life: Total Dominion&rdquo; and begin your transformation today.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl border border-green-500/30 bg-green-950/20">
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <p className="text-green-300 text-lg font-semibold">The gates are open. Check your email.</p>
              <p className="text-green-400/60 text-sm mt-2">Your journey to sovereignty begins now.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-10 pr-4 py-3.5 bg-[#15152A] border border-gold-500/20 rounded-lg text-white placeholder-gray-500 outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all"
                  />
                </div>
                <button type="submit" className="px-6 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold rounded-lg hover:from-gold-500 hover:to-gold-400 transition-all glow-gold-strong whitespace-nowrap">
                  Get Access
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                <Lock className="w-3.5 h-3.5" />
                <span>Your data is sacred. No spam, ever.</span>
              </div>
            </form>
          )}

          <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gold-500/10">
            {[
              { icon: BookOpen, label: "9 Chapters" },
              { icon: Target, label: "9 Tactical Missions" },
              { icon: Star, label: "Lifetime Access" },
            ].map((feat, i) => (
              <div key={i} className="text-center">
                <feat.icon className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                <p className="text-xs text-gray-400">{feat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
