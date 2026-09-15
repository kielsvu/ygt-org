import type { Member } from '@/data/members'
import { ArrowUpRight } from 'lucide-react'

export default function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <article className="member-card">
      <div className="member-card-top">
        <span className="member-card-index">0{index + 1}</span>
        <span className={`member-pill ${member.status}`}><i />{member.status}</span>
      </div>
      <div className="member-image-wrap">
        <img src={member.image} alt={`${member.name} profile`} className="member-image" />
      </div>
      <div className="member-card-body">
        <div>
          <p className="member-handle">{member.tag}</p>
          <h3>{member.name}</h3>
        </div>
        <ArrowUpRight size={17} strokeWidth={1.6} />
      </div>
      <div className="member-card-foot">
        <span>{member.role}</span>
        <span>YGT</span>
      </div>
    </article>
  )
}
