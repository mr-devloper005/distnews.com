import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="flex flex-col justify-center rounded-[2rem] bg-[var(--slot4-dark-bg)] p-8 text-white shadow-[0_24px_70px_rgba(16,24,39,.16)] sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-black leading-[0.96] tracking-[-0.035em] sm:text-7xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/75">{pagesContent.auth.login.description}</p>
          </div>
          <div className="flex flex-col justify-center rounded-[2rem] bg-white p-7 shadow-[0_16px_48px_rgba(16,24,39,.08)] sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Member access</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-black/10 pt-5 text-sm text-black/65">New here? <Link href="/signup" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
