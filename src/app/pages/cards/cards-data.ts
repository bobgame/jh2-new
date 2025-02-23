import { CollectItemKey } from '../../constants/interfaces/base.interface'

export const cardsCategories: CardCategory[] = [
  { id: 1, key: 'zj', name: '主角', total: 30, got: 3, bgColor: '#bfa6bb' },
  { id: 2, key: 'rw', name: '人物', total: 30, got: 3, bgColor: '#aebb9d' },
  { id: 3, key: 'jn', name: '技能', total: 30, got: 3, bgColor: '#ce8f8a' },
  { id: 4, key: 'wy', name: '武艺', total: 30, got: 3, bgColor: '#d2b083' },
  { id: 5, key: 'wp', name: '物品', total: 30, got: 3, bgColor: '#a5a4b4' },
  { id: 6, key: 'zb', name: '装备', total: 30, got: 3, bgColor: '#d4cc8b' },
  { id: 7, key: 'mj', name: '秘籍', total: 30, got: 3, bgColor: '#8ca9cb' },
  { id: 8, key: 'ch', name: '称号', total: 30, got: 3, bgColor: '#d3d3d3' },
]

export interface CardCategory {
  id: number
  key: CollectItemKey
  name: string
  total: number
  got: number
  bgColor: string
}
export interface CardItem {
  id: number
  name: string
  desc: string
  categoryKey: string
  got: boolean
  pre: string
  img: string
  isBgWhite?: boolean
}
