import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        glitch: {
          "0%, 5%, 100%": {
            color: "hsl(var(--primary))",
            textShadow: "2px 2px 0px #00ff66, -2px -2px 0px #00cc44",
          },
          "1%": {
            color: "#00ff66",
            textShadow:
              "-2px -2px 0px hsl(var(--primary)), 2px 2px 0px #00cc44",
          },
          "2%": {
            color: "#00cc44",
            textShadow:
              "2px -2px 0px #00ff66, -2px 2px 0px hsl(var(--primary))",
          },
          "3%": {
            color: "#33ff99",
            textShadow: "-2px 2px 0px #00cc44, 2px -2px 0px #00ff66",
          },
          "4%": {
            color: "hsl(var(--primary))",
            textShadow: "2px 2px 0px #00ff66, -2px -2px 0px #00cc44",
          },
        },
      },
      animation: {
        glitch: "glitch 7s linear infinite",
      },
      fontFamily: {
        caveat: ["var(--font-caveat)"],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
