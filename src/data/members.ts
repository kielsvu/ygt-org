export type Member = {
  name: string
  role: string
  status: 'active' | 'away'
  tag: string
  image: string
}

export const members: Member[] = [
  { name: 'ykiel', role: 'Founder', status: 'active', tag: '@ykiel', image: '/assets/members/ykiel.png' },
  { name: 'yjhn', role: 'Developer', status: 'active', tag: '@yjhn', image: '/assets/members/yjhn.png' },
  { name: 'ysam', role: 'Member', status: 'away', tag: '@ysam', image: '/assets/members/ysam.png' },
  { name: 'yjake', role: 'Developer', status: 'active', tag: '@yjake', image: '/assets/members/yjake.png' },
]
