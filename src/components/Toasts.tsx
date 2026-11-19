import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

const icons = {
  success: CheckCircle2,
  info: Info,
  error: AlertCircle,
}

const tones = {
  success: 'border-emerald-400/40 text-emerald-300',
  info: 'border-vice-cyan/40 text-vice-cyan',
  error: 'border-vice-pink/50 text-vice-pink',
}

export function Toasts() {
  const { toasts, dismissToast } = useCart()

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[60] flex w-[calc(100%-2.5rem)] max-w-sm flex-col gap-3">
      {toasts.map((toast) => {
        const Icon = icons[toast.tone]
        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-3 rounded-xl border bg-ink-900/95 px-4 py-3 shadow-2xl backdrop-blur ${tones[toast.tone]}`}
          >
            <Icon className="h-5 w-5 shrink-0" />
            <p className="flex-1 text-sm text-white">{toast.message}</p>
            <button
              type="button"
              onClick={() => dismissToast(toast.id)}
              aria-label="Dismiss notification"
              className="text-slate-500 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
