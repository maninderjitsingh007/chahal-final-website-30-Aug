import React from "react";
import { Leaf } from "lucide-react";

/**
 * Elegant brand wordmark with letter-by-letter hover animation and a shimmer sweep.
 * Renders "Chahal Ayurvedic" (English) and "ਚਹਿਲ ਆਯੁਰਵੈਦਿਕ" (Punjabi).
 */
function splitLetters(text, accentWord) {
  const words = text.split(" ");
  const nodes = [];
  let idx = 0;
  words.forEach((word, wi) => {
    const isAccent = accentWord && word === accentWord;
    for (const ch of word) {
      nodes.push(
        <span
          key={`${wi}-${idx}`}
          className={`brand-letter ${isAccent ? "is-accent" : ""}`}
          style={{ animationDelay: `${idx * 45}ms` }}
        >
          {ch}
        </span>
      );
      idx += 1;
    }
    if (wi < words.length - 1) {
      nodes.push(<span key={`sp-${wi}`} className="brand-letter is-space" aria-hidden />);
      idx += 1;
    }
  });
  return nodes;
}

export default function BrandMark() {
  return (
    <div className="text-center animate-fade-up" data-testid="hero-brand-mark">
      <div className="brand-mark brand-shine mx-auto select-none px-4 py-2 rounded-full">
        <span className="brand-flourish -flip hidden sm:inline-block" aria-hidden />
        <span className="brand-letters text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none">
          {splitLetters("Chahal Ayurvedic", "Ayurvedic")}
        </span>
        <span className="brand-flourish hidden sm:inline-block" aria-hidden />
      </div>

      <div className="mt-3 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
        <Leaf className="h-4 w-4 text-gold-dark animate-float-y" />
        <p className="font-punjabi font-bold text-2xl sm:text-3xl md:text-4xl text-forest-800 tracking-tight">
          <span className="text-gold-dark italic">ਚਹਿਲ</span>{" "}
          <span>ਆਯੁਰਵੈਦਿਕ</span>
        </p>
        <Leaf className="h-4 w-4 text-gold-dark animate-float-y" style={{ animationDelay: "1.2s" }} />
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60" />
      </div>

      <p className="mt-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.42em] text-forest-800/70">
        Estd. Care · Since a Lineage of Healing
      </p>
    </div>
  );
}
