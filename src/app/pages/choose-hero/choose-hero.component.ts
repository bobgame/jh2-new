import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { clone, rand, sampleItem } from '../../units/Base'
import { qa } from './choose-data'
import { GlobalService } from '../../services/global.service'
import { HeroIdEnum, PageEnum } from '../../constants/enums/base.enum'
import { Hero, PersonJn, PersonWy, defaultHero, heroes } from '../../data/hero'
import { PopChooseComponent } from '../../common/pop/pop-choose/pop-choose.component'
import { AnswerItem } from '../../constants/interfaces/base.interface'
import { UiBtnBackComponent } from '../../common/ui/ui-btn-back/ui-btn-back.component'
import { baseStartInputTsks } from '../../data/tasks/all-tasks'
import { TaskService } from '../../services/task.service'
import { environment } from '../../../environments/environment'
import { TaskIds, TaskTalkIds } from '../../data/tasks/task.enum'
import { CityIdEnum } from '../../constants/enums/city.enum'
import { RwIdEnum } from '../../constants/enums/rw.enum'

@Component({
    selector: 'jh-choose-hero',
    imports: [CommonModule, PopChooseComponent, UiBtnBackComponent],
    templateUrl: './choose-hero.component.html',
    styleUrl: './choose-hero.component.scss'
})
export class ChooseHeroComponent implements OnInit {
  constructor(
    private g: GlobalService,
    private t: TaskService,
  ) {}

  showPreChoose = false

  qa = clone(qa)
  heroes = clone(heroes)

  currentHero = clone(defaultHero)

  currentQa = {
    index: 0,
    item: this.qa[0],
  }

  ngOnInit(): void {
    this.currentHero = clone(defaultHero)
    const zjClc = this.g.clc.find(c => c.key === 'zj')
    if (zjClc) {
      zjClc.cards.forEach(c => {
        const hero = this.heroes.find(h => h.id === c.id)
        if (hero) {
          hero.isActive = true
        }
      })
    }
    if (!environment.production) {
      this.heroes.forEach(h => {
        h.isActive = true
      })
    }
  }

  back() {
    this.g.goToPage(PageEnum.Home)
  }

  selectHero(hero: Hero) {
    if (this.showPreChoose || !hero.isActive) {
      return
    }

    this.currentHero = Object.assign(clone(defaultHero), hero)
  }

  startPreChoose() {
    if (this.showPreChoose) {
      return
    }
    if (this.currentHero.id === 1) {
      this.openPreChoose()
    } else {
      this.startGameInit()
      this.startTalks()
    }
  }

  startGameInit() {
    this.g.hero = this.currentHero
    this.g.hero.isIn = true
    this.randomCurrentCity()
    this.g.addClc('zj', this.currentHero.id)
    if (this.g.hero.mjs.length > 0) {
      this.g.hero.mjs.forEach(mjId => {
        this.g.addClc('mj', mjId)
      })
    }
  }

  startTalks() {
    let talkId = 0
    switch (this.g.hero.id) {
      case HeroIdEnum.LuXiaoFeng:
        this.g.getRw(RwIdEnum.XiMenChuiXue).heart = 27
        this.g.getRw(RwIdEnum.SiKongZhaiXing).heart = 30
        this.g.getRw(RwIdEnum.HuaManLou).heart = 47
        this.g.getRw(RwIdEnum.LaoShiHeShang).heart = 29
        this.g.getRw(RwIdEnum.MuDaoRen).heart = 28
        this.g.getRw(RwIdEnum.ShaMan).heart = 47
        break
      case HeroIdEnum.XiMenChuiXue:
        talkId = TaskTalkIds.XiMenChuiXue_ZJ_Start
        this.t.taskData.taskId = TaskIds.XiMenChuiXue_ZJ_Start
        this.g.current.city = this.g.getCity(CityIdEnum.SuZhou)
        this.g.current.house = this.g.current.city.id

        this.g.getRw(RwIdEnum.LuXiaoFeng).heart = 24
        break
      case HeroIdEnum.YangGuo:
        talkId = TaskTalkIds.YangGuo_ZJ_Start

        this.g.getRw(RwIdEnum.GuoXiang).heart = 58
        this.g.getRw(RwIdEnum.XiaoLongNv).heart = 100
        this.g.getRw(RwIdEnum.GuoJing).heart = 57
        this.g.getRw(RwIdEnum.HuangRong).heart = 30
        this.g.getRw(RwIdEnum.HuangYaoShi).heart = 35
        this.g.getRw(RwIdEnum.ZhouBoTong).heart = 38
        this.g.getRw(RwIdEnum.FangSheng).heart = 26
        break
      case HeroIdEnum.GuoXiang:
        talkId = TaskTalkIds.GuoXiang_ZJ_Start
        this.t.taskData.taskId = TaskIds.GuoXiang_ZJ_Start
        this.g.current.city = this.g.getCity(CityIdEnum.XiangYang)
        this.g.current.house = this.g.current.city.id

        this.g.getRw(RwIdEnum.HuangRong).heart = 100
        this.g.getRw(RwIdEnum.GuoJing).heart = 100
        this.g.getRw(RwIdEnum.YangGuo).heart = 65
        this.g.getRw(RwIdEnum.HuangYaoShi).heart = 75
        this.g.getRw(RwIdEnum.ZhangSanFeng).heart = 48
        this.g.getRw(RwIdEnum.ZhouBoTong).heart = 60
        this.g.getRw(RwIdEnum.JueYuan).heart = 35
        break
      case HeroIdEnum.WuQing:
        talkId = TaskTalkIds.WuQing_ZJ_Start_1
        this.t.taskData.taskId = TaskIds.WuQing_ZJ_Start
        this.g.current.city = this.g.getCity(CityIdEnum.JingCheng)
        this.g.current.house = this.g.current.city.id

        this.g.getRw(RwIdEnum.TieShou).heart = 47
        this.g.getRw(RwIdEnum.ZhuiMing).heart = 47
        this.g.getRw(RwIdEnum.LengXie).heart = 47
        this.g.getRw(RwIdEnum.ZhuGeXianSheng).heart = 58
        this.g.getRw(RwIdEnum.WangXiaoShi).heart = 36
        break
      default:
        break
    }
    this.g.goToPage(PageEnum.City)
    if (talkId > 0) {
      setTimeout(() => {
        this.t.taskData.talkId = talkId
        this.t.taskData.show = true
      }, 0)
    }
  }

  randomCurrentCity() {
    const cityies = this.g.cities.filter(city => city.group.find(g => g.key === 'jg'))
    this.g.current.city = sampleItem(cityies)
    this.g.current.house = this.g.current.city.id
  }

  openPreChoose() {
    this.showPreChoose = true
  }

  answerQuestion(answer: AnswerItem) {
    switch (answer.actionType) {
      case 1:
        switch (answer.actionValue) {
          case 1:
            this.addWy('aq')
            break
          case 2:
            this.addWy('gf')
            break
          case 3:
            this.addWy('jf')
            break
          case 4:
            this.addWy('zf')
            break
          default:
            break
        }
        break
      case 2:
        switch (answer.actionValue) {
          case 1:
            this.currentHero.wg += 5
            this.randomAddJn()
            break
          case 2:
            this.currentHero.sw += 10
            this.randomAddJn()
            break
          case 3:
            this.currentHero.sw += 10
            this.addWy('ng')
            break
          case 4:
            this.currentHero.sw += 10
            this.randomAddJn()
            break
          default:
            break
        }
        break
      case 3:
        switch (answer.actionValue) {
          case 1:
            this.addWy('qg')
            break
          case 2:
            this.currentHero.jn.yr = 1
            break
          case 3:
            this.currentHero.wg += 5
            break
          case 4:
            this.currentHero.sw += 10
            break
          default:
            break
        }
        break
      case 4:
        switch (answer.actionValue) {
          case 1:
            break
          case 2:
            break
          default:
            break
        }
        break
      case 5:
        switch (answer.actionValue) {
          case 1:
            if (rand() > 0.5) {
              this.currentHero.jn.sy = 1
              this.g.addJyClc('sy')
            }
            break
          case 2:
            break
          default:
            break
        }
        break
      case 6:
        switch (answer.actionValue) {
          case 1:
            this.addWy('gf')
            this.currentHero.wg += 9
            break
          case 2:
            this.addWy('aq')
            this.currentHero.wg += 11
            break
          case 3:
            this.addWy('jf')
            this.currentHero.wg += 11
            break
          case 4:
            this.addWy('zf')
            this.currentHero.wg += 8
            break
          default:
            break
        }
        break
      case 7:
        switch (answer.actionValue) {
          case 1:
            this.randomAddWy()
            break
          case 2:
            this.randomAddJn()
            break
          case 3:
            break
          case 4:
            this.currentHero.wg += 5
            break
          default:
            break
        }
        break

      default:
        break
    }
    this.nextQuestion()
  }

  randomAddJn() {
    const jnKeys = Object.keys(this.currentHero.jn) as (keyof PersonJn)[]
    const key = sampleItem(jnKeys)
    this.currentHero.jn[key] = 1
    this.g.addJyClc(key)
  }

  randomAddWy() {
    const jyKeys = Object.keys(this.currentHero.wy) as (keyof PersonWy)[]
    this.addWy(sampleItem(jyKeys))
  }

  addWy(key: keyof PersonWy) {
    if (this.currentHero.wy[key] === 5) {
      this.currentHero.wy[key] = 9
    } else if (this.currentHero.wy[key] === 2) {
      this.currentHero.wy[key] = 5
    } else if (this.currentHero.wy[key] === 0) {
      this.currentHero.wy[key] = 2
    }
    this.g.checkWyUpdate(this.currentHero.wy)
  }

  nextQuestion() {
    this.currentQa.index++
    this.currentQa.item = this.qa[this.currentQa.index]
    if (this.currentQa.item === undefined) {
      this.startGameInit()
      this.g.goToPage(PageEnum.PlayGuide)
    }
  }
}
