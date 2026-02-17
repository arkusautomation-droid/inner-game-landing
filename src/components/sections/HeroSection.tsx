"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Book3D from "@/components/ui/Book3D";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-royal-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-gold-400 text-sm uppercase tracking-[0.3em] mb-6 font-medium">
              A Strategic Manual for Total Self-Mastery
            </p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">The Inner Game</span>
              <br />
              <span className="text-gradient-gold">of Life</span>
            </h1>

            <p className="text-2xl md:text-3xl font-display italic text-gray-300 mb-6">
              Total Dominion
            </p>

            <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed lg:mx-0 mx-auto">
              End the Inner War and Reclaim Your Throne. Stop being a passenger
              in a journey you are meant to lead.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
              <a
                href="#get-book"
                className="group px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold rounded-lg text-lg transition-all hover:from-gold-500 hover:to-gold-400 glow-gold-strong flex items-center gap-2"
              >
                Claim Your Throne
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#chapters"
                className="px-8 py-4 border border-gold-500/30 text-gold-400 font-medium rounded-lg text-lg hover:bg-gold-500/10 transition-all"
              >
                Explore the Arsenal
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Book3D />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gold-500/50 mx-auto" />
        </div>
      </div>
    </section>
  );
}
