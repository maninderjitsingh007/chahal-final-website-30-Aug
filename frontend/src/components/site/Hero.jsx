import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Sprout } from "lucide-react";
import { CLINIC, IMAGES } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const waHref = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`;

  return (
    <section data-testid="hero-section" className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      {/* Botanical decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-16 -left-24 h-96 w-96 rounded-full bg-forest-200/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="eyebrow">
            <Sprout className="h-3.5 w-3.5" /> {t("Since a lineage of healing", "ਪਰੰਪਰਾ ਦੀ ਵਿਰਾਸਤ")}
          </span>

          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-forest-900">
            {t(
              <>Authentic <em className="italic text-forest-700">Ayurveda</em><br/>for every family.</>,
              <>ਹਰ ਪਰਿਵਾਰ ਲਈ<br/><em className="italic text-forest-700">ਅਸਲੀ ਆਯੁਰਵੇਦ</em></>
            )}
          </h1>

          <p className="mt-5 font-punjabi text-2xl sm:text-3xl text-forest-800/90">
            {CLINIC.tagline_pa}
          </p>
          <p className="mt-2 text-base sm:text-lg text-forest-900/70 max-w-xl">
            {t(
              "A holistic clinic in Malerkotla offering time-tested herbal cures for the diseases modern medicine only masks. Safe, natural, and remarkably effective.",
              "ਮਾਲੇਰਕੋਟਲਾ ਦੀ ਆਯੁਰਵੈਦਿਕ ਕਲੀਨਿਕ — ਹਰ ਬਿਮਾਰੀ ਲਈ ਸਦੀਆਂ ਪੁਰਾਣੇ ਹਰਬਲ ਇਲਾਜ। ਸੁਰੱਖਿਅਤ, ਕੁਦਰਤੀ ਅਤੇ ਅਸਰਦਾਰ।"
            )}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact#book" data-testid="hero-book-btn" className="btn-primary">
              {t("Book Appointment", "ਅਪਾਇੰਟਮੈਂਟ ਬੁੱਕ ਕਰੋ")} <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${CLINIC.phone_tel}`} data-testid="hero-call-btn" className="btn-outline">
              <Phone className="h-4 w-4" /> {CLINIC.phone_display}
            </a>
            <a href={waHref} target="_blank" rel="noreferrer" data-testid="hero-whatsapp-btn" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-forest-900/80">
              <ShieldCheck className="h-4 w-4 text-forest-700" />
              {t("BAMS Certified Practitioner", "BAMS ਪ੍ਰਮਾਣਿਤ")}
            </div>
            <div className="hidden sm:block h-4 w-px bg-forest-900/15" />
            <div className="text-sm text-forest-900/80">
              <span className="font-semibold text-forest-900">{CLINIC.doctor_en}</span> <span className="text-forest-900/60">({CLINIC.qualification})</span>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="relative aspect-[4/5] w-full max-w-md ml-auto">
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden ring-1 ring-forest-900/10 shadow-[0_40px_80px_-30px_rgba(15,81,50,0.35)]">
              <img
                src={IMAGES.hero}
                alt="Mortar and pestle with fresh herbs"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 via-transparent to-transparent" />
            </div>

            {/* floating badge */}
            <div className="absolute -left-6 top-8 card-soft px-4 py-3 flex items-center gap-3 animate-float">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-forest-800 text-cream-50">
                <Sprout className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-forest-800/70">100% Natural</p>
                <p className="text-sm font-semibold text-forest-900">Herbal Formulas</p>
              </div>
            </div>

            <div className="absolute -right-4 bottom-10 card-soft px-4 py-3 max-w-[220px] animate-float" style={{ animationDelay: "1.2s" }}>
              <p className="font-serif text-lg text-forest-900 leading-tight">
                “{t("Those who tried English medicines — please come once.", "ਅੰਗਰੇਜ਼ੀ ਦਵਾਈਆਂ ਖਾ ਚੁੱਕੇ ਮਰੀਜ਼ ਇੱਕ ਵਾਰ ਜ਼ਰੂਰ ਮਿਲੋ।")}”
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-forest-700/70">— Dr. Chahal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
