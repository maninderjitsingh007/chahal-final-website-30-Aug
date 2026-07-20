import React from "react";
import { IMAGES, CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import { GraduationCap, Award, HeartPulse, Sparkles, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const { t } = useLang();
  return (
    <div data-testid="about-page" className="pt-32 pb-16">
      <section className="container-x">
        <span className="eyebrow">{t("About the clinic", "ਕਲੀਨਿਕ ਬਾਰੇ")}</span>
        <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-forest-900 max-w-4xl">
          {t("A quiet clinic in Malerkotla with a", "ਮਾਲੇਰਕੋਟਲਾ ਦੀ ਇੱਕ ਸ਼ਾਂਤ ਕਲੀਨਿਕ ਜਿਸਦੀ")} <em className="italic text-forest-700">{t("very old promise.", "ਵਾਅਦਾ ਬਹੁਤ ਪੁਰਾਣਾ ਹੈ।")}</em>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-forest-900/75 leading-relaxed">
          {t(
            "At Chahal Ayurvedic Clinic, we believe every illness has a natural counterpart in the earth's herbs. Our practice combines the classical wisdom of Ayurveda with the warmth of a Punjabi family — treating each patient with time, honesty, and care.",
            "ਚਹਿਲ ਆਯੁਰਵੈਦਿਕ ਕਲੀਨਿਕ ਵਿੱਚ, ਅਸੀਂ ਵਿਸ਼ਵਾਸ ਕਰਦੇ ਹਾਂ ਕਿ ਹਰ ਬਿਮਾਰੀ ਦਾ ਇਲਾਜ ਕੁਦਰਤ ਵਿੱਚ ਮੌਜੂਦ ਹੈ। ਸਾਡੀ ਪ੍ਰੈਕਟਿਸ ਪਰੰਪਰਾਗਤ ਆਯੁਰਵੈਦਿਕ ਗਿਆਨ ਅਤੇ ਪੰਜਾਬੀ ਪਰਿਵਾਰਿਕ ਪਿਆਰ ਦਾ ਸੰਗਮ ਹੈ।"
          )}
        </p>
      </section>

      <section className="mt-14 container-x grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2">
          <div className="rounded-[2rem] overflow-hidden ring-1 ring-forest-900/10">
            <img src={IMAGES.consultation} alt="Doctor consultation" className="h-[560px] w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-3">
          <h2 className="font-serif text-4xl text-forest-900">{CLINIC.doctor_en}</h2>
          <p className="font-punjabi text-xl text-forest-800/85 mt-1">{CLINIC.doctor_pa} ({CLINIC.qualification})</p>
          <div className="mt-6 space-y-4 text-forest-900/75 leading-relaxed">
            <p>{t(
              "Dr. Rajgurbir Singh Chahal is a BAMS-qualified Ayurvedic physician with a lifelong dedication to authentic herbal medicine. He is known across the region for his careful diagnosis, gentle bedside manner, and formulas that address the root of a disease rather than only its symptoms.",
              "ਡਾ. ਰਾਜਗੁਰਬੀਰ ਸਿੰਘ ਚਹਿਲ BAMS ਯੋਗ ਆਯੁਰਵੈਦਿਕ ਡਾਕਟਰ ਹਨ। ਉਹ ਅਸਲੀ ਹਰਬਲ ਦਵਾਈਆਂ ਲਈ ਸਮਰਪਿਤ ਹਨ ਅਤੇ ਬਿਮਾਰੀ ਦੀ ਜੜ੍ਹ ਤੱਕ ਪਹੁੰਚਣ ਲਈ ਜਾਣੇ ਜਾਂਦੇ ਹਨ।"
            )}</p>
            <p>{t(
              "Patients often come to Dr. Chahal after years of allopathic treatment for chronic issues — from PCOD and infertility to sugar, thyroid, joint pain, and liver disease — and find lasting relief through personalized Ayurvedic care.",
              "ਬਹੁਤ ਸਾਰੇ ਮਰੀਜ਼ ਸਾਲਾਂ ਦੀ ਅੰਗਰੇਜ਼ੀ ਦਵਾਈ ਤੋਂ ਬਾਅਦ ਡਾ. ਚਹਿਲ ਕੋਲ ਆਉਂਦੇ ਹਨ ਅਤੇ ਹਰਬਲ ਇਲਾਜ ਨਾਲ ਸਥਾਈ ਰਾਹਤ ਪਾਉਂਦੇ ਹਨ।"
            )}</p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: GraduationCap, t1: "BAMS", t2: "Bachelor of Ayurvedic Medicine & Surgery" },
              { icon: Award, t1: "15+ Years", t2: "Of dedicated practice" },
              { icon: HeartPulse, t1: "10,000+", t2: "Patients treated across Punjab" },
              { icon: Sparkles, t1: "Personalized", t2: "Herbal & lifestyle protocols" },
            ].map(({ icon: Icon, t1, t2 }) => (
              <div key={t1} className="rounded-2xl bg-white ring-1 ring-forest-900/10 p-5 flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-800 text-cream-50">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif text-xl text-forest-900 leading-none">{t1}</p>
                  <p className="text-xs text-forest-900/60 mt-1">{t2}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/contact#book" data-testid="about-cta-btn" className="btn-primary">{t("Book a consultation", "ਸਲਾਹ ਲਓ")}</Link>
          </div>
        </div>
      </section>

      <section className="mt-24 container-x grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="font-serif text-4xl text-forest-900">{t("Our approach to healing", "ਸਾਡਾ ਇਲਾਜ ਦਾ ਤਰੀਕਾ")}</h3>
          <ul className="mt-6 space-y-4">
            {[
              [t("Careful diagnosis", "ਧਿਆਨ ਨਾਲ ਜਾਂਚ"), t("We understand your dosha, lifestyle, and history before prescribing a single herb.", "ਦਵਾਈ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਅਸੀਂ ਤੁਹਾਡੇ ਸਰੀਰ ਅਤੇ ਜੀਵਨ ਸ਼ੈਲੀ ਨੂੰ ਸਮਝਦੇ ਹਾਂ।")],
              [t("Pure herbal formulas", "ਸ਼ੁੱਧ ਹਰਬਲ ਦਵਾਈ"), t("Made from authentic Ayurvedic recipes using traceable ingredients.", "ਅਸਲੀ ਆਯੁਰਵੈਦਿਕ ਸਮੱਗਰੀ ਤੋਂ ਤਿਆਰ।")],
              [t("Lifestyle & diet guidance", "ਜੀਵਨ ਸ਼ੈਲੀ ਅਤੇ ਖੁਰਾਕ"), t("Because true healing lives in daily habits, not only in medicines.", "ਸੱਚਾ ਇਲਾਜ ਰੋਜ਼ਾਨਾ ਦੀਆਂ ਆਦਤਾਂ ਵਿੱਚ ਹੈ।")],
              [t("Follow-through care", "ਲਗਾਤਾਰ ਸੰਭਾਲ"), t("We stay with you across treatment — WhatsApp, calls, or visits.", "ਅਸੀਂ ਤੁਹਾਡੇ ਨਾਲ ਹਾਂ — WhatsApp, ਕਾਲ ਜਾਂ ਕਲੀਨਿਕ ਵਿੱਚ।")],
            ].map(([title, body]) => (
              <li key={title} className="flex gap-4">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest-800 text-cream-50"><Leaf className="h-4 w-4" /></span>
                <div>
                  <p className="font-semibold text-forest-900">{title}</p>
                  <p className="text-sm text-forest-900/70">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] overflow-hidden ring-1 ring-forest-900/10">
          <img src={IMAGES.herbsFlat} alt="Herbs flat lay" className="h-[520px] w-full object-cover" />
        </div>
      </section>
    </div>
  );
}
