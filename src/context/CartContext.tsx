import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { products, type Product } from '../data/site'

export type CartItem = {
  id: string
  quantity: number
}

type Toast = {
  id: number
  message: string
  tone: 'success' | 'info' | 'error'
}

type CartContextValue = {
  items: CartItem[]
  detailedItems: Array<CartItem & { product: Product }>
  itemCount: number
  subtotal: number
  isCartOpen: boolean
  toasts: Toast[]
  addItem: (id: string, quantity?: number) => void
  setQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  notify: (message: string, tone?: Toast['tone']) => void
  dismissToast: (id: number) => void
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'vcv-cart'

const readStoredCart = (): CartItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartItem[]
    return Array.isArray(parsed)
      ? parsed.filter(
          (item) =>
            typeof item.id === 'string' &&
            products.some((product) => product.id === item.id) &&
            Number.isFinite(item.quantity) &&
            item.quantity > 0,
        )
      : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStoredCart)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const dismissToast = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const notify = useCallback(
    (message: string, tone: Toast['tone'] = 'success') => {
      const id = Date.now() + Math.random()
      setToasts((current) => [...current, { id, message, tone }])
      window.setTimeout(() => dismissToast(id), 3600)
    },
    [dismissToast],
  )

  const addItem = useCallback(
    (id: string, quantity = 1) => {
      const product = products.find((entry) => entry.id === id)
      if (!product) return
      setItems((current) => {
        const existing = current.find((item) => item.id === id)
        const nextQuantity = Math.min(
          (existing?.quantity ?? 0) + quantity,
          product.stock,
        )
        if (existing) {
          if (existing.quantity >= product.stock) return current
          return current.map((item) =>
            item.id === id ? { ...item, quantity: nextQuantity } : item,
          )
        }
        return [...current, { id, quantity: nextQuantity }]
      })
      notify(`${product.name} added to cart`)
      setIsCartOpen(true)
    },
    [notify],
  )

  const setQuantity = useCallback((id: string, quantity: number) => {
    const product = products.find((entry) => entry.id === id)
    if (!product) return
    setItems((current) =>
      quantity <= 0
        ? current.filter((item) => item.id !== id)
        : current.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.min(quantity, product.stock) }
              : item,
          ),
    )
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const detailedItems = useMemo(
    () =>
      items.flatMap((item) => {
        const product = products.find((entry) => entry.id === item.id)
        return product ? [{ ...item, product }] : []
      }),
    [items],
  )

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () =>
      detailedItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      ),
    [detailedItems],
  )

  const value: CartContextValue = {
    items,
    detailedItems,
    itemCount,
    subtotal,
    isCartOpen,
    toasts,
    addItem,
    setQuantity,
    removeItem,
    clearCart,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
    notify,
    dismissToast,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}
