import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CLINIC, IMAGES } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

export default function SplashBanner() {
  const { t } = useLang();
  const waHref = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`;

  return (
    <section
      data-testid="splash-banner"
      className="relative w-full pt-20 lg:pt-24"
    >
      <div className="relative h-[70vh] min-h-[520px] lg:h-[85vh] lg:min-h-[640px] w-full overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Chahal Ayurvedic Clinic — mortar and pestle with fresh herbs"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        {/* Warm cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/40 to-forest-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/60 via-transparent to-transparent" />

        <div className="relative z-10 h-full container-x flex flex-col justify-end pb-14 lg:pb-20 text-cream-50">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-cream-50/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cream-50/90 ring-1 ring-cream-50/20 backdrop-blur-sm animate-fade-up">
            {t("Chahal Ayurvedic Clinic • Malerkotla, Punjab", "ਚਾਹਲ ਆਯੁਰਵੈਦਿਕ ਕਲੀਨਿਕ • ਮਾਲੇਰਕੋਟਲਾ, ਪੰਜਾਬ")}
          </span>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl sm:text-6xl lg:text-8xl leading-[1] tracking-tight animate-fade-up" style={{ animationDelay: "80ms" }}>
            {t(
              <>Nature's oldest <em className="italic text-gold-light">pharmacy</em>,<br/>reopened for you.</>,
              <>ਕੁਦਰਤ ਦੀ ਸਭ ਤੋਂ ਪੁਰਾਣੀ<br/><em className="italic text-gold-light">ਦਵਾਖਾਨਾ</em>, ਤੁਹਾਡੇ ਲਈ।</>
            )}
          </h1>

          <p className="mt-5 max-w-2xl font-punjabi text-2xl sm:text-3xl text-cream-50/90 animate-fade-up" style={{ animationDelay: "140ms" }}>
            {CLINIC.tagline_pa}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
            <Link to="/contact#book" data-testid="splash-book-btn" className="btn-primary !bg-gold !text-forest-900 hover:!bg-gold-light">
              {t("Book Your Consultation", "ਸਲਾਹ ਬੁੱਕ ਕਰੋ")} <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={waHref} target="_blank" rel="noreferrer" data-testid="splash-whatsapp-btn" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Doctor credit strip */}
        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="container-x pb-4">
            <div className="mx-auto rounded-t-2xl bg-cream-50/10 backdrop-blur-md ring-1 ring-cream-50/15 px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-cream-50/85 text-xs sm:text-sm">
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
