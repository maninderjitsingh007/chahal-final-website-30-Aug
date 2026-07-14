import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sprout, Leaf } from "lucide-react";
import { CLINIC, IMAGES } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import ContactMenu from "@/components/site/ContactMenu";

export default function Hero() {
  const { t } = useLang();
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const p1 = { transform: `translate3d(0, ${y * 0.08}px, 0) rotate(${y * 0.02}deg)` };
  const p2 = { transform: `translate3d(0, ${y * -0.06}px, 0) rotate(${y * -0.015}deg)` };
  const p3 = { transform: `translate3d(0, ${y * 0.04}px, 0)` };

  return (
    <section data-testid="hero-section" className="relative pt-24 lg:pt-32 pb-20 lg:pb-28 overflow-hidden">
      {/* Soft gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-forest-200/50 blur-3xl animate-blob" />
        <div className="absolute top-10 right-0 h-[480px] w-[480px] rounded-full bg-gold/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-forest-100/70 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
      </div>

      {/* Floating leaf motifs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Leaf style={p1} className="absolute top-24 left-[6%] h-10 w-10 text-forest-700/30 animate-float-y" />
        <Sprout style={p2} className="absolute top-40 right-[10%] h-12 w-12 text-forest-800/25 animate-float-x" />
        <Leaf style={p3} className="absolute bottom-20 left-[18%] h-8 w-8 text-gold/50 animate-float-y" />
        <Leaf style={p2} className="absolute bottom-10 right-[22%] h-14 w-14 text-forest-600/20 animate-float-x" />
      </div>

      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-7">
          <div className="animate-fade-up">
            <span className="eyebrow">
              <Sprout className="h-3.5 w-3.5" /> {t("A lineage of natural healing", "ਕੁਦਰਤੀ ਇਲਾਜ ਦੀ ਵਿਰਾਸਤ")}
            </span>
          </div>

          <h1 className="mt-6 h-hero font-display text-forest-900 animate-fade-up" style={{ animationDelay: "80ms" }}>
            {t(
              <>Authentic <span className="text-forest-700">Ayurveda</span><br/>for every family.</>,
              <>ਹਰ ਪਰਿਵਾਰ ਲਈ<br/><span className="text-forest-700">ਅਸਲੀ ਆਯੁਰਵੇਦ</span></>
            )}
          </h1>

          <p className="mt-5 font-punjabi text-2xl sm:text-3xl text-forest-800/95 animate-fade-up" style={{ animationDelay: "140ms" }}>
            {CLINIC.tagline_pa}
          </p>

          <p className="mt-4 t-body text-ink/70 max-w-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
            {t(
              "A trusted holistic clinic in Malerkotla offering time-tested herbal cures for the diseases modern medicine only masks. Safe, natural, and remarkably effective.",
              "ਮਾਲੇਰਕੋਟਲਾ ਦੀ ਭਰੋਸੇਯੋਗ ਆਯੁਰਵੈਦਿਕ ਕਲੀਨਿਕ — ਹਰ ਬਿਮਾਰੀ ਲਈ ਸਦੀਆਂ ਪੁਰਾਣੇ ਹਰਬਲ ਇਲਾਜ। ਸੁਰੱਖਿਅਤ, ਕੁਦਰਤੀ ਅਤੇ ਅਸਰਦਾਰ।"
            )}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "280ms" }}>
            <Link to="/contact#book" data-testid="hero-book-btn" className="btn-primary">
              {t("Book Appointment", "ਅਪਾਇੰਟਮੈਂਟ ਬੁੱਕ ਕਰੋ")} <ArrowRight className="h-4 w-4" />
            </Link>
            <ContactMenu
              variant="outline"
              testIdPrefix="hero-call"
              icon="phone"
              align="start"
              label={t("Call", "ਕਾਲ ਕਰੋ")}
            />
            <ContactMenu
              variant="whatsapp"
              testIdPrefix="hero-wa"
              icon="whatsapp"
              align="start"
              label="WhatsApp"
            />
          </div>

          {/* Trust bar */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg animate-fade-up" style={{ animationDelay: "360ms" }}>
            {[
              { k: "10k+", v: t("Patients Healed", "ਮਰੀਜ਼ ਠੀਕ ਹੋਏ") },
              { k: "15+",  v: t("Years of Practice", "ਸਾਲਾਂ ਦਾ ਤਜ਼ਰਬਾ") },
              { k: "100%", v: t("Natural & Safe", "ਕੁਦਰਤੀ ਅਤੇ ਸੁਰੱਖਿਅਤ") },
            ].map((s) => (
              <div key={s.k} className="card-glass px-4 py-3">
                <p className="font-display text-2xl font-bold text-forest-900 leading-none">{s.k}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink/60">{s.v}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-ink/70 animate-fade-up" style={{ animationDelay: "420ms" }}>
            <ShieldCheck className="h-4 w-4 text-forest-700" />
            <span className="font-semibold text-forest-900">{CLINIC.doctor_en}</span>
            <span className="text-ink/50">({CLINIC.qualification})</span>
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "180ms" }}>
          <div className="relative aspect-[4/5] w-full max-w-md ml-auto">
            <div className="absolute -inset-6 bg-gradient-to-br from-forest-100 to-gold/20 rounded-[2.75rem] blur-2xl opacity-70" />
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden ring-1 ring-forest-800/10 shadow-lift">
              <img
                src={IMAGES.hero}
                alt="Mortar and pestle with fresh herbs"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                style={{ transform: `translate3d(0, ${y * 0.05}px, 0)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-4 top-8 card-glass px-4 py-3 flex items-center gap-3 animate-float-y">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-forest-800 text-cream-50 shadow-soft">
                <Sprout className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-forest-800/70">100% Natural</p>
                <p className="text-sm font-semibold text-forest-900 font-display">Herbal Formulas</p>
              </div>
            </div>

            <div className="absolute -right-3 bottom-10 card-glass px-4 py-4 max-w-[240px] animate-float-y" style={{ animationDelay: "1.5s" }}>
              <p className="font-display text-base leading-snug text-forest-900">
                “{t("Those who tried English medicines — please come once.", "ਅੰਗਰੇਜ਼ੀ ਦਵਾਈਆਂ ਖਾ ਚੁੱਕੇ ਮਰੀਜ਼ ਇੱਕ ਵਾਰ ਜ਼ਰੂਰ ਮਿਲੋ।")}”
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-forest-700/80">— Dr. Chahal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
