import {
  Bitcoin,
  CheckCircle2,
  Copy,
  CreditCard,
  LockKeyhole,
  Mail,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wallet,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import {
  formatUSD,
  estimatedTax,
  makeOrderId,
  orderTotal,
  shippingCost,
} from '../lib/format'
import { cn } from '../lib/utils'

type PaymentMethod = 'paypal' | 'crypto' | 'cashapp'

const methods: Array<{
  id: PaymentMethod
  name: string
  description: string
  icon: typeof Wallet
}> = [
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Pay with your PayPal balance or linked account.',
    icon: Wallet,
  },
  {
    id: 'crypto',
    name: 'Crypto',
    description: 'BTC, ETH or USDT at the USD total shown.',
    icon: Bitcoin,
  },
  {
    id: 'cashapp',
    name: 'Cash App',
    description: 'Send via Cash App using the details below.',
    icon: CreditCard,
  },
]

const coins = ['BTC', 'ETH', 'USDT']
const DEMO_WALLET = 'DEMO-WALLET-ADDRESS-NOT-FOR-REAL-PAYMENTS'
const DEMO_CASHTAG = '$ViceCityVaultDemo'

export function Checkout() {
  const { detailedItems, subtotal, itemCount, clearCart } = useCart()
  const [payment, setPayment] = useState<PaymentMethod>('paypal')
  const [coin, setCoin] = useState(coins[0])
  const [copied, setCopied] = useState<string | null>(null)
  const [orderId, setOrderId] = useState<string | null>(null)
  const [placedTotal, setPlacedTotal] = useState(0)
  const [email, setEmail] = useState('')
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  })

  const shipping = shippingCost(subtotal)
  const tax = estimatedTax(subtotal)
  const total = orderTotal(subtotal)

  const copy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(label)
      window.setTimeout(() => setCopied(null), 2000)
    } catch {
      setCopied(null)
    }
  }

  const placeOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (detailedItems.length === 0) return
    setPlacedTotal(total)
    setOrderId(makeOrderId())
    clearCart()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /* CONFIRMATION */
  if (orderId) {
    return (
      <section className="container-x py-24">
        <div className="panel mx-auto max-w-2xl p-10 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10">
            <CheckCircle2 className="h-10 w-10 text-emerald-400" />
          </div>
          <p className="eyebrow mt-6">Order confirmed</p>
          <h1 className="heading-lg mt-3">See you in Vice City</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-400">
            Your demo order has been created. No payment was taken and no goods
            will be shipped — this is a storefront concept.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-left">
              <p className="font-display text-xs uppercase tracking-widest text-slate-500">
                Order number
              </p>
              <p className="font-display text-2xl font-bold text-vice-cyan">{orderId}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-left">
              <p className="font-display text-xs uppercase tracking-widest text-slate-500">
                Order total
              </p>
              <p className="font-display text-2xl font-bold text-white">
                {formatUSD(placedTotal)}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/marketplace" className="btn-primary">
              Back to marketplace
            </Link>
            <Link to="/install" className="btn-outline">
              Get install help
            </Link>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
            <Mail className="h-3.5 w-3.5" /> A confirmation would be sent to{' '}
            <span className="text-slate-300">{email || 'your email'}</span>
          </p>
        </div>
      </section>
    )
  }

  /* EMPTY CART */
  if (detailedItems.length === 0) {
    return (
      <section className="container-x py-24 text-center">
        <PackageCheck className="mx-auto h-14 w-14 text-slate-600" />
        <h1 className="heading-lg mt-6">Nothing to check out</h1>
        <p className="mt-4 text-sm text-slate-400">
          Add a console, bundle or game to your cart first.
        </p>
        <Link to="/marketplace" className="btn-primary mt-8">
          Browse the marketplace
        </Link>
      </section>
    )
  }

  return (
    <>
      <section className="border-b border-white/10 py-12">
        <div className="container-x">
          <p className="eyebrow">Almost there</p>
          <h1 className="heading-lg mt-3">Secure checkout</h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-2 text-vice-cyan">
              <CheckCircle2 className="h-4 w-4" /> 1. Cart
            </span>
            <span className="h-px w-8 bg-white/20" />
            <span className="flex items-center gap-2 text-white">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-vice-pink text-xs font-bold text-white">
                2
              </span>
              Shipping & payment
            </span>
            <span className="h-px w-8 bg-white/20" />
            <span className="flex items-center gap-2">3. Confirmation</span>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-12 lg:grid-cols-[1fr_400px]">
        <form onSubmit={placeOrder} className="space-y-8">
          {/* DELIVERY */}
          <div className="panel p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Truck className="h-6 w-6 text-vice-cyan" />
              <h2 className="heading-md">Shipping details</h2>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  required
                  className="field"
                  placeholder="Alex"
                  value={form.firstName}
                  onChange={(event) =>
                    setForm({ ...form, firstName: event.target.value })
                  }
                />
              </div>
              <div>
                <label className="label" htmlFor="lastName">Last name</label>
                <input
                  id="lastName"
                  required
                  className="field"
                  placeholder="Johnson"
                  value={form.lastName}
                  onChange={(event) =>
                    setForm({ ...form, lastName: event.target.value })
                  }
                />
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="field"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <p className="mt-2 text-xs text-slate-500">
                  Digital codes and order updates are delivered here.
                </p>
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="address">Street address</label>
                <input
                  id="address"
                  required
                  className="field"
                  placeholder="123 Ocean Drive"
                  value={form.address}
                  onChange={(event) =>
                    setForm({ ...form, address: event.target.value })
                  }
                />
              </div>
              <div>
                <label className="label" htmlFor="city">City</label>
                <input
                  id="city"
                  required
                  className="field"
                  placeholder="Miami"
                  value={form.city}
                  onChange={(event) =>
                    setForm({ ...form, city: event.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label" htmlFor="state">State</label>
                  <input
                    id="state"
                    required
                    className="field"
                    placeholder="FL"
                    value={form.state}
                    onChange={(event) =>
                      setForm({ ...form, state: event.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="label" htmlFor="zip">ZIP</label>
                  <input
                    id="zip"
                    required
                    className="field"
                    placeholder="33139"
                    value={form.zip}
                    onChange={(event) =>
                      setForm({ ...form, zip: event.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="label" htmlFor="phone">
                  Phone <span className="text-slate-500">(optional)</span>
                </label>
                <input
                  id="phone"
                  className="field"
                  placeholder="+1 305 555 0100"
                  value={form.phone}
                  onChange={(event) =>
                    setForm({ ...form, phone: event.target.value })
                  }
                />
              </div>
              <div>
                <label className="label" htmlFor="country">Country</label>
                <select id="country" className="field" defaultValue="US">
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                </select>
              </div>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="panel p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <CreditCard className="h-6 w-6 text-vice-pink" />
              <h2 className="heading-md">Payment method</h2>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {methods.map(({ id, name, description, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setPayment(id)}
                  aria-pressed={payment === id}
                  className={cn(
                    'rounded-xl border p-4 text-left transition-all',
                    payment === id
                      ? 'border-vice-pink bg-vice-pink/10 shadow-glow'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/30',
                  )}
                >
                  <Icon
                    className={cn(
                      'h-6 w-6',
                      payment === id ? 'text-vice-pink' : 'text-slate-400',
                    )}
                  />
                  <p className="mt-3 font-display text-lg font-bold uppercase text-white">
                    {name}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {description}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-ink-950/60 p-5">
              {payment === 'paypal' && (
                <div>
                  <p className="font-display text-lg font-bold uppercase text-white">
                    Pay with PayPal
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    In a live store you would be redirected to PayPal to approve
                    a payment of{' '}
                    <span className="text-white">{formatUSD(total)} USD</span>.
                    This demo does not connect to PayPal.
                  </p>
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-sky-400/20 bg-sky-400/5 px-4 py-3 text-sm text-sky-300">
                    <LockKeyhole className="h-4 w-4" /> No PayPal credentials are
                    collected on this site.
                  </div>
                </div>
              )}

              {payment === 'crypto' && (
                <div>
                  <p className="font-display text-lg font-bold uppercase text-white">
                    Pay with crypto
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Choose a coin. The USD total is fixed at{' '}
                    <span className="text-white">{formatUSD(total)}</span>; a live
                    store would show the converted amount at payment time.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {coins.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setCoin(item)}
                        className={cn(
                          'rounded-full border px-4 py-2 font-display text-sm font-bold',
                          coin === item
                            ? 'border-vice-sun bg-vice-sun text-ink-950'
                            : 'border-white/15 text-slate-300',
                        )}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/30 p-3">
                    <code className="truncate text-xs text-vice-cyan">
                      {DEMO_WALLET}
                    </code>
                    <button
                      type="button"
                      onClick={() => copy(`${coin}:${DEMO_WALLET}`, 'wallet')}
                      className="flex shrink-0 items-center gap-1.5 text-xs text-white hover:text-vice-pink"
                    >
                      {copied === 'wallet' ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      {copied === 'wallet' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-vice-sun">
                    Demo address only — do not send real funds.
                  </p>
                </div>
              )}

              {payment === 'cashapp' && (
                <div>
                  <p className="font-display text-lg font-bold uppercase text-white">
                    Pay with Cash App
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Send {formatUSD(total)} USD to the Cashtag below and include
                    your order number in the payment note.
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-3">
                    <code className="text-sm text-emerald-300">{DEMO_CASHTAG}</code>
                    <button
                      type="button"
                      onClick={() => copy(DEMO_CASHTAG, 'cashtag')}
                      className="flex items-center gap-1.5 text-xs text-white hover:text-vice-pink"
                    >
                      {copied === 'cashtag' ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      {copied === 'cashtag' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-vice-sun">
                    Demo Cashtag only — do not send real money.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-vice-cyan/20 bg-vice-cyan/5 p-4 text-xs leading-6 text-slate-400">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-vice-cyan" />
            <p>
              <span className="text-white">Demo checkout.</span> This site is a
              storefront concept. No payment is processed, no card or wallet
              credentials are requested, and no order is fulfilled. Connect a
              verified payment provider before accepting real payments.
            </p>
          </div>

          <button type="submit" className="btn-primary w-full !py-4 !text-xl">
            Place demo order · {formatUSD(total)}
          </button>
        </form>

        {/* ORDER SUMMARY */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="panel p-6">
            <h2 className="heading-md">Order summary</h2>
            <p className="mt-1 text-sm text-slate-500">
              {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
            </p>

            <ul className="mt-6 space-y-4 border-b border-white/10 pb-5">
              {detailedItems.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-3">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt=""
                      className="h-16 w-16 rounded-lg bg-ink-800 object-contain p-1"
                    />
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-vice-pink font-display text-xs font-bold text-white">
                      {quantity}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-base font-bold uppercase text-white">
                      {product.name}
                    </p>
                    <p className="text-xs text-slate-500">{product.platform}</p>
                  </div>
                  <p className="font-display text-base font-bold text-white">
                    {formatUSD(product.price * quantity)}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between text-slate-400">
                <dt>Subtotal</dt>
                <dd className="text-white">{formatUSD(subtotal)}</dd>
              </div>
              <div className="flex justify-between text-slate-400">
                <dt>Shipping</dt>
                <dd className={shipping === 0 ? 'text-emerald-400' : 'text-white'}>
                  {shipping === 0 ? 'Free' : formatUSD(shipping)}
                </dd>
              </div>
              <div className="flex justify-between text-slate-400">
                <dt>Estimated tax (8%)</dt>
                <dd className="text-white">{formatUSD(tax)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <dt className="font-display text-xl font-bold uppercase text-white">
                  Total
                </dt>
                <dd className="font-display text-3xl font-bold text-vice-cyan">
                  {formatUSD(total)}
                </dd>
              </div>
              <p className="text-right text-xs text-slate-500">USD · all taxes included</p>
            </dl>

            <div className="mt-6 space-y-2 border-t border-white/10 pt-5 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <LockKeyhole className="h-3.5 w-3.5 text-vice-cyan" /> Secure demo —
                no credentials collected
              </p>
              <p className="flex items-center gap-2">
                <Truck className="h-3.5 w-3.5 text-vice-cyan" /> Free shipping on
                orders over $500
              </p>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
