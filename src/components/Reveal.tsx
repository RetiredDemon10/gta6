import type { ReactNode } from 'react'

/** Lightweight layout wrapper used to stagger section content. */
export function Reveal({
  children,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return <div className={className}>{children}</div>
}
