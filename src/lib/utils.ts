import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppLink(number: string, message?: string): string {
  const cleaned = number.replace(/\D/g, "");
  const international = cleaned.startsWith("0")
    ? "20" + cleaned.slice(1)
    : cleaned;
  const encoded = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${international}${encoded}`;
}

export function formatEmailLink(email: string, subject?: string): string {
  const sub = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${sub}`;
}
