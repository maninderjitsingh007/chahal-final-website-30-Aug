import React from "react";
import Hero from "@/components/site/Hero";
import TreatmentsGrid from "@/components/site/TreatmentsGrid";
import AboutSection from "@/components/site/AboutSection";
import PhilosophySection from "@/components/site/PhilosophySection";
import TestimonialsSection from "@/components/site/TestimonialsSection";
import AppointmentForm from "@/components/site/AppointmentForm";
import { IMAGES, CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import { MapPin, Phone, Clock } from "lucide-react";

export default function HomePage() {
  const { t } = useLang();
  return (
    <div data-testid="home-page">
      <Hero />

      {/* Statement strip */}
      <section className="py-6 border-y border-forest-900/10 bg-forest-50/60">
        <div className="container-x flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-forest-900/75">
          {[
            t("Safe & Natural", "ਸੁਰੱਖਿਅਤ ਅਤੇ ਕੁਦਰਤੀ"),
            t("BAMS Certified", "BAMS ਪ੍ਰਮਾਣਿਤ"),
            t("Family-friendly Care", "ਪਰਿਵਾਰਿਕ ਸੰਭਾਲ"),
            t("Root-cause Treatment", "ਜੜ੍ਹ ਤੋਂ ਇਲਾਜ"),
            t("Trusted in Punjab", "ਪੰਜਾਬ ਵਿੱਚ ਭਰੋਸੇਯੋਗ"),
          ].map((s) => (
            <div key={s} className="flex items-center gap-2 font-semibold uppercase tracking-[0.12em] text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-forest-700" /> {s}
            </div>
          ))}
        </div>
      </section>

      <TreatmentsGrid compact />
      <AboutSection />
      <PhilosophySection />
      <TestimonialsSection />

      {/* CTA + booking */}
      <section id="book" data-testid="home-booking-section" className="relative py-20 lg:py-28 bg-cream-100/60">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="eyebrow">{t("Get in touch", "ਸੰਪਰਕ")}</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight text-forest-900">
              {t("Start your healing journey today.", "ਅੱਜ ਹੀ ਆਪਣੇ ਇਲਾਜ ਦੀ ਸ਼ੁਰੂਆਤ ਕਰੋ।")}
            </h2>
            <p className="mt-4 text-forest-900/70 max-w-lg">
              {t(
                "Send us a short request. We will call you back to confirm your appointment and answer any questions.",
                "ਇੱਕ ਛੋਟੀ ਬੇਨਤੀ ਭੇਜੋ। ਅਸੀਂ ਤੁਹਾਨੂੰ ਵਾਪਸ ਕਾਲ ਕਰਕੇ ਅਪਾਇੰਟਮੈਂਟ ਦੀ ਪੁਸ਼ਟੀ ਕਰਾਂਗੇ।"
              )}
            </p>

            <div className="mt-8 grid gap-3">
              <div className="flex items-start gap-3 rounded-2xl bg-white ring-1 ring-forest-900/10 p-4">
                <MapPin className="h-5 w-5 text-forest-700 mt-0.5" />
                <p className="text-sm text-forest-900/80">{t(CLINIC.address_en, CLINIC.address_pa)}</p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white ring-1 ring-forest-900/10 p-4">
                <Phone className="h-5 w-5 text-forest-700" />
                <a href={`tel:${CLINIC.phone_tel}`} className="text-sm font-semibold text-forest-900">{CLINIC.phone_display}</a>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white ring-1 ring-forest-900/10 p-4">
                <Clock className="h-5 w-5 text-forest-700" />
                <p className="text-sm text-forest-900/80">{t(CLINIC.hours_en, CLINIC.hours_pa)}</p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl overflow-hidden ring-1 ring-forest-900/10">
              <img src={IMAGES.bottles} alt="Ayurvedic herbs" className="h-48 w-full object-cover" />
            </div>
          </div>

          <AppointmentForm />
        </div>
      </section>
    </div>
  );
}
