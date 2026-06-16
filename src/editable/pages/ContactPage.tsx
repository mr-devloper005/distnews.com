'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Press release review', body: 'Share release drafts, campaign assets, source material, and publication questions.' },
  { icon: Megaphone, title: 'Distribution strategy', body: 'Discuss publisher targeting, syndication, media outreach, and visibility goals.' },
  { icon: Mail, title: 'Account support', body: 'Reach the team for login, submission, campaign status, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="bg-[var(--slot4-body-gradient)]">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.96] tracking-[-0.035em] sm:text-7xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl rounded-2xl border border-black/10 bg-white/80 p-5 text-base font-semibold leading-8 text-black/65 shadow-sm">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <aside className="overflow-hidden rounded-[1.75rem] bg-[var(--slot4-dark-bg)] text-white shadow-[0_20px_60px_rgba(16,24,39,.14)]">
            {desks.map((desk, index) => (
              <div key={desk.title} className="border-b border-white/25 p-7 last:border-b-0 sm:p-9">
                <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-white/45">0{index + 1}</span></div>
                <h2 className="mt-6 text-3xl font-black">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/65">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_16px_48px_rgba(16,24,39,.08)] sm:p-10 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Send a message</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
