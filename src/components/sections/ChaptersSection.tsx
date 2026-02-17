"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Target } from "lucide-react";
import { chapters } from "@/data/chapters";

export default function ChaptersSection() {
  const [openChapter, setOpenChapter] = useState<number | null>(null);

  return (
    <section id="chapters" className="py-24 bg-section-alt">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4">The Arsenal</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            9 Chapters. 9 Missions. <span className="text-gradient-gold">Total Transformation.</span>
          </h2>
        </div>

        <div className="space-y-8">
          {chapters.map((part) => (
            <div key={part.part}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center">
                  <span className="text-gold-400 font-display font-bold text-lg">{part.part}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">{part.partTitle}</h3>
              </div>

              <div className="space-y-2 ml-6 border-l border-gold-500/10 pl-6">
                {part.chapters.map((ch) => (
                  <div key={ch.num} className="rounded-lg border border-gold-500/10 bg-[#0D0D15] overflow-hidden hover:border-gold-500/20 transition-colors">
                    <button onClick={() => setOpenChapter(openChapter === ch.num ? null : ch.num)} className="w-full flex items-center justify-between p-4 text-left">
                      <div className="flex items-center gap-4">
                        <span className="text-gold-500/40 font-display font-bold text-lg w-8">{ch.num}</span>
                        <div>
                          <h4 className="font-semibold text-white">{ch.title}</h4>
                          <p className="text-sm text-gray-500 italic">{ch.subtitle}</p>
                        </div>
                      </div>
                      {openChapter === ch.num ? <ChevronUp className="w-5 h-5 text-gold-500/50 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gold-500/50 shrink-0" />}
                    </button>
                    {openChapter === ch.num && (
                      <div className="px-4 pb-4 pl-16">
                        <p className="text-gray-400 mb-3">{ch.desc}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Target className="w-4 h-4 text-gold-400" />
                          <span className="text-gold-400 font-medium">Mission: {ch.mission}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
