export type Member = {
  name: string
  role: string
  status: 'active' | 'away'
  tag: string
  note: string
  image: string
}

export const members: Member[] = [
  { name: 'ykiel', role: 'Founder', status: 'active', tag: '@ykiel', note: 'Coordinates the group and keeps things moving.', image: '/assets/members/ykiel.png' },
  { name: 'yjhn', role: 'Developer', status: 'active', tag: '@yjhn', note: 'Builds tools, interfaces, and internal systems.', image: '/assets/members/yjhn.png' },
  { name: 'ysam', role: 'Member', status: 'away', tag: '@ysam', note: 'Community member and contributor.', image: '/assets/members/ysam.png' },
  { name: 'yjake', role: 'Developer', status: 'active', tag: '@yjake', note: 'Works on features and shared organization tools.', image: '/assets/members/yjake.png' },
]
