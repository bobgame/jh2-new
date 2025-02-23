import { ZbSubType } from './zb'

/**
 * 内功一 内功等级一
 * 内功二 内功等级二
 * 内功三 内功等级三
 * 轻功一 轻功等级一
 * 轻功二 轻功等级二
 * 轻功三 轻功等级三
 * 剑法一 剑法等级一
 * 剑法二 剑法等级二
 * 剑法三 剑法等级三
 * 棍法一 棍法等级一
 * 棍法二 棍法等级二
 * 棍法三 棍法等级三
 * 掌法一 掌法等级一
 * 掌法二 掌法等级二
 * 掌法三 掌法等级三
 * 暗器一 暗器等级一
 * 暗器二 暗器等级二
 * 暗器三 暗器等级三
 */
export const defaultWys: WyItem[] = [
  { id: 1, key: 'ng1', name: '内功一', desc: '内功等级一', avatar: '1', isActive: false },
  { id: 2, key: 'ng2', name: '内功二', desc: '内功等级二', avatar: '2', isActive: false },
  { id: 3, key: 'ng3', name: '内功三', desc: '内功等级三', avatar: '3', isActive: false },
  { id: 4, key: 'qg1', name: '轻功一', desc: '轻功等级一', avatar: '4', isActive: false },
  { id: 5, key: 'qg2', name: '轻功二', desc: '轻功等级二', avatar: '5', isActive: false },
  { id: 6, key: 'qg3', name: '轻功三', desc: '轻功等级三', avatar: '6', isActive: false },
  { id: 7, key: 'jf1', name: '剑法一', desc: '剑法等级一', avatar: '7', isActive: false },
  { id: 8, key: 'jf2', name: '剑法二', desc: '剑法等级二', avatar: '8', isActive: false },
  { id: 9, key: 'jf3', name: '剑法三', desc: '剑法等级三', avatar: '9', isActive: false },
  { id: 10, key: 'gf1', name: '棍法一', desc: '棍法等级一', avatar: '10', isActive: false },
  { id: 11, key: 'gf2', name: '棍法二', desc: '棍法等级二', avatar: '11', isActive: false },
  { id: 12, key: 'gf3', name: '棍法三', desc: '棍法等级三', avatar: '12', isActive: false },
  { id: 13, key: 'zf1', name: '掌法一', desc: '掌法等级一', avatar: '13', isActive: false },
  { id: 14, key: 'zf2', name: '掌法二', desc: '掌法等级二', avatar: '14', isActive: false },
  { id: 15, key: 'zf3', name: '掌法三', desc: '掌法等级三', avatar: '15', isActive: false },
  { id: 16, key: 'aq1', name: '暗器一', desc: '暗器等级一', avatar: '16', isActive: false },
  { id: 17, key: 'aq2', name: '暗器二', desc: '暗器等级二', avatar: '17', isActive: false },
  { id: 18, key: 'aq3', name: '暗器三', desc: '暗器等级三', avatar: '18', isActive: false },
]

// 'sword' | 'rod' | 'glove' | 'hidden' | 'armor' | 'horse'
export const ftWyItems: FtWyItem[] = [
  { id: 1, name: '剑', wqType: 'sword', avatar: '1' },
  { id: 2, name: '棍', wqType: 'rod', avatar: '2' },
  { id: 3, name: '掌', wqType: 'glove', avatar: '3' },
  { id: 4, name: '暗器', wqType: 'hidden', avatar: '4' },
]

export interface WyItem {
  id: number
  key: string
  name: string
  desc: string
  avatar: string
  isActive: boolean
}

export interface FtWyItem {
  id: number
  name: string
  wqType: ZbSubType
  avatar: string
}
