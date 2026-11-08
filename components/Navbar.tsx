import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
          Gdev Trailer Parts
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <li>
            <Link href="/" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#productos" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
              Productos
            </Link>
          </li>
          <li>
            <Link href="#contacto" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
