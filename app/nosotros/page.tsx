export const metadata = {
  title: "Nosotros | Refaccionaria El Compañero",
  description: "Conoce nuestra misión, visión y por qué elegirnos.",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Nosotros
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        En Refaccionaria El Compañero nos dedicamos a la venta de refacciones para
        trailers, ofreciendo productos de calidad y atención personalizada para que tu
        operación nunca se detenga.
      </p>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Misión</h2>
          <p className="mt-3 text-gray-600">
            Proveer refacciones de calidad para trailers, garantizando disponibilidad,
            asesoría técnica y un servicio confiable a cada cliente.
          </p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Visión</h2>
          <p className="mt-3 text-gray-600">
            Ser la opción preferida en refacciones para trailers a nivel regional,
            reconocidos por nuestra calidad, rapidez y compromiso.
          </p>
        </article>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">¿Por qué elegirnos?</h2>
        <ul className="mt-4 space-y-3 text-gray-600">
          <li>• Amplio catálogo de refacciones para trailer.</li>
          <li>• Asesoría personalizada para encontrar la pieza correcta.</li>
          <li>• Envíos a todo el país.</li>
          <li>• Precios competitivos y calidad garantizada.</li>
        </ul>
      </section>
    </div>
  );
}
