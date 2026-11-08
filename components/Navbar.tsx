import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-gray-900">
          Refaccionaria El Compañero
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition-colors hover:text-blue-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
