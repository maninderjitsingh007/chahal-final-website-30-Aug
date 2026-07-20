import React, { useEffect } from "react";
import { CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";
import AppointmentForm from "@/components/site/AppointmentForm";
import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";

export default function ContactPage() {
  const { t } = useLang();
  const mapQuery = encodeURIComponent(`Chahal Ayurvedic Clinic, ${CLINIC.address_en}`);

  useEffect(() => {
    if (window.location.hash === "#book") {
      const el = document.getElementById("book");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div data-testid="contact-page" className="pt-32 pb-16">
      <section className="container-x">
        <span className="eyebrow">{t("Contact", "ਸੰਪਰਕ")}</span>
        <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-forest-900 max-w-4xl">
          {t("We are here to", "ਅਸੀਂ ਤੁਹਾਡੀ")} <em className="italic text-forest-700">{t("help you heal.", "ਮਦਦ ਲਈ ਹਾਜ਼ਰ ਹਾਂ।")}</em>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-forest-900/75">
          {t(
            "Visit us in Malerkotla or reach out on the phone / WhatsApp. Appointments recommended.",
            "ਸਾਡੇ ਕਲੀਨਿਕ ਵਿੱਚ ਆਓ ਜਾਂ ਫੋਨ / WhatsApp 'ਤੇ ਸੰਪਰਕ ਕਰੋ। ਅਪਾਇੰਟਮੈਂਟ ਬਣਾਓ।"
          )}
        </p>
      </section>

      <section className="container-x mt-12 grid lg:grid-cols-5 gap-8">
        <aside className="lg:col-span-2 space-y-4">
          <div className="rounded-3xl bg-white ring-1 ring-forest-900/10 p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-800 text-cream-50"><MapPin className="h-5 w-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-forest-800/70">{t("Address", "ਪਤਾ")}</p>
                <p className="mt-1 font-medium text-forest-900 leading-snug">{t(CLINIC.address_en, CLINIC.address_pa)}</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white ring-1 ring-forest-900/10 p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-800 text-cream-50"><Phone className="h-5 w-5" /></span>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.22em] text-forest-800/70">{t("Phone", "ਫੋਨ")}</p>
                <div className="mt-2 grid gap-2">
                  <a href={`tel:${CLINIC.phone_tel}`} data-testid="contact-call-link-1" className="flex items-center justify-between gap-3 rounded-[14px] bg-cream-50 ring-1 ring-forest-800/10 px-3 py-2.5 hover:bg-forest-50">
                    <span className="text-sm font-semibold text-forest-900">{CLINIC.phone_display}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-700">{t("Call", "ਕਾਲ")}</span>
                  </a>
                  <a href={`tel:${CLINIC.phone2_tel}`} data-testid="contact-call-link-2" className="flex items-center justify-between gap-3 rounded-[14px] bg-cream-50 ring-1 ring-forest-800/10 px-3 py-2.5 hover:bg-forest-50">
                    <span className="text-sm font-semibold text-forest-900">{CLINIC.phone2_display}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-700">{t("Call", "ਕਾਲ")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white ring-1 ring-forest-900/10 p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-800 text-cream-50"><Clock className="h-5 w-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-forest-800/70">{t("Hours", "ਸਮਾਂ")}</p>
                <p className="mt-1 font-medium text-forest-900">{t(CLINIC.hours_en, CLINIC.hours_pa)}</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white ring-1 ring-forest-900/10 p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-800 text-cream-50"><Mail className="h-5 w-5" /></span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.22em] text-forest-800/70">{t("Email", "ਈਮੇਲ")}</p>
                <a href={`mailto:${CLINIC.email}`} data-testid="contact-email-link" className="mt-1 block font-semibold text-forest-900 break-all">{CLINIC.email}</a>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <a
              href={`https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-whatsapp-1"
              className="btn-whatsapp w-full !justify-start !py-3.5"
            >
              <MessageCircle className="h-5 w-5" />
              <div className="flex flex-col items-start leading-tight">
                <span>WhatsApp • {CLINIC.phone_display}</span>
                <span className="text-[10px] font-normal uppercase tracking-[0.22em] opacity-80">{t("Usually replies within an hour", "ਆਮ ਤੌਰ 'ਤੇ ਇੱਕ ਘੰਟੇ ਵਿੱਚ ਜਵਾਬ")}</span>
              </div>
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp2}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-whatsapp-2"
              className="btn-whatsapp w-full !justify-start !py-3.5"
            >
              <MessageCircle className="h-5 w-5" />
              <div className="flex flex-col items-start leading-tight">
                <span>WhatsApp • {CLINIC.phone2_display}</span>
                <span className="text-[10px] font-normal uppercase tracking-[0.22em] opacity-80">{t("Secondary line", "ਦੂਜੀ ਲਾਈਨ")}</span>
              </div>
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden ring-1 ring-forest-900/10 aspect-[4/3]">
            <iframe
              title="Chahal Ayurvedic Clinic Map"
              data-testid="contact-map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>

        <div className="lg:col-span-3" id="book">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
}
