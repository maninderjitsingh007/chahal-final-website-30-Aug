import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CLINIC, IMAGES } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

export default function SplashBanner() {
  const { t } = useLang();
  const waHref = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`;

  return (
    <section data-testid="splash-banner" className="relative w-full pt-20 lg:pt-24">
      <div className="relative h-[70vh] min-h-[520px] lg:h-[85vh] lg:min-h-[640px] w-full overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Chahal Ayurvedic Clinic — mortar and pestle with fresh herbs"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/35 to-forest-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/70 via-transparent to-transparent" />

        <div className="relative z-10 h-full container-x flex flex-col justify-end pb-16 lg:pb-24 text-cream-50">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-cream-50/12 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50/95 ring-1 ring-cream-50/25 backdrop-blur-sm animate-fade-up">
            {t("Chahal Ayurvedic Clinic • Malerkotla, Punjab", "ਚਾਹਲ ਆਯੁਰਵੈਦਿਕ ਕਲੀਨਿਕ • ਮਾਲੇਰਕੋਟਲਾ, ਪੰਜਾਬ")}
          </span>

          <h1 className="mt-6 max-w-4xl h-hero font-display animate-fade-up" style={{ animationDelay: "80ms" }}>
            {t(
              <>Nature&apos;s oldest <span className="text-gold-light">pharmacy</span>,<br/>reopened for you.</>,
              <>ਕੁਦਰਤ ਦੀ ਸਭ ਤੋਂ ਪੁਰਾਣੀ<br/><span className="text-gold-light">ਦਵਾਖਾਨਾ</span>, ਤੁਹਾਡੇ ਲਈ।</>
            )}
          </h1>

          <p className="mt-5 max-w-2xl font-punjabi text-2xl sm:text-3xl text-cream-50/95 animate-fade-up" style={{ animationDelay: "140ms" }}>
            {CLINIC.tagline_pa}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
            <Link to="/contact#book" data-testid="splash-book-btn" className="btn-accent">
              {t("Book Your Consultation", "ਸਲਾਹ ਬੁੱਕ ਕਰੋ")} <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={waHref} target="_blank" rel="noreferrer" data-testid="splash-whatsapp-btn" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="container-x pb-4">
            <div className="mx-auto rounded-t-2xl bg-cream-50/12 backdrop-blur-md ring-1 ring-cream-50/20 px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-cream-50/90 text-xs sm:text-sm">
              <span className="font-semibold">{CLINIC.doctor_en} <span className="text-cream-50/60">({CLINIC.qualification})</span></span>
              <span className="hidden sm:inline text-cream-50/60">|</span>
              <span>{t("15+ years of authentic Ayurvedic practice", "15+ ਸਾਲਾਂ ਦਾ ਅਸਲੀ ਆਯੁਰਵੈਦਿਕ ਤਜ਼ਰਬਾ")}</span>
              <span className="hidden sm:inline text-cream-50/60">|</span>
              <a href={`tel:${CLINIC.phone_tel}`} data-testid="splash-call-link" className="font-semibold text-gold-light hover:text-cream-50">📞 {CLINIC.phone_display}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
