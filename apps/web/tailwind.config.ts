import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

/**
 * Creates fluid font sizes using CSS clamp
 */
const createFluidFontSize = (
  minSize: number,
  maxSize: number,
  minScreenSize: number = 390,
  maxScreenSize: number = 1440
) => {
  const pxToRem = (px: number) => `${Math.round((px / 16 + Number.EPSILON) * 100) / 100}rem`;
  const vwCalc = Math.round(((100 * (maxSize - minSize)) / (maxScreenSize - minScreenSize) + Number.EPSILON) * 100) / 100;
  const remCalc = Math.round(((minScreenSize * maxSize - maxScreenSize * minSize) / (minScreenSize - maxScreenSize) + Number.EPSILON) * 100) / 100;
  return `clamp(${pxToRem(minSize)}, ${vwCalc}vw + ${pxToRem(remCalc)}, ${pxToRem(maxSize)})`;
};

const config: Config = {
  content: [
    "../../packages/yolo-ui/src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        container: "1440px",
      },
      colors: {
        background: "hsl(var(--color-background) / <alpha-value>)",
        foreground: {
          primary: "hsl(var(--color-foreground-primary) / <alpha-value>)",
          secondary: "hsl(var(--color-foreground-secondary) / <alpha-value>)",
        },
      },
      fontFamily: {
        impact: ["var(--font-impact)"],
        helvetica: ["var(--font-helvetica)"],
        black: ["madeType-outerSans-black", "sans-serif"],
        light: ["madeType-outerSans-light", "sans-serif"],
        "black-outlined": ["madeType-outerSans-black-outlined", "sans-serif"],
        special: ["Dorsa", "sans-serif"],
      },
      borderRadius: {
        "2.5xl": "20px",
      },
      animation: {
        "fade-in": "fade-in .3s ease-in .2s 1 backwards",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      fontSize: {
        h1: createFluidFontSize(20, 24),
        "h1-lg": createFluidFontSize(24, 48),
        "h2-xs": createFluidFontSize(8, 10),
        "h2-sm": createFluidFontSize(10, 12),
        h2: createFluidFontSize(12, 14),
        "h2-md": createFluidFontSize(14, 16),
        "h2-lg": createFluidFontSize(16, 24),
        "body-sm": createFluidFontSize(10, 12),
        body: createFluidFontSize(14, 16),
        "deco-xs": createFluidFontSize(25, 40),
        "deco-sm": createFluidFontSize(32, 80),
        deco: createFluidFontSize(56, 160),
        "deco-md": createFluidFontSize(100, 180),
        "deco-lg": createFluidFontSize(56, 200),
      },
    },
  },
  plugins: [typography],
};

export default config;
