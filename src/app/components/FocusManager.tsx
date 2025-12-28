"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function FocusManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset focus to body on route change so Tab starts from the beginning
    document.body.focus();
  }, [pathname]);

  return null;
}
