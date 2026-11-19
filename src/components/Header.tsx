import { Menu, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { cn } from '../lib/utils'

const links = [
  { to: '/', label: 'Home' },
  { to: '/marketplace', label: 'Marketplace' },
  { to: '/install', label: 'Install Help' },
  { to: '/support', label: 'Support' },
]

export function Header() {
  const { itemCount, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b transition-all duration-300',
        scrolled
          ? 'border-white/10 bg-ink-950/90 shadow-xl shadow-black/30 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-vice-gradient font-display text-xl font-black text-white shadow-glow">
            V
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-extrabold uppercase tracking-[0.12em] text-white sm:text-2xl">
              Vice City <span className="text-vice-pink">Vault</span>
            </span>
            <span className="hidden font-display text-[10px] uppercase tracking-[0.35em] text-slate-500 sm:block">
              GTA VI HQ
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 font-display text-base font-semibold uppercase tracking-wide transition-colors',
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-slate-400 hover:text-white',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/marketplace"
            className="btn-primary hidden !px-5 !py-2 !text-sm lg:inline-flex"
          >
            Shop consoles
          </Link>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-vice-pink hover:text-vice-pink"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-vice-pink px-1 font-display text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-ink-950/95 px-5 py-4 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'block border-b border-white/5 py-3 font-display text-lg font-semibold uppercase tracking-wide',
                  isActive ? 'text-vice-pink' : 'text-slate-300',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
