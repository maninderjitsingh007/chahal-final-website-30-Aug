import React from "react";
import { Award, GraduationCap, Stethoscope, Sparkles } from "lucide-react";
import { IMAGES, CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Reveal } from "@/hooks/useReveal";

export default function AboutSection() {
  const { t } = useLang();
  return (
    <section data-testid="about-section" className="relative py-24 lg:py-32 bg-cream-100/50">
      <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="relative rounded-[24px] overflow-hidden ring-1 ring-forest-900/10 shadow-lift group">
            <img src={IMAGES.consultation} alt="Doctor consultation" loading="lazy" className="h-[520px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
          </div>
          <div className="hidden lg:block absolute -bottom-6 -right-6 card-glass p-5 max-w-[240px]">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gold/15 text-gold-dark"><Award className="h-5 w-5" /></div>
              <p className="text-sm font-semibold text-forest-900 leading-tight">{t("10+ years of Ayurvedic practice", "10+ ਸਾਲਾਂ ਦਾ ਆਯੁਰਵੈਦਿਕ ਤਜ਼ਰਬਾ")}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <span className="eyebrow">{t("Meet the doctor", "ਸਾਡੇ ਡਾਕਟਰ")}</span>
          <h2 className="mt-5 h-section font-display text-forest-900">
            {t("Dr. Rajgurbir Singh Chahal", CLINIC.doctor_pa)}
            <span className="block text-lg font-sans font-semibold text-forest-700 mt-2">{CLINIC.qualification} • {t("Ayurvedic Physician", "ਆਯੁਰਵੈਦਿਕ ਚਿਕਿਤਸਕ")}</span>
          </h2>

          <p className="mt-6 t-body text-ink/75">
            {t(
              "A dedicated BAMS practitioner combining classical Ayurvedic wisdom with a compassionate, individualized approach. Dr. Chahal has helped thousands of patients across Punjab regain balance — treating root causes, not symptoms.",
              "ਪਰੰਪਰਾਗਤ ਆਯੁਰਵੈਦਿਕ ਗਿਆਨ ਅਤੇ ਆਧੁਨਿਕ ਦੇਖਭਾਲ ਦਾ ਸੰਗਮ। ਡਾ. ਚਹਿਲ ਨੇ ਪੰਜਾਬ ਭਰ ਦੇ ਹਜ਼ਾਰਾਂ ਮਰੀਜ਼ਾਂ ਦਾ ਇਲਾਜ ਕੀਤਾ ਹੈ — ਲੱਛਣ ਨਹੀਂ, ਜੜ੍ਹ ਤੋਂ।"
            )}
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              { icon: GraduationCap, en: "BAMS Qualified", pa: "BAMS ਯੋਗ" },
              { icon: Stethoscope, en: "Root-cause diagnosis", pa: "ਜੜ੍ਹ ਤੋਂ ਇਲਾਜ" },
              { icon: Sparkles, en: "Personalized herbal plans", pa: "ਖਾਸ ਹਰਬਲ ਯੋਜਨਾ" },
              { icon: Award, en: "Trusted across Punjab", pa: "ਪੰਜਾਬ ਭਰ ਵਿੱਚ ਭਰੋਸੇਯੋਗ" },
            ].map(({ icon: Icon, en, pa }) => (
              <div key={en} className="flex items-center gap-3 rounded-2xl bg-white/85 backdrop-blur-sm ring-1 ring-forest-900/10 px-4 py-3 shadow-soft">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-forest-700 to-forest-900 text-cream-50">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-semibold text-forest-900">{t(en, pa)}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/about" data-testid="about-more-btn" className="btn-primary">
              {t("More about the clinic", "ਹੋਰ ਜਾਣੋ")}
            </Link>
            <Link to="/contact#book" data-testid="about-book-btn" className="btn-outline">
              {t("Book a consultation", "ਸਲਾਹ ਲਓ")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
