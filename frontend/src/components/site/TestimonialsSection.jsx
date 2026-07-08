import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "@/hooks/useReveal";

export default function TestimonialsSection() {
  const { t, lang } = useLang();
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState([]);
  const [paused, setPaused] = useState(false);

  const scrollTo = useCallback((idx) => embla && embla.scrollTo(idx), [embla]);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
    setSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  useEffect(() => {
    if (!embla || paused) return;
    const id = setInterval(() => embla.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [embla, paused]);

  return (
    <section data-testid="testimonials-section" className="relative py-24 lg:py-32 bg-cream-100/60">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">{t("Words from patients", "ਮਰੀਜ਼ਾਂ ਦੀ ਆਵਾਜ਼")}</span>
          <h2 className="mt-5 h-section font-display text-forest-900">
            {t("Real stories,", "ਸੱਚੀਆਂ ਕਹਾਣੀਆਂ,")} <span className="text-forest-700">{t("real healing.", "ਸੱਚਾ ਇਲਾਜ।")}</span>
          </h2>
          <p className="mt-4 t-body text-ink/70">
            {t("Trusted by families across Punjab, one honest testimony at a time.",
              "ਪੰਜਾਬ ਭਰ ਦੇ ਪਰਿਵਾਰਾਂ ਦੁਆਰਾ ਭਰੋਸੇਯੋਗ।")}
          </p>
        </Reveal>

        <div
          className="mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {TESTIMONIALS.map((tst, i) => (
                <figure
                  key={i}
                  data-testid={`testimonial-card-${i}`}
                  className="min-w-0 shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 card-glass p-8 flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-forest-800/25" />
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: tst.rating }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-gold text-gold animate-fade-in" style={{ animationDelay: `${s * 90}ms` }} />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-5 font-display text-lg leading-snug text-forest-900 flex-1 font-medium">
                    “{lang === "pa" ? tst.text_pa : tst.text_en}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-forest-800/10 pt-4">
                    <p className="font-semibold text-forest-900">{lang === "pa" ? tst.name_pa : tst.name_en}</p>
                    <p className="text-xs text-ink/60">{tst.location}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  data-testid={`testimonial-dot-${i}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${selectedIndex === i ? "w-8 bg-forest-800" : "w-2 bg-forest-800/25 hover:bg-forest-800/50"}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={scrollPrev} data-testid="testimonial-prev" aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full bg-white ring-1 ring-forest-800/10 text-forest-900 shadow-soft hover:-translate-y-0.5 hover:shadow-lift transition">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button onClick={scrollNext} data-testid="testimonial-next" aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 text-cream-50 shadow-soft hover:-translate-y-0.5 hover:shadow-lift transition">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
