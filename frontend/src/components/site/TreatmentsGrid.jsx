import React from "react";
import * as Icons from "lucide-react";
import { TREATMENTS } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Reveal } from "@/hooks/useReveal";

export default function TreatmentsGrid({ compact = false }) {
  const { t } = useLang();
  const list = compact ? TREATMENTS.slice(0, 8) : TREATMENTS;

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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((tr, i) => {
            const Icon = Icons[tr.icon] || Icons.Leaf;
            return (
              <Reveal key={tr.id} delay={(i % 4) * 80} className="h-full">
                <article
                  data-testid={`treatment-card-${tr.id}`}
                  className="group relative h-full overflow-hidden card-glass p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-forest-100/70 opacity-60 transition-transform duration-700 group-hover:scale-125 group-hover:bg-forest-100" />
                  <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-gold/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-forest-700 to-forest-900 text-cream-50 shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-forest-800/50 tracking-widest">0{i + 1}</span>
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-bold leading-snug text-forest-900">{tr.en}</h3>
                  <p className="relative mt-1 font-punjabi text-forest-700/90 text-base">{tr.pa}</p>
                  <div className="relative mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-700">
                      <Icons.Leaf className="h-3 w-3" /> {t("Herbal • Safe", "ਹਰਬਲ • ਸੁਰੱਖਿਅਤ")}
                    </span>
                    <Link
                      to="/contact#book"
                      data-testid={`treatment-cta-${tr.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-forest-800 link-underline"
                    >
                      {t("Consult", "ਸਲਾਹ")} <Icons.ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
