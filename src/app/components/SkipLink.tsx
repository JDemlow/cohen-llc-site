"use client";

import { useEffect } from "react";

export default function SkipLink() {
  useEffect(() => {
    const skipLink = document.querySelector(".skip-link");
    const mainContent = document.querySelector("#main-content") as HTMLElement;

    if (skipLink && mainContent) {
      skipLink.addEventListener("click", (e) => {
        e.preventDefault();
        // Set tabindex to -1 to make the main content focusable
        mainContent.setAttribute("tabindex", "-1");
        // Focus the main content
        mainContent.focus();
        // Scroll to the main content
        mainContent.scrollIntoView();
      });
    }
  }, []);

  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
}
