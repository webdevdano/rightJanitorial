"use client";
import { useEffect } from "react";

export default function useRevealOnScroll(selector = ".reveal-on-scroll", options = {}) {
  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) return;
    // Remove revealed class for SSR hydration fallback
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => el.classList.remove("revealed"));
    // Timeout to ensure DOM is ready after hydration
    setTimeout(() => {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, ...options }
      );
      document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    }, 50);
    return () => {
      // Clean up
      document.querySelectorAll(selector).forEach((el) => el.classList.remove("revealed"));
    };
  }, [selector, options]);
}
