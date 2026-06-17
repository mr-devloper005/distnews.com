'use client'

import Link from 'next/link'
import { ArrowRight, Globe2, RadioTower, ShieldCheck } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-[var(--slot4-dark-bg)] text-white">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.7fr_.7fr]">
          <div>
            <Link href="/" className="text-4xl font-black text-white sm:text-5xl">{SITE_CONFIG.name}</Link>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-3">
              {[[Globe2, 'Global reach'], [RadioTower, 'Publisher signals'], [ShieldCheck, 'Release QA']].map(([Icon, label]) => (
                <div key={String(label)} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs font-black uppercase tracking-[.12em] text-white/70">
                  <Icon className="mb-3 h-5 w-5 text-[var(--slot4-accent)]" /> {String(label)}
                </div>
              ))}
            </div>
            <form action="/signup" className="mt-8 flex max-w-xl overflow-hidden rounded-full border border-white/15 bg-white/5">
              <input name="email" type="email" placeholder="Email for distribution updates" className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-white/40" />
              <button className="bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em]">Subscribe</button>
            </form>
          </div>
          <div>
            <h3 className="border-b border-white/25 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Explore</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/media-distribution" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Campaigns<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/press-release" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Press releases<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/search" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Search<ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div>
            <h3 className="border-b border-white/25 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Platform</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/about" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">About</Link>
              <Link href="/contact" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Contact</Link>
              {session ? (
                <>
                  <Link href="/create" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Create campaign</Link>
                  <button onClick={logout} className="text-left text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Logout {session.name}</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Log in</Link>
                  <Link href="/signup" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-[10px] font-black uppercase tracking-[.18em] text-white/45">(c) {year} {SITE_CONFIG.name}. Media distribution, press release publishing, and campaign visibility.</div>
    </footer>
  )
}
