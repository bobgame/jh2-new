import { FightCardEnum } from '../../../constants/enums/base.enum'
import { DbStatus } from '../../../constants/interfaces/base.interface'
import { calcCardType, getOnePairsNumbers } from '../../fight/fight-tool'

// 三颗骰子，必须掷出两个相同的，剩下的一个为你的点数；掷不出来就算最小。比谁的点数大；三个点数一样时比普通的大。111是豹子，最大，赌注乘10倍；其他的按照数字大小，赌注乘以骰子点数倍。
interface TzResult {
  status: DbStatus
  rate: number
}
export const calcTZResult = (npcArr: number[], heroArr: number[]): TzResult => {
  const result: TzResult = {
    status: 'draw',
    rate: 1,
  }
  const npcCards = npcArr.sort((a, b) => a - b)
  const heroCards = heroArr.sort((a, b) => a - b)
  let npcCardType = calcCardType(npcCards)
  npcCardType = npcCardType === FightCardEnum.Straight ? FightCardEnum.Single : npcCardType
  let heroCardType = calcCardType(heroCards)
  heroCardType = heroCardType === FightCardEnum.Straight ? FightCardEnum.Single : heroCardType
  if (heroCardType > npcCardType) {
    result.status = 'win'
    result.rate = getSpRate(heroCards, heroCardType)
  } else if (heroCardType < npcCardType) {
    result.status = 'lose'
    result.rate = getSpRate(npcCards, npcCardType)
  } else {
    if (heroCardType === FightCardEnum.ThreeOfAKing) {
      if (heroCards[0] === npcCards[0]) {
        result.status = 'draw'
      } else {
        result.status = heroCards[0] > npcCards[0] ? 'win' : 'lose'
        result.rate = getSpRate(heroCards[0] > npcCards[0] ? heroCards : npcCards, heroCardType)
      }
    } else if (heroCardType === FightCardEnum.OnePairs) {
      const npcOnePairs = getOnePairsNumbers(npcCards)
      const heroOnePairs = getOnePairsNumbers(heroCards)
      if (heroOnePairs.single === npcOnePairs.single) {
        result.status = 'draw'
      } else {
        result.status = heroOnePairs.single > npcOnePairs.single ? 'win' : 'lose'
      }
    } else {
      result.status = 'draw'
    }
  }
  return result
}

export const getSpRate = (cards: number[], type: FightCardEnum): number => {
  let rate = 1
  if (type === FightCardEnum.ThreeOfAKing) {
    if (cards[0] === 1) {
      rate = 10
    } else {
      rate = cards[0]
    }
  }
  return rate
}
