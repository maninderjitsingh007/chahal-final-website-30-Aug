import React from "react";
import * as Icons from "lucide-react";
import { TREATMENTS } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

export default function TreatmentsGrid({ compact = false }) {
  const { t } = useLang();
  const list = compact ? TREATMENTS.slice(0, 8) : TREATMENTS;

  return (
    <section data-testid="treatments-section" className="relative py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">{t("Conditions we treat", "ਅਸੀਂ ਕੀ ਇਲਾਜ ਕਰਦੇ ਹਾਂ")}</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-forest-900 tracking-tight">
              {t("Natural cure for", "ਕੁਦਰਤੀ ਇਲਾਜ")} <em className="italic text-forest-700">{t("every disease", "ਹਰ ਬਿਮਾਰੀ ਦਾ")}</em>.
            </h2>
            <p className="mt-4 text-forest-900/70 leading-relaxed">
              {t(
                "From chronic lifestyle disorders to family wellness — our herbal formulas work with the body, not against it.",
                "ਪੁਰਾਣੀਆਂ ਬਿਮਾਰੀਆਂ ਤੋਂ ਲੈ ਕੇ ਪਰਿਵਾਰਿਕ ਤੰਦਰੁਸਤੀ ਤੱਕ — ਸਾਡੇ ਹਰਬਲ ਫਾਰਮੂਲੇ ਸਰੀਰ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹਨ।"
              )}
            </p>
          </div>
          {compact && (
            <Link to="/treatments" data-testid="treatments-view-all-btn" className="btn-outline self-start lg:self-end">
              {t("View all treatments", "ਸਾਰੇ ਇਲਾਜ ਵੇਖੋ")} <Icons.ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((tr, i) => {
            const Icon = Icons[tr.icon] || Icons.Leaf;
            return (
              <div
                key={tr.id}
                data-testid={`treatment-card-${tr.id}`}
                className="group relative overflow-hidden rounded-3xl bg-white/85 backdrop-blur-sm ring-1 ring-forest-900/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(15,81,50,0.25)]"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-forest-100 opacity-60 transition-transform duration-500 group-hover:scale-125" />
                <div className="relative flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-800 text-cream-50 shadow-lg shadow-forest-800/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold text-forest-800/60">0{i + 1}</span>
                </div>
                <p className="relative mt-6 font-serif text-2xl leading-snug text-forest-900">{tr.en}</p>
                <p className="relative mt-1 font-punjabi text-forest-700/90">{tr.pa}</p>
                <div className="relative mt-5 flex items-center gap-2 text-xs font-semibold text-forest-700">
                  <Icons.Leaf className="h-3.5 w-3.5" /> {t("Herbal • Safe • Effective", "ਹਰਬਲ • ਸੁਰੱਖਿਅਤ • ਅਸਰਦਾਰ")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
