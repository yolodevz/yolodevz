"use client";

import React from "react";
import { cx, cva } from "class-variance-authority";

const sizes = {
  base: "base",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
} as const;

export interface ContainerProps {
  size?: keyof typeof sizes;
  intent?:
    | "black"
    | "black-outlined"
    | "bold"
    | "medium"
    | "regular"
    | "light"
    | "thin"
    | "special";
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const styledText = cva("", {
  variants: {
    size: {
      base: "text-fluid-base",
      md: "text-fluid-md",
      lg: "text-fluid-lg",
      xl: "text-fluid-xl",
      "2xl": "text-fluid-2xl",
    },
    intent: {
      black: "font-black",
      "black-outlined": "font-black-outlined",
      bold: "font-bold",
      medium: "font-medium",
      regular: "font-regular",
      light: "font-light",
      thin: "font-thin",
      special: "font-special",
    },
  },
  defaultVariants: {
    size: "base",
    intent: "regular",
  },
});

export const Text = ({
  size = "base",
  intent = "regular",
  className,
  children,
  as: Component = "p",
  ...props
}: ContainerProps) => {
  return (
    <Component
      className={cx(styledText({ intent, size }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
