import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Youtube,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const socials = [
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/rockstargames/' },
  { label: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@RockstarGames' },
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/RockstarGames/' },
]

export function Footer() {
  const { notify } = useCart()
  const [email, setEmail] = useState('')

  return (
    <footer className="mt-24 border-t border-white/10 bg-ink-950/80">
      <div className="container-x grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-vice-gradient font-display text-xl font-black text-white">
              V
            </span>
            <span className="font-display text-xl font-extrabold uppercase tracking-wider text-white">
              Vice City Vault
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Your independent hub for GTA VI news, next-gen consoles, install
            help and friendly support.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-vice-pink hover:text-vice-pink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><Link className="hover:text-vice-cyan" to="/">Home</Link></li>
            <li><Link className="hover:text-vice-cyan" to="/marketplace">Marketplace</Link></li>
            <li><Link className="hover:text-vice-cyan" to="/install">Installation Guide</Link></li>
            <li><Link className="hover:text-vice-cyan" to="/support">Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-vice-pink" />
              support@vcvault.example
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-vice-pink" />
              Live chat — 9am to 11pm ET
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-vice-pink" />
              Miami, Florida (remote team)
            </li>
          </ul>
          <Link
            to="/support"
            className="mt-5 inline-flex font-display text-sm font-bold uppercase tracking-wider text-vice-cyan hover:underline"
          >
            Open a support ticket →
          </Link>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
            Vice City Wire
          </h3>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Get launch updates, restock alerts and install tips. No spam.
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(event) => {
              event.preventDefault()
              if (!email) return
              notify('You are on the list! Watch your inbox.')
              setEmail('')
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@email.com"
              aria-label="Email address"
              className="field !py-2.5"
            />
            <button
              type="submit"
              className="btn-primary !px-4 !py-2.5 !text-sm"
              aria-label="Subscribe"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-5 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vice City Vault. Demo storefront concept.</p>
          <p className="max-w-2xl sm:text-right">
            Independent fan showcase. GTA VI, Rockstar Games and related marks
            are trademarks of their respective owners. No real payments are
            processed on this site.
          </p>
        </div>
      </div>
    </footer>
  )
}
