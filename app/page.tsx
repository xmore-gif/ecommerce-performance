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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090c] text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-8 py-5">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          NEXORA<span className="text-violet-400">.</span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-gray-300">
          <Link href="/products" className="hover:text-white">
            Products
          </Link>
          <Link href="/cart" className="hover:text-white">
            Cart
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-white/15 px-5 py-2 hover:bg-white/10"
          >
            Login
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-8 pb-20 pt-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Next-generation commerce
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Technology designed
            <span className="block text-violet-400">for what&apos;s next.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            Discover premium technology, thoughtfully selected for people who
            expect more from every product.
          </p>

          <div className="mt-9 flex gap-4">
            <Link
              href="/products"
              className="rounded-full bg-violet-500 px-7 py-3 font-semibold transition hover:bg-violet-400"
            >
              Explore products
            </Link>

            <Link
              href="/cart"
              className="rounded-full border border-white/15 px-7 py-3 font-semibold transition hover:bg-white/10"
            >
              View cart
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm text-violet-400">Featured collection</p>
            <h2 className="mt-2 text-3xl font-bold">Built to perform.</h2>
          </div>

          <Link
            href="/products"
            className="text-sm text-gray-400 hover:text-white"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.06]"
            >
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/10 text-7xl text-violet-300">
                {product.icon}
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {product.description}
                </p>

                <p className="mt-5 text-lg font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-8 py-8 text-center text-sm text-gray-500">
        NEXORA — Performance-first commerce experience
      </footer>
    </main>
  );
} 