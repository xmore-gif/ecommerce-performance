import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Aero Headphones",
    category: "Audio",
    price: 129.99,
    description: "Wireless noise-cancelling headphones.",
    icon: "◉",
  },
  {
    id: 2,
    name: "Nova Watch",
    category: "Wearables",
    price: 199.99,
    description: "Smart watch with health and fitness tracking.",
    icon: "◌",
  },
  {
    id: 3,
    name: "Orbit Speaker",
    category: "Audio",
    price: 89.99,
    description: "Compact premium wireless speaker.",
    icon: "◍",
  },
  {
    id: 4,
    name: "Flux Keyboard",
    category: "Accessories",
    price: 109.99,
    description: "Mechanical keyboard designed for creators.",
    icon: "⌨",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#08090c] px-8 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm text-gray-400 hover:text-white">
          ← Back to home
        </Link>

        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Collection
          </p>

          <h1 className="mt-3 text-5xl font-bold">All products</h1>

          <p className="mt-4 max-w-xl text-gray-400">
            Explore our complete selection of premium technology.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-violet-400/40"
            >
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/10 text-7xl text-violet-300">
                {product.icon}
              </div>

              <p className="mt-5 text-xs uppercase tracking-wider text-gray-500">
                {product.category}
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                {product.name}
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                {product.description}
              </p>

              <p className="mt-5 font-bold">
                ${product.price.toFixed(2)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}