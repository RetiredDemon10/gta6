import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Download,
  Gamepad2,
  Lightbulb,
  Monitor,
  ShieldCheck,
  Signal,
  Wrench,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { images } from '../data/site'
import { installFaqs, platformGuides } from '../data/guides'
import { cn } from '../lib/utils'

const platformIcons = {
  playstation: Gamepad2,
  xbox: Gamepad2,
  pc: Monitor,
}

export function Install() {
  const [active, setActive] = useState(platformGuides[0].id)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const guide = platformGuides.find((item) => item.id === active) ?? platformGuides[0]
  const Icon = platformIcons[guide.icon]

  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-white/10 py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${images.launch})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/50" />
        <div className="container-x relative">
          <p className="eyebrow">Installation assistance</p>
          <h1 className="heading-lg mt-3">
            From download to{' '}
            <span className="text-gradient">downtown</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Follow a clear, platform-by-platform guide to get GTA VI installed
            and running. No jargon, no guesswork — and real help if you get
            stuck.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <span className="chip"><ShieldCheck className="h-3 w-3 text-vice-cyan" /> Legit copies only</span>
            <span className="chip"><Clock3 className="h-3 w-3 text-vice-sun" /> About 15–40 minutes</span>
            <span className="chip"><Wrench className="h-3 w-3 text-vice-pink" /> Troubleshooting included</span>
          </div>
        </div>
      </section>

      {/* GUIDE */}
      <section className="container-x py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Choose your platform"
            title="Pick where you play"
            description="Switch between guides to see the exact steps for your setup."
            align="center"
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {platformGuides.map((item) => {
            const ItemIcon = platformIcons[item.icon]
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={cn(
                  'flex items-center gap-2 rounded-full border px-5 py-3 font-display text-base font-bold uppercase tracking-wide transition-all',
                  active === item.id
                    ? 'border-vice-pink bg-vice-pink text-white shadow-glow'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/30',
                )}
              >
                <ItemIcon className="h-4 w-4" /> {item.name}
              </button>
            )
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[300px_1fr]">
          <Reveal>
            <div className="panel sticky top-28 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-vice-pink/15">
                <Icon className="h-7 w-7 text-vice-pink" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold uppercase text-white">
                {guide.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                A straightforward path from store page to Vice City.
              </p>
              <dl className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Time needed</dt>
                  <dd className="text-white">{guide.time}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Difficulty</dt>
                  <dd className="text-white">{guide.difficulty}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Steps</dt>
                  <dd className="text-white">{guide.steps.length}</dd>
                </div>
              </dl>
              <Link to="/support" className="btn-outline mt-6 w-full !text-base">
                Get live help
              </Link>
            </div>
          </Reveal>

          <div>
            <div key={guide.id} className="space-y-4">
                {guide.steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="panel flex gap-5 p-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vice-gradient font-display text-lg font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {step.body}
                      </p>
                      {step.tip && (
                        <p className="mt-3 flex items-start gap-2 rounded-lg border border-vice-cyan/20 bg-vice-cyan/5 px-3 py-2 text-xs leading-6 text-vice-cyan">
                          <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          {step.tip}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* TROUBLESHOOTING STRIP */}
      <section className="container-x py-10">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Signal, title: 'Slow download', body: 'Use a wired connection, pause other downloads and keep the console awake.' },
            { icon: AlertCircle, title: 'Error codes', body: 'Write down the exact code and send it to support — we will map it to a fix.' },
            { icon: Download, title: 'Not enough space', body: 'GTA VI needs about 160 GB. Move older games off your SSD before installing.' },
          ].map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <div className="panel card-hover h-full p-6">
                <Icon className="h-7 w-7 text-vice-sun" />
                <h3 className="mt-4 font-display text-xl font-bold uppercase text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Good to know"
            title="Install FAQs"
            description="Quick answers to the questions we hear most often."
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {installFaqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <div key={faq.question} className="panel overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-lg font-bold uppercase text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-vice-cyan transition-transform',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                {isOpen && (
                  <div>
                    <p className="border-t border-white/10 px-5 py-4 text-sm leading-7 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-8">
        <Reveal>
          <div className="panel flex flex-col items-center gap-6 p-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-vice-cyan" />
              <div>
                <h2 className="heading-md">Still stuck? We have your back.</h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400">
                  Send your platform, error message and a screenshot. A support
                  specialist will walk you through the fix.
                </p>
              </div>
            </div>
            <Link to="/support" className="btn-primary shrink-0">
              Contact support
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
