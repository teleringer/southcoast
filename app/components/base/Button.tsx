"use client";

import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...rest }: Props) {
  const base = "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-blue-700 text-white hover:bg-blue-800"
      : "bg-transparent text-blue-700 hover:bg-blue-50";
  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}
