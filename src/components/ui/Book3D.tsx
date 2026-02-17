"use client";

import { Crown } from "lucide-react";

const BOOK_W = 260;
const BOOK_H = 380;
const SPINE_W = 40;
const HALF_SPINE = SPINE_W / 2;

export default function Book3D() {
  return (
    <div className="mx-auto animate-float" style={{ perspective: "1800px", width: BOOK_W + SPINE_W, height: BOOK_H }}>
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-28deg) rotateX(4deg)",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "rotateY(-16deg) rotateX(2deg)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "rotateY(-28deg) rotateX(4deg)"; }}
      >
        {/* ──── FRONT COVER ──── */}
        <div
          className="absolute rounded-r-md overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            width: BOOK_W,
            height: BOOK_H,
            right: 0,
            transform: `translateZ(${HALF_SPINE}px)`,
            boxShadow: "4px 8px 40px rgba(0,0,0,0.6), 0 0 50px rgba(212,160,23,0.12)",
          }}
        >
          <div className="w-full h-full relative overflow-hidden" style={{
            background: "linear-gradient(145deg, #1c1625 0%, #110e1a 40%, #0c0a14 70%, #08070e 100%)",
          }}>
            <div className="absolute inset-0" style={{
              background: "linear-gradient(125deg, transparent 30%, rgba(212,160,23,0.04) 45%, rgba(212,160,23,0.08) 50%, rgba(212,160,23,0.04) 55%, transparent 70%)",
            }} />
            <div className="absolute inset-0 rounded-r-md" style={{
              boxShadow: "inset 0 0 30px rgba(212,160,23,0.04)",
            }} />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 70%)" }} />

            <div className="absolute inset-0 flex flex-col items-center justify-between py-8 px-6">
              <div className="text-center">
                <Crown className="w-10 h-10 text-gold-400 mx-auto mb-2" style={{ filter: "drop-shadow(0 0 8px rgba(212,160,23,0.3))" }} />
                <p className="text-gold-400/50 text-[8px] uppercase tracking-[0.3em]">A Strategic Manual</p>
              </div>

              <div className="text-center">
                <p className="font-display text-[22px] font-bold text-white/90 tracking-wider leading-tight">THE INNER</p>
                <p className="font-display text-[22px] font-bold text-white/90 tracking-wider leading-tight">GAME</p>
                <div className="flex items-center gap-3 my-3">
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-gold-400/50" />
                  <Crown className="w-3 h-3 text-gold-400/40" />
                  <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-gold-400/50" />
                </div>
                <p className="font-display text-[36px] font-bold leading-tight" style={{
                  background: "linear-gradient(180deg, #FFD966 0%, #D4A017 50%, #B8860B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 2px 4px rgba(212,160,23,0.2))",
                }}>of Life</p>
                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent mx-auto mt-3 mb-2" />
                <p className="text-gray-400/70 text-[11px] italic tracking-[0.1em]">Total Dominion</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent mx-auto mb-2" />
                <p className="text-gold-500/30 text-[7px] uppercase tracking-[0.25em]">End the Inner War &amp; Reclaim Your Throne</p>
              </div>
            </div>
          </div>
        </div>

        {/* ──── SPINE ──── */}
        <div
          className="absolute"
          style={{
            width: SPINE_W,
            height: BOOK_H,
            right: BOOK_W,
            transform: `rotateY(-90deg)`,
            transformOrigin: "right center",
            background: "linear-gradient(90deg, #0e0c16 0%, #18142a 30%, #1c1630 50%, #18142a 70%, #0e0c16 100%)",
            boxShadow: "inset 2px 0 6px rgba(0,0,0,0.5), inset -2px 0 6px rgba(0,0,0,0.5)",
          }}
        >
          <div className="absolute inset-0" style={{
            background: "repeating-linear-gradient(to right, transparent 0px, transparent 3px, rgba(212,160,23,0.03) 3px, rgba(212,160,23,0.03) 4px)",
          }} />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
          <div className="h-full flex items-center justify-center">
            <p className="text-gold-400/50 text-[9px] uppercase tracking-[0.2em] whitespace-nowrap font-display font-bold rotate-180" style={{ writingMode: "vertical-rl" }}>
              The Inner Game of Life
            </p>
          </div>
        </div>

        {/* ──── PAGE BLOCK (top edge) ──── */}
        <div
          className="absolute"
          style={{
            width: BOOK_W - 6,
            height: SPINE_W,
            right: 3,
            top: 0,
            transform: `rotateX(90deg)`,
            transformOrigin: "top center",
            background: "linear-gradient(180deg, #2a2535 0%, #1e1a28 50%, #16131f 100%)",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
          }}
        />

        {/* ──── PAGE BLOCK (bottom edge) ──── */}
        <div
          className="absolute"
          style={{
            width: BOOK_W - 6,
            height: SPINE_W,
            right: 3,
            bottom: 0,
            transform: `rotateX(-90deg)`,
            transformOrigin: "bottom center",
            background: "linear-gradient(0deg, #2a2535 0%, #1e1a28 50%, #16131f 100%)",
            boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.3)",
          }}
        />

        {/* ──── PAGE BLOCK (right/fore-edge) ──── */}
        <div
          className="absolute"
          style={{
            width: SPINE_W,
            height: BOOK_H - 6,
            right: -HALF_SPINE,
            top: 3,
            transform: `rotateY(90deg)`,
            transformOrigin: "left center",
            background: "linear-gradient(90deg, #1e1a28 0%, #2a2535 50%, #1e1a28 100%)",
            boxShadow: "inset 2px 0 3px rgba(0,0,0,0.2), inset -1px 0 2px rgba(0,0,0,0.15)",
          }}
        >
          <div className="absolute inset-0" style={{
            background: "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(212,160,23,0.03) 2px, rgba(212,160,23,0.03) 3px)",
          }} />
        </div>

        {/* ──── BACK COVER ──── */}
        <div
          className="absolute rounded-r-md"
          style={{
            width: BOOK_W,
            height: BOOK_H,
            right: 0,
            transform: `translateZ(-${HALF_SPINE}px)`,
            background: "linear-gradient(145deg, #15121c 0%, #0e0c14 50%, #0a0910 100%)",
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.3)",
          }}
        />

        {/* ──── DROP SHADOW on ground ──── */}
        <div
          className="absolute"
          style={{
            width: BOOK_W + 40,
            height: 60,
            right: -20,
            bottom: -40,
            transform: "rotateX(90deg)",
            transformOrigin: "bottom center",
            background: "radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </div>
    </div>
  );
}
