import type { Member } from '@/data/members'

export default function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <article className="member-card">
      <div className="member-avatar-shell">
        <img src={member.image} alt={`${member.name} profile`} className="member-avatar" />
        <span className={`status-dot ${member.status}`} aria-label={member.status} />
      </div>
      <div className="member-card-info">
        <span className="member-number">0{index + 1}</span>
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </article>
  )
}
