import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CartProvider } from './context/CartContext'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Install } from './pages/Install'
import { Marketplace } from './pages/Marketplace'
import { NotFound } from './pages/NotFound'
import { Support } from './pages/Support'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/install" element={<Install />} />
            <Route path="/support" element={<Support />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
