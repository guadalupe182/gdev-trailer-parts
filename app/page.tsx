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
      <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
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
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Cotizar ahora
            </a>
            <a
              href="#catalogo"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              Ver Catálogo
            </a>
          </div>
        </div>
      </section>

      <section id="catalogo" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
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

      <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl bg-blue-600 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold">¿Necesitas una cotización?</h2>
          <p className="mt-3 text-blue-100">
            Contáctanos y te ayudamos a encontrar la refacción ideal.
          </p>
          <a
            href="mailto:contacto@refaccionariaelcompanero.com"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
          >
            Enviar correo
          </a>
        </div>
      </section>
    </>
  );
}
