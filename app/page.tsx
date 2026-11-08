import ProductCard from "@/components/ProductCard";

const products = [
  { title: "Llantas", image: "/placeholder.svg", description: "Llantas para trailer de alta resistencia." },
  { title: "Frenos", image: "/placeholder.svg", description: "Sistemas de frenado confiables." },
  { title: "Luces", image: "/placeholder.svg", description: "Iluminación LED y halógena." },
  { title: "Suspensión", image: "/placeholder.svg", description: "Componentes de suspensión duraderos." },
];

export default function Home() {
  return (
    <>
      <section id="inicio" className="scroll-mt-20 bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-900">
            Calidad garantizada
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Refaccionaria El Compañero
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Encuentra las mejores refacciones para tu tráiler. Calidad garantizada y
            envíos a todo el país.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Cotizar ahora
            </a>
            <a
              href="#catalogo"
              className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Ver Catálogo
            </a>
          </div>
        </div>
      </section>

      <section id="nosotros" className="scroll-mt-20 bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-blue-900">
            Nosotros
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            En Refaccionaria El Compañero nos dedicamos a la venta de refacciones para
            trailers, ofreciendo productos de calidad y atención personalizada para que
            tu operación nunca se detenga.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Misión</h3>
              <p className="mt-3 text-gray-600">
                Proveer refacciones de calidad para trailers, garantizando
                disponibilidad, asesoría técnica y un servicio confiable a cada cliente.
              </p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Visión</h3>
              <p className="mt-3 text-gray-600">
                Ser la opción preferida en refacciones para trailers a nivel regional,
                reconocidos por nuestra calidad, rapidez y compromiso.
              </p>
            </article>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900">¿Por qué elegirnos?</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• Amplio catálogo de refacciones para trailer.</li>
              <li>• Asesoría personalizada para encontrar la pieza correcta.</li>
              <li>• Envíos a todo el país.</li>
              <li>• Precios competitivos y calidad garantizada.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="catalogo" className="scroll-mt-20 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-blue-900">
              Catálogo
            </h2>
            <p className="mt-3 text-gray-600">
              Refacciones seleccionadas para tu trailer.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-20 bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">¿Necesitas una cotización?</h2>
          <p className="mt-3 text-gray-600">
            Contáctanos y te ayudamos a encontrar la refacción ideal.
          </p>
          <a
            href="mailto:contacto@refaccionariaelcompanero.com"
            className="mt-6 inline-block rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Enviar correo
          </a>
        </div>
      </section>
    </>
  );
}
