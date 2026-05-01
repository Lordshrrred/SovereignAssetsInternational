import { notFound } from 'next/navigation'
import { team, getTeamMember } from '@/lib/team'
import TeamMemberView from './TeamMemberView'

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }))
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = getTeamMember(params.slug)
  if (!member) notFound()
  return <TeamMemberView member={member} />
}
