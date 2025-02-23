import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { PopChooseComponent } from '../pop-choose/pop-choose.component'
import { UiAvatarComponent } from '../../ui/ui-avatar/ui-avatar.component'
import { UiCityBgComponent } from '../../ui/ui-city-bg/ui-city-bg.component'
import { UiTipArrowDownComponent } from '../../ui/ui-tip-arrow-down/ui-tip-arrow-down.component'
import { TalkType } from '../../../constants/interfaces/base.interface'
import { BasicTalkItem } from '../../../data/talk-basic'
import { GlobalService } from '../../../services/global.service'
import { clone, sampleItem, rand, randInt, replaceTalk } from '../../../units/Base'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { taskTalks } from '../../../data/tasks/task-talks'
import { TaskAnswerActions, TaskEndValueEnum, TaskIds, TaskTalkActions, TaskTalkIds } from '../../../data/tasks/task.enum'
import { JhTask, TaskAnswerItem, TaskItem, TaskReward, TaskRewardType, TaskTalkItem } from '../../../data/tasks/task.interface'
import { allDms, dengMiQa, taskQaItems } from '../../../data/tasks/task-qa'
import { CityGroupEnum, PageEnum } from '../../../constants/enums/base.enum'
import { TaskService } from '../../../services/task.service'
import { personJnKeys } from '../../../data/hero'
import { jbQa, taskSKZXJianBaoTalks } from '../../../data/tasks/children/t-sikongzhaixing'
import { ZbIdEnum } from '../../../constants/enums/zb.enum'
import { JhToastService } from '../../../services/jh-toast.service'
import { Msg, MsgService } from '../../../services/msg.service'
import { MapService } from '../../../services/map.service'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { KeyIds } from '../../../data/tasks/keys.interface'
import { GameoverEnum, gameoverTexts } from '../../../data/gameover'
import { Subscription } from 'rxjs'
import { getTimeDay } from '../../../units/time'
import { TextColorPipe } from '../../../pipes/text-color.pipe'

@Component({
    selector: 'jh-pop-task',
    imports: [CommonModule, UiAvatarComponent, UiTipArrowDownComponent, PopChooseComponent, UiCityBgComponent, TextColorPipe],
    templateUrl: './pop-task.component.html',
    styleUrl: './pop-task.component.scss'
})
export class PopTaskComponent implements OnInit, OnDestroy {
  constructor(
    private g: GlobalService,
    private jt: JhToastService,
    private t: TaskService,
    private msgService: MsgService,
    private mapService: MapService,
  ) {}
  @Input() talkType: TalkType = 'bc'
  @Input() npc = this.g.getRw(RwIdEnum.DianXiaoEr)
  @Output() closePop = new EventEmitter<void>()

  npcTalk: BasicTalkItem = {
    id: 0,
    rwId: 0,
    type: 'rw',
    text: '',
    isActive: false,
  }

  heroTalk: BasicTalkItem = {
    id: 1,
    rwId: 1,
    type: 'zj',
    text: '',
    isActive: false,
  }

  showNpc = false
  showHero = false
  showNpcAvatar = true
  showHeroAvatar = true

  talks: TaskTalkItem[] = []
  currentTalk!: TaskTalkItem

  qaData = clone(taskQaItems[0])

  spTask: SpTaskType = 'none'
  jbStep = 0

  showQa = false

  subscriber: Subscription = new Subscription()
  ngOnInit(): void {
    this.subscriber = this.msgService.getMsg.subscribe(msg => {
      this.handleMsg(msg)
    })
    // 检查是否为鉴宝任务
    if (this.t.taskData.taskId === TaskIds.SiKongZhaiXing_JianBao) {
      this.spTask = 'jb'
      this.talks = taskSKZXJianBaoTalks
      this.currentTalk = this.talks[0]
      this.npc = this.g.getRw(this.t.taskData.rwId)
      this.setActiveTalk(this.currentTalk)
    } else {
      this.init()
    }
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe()
  }
  init() {
    this.talks = taskTalks.find(t => t.id === this.t.taskData.talkId)!.talks
    this.talks = this.t.setTalkContents(this.t.taskData.taskId, this.t.taskData.talkId, this.talks)
    this.setSpecialTalks()
    this.npc = this.g.getRw(this.t.taskData.rwId)
    this.setFirstCurrentTalk()
    const lzxTalkIds = [TaskTalkIds.RenYingYing_YiLiao_1, TaskTalkIds.GuoXiang_FuQin_5, TaskTalkIds.GuoXiang_FuQin_6]
    if (lzxTalkIds.includes(this.t.taskData.talkId)) {
      this.g.current.cityGroup = CityGroupEnum.LvZhuXiang
    }
    setTimeout(() => {
      this.t.isInTask = false
    }, 20)
  }

  setSpecialTalks() {
    if (this.t.taskData.talkId === TaskTalkIds.ChengHao_TianXiaDiYi_1) {
      this.t.generateTxdyRws()
    } else if (this.t.taskData.talkId === TaskTalkIds.ChengHao_TianXiaDiYi_2) {
      this.setTxDyFightRw(0, 4)
    } else if (this.t.taskData.talkId === TaskTalkIds.ChengHao_TianXiaDiYi_4) {
      this.setTxDyFightRw(1, 3)
    } else if (this.t.taskData.talkId === TaskTalkIds.ChengHao_TianXiaDiYi_5) {
      this.setTxDyFightRw(2, 3)
    }
  }

  setTxDyFightRw(txdyRwsIndex: number, id: number) {
    const spNpcId = this.t.txdyRws[txdyRwsIndex]
    const spTalk = this.talks.find(t => t.id === id)
    if (spTalk) {
      spTalk.rwId = spNpcId
      spTalk.fightRwId = spNpcId
    }
    this.g.hero.tl = this.g.hero.tlM
  }

  setFirstCurrentTalk() {
    this.currentTalk = this.talks[0]
    this.setActiveTalk(this.currentTalk)
    this.setSpecialActions()
  }

  setActiveTalk(talk: TaskTalkItem) {
    // console.log(talk)

    this.npcTalk.isActive = talk.type === 'rw'
    this.heroTalk.isActive = !this.npcTalk.isActive
    if (talk.type === 'rw') {
      if (talk.rwId === 0) {
        this.npcTalk.rwId = this.npc.id
      } else {
        this.npcTalk.rwId = talk.rwId as RwIdEnum
      }
      this.npcTalk.text = replaceTalk(talk.text, {})
    } else {
      this.heroTalk.rwId = this.g.hero.id
      this.heroTalk.text = replaceTalk(talk.text, { npcName: this.npc.name })
    }
    if (this.npcTalk.isActive && !this.showNpc) {
      this.showNpc = true
    }
    if (this.heroTalk.isActive && !this.showHero) {
      this.showHero = true
    }
  }

  guideNext() {
    if (this.spTask === 'jb') {
      this.jbNext()
    } else {
      this.baseNext()
    }
  }

  jbNext() {
    if (this.showQa || this.jt.toast.show) {
      return
    }
    if (this.jbStep === 0) {
      this.qaData = clone(jbQa)
      this.showQa = true
      this.jbStep = 1
    } else if (this.jbStep === 2) {
      this.g.addJq(-200 * 1000)
      this.jt.toast = { show: true, type: 'jq', subType: '', content: '金钱减200两', id: 0, nextExit: false }
      this.jbStep = 3
    } else if (this.jbStep === 3) {
      this.jbStep = 4
      const rewardType = sampleItem(['wp', 'zb'] as TaskRewardType[])
      let rewardValue = 1
      if (rewardType === 'wp') {
        const noInIds: number[] = []
        const wpIds = this.g.wps.filter(w => !noInIds.includes(w.id)).map(w => w.id)
        rewardValue = sampleItem(wpIds)
      } else {
        // const noInIds = [ZbIdEnum.HanXue, ZbIdEnum.BenXiao, ZbIdEnum.XiaoShao, ZbIdEnum.ChuZhui]
        const noInIds: ZbIdEnum[] = []
        const zbIds = this.g.zbs.filter(z => !noInIds.includes(z.id)).map(z => z.id)
        rewardValue = sampleItem(zbIds)
      }
      this.t.rewardAction({ type: rewardType, value: rewardValue })
    }
  }

  baseNext() {
    if (this.showQa || this.jt.toast.show) {
      return
    }
    const index = this.talks.findIndex(item => item.id === this.currentTalk.id)
    const nextTalk = this.talks[index + 1]
    // console.log('nextTalk', nextTalk)
    // console.log('this.currentTalk', TaskTalkActions.Qa, this.currentTalk, this.showQa)

    switch (this.currentTalk.actionType) {
      case TaskTalkActions.Qa:
        this.qaData = clone(taskQaItems.find(item => item.id === this.currentTalk.actionValue)!)
        this.showQa = true
        break
      case TaskTalkActions.DengMi:
        this.qaData = clone(dengMiQa)
        const dm = sampleItem(allDms)
        this.qaData.qa.question = dm.q
        dm.a.forEach((a, i) => {
          if (i > 1) {
            this.qaData.qa.answers.push(clone(this.qaData.qa.answers[1]))
          }
          this.qaData.qa.answers[i].text = a
        })
        this.qaData.qa.answers = this.qaData.qa.answers.sort(() => rand() - 0.5)
        this.qaData.qa.answers.forEach((a, i) => {
          a.id = i + 1
        })
        this.showQa = true
        break
      case TaskTalkActions.EndTask:
        if (this.currentTalk.actionValue === TaskEndValueEnum.Fail) {
          this.endWithoutReward(this.t.taskData.stRw, this.t.taskData.taskId)
          this.t.removeTask(this.t.taskData.taskId)
          this.close()
        } else if (this.currentTalk.actionValue === TaskEndValueEnum.FailWithReward) {
          if (this.currentTalk.taskId) {
            this.getFailReward(this.t.taskData.stRw, this.currentTalk.taskId)
            this.t.removeTask(this.currentTalk.taskId)
          } else {
            this.getFailReward(this.t.taskData.stRw, this.t.taskData.taskId)
            this.t.removeTask(this.t.taskData.taskId)
          }
        } else if (this.currentTalk.actionValue === TaskEndValueEnum.Success) {
          if (this.currentTalk.taskId) {
            this.getReward(this.t.taskData.stRw, this.currentTalk.taskId)
            this.t.removeTask(this.currentTalk.taskId)
          } else {
            this.getReward(this.t.taskData.stRw, this.t.taskData.taskId)
            this.t.removeTask(this.t.taskData.taskId)
          }
        }
        break
      case TaskTalkActions.XunBao:
        this.t.taskData.show = false
        this.g.goToPage(PageEnum.GameXb)
        this.g.current.cityGroup = this.g.current.citySS
        this.g.gmData.xb.successTId = this.currentTalk.actionValue || 0
        this.g.gmData.xb.failTId = this.currentTalk.actionFailValue || 0
        break
      case TaskTalkActions.CaiYao:
        this.t.taskData.show = false
        this.g.goToPage(PageEnum.GameCy)
        this.g.current.cityGroup = this.g.current.citySS
        this.g.gmData.cy.successTId = this.currentTalk.actionValue || 0
        this.g.gmData.cy.failTId = this.currentTalk.actionFailValue || 0
        break
      case TaskTalkActions.DuiYi:
        this.t.taskData.show = false
        this.g.current.cityGroup = this.g.current.citySS
        this.g.current.rwIn = this.g.current.citySS
        this.g.goToPage(PageEnum.GameQi)
        this.g.gmData.qi.successTId = this.currentTalk.actionValue || 0
        this.g.gmData.qi.failTId = this.currentTalk.actionFailValue || 0
        break
      case TaskTalkActions.DuBo:
        this.t.taskData.show = false
        this.g.current.cityGroup = CityGroupEnum.DuChang
        if (this.currentTalk.dbRwId) {
          this.g.dbGlobalData.rwId = this.currentTalk.dbRwId
        }
        this.g.dbGlobalData.type = this.currentTalk.dbType || 'tz'
        this.g.goToPage(PageEnum.GameDb)
        this.g.gmData.db.successTId = this.currentTalk.actionValue || 0
        this.g.gmData.db.failTId = this.currentTalk.actionFailValue || 0
        break
      case TaskTalkActions.Hua:
        this.t.taskData.show = false
        this.g.goToPage(PageEnum.GameHua)
        this.g.gmData.hua.target = 60
        this.g.huaTemp.id = this.currentTalk.huaId || 0
        this.g.gmData.hua.successTId = this.currentTalk.actionValue || 0
        this.g.gmData.hua.failTId = this.currentTalk.actionFailValue || 0
        break
      case TaskTalkActions.FuQin:
        this.t.taskData.show = false
        this.g.goToPage(PageEnum.GameQin)
        this.g.gmData.qin.target = 50
        this.g.gmData.qin.successTId = this.currentTalk.actionValue || 0
        this.g.gmData.qin.failTId = this.currentTalk.actionFailValue || 0
        break
      case TaskTalkActions.Fight:
        this.t.taskData.show = false
        this.g.fight.type = 'tsk'
        this.g.fight.rw = this.g.getRw(this.currentTalk.fightRwId || RwIdEnum.DianXiaoEr)
        this.g.gmData.ft.successTId = this.currentTalk.actionValue || 0
        this.g.gmData.ft.failTId = this.currentTalk.actionFailValue || 0
        this.g.goToPage(PageEnum.Fight)
        break
      case TaskTalkActions.DaLie:
        this.t.taskData.show = false
        this.g.goToPage(PageEnum.GameDl)
        this.g.gmData.dl.target = 15
        if (this.currentTalk.dlType === 'zyhb') {
          this.g.gmData.dl.type = 'zyhb'
        } else {
          this.g.gmData.dl.type = 'normal'
        }
        this.g.gmData.dl.successTId = this.currentTalk.actionValue || 0
        this.g.gmData.dl.failTId = this.currentTalk.actionFailValue || 0
        break
        break
      case TaskTalkActions.ZuoYouHuBoDaLie:
        this.t.taskData.show = false
        // this.mapService.moveToMap(CityIdEnum.ShaoLin, false, false, true)
        this.mapService.moveToMap(CityIdEnum.ShaoLin, { notEnterCity: true })
        setTimeout(() => {
          // 打猎
          this.g.gmData.dl.type = 'zyhb'
          this.g.gmData.dl.target = 16
          this.g.goToPage(PageEnum.GameDl)
          this.g.gmData.dl.successTId = this.currentTalk.actionValue || 0
          this.g.gmData.dl.failTId = this.currentTalk.actionFailValue || 0
        }, 2900)
        break
      case TaskTalkActions.Move: {
        this.t.taskData.show = false
        this.mapService.moveToMap(this.currentTalk.moveToCity!, {})
        const delayTime = this.g.current.city.id === this.currentTalk.moveToCity! ? 1900 : 2900
        setTimeout(() => {
          this.g.current.cityGroup = this.currentTalk.moveToCityGroup!
          this.g.current.citySS = this.currentTalk.moveToCityGroup!
          this.g.current.rwIn = this.currentTalk.moveToCityGroup!
          this.t.taskData.talkId = this.currentTalk.actionValue!
          this.t.taskData.show = true
        }, delayTime)
        break
      }
      case TaskTalkActions.Talk:
        this.t.taskData.show = false
        setTimeout(() => {
          this.t.taskData.talkId = this.currentTalk.actionValue!
          this.t.taskData.show = true
        }, 0)
        break
      case TaskTalkActions.MiGong:
        this.t.taskData.show = false
        // 迷宫
        this.g.gmData.mg.canBack = false
        this.g.gmData.mg.successTId = this.currentTalk.actionValue || 0
        this.g.gmData.mg.failTId = this.currentTalk.actionFailValue || 0
        this.g.goToPage(PageEnum.GameMg)
        break
      case TaskTalkActions.LaoSi:
        this.t.taskData.show = false
        this.g.od.texts = gameoverTexts[GameoverEnum.LaoSi]
          .replace(/\[zj\]/g, this.g.hero.name)
          .replace(/\“/g, '﹃')
          .replace(/\”/g, '﹄')
        this.g.od.show = true
        this.g.goToPage(PageEnum.Home)
        break
      default:
        if (nextTalk) {
          this.currentTalk = nextTalk
          this.setActiveTalk(this.currentTalk)
        } else {
          this.close()
        }
        break
    }

    this.setSpecialActions()

    if (!nextTalk) {
      if (this.currentTalk.minusJq && this.currentTalk.minusJq > 0) {
        this.g.useJq(this.currentTalk.minusJq)
      }
      if (this.currentTalk.rmWps && this.currentTalk.rmWps.length > 0) {
        // console.log(this.g.hero.wps)
        this.currentTalk.rmWps.forEach(w => {
          this.g.removeWp(w.wpId, w.value)
        })
        // console.log(this.g.hero.wps)
      }
      if (this.currentTalk.upAge && this.currentTalk.upAge > 0) {
        this.g.hero.age += this.currentTalk.upAge
      }
      if (this.currentTalk.upTime && this.currentTalk.upTime > 0) {
        this.g.addTimeHH(this.currentTalk.upTime)
      }
      if (this.currentTalk.upTl && this.currentTalk.upTl > 0) {
        this.g.addTl(this.currentTalk.upTl)
      }
      if (this.currentTalk.sjydtlm) {
        // ** 武功+1/+2 内功 40%概率+1 轻功 40%概率+1
        this.g.addWg(randInt(1, 2))
        if (rand() < 0.4) this.g.addWy('ng', 1)
        if (rand() < 0.45) this.g.addWy('qg', 1)
      }
    }
  }

  setSpecialActions() {
    if (this.currentTalk.setKey && this.currentTalk.setKey.length > 0) {
      this.currentTalk.setKey.forEach(k => {
        this.g.getKey(k.keyId).value = k.value
      })
    }
    if (this.currentTalk.setKeyDay && this.currentTalk.setKeyDay.length > 0) {
      this.currentTalk.setKeyDay.forEach(k => {
        this.g.getKey(k.keyId).value = getTimeDay(this.g.hero.age, this.g.hero.time)
      })
    }
    if (this.currentTalk.setCity) {
      this.g.current.city = this.g.getCity(this.currentTalk.setCity)
    }
    if (this.currentTalk.setCityGroup) {
      this.g.current.cityGroup = this.currentTalk.setCityGroup
      this.g.current.citySS = this.currentTalk.setCityGroup
      this.g.current.rwIn = this.currentTalk.setCityGroup
      this.g.current.preCityGroup = this.currentTalk.setCityGroup
    }
    if (this.currentTalk.hideNpc) {
      this.showNpc = false
    }

    if (this.currentTalk.type === 'zj') {
      this.showHeroAvatar = !this.currentTalk.hideHeroAvatar
      if (this.currentTalk.hideNpc) {
        this.showNpc = false
      }
      this.showHero = !this.currentTalk.hideHero
    } else if (this.currentTalk.type === 'rw') {
      this.showNpcAvatar = !this.currentTalk.hideNpcAvatar
      if (this.currentTalk.hideHero) {
        this.showHero = false
      }
      this.showNpc = !this.currentTalk.hideNpc
    }
  }

  getReward(rwId: RwIdEnum, taskId: TaskIds) {
    const task = this.g.getTsk(rwId)!.tasks.find(t => t.id === taskId) || this.g.getTsk(RwIdEnum.NoBody)!.tasks.find(t => t.id === taskId)
    // console.log('task', task)
    if (task) {
      this.g.addSw(1)
      const reward = task.reward
      this.t.rewardActions(reward)
      this.checkEndTaskActions(task)
    }
  }

  getFailReward(rwId: RwIdEnum, taskId: TaskIds) {
    const task = this.g.getTsk(rwId)!.tasks.find(t => t.id === taskId) || this.g.getTsk(RwIdEnum.NoBody)!.tasks.find(t => t.id === taskId)
    // console.log('task', task)
    if (task && task.failReward) {
      this.g.addSw(-1)
      const reward = task.failReward
      this.t.rewardActions(reward)
      this.checkEndTaskActions(task, true)
    }
  }

  endWithoutReward(rwId: RwIdEnum, taskId: TaskIds) {
    const task = this.g.getTsk(rwId)!.tasks.find(t => t.id === taskId) || this.g.getTsk(RwIdEnum.NoBody)!.tasks.find(t => t.id === taskId)
    if (task) {
      this.checkEndTaskActions(task, true)
    }
  }

  checkEndTaskActions(task: TaskItem, isFail = false) {
    if (task.endSetKey && !isFail) {
      task.endSetKey.forEach(k => {
        this.g.getKey(k.keyId).value = k.value
      })
    }
    if (task.endFailSetKey && isFail) {
      task.endFailSetKey.forEach(k => {
        this.g.getKey(k.keyId).value = k.value
      })
    }
    if (task.endAddTsk) {
      this.t.addTask(task.endAddTsk)
    }
  }

  handleMsg(msg: Msg) {
    if (msg.type === 'toast' && !msg.status) {
      if (this.t.nextRewards.length > 0) {
        this.t.rewardActions(this.t.nextRewards)
      } else if (this.jt.toast.nextExit) {
        // console.log('nextExit', this.jt.toast.nextExit)

        if (this.spTask === 'jb') {
          this.g.current.cityGroup = this.g.current.preCityGroup
          if (this.g.hero.jq < 0) {
            this.g.hero.jq = 0
            this.g.current.cityGroup = CityGroupEnum.QiTao
          }
        }
        this.jt.toast.nextExit = false
        this.close()
      }
    }
  }

  answer(answer: TaskAnswerItem, $event: MouseEvent) {
    switch (answer.actionType) {
      case TaskAnswerActions.ToTaskTalkId:
        const taskTalkId = sampleItem(answer.actionValue)
        this.talks = taskTalks.find(t => t.id === taskTalkId)!.talks
        this.talks = this.t.setTalkContents(this.t.taskData.taskId, taskTalkId, this.talks)
        this.currentTalk = this.talks[0]
        this.setActiveTalk(this.currentTalk)
        this.showQa = false
        break
      case TaskAnswerActions.JianBao:
        this.showQa = false
        this.currentTalk = { id: 0, taskId: TaskIds.SiKongZhaiXing_JianBao, rwId: 0, type: 'zj', text: '好，买了！' }
        this.setActiveTalk(this.currentTalk)
        this.jbStep = 2
        break
      case TaskAnswerActions.Exit:
        this.showQa = false
        this.close()
        break
      case TaskAnswerActions.EndTask:
        if (answer.actionValue[0] === TaskEndValueEnum.Fail) {
          this.endWithoutReward(this.t.taskData.stRw, this.t.taskData.taskId)
          this.t.removeTask(this.t.taskData.taskId)
          this.showQa = false
          this.close()
        } else if (answer.actionValue[0] === TaskEndValueEnum.FailWithReward) {
          this.showQa = false
          this.getFailReward(this.t.taskData.stRw, this.t.taskData.taskId)
          this.t.removeTask(this.t.taskData.taskId)
        } else if (answer.actionValue[0] === TaskEndValueEnum.Success) {
          this.showQa = false
          this.getReward(this.t.taskData.stRw, this.t.taskData.taskId)
          this.t.removeTask(this.t.taskData.taskId)
        }

        break

      default:
        break
    }

    this.setSpecialActions()

    $event.stopPropagation()
    $event.preventDefault()
  }

  setSpecialCityGroupBeforeExit() {
    const toMinJiaIds = [TaskTalkIds.RenYingYing_YiLiao_4, TaskTalkIds.WangXiaoShi_WanLiuJian_3]
    if (toMinJiaIds.includes(this.t.taskData.talkId)) {
      this.g.current.cityGroup = CityGroupEnum.MinJia
    }
  }

  close() {
    this.setSpecialCityGroupBeforeExit()
    this.t.taskData.show = false
    if (this.g.current.cityGroup !== CityGroupEnum.RenWu && this.g.hero.tsks.find(t => t.stRw === RwIdEnum.DianXiaoEr)) {
      setTimeout(() => {
        // console.log('pop-task.component.ts close() this.t.enterSSCheck(this.g.current.cityGroup)')
        this.t.enterSSCheck(this.g.current.cityGroup)
      }, 0)
    }
    this.closePop.emit()
  }
}

/** jb 鉴宝 */
type SpTaskType = 'none' | 'jb'
