export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-50 to-white px-6 py-24 dark:from-zinc-950 dark:to-black">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-block rounded-full border border-zinc-200 bg-white px-4 py-1 text-sm font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          Calidad y durabilidad
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          Refacciones para Trailers
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Encuentra los repuestos que tu trailer necesita. Atención personalizada y
          envíos a todo el país.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#contacto"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Contacto
          </a>
          <a
            href="#productos"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            Ver productos
          </a>
        </div>
      </div>
    </section>
  );
}
