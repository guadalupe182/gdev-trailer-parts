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
              href="#catalogo"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Ver catálogo
            </a>
          </div>
        </div>
      </section>

      <section id="catalogo" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Catálogo
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Refacciones seleccionadas para tu trailer.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl bg-zinc-900 px-8 py-12 text-center text-white dark:bg-zinc-800">
          <h2 className="text-2xl font-bold">¿Necesitas una cotización?</h2>
          <p className="mt-3 text-zinc-300">
            Contáctanos y te ayudamos a encontrar la refacción ideal.
          </p>
          <a
            href="mailto:contacto@gdevtrailerparts.com"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            Enviar correo
          </a>
        </div>
      </section>
    </>
  );
}
