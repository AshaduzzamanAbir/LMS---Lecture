/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Core Content Paths - Directs Tailwind where to scan for applied utility classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // 2. Dark Mode Configuration
  // Set to 'class' to manually toggle dark mode by adding the .dark class to the <html> tag
  darkMode: "class",

  // 3. Theme Customization & Extensions
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontSize: {
        "course-details-heading-small": ["1.5rem", "1.875rem"], // 24px,36px
        "course-details-heading-large": ["2.25rem", "3.70rem"], // 36px,44px
        "text-home-heading-small": ["1.60rem", "1.90rem"], // 24px
        "text-home-heading-large": ["3.60rem", "4.175rem"], // 46px,54px
        default: ["15px", "22px"],
      },
      spacing: { "section-height": "500px" },
      // Custom Color System (accessible via bg-brand-500, text-ui-dark, etc.)
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae2fd",
          300: "#7cc8fc",
          400: "#36aafd",
          500: "#0c8df4", // Primary brand color
          600: "#026ecb",
          700: "#0258a3",
          800: "#064b86",
          900: "#0b3f6f",
          950: "#07284a",
        },
        ui: {
          light: "#fafafa",
          dark: "#121212",
          surface: "#ffffff",
          "surface-dark": "#1e1e1e",
        },
        accent: {
          emerald: "#10b981",
          rose: "#f43f5e",
          amber: "#f59e0b",
        },
      },

      // Typography Configurations
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: ["Merriweather", "Georgia", "serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },

      // Spacing System Enhancements
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        128: "32rem",
        144: "36rem",
      },

      // Custom Shadows (useful for cards, buttons, and glowing modern UI components)
      boxShadow: {
        button: "0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.1)",
        "glow-brand": "0 0 15px 2px rgba(12, 141, 244, 0.3)",
        "glow-accent": "0 0 15px 2px rgba(16, 185, 129, 0.3)",
      },

      // Keyframe Animations & Transitions
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        "fade-in-up": "fadeInUp 0.4s ease-out forwards",
      },
    },
  },

  // 4. Core Plugins Customization
  plugins: [
    // Tip: Install via npm/yarn and uncomment to use
    // require('@tailwindcss/typography'), // Formats rich text markdown blocks
    // require('@tailwindcss/forms'),      // Custom reset styles for standard form inputs
  ],
};
