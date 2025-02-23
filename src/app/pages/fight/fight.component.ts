import { Component, OnDestroy, OnInit } from '@angular/core'
import { calcBattleResult, calcCardType, calcFightNum, defaultSpecial, getOnePairsNumbers } from './fight-tool'
import { FightItem, FightStatus, FightStatusEnum, FightTalkData } from '../../constants/interfaces/base.interface'
import { clone, getWyLv, rand, rand100, randInt, sampleItem } from '../../units/Base'
import { CityGroupEnum, FightCardEnum, PageEnum } from '../../constants/enums/base.enum'
import { GlobalService } from '../../services/global.service'
import { CommonModule } from '@angular/common'
import { UiFtCardComponent } from './ui-ft-card/ui-ft-card.component'
import { CountUpModule } from 'ngx-countup'
import { PopTalkFtComponent } from '../../common/pop/pop-talk-ft/pop-talk-ft.component'
import { CountUpOptions } from 'countup.js'
import { ZbSubType, weaponTypeWy } from '../../data/zb'
import { MjItem } from '../../data/mj'
import { MjIdEnum } from '../../constants/enums/mj.enum'
import { environment } from '../../../environments/environment'
import { Msg, MsgService } from '../../services/msg.service'
import { TaskService } from '../../services/task.service'
import { calcYlNum } from '../../units/calc'
import { TaskTalkIds } from '../../data/tasks/task.enum'
import { KeyIds } from '../../data/tasks/keys.interface'
import { Subscription } from 'rxjs'

@Component({
  selector: 'jh-fight',
  imports: [CommonModule, CountUpModule, UiFtCardComponent, PopTalkFtComponent],
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.scss',
})
export class FightComponent implements OnInit, OnDestroy {
  baseFight: FightItem = {
    avatar: '1',
    type: 'card',
    choose: [2, 2, 2],
    cards: [1, 2, 3, 4, 5],
    sex: 1,
    mjs: [],
    tl: 50,
    tlM: 100,
    wg: 5,
    sw: 0,
    ftNum: 5,
    useMj: {
      id: 0,
      name: '',
      count: 0,
      special: clone(defaultSpecial),
    },
  }

  talkData: FightTalkData = {
    show: false,
    isEnd: false,
    isWin: false,
  }

  npcFight = clone(this.baseFight)
  heroFight = clone(this.baseFight)

  ftImg = '3'

  FightStatusEnum = FightStatusEnum

  fightStatus: FightStatus = {
    hero: FightStatusEnum.Normal,
    npc: FightStatusEnum.Normal,
    isWin: false,
  }

  ftData = {
    npc: {
      move: false,
      attack: false,
      ftImg: '3',
      choose: [2, 6, 5],
    },
    hero: {
      move: false,
      attack: false,
      ftImg: '3',
      choose: [7, 8, 9],
    },
  }

  allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // allGf = [101, 102, 103, 104, 105, 106, 107, 108, 109]

  isFighting = false
  isFtCardAnim = false
  btnBattleEnable = false

  countOptionsHero: CountUpOptions = {
    duration: 0.5,
  }

  countOptionsNpc: CountUpOptions = {
    duration: 0.5,
  }

  subscriber: Subscription = new Subscription()

  constructor(
    public g: GlobalService,
    private msgService: MsgService,
    private t: TaskService,
  ) {}

  ngOnInit() {
    this.subscriber = this.msgService.getMsg.subscribe(msg => {
      this.handleMsg(msg)
    })

    if (!environment.production) {
      this.g.hero.wg = 100
      this.g.hero.wy.ng = 9
      // this.g.rws.forEach(rw => {
      //   rw.heart = 100
      // })
      setTimeout(() => {
        this.npcFight.tl = 1
        // this.heroFight.tl = 1
      }, 1000)
    }

    this.init()
    this.g.getKey(KeyIds.Count_Fight_Game).value++
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe()
  }

  init() {
    this.setFightData()
    this.setFtImgAndMjs()

    this.npcFight.choose = []
    this.npcFight.cards = []

    this.heroFight.choose = []
    this.heroFight.cards = []

    if (!environment.production) {
      this.addTest() // for test
    }

    this.initCards()
  }

  // for test
  addTest() {
    // const mjIds = [1, 2, 3, 15, 16, 17]
    // const mjIds = [30]
    const mjIds = [15, 16, 17, 23, 30]
    mjIds.forEach(id => {
      this.heroFight.mjs.push(id)
      // this.npcFight.mjs.push(id)
    })
  }

  setFightData() {
    this.npcFight.avatar = this.g.fight.rw.avatar
    this.npcFight.tl = this.g.fight.rw.tl
    this.countOptionsNpc.startVal = this.npcFight.tl
    this.npcFight.tlM = this.g.fight.rw.tl
    this.npcFight.wg = this.g.fight.rw.wg
    this.npcFight.sw = this.g.fight.rw.sw
    this.npcFight.sex = this.g.fight.rw.sex

    this.heroFight.avatar = this.g.hero.avatar
    this.heroFight.tl = this.g.hero.tl

    this.countOptionsHero.startVal = this.heroFight.tl

    this.heroFight.tlM = this.g.hero.tlM
    this.heroFight.wg = this.g.hero.wg
    this.heroFight.sw = this.g.hero.sw
    this.heroFight.sex = this.g.hero.sex

    const { heroFtNum, npcFtNum } = calcFightNum(this.g.hero.wg, this.g.fight.rw.wg)

    this.npcFight.ftNum = npcFtNum
    this.heroFight.ftNum = heroFtNum
  }

  initCards() {
    if (this.talkData.isEnd) {
      return
    }
    let heroCardMax = 5 + getWyLv(this.g.hero.wy.ng)
    if (
      this.npcFight.useMj.id > 0 &&
      this.npcFight.useMj.special.lessCard &&
      !(this.heroFight.useMj.id > 0 && this.heroFight.useMj.special.spAtk0)
    ) {
      heroCardMax--
    }
    let npcCardMax = this.g.fight.rw.cardNum
    if (
      this.heroFight.useMj.id > 0 &&
      this.heroFight.useMj.special.lessCard &&
      !(this.npcFight.useMj.id > 0 && this.npcFight.useMj.special.spAtk0)
    ) {
      npcCardMax--
    }
    // rand a special card, cards only can have one special card
    const tempHeroSPCard = this.heroFight.cards.filter(item => item > 100)
    if (tempHeroSPCard.length < 2 && this.heroFight.mjs.length > 0 && rand() > 0.7) {
      this.heroFight.cards.push(sampleItem(this.heroFight.mjs) + 100)
    }

    const tempNpcSPCard = this.npcFight.cards.filter(item => item > 100)
    if (tempNpcSPCard.length < 2 && this.npcFight.mjs.length > 0 && rand() > 0.8) {
      this.npcFight.cards.push(sampleItem(this.npcFight.mjs) + 100)
    }

    for (let i = 0; i < 9; i++) {
      if (this.npcFight.cards.length < npcCardMax) {
        this.npcFight.cards.push(sampleItem(this.allCards))
      } else {
        break
      }
    }
    for (let i = 0; i < 9; i++) {
      if (this.heroFight.cards.length < heroCardMax) {
        this.heroFight.cards.push(sampleItem(this.allCards))
      } else {
        break
      }
    }
    this.npcFight.cards.sort((a, b) => a - b)
    this.heroFight.cards.sort((a, b) => a - b)
  }

  setFtImgAndMjs() {
    this.ftImg = '3'
    const tempMjs: number[] = []
    if (this.g.hero.equip.weapon.active && this.g.hero.equip.weapon.name) {
      switch (this.g.hero.equip.weapon.subType) {
        case 'sword':
          this.ftImg = '1'
          break
        case 'rod':
          this.ftImg = '2'
          break
        case 'glove':
          this.ftImg = '3'
          break
        case 'hidden':
          this.ftImg = '4'
          break
        default:
          this.ftImg = '3'
          break
      }
      this.g.hero.mjs.forEach(item => {
        const temp = this.g.mjs.find(mj => mj.id === item)
        if (temp && (temp.types.includes(this.g.hero.equip.weapon.subType) || temp.types.length === 0)) {
          tempMjs.push(temp.id)
        }
      })
    } else {
      this.g.hero.mjs.forEach(item => {
        const temp = this.g.mjs.find(mj => mj.id === item)
        if (temp && (temp.types.includes('glove') || temp.types.length === 0)) {
          tempMjs.push(temp.id)
        }
      })
    }
    this.heroFight.mjs = clone(tempMjs)

    this.ftData.hero.ftImg = this.ftImg

    this.ftData.npc.ftImg = sampleItem(this.g.fight.rw.ftImg.split(''))
    const npcFtType: ZbSubType = (['sword', 'rod', 'glove', 'hidden'] as ZbSubType[])[parseInt(this.ftData.npc.ftImg) - 1]
    this.npcFight.mjs = []
    this.g.fight.rw.mjs.forEach(item => {
      const temp = this.g.mjs.find(mj => mj.id === item)
      if (temp && (temp.types.includes(npcFtType) || temp.types.length === 0)) {
        this.npcFight.mjs.push(temp.id)
      }
    })
  }

  chooseCard(index: number) {
    if (this.heroFight.choose.includes(index)) {
      if (this.heroFight.choose.find(item => this.heroFight.cards[item] > 100) !== undefined) {
        this.heroFight.choose = []
      } else {
        this.heroFight.choose = this.heroFight.choose.filter(item => item !== index)
      }
    } else {
      if (this.heroFight.cards[index] <= 100) {
        if (this.heroFight.choose.find(item => this.heroFight.cards[item] > 100) !== undefined) {
          return
        } else if (this.heroFight.choose.length < 3) {
          this.heroFight.choose.push(index)
          this.heroFight.type = 'card'
        }
      } else {
        if (this.heroFight.choose.length > 0) {
          return
        } else {
          this.heroFight.choose.push(index)
          this.heroFight.type = 'special'
        }
      }
    }

    this.calcBattleBtnStatus()
  }

  calcBattleBtnStatus() {
    this.btnBattleEnable = this.heroFight.choose.length === 3 || (this.heroFight.type === 'special' && this.heroFight.choose.length === 1)
  }

  npcChooseCard() {
    // if has special card, use it
    const npcSpecialCardIndex = this.npcFight.cards.findIndex(item => item > 100)
    if (npcSpecialCardIndex > -1) {
      this.npcFight.type = 'special'
      this.npcFight.choose = [this.npcFight.cards[npcSpecialCardIndex], -1, -1]
      // remove the special card from npcFight cards
      this.npcFight.cards = this.npcFight.cards.filter(item => item <= 100)
    } else {
      this.npcFight.type = 'card'
      // find the best 3 cards frome npcFight cards and save the index from npcFight cards, later will remove the choose cards from npcFight cards
      const allChoose = []
      const allChooseIndex: number[][] = []
      for (let i = 0; i < this.npcFight.cards.length; i++) {
        for (let j = 0; j < this.npcFight.cards.length; j++) {
          for (let k = 0; k < this.npcFight.cards.length; k++) {
            // if all index are different and not have same in chooseIndex
            if (i !== j && j !== k && i !== k && !allChooseIndex.find(item => item.includes(i) && item.includes(j) && item.includes(k))) {
              const temp = [this.npcFight.cards[i], this.npcFight.cards[j], this.npcFight.cards[k]]
              allChoose.push(temp)
              allChooseIndex.push([i, j, k].sort((a, b) => a - b))
            }
          }
        }
      }
      // find the best choose from allChoose
      let bestChooseIndex = 0
      let bestChooseType = FightCardEnum.Single
      for (let i = 0; i < allChoose.length; i++) {
        const tempType = calcCardType(allChoose[i])
        if (tempType > bestChooseType) {
          bestChooseType = tempType
          bestChooseIndex = i
        }
      }
      this.npcFight.choose = allChoose[bestChooseIndex]

      // remove the choose cards from npcFight cards use index
      this.npcFight.cards = this.npcFight.cards.filter((item, index) => !allChooseIndex[bestChooseIndex].includes(index))
    }
  }

  setSpecialCardEffect(heroChoose: number[], npcChoose: number[]) {
    this.endMjCheck()
    if (heroChoose[0] > 100) {
      const heroMj = this.g.mjs.find(mj => mj.id === heroChoose[0] - 100)
      if (heroMj && heroMj.value < 0) {
        this.heroFight.useMj.id = heroMj.id
        this.heroFight.useMj.name = heroMj.name
        this.heroFight.useMj.count = heroMj.count
        this.heroFight.useMj.special = this.calcSpecialEffect(heroMj)
      }
    }
    if (npcChoose[0] > 100) {
      const npcMj = this.g.mjs.find(mj => mj.id === npcChoose[0] - 100)
      if (npcMj && npcMj.value < 0) {
        this.npcFight.useMj.id = npcMj.id
        this.npcFight.useMj.name = npcMj.name
        this.npcFight.useMj.count = npcMj.count
        this.npcFight.useMj.special = this.calcSpecialEffect(npcMj)
      }
    }
    this.initCards()
    this.calcBattleBtnStatus()
  }

  // LingXiYiZhi desc 三回合内对手攻击伤害为零
  // WangQingTianShu desc 五回合内对手特殊攻击牌失效
  // JiuYangZhenJing desc 五回合内对手攻击伤害减半
  // JiuYinZhenJing desc 五回合内自己攻击伤害加五成
  // YiJinJing desc 五回合内以三张普通牌最大的牌计算为三张相同的套牌
  // ZuoYouHuBo desc 三回合内自己攻击伤害加倍
  // HuanShiBiShen desc 五回合内对方攻击自己会受到同样的伤害
  // BeiMingShenGong desc 五回合内对方少发一张牌

  calcSpecialEffect(mj: MjItem) {
    const special = clone(defaultSpecial)
    switch (mj.id) {
      case MjIdEnum.LingXiYiZhi:
        special.atk0 = true
        special.to = 'ds'
        break
      case MjIdEnum.WangQingTianShu:
        special.spAtk0 = true
        special.to = 'ds'
        break
      case MjIdEnum.JiuYangZhenJing:
        special.atkHalf = true
        special.to = 'ds'
        break
      case MjIdEnum.JiuYinZhenJing:
        special.atkAddHalf = true
        break
      case MjIdEnum.YiJinJing:
        special.max3 = true
        break
      case MjIdEnum.ZuoYouHuBo:
        special.atkDouble = true
        break
      case MjIdEnum.HuanShiBiShen:
        special.atkSame = true
        break
      case MjIdEnum.BeiMingShenGong:
        special.lessCard = true
        special.to = 'ds'
        break
      default:
        break
    }
    return special
  }

  startBattle() {
    if (!(this.heroFight.choose.length >= 3 || (this.heroFight.type === 'special' && this.heroFight.choose.length === 1))) {
      // console.log('need 3 cards or 1 special card')
      return
    }

    this.isFighting = true
    this.isFtCardAnim = true
    setTimeout(() => {
      this.ftData.hero.move = true
      this.ftData.npc.move = true
    }, 0)

    this.npcChooseCard()

    const isHeroSp = this.heroFight.type === 'special'
    const isNpcSp = this.npcFight.type === 'special'

    if (this.heroFight.type === 'special') {
      this.heroFight.choose[1] = -1
      this.heroFight.choose[2] = -1
    }

    // this.npcFight.type = 'card'
    // this.heroFight.type = 'card'

    const heroMax3 = this.heroFight.useMj.id > 0 && this.heroFight.useMj.special.max3
    const npcMax3 = this.npcFight.useMj.id > 0 && this.npcFight.useMj.special.max3

    const result = calcBattleResult(this.heroFight, this.npcFight, heroMax3, npcMax3)
    this.ftData.hero.choose = result.heroChoose
    this.ftData.npc.choose = result.npcChoose

    // remove the battle cards from heroFight
    this.heroFight.cards = this.heroFight.cards.filter((item, index) => !this.heroFight.choose.includes(index))

    // console.log(result)

    this.npcFight.choose = []
    this.heroFight.choose = []

    setTimeout(() => {
      if (!result.npc && !result.hero) {
        this.ftData.hero.move = false
        this.ftData.npc.move = false
      } else {
        if (result.npc) {
          this.ftData.hero.move = false
        } else {
          this.ftData.npc.move = false
        }
      }
      setTimeout(() => {
        this.ftData.hero.move = false
        this.ftData.npc.move = false
        this.isFtCardAnim = false

        if (!result.npc && !result.hero) {
          setTimeout(() => {
            this.isFighting = false
            this.setSpecialCardEffect(result.heroChoose, result.npcChoose)
          }, 300)
        } else {
          if (result.npc) {
            this.npcAttackAnim(isNpcSp)
          } else {
            this.heroAttackAnim(isHeroSp)
          }
          setTimeout(() => {
            this.isFighting = false
            this.setSpecialCardEffect(result.heroChoose, result.npcChoose)
            this.checkYiLiao()
          }, 700)
        }
      }, 500)
    }, 800)
  }

  checkYiLiao() {
    if (this.g.hero.jn.yl > 0) {
      this.heroFight.tl += calcYlNum(this.heroFight.tl)
      this.heroFight.tl = this.heroFight.tl > this.heroFight.tlM ? this.heroFight.tlM : this.heroFight.tl
    }
    if (this.g.fight.rw.jn.yl > 0) {
      this.npcFight.tl += calcYlNum(this.npcFight.tl)
      this.npcFight.tl = this.npcFight.tl > this.npcFight.tlM ? this.npcFight.tlM : this.npcFight.tl
    }
  }

  heroAttackAnim(isSpecial = false) {
    this.fightStatus.hero = FightStatusEnum.Attack
    this.ftData.hero.attack = true
    setTimeout(() => {
      this.fightStatus.hero = FightStatusEnum.Normal
      this.ftData.hero.attack = false
      this.fightStatus.npc = FightStatusEnum.Injured

      let atkNum = this.heroFight.ftNum
      if (this.heroFight.useMj.id > 0) {
        if (this.heroFight.useMj.special.atkAddHalf) {
          atkNum = Math.floor(atkNum * 1.5)
        } else if (this.heroFight.useMj.special.atkDouble) {
          atkNum *= 2
        }
      }

      if (!isSpecial && this.npcFight.useMj.id > 0) {
        if (this.npcFight.useMj.special.atk0) {
          atkNum = 0
        } else if (this.npcFight.useMj.special.atkHalf) {
          atkNum = Math.floor(atkNum / 2)
        }
      }

      if (isSpecial && this.npcFight.useMj.id > 0 && this.npcFight.useMj.special.spAtk0) {
        atkNum = 0
      }

      const totalAtkNum = atkNum + randInt(2, -2)

      this.npcFight.tl -= totalAtkNum

      if (this.npcFight.useMj.id > 0 && this.npcFight.useMj.special.atkSame) {
        this.heroFight.tl -= totalAtkNum
      }

      if (this.heroFight.tl <= 0) {
        this.lose()
      } else if (this.npcFight.tl <= 0) {
        this.win()
      } else {
        setTimeout(() => {
          this.fightStatus.npc = FightStatusEnum.Normal
        }, 300)
      }
    }, 300)
  }

  npcAttackAnim(isSpecial = false) {
    this.fightStatus.npc = FightStatusEnum.Attack
    this.ftData.npc.attack = true
    setTimeout(() => {
      this.fightStatus.npc = FightStatusEnum.Normal
      this.ftData.npc.attack = false
      this.fightStatus.hero = FightStatusEnum.Injured

      let atkNum = this.npcFight.ftNum
      if (this.npcFight.useMj.id > 0) {
        if (this.npcFight.useMj.special.atkAddHalf) {
          atkNum = Math.floor(atkNum * 1.5)
        } else if (this.npcFight.useMj.special.atkDouble) {
          atkNum *= 2
        }
      }

      if (!isSpecial && this.heroFight.useMj.id > 0) {
        if (this.heroFight.useMj.special.atk0) {
          atkNum = 0
        } else if (this.heroFight.useMj.special.atkHalf) {
          atkNum = Math.floor(atkNum / 2)
        }
      }

      if (isSpecial && this.heroFight.useMj.id > 0 && this.heroFight.useMj.special.spAtk0) {
        atkNum = 0
      }

      const totalAtkNum = atkNum + randInt(2, -2)

      this.heroFight.tl -= totalAtkNum

      if (this.heroFight.useMj.id > 0 && this.heroFight.useMj.special.atkSame) {
        this.npcFight.tl -= totalAtkNum
      }

      if (this.heroFight.tl <= 0) {
        this.lose()
      } else if (this.npcFight.tl <= 0) {
        this.win()
      } else {
        setTimeout(() => {
          this.fightStatus.hero = FightStatusEnum.Normal
        }, 300)
      }
    }, 300)
  }

  // 战斗回合结束减少Mj Count
  endMjCheck() {
    if (this.heroFight.useMj.id > 0) {
      this.heroFight.useMj.count--
      if (this.heroFight.useMj.count === 0) {
        this.heroFight.useMj = {
          id: 0,
          name: '',
          count: 0,
          special: clone(defaultSpecial),
        }
      }
    }
    if (this.npcFight.useMj.id > 0) {
      this.npcFight.useMj.count--
      if (this.npcFight.useMj.count === 0) {
        this.npcFight.useMj = {
          id: 0,
          name: '',
          count: 0,
          special: clone(defaultSpecial),
        }
      }
    }
  }

  closeTalk() {
    this.talkData.show = false
    if (this.talkData.isEnd) {
      this.backToCity()
    }
  }

  backToCity(notBack = false) {
    if (!notBack) {
      if (this.fightStatus.isWin) {
        this.g.hero.tl = this.heroFight.tl < 10 ? 10 : this.heroFight.tl
      } else {
        this.g.hero.tl = 10
      }
      this.g.goBack()
      setTimeout(() => {
        this.msgService.sendMsg({ type: 'fight', status: true })
      }, 100)
    }
  }

  win() {
    this.fightStatus.isWin = true
    this.npcFight.tl = 0
    this.g.getKey(KeyIds.Count_Fight_Win).value++
    if (this.npcFight.sw >= 0 && this.heroFight.sw > 35 && this.heroFight.wg - this.npcFight.wg > 50) {
      this.g.addWg(randInt(2, 1) * -1)
    } else if (rand() > 0.1) {
      this.g.addSw(1)
    }
    if (rand() < 0.6) {
      this.g.addWg(randInt(2, 1))
    }
    if (rand() > 0.5) {
      const heroWeaponWy = weaponTypeWy[this.g.hero.equip.weapon.subType]
      this.g.addWy(heroWeaponWy, 1)
    }
    if (rand() < 0.5) {
      this.g.addWy('ng', 1)
    }
    if (rand() > 0.5) {
      this.g.addWy('qg', 1)
    }

    if (this.g.fight.type === 'tq') {
      this.g.getRw(this.g.fight.rw.id).heart -= randInt(6, 3)
      if (this.g.getRw(this.g.fight.rw.id).heart < 0) {
        this.g.getRw(this.g.fight.rw.id).heart = 0
      }
      this.backToCity()
    } else if (this.g.fight.type === 'tsk') {
      this.t.isInTask = true
      this.g.getRw(this.g.fight.rw.id).heart += randInt(6, 3)
      this.setTaskTalkData({ isWin: true })
    } else {
      this.g.getRw(this.g.fight.rw.id).heart += randInt(6, 3)

      const isShowTask = this.t.winCheck(this.g.fight.rw.id)
      if (isShowTask) {
        this.setTalkData({ show: false, isEnd: true, isWin: true })
      } else {
        this.setTalkData({ show: true, isEnd: true, isWin: true })
      }
    }
  }

  setTalkData(data: FightTalkData) {
    this.talkData = { show: data.show, isEnd: data.isEnd, isWin: data.isWin }
  }

  handleMsg(msg: Msg) {
    if (msg.type === 'toast' && !msg.status) {
      if (this.t.nextRewards.length > 0) {
        this.t.rewardActions(this.t.nextRewards)
      } else {
        this.talkData.show = true
      }
    }
  }

  lose() {
    this.fightStatus.isWin = false
    this.heroFight.tl = 0

    this.g.getKey(KeyIds.Count_Fight_Lose).value++

    if (rand() > 0.6) {
      this.g.addSw(1)
    }
    if (rand() < 0.2) {
      this.g.addWg(randInt(2, 1))
    }
    if (rand() > 0.8) {
      const heroWeaponWy = weaponTypeWy[this.g.hero.equip.weapon.subType]
      this.g.addWy(heroWeaponWy, 1)
    }
    if (rand() < 0.2) {
      this.g.addWy('ng', 1)
    }
    if (rand() > 0.8) {
      this.g.addWy('qg', 1)
    }

    if (this.g.fight.type === 'tq') {
      this.g.getRw(this.g.fight.rw.id).heart -= randInt(4, 2)
      if (this.g.getRw(this.g.fight.rw.id).heart < 0) {
        this.g.getRw(this.g.fight.rw.id).heart = 0
      }
      this.backToCity()
    } else if (this.g.fight.type === 'tsk') {
      this.g.getRw(this.g.fight.rw.id).heart += randInt(4, 2)
      this.setTaskTalkData({ isWin: false })
    } else {
      this.g.getRw(this.g.fight.rw.id).heart += randInt(4, 2)

      this.talkData = {
        show: true,
        isEnd: true,
        isWin: false,
      }
    }
  }

  setTaskTalkData(status: { isWin?: boolean }) {
    const { isWin } = status

    let talkId = 0
    if (isWin && this.g.gmData.ft.successTId > 0) {
      talkId = this.g.gmData.ft.successTId
    } else if (!isWin && this.g.gmData.ft.failTId > 0) {
      talkId = this.g.gmData.ft.failTId
    }
    if (talkId > 0) {
      const talkIdCityGroupMap: any = {
        [TaskTalkIds.LiXunHuan_RenWuKa_4]: CityGroupEnum.ShaolinDaDian,
        [TaskTalkIds.LiXunHuan_RenWuKa_5]: CityGroupEnum.ShaolinDaDian,
        [TaskTalkIds.YeKai_XiaoLiFeiDao_2]: CityGroupEnum.JiaoWai,
        [TaskTalkIds.WangXiaoShi_WanLiuJian_3]: CityGroupEnum.MinJia,
      }
      if (talkIdCityGroupMap[talkId]) {
        this.g.current.cityGroup = talkIdCityGroupMap[talkId]
        this.g.current.rwIn = this.g.current.cityGroup
        this.backToCity(true)
        this.g.current.page = PageEnum.City
      } else {
        this.backToCity()
      }

      if (talkId === TaskTalkIds.LuXiaoFeng_RenWuKa_3) {
        talkId = rand100() > 66 ? TaskTalkIds.LuXiaoFeng_RenWuKa_3 : TaskTalkIds.LuXiaoFeng_RenWuKa_4
      }

      setTimeout(() => {
        this.t.taskData.talkId = talkId
        this.t.taskData.show = true
        this.g.gmData.ft.successTId = 0
        this.g.gmData.ft.failTId = 0

        setTimeout(() => {
          this.t.isInTask = false
        }, 20)
      }, 0)
    } else {
      this.backToCity()
    }
  }
}
