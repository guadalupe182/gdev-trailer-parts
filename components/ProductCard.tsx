import Image from "next/image";

type ProductCardProps = {
  title: string;
  image: string;
  description?: string;
  featured?: boolean;
};

export default function ProductCard({ title, image, description, featured = false }: ProductCardProps) {
  if (featured) {
    return (
      <article className="group relative min-h-[320px] overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:col-span-2 lg:row-span-2">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
          <span className="mb-3 inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Destacado
          </span>
          <h3 className="text-2xl font-bold sm:text-3xl">{title}</h3>
          {description ? (
            <p className="mt-2 max-w-xl text-sm text-gray-200 sm:text-base">
              {description}
            </p>
          ) : null}
          <button
            type="button"
            className="mt-5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-red-600 hover:text-white"
          >
            Cotizar
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description ? (
          <p className="text-sm leading-6 text-gray-600">{description}</p>
        ) : null}
        <button
          type="button"
          className="mt-auto rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
        >
          Cotizar
        </button>
      </div>
    </article>
  );
}
