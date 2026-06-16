import Link from 'next/link'
import { ArrowRight, BadgeCheck, CheckCircle2, Globe2, MailCheck, Search, ShieldCheck, UsersRound } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditableMetrics, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function darkCardClass(extra = '') {
  return `group overflow-hidden rounded-[10px] bg-[#161a20] text-white shadow-[0_18px_52px_rgba(0,0,0,.22)] transition duration-300 hover:-translate-y-1 ${extra}`
}

function SectionIntro({ title, body, href, label }: { title: string; body: string; href: string; label: string }) {
  return (
    <div className="flex min-h-[300px] flex-col rounded-[10px] bg-[#161a20] p-6 text-white">
      <h2 className="text-3xl font-black tracking-[-.03em] sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-sm text-base leading-8 text-white/78">{body}</p>
      <Link href={href} className="mt-auto inline-flex items-center gap-3 text-sm font-black text-[var(--slot4-accent)]">
        {label}
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2c3344] text-white"><ArrowRight className="h-5 w-5" /></span>
      </Link>
    </div>
  )
}

function ReferencePostCard({ post, href, index, large = false }: { post: SitePost; href: string; index: number; large?: boolean }) {
  const metrics = getEditableMetrics(post, index)
  return (
    <Link href={href} className={darkCardClass()}>
      <div className={`relative overflow-hidden bg-[#d6d8dd] ${large ? 'aspect-[16/8]' : 'aspect-[16/9]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <p className="text-[10px] font-black uppercase tracking-[.18em] text-white/70">{getEditableCategory(post)}</p>
        <h3 className="mt-3 line-clamp-3 text-2xl font-black leading-[1.05] tracking-[-.035em]">{post.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/72">{getEditableExcerpt(post, 130)}</p>
        <div className="mt-8 border-t border-white/18 pt-4">
          <div className="flex items-center justify-between gap-3 text-[11px] font-black uppercase tracking-[.08em] text-white/75">
            <span>{metrics.reach}</span>
            <span>{metrics.engagement}</span>
            <span>Shares {420 + index * 37}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const side = posts.slice(1, 3)
  const heroTitle = pagesContent.home.hero.title.join(' ')

  return (
    <section className="bg-[#30303d] text-white">
      <div className={`${dc.shell.section} py-12 sm:py-16 lg:py-20`}>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="editable-reveal">
            <p className="text-[11px] font-black uppercase tracking-[.22em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
            <h1 className="mt-6 max-w-xl text-5xl font-black leading-[1.03] tracking-[-.035em] sm:text-6xl lg:text-[4.65rem]">{heroTitle}</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/76">{pagesContent.home.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={pagesContent.home.hero.primaryCta.href} className="rounded-md bg-[var(--slot4-accent)] px-7 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-[#161a20]">{pagesContent.home.hero.primaryCta.label}</Link>
              <Link href={pagesContent.home.hero.secondaryCta.href} className="rounded-md border border-white/20 px-7 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-[#161a20]">{pagesContent.home.hero.secondaryCta.label}</Link>
            </div>
          </div>

          {lead ? (
            <div className="editable-reveal editable-reveal-delay grid gap-6 sm:grid-cols-2">
              {[lead, ...side].slice(0, 2).map((post, index) => (
                <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className={darkCardClass('min-h-[520px]')}>
                  <div className="relative h-[285px] overflow-hidden bg-[#d6d8dd]">
                    <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex min-h-[235px] flex-col p-6">
                    <p className="text-[11px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">{index === 0 ? 'Templates' : 'Elements'}</p>
                    <h2 className="mt-3 text-3xl font-black tracking-[-.035em]">{index === 0 ? 'Campaign Templates' : 'Media Elements'}</h2>
                    <p className="mt-3 text-base leading-8 text-white/76">{getEditableExcerpt(post, 105)}</p>
                    <span className="mt-auto inline-flex items-center gap-3 text-sm font-black text-[var(--slot4-accent)]">
                      Go to {index === 0 ? 'Templates' : 'Elements'}
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2c3344] text-white"><ArrowRight className="h-5 w-5" /></span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(2, 5).length ? posts.slice(2, 5) : posts.slice(0, 3)
  if (!railPosts.length) return null
  return (
    <section className="bg-[#30303d] text-white">
      <div className={`${dc.shell.section} py-10`}>
        <div className="grid gap-6 lg:grid-cols-[.85fr_1fr_1fr_1fr]">
          <SectionIntro
            title="Media Tools"
            body="Empower every announcement with campaign-ready publishing tools, measurable reach, and premium distribution workflows."
            href="/create"
            label="Go to Tools"
          />
          {railPosts.map((post, index) => (
            <ReferencePostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[5] || posts[0]
  const gridPosts = posts.slice(6, 9).length ? posts.slice(6, 9) : posts.slice(1, 4)
  if (!feature) return null
  return (
    <section className="bg-[#30303d] text-white">
      <div className={`${dc.shell.section} py-10`}>
        <div className="grid gap-6 rounded-[10px] bg-[#161a20] p-8 sm:p-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[.2em] text-white/80">Media Distribution Platform</p>
            <h2 className="mt-8 max-w-xl text-5xl font-black leading-[1.04] tracking-[-.04em]">Create a Modern PR Campaign with Distributed Reach</h2>
            <Link href="/about" className="mt-8 inline-flex rounded-md bg-[var(--slot4-accent)] px-7 py-3.5 text-sm font-black text-white">About Us</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ['UI/UX', 'Elevate your release experience with structured campaign pages.'],
              ['Design Inspiration', 'Use media-ready layouts to help publishers understand your story.'],
              ['Resource Library', 'Get release assets and graphics into a single campaign flow.'],
              ['Guides to Using Campaigns', 'Choose the right format for announcements and outreach.'],
            ].map(([title, body]) => (
              <div key={title} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 rounded-full bg-[#2c3344] p-1 text-white" />
                <p className="text-2xl font-black leading-tight text-white">{title}. <span className="text-white/48">{body}</span></p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[.85fr_1fr_1fr_1fr]">
          <SectionIntro
            title="Branding"
            body="Strengthen your brand story with professional newsroom presentation, distribution context, and campaign metrics."
            href="/media-distribution"
            label="Go to Branding"
          />
          {[feature, ...gridPosts].slice(0, 3).map((post, index) => (
            <ReferencePostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts
  const cards = source.slice(0, 3)
  const lead = source[3] || posts[0]
  if (!cards.length) return null
  return (
    <section className="bg-[#30303d] text-white">
      <div className={`${dc.shell.section} py-10`}>
        <div className="grid gap-6 rounded-[10px] bg-[#161a20] p-8 sm:p-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <MailCheck className="h-11 w-11 text-[var(--slot4-accent)]" />
            <h2 className="mt-8 max-w-md text-5xl font-black leading-[1.04] tracking-[-.04em]">Subscribe to our Media Briefing</h2>
            <form action="/signup" className="mt-8 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <input name="name" placeholder="Enter your name" className="rounded-none bg-[#6f7980] px-4 py-4 text-sm font-bold text-white placeholder:text-white" />
              <input name="email" placeholder="Enter your email" className="rounded-none bg-[#6f7980] px-4 py-4 text-sm font-bold text-white placeholder:text-white" />
              <button className="rounded-md bg-[var(--slot4-accent)] px-7 py-4 text-sm font-black text-white">Subscribe</button>
            </form>
            <label className="mt-4 flex max-w-2xl gap-3 text-xs font-bold leading-6 text-white/78">
              <input type="checkbox" className="mt-1 h-4 w-4 shrink-0" />
              By checking this box, you confirm that you agree to receive media distribution updates and campaign guidance.
            </label>
          </div>
          <div className="grid content-center gap-7">
            {[
              ['Exclusive news', 'Stay informed with the latest in media distribution and campaign trends.'],
              ['Publisher insights', 'Discover ways to improve brand visibility and release performance.'],
              ['Useful tips', 'Boost PR results with practical publishing and outreach advice.'],
            ].map(([title, body]) => (
              <div key={title} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-7 w-7 shrink-0 rounded-full bg-white p-1 text-[#161a20]" />
                <p className="text-2xl font-black leading-tight">{title}. <span className="text-white/48">{body}</span></p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[.85fr_1fr_1fr_1fr]">
          <SectionIntro
            title="Inspiration"
            body="Explore campaign ideas, distribution examples, and PR-ready release formats for fresh visibility."
            href="/search"
            label="Go to Inspiration"
          />
          {cards.map((post, index) => (
            <ReferencePostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 6} />
          ))}
        </div>

        {lead ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-[.7fr_1.45fr]">
            <Link href="/contact" className="group relative min-h-[330px] overflow-hidden rounded-[10px] bg-[#161a20] text-white">
              <img src={getEditablePostImage(lead)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <h3 className="text-3xl font-black tracking-[-.03em]">Follow Us on Media Channels</h3>
              </div>
            </Link>
            <Link href={postHref(primaryTask, lead, primaryRoute)} className="group relative min-h-[330px] overflow-hidden rounded-[10px] bg-[#161a20] text-white">
              <img src={getEditablePostImage(lead)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative z-10 max-w-2xl p-10">
                <p className="text-sm font-black">Media Distribution Platform</p>
                <h3 className="mt-4 text-5xl font-black leading-[1.04] tracking-[-.04em]">Create a Modern PR Campaign with Distributed Reach</h3>
                <span className="mt-8 inline-flex items-center gap-3 text-sm font-black">Buy Now <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2c3344]"><ArrowRight className="h-5 w-5" /></span></span>
              </div>
            </Link>
          </div>
        ) : null}

        <form action="/search" className="mt-10 grid rounded-[10px] bg-[#161a20] p-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h3 className="text-3xl font-black tracking-[-.03em]">Search the media archive</h3>
            <p className="mt-2 text-sm text-white/60">Explore every {taskLabel(primaryTask).toLowerCase()} campaign published by {SITE_CONFIG.name}.</p>
          </div>
          <label className="mt-5 flex bg-[#252a35] sm:mt-0 sm:min-w-[390px]">
            <Search className="ml-4 mt-4 h-4 w-4 text-white/70" />
            <input name="q" placeholder="Search campaigns" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-white/50" />
            <button className="rounded-md bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em] text-white">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[#171a20] text-white">
      <div className={`${dc.shell.section} grid gap-8 py-16 lg:grid-cols-[1fr_1fr_1fr_1fr]`}>
        {[
          [Globe2, 'Global reach', 'Campaigns built for wider publisher discovery.'],
          [UsersRound, 'Journalist networks', 'Help media teams understand your announcement quickly.'],
          [ShieldCheck, 'Release QA', 'Clear labels, readable content, and premium presentation.'],
          [BadgeCheck, 'Visibility metrics', 'Surface reach, status, and engagement signals.'],
        ].map(([Icon, title, body]) => (
          <div key={String(title)} className="rounded-[10px] bg-white/5 p-6 ring-1 ring-white/10">
            <Icon className="h-6 w-6 text-[var(--slot4-accent)]" />
            <h3 className="mt-5 text-2xl font-black">{String(title)}</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">{String(body)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
