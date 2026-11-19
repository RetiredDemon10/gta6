import { Play } from 'lucide-react'
import { useState } from 'react'
import type { Trailer } from '../data/site'
import { cn } from '../lib/utils'

export function VideoCard({
  trailer,
  className,
}: {
  trailer: Trailer
  className?: string
}) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className={cn('group', className)}>
      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-ink-900">
        {isPlaying ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${trailer.videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={trailer.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${trailer.title}`}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={trailer.thumbnail}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-vice-pink group-hover:bg-vice-pink">
              <Play className="ml-1 h-6 w-6 fill-white text-white" />
            </span>
            <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 font-display text-xs tracking-wider text-white">
              {trailer.duration}
            </span>
          </button>
        )}
      </div>
      <div className="mt-4">
        <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
          {trailer.title}
        </h3>
        <p className="mt-1 text-sm text-slate-400">{trailer.subtitle}</p>
      </div>
    </div>
  )
}
