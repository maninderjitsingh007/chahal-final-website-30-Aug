import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { CLINIC } from "@/constants/clinic";
import { useLang } from "@/context/LanguageContext";

const links = [
  { to: "/", en: "Home", pa: "ਮੁੱਖ" },
  { to: "/about", en: "About", pa: "ਬਾਰੇ" },
  { to: "/treatments", en: "Treatments", pa: "ਇਲਾਜ" },
  { to: "/gallery", en: "Gallery", pa: "ਗੈਲਰੀ" },
  { to: "/contact", en: "Contact", pa: "ਸੰਪਰਕ" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream-50/90 backdrop-blur-md border-b border-forest-900/10 py-2.5" : "bg-cream-50/60 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-2.5 group">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-800 text-cream-50 ring-4 ring-forest-100">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-xl font-semibold tracking-tight text-forest-900">Chahal Ayurvedic</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-forest-700/80">
              {t("Natural • Holistic • Healing", "ਕੁਦਰਤੀ • ਸੰਪੂਰਨ • ਇਲਾਜ")}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.en.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive ? "bg-forest-800 text-cream-50" : "text-forest-900/80 hover:bg-forest-50 hover:text-forest-900"
                }`
              }
            >
              {t(l.en, l.pa)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full bg-white/70 ring-1 ring-forest-900/10 p-1">
            <button
              onClick={() => setLang("en")}
              data-testid="lang-toggle-en"
              className={`text-xs font-semibold px-3 py-1 rounded-full transition ${lang === "en" ? "bg-forest-800 text-cream-50" : "text-forest-900/70 hover:bg-forest-50"}`}
            >EN</button>
            <button
              onClick={() => setLang("pa")}
              data-testid="lang-toggle-pa"
              className={`text-xs font-semibold px-3 py-1 rounded-full transition font-punjabi ${lang === "pa" ? "bg-forest-800 text-cream-50" : "text-forest-900/70 hover:bg-forest-50"}`}
            >ਪੰਜਾਬੀ</button>
          </div>
          <a href={`tel:${CLINIC.phone_tel}`} data-testid="nav-call-btn" className="btn-outline !py-2 !px-4 text-xs">
            <Phone className="h-3.5 w-3.5" /> {CLINIC.phone_display}
          </a>
          <Link to="/contact#book" data-testid="nav-book-appointment-btn" className="btn-primary !py-2 !px-4 text-xs">
            {t("Book Appointment", "ਅਪਾਇੰਟਮੈਂਟ")}
          </Link>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-white/80 ring-1 ring-forest-900/10 text-forest-900"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden container-x mt-3 pb-4 animate-fade-up">
          <div className="card-soft p-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                data-testid={`nav-mobile-link-${l.en.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm font-medium rounded-2xl transition-colors ${
                    isActive ? "bg-forest-800 text-cream-50" : "text-forest-900/85 hover:bg-forest-50"
                  }`
                }
              >
                {t(l.en, l.pa)}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center justify-between gap-2 border-t border-forest-900/10 pt-3">
              <div className="flex items-center gap-1 rounded-full bg-cream-50 ring-1 ring-forest-900/10 p-1">
                <button onClick={() => setLang("en")} data-testid="nav-mobile-lang-en" className={`text-xs font-semibold px-3 py-1 rounded-full ${lang === "en" ? "bg-forest-800 text-cream-50" : "text-forest-900/70"}`}>EN</button>
                <button onClick={() => setLang("pa")} data-testid="nav-mobile-lang-pa" className={`text-xs font-semibold px-3 py-1 rounded-full font-punjabi ${lang === "pa" ? "bg-forest-800 text-cream-50" : "text-forest-900/70"}`}>ਪੰਜਾਬੀ</button>
              </div>
              <Link to="/contact#book" data-testid="nav-mobile-book-btn" className="btn-primary !py-2 !px-4 text-xs">
                {t("Book", "ਅਪਾਇੰਟਮੈਂਟ")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
