import Image from "next/image";

type ProductCardProps = {
  title: string;
  image: string;
  description?: string;
};

export default function ProductCard({ title, image, description }: ProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full bg-gray-50">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-6"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description ? (
          <p className="text-sm text-gray-600">{description}</p>
        ) : null}
        <button
          type="button"
          className="mt-auto rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Cotizar
        </button>
      </div>
    </article>
  );
}
