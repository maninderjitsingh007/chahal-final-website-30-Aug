import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Leaf, MessageCircle, Facebook, Instagram, Youtube, Send, Sparkles } from "lucide-react";
import { CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import { toast } from "sonner";

export default function Footer() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const waHref = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`;

  const subscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error(t("Please enter a valid email.", "ਸਹੀ ਈਮੇਲ ਭਰੋ।"));
      return;
    }
    // Newsletter is UI-only for now
    setEmail("");
    toast.success(t("Thanks! You're subscribed for wellness tips.", "ਧੰਨਵਾਦ! ਤੁਸੀਂ ਸਬਸਕ੍ਰਾਈਬ ਕਰ ਲਿਆ।"));
  };

  return (
    <footer data-testid="footer" className="mt-24 relative bg-gradient-to-b from-forest-900 to-[#0F3F1E] text-cream-50">
      {/* Newsletter band */}
      <div className="container-x pt-16">
        <div className="rounded-[24px] bg-white/[0.06] ring-1 ring-white/10 backdrop-blur-md p-6 sm:p-10 grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 text-gold-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ring-1 ring-gold/25">
              <Sparkles className="h-3 w-3" /> {t("Ayurvedic Wisdom Weekly", "ਹਫ਼ਤਾਵਾਰੀ ਸਲਾਹ")}
            </span>
            <h3 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-cream-50 leading-tight">
              {t("Herbs, habits, healing —", "ਬੂਟੀਆਂ, ਆਦਤਾਂ, ਇਲਾਜ —")}<br />
              <span className="text-gold-light">{t("in your inbox.", "ਤੁਹਾਡੇ ਇਨਬਾਕਸ 'ਚ।")}</span>
            </h3>
            <p className="mt-3 text-cream-50/70">{t("One short letter every week. No spam, only wellness.", "ਹਫ਼ਤੇ ਵਿੱਚ ਇੱਕ ਚਿੱਠੀ। ਸਿਰਫ਼ ਤੰਦਰੁਸਤੀ।")}</p>
          </div>
          <form onSubmit={subscribe} noValidate className="flex flex-col sm:flex-row gap-2">
            <div className="field flex-1">
              <input
                data-testid="footer-newsletter-input"
                id="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                type="email"
                className="!bg-cream-50/10 !text-cream-50 placeholder:text-cream-50/50 !ring-cream-50/15 focus:!ring-gold-light/60"
              />
              <label htmlFor="newsletter-email" className="!text-cream-50/60">{t("Your email address", "ਤੁਹਾਡੀ ਈਮੇਲ")}</label>
            </div>
            <button type="submit" data-testid="footer-newsletter-submit" className="btn-accent">
              <Send className="h-4 w-4" /> {t("Subscribe", "ਸਬਸਕ੍ਰਾਈਬ")}
            </button>
          </form>
        </div>
      </div>

      <div className="container-x pt-16 pb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream-50 text-forest-800 shadow-soft">
              <Leaf className="h-5 w-5" />
            </span>
            <span>
              <p className="font-display text-2xl font-bold leading-none">Chahal Ayurvedic</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-cream-50/70 mt-1">Malerkotla • Punjab</p>
            </span>
          </div>
          <p className="mt-5 text-sm text-cream-50/70 leading-relaxed">
            {t(
              "Authentic Ayurvedic care rooted in tradition, delivered with modern compassion. Safe, natural, and effective treatments for the whole family.",
              "ਪਰੰਪਰਾ ਵਿੱਚ ਜੜ੍ਹੀ ਹੋਈ ਅਸਲੀ ਆਯੁਰਵੈਦਿਕ ਸੰਭਾਲ, ਆਧੁਨਿਕ ਹਮਦਰਦੀ ਨਾਲ।"
            )}
          </p>

          <div className="mt-6 flex items-center gap-2">
            {[
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Youtube, href: "#", label: "YouTube" },
              { Icon: MessageCircle, href: waHref, label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("#") ? undefined : "_blank"}
                rel="noreferrer"
                data-testid={`footer-social-${label.toLowerCase()}`}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/15 transition-all duration-300 hover:bg-gold hover:text-forest-900 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cream-50/60">{t("Explore", "ਖੋਜੋ")}</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li><Link data-testid="footer-link-home" to="/" className="text-cream-50/85 hover:text-gold-light link-underline">{t("Home", "ਮੁੱਖ")}</Link></li>
            <li><Link data-testid="footer-link-about" to="/about" className="text-cream-50/85 hover:text-gold-light link-underline">{t("About Dr. Chahal", "ਡਾ. ਬਾਰੇ")}</Link></li>
            <li><Link data-testid="footer-link-treatments" to="/treatments" className="text-cream-50/85 hover:text-gold-light link-underline">{t("Treatments", "ਇਲਾਜ")}</Link></li>
            <li><Link data-testid="footer-link-gallery" to="/gallery" className="text-cream-50/85 hover:text-gold-light link-underline">{t("Gallery", "ਗੈਲਰੀ")}</Link></li>
            <li><Link data-testid="footer-link-contact" to="/contact" className="text-cream-50/85 hover:text-gold-light link-underline">{t("Contact", "ਸੰਪਰਕ")}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cream-50/60">{t("Visit Us", "ਸਾਡੇ ਕੋਲ ਆਓ")}</p>
          <ul className="mt-5 space-y-3 text-sm text-cream-50/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold-light" /><span>{t(CLINIC.address_en, CLINIC.address_pa)}</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold-light" /><a href={`tel:${CLINIC.phone_tel}`} className="hover:text-white">{CLINIC.phone_display}</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold-light" /><span>{t(CLINIC.hours_en, CLINIC.hours_pa)}</span></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cream-50/60">{t("Quick Actions", "ਤੁਰੰਤ ਕਾਰਵਾਈ")}</p>
          <p className="mt-4 text-sm text-cream-50/80">{t("Fastest response via WhatsApp.", "WhatsApp 'ਤੇ ਸਭ ਤੋਂ ਤੇਜ਼ ਜਵਾਬ।")}</p>
          <a href={waHref} target="_blank" rel="noreferrer" data-testid="footer-whatsapp-btn" className="mt-4 btn-whatsapp !py-2.5 !px-5 text-xs">
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
