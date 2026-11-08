"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setYear(new Date().getFullYear());
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © {year ?? ""} Gdev Trailer Parts. Todos los derechos reservados.
      </div>
    </footer>
  );
}
