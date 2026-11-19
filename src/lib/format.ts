export const formatUSD = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value)

export const SHIPPING_FLAT = 12.99
export const FREE_SHIPPING_THRESHOLD = 500
export const TAX_RATE = 0.08

export const shippingCost = (subtotal: number) =>
  subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT

export const estimatedTax = (subtotal: number) => subtotal * TAX_RATE

export const orderTotal = (subtotal: number) =>
  subtotal + shippingCost(subtotal) + estimatedTax(subtotal)

export const makeOrderId = () =>
  `VCV-${Math.floor(100000 + Math.random() * 900000)}`
