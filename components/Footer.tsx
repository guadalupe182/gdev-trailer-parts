export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center text-sm text-gray-500 sm:flex-row sm:text-left">
        <p>© 2026 Refaccionaria El Compañero. Todos los derechos reservados.</p>
        <p>
          Desarrollado por{" "}
          <a
            href="https://www.gdevsoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:text-blue-700"
          >
            GDEV
          </a>
        </p>
      </div>
    </footer>
  );
}
