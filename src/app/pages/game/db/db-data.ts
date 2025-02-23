import { DbType, QaItem } from '../../../constants/interfaces/base.interface'
export const dbGuide: { [key in DbType]: string } = {
  tz: '三颗骰子，必须掷出两个相同的，剩下的一个为你的点数；掷不出来就算0。比谁的点数大；三个点数一样时比普通的大。111是豹子，最大，赌注乘10倍；其他的按照数字大小，赌注乘以骰子点数倍。',
  yp: '三颗骰子轮流掷，每掷一次加一两，谁先掷出三个相同的谁获胜拿所有的筹码。点[放弃]可以放弃。',
  dx: '押大小。庄家掷三颗骰子，加起来3-10小，11-18大。',
}

export const dbBaseQa: QaItem = {
  id: 1,
  question: '一次下注多少？',
  answers: [
    { id: 1, text: '一两', actionType: 1, actionValue: 1 },
    { id: 2, text: '五两', actionType: 1, actionValue: 5 },
    { id: 3, text: '十两', actionType: 1, actionValue: 10 },
    { id: 4, text: '二十两', actionType: 1, actionValue: 20 },
  ],
}

export const dbTzQa1: QaItem = {
  id: 2,
  question: '',
  answers: [
    { id: 1, text: '开始', actionType: 2, actionValue: 1 },
    { id: 2, text: '不玩了', actionType: 9, actionValue: 1 },
  ],
}

export const dbTzQa2: QaItem = {
  id: 3,
  question: '',
  answers: [
    { id: 1, text: '再来一局', actionType: 2, actionValue: 1 },
    { id: 2, text: '不玩了', actionType: 9, actionValue: 1 },
  ],
}

export const dbDxQa1: QaItem = {
  id: 4,
  question: '押大还是押小？',
  answers: [
    { id: 1, text: '大', actionType: 2, actionValue: 1 },
    { id: 2, text: '小', actionType: 2, actionValue: 2 },
    { id: 3, text: '不玩了', actionType: 9, actionValue: 1 },
  ],
}
