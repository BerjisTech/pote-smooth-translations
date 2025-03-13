
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        sm: "1rem",
        lg: "45px",
        xl: "5rem",
        "2xl": "13rem",
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'rgb(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
          25: "rgb(var(--primary-25))",
          50: "rgb(var(--primary-50))",
          100: "rgb(var(--primary-100))",
          200: "rgb(var(--primary-200))",
          300: "rgb(var(--primary-300))",
          400: "rgb(var(--primary-400))",
          500: "rgb(var(--primary-500))",
          600: "rgb(var(--primary-600))",
          700: "rgb(var(--primary-700))",
          800: "rgb(var(--primary-800))",
          900: "rgb(var(--primary-900))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))",
        },
        dark: "rgb(var(--dark))",
        black: "rgb(var(--black))",
        accent: {
          DEFAULT: "rgb(var(--accent))",
          foreground: "rgb(var(--accent-foreground))",
          dark: "rgb(var(--accent-dark))",
          darker: "rgb(var(--accent-darker))",
        },
        "dark-blue-hue": "rgb(var(--dark-blue-hue))",
        grey: {
          25: "rgb(var(--grey-25))",
          50: "rgb(var(--grey-50))",
          100: "rgb(var(--grey-100))",
          200: "rgb(var(--grey-200))",
          300: "rgb(var(--grey-300))",
          400: "rgb(var(--grey-400))",
          500: "rgb(var(--grey-500))",
          600: "rgb(var(--grey-600))",
          700: "rgb(var(--grey-700))",
          800: "rgb(var(--grey-800))",
          900: "rgb(var(--grey-900))",
        },
        cards: {
          "01": "rgb(var(--cards-01))",
          "02": "rgb(var(--cards-02))",
          "03": "rgb(var(--cards-03))",
          "04": "rgb(var(--cards-04))",
          "05": "rgb(var(--cards-05))",
          "06": "rgb(var(--cards-06))",
          "07": "rgb(var(--cards-07))",
          "08": "rgb(var(--cards-08))",
          "09": "rgb(var(--cards-09))",
          "10": "rgb(var(--cards-10))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        360: {
          "deep-blue": "hsl(var(--deep-blue))",
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "green-gradient": "linear-gradient(86.43deg, #2e6969 0.52%, #74c3c2 98.27%)",
        "green-gradient-dark": "linear-gradient(86.43deg, #1b3b3b 0.52%, #3c5757 98.27%)",
        "purple-gradient": "linear-gradient(90deg, #5e2955 0%, #8c5181 100%)",
      },
      boxShadow: {
        custom:
          "0px 4px 6px -2px rgba(16, 24, 40, 0.08), 0px 12px 16px -4px rgba(16, 24, 40, 0.14)",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' }
        },
        'slide-in-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'blur-in': {
          '0%': { filter: 'blur(8px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'fade-out': 'fade-out 0.3s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.4s ease-out forwards',
        'slide-out-left': 'slide-out-left 0.4s ease-out forwards',
        'slide-in-up': 'slide-in-up 0.3s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'blur-in': 'blur-in 0.3s ease-out forwards',
        shimmer: "shimmer 1.5s infinite",
        "slide-up": "slideUp 0.3s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
        merriweather: ["var(--font-merriweather)", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        custom: "15px",
      },
      spacing: {
        "0.75": "0.1875rem",
        "3.25": "0.8125rem",
      },
      maxWidth: {
        "768": "45rem",
        "992": "60rem",
        "1200": "71.25rem",
        "30p": "30%",
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "999": "999",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
