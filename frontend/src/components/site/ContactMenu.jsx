import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import { CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

const waHref = (num) =>
  `https://wa.me/${num}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`;

/**
 * Contact menu popover: reveals both mobile numbers and both WhatsApp chats.
 * `variant`: "primary" | "accent" | "outline" | "whatsapp" | "ghost" | "outline-dark"
 * `size`: "sm" | "md"
 */
export default function ContactMenu({
  variant = "outline",
  size = "md",
  label,
  icon = "phone",
  testIdPrefix = "contact-menu",
  align = "end",
  className = "",
}) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const variantClass = {
    primary: "btn-primary",
    accent: "btn-accent",
    outline: "btn-outline",
    whatsapp: "btn-whatsapp",
    ghost: "btn-ghost",
    "outline-dark": "btn inline-flex items-center gap-2 rounded-[14px] bg-cream-50/10 backdrop-blur-md text-cream-50 ring-1 ring-cream-50/25 hover:bg-cream-50/20 hover:-translate-y-0.5",
  }[variant];

  const sizeClass = size === "sm" ? "!py-2 !px-4 text-xs" : "";

  const Icon = icon === "whatsapp" ? MessageCircle : Phone;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          data-testid={`${testIdPrefix}-trigger`}
          className={`${variantClass} ${sizeClass} ${className}`}
        >
          <Icon className="h-4 w-4" />
          <span>{label ?? t("Contact Us", "ਸੰਪਰਕ ਕਰੋ")}</span>
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align={align}
        sideOffset={10}
        className="w-72 rounded-[20px] p-3 bg-white/95 backdrop-blur-md ring-1 ring-forest-900/10 shadow-lift"
        data-testid={`${testIdPrefix}-panel`}
      >
        <p className="px-2 pt-1 pb-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-forest-800/70">
          {t("Call Us", "ਕਾਲ ਕਰੋ")}
        </p>
        <div className="grid gap-1.5">
          {[
            { display: CLINIC.phone_display, tel: CLINIC.phone_tel, tid: `${testIdPrefix}-call-1` },
            { display: CLINIC.phone2_display, tel: CLINIC.phone2_tel, tid: `${testIdPrefix}-call-2` },
          ].map((c) => (
            <a
              key={c.tel}
              href={`tel:${c.tel}`}
              data-testid={c.tid}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between rounded-[14px] bg-cream-50 ring-1 ring-forest-800/10 px-3 py-2.5 transition hover:bg-forest-50 hover:ring-forest-800/25"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-forest-800 text-cream-50">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-semibold text-forest-900">{c.display}</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-700 group-hover:text-forest-900">
                {t("Call", "ਕਾਲ")}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-3 px-2 pb-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-forest-800/70">
          WhatsApp
        </p>
        <div className="grid gap-1.5">
          {[
            { display: CLINIC.phone_display, wa: CLINIC.whatsapp, tid: `${testIdPrefix}-wa-1` },
            { display: CLINIC.phone2_display, wa: CLINIC.whatsapp2, tid: `${testIdPrefix}-wa-2` },
          ].map((c) => (
            <a
              key={c.wa}
              href={waHref(c.wa)}
              target="_blank"
              rel="noreferrer"
              data-testid={c.tid}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between rounded-[14px] bg-[#25D366]/10 ring-1 ring-[#25D366]/25 px-3 py-2.5 transition hover:bg-[#25D366]/20"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366] text-white">
                  <MessageCircle className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-semibold text-forest-900">{c.display}</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#25D366]">
                {t("Chat", "ਗੱਲ ਕਰੋ")}
              </span>
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
