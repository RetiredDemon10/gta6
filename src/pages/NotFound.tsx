import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-8xl font-black text-vice-pink">404</p>
      <h1 className="heading-lg mt-4">Wrong turn, rookie</h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
        That page is not in Vice City. Head back to the vault and try again.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  )
}
