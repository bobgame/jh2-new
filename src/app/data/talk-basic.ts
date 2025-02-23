import { RwIdEnum } from '../constants/enums/rw.enum'

export const basicLowTalks: BasicTalkItem[][] = [
  [
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 今天天气……' },
    { id: 2, rwId: 0, type: 'rw', text: '不错不错，回见' },
  ],
  [
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 今天天气……' },
    { id: 2, rwId: 0, type: 'rw', text: '不大好啊，回见' },
  ],
]

export const basicMidTalks: BasicTalkItem[][] = [
  [
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 今天天气……' },
    { id: 2, rwId: 0, type: 'rw', text: '不错啊，近来可好？' },
    { id: 3, rwId: 0, type: 'zj', text: '托福还好，你呢？' },
    { id: 4, rwId: 0, type: 'rw', text: '还好，回见' },
  ],
  [
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 今天天气……' },
    { id: 2, rwId: 0, type: 'rw', text: '不大好啊，天气冷了，何不去共饮两杯？' },
    { id: 3, rwId: 0, type: 'zj', text: '在下尚有事在身，改日再去如何？' },
    { id: 4, rwId: 0, type: 'rw', text: '如此我便先走一步了，回见' },
  ],
]
export const basicHighTalks: BasicTalkItem[][] = [
  [
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 今天天气……' },
    { id: 2, rwId: 0, type: 'rw', text: '不错啊，何不出城踏青一番，好不负了这大好风光啊' },
    { id: 3, rwId: 0, type: 'zj', text: '[rw]雅兴不浅啊，可惜在下尚有事在身，只好改日了' },
    { id: 4, rwId: 0, type: 'rw', text: '如此便再会了' },
  ],
  [
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 今天天气……' },
    { id: 2, rwId: 0, type: 'rw', text: '怎么一见面还谈天气啊，走，玩两把去？' },
    { id: 3, rwId: 0, type: 'zj', text: '可惜今天没空啊' },
    { id: 4, rwId: 0, type: 'rw', text: '无妨，今后还有机会，走了！' },
  ],
]
export const basicFullTalks: BasicTalkItem[][] = [
  [
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 今天天气……' },
    { id: 2, rwId: 0, type: 'rw', text: '不错啊，近来可好？' },
    { id: 3, rwId: 0, type: 'zj', text: '不大好' },
    { id: 4, rwId: 0, type: 'rw', text: '怎么？' },
    { id: 5, rwId: 0, type: 'zj', text: '本来是好的，见了你便有些不好了' },
    { id: 6, rwId: 0, type: 'rw', text: '哈哈……多日不见你还是这般风趣，有事先走一步了' },
    { id: 7, rwId: 0, type: 'zj', text: '回见' },
  ],
  [
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 今天天气……' },
    { id: 2, rwId: 0, type: 'rw', text: '不大好' },
    { id: 3, rwId: 0, type: 'zj', text: '为何不大好？' },
    { id: 4, rwId: 0, type: 'rw', text: '又看见你了，天气如何能好？' },
    { id: 5, rwId: 0, type: 'zj', text: '那倒也是，就像我的心情，本是好的，见了你，也有些不好了' },
    { id: 6, rwId: 0, type: 'rw', text: '哈哈……都不好，都不好，走了！' },
    { id: 7, rwId: 0, type: 'zj', text: '不送' },
  ],
]

export const basicFtTalks: BasicTalkItem[][] = [
  [
    { id: 1, rwId: 0, type: 'zj', text: '[rw]，可愿与在下一战？' },
    { id: 2, rwId: 0, type: 'rw', text: '请' },
  ],
  [{ id: 2, rwId: 0, type: 'rw', text: '得罪' }],
  [{ id: 1, rwId: 0, type: 'zj', text: '[rw], 多有得罪' }],
]

export interface BasicTalkItem {
  id: number
  type: 'rw' | 'zj'
  rwId: number | RwIdEnum
  text: string
  isActive?: boolean
  isShow?: boolean
  actionType?: 'go-to-id' | 'pop-choose' | 'give-jq'
  actionValue?: number
}
