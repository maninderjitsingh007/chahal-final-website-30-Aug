import React from "react";
import * as Icons from "lucide-react";
import { PILLARS, IMAGES } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

export default function PhilosophySection() {
  const { t } = useLang();
  return (
    <section data-testid="philosophy-section" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-forest-900" />
      <img
        src={IMAGES.neem}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/85 to-forest-900" />

      <div className="relative container-x text-cream-50">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cream-50/80 ring-1 ring-cream-50/15">
            <Icons.Sprout className="h-3.5 w-3.5" /> {t("Our Philosophy", "ਸਾਡਾ ਸਿਧਾਂਤ")}
          </span>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            {t(
              <>Healing that <em className="italic text-gold-light">works with nature</em>, not against it.</>,
              <><em className="italic text-gold-light">ਕੁਦਰਤ</em> ਨਾਲ ਮਿਲ ਕੇ ਕੀਤਾ ਗਿਆ ਇਲਾਜ।</>
            )}
          </h2>
          <p className="mt-5 text-cream-50/80 text-lg max-w-2xl leading-relaxed">
            {t(
              "For over two decades, Chahal Ayurvedic Clinic has followed the classical principles of Ayurveda — treating each patient as an individual and each ailment at its origin.",
              "ਦੋ ਦਹਾਕਿਆਂ ਤੋਂ ਵੱਧ, ਚਾਹਲ ਆਯੁਰਵੈਦਿਕ ਕਲੀਨਿਕ ਹਰ ਮਰੀਜ਼ ਦੀ ਖਾਸ ਦੇਖਭਾਲ ਅਤੇ ਹਰ ਬਿਮਾਰੀ ਦੀ ਜੜ੍ਹ ਤੱਕ ਪਹੁੰਚ ਕਰਦਾ ਹੈ।"
            )}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => {
            const Icon = Icons[p.icon] || Icons.Leaf;
            return (
              <div key={p.id} className="group relative rounded-3xl bg-cream-50/[0.06] ring-1 ring-cream-50/15 p-6 backdrop-blur-sm transition hover:bg-cream-50/[0.09] hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-forest-900 shadow-lg">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-6 font-serif text-2xl leading-tight text-cream-50">{p.en}</p>
                <p className="mt-1 font-punjabi text-cream-50/70">{p.pa}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
