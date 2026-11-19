import clsx, { type ClassValue } from 'clsx'

export const cn = (...inputs: ClassValue[]) => clsx(inputs)

export const scrollToTop = () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
