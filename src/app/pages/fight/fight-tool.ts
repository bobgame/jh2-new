import { FightCardEnum } from '../../constants/enums/base.enum'
import { FightItem, FightMjSpecial } from '../../constants/interfaces/base.interface'
import { defaultMjs } from '../../data/mj'
import { clone, randInt } from '../../units/Base'

// card length must be 3
export const calcCardType = (cards: number[]): FightCardEnum => {
  cards.sort((a, b) => a - b)
  const [a, b, c] = cards
  if (a === b && b === c) {
    return FightCardEnum.ThreeOfAKing
  }
  if (a === b || b === c || a === c) {
    return FightCardEnum.OnePairs
  }
  if (a + 1 === b && b + 1 === c) {
    return FightCardEnum.Straight
  }
  // if (a % 10 === b % 10 && b % 10 === c % 10) {
  //   return FightCardEnum.Flush
  // }
  // if (a + 1 === b && b + 1 === c && a % 10 === b % 10 && b % 10 === c % 10) {
  //   return FightCardEnum.StraightFlush
  // }
  return FightCardEnum.Single
}

export const getOnePairsNumbers = (cards: number[]): { single: number; double: number } => {
  const [a, b, c] = cards
  if (a === b) {
    return { single: c, double: a }
  } else if (b === c) {
    return { single: a, double: b }
  } else {
    return { single: b, double: c }
  }
}

export const calcBattleResult = (heroFight: FightItem, npcFight: FightItem, heroMax3: boolean, npcMax3: boolean) => {
  const result = {
    npc: false,
    hero: false,
    heroChoose: [1],
    npcChoose: [2],
  }
  const heroChoose = [heroFight.cards[heroFight.choose[0]], heroFight.cards[heroFight.choose[1]], heroFight.cards[heroFight.choose[2]]]
  const npcChoose = clone(npcFight.choose)

  // const npcChoose = [7, 5, 3]
  // const heroChoose = [3, 6, 7]

  // const heroChoose = [103, 3, 3]
  // const npcChoose = [103, 3, 3]
  // npcFight.type = 'special'
  // heroFight.type = 'special'
  if (heroFight.type === 'card' && heroMax3) {
    const maxNum = Math.max(...heroChoose)
    heroChoose[0] = maxNum
    heroChoose[1] = maxNum
    heroChoose[2] = maxNum
  }

  if (npcFight.type === 'card' && npcMax3) {
    const maxNum = Math.max(...npcChoose)
    npcChoose[0] = maxNum
    npcChoose[1] = maxNum
    npcChoose[2] = maxNum
  }

  if (heroFight.type === 'special' && npcFight.type === 'special') {
    const heroMj = defaultMjs.find(mj => mj.id === heroChoose[0] - 100)
    const npcMj = defaultMjs.find(mj => mj.id === npcChoose[0] - 100)
    if (heroMj && npcMj) {
      result.npc = heroMj.value < npcMj.value
      result.hero = heroMj.value > npcMj.value
    }
  } else if (npcFight.type === 'special') {
    const npcMj = defaultMjs.find(mj => mj.id === npcChoose[0] - 100)
    if (npcMj) {
      result.npc = npcMj.value > 0
      result.hero = npcMj.value < 0
    }
  } else if (heroFight.type === 'special') {
    const heroMj = defaultMjs.find(mj => mj.id === heroChoose[0] - 100)
    if (heroMj) {
      result.npc = heroMj.value < 0
      result.hero = heroMj.value > 0
    }
  } else {
    const cardResult = calcCardResult(npcChoose, heroChoose)
    result.npc = cardResult.npc
    result.hero = cardResult.hero
  }

  if (heroChoose[0] > 100) {
    result.heroChoose = [heroChoose[0]]
  } else {
    result.heroChoose = clone(heroChoose)
  }
  if (npcChoose[0] > 100) {
    result.npcChoose = [npcChoose[0]]
  } else {
    result.npcChoose = clone(npcChoose)
  }

  return result
}

export const calcCardResult = (npcChoose: number[], heroChoose: number[]) => {
  const result = {
    npc: false,
    hero: false,
  }
  npcChoose = npcChoose.sort((a, b) => a - b)
  heroChoose = heroChoose.sort((a, b) => a - b)
  const npcCardType = calcCardType(npcChoose)
  const heroCardType = calcCardType(heroChoose)
  result.npc = heroCardType > npcCardType
  result.hero = heroCardType < npcCardType
  let npcWin: undefined | boolean = undefined
  if (heroCardType === npcCardType) {
    switch (heroCardType) {
      case FightCardEnum.ThreeOfAKing:
        if (npcChoose[0] !== heroChoose[0]) {
          npcWin = npcChoose[0] > heroChoose[0]
        }
        break
      case FightCardEnum.Straight:
        if (npcChoose[0] !== heroChoose[0]) {
          npcWin = npcChoose[0] > heroChoose[0]
        }
        break
      case FightCardEnum.OnePairs: {
        const npcOnePairs = getOnePairsNumbers(npcChoose)
        const heroOnePairs = getOnePairsNumbers(heroChoose)
        if (npcOnePairs.double === heroOnePairs.double) {
          if (npcOnePairs.single !== heroOnePairs.single) {
            npcWin = npcOnePairs.single > heroOnePairs.single
          }
        } else {
          npcWin = npcOnePairs.double > heroOnePairs.double
        }
        break
      }
      case FightCardEnum.Single:
        {
          if (npcChoose[2] === heroChoose[2]) {
            if (npcChoose[1] === heroChoose[1]) {
              if (npcChoose[0] !== heroChoose[0]) {
                npcWin = npcChoose[0] > heroChoose[0]
              }
            } else {
              npcWin = npcChoose[1] > heroChoose[1]
            }
          } else {
            npcWin = npcChoose[2] > heroChoose[2]
          }
        }
        break
      default:
        break
    }
    if (npcWin === undefined) {
      result.npc = false
      result.hero = false
    } else {
      result.npc = npcWin === true
      result.hero = npcWin === false
    }
  } else {
    result.npc = npcCardType > heroCardType
    result.hero = npcCardType < heroCardType
  }
  return result
}

export const calcFightNum = (heroWg: number, npcWg: number): { heroFtNum: number; npcFtNum: number } => {
  // console.log('heroWg', heroWg, 'npcWg', npcWg)
  const heroWgTemp = heroWg > 100 ? 100 : heroWg
  const npcWgTemp = npcWg > 100 ? 100 : npcWg
  const heroFtNum = 30 - Math.floor(npcWgTemp / 5)
  const npcFtNum = 30 - Math.floor(heroWgTemp / 5)
  // console.log('heroFtNum', heroFtNum, 'npcFtNum', npcFtNum)
  return { heroFtNum, npcFtNum }
}

export const defaultSpecial: FightMjSpecial = {
  to: 'zj',
  atk0: false,
  spAtk0: false,
  atkHalf: false,
  atkAddHalf: false,
  max3: false,
  atkDouble: false,
  atkSame: false,
  lessCard: false,
}
