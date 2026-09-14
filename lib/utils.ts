import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const basePath = process.env.NODE_ENV === "production" ? "/diaspora-conference" : "";

// Replace with the Megatix event URL once the committee's account is ready.
export const MEGATIX_URL = "#packages";
