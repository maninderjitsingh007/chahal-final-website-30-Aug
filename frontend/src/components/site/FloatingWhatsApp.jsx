import React from "react";
import { MessageCircle } from "lucide-react";
import { CLINIC } from "@/constants/clinic";

export default function FloatingWhatsApp() {
  const href = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsapp_message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-testid="floating-whatsapp-btn"
      className="fixed z-40 bottom-24 right-4 lg:bottom-6 lg:right-6 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lift transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-70"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
      </span>
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
