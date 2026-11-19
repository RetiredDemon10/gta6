import {
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Ticket,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { images } from '../data/site'
import { supportFaqs } from '../data/guides'
import { makeOrderId } from '../lib/format'
import { cn } from '../lib/utils'

const topics = [
  'Order or payment question',
  'Installation help',
  'Digital code not received',
  'Shipping or delivery',
  'Refund or return',
  'Something else',
]

const channels = [
  {
    icon: Mail,
    title: 'Email us',
    detail: 'support@vcvault.example',
    note: 'Reply within 2–4 hours',
  },
  {
    icon: MessageCircle,
    title: 'Live chat',
    detail: '9am – 11pm ET, every day',
    note: 'Typical wait: under 5 minutes',
  },
  {
    icon: Phone,
    title: 'Callback',
    detail: '+1 (305) 555-0147',
    note: 'Mon – Sat, 10am – 8pm ET',
  },
]

export function Support() {
  const [sent, setSent] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: topics[0],
    orderId: '',
    message: '',
  })

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(makeOrderId().replace('VCV', 'TKT'))
    setForm({ name: '', email: '', topic: topics[0], orderId: '', message: '' })
  }

  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-white/10 py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${images.social})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/40" />
        <div className="container-x relative">
          <p className="eyebrow">We are here to help</p>
          <h1 className="heading-lg mt-3">
            Talk to a <span className="text-gradient">real person</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Tell us what you need and our support team will get back to you
            quickly. Orders, downloads, payments — nothing is too small.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* FORM */}
          <Reveal>
            <div className="panel p-7 sm:p-9">
              <div>
                {sent ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10">
                      <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                    </div>
                    <h2 className="heading-md mt-6">Message received</h2>
                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                      Thanks for reaching out. A support specialist will reply
                      to your email shortly. Keep your ticket number handy.
                    </p>
                    <div className="mt-6 rounded-xl border border-vice-cyan/30 bg-vice-cyan/5 px-6 py-4">
                      <p className="font-display text-xs uppercase tracking-[0.25em] text-slate-400">
                        Your ticket
                      </p>
                      <p className="font-display text-3xl font-bold text-vice-cyan">
                        {sent}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSent(null)}
                      className="btn-outline mt-7"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit}>
                    <p className="eyebrow">Support ticket</p>
                    <h2 className="heading-md mt-2">Send us a message</h2>
                    <p className="mt-2 text-sm text-slate-400">
                      The more detail you share, the faster we can help.
                    </p>

                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="label" htmlFor="name">Your name</label>
                        <input
                          id="name"
                          required
                          value={form.name}
                          onChange={(event) =>
                            setForm({ ...form, name: event.target.value })
                          }
                          placeholder="Alex Johnson"
                          className="field"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="email">Email address</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(event) =>
                            setForm({ ...form, email: event.target.value })
                          }
                          placeholder="you@email.com"
                          className="field"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="topic">What is this about?</label>
                        <select
                          id="topic"
                          value={form.topic}
                          onChange={(event) =>
                            setForm({ ...form, topic: event.target.value })
                          }
                          className="field"
                        >
                          {topics.map((topic) => (
                            <option key={topic}>{topic}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="label" htmlFor="orderId">
                          Order number <span className="text-slate-500">(optional)</span>
                        </label>
                        <input
                          id="orderId"
                          value={form.orderId}
                          onChange={(event) =>
                            setForm({ ...form, orderId: event.target.value })
                          }
                          placeholder="VCV-123456"
                          className="field"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="label" htmlFor="message">How can we help?</label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={(event) =>
                          setForm({ ...form, message: event.target.value })
                        }
                        placeholder="Tell us what happened, including any error messages..."
                        className="field resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                      <Send className="h-4 w-4" /> Send message
                    </button>
                    <p className="mt-4 text-xs leading-5 text-slate-500">
                      Demo form — nothing is transmitted or stored. For a real
                      store, connect this form to your help desk or email API.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Reveal>

          {/* CHANNELS */}
          <div className="space-y-5">
            <Reveal delay={0.08}>
              <div className="panel p-6">
                <h2 className="font-display text-2xl font-bold uppercase text-white">
                  Other ways to reach us
                </h2>
                <div className="mt-5 space-y-4">
                  {channels.map(({ icon: Icon, title, detail, note }) => (
                    <div
                      key={title}
                      className="flex gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                        <Icon className="h-5 w-5 text-vice-pink" />
                      </span>
                      <div>
                        <p className="font-display text-base font-bold uppercase text-white">
                          {title}
                        </p>
                        <p className="text-sm text-slate-300">{detail}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6">
                <div className="absolute inset-0 bg-vice-gradient opacity-10" />
                <div className="relative">
                  <Ticket className="h-8 w-8 text-vice-cyan" />
                  <h3 className="mt-4 font-display text-xl font-bold uppercase text-white">
                    Check before you write
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Many answers are instant in our FAQ section below — including
                    payment methods, shipping times and refunds.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <Clock3 className="h-6 w-6 shrink-0 text-vice-sun" />
                <p className="text-sm leading-6 text-slate-400">
                  Average first reply time:{' '}
                  <span className="text-white">under 3 hours</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Instant answers"
            title="Frequently asked questions"
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {supportFaqs.map((faq, index) => {
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
    </>
  )
}
