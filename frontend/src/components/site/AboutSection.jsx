import React from "react";
import { Award, GraduationCap, Stethoscope, Sparkles } from "lucide-react";
import { IMAGES, CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const { t } = useLang();
  return (
    <section data-testid="about-section" className="relative py-20 lg:py-28 bg-cream-100/60">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="relative rounded-[2.5rem] overflow-hidden ring-1 ring-forest-900/10 shadow-[0_40px_80px_-30px_rgba(15,81,50,0.25)]">
            <img src={IMAGES.consultation} alt="Doctor consultation" className="h-[520px] w-full object-cover" />
          </div>
          <div className="hidden lg:block absolute -bottom-6 -right-6 card-soft p-5 max-w-[240px]">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gold/10 text-gold"><Award className="h-5 w-5" /></div>
              <p className="text-sm font-semibold text-forest-900 leading-tight">{t("15+ years of Ayurvedic practice", "15+ ਸਾਲਾਂ ਦਾ ਆਯੁਰਵੈਦਿਕ ਤਜ਼ਰਬਾ")}</p>
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">{t("Meet the doctor", "ਸਾਡੇ ਡਾਕਟਰ")}</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight text-forest-900">
            {t("Dr. Rajgurbir Singh Chahal", CLINIC.doctor_pa)}
            <span className="block text-lg font-sans font-medium text-forest-700 mt-2">{CLINIC.qualification} • {t("Ayurvedic Physician", "ਆਯੁਰਵੈਦਿਕ ਚਿਕਿਤਸਕ")}</span>
          </h2>

          <p className="mt-6 text-forest-900/75 leading-relaxed">
            {t(
              "A dedicated BAMS practitioner combining classical Ayurvedic wisdom with a compassionate, individualized approach. Dr. Chahal has helped thousands of patients across Punjab regain balance — treating root causes, not symptoms.",
              "ਪਰੰਪਰਾਗਤ ਆਯੁਰਵੈਦਿਕ ਗਿਆਨ ਅਤੇ ਆਧੁਨਿਕ ਦੇਖਭਾਲ ਦਾ ਸੰਗਮ। ਡਾ. ਚਾਹਲ ਨੇ ਪੰਜਾਬ ਭਰ ਦੇ ਹਜ਼ਾਰਾਂ ਮਰੀਜ਼ਾਂ ਦਾ ਇਲਾਜ ਕੀਤਾ ਹੈ — ਲੱਛਣ ਨਹੀਂ, ਜੜ੍ਹ ਤੋਂ।"
            )}
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: GraduationCap, en: "BAMS Qualified", pa: "BAMS ਯੋਗ" },
              { icon: Stethoscope, en: "Root-cause diagnosis", pa: "ਜੜ੍ਹ ਤੋਂ ਇਲਾਜ" },
              { icon: Sparkles, en: "Personalized herbal plans", pa: "ਖਾਸ ਹਰਬਲ ਯੋਜਨਾ" },
              { icon: Award, en: "Trusted across Punjab", pa: "ਪੰਜਾਬ ਭਰ ਵਿੱਚ ਭਰੋਸੇਯੋਗ" },
            ].map(({ icon: Icon, en, pa }) => (
              <div key={en} className="flex items-center gap-3 rounded-2xl bg-white/80 ring-1 ring-forest-900/10 px-4 py-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-forest-800/90 text-cream-50">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <p className="text-sm font-medium text-forest-900">{t(en, pa)}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/about" data-testid="about-more-btn" className="btn-primary">
              {t("More about the clinic", "ਹੋਰ ਜਾਣੋ")}
            </Link>
            <Link to="/contact#book" data-testid="about-book-btn" className="btn-outline">
              {t("Book a consultation", "ਸਲਾਹ ਲਓ")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
