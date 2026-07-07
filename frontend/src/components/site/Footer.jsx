import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Leaf, MessageCircle } from "lucide-react";
import { CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const waHref = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`;

  return (
    <footer data-testid="footer" className="mt-24 border-t border-forest-900/10 bg-forest-900 text-cream-50">
      <div className="container-x py-16 grid gap-10 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-cream-50 text-forest-800">
              <Leaf className="h-5 w-5" />
            </span>
            <span>
              <p className="font-serif text-2xl leading-none">Chahal Ayurvedic</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-cream-50/70 mt-1">Malerkotla • Punjab</p>
            </span>
          </div>
          <p className="mt-5 text-sm text-cream-50/70 leading-relaxed">
            {t(
              "Authentic Ayurvedic care rooted in tradition, delivered with modern compassion. Safe, natural, and effective treatments for the whole family.",
              "ਪਰੰਪਰਾ ਵਿੱਚ ਜੜ੍ਹੀ ਹੋਈ ਅਸਲੀ ਆਯੁਰਵੈਦਿਕ ਸੰਭਾਲ, ਆਧੁਨਿਕ ਹਮਦਰਦੀ ਨਾਲ। ਪੂਰੇ ਪਰਿਵਾਰ ਲਈ ਸੁਰੱਖਿਅਤ, ਕੁਦਰਤੀ ਅਤੇ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਇਲਾਜ।"
            )}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cream-50/60">{t("Explore", "ਖੋਜੋ")}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link data-testid="footer-link-home" to="/" className="hover:text-white/90">{t("Home", "ਮੁੱਖ")}</Link></li>
            <li><Link data-testid="footer-link-about" to="/about" className="hover:text-white/90">{t("About Dr. Chahal", "ਡਾ. ਬਾਰੇ")}</Link></li>
            <li><Link data-testid="footer-link-treatments" to="/treatments" className="hover:text-white/90">{t("Treatments", "ਇਲਾਜ")}</Link></li>
            <li><Link data-testid="footer-link-gallery" to="/gallery" className="hover:text-white/90">{t("Gallery", "ਗੈਲਰੀ")}</Link></li>
            <li><Link data-testid="footer-link-contact" to="/contact" className="hover:text-white/90">{t("Contact", "ਸੰਪਰਕ")}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cream-50/60">{t("Visit Us", "ਸਾਡੇ ਕੋਲ ਆਓ")}</p>
          <ul className="mt-4 space-y-3 text-sm text-cream-50/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold-light" /><span>{t(CLINIC.address_en, CLINIC.address_pa)}</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold-light" /><a href={`tel:${CLINIC.phone_tel}`} className="hover:text-white">{CLINIC.phone_display}</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold-light" /><span>{t(CLINIC.hours_en, CLINIC.hours_pa)}</span></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cream-50/60">{t("Get In Touch", "ਸੰਪਰਕ ਕਰੋ")}</p>
          <p className="mt-4 text-sm text-cream-50/80">{t("Fastest response via WhatsApp.", "WhatsApp 'ਤੇ ਸਭ ਤੋਂ ਤੇਜ਼ ਜਵਾਬ।")}</p>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            data-testid="footer-whatsapp-btn"
            className="mt-4 btn-whatsapp !py-2.5 !px-5 text-xs"
          >
            <MessageCircle className="h-4 w-4" /> {t("Chat on WhatsApp", "WhatsApp ਕਰੋ")}
          </a>
          <p className="mt-6 font-punjabi text-lg text-gold-light">{CLINIC.tagline_pa}</p>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream-50/60">
          <p>© {new Date().getFullYear()} Chahal Ayurvedic Clinic. {t("All rights reserved.", "ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ।")}</p>
          <p>{CLINIC.doctor_en} ({CLINIC.qualification})</p>
        </div>
      </div>
    </footer>
  );
}
