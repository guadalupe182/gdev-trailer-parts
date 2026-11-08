export const metadata = {
  title: "Nosotros | Gdev Trailer Parts",
  description: "Conoce nuestra misión, visión y por qué elegirnos.",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        Nosotros
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        En Gdev Trailer Parts nos dedicamos a la venta de refacciones para trailers,
        ofreciendo productos de calidad y atención personalizada para que tu
        operación nunca se detenga.
      </p>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Misión
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Proveer refacciones de calidad para trailers, garantizando disponibilidad,
            asesoría técnica y un servicio confiable a cada cliente.
          </p>
        </article>
        <article className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Visión
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Ser la opción preferida en refacciones para trailers a nivel regional,
            reconocidos por nuestra calidad, rapidez y compromiso.
          </p>
        </article>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          ¿Por qué elegirnos?
        </h2>
        <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400">
          <li>• Amplio catálogo de refacciones para trailer.</li>
          <li>• Asesoría personalizada para encontrar la pieza correcta.</li>
          <li>• Envíos a todo el país.</li>
          <li>• Precios competitivos y calidad garantizada.</li>
        </ul>
      </section>
    </div>
  );
}
