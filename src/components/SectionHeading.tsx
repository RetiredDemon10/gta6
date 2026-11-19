import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="heading-lg">{title}</h2>
      {description && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          'mt-6 h-1 w-24 rounded-full bg-vice-gradient',
          align === 'center' && 'mx-auto',
        )}
      />
    </div>
  )
}
