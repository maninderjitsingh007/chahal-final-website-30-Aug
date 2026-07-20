import React, { useState } from "react";
import * as Icons from "lucide-react";
import { TREATMENTS } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Reveal } from "@/hooks/useReveal";
import TreatmentModal from "@/components/site/TreatmentModal";

export default function TreatmentsGrid({ compact = false }) {
  const { t } = useLang();
  const [activeId, setActiveId] = useState(null);
  const list = compact ? TREATMENTS.slice(0, 8) : TREATMENTS;
  const active = TREATMENTS.find((x) => x.id === activeId) || null;

  return (
    <section data-testid="treatments-section" className="relative py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{t("Conditions we treat", "ਅਸੀਂ ਕੀ ਇਲਾਜ ਕਰਦੇ ਹਾਂ")}</span>
            <h2 className="mt-5 h-section font-display text-forest-900">
              {t("Natural care for", "ਕੁਦਰਤੀ ਇਲਾਜ")} <span className="text-forest-700">{t("every disease", "ਹਰ ਬਿਮਾਰੀ ਦਾ")}</span>.
            </h2>
            <p className="mt-4 t-body text-ink/70">
              {t(
                "From chronic lifestyle disorders to family wellness — our herbal formulas work with the body, not against it.",
                "ਪੁਰਾਣੀਆਂ ਬਿਮਾਰੀਆਂ ਤੋਂ ਲੈ ਕੇ ਪਰਿਵਾਰਿਕ ਤੰਦਰੁਸਤੀ ਤੱਕ — ਸਾਡੇ ਹਰਬਲ ਫਾਰਮੂਲੇ ਸਰੀਰ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹਨ।"
              )}
            </p>
          </Reveal>
          {compact && (
            <Reveal delay={80}>
              <Link to="/treatments" data-testid="treatments-view-all-btn" className="btn-outline self-start lg:self-end">
                {t("View all treatments", "ਸਾਰੇ ਇਲਾਜ ਵੇਖੋ")} <Icons.ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((tr, i) => {
            const Icon = Icons[tr.icon] || Icons.Leaf;
            return (
              <Reveal key={tr.id} delay={(i % 4) * 80} className="h-full">
                <article
                  data-testid={`treatment-card-${tr.id}`}
                  className="group relative h-full overflow-hidden rounded-[22px] bg-white/85 backdrop-blur-sm ring-1 ring-forest-900/10 shadow-soft p-6 flex flex-col transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-lift hover:ring-forest-800/25"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-forest-100/70 opacity-60 transition-transform duration-700 group-hover:scale-125 group-hover:bg-forest-100" />
                  <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-gold/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-forest-700 to-forest-900 text-cream-50 shadow-soft transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lift">
                      <Icon className="h-6 w-6 transition-transform duration-500 group-hover:-rotate-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-forest-800/50 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-display text-[19px] font-bold leading-snug text-forest-900">{tr.en}</h3>
                  <p className="relative mt-1.5 font-punjabi text-[15.5px] text-forest-700/90">{tr.pa}</p>

                  <div className="relative mt-auto pt-6 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-forest-700">
                      <Icons.Leaf className="h-3 w-3" /> {t("Herbal • Safe", "ਹਰਬਲ • ਸੁਰੱਖਿਅਤ")}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveId(tr.id)}
                      data-testid={`treatment-readmore-${tr.id}`}
                      className="inline-flex items-center gap-1 rounded-full bg-forest-800 text-cream-50 px-3.5 py-1.5 text-[11px] font-semibold shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-900 hover:shadow-lift"
                    >
                      {t("Read More", "ਹੋਰ ਪੜ੍ਹੋ")} <Icons.ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <TreatmentModal
        treatment={active}
        open={!!active}
        onOpenChange={(v) => !v && setActiveId(null)}
      />
    </section>
  );
}
