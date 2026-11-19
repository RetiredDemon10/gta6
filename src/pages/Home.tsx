import {
  ArrowRight,
  Bitcoin,
  Download,
  Gamepad2,
  Headphones,
  Play,
  ShieldCheck,
  Sparkles,
  Truck,
  Wallet,
  Zap,
} from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { ProductModal } from '../components/ProductModal'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { VideoCard } from '../components/VideoCard'
import { images, products, trailers, type Product } from '../data/site'

const stats = [
  { value: '160 GB', label: 'Install size' },
  { value: '4K / 120', label: 'Target performance' },
  { value: 'PS5 + Xbox', label: 'Launch platforms' },
  { value: '24 / 7', label: 'Support team' },
]

const highlights = [
  {
    icon: Gamepad2,
    title: 'Next-gen hardware',
    body: 'Pick the console that fits your play style, from 4K powerhouses to compact digital setups.',
  },
  {
    icon: Download,
    title: 'Guided installation',
    body: 'Plain-English steps for downloading, installing and launching GTA VI on your platform.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe checkout',
    body: 'Pay your way with PayPal, crypto or Cash App. All prices are clearly shown in USD.',
  },
  {
    icon: Headphones,
    title: 'Real human support',
    body: 'Stuck on a download or an order? Our team replies fast with fixes that actually work.',
  },
]

const tickerItems = [
  'GTA VI OUT NOW',
  'CONSOLES IN STOCK',
  'INSTALL HELP INCLUDED',
  'FREE SHIPPING OVER $500',
  'PAYPAL · CRYPTO · CASH APP',
  '24/7 CUSTOMER SUPPORT',
]

export function Home() {
  const [selected, setSelected] = useState<Product | null>(null)
  const featured = products.slice(0, 4)

  return (
    <>
      {/* HERO */}
      <section className="hero-noise relative flex min-h-[88vh] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />

        <div className="container-x relative z-10 py-28 sm:py-32">
          <HeroCopy>
            <div className="inline-flex items-center gap-2 rounded-full border border-vice-cyan/40 bg-vice-cyan/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-vice-cyan" />
              <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-vice-cyan">
                Available now · November 19, 2026
              </span>
            </div>

            <h1 className="heading-xl mt-7 max-w-4xl">
              Welcome back to{' '}
              <span className="text-gradient block">Vice City</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Jason and Lucia are back in Leonida. Get the hardware, the game
              and the help you need to jump straight into Grand Theft Auto VI.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/marketplace" className="btn-primary">
                <Gamepad2 className="h-5 w-5" /> Shop the marketplace
              </Link>
              <Link to="/install" className="btn-outline">
                <Download className="h-5 w-5" /> Installation help
              </Link>
              <a href="#trailers" className="btn-ghost">
                <Play className="h-4 w-4" /> Watch trailers
              </a>
            </div>

            <div className="mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-2 border-vice-pink/70 pl-4"
                >
                  <p className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </HeroCopy>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 md:flex">
          <span className="font-display text-[10px] uppercase tracking-[0.4em]">
            Scroll
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-vice-pink to-transparent" />
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-white/10 bg-ink-900/80 py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-slate-400"
            >
              <Sparkles className="h-3 w-3 text-vice-pink" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="container-x py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">The next chapter</p>
            <h2 className="heading-lg mt-3">
              Leonida is calling.{' '}
              <span className="text-vice-pink">Answer it.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              Sun-soaked beaches, neon nights and a story built around two
              unlikely partners. Vice City Vault brings the GTA VI experience
              together with the gear and guidance to make launch day effortless.
            </p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <Icon className="h-6 w-6 text-vice-cyan" />
                  <h3 className="mt-3 font-display text-lg font-bold uppercase text-white">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-400">{body}</p>
                </div>
              ))}
            </div>
            <Link
              to="/install"
              className="mt-8 inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-vice-cyan hover:gap-3 transition-all"
            >
              See how installation works <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-vice-gradient opacity-20 blur-3xl" />
              <img
                src={images.keyArt}
                alt="Grand Theft Auto VI key art"
                loading="lazy"
                className="relative w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-ink-900/95 p-4 shadow-xl backdrop-blur sm:block">
                <p className="font-display text-3xl font-extrabold text-vice-sun">
                  1st
                </p>
                <p className="font-display text-xs uppercase tracking-widest text-slate-400">
                  Most wanted game
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRAILERS */}
      <section id="trailers" className="container-x scroll-mt-24 py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Watch the world"
            title="Straight from Vice City"
            description="Official trailers hosted by Rockstar Games. Press play and take a look around Leonida."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {trailers.map((trailer, index) => (
            <Reveal key={trailer.id} delay={index * 0.1}>
              <VideoCard trailer={trailer} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Gear up"
              title="Featured in the vault"
              description="Consoles, bundles and collectibles ready to ship. Every price is in US dollars."
            />
          </Reveal>
          <Link to="/marketplace" className="btn-outline mb-1">
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.08}>
              <ProductCard product={product} onQuickView={setSelected} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* INSTALL CTA */}
      <section className="container-x py-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-8 sm:p-12">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25"
              style={{ backgroundImage: `url(${images.city})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-transparent" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="eyebrow">Installation assistance</p>
                <h2 className="heading-lg mt-3">
                  Download ready.{' '}
                  <span className="text-vice-cyan">Play in minutes.</span>
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Follow our step-by-step guides for PS5, Xbox Series X|S and
                  PC. We cover storage, downloads, account setup and the errors
                  that slow you down.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['PS5', 'Xbox Series X|S', 'PC'].map((platform) => (
                    <span key={platform} className="chip">
                      <Zap className="h-3 w-3 text-vice-sun" /> {platform}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link to="/install" className="btn-primary">
                  Open install guide <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/support" className="btn-outline">
                  <Headphones className="h-5 w-5" /> Ask a specialist
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PAYMENTS */}
      <section className="container-x py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Pay your way"
            title="Checkout without the hassle"
            description="Choose the payment method that works for you. Simple, transparent and always priced in USD."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Wallet,
              name: 'PayPal',
              body: 'Check out with your PayPal balance or linked account in a couple of clicks.',
              color: 'text-sky-400',
            },
            {
              icon: Bitcoin,
              name: 'Crypto',
              body: 'Pay with BTC, ETH or USDT. We show the USD total before you confirm.',
              color: 'text-vice-sun',
            },
            {
              icon: Truck,
              name: 'Cash App',
              body: 'Send your payment through Cash App and we will match it to your order.',
              color: 'text-emerald-400',
            },
          ].map(({ icon: Icon, name, body, color }, index) => (
            <Reveal key={name} delay={index * 0.1}>
              <div className="panel card-hover h-full p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
                  <Icon className={`h-7 w-7 ${color}`} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase text-white">
                  {name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SUPPORT BAND */}
      <section className="container-x pb-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-vice-gradient p-1">
            <div className="rounded-[22px] bg-ink-950 px-8 py-12 text-center sm:px-14">
              <ShieldCheck className="mx-auto h-10 w-10 text-vice-cyan" />
              <h2 className="heading-lg mt-5">Need a hand with something?</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Order questions, download errors, account issues — our support
                desk is here for all of it. Tell us what is going on and we will
                get you back in the game.
              </p>
              <Link to="/support" className="btn-primary mt-8">
                Contact support <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  )
}

/* Small local wrapper so the hero copy animates in on page load. */
function HeroCopy({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}
