import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CartDrawer } from './CartDrawer'
import { Footer } from './Footer'
import { Header } from './Header'
import { Toasts } from './Toasts'

const pageTitles: Record<string, string> = {
  '/': 'GTA VI Showcase & Console Marketplace',
  '/marketplace': 'Marketplace',
  '/install': 'Installation Help',
  '/support': 'Contact Support',
  '/checkout': 'Checkout',
}

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    const suffix = pageTitles[pathname] ?? 'Page Not Found'
    document.title = `${suffix} — Vice City Vault`
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toasts />
    </div>
  )
}
