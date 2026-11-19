import { Eye, Plus, Star } from 'lucide-react'
import type { Product } from '../data/site'
import { formatUSD } from '../lib/format'
import { useCart } from '../context/CartContext'

export function ProductCard({
  product,
  onQuickView,
}: {
  product: Product
  onQuickView: (product: Product) => void
}) {
  const { addItem } = useCart()

  return (
    <article className="panel card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-vice-pink px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-white shadow-glow">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
        />
        <button
          type="button"
          onClick={() => onQuickView(product)}
          aria-label={`Quick view ${product.name}`}
          className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white opacity-0 backdrop-blur transition-opacity hover:bg-vice-cyan hover:text-ink-950 group-hover:opacity-100 focus:opacity-100"
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-wider text-slate-500">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 text-vice-sun">
            <Star className="h-3 w-3 fill-current" /> 4.9
          </span>
        </div>
        <h3 className="mt-2 font-display text-xl font-bold uppercase leading-tight text-white">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-vice-cyan">{product.platform}</p>
        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-6 text-slate-400">
          {product.description}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="font-display text-2xl font-bold text-white">
              {formatUSD(product.price)}
            </p>
            {product.oldPrice && (
              <p className="text-xs text-slate-500 line-through">
                {formatUSD(product.oldPrice)}
              </p>
            )}
          </div>
          <span
            className={`text-xs ${product.stock <= 10 ? 'text-vice-sun' : 'text-emerald-400'}`}
          >
            {product.stock <= 10 ? `Only ${product.stock} left` : 'In stock'}
          </span>
        </div>

        <button
          type="button"
          onClick={() => addItem(product.id)}
          className="btn-primary mt-5 w-full !py-2.5 !text-base"
        >
          <Plus className="h-4 w-4" /> Add to cart
        </button>
      </div>
    </article>
  )
}
