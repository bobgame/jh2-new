import { BasicTalkItem } from './talk-basic'

export const qtBasicTalks: BasicTalkItem[][] = [
  [
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 行行好，给我点钱吧' },
    { id: 2, rwId: 0, type: 'rw', text: '去去去，我跟你又不熟。' },
  ],
  [
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 行行好，给我点钱吧' },
    { id: 2, rwId: 0, type: 'rw', text: '可惜我身上没带钱' },
    { id: 3, rwId: 0, type: 'zj', text: '……' },
  ],
]

export const qtLowTalks: BasicTalkItem[][] = [
  [
    // 叶开好像没聊过天，给了钱 金钱加5两 然后显示感激不尽
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 行行好，给我点钱吧' },
    { id: 2, rwId: 0, type: 'rw', text: '来，给你', actionType: 'give-jq', actionValue: 5 },
    { id: 3, rwId: 0, type: 'zj', text: '感激不尽' },
  ],
]
export const qtMidTalks: BasicTalkItem[][] = [
  [
    // 高亲密度 金钱加20两 然后显示感激不尽
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 行行好，给我点钱吧' },
    { id: 2, rwId: 0, type: 'rw', text: '有何贵干？' },
    { id: 3, rwId: 0, type: 'zj', text: '我没钱吃饭了' },
    { id: 4, rwId: 0, type: 'rw', text: '这些钱拿去用吧', actionType: 'give-jq', actionValue: 20 },
    { id: 5, rwId: 0, type: 'zj', text: '感激不尽' },
  ],
]
export const qtHighTalks: BasicTalkItem[][] = [
  [
    // 高亲密度 金钱加50两 然后显示感激不尽
    { id: 1, rwId: 0, type: 'zj', text: '[rw], 行行好，给我点钱吧' },
    { id: 2, rwId: 0, type: 'rw', text: '你怎么沦落如此地步？快把这些银子拿去用吧', actionType: 'give-jq', actionValue: 50 },
    { id: 3, rwId: 0, type: 'zj', text: '感激不尽' },
  ],
]
