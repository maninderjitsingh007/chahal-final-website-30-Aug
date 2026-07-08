/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        punjabi: ["'Noto Sans Gurmukhi'", "system-ui", "sans-serif"],
      },
      fontSize: {
        // fluid hero + section scale
        "display-xl": ["clamp(2.125rem, 4.2vw + 1rem, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["clamp(1.75rem, 3vw + 1rem, 2.625rem)", { lineHeight: "1.1", letterSpacing: "-0.015em", fontWeight: "700" }],
        "body-lg": ["clamp(1rem, 0.5vw + 0.9rem, 1.125rem)", { lineHeight: "1.7" }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        cream: {
          50: '#FAFBF8',
          100: '#F0F3EA',
          200: '#E2E8D2',
        },
        forest: {
          50:  '#EEF7EF',
          100: '#D7EEDA',
          200: '#B7E1BD',
          300: '#8FCF98',
          400: '#67BC72',
          500: '#4CAF50',   // secondary
          600: '#3A9A44',
          700: '#388E3C',
          800: '#2E7D32',   // primary
          900: '#1B5E20',
        },
        gold: {
          DEFAULT: '#F4C430',
          light: '#F9D963',
          dark:  '#D9A81E',
        },
        ink: '#1F2937',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,32,20,0.04), 0 8px 24px -12px rgba(15,32,20,0.14)",
        lift: "0 20px 45px -25px rgba(46,125,50,0.35)",
        glass: "0 30px 60px -30px rgba(46,125,50,0.30), inset 0 1px 0 rgba(255,255,255,0.5)",
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-y': {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        'float-x': {
          '0%,100%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(10px) rotate(-3deg)' },
        },
        'blob': {
          '0%,100%': { borderRadius: '42% 58% 63% 37% / 42% 45% 55% 58%' },
          '50%':     { borderRadius: '58% 42% 37% 63% / 55% 55% 45% 45%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'float-y': 'float-y 6s ease-in-out infinite',
        'float-x': 'float-x 8s ease-in-out infinite',
        'blob': 'blob 12s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
