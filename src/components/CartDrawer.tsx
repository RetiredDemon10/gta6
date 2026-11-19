import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatUSD, orderTotal, shippingCost } from '../lib/format'

export function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    detailedItems,
    itemCount,
    subtotal,
    setQuantity,
    removeItem,
  } = useCart()

  useEffect(() => {
    if (!isCartOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeCart()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isCartOpen, closeCart])

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="absolute inset-0 h-full w-full bg-black/70 backdrop-blur-sm"
          />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-ink-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <p className="eyebrow">Your cart</p>
                <h2 className="font-display text-3xl font-bold uppercase text-white">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:border-vice-pink hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {detailedItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <ShoppingBag className="h-9 w-9 text-slate-500" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase text-white">
                    Cart is empty
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-slate-400">
                    Level up your setup with a new console or a GTA VI bundle.
                  </p>
                  <Link
                    to="/marketplace"
                    onClick={closeCart}
                    className="btn-primary mt-6"
                  >
                    Browse marketplace
                  </Link>
                </div>
              ) : (
                <ul className="space-y-4">
                  {detailedItems.map(({ product, quantity }) => (
                    <li
                      key={product.id}
                      className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3"
                    >
                      <img
                        src={product.image}
                        alt=""
                        className="h-20 w-20 shrink-0 rounded-lg bg-ink-800 object-contain p-1.5"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-display text-lg font-bold uppercase text-white">
                          {product.name}
                        </p>
                        <p className="text-xs text-vice-cyan">{product.platform}</p>
                        <p className="mt-1 font-display text-lg font-bold text-vice-sun">
                          {formatUSD(product.price * quantity)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex items-center rounded-full border border-white/10">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() => setQuantity(product.id, quantity - 1)}
                              className="flex h-7 w-7 items-center justify-center text-slate-300 hover:text-white"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center text-sm text-white">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() => setQuantity(product.id, quantity + 1)}
                              className="flex h-7 w-7 items-center justify-center text-slate-300 hover:text-white"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            type="button"
                            aria-label={`Remove ${product.name}`}
                            onClick={() => removeItem(product.id)}
                            className="flex h-7 w-7 items-center justify-center text-slate-500 hover:text-vice-pink"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {detailedItems.length > 0 && (
              <div className="border-t border-white/10 px-6 py-5">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span>{formatUSD(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Shipping</span>
                    <span className={shippingCost(subtotal) === 0 ? 'text-emerald-400' : ''}>
                      {shippingCost(subtotal) === 0
                        ? 'Free'
                        : formatUSD(shippingCost(subtotal))}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-3 font-display text-2xl font-bold uppercase text-white">
                    <span>Total</span>
                    <span>{formatUSD(orderTotal(subtotal))}</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Includes {formatUSD(subtotal * 0.08)} estimated tax (8%).
                  </p>
                </div>
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="btn-primary mt-5 w-full"
                >
                  Checkout securely
                </Link>
                <button
                  type="button"
                  onClick={closeCart}
                  className="btn-ghost mt-2 w-full"
                >
                  Continue shopping
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  )
}
