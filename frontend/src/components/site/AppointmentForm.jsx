import React, { useState } from "react";
import axios from "axios";
import { Loader2, Send, CheckCircle2, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
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
      setTimeout(() => setDone(false), 4500);
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
      className="rounded-[24px] bg-white/85 backdrop-blur-md ring-1 ring-white/60 p-6 sm:p-8 shadow-glass"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-forest-900 leading-tight">{t("Book an Appointment", "ਅਪਾਇੰਟਮੈਂਟ ਬੁੱਕ ਕਰੋ")}</h3>
          <p className="mt-1 text-sm text-ink/60">{t("We usually respond within a few hours.", "ਅਸੀਂ ਆਮ ਤੌਰ 'ਤੇ ਕੁਝ ਘੰਟਿਆਂ ਵਿੱਚ ਜਵਾਬ ਦਿੰਦੇ ਹਾਂ।")}</p>
        </div>
        {done && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 text-forest-800 px-3 py-1 text-xs font-semibold animate-fade-up">
            <CheckCircle2 className="h-3.5 w-3.5" /> {t("Received", "ਪ੍ਰਾਪਤ ਹੋਈ")}
          </span>
        )}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="field">
          <input
            data-testid="form-name-input"
            id="fld-name"
            value={form.name}
            onChange={update("name")}
            placeholder=" "
            required
          />
          <label htmlFor="fld-name">{t("Full name", "ਪੂਰਾ ਨਾਮ")}</label>
        </div>
        <div className="field">
          <input
            data-testid="form-phone-input"
            id="fld-phone"
            value={form.phone}
            onChange={update("phone")}
            placeholder=" "
            required
            inputMode="tel"
          />
          <label htmlFor="fld-phone">{t("Phone number", "ਫੋਨ ਨੰਬਰ")}</label>
        </div>

        <div className="field sm:col-span-2">
          <Select value={form.problem} onValueChange={(v) => setForm((f) => ({ ...f, problem: v }))}>
            <SelectTrigger
              data-testid="form-problem-select"
              className={`field-control ${form.problem ? "field-filled" : ""} !ring-1 !ring-forest-900/10 !border-0 justify-between !bg-white/80 !text-ink`}
              style={{ paddingTop: form.problem ? "1.5rem" : "1rem" }}
            >
              <SelectValue placeholder=" " />
            </SelectTrigger>
            <SelectContent className="max-h-[280px]">
              {TREATMENTS.map((tr) => (
                <SelectItem key={tr.id} value={tr.en}>
                  {lang === "pa" ? tr.pa : tr.en}
                </SelectItem>
              ))}
              <SelectItem value="Other">{t("Other", "ਹੋਰ")}</SelectItem>
            </SelectContent>
          </Select>
          <label>{t("Problem / Condition", "ਸਮੱਸਿਆ")}</label>
        </div>

        <div className="field">
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                data-testid="form-date-trigger"
                className={`field-control ${date ? "field-filled" : ""} text-left flex items-center gap-2`}
                style={{ paddingTop: date ? "1.5rem" : "1rem" }}
              >
                <CalendarIcon className="h-4 w-4 text-forest-700" />
                <span className={date ? "text-ink" : "text-ink/50"}>{date ? format(date, "PPP") : ""}</span>
              </button>
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
          <label>{t("Preferred date", "ਪਸੰਦੀਦਾ ਤਾਰੀਖ")}</label>
        </div>

        <div className="field">
          <input
            data-testid="form-message-input"
            id="fld-msg"
            value={form.message}
            onChange={update("message")}
            placeholder=" "
          />
          <label htmlFor="fld-msg">{t("Message (optional)", "ਸੰਦੇਸ਼ (ਵਿਕਲਪਿਕ)")}</label>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        data-testid="form-submit-btn"
        className="btn-primary mt-6 w-full sm:w-auto disabled:opacity-70 min-h-[56px] !px-8"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {loading ? t("Sending...", "ਭੇਜ ਰਹੇ ਹਾਂ...") : t("Request Appointment", "ਅਪਾਇੰਟਮੈਂਟ ਭੇਜੋ")}
      </button>
      <p className="mt-3 text-xs text-ink/55">{t("By submitting, you agree to be contacted regarding your appointment.", "ਭੇਜਣ ਦੁਆਰਾ ਤੁਸੀਂ ਸੰਪਰਕ ਲਈ ਸਹਿਮਤ ਹੋ।")}</p>
    </form>
  );
}
