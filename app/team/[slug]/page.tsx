import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { team, getTeamMember } from '@/lib/team'
import { createPageMetadata, createPersonJsonLd, createWebPageJsonLd } from '@/lib/seo'
import TeamMemberView from './TeamMemberView'

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const member = getTeamMember(params.slug)
  if (!member) {
    return createPageMetadata({
      title: 'Leadership Profile',
      description: 'Leadership profile for Global Mercury Recovery & Water Security.',
      path: `/team/${params.slug}`,
    })
  }

  return createPageMetadata({
    title: member.title ? `${member.name} - ${member.title}` : member.name,
    description: member.shortBio,
    path: `/team/${member.slug}`,
    image: member.headshot,
  })
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = getTeamMember(params.slug)
  if (!member) notFound()

  const seo = {
    title: member.title ? `${member.name} - ${member.title}` : member.name,
    description: member.shortBio,
    path: `/team/${member.slug}`,
    image: member.headshot,
  }

  return (
    <>
      <JsonLd data={createWebPageJsonLd(seo)} />
      <JsonLd
        data={createPersonJsonLd({
          name: member.name,
          title: member.title,
          description: member.shortBio,
          path: `/team/${member.slug}`,
          image: member.headshot,
        })}
      />
      <TeamMemberView member={member} />
    </>
  )
}
