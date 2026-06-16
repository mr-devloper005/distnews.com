'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogOut, Menu, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { slot4BrandConfig } from '../theme/brand.config'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/92 text-[var(--slot4-page-text)] shadow-[0_10px_30px_rgba(16,24,39,.06)] backdrop-blur">
      <div className="mx-auto grid min-h-[78px] max-w-[1240px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)] lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link
            href="/"
            className="inline-flex min-w-0 items-center justify-start gap-3"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--editable-border)] bg-white shadow-sm">
              <img
                src="/favicon.png?v=20260413"
                alt={slot4BrandConfig.siteName}
                className="h-9 w-9 object-contain"
              />
            </span>

            <span className="truncate text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              {SITE_CONFIG.name}
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-end gap-4">
          {session ? (
            <>

              <span className="hidden items-center gap-2 rounded-full border border-black/10 bg-[var(--slot4-page-bg)] px-3 py-2 text-xs font-black sm:inline-flex">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--slot4-accent)] text-white"><UserRound className="h-4 w-4" /></span>
                <span className="max-w-24 truncate">{session.name}</span>
              </span>
              <button type="button" onClick={logout} className="hidden items-center gap-1 text-xs font-black uppercase tracking-[.12em] text-[var(--slot4-muted-text)] hover:text-[var(--slot4-accent)] sm:inline-flex"><LogOut className="h-4 w-4" /> Logout</button>
            </>
          ) : <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Log in</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-full bg-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-dark-bg)] sm:px-6">
            {session ? 'Launch' : 'Sign up'}
          </Link>
        </div>
      </div>

      <div className="bg-[var(--slot4-dark-bg)] text-white">
        <div className="mx-auto flex min-h-[50px] max-w-[1240px] items-center px-4 sm:px-6 lg:px-8">
          <nav className="mr-6 hidden items-center gap-5 text-xs font-black uppercase tracking-[.14em] lg:flex">
            <Link href="/media-distribution" className="hover:text-[var(--slot4-accent)]">Campaigns</Link>
            
            <Link href="/contact" className="hover:text-[var(--slot4-accent)]">Contact</Link>
          </nav>
          <form action="/search" className="ml-auto flex min-w-0 flex-1 items-center border-l border-white/20 lg:max-w-[270px] lg:flex-none">
            <Search className="ml-4 h-4 w-4 text-white/65" />
            <input name="q" type="search" placeholder="Search the archive" className="min-w-0 flex-1 bg-transparent px-3 py-4 text-xs font-bold outline-none placeholder:text-white/45" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/15 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-px bg-black/15">
            {[{ label: 'Home', href: '/' }, { label: 'Campaigns', href: '/media-distribution' }, { label: 'Search', href: '/search' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: `Signed in: ${session.name}`, href: '/create' }, { label: 'Create campaign', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="bg-white px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em]">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
