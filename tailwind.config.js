module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(240, 60%, 90%)",
        input: "hsl(240, 60%, 90%)",
        ring: "hsl(150, 50%, 25%)",
        background: "hsl(240, 67%, 94%)",
        foreground: "hsl(282, 44%, 27%)",
        primary: {
          DEFAULT: "hsl(150, 50%, 25%)",
          foreground: "hsl(240, 67%, 94%)",
        },
        secondary: {
          DEFAULT: "hsl(150, 45%, 30%)",
          foreground: "hsl(240, 67%, 94%)",
        },
        tertiary: {
          DEFAULT: "hsl(160, 50%, 45%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        neutral: {
          DEFAULT: "hsl(240, 67%, 94%)",
          foreground: "hsl(150, 50%, 25%)",
        },
        success: {
          DEFAULT: "hsl(155, 40%, 40%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        warning: {
          DEFAULT: "hsl(35, 85%, 50%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(240, 60%, 88%)",
          foreground: "hsl(282, 30%, 45%)",
        },
        accent: {
          DEFAULT: "hsl(240, 60%, 88%)",
          foreground: "hsl(282, 44%, 27%)",
        },
        popover: {
          DEFAULT: "hsl(240, 67%, 94%)",
          foreground: "hsl(282, 44%, 27%)",
        },
        card: {
          DEFAULT: "hsl(240, 67%, 94%)",
          foreground: "hsl(282, 44%, 27%)",
        },
        gray: {
          50: "hsl(240, 67%, 94%)",
          100: "hsl(240, 60%, 90%)",
          200: "hsl(240, 60%, 85%)",
          300: "hsl(240, 50%, 75%)",
          400: "hsl(240, 40%, 65%)",
          500: "hsl(240, 30%, 55%)",
          600: "hsl(150, 30%, 35%)",
          700: "hsl(150, 40%, 28%)",
          800: "hsl(150, 45%, 22%)",
          900: "hsl(150, 50%, 18%)",
        },
        chart: {
          income: "hsl(150, 50%, 25%)",
          expense: "hsl(10, 75%, 60%)",
          goal: "hsl(160, 50%, 45%)",
          category1: "hsl(282, 44%, 27%)",
          category2: "hsl(160, 50%, 45%)",
          category3: "hsl(35, 85%, 50%)",
          category4: "hsl(10, 75%, 60%)",
          category5: "hsl(270, 50%, 50%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        headline: ['"DM Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(190, 70%, 30%), hsl(160, 50%, 45%))',
        'gradient-2': 'linear-gradient(160deg, hsl(190, 60%, 35%), hsl(190, 70%, 25%))',
        'button-border-gradient': 'linear-gradient(90deg, hsl(190, 70%, 30%), hsl(160, 50%, 45%))',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
