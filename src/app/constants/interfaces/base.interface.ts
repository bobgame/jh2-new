import { RwItem } from '../../data/rw'
import { RwIdEnum } from '../enums/rw.enum'

export interface QaItem {
  id: number
  question: string
  answers: AnswerItem[]
}

export interface AnswerItem {
  id: number
  text: string
  actionType: number
  actionValue: number
  toId?: number
}

export interface JhTime {
  mm: number
  dd: number
  hh: number
}

export interface FightItem {
  avatar: string
  type: 'card' | 'special'
  sex: number
  choose: number[]
  cards: number[]
  mjs: number[]
  tl: number
  tlM: number
  wg: number
  sw: number
  ftNum: number
  useMj: {
    id: number
    name: string
    count: number
    special: FightMjSpecial
  }
}

export interface FightMjSpecial {
  to: 'zj' | 'ds'
  atk0: boolean
  spAtk0: boolean
  atkHalf: boolean
  atkAddHalf: boolean
  atkDouble: boolean
  atkSame: boolean
  max3: boolean
  lessCard: boolean
}

// = 'normal' | 'attack' | 'injured' | 'special'
export enum FightStatusEnum {
  Normal,
  Attack,
  Injured,
  Special,
}

export interface FightStatus {
  npc: FightStatusEnum
  hero: FightStatusEnum
  isWin: boolean
}

export interface FightTalkData {
  show: boolean
  isEnd: boolean
  isWin: boolean
}

export interface CityMove {
  cities: number[]
  cost: number
}

export type TalkType = 'bc' | 'qt'

export interface TalkData {
  show: boolean
  talkType: TalkType
  npc: RwItem
}

export interface NoticeData {
  show: boolean
  content: string
}

export type ItemDataType = 'hero' | 'sale' | 'buy'

export interface ItemData {
  type: ItemDataType
}

export interface DbGlobalData {
  type: DbType
  rwId: RwIdEnum
}
export type DbType = 'tz' | 'yp' | 'dx'
export type DbStatus = 'win' | 'lose' | 'draw' | 'special' | 'exit'

/** 一年 一月 十天 一天 */
export type XlType = '1n' | '1y' | '10t' | '1t'

export interface SaveItem {
  active: boolean
  id: number
  name: string
  avatar: string
  time: JhTime
  pos: string
}

export type CollectItemKey = 'zj' | 'rw' | 'jn' | 'wy' | 'wp' | 'zb' | 'mj' | 'ch'

export interface CollectItem {
  key: CollectItemKey
  cards: CollectItemCard[]
}

export interface CollectItemCard {
  id: number
  count: number
}
