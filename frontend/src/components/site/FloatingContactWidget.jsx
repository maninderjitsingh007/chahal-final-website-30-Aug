import React, { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, X, Sparkles } from "lucide-react";
import { CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

const waHref = (num) =>
  `https://wa.me/${num}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`;

export default function FloatingContactWidget() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const options = [
    { kind: "call", label: t("Call", "ਕਾਲ"),   number: CLINIC.phone_display,  href: `tel:${CLINIC.phone_tel}`,  tid: "float-call-1" },
    { kind: "call", label: t("Call", "ਕਾਲ"),   number: CLINIC.phone2_display, href: `tel:${CLINIC.phone2_tel}`, tid: "float-call-2" },
    { kind: "wa",   label: "WhatsApp", number: CLINIC.phone_display,  href: waHref(CLINIC.whatsapp),  tid: "float-wa-1" },
    { kind: "wa",   label: "WhatsApp", number: CLINIC.phone2_display, href: waHref(CLINIC.whatsapp2), tid: "float-wa-2" },
  ];

  return (
    <div ref={ref} className="fixed z-40 bottom-24 right-4 lg:bottom-6 lg:right-6">
      {/* Panel */}
      <div
        data-testid="floating-contact-panel"
        className={`origin-bottom-right transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-3 scale-95 pointer-events-none"
        }`}
      >
        <div className="mb-3 w-[260px] rounded-[20px] bg-white/95 backdrop-blur-md ring-1 ring-forest-900/10 shadow-lift p-3">
          <div className="flex items-center gap-2 px-1 pt-0.5 pb-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-forest-50 text-forest-800">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-xs font-bold text-forest-900 leading-none">{t("How can we help?", "ਕਿਵੇਂ ਮਦਦ ਕਰੀਏ?")}</p>
              <p className="text-[10px] text-ink/60 leading-none mt-0.5">{t("Choose a number to reach us instantly", "ਤੁਰੰਤ ਸੰਪਰਕ ਲਈ ਨੰਬਰ ਚੁਣੋ")}</p>
            </div>
          </div>

          <div className="grid gap-1.5">
            {options.map((o) => {
              const isWA = o.kind === "wa";
              return (
                <a
                  key={o.tid}
                  href={o.href}
                  target={isWA ? "_blank" : undefined}
                  rel={isWA ? "noreferrer" : undefined}
                  data-testid={o.tid}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-[14px] px-3 py-2.5 transition ring-1 ${
                    isWA
                      ? "bg-[#25D366]/10 ring-[#25D366]/25 hover:bg-[#25D366]/20"
                      : "bg-cream-50 ring-forest-800/10 hover:bg-forest-50 hover:ring-forest-800/25"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className={`grid h-8 w-8 place-items-center rounded-full ${isWA ? "bg-[#25D366] text-white" : "bg-forest-800 text-cream-50"}`}>
                      {isWA ? <MessageCircle className="h-3.5 w-3.5" /> : <Phone className="h-3.5 w-3.5" />}
                    </span>
                    <span className="text-sm font-semibold text-forest-900">{o.number}</span>
                  </span>
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${isWA ? "text-[#25D366]" : "text-forest-700"}`}>
                    {o.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAB toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact widget" : "Open contact widget"}
        data-testid="floating-contact-toggle"
        className={`relative flex items-center gap-2 rounded-full px-4 py-3 shadow-lift transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:scale-95 ${
          open ? "bg-forest-800 text-cream-50" : "bg-[#25D366] text-white hover:bg-[#1EBE5D]"
        }`}
      >
        {!open && (
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-70"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
          </span>
        )}
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        <span className="hidden sm:inline text-sm font-semibold">
          {open ? t("Close", "ਬੰਦ ਕਰੋ") : t("Contact", "ਸੰਪਰਕ")}
        </span>
      </button>
    </div>
  );
}
