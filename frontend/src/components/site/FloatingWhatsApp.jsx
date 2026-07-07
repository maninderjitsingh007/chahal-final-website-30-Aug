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
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_20px_40px_-15px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 active:scale-95"
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
