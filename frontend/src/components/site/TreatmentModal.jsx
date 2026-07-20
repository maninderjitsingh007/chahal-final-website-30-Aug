import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

const waHref = (num) =>
  `https://wa.me/${num}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`;

export default function TreatmentModal({ treatment, open, onOpenChange }) {
  const { t } = useLang();
  if (!treatment) return null;
  const Icon = Icons[treatment.icon] || Icons.Leaf;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid={`treatment-modal-${treatment.id}`}
        className="max-w-2xl w-[calc(100%-2rem)] p-0 overflow-hidden rounded-[24px] bg-white/85 backdrop-blur-xl ring-1 ring-white/60 shadow-glass border-0"
      >
        {/* Header with glass gradient */}
        <div className="relative px-6 sm:px-8 pt-7 pb-5 bg-gradient-to-br from-forest-50 to-cream-50/60 border-b border-forest-800/10">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-forest-100/70 blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-gold/15 blur-2xl" />

          <div className="relative flex items-start gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-forest-700 to-forest-900 text-cream-50 shadow-soft">
              <Icon className="h-7 w-7" />
            </div>
            <div className="min-w-0 pr-8">
              <DialogHeader className="space-y-1 text-left">
                <DialogTitle className="font-display text-2xl sm:text-[28px] font-bold leading-tight tracking-tight text-forest-900">
                  {treatment.en}
                </DialogTitle>
              </DialogHeader>
              <p className="mt-1 font-punjabi text-lg text-forest-700/90">{treatment.pa}</p>
            </div>
          </div>
        </div>

        {/* Body: EN + divider + PA */}
        <div className="px-6 sm:px-8 py-6 max-h-[55vh] overflow-y-auto">
          <div>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-forest-800/70">English</p>
            <p className="mt-2 text-[15.5px] leading-[1.75] text-ink/85">{treatment.details_en}</p>
          </div>

          {/* Leaf divider */}
          <div className="my-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-forest-800/15" />
            <span className="grid h-8 w-8 place-items-center rounded-full bg-forest-50 text-forest-800 ring-1 ring-forest-800/10">
              <Icons.Leaf className="h-3.5 w-3.5" />
            </span>
            <span className="h-px flex-1 bg-forest-800/15" />
          </div>

          <div>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-forest-800/70 font-punjabi">ਪੰਜਾਬੀ</p>
            <p className="mt-2 font-punjabi text-[16px] leading-[1.9] text-ink/85">{treatment.details_pa}</p>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="px-6 sm:px-8 py-5 border-t border-forest-800/10 bg-cream-50/70 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 justify-end">
          <button
            onClick={() => onOpenChange(false)}
            data-testid="treatment-modal-close-btn"
            className="btn-ghost !py-2.5 !px-5 text-xs order-3 sm:order-1"
          >
            {t("Close", "ਬੰਦ ਕਰੋ")}
          </button>
          <a
            href={waHref(CLINIC.whatsapp)}
            target="_blank"
            rel="noreferrer"
            data-testid="treatment-modal-whatsapp-btn"
            className="btn-whatsapp !py-2.5 !px-5 text-xs order-2"
          >
            <Icons.MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <Link
            to="/contact#book"
            onClick={() => onOpenChange(false)}
            data-testid="treatment-modal-book-btn"
            className="btn-primary !py-2.5 !px-5 text-xs order-1 sm:order-3"
          >
            {t("Book Appointment", "ਅਪਾਇੰਟਮੈਂਟ ਬੁੱਕ ਕਰੋ")} <Icons.ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
