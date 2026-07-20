import React from "react";
import * as Icons from "lucide-react";
import { PILLARS, IMAGES } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "@/hooks/useReveal";

export default function PhilosophySection() {
  const { t } = useLang();
  return (
    <section data-testid="philosophy-section" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-forest-900" />
      <img src={IMAGES.neem} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/85 to-forest-900" />

      <div className="relative container-x text-cream-50">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50/80 ring-1 ring-cream-50/15">
            <Icons.Sprout className="h-3.5 w-3.5" /> {t("Our Philosophy", "ਸਾਡਾ ਸਿਧਾਂਤ")}
          </span>
          <h2 className="mt-6 h-hero font-display leading-[1.05]">
            {t(
              <>Healing that <span className="text-gold-light">works with nature</span>, not against it.</>,
              <><span className="text-gold-light">ਕੁਦਰਤ</span> ਨਾਲ ਮਿਲ ਕੇ ਕੀਤਾ ਗਿਆ ਇਲਾਜ।</>
            )}
          </h2>
          <p className="mt-5 t-body text-cream-50/80 max-w-2xl">
            {t(
              "For over two decades, Chahal Ayurvedic Clinic has followed the classical principles of Ayurveda — treating each patient as an individual and each ailment at its origin.",
              "ਦੋ ਦਹਾਕਿਆਂ ਤੋਂ ਵੱਧ, ਚਹਿਲ ਆਯੁਰਵੈਦਿਕ ਕਲੀਨਿਕ ਹਰ ਮਰੀਜ਼ ਦੀ ਖਾਸ ਦੇਖਭਾਲ ਅਤੇ ਹਰ ਬਿਮਾਰੀ ਦੀ ਜੜ੍ਹ ਤੱਕ ਪਹੁੰਚ ਕਰਦਾ ਹੈ।"
            )}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = Icons[p.icon] || Icons.Leaf;
            return (
              <Reveal key={p.id} delay={i * 80}>
                <div className="group relative rounded-[20px] bg-cream-50/[0.07] ring-1 ring-cream-50/15 p-6 backdrop-blur-md transition-all duration-500 hover:bg-cream-50/[0.11] hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-forest-900 shadow-soft transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 font-display text-2xl font-bold leading-tight text-cream-50">{p.en}</p>
                  <p className="mt-1 font-punjabi text-cream-50/75">{p.pa}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
