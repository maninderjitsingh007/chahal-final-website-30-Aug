import React, { useState } from "react";
import axios from "axios";
import { Loader2, Send, CheckCircle2, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLang } from "@/context/LanguageContext";
import { TREATMENTS } from "@/constants/clinic";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function AppointmentForm() {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", problem: "", message: "" });
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.problem) {
      toast.error(t("Please fill your name, phone and problem.", "ਕਿਰਪਾ ਕਰਕੇ ਨਾਮ, ਫੋਨ ਅਤੇ ਸਮੱਸਿਆ ਭਰੋ।"));
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        problem: form.problem,
        preferred_date: date ? format(date, "yyyy-MM-dd") : null,
        message: form.message || null,
      };
      await axios.post(`${API}/appointments`, payload);
      setDone(true);
      toast.success(t("Appointment request received. We will call you soon.", "ਬੇਨਤੀ ਪ੍ਰਾਪਤ ਹੋਈ। ਅਸੀਂ ਜਲਦੀ ਹੀ ਸੰਪਰਕ ਕਰਾਂਗੇ।"));
      setForm({ name: "", phone: "", problem: "", message: "" });
      setDate(null);
    } catch (err) {
      toast.error(t("Could not submit. Please try again or call us.", "ਭੇਜਿਆ ਨਹੀਂ ਗਿਆ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ ਜਾਂ ਕਾਲ ਕਰੋ।"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      data-testid="appointment-form"
      className="rounded-[2rem] bg-white/90 ring-1 ring-forest-900/10 p-6 sm:p-8 shadow-[0_20px_60px_-30px_rgba(15,81,50,0.35)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-3xl text-forest-900 leading-tight">{t("Book an Appointment", "ਅਪਾਇੰਟਮੈਂਟ ਬੁੱਕ ਕਰੋ")}</h3>
          <p className="mt-1 text-sm text-forest-900/70">{t("We usually respond within a few hours.", "ਅਸੀਂ ਆਮ ਤੌਰ 'ਤੇ ਕੁਝ ਘੰਟਿਆਂ ਵਿੱਚ ਜਵਾਬ ਦਿੰਦੇ ਹਾਂ।")}</p>
        </div>
        {done && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 text-forest-800 px-3 py-1 text-xs font-semibold">
            <CheckCircle2 className="h-3.5 w-3.5" /> {t("Received", "ਪ੍ਰਾਪਤ ਹੋਈ")}
          </span>
        )}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-800/70">{t("Full name", "ਪੂਰਾ ਨਾਮ")}</span>
          <input
            data-testid="form-name-input"
            value={form.name}
            onChange={update("name")}
            className="mt-2 w-full rounded-2xl bg-cream-50 ring-1 ring-forest-900/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-forest-700"
            placeholder={t("Your name", "ਤੁਹਾਡਾ ਨਾਮ")}
            required
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-800/70">{t("Phone", "ਫੋਨ")}</span>
          <input
            data-testid="form-phone-input"
            value={form.phone}
            onChange={update("phone")}
            className="mt-2 w-full rounded-2xl bg-cream-50 ring-1 ring-forest-900/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-forest-700"
            placeholder="+91 9XXXXXXXXX"
            required
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-800/70">{t("Problem / Condition", "ਸਮੱਸਿਆ")}</span>
          <div className="mt-2">
            <Select value={form.problem} onValueChange={(v) => setForm((f) => ({ ...f, problem: v }))}>
              <SelectTrigger data-testid="form-problem-select" className="w-full rounded-2xl bg-cream-50 ring-1 ring-forest-900/10 border-0 px-4 py-6 text-sm">
                <SelectValue placeholder={t("Select a condition", "ਸਮੱਸਿਆ ਚੁਣੋ")} />
              </SelectTrigger>
              <SelectContent>
                {TREATMENTS.map((tr) => (
                  <SelectItem key={tr.id} value={tr.en}>
                    {lang === "pa" ? tr.pa : tr.en}
                  </SelectItem>
                ))}
                <SelectItem value="Other">{t("Other", "ਹੋਰ")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-800/70">{t("Preferred date", "ਪਸੰਦੀਦਾ ਤਾਰੀਖ")}</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                data-testid="form-date-trigger"
                type="button"
                className="mt-2 w-full justify-start rounded-2xl bg-cream-50 ring-1 ring-forest-900/10 border-0 px-4 py-6 text-sm font-normal text-forest-900 hover:bg-cream-100"
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-forest-700" />
                {date ? format(date, "PPP") : <span className="text-forest-900/50">{t("Pick a date", "ਤਾਰੀਖ ਚੁਣੋ")}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </label>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-800/70">{t("Message (optional)", "ਸੰਦੇਸ਼ (ਵਿਕਲਪਿਕ)")}</span>
          <input
            data-testid="form-message-input"
            value={form.message}
            onChange={update("message")}
            className="mt-2 w-full rounded-2xl bg-cream-50 ring-1 ring-forest-900/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-forest-700"
            placeholder={t("Any details you'd like to share", "ਕੋਈ ਹੋਰ ਜਾਣਕਾਰੀ")}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        data-testid="form-submit-btn"
        className="btn-primary mt-6 w-full sm:w-auto disabled:opacity-70"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {loading ? t("Sending...", "ਭੇਜ ਰਹੇ ਹਾਂ...") : t("Request Appointment", "ਅਪਾਇੰਟਮੈਂਟ ਭੇਜੋ")}
      </button>
      <p className="mt-3 text-xs text-forest-900/60">{t("By submitting, you agree to be contacted regarding your appointment.", "ਭੇਜਣ ਦੁਆਰਾ ਤੁਸੀਂ ਸੰਪਰਕ ਲਈ ਸਹਿਮਤ ਹੋ।")}</p>
    </form>
  );
}
