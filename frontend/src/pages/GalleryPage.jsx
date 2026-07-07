import React from "react";
import { IMAGES } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

const GALLERY = [
  { src: IMAGES.hero, cap_en: "Fresh herbs & mortar", cap_pa: "ਤਾਜ਼ੀਆਂ ਬੂਟੀਆਂ ਅਤੇ ਖਲਬੱਟਾ", tall: true },
  { src: IMAGES.consultation, cap_en: "Patient consultation", cap_pa: "ਮਰੀਜ਼ ਨਾਲ ਸਲਾਹ" },
  { src: IMAGES.herbsFlat, cap_en: "Herbal ingredients", cap_pa: "ਹਰਬਲ ਸਮੱਗਰੀ" },
  { src: IMAGES.bottles, cap_en: "Ayurvedic remedies", cap_pa: "ਆਯੁਰਵੈਦਿਕ ਦਵਾਈਆਂ", tall: true },
  { src: IMAGES.clinic, cap_en: "Clinic interior", cap_pa: "ਕਲੀਨਿਕ ਦਾ ਅੰਦਰਲਾ ਦ੍ਰਿਸ਼" },
  { src: IMAGES.neem, cap_en: "Neem — the sacred healer", cap_pa: "ਨਿੰਮ — ਪਵਿੱਤਰ ਇਲਾਜ" },
  { src: IMAGES.meditation, cap_en: "Mind-body balance", cap_pa: "ਮਨ ਅਤੇ ਸਰੀਰ ਦਾ ਸੰਤੁਲਨ", tall: true },
];

export default function GalleryPage() {
  const { t } = useLang();
  return (
    <div data-testid="gallery-page" className="pt-32 pb-16">
      <section className="container-x">
        <span className="eyebrow">{t("Inside the clinic", "ਕਲੀਨਿਕ ਦੇ ਅੰਦਰ")}</span>
        <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-forest-900 max-w-4xl">
          {t("A place of", "ਸ਼ਾਂਤੀ ਅਤੇ")} <em className="italic text-forest-700">{t("calm & healing.", "ਇਲਾਜ ਦੀ ਥਾਂ।")}</em>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-forest-900/75">
          {t(
            "A quick look at our clinic, our herbs, and the traditions that guide us.",
            "ਸਾਡੀ ਕਲੀਨਿਕ, ਬੂਟੀਆਂ ਅਤੇ ਸਾਡੀ ਪਰੰਪਰਾ ਦੀ ਝਲਕ।"
          )}
        </p>
      </section>

      <section className="container-x mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {GALLERY.map((g, i) => (
          <figure
            key={i}
            data-testid={`gallery-item-${i}`}
            className={`mb-5 break-inside-avoid overflow-hidden rounded-3xl ring-1 ring-forest-900/10 group relative`}
          >
            <img
              src={g.src}
              alt={g.cap_en}
              className={`w-full ${g.tall ? "h-[420px]" : "h-[280px]"} object-cover transition duration-500 group-hover:scale-105`}
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end p-4 bg-gradient-to-t from-forest-900/85 via-forest-900/30 to-transparent text-cream-50">
              <div>
                <p className="font-serif text-lg leading-none">{t(g.cap_en, g.cap_pa)}</p>
                <p className="mt-1 font-punjabi text-xs text-cream-50/80">{g.cap_pa}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
}
