import React from "react";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { t, lang } = useLang();
  return (
    <section data-testid="testimonials-section" className="relative py-20 lg:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">{t("Words from patients", "ਮਰੀਜ਼ਾਂ ਦੀ ਆਵਾਜ਼")}</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-forest-900">
            {t("Real stories,", "ਸੱਚੀਆਂ ਕਹਾਣੀਆਂ,")} <em className="italic text-forest-700">{t("real healing.", "ਸੱਚਾ ਇਲਾਜ।")}</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((tst, i) => (
            <figure
              key={i}
              data-testid={`testimonial-card-${i}`}
              className="relative rounded-3xl bg-white ring-1 ring-forest-900/10 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col"
            >
              <Quote className="h-8 w-8 text-forest-800/25" />
              <blockquote className="mt-3 font-serif text-lg leading-snug text-forest-900 flex-1">
                “{lang === "pa" ? tst.text_pa : tst.text_en}”
              </blockquote>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: tst.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <figcaption className="mt-3">
                <p className="text-sm font-semibold text-forest-900">
                  {lang === "pa" ? tst.name_pa : tst.name_en}
                </p>
                <p className="text-xs text-forest-800/60">{tst.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
