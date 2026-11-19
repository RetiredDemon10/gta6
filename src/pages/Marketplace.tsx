import { RotateCcw, Search, ShieldCheck, Truck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { ProductModal } from '../components/ProductModal'
import { Reveal } from '../components/Reveal'
import { images, products, type Category, type Product } from '../data/site'
import { cn } from '../lib/utils'

const categories: Array<Category | 'All'> = [
  'All',
  'Consoles',
  'Bundles',
  'Games',
  'Accessories',
  'Merch',
]

type Sort = 'featured' | 'low' | 'high' | 'name'

export function Marketplace() {
  const [category, setCategory] = useState<Category | 'All'>('All')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<Sort>('featured')
  const [selected, setSelected] = useState<Product | null>(null)

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    const result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesQuery =
        !normalized ||
        `${product.name} ${product.platform} ${product.description}`
          .toLowerCase()
          .includes(normalized)
      return matchesCategory && matchesQuery
    })

    return [...result].sort((a, b) => {
      if (sort === 'low') return a.price - b.price
      if (sort === 'high') return b.price - a.price
      if (sort === 'name') return a.name.localeCompare(b.name)
      return 0
    })
  }, [category, query, sort])

  const reset = () => {
    setCategory('All')
    setQuery('')
    setSort('featured')
  }

  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden border-b border-white/10 py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${images.keyArtAlt})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        <div className="container-x relative">
          <p className="eyebrow">The marketplace</p>
          <h1 className="heading-lg mt-3">
            Everything for <span className="text-gradient">launch day</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Consoles, GTA VI editions, bundles and accessories. Browse the
            vault, compare prices in USD and check out with your favorite
            payment method.
          </p>
        </div>
      </section>

      <section className="container-x py-12">
        {/* FILTER BAR */}
        <div className="panel flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  'rounded-full border px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide transition-all',
                  category === item
                    ? 'border-vice-pink bg-vice-pink text-white shadow-glow'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/30',
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products..."
                aria-label="Search products"
                className="field !w-full !py-2.5 !pl-10 sm:!w-56"
              />
            </label>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as Sort)}
              aria-label="Sort products"
              className="field !w-full !py-2.5 sm:!w-48"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
          <p>
            Showing <span className="text-white">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'product' : 'products'}
          </p>
          {(category !== 'All' || query || sort !== 'featured') && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-vice-cyan hover:underline"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset filters
            </button>
          )}
        </div>

        {/* GRID */}
        {filtered.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product, index) => (
              <Reveal key={product.id} delay={Math.min(index * 0.05, 0.3)}>
                <ProductCard product={product} onQuickView={setSelected} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="panel mt-6 py-20 text-center">
            <Search className="mx-auto h-10 w-10 text-slate-600" />
            <h2 className="heading-md mt-5">No matches found</h2>
            <p className="mt-2 text-sm text-slate-400">
              Try a different search or browse all categories.
            </p>
            <button type="button" onClick={reset} className="btn-outline mt-6">
              Show everything
            </button>
          </div>
        )}

        {/* TRUST STRIP */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Truck, title: 'Fast US shipping', body: 'Dispatched in 1–2 business days.' },
            { icon: ShieldCheck, title: 'Buyer protection', body: '30-day returns on unopened gear.' },
            { icon: RotateCcw, title: 'Easy support', body: 'We help with orders and installs.' },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <Icon className="h-7 w-7 shrink-0 text-vice-cyan" />
              <div>
                <p className="font-display text-lg font-bold uppercase text-white">
                  {title}
                </p>
                <p className="text-sm text-slate-400">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  )
}
