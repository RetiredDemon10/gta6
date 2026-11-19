import { Check, Plus, X } from 'lucide-react'
import { useEffect } from 'react'
import { useCart } from '../context/CartContext'
import type { Product } from '../data/site'
import { formatUSD } from '../lib/format'

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null
  onClose: () => void
}) {
  const { addItem } = useCart()

  useEffect(() => {
    if (!product) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [product, onClose])

  return (
    <>
      {product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close product details"
            onClick={onClose}
            className="absolute inset-0 h-full w-full bg-black/75 backdrop-blur-sm"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            className="panel relative z-10 grid max-h-[90vh] w-full max-w-4xl overflow-y-auto md:grid-cols-2"
          >
            <div className="flex items-center justify-center bg-ink-800 p-6">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-80 w-full object-contain"
              />
            </div>
            <div className="p-7">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:border-vice-pink hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="eyebrow">{product.category}</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-none text-white">
                {product.name}
              </h2>
              <p className="mt-2 text-sm text-vice-cyan">{product.platform}</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {product.description}
              </p>
              <ul className="mt-5 space-y-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-vice-pink/20">
                      <Check className="h-3 w-3 text-vice-pink" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-end gap-3">
                <p className="font-display text-4xl font-bold text-white">
                  {formatUSD(product.price)}
                </p>
                {product.oldPrice && (
                  <p className="pb-1 text-sm text-slate-500 line-through">
                    {formatUSD(product.oldPrice)}
                  </p>
                )}
              </div>
              <p className="mt-1 text-xs text-slate-500">
                {product.stock} in stock · Ships in 1–2 business days
              </p>
              <button
                type="button"
                onClick={() => {
                  addItem(product.id)
                  onClose()
                }}
                className="btn-primary mt-6 w-full"
              >
                <Plus className="h-4 w-4" /> Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
