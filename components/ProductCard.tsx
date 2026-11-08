import Image from "next/image";

type ProductCardProps = {
  title: string;
  image: string;
  description?: string;
};

export default function ProductCard({ title, image, description }: ProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-6"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{title}</h3>
        {description ? (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
        ) : null}
        <button
          type="button"
          className="mt-auto rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Cotizar
        </button>
      </div>
    </article>
  );
}
