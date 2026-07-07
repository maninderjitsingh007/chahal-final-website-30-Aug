import React from "react";
import TreatmentsGrid from "@/components/site/TreatmentsGrid";
import { IMAGES } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

export default function TreatmentsPage() {
  const { t } = useLang();
  return (
    <div data-testid="treatments-page" className="pt-32 pb-8">
      <section className="container-x">
        <span className="eyebrow">{t("What we treat", "ਸਾਡੇ ਇਲਾਜ")}</span>
        <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-forest-900 max-w-4xl">
          {t("Herbal treatments for", "ਹਰਬਲ ਇਲਾਜ")} <em className="italic text-forest-700">{t("every stage of life.", "ਹਰ ਉਮਰ ਲਈ।")}</em>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-forest-900/75 leading-relaxed">
          {t(
            "From childhood conditions to elderly care, from women's health to men's vitality — every plan is personalized using classical Ayurvedic diagnosis and pure herbal medicines.",
            "ਬਚਪਨ ਤੋਂ ਲੈ ਕੇ ਬੁਢਾਪੇ ਤੱਕ, ਹਰ ਯੋਜਨਾ ਖਾਸ ਬਣਾਈ ਜਾਂਦੀ ਹੈ।"
          )}
        </p>
      </section>

      <TreatmentsGrid />

      <section className="container-x grid lg:grid-cols-2 gap-10 items-center py-16">
        <div className="rounded-[2rem] overflow-hidden ring-1 ring-forest-900/10">
          <img src={IMAGES.bottles} alt="Herbal remedies" className="h-[480px] w-full object-cover" />
        </div>
        <div>
          <h2 className="font-serif text-4xl text-forest-900">{t("Not sure what you need?", "ਸਮਝ ਨਹੀਂ ਆ ਰਿਹਾ?")}</h2>
          <p className="mt-4 text-forest-900/75 leading-relaxed max-w-lg">
            {t(
              "Send us a short message describing your symptoms. Dr. Chahal will personally review your case and suggest the right consultation.",
              "ਆਪਣੇ ਲੱਛਣ ਦੱਸਦੇ ਹੋਏ ਇੱਕ ਸੰਦੇਸ਼ ਭੇਜੋ। ਡਾ. ਚਾਹਲ ਖੁਦ ਦੇਖਣਗੇ ਅਤੇ ਸਹੀ ਸਲਾਹ ਦੇਣਗੇ।"
            )}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact#book" data-testid="treatments-book-btn" className="btn-primary">{t("Describe my case", "ਮੇਰੀ ਸਮੱਸਿਆ ਦੱਸੋ")}</Link>
            <Link to="/contact" data-testid="treatments-contact-btn" className="btn-outline">{t("Contact us", "ਸੰਪਰਕ ਕਰੋ")}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
