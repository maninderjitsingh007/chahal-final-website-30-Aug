import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

const waHref = (num) =>
  `https://wa.me/${num}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`;

function NumberPopover({ kind, buttonClass, testIdPrefix, icon, label }) {
  const [open, setOpen] = useState(false);
  const isWA = kind === "wa";
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          data-testid={`${testIdPrefix}-trigger`}
          className={buttonClass}
        >
          {icon}
          <span>{label}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="center"
        sideOffset={12}
        className="w-64 rounded-[20px] p-2.5 bg-white/95 backdrop-blur-md ring-1 ring-forest-900/10 shadow-lift"
      >
        <div className="grid gap-1.5">
          {[
            { display: CLINIC.phone_display,  tel: CLINIC.phone_tel,  wa: CLINIC.whatsapp,  tid: `${testIdPrefix}-1` },
            { display: CLINIC.phone2_display, tel: CLINIC.phone2_tel, wa: CLINIC.whatsapp2, tid: `${testIdPrefix}-2` },
          ].map((c) => (
            <a
              key={c.tel}
              href={isWA ? waHref(c.wa) : `tel:${c.tel}`}
              target={isWA ? "_blank" : undefined}
              rel={isWA ? "noreferrer" : undefined}
              data-testid={c.tid}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between rounded-[14px] px-3 py-2.5 transition ring-1 ${
                isWA
                  ? "bg-[#25D366]/10 ring-[#25D366]/25 hover:bg-[#25D366]/20"
                  : "bg-cream-50 ring-forest-800/10 hover:bg-forest-50"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <span className={`grid h-7 w-7 place-items-center rounded-full ${isWA ? "bg-[#25D366] text-white" : "bg-forest-800 text-cream-50"}`}>
                  {isWA ? <MessageCircle className="h-3 w-3" /> : <Phone className="h-3 w-3" />}
                </span>
                <span className="text-sm font-semibold text-forest-900">{c.display}</span>
              </span>
              <span className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${isWA ? "text-[#25D366]" : "text-forest-700"}`}>
                {isWA ? "Chat" : "Call"}
              </span>
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default function StickyMobileCTA() {
  const { t } = useLang();
  return (
    <div
      data-testid="sticky-mobile-cta"
      className="lg:hidden fixed bottom-3 inset-x-3 z-40 rounded-2xl bg-white/95 backdrop-blur-md ring-1 ring-forest-800/10 shadow-lift p-2 grid grid-cols-3 gap-2"
    >
      <NumberPopover
        kind="call"
        testIdPrefix="mobile-cta-call"
        icon={<Phone className="h-4 w-4" />}
        label={t("Call", "ਕਾਲ")}
        buttonClass="btn-outline !py-3 !px-3 text-xs w-full"
      />
      <NumberPopover
        kind="wa"
        testIdPrefix="mobile-cta-whatsapp"
        icon={<MessageCircle className="h-4 w-4" />}
        label="WhatsApp"
        buttonClass="btn-whatsapp !py-3 !px-3 text-xs w-full"
      />
      <Link to="/contact#book" data-testid="mobile-cta-book" className="btn-primary !py-3 !px-3 text-xs">
        <Calendar className="h-4 w-4" /> {t("Book", "ਬੁੱਕ")}
      </Link>
    </div>
  );
}
