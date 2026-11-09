import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const products = [
  { title: "Llantas", image: "/placeholder.svg", description: "Llantas para trailer de alta resistencia y carga pesada." },
  { title: "Frenos", image: "/placeholder.svg", description: "Sistemas de frenado confiables para mayor seguridad." },
  { title: "Luces", image: "/placeholder.svg", description: "Iluminación LED y halógena de alta visibilidad." },
  { title: "Suspensión", image: "/placeholder.svg", description: "Componentes duraderos para un manejo estable." },
];

const benefits = [
  "Amplio catálogo de refacciones para trailer.",
  "Asesoría personalizada para encontrar la pieza correcta.",
  "Envíos a todo el país.",
  "Precios competitivos y calidad garantizada.",
];

export default function Home() {
  return (
    <>
      <section
        id="inicio"
        className="scroll-mt-20 bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-900">
              Calidad garantizada
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Refaccionaria El Compañero
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Encuentra las mejores refacciones para tu tráiler. Calidad garantizada y
              envíos a todo el país.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-all hover:-translate-y-0.5 hover:bg-red-700 sm:w-auto"
              >
                Cotizar ahora
              </a>
              <a
                href="#catalogo"
                className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition-colors hover:border-blue-900 hover:text-blue-900 sm:w-auto"
              >
                Ver Catálogo
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8 text-center sm:max-w-md">
              <div>
                <p className="text-2xl font-bold text-blue-900">+500</p>
                <p className="text-xs text-gray-500">Piezas disponibles</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">24h</p>
                <p className="text-xs text-gray-500">Respuesta rápida</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">100%</p>
                <p className="text-xs text-gray-500">Calidad</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-100 to-red-100 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/placeholder.svg"
                  alt="Refacciones para trailers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-gray-900">
                  Refacciones listas para enviar
                </p>
                <p className="text-xs text-gray-600">
                  Llantas, frenos, luces y suspensión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="scroll-mt-20 bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
              Nosotros
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
              Refacciones confiables para que tu trailer siga en camino
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              En Refaccionaria El Compañero nos dedicamos a la venta de refacciones
              para trailers, ofreciendo productos de calidad y atención personalizada
              para que tu operación nunca se detenga.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-900">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Misión</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Proveer refacciones de calidad para trailers, garantizando
                disponibilidad, asesoría técnica y un servicio confiable a cada
                cliente.
              </p>
            </article>
            <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Visión</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Ser la opción preferida en refacciones para trailers a nivel regional,
                reconocidos por nuestra calidad, rapidez y compromiso.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">¿Por qué elegirnos?</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                    ✓
                  </span>
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="scroll-mt-20 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
                Catálogo
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                Refacciones destacadas
              </h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                Seleccionamos las piezas más solicitadas para mantener tu trailer en
                óptimas condiciones.
              </p>
            </div>
            <a
              href="#contacto"
              className="w-fit rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:border-blue-900 hover:text-blue-900"
            >
              Solicitar cotización
            </a>
          </div>

          <div className="mt-10 grid auto-rows-[260px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={product.title} {...product} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-20 bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
              Contacto
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
              ¿Necesitas una cotización?
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Contáctanos y te ayudamos a encontrar la refacción ideal para tu
              trailer.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="mailto:contacto@refaccionariaelcompanero.com"
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-blue-900"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                  @
                </span>
                <span>
                  <span className="block text-sm font-semibold text-gray-900">
                    Correo
                  </span>
                  <span className="text-sm text-gray-600">
                    contacto@refaccionariaelcompanero.com
                  </span>
                </span>
              </a>
              <a
                href="tel:+520000000000"
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-blue-900"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  ☎
                </span>
                <span>
                  <span className="block text-sm font-semibold text-gray-900">
                    Teléfono
                  </span>
                  <span className="text-sm text-gray-600">+52 000 000 0000</span>
                </span>
              </a>
            </div>
          </div>

          <form className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-gray-700">
                Nombre
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Correo
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                  placeholder="tu@correo.com"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-gray-700">
              Mensaje
              <textarea
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                placeholder="¿Qué refacción necesitas?"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:w-auto"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
