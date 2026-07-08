import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

export default function StickyMobileCTA() {
  const { t } = useLang();
  const waHref = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`;
  return (
    <div
      data-testid="sticky-mobile-cta"
      className="lg:hidden fixed bottom-3 inset-x-3 z-40 rounded-2xl bg-white/90 backdrop-blur-md ring-1 ring-forest-800/10 shadow-lift p-2 grid grid-cols-3 gap-2"
    >
      <a href={`tel:${CLINIC.phone_tel}`} data-testid="mobile-cta-call" className="btn-outline !py-3 !px-3 text-xs">
        <Phone className="h-4 w-4" /> {t("Call", "ਕਾਲ")}
      </a>
      <a href={waHref} target="_blank" rel="noreferrer" data-testid="mobile-cta-whatsapp" className="btn-whatsapp !py-3 !px-3 text-xs">
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
      <Link to="/contact#book" data-testid="mobile-cta-book" className="btn-primary !py-3 !px-3 text-xs">
        <Calendar className="h-4 w-4" /> {t("Book", "ਬੁੱਕ")}
      </Link>
    </div>
  );
}
