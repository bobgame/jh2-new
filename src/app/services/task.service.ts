import { Injectable } from '@angular/core'
import { RwIdEnum } from '../constants/enums/rw.enum'
import { GlobalService } from './global.service'
import { GmTaskData, TaskItem, TaskItemNeed, TaskItemNeedRule, TaskReward, TaskTalk, TaskTalkItem } from '../data/tasks/task.interface'
import { clone, rand100, sampleItem } from '../units/Base'
import { TaskIds, TaskTalkIds, TaskType } from '../data/tasks/task.enum'
import { HeroTask, PersonJn, personJnKeys } from '../data/hero'
import { taskTalks } from '../data/tasks/task-talks'
import { CityGroupEnum, HeroIdEnum, PageEnum } from '../constants/enums/base.enum'
import { getTimeDay, getTimeValue } from '../units/time'
import { JhToastService } from './jh-toast.service'
import { KeyIds } from '../data/tasks/keys.interface'
import { WpIdEnum } from '../constants/enums/wp.enum'
import { ZbIdEnum } from '../constants/enums/zb.enum'
import { MjIdEnum } from '../constants/enums/mj.enum'
import { GameoverEnum, gameoverTexts } from '../data/gameover'

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(
    private g: GlobalService,
    private jt: JhToastService,
  ) {}

  taskData = {
    show: false,
    stRw: RwIdEnum.DianXiaoEr,
    rwId: RwIdEnum.DianXiaoEr,
    taskId: TaskIds.DianXiaoEr_ZhaoRen,
    talkId: TaskTalkIds.DianXiaoEr_ZhaoRen_1,
  }

  ssRws: RwIdEnum[] = []

  nextRewards: TaskReward[] = []

  isInTask = false

  txdyRws: RwIdEnum[] = []

  showTask(stRw: RwIdEnum, rwId: RwIdEnum, taskId: TaskIds, talkId: TaskTalkIds) {
    this.taskData.stRw = stRw
    this.taskData.rwId = rwId
    this.taskData.taskId = taskId
    this.taskData.talkId = talkId
    this.taskData.show = true
  }

  addTask(heroTask: HeroTask) {
    this.g.addTask(heroTask)
  }

  updateTask(heroTask: HeroTask) {
    // console.log(heroTask, 'to rw name: ', this.g.getRw(heroTask.toRw).name)
    const thisTask = this.g.hero.tsks.find(t => t.stRw === heroTask.stRw)
    if (thisTask) {
      thisTask.toRw = heroTask.toRw
      thisTask.talkId = heroTask.talkId
      thisTask.backRw = heroTask.backRw
    }
  }

  removeTask(id: TaskIds) {
    const index = this.g.hero.tsks.findIndex(t => t.id === id)
    if (index !== -1) {
      this.g.hero.tsks.splice(index, 1)
    }
  }

  generateTxdyRws() {
    this.txdyRws = []
    const tempRws = this.g.rws.filter(r => r.wg > 80 && r.wy.ng > 4 && r.id !== RwIdEnum.WuMingLaoSeng && r.id !== this.g.getHeroInRwId())
    this.txdyRws.push(sampleItem(tempRws).id)
    const tempRws2 = tempRws.filter(r => r.wg > 85 && r.wy.ng > 5 && !this.txdyRws.includes(r.id))
    this.txdyRws.push(sampleItem(tempRws2).id)
    const tempRws3 = tempRws2.filter(r => r.wg > 90 && r.wy.ng > 5 && !this.txdyRws.includes(r.id))
    this.txdyRws.push(sampleItem(tempRws3).id)
    // console.log(tempRws, tempRws2, tempRws3)
  }

  checkNoBodyTasks() {
    // console.log('checkNoBodyTasks')

    if (this.isInTask) return
    const noBodyTasks = this.g.getTsk(RwIdEnum.NoBody)
    if (noBodyTasks) {
      noBodyTasks.tasks.forEach(t => {
        const randNum100 = rand100()
        // console.log('checkNoBodyTasks', t, randNum100)
        if (randNum100 < t.rate && t.allNeed && this.checkTaskNeed(t.allNeed, RwIdEnum.NoBody)) {
          switch (t.talkId) {
            case TaskTalkIds.NoTalkHuanShiBiShen:
              this.taskHuanShiBiShen()
              break
            case TaskTalkIds.NoTalkJiuYangZhenJing:
              this.taskJiuYangZhenJing()
              break
            default:
              this.showTask(RwIdEnum.NoBody, RwIdEnum.NoBody, t.id, t.talkId)
              break
          }
        }
      })
    }
  }

  taskHuanShiBiShen() {
    this.addTask({
      stRw: RwIdEnum.NoBody,
      id: TaskIds.NoBody_HuanShiBiShen,
      toRw: RwIdEnum.NoBody,
      talkId: TaskTalkIds.NoTalkHuanShiBiShen,
    })
    this.g.gmData.xb.successTId = TaskTalkIds.HuanShiBiShen_talk_1
    this.g.gmData.xb.failTId = TaskTalkIds.HuanShiBiShen_talk_1
    this.g.getKey(KeyIds.HuanShiBiShen_1).value = 1
    this.g.goToPage(PageEnum.GameXb)
  }

  taskJiuYangZhenJing() {
    this.addTask({
      stRw: RwIdEnum.NoBody,
      id: TaskIds.NoBody_JiuYangZhenJing,
      toRw: RwIdEnum.NoBody,
      talkId: TaskTalkIds.NoTalkJiuYangZhenJing,
    })
    this.g.gmData.mg.canBack = true
    this.g.gmData.mg.successTId = TaskTalkIds.NoTalkJiuYangZhenJing_toDL
    this.g.gmData.mg.failTId = TaskTalkIds.NoTalkJiuYangZhenJing_removeTask
    this.g.getKey(KeyIds.JiuYangZhenJing_1).value = 1
    this.g.goToPage(PageEnum.GameMg)
  }

  rewardActions(rewards: TaskReward[]) {
    this.rewardAction(rewards[0])
    if (rewards.length > 1) {
      this.nextRewards = rewards.slice(1)
    } else {
      this.nextRewards = []
    }
  }

  rewardAction(reward: TaskReward) {
    switch (reward.type) {
      case 'jq':
        this.g.addJq(reward.value as number)
        this.jt.toast = {
          show: true,
          type: 'jq',
          subType: '',
          content: `金钱加${Math.floor((reward.value as number) / 1000)}两`,
          id: 0,
          nextExit: true,
        }
        break
      case 'zj': {
        this.g.addZj(reward.value as HeroIdEnum)
        this.jt.toast = {
          show: true,
          type: 'zj',
          subType: '',
          content: `得到：${this.g.getZj(reward.value as HeroIdEnum).name}`,
          id: reward.value as HeroIdEnum,
          nextExit: true,
        }
        break
      }
      case 'rw':
        this.g.addRw(reward.value as RwIdEnum)
        this.jt.toast = {
          show: true,
          type: 'rw',
          subType: '',
          content: `得到：${this.g.getRw(reward.value as RwIdEnum).name}`,
          id: reward.value as RwIdEnum,
          nextExit: true,
        }
        break
      case 'jn':
        this.g.addJn(reward.value as keyof PersonJn)
        this.jt.toast = {
          show: true,
          type: 'jn',
          subType: '',
          content: `得到：${this.g.getJn(reward.value as keyof PersonJn).name}`,
          id: reward.value,
          nextExit: true,
        }
        break
      case 'wp':
        this.g.addWp(reward.value as WpIdEnum)
        this.jt.toast = {
          show: true,
          type: 'wp',
          subType: '',
          content: `得到：${this.g.getWp(reward.value as WpIdEnum).name}`,
          id: reward.value as WpIdEnum,
          nextExit: true,
        }
        break
      case 'zb':
        this.g.addZb(reward.value as ZbIdEnum)
        this.jt.toast = {
          show: true,
          type: 'zb',
          subType: '',
          content: `得到：${this.g.getZb(reward.value as ZbIdEnum).name}`,
          id: reward.value as ZbIdEnum,
          nextExit: true,
        }
        break
      case 'mj':
        this.g.addMj(reward.value as MjIdEnum)
        this.jt.toast = {
          show: true,
          type: 'mj',
          subType: '',
          content: `得到：${this.g.getMj(reward.value as MjIdEnum).name}`,
          id: reward.value as MjIdEnum,
          nextExit: true,
        }
        break
      case 'ch':
        this.g.addCh(reward.value as number)
        this.g.od.texts = gameoverTexts[reward.value as GameoverEnum]
          .replace(/\[zj\]/g, this.g.hero.name)
          .replace(/\“/g, '﹃')
          .replace(/\”/g, '﹄')
        this.g.od.show = true
        this.jt.toast = {
          show: true,
          type: 'ch',
          subType: '',
          content: `得到：${this.g.getCh(reward.value as number).name}`,
          id: reward.value as number,
          nextExit: true,
        }
        break
      case 'none':
        this.taskData.show = false
        this.g.resetGmData()
        break
      default:
        break
    }
  }

  winCheck(rwId: RwIdEnum) {
    if (this.isInTask) return false
    let isShow = false
    const rwTsks = this.g.getTsk(rwId)
    if (rwTsks) {
      rwTsks.tasks.forEach(t => {
        const randNum100 = rand100()
        // console.log('winCheck', t, randNum100)
        if (!isShow && !isShow && randNum100 < t.rate && t.type === 'win' && t.allNeed && this.checkTaskNeed(t.allNeed, rwId)) {
          if (t.talkId === TaskTalkIds.NoTalkThenReward) {
            this.rewardActions(t.reward)
            if (t.endSetKey) {
              t.endSetKey.forEach(k => {
                this.g.getKey(k.keyId).value = k.value
              })
            }
            isShow = true
          }
          // this.showTask(rwId, rwId, t.id, t.talkId)
        }
      })
    }
    return isShow
  }

  enterSSCheck(cityGroup: CityGroupEnum) {
    if (this.isInTask) return
    if (cityGroup === CityGroupEnum.JiuGuan) {
      this.ssRws.push(RwIdEnum.DianXiaoEr)
    }
    // check if some ss type task can show
    let isShowSSTask = false
    this.ssRws.forEach(rwId => {
      const rwTsks = this.g.getTsk(rwId)
      isShowSSTask = this.enterRwCheck(rwId, 'ss')
    })

    if (!isShowSSTask) {
      // check if someone in task
      const inTask = this.g.hero.tsks.find(t => this.ssRws.includes(t.toRw))
      if (inTask) {
        this.showTask(inTask.stRw, inTask.toRw, inTask.id, inTask.talkId)
      } else {
        this.checkNoBodyTasks()
      }
    }
  }

  enterRwCheck(rwId: RwIdEnum, type: TaskType = 'rw') {
    if (this.isInTask) return false
    let isShow = false
    // console.log('enterRwCheck', rwId, type)
    const rwTsks = this.g.getTsk(rwId)
    // console.log(rwTsks)

    if (rwTsks) {
      // check if has task
      const hasTask = this.g.hero.tsks.some(t => t.stRw === rwId && !t.isPreAdd)
      if (!hasTask) {
        rwTsks.tasks.forEach(t => {
          const randNum100 = rand100()
          // console.log('enterRwCheck', t, randNum100)
          if (!isShow && randNum100 < t.rate && t.type === type && !t.isPreAdd && t.allNeed && this.checkTaskNeed(t.allNeed, rwId)) {
            this.showTask(rwId, rwId, t.id, t.talkId)
            // console.log(`rwId, rwId, t.id, t.talkId ${this.g.getRw(rwId).name} ${this.g.getRw(rwId).name}`)
            isShow = true
          }
        })
      }
    }
    return isShow
  }

  setTalkContents(taskId: TaskIds, talkId: TaskTalkIds, talks: TaskTalkItem[]) {
    const tempTalks = clone(talks)
    if (taskId === TaskIds.DianXiaoEr_ZhaoRen) {
      if (talkId === TaskTalkIds.DianXiaoEr_ZhaoRen_2 || talkId === TaskTalkIds.DianXiaoEr_ZhaoRen_5) {
        // < id 300
        const rwsTemp = this.g.rws.filter(r => r.id < 300)
        const randRw = clone(sampleItem(rwsTemp))
        tempTalks.forEach(t => {
          t.text = t.text.replace('[rwName]', `[red]${randRw.name}[/red]`)
        })
        this.addTask({
          stRw: RwIdEnum.DianXiaoEr,
          id: TaskIds.DianXiaoEr_ZhaoRen,
          toRw: randRw.id,
          talkId: talkId + 1,
        })
      } else if (talkId === TaskTalkIds.DianXiaoEr_ZhaoRen_3) {
        const inHeroTask = this.g.hero.tsks.find(t => t.stRw === RwIdEnum.DianXiaoEr)
        // console.log(inHeroTask)
        this.updateTask({
          stRw: RwIdEnum.DianXiaoEr,
          id: TaskIds.DianXiaoEr_ZhaoRen,
          toRw: RwIdEnum.DianXiaoEr,
          talkId: TaskTalkIds.DianXiaoEr_ZhaoRen_4,
          backRw: inHeroTask!.toRw,
        })
      } else if (talkId === TaskTalkIds.DianXiaoEr_ZhaoRen_4) {
        const inHeroTask = this.g.hero.tsks.find(t => t.stRw === RwIdEnum.DianXiaoEr)!
        const toName = this.g.getRw(inHeroTask.backRw!).name
        tempTalks.forEach(t => {
          t.text = t.text.replace('[rwName]', `[red]${toName}[/red]`)
        })
      }
    }
    // console.log(tempTalks)
    return tempTalks
  }

  jianBao() {
    this.showTask(RwIdEnum.SiKongZhaiXing, RwIdEnum.SiKongZhaiXing, TaskIds.SiKongZhaiXing_JianBao, TaskTalkIds.SiKongZhaiXing_JianBao)
  }

  checkTaskNeed(allNeeds: TaskItemNeed[][], rwId: RwIdEnum) {
    if (allNeeds.length === 0) {
      return false
    }
    // console.log(RwIdEnum[rwId])
    // console.log(typeof allNeeds)
    let isNeed = false
    allNeeds.forEach(needs => {
      if (this.getSimpleTaskNeedResult(needs, rwId)) {
        isNeed = true
      }
    })
    return isNeed
  }

  getSimpleTaskNeedResult(needs: TaskItemNeed[], rwId: RwIdEnum) {
    let isNeed = true
    needs.forEach(n => {
      if (isNeed) {
        switch (n.type) {
          case 'key':
            isNeed = this.checkTaskRule(n.rule, this.g.getKey(n.value[0]).value, n.value[1])
            // console.log(`key isNeed: ${isNeed}`)
            break
          case 'heart':
            isNeed = this.checkTaskRule(n.rule, this.g.getRw(rwId).heart, n.value[0])
            // console.log(`heart isNeed: ${isNeed}`)
            break
          case 'rwHeart':
            isNeed = this.checkTaskRule(n.rule, this.g.getRw(n.value[0]).heart, n.value[1])
            // console.log(`heart isNeed: ${isNeed}`)
            break
          case 'city':
            isNeed = this.checkTaskRule(n.rule, this.g.current.city.id, n.value[0])
            break
          case 'cityGroup':
            if (n.rule === '=') {
              isNeed = n.value.includes(this.g.current.cityGroup)
            } else {
              isNeed = this.checkTaskRule(n.rule, this.g.current.cityGroup, n.value[0])
            }
            // console.log(`cityGroup isNeed: ${isNeed}, current city group: ${CityGroupEnum[this.g.current.cityGroup]}`)
            break
          case 'citySS':
            if (n.rule === '=') {
              isNeed = n.value.includes(this.g.current.citySS)
            } else {
              isNeed = this.checkTaskRule(n.rule, this.g.current.citySS, n.value[0])
            }
            // console.log(`citySS isNeed: ${isNeed}, current city ss: ${CityGroupEnum[this.g.current.citySS]}`)
            break
          case 'time':
            isNeed = this.checkTaskRule(
              n.rule,
              getTimeValue(0, this.g.hero.time),
              getTimeValue(0, { mm: n.value[1], dd: n.value[2], hh: n.value[3] }),
            )
            break
          case 'day':
            isNeed = this.checkTaskRule(n.rule, this.g.hero.time.dd, n.value[0])
            break
          case 'keyDay':
            if (this.g.getKey(n.value[0]).value === 0) {
              isNeed = false
            } else {
              const keyDay = this.g.getKey(n.value[0]).value + n.value[1]
              const now = getTimeDay(this.g.hero.age, this.g.hero.time)
              isNeed = this.checkTaskRule(n.rule, now, keyDay)
            }
            break
          case 'yearTime':
            isNeed = this.checkTaskRule(
              n.rule,
              getTimeValue(this.g.hero.age - 23, this.g.hero.time),
              getTimeValue(n.value[0], { mm: n.value[1], dd: n.value[2], hh: n.value[3] }),
            )
            break
          case 'zj':
            isNeed = this.checkTaskRule(n.rule, this.g.hero.id, n.value[0])
            break
          case 'mj':
            isNeed = this.checkTaskRule(n.rule, this.g.hero.mjs.includes(n.value[0]) ? n.value[0] : -1, n.value[0])
            break
          case 'year':
            isNeed = this.checkTaskRule(n.rule, this.g.hero.age, n.value[0])
            break
          case 'month':
            isNeed = this.checkTaskRule(n.rule, this.g.hero.time.mm, n.value[0])
            break
          case 'year3':
            isNeed = this.checkTaskRule(n.rule, this.g.hero.age % 3, n.value[0])
            break
          case 'jq':
          case 'wg':
          case 'sw':
          case 'tl':
            isNeed = this.checkTaskRule(n.rule, this.g.hero[n.type], n.value[0])
            break
          case 'ng':
          case 'qg':
          case 'jf':
          case 'gf':
          case 'zf':
          case 'aq':
            isNeed = this.checkTaskRule(n.rule, this.g.hero.wy[n.type], n.value[0])
            break
          case 'tq':
          case 'yr':
          case 'zc':
          case 'dl':
          case 'xb':
          case 'fq':
          case 'sy':
          case 'yl':
            isNeed = this.checkTaskRule(n.rule, this.g.hero.jn[n.type], n.value[0])
            break
          case 'wp':
            const tempWp = this.g.hero.wps.find(w => w.id === n.value[0])
            const tempWpCount = tempWp ? tempWp.count : 0
            isNeed = this.checkTaskRule(n.rule, tempWpCount, n.value[1])
            break
          case 'cyS':
            const cySuccessCount = this.g.getKey(KeyIds.Count_CaiYao_Success).value
            isNeed = this.checkTaskRule(n.rule, cySuccessCount, n.value[0])
            break
          case 'xbS':
            const xbSuccessCount = this.g.getKey(KeyIds.Count_XunBao_Success).value
            isNeed = this.checkTaskRule(n.rule, xbSuccessCount, n.value[0])
            break
          case 'dlS':
            const dlSuccessCount = this.g.getKey(KeyIds.Count_DaLie_Success_Hit).value
            // console.log('dlSuccessCount', dlSuccessCount, n.value[0])

            isNeed = this.checkTaskRule(n.rule, dlSuccessCount, n.value[0])
            break
          case 'cHeart':
            let getTotalHeart = 0
            this.g.rws.forEach(r => {
              if (r.heart >= 100) {
                getTotalHeart += 3
              } else if (r.heart >= 50) {
                getTotalHeart += 2
              } else if (r.heart >= 25) {
                getTotalHeart += 1
              }
            })
            isNeed = this.checkTaskRule(n.rule, getTotalHeart, n.value[0])
            break
          case 'dbW':
            const dbWin = this.g.getKey(KeyIds.Count_DuBo_Win_JQ).value
            const dbLose = this.g.getKey(KeyIds.Count_DuBo_Lose_JQ).value
            const dbW = dbWin - dbLose
            isNeed = this.checkTaskRule(n.rule, dbW, n.value[0])
            break
          default:
            break
        }
      }
    })
    return isNeed
  }

  checkTaskRule(rule: TaskItemNeedRule, value: number, target: number) {
    switch (rule) {
      case '>':
        return value > target
      case '<':
        return value < target
      case '=':
        return value === target
      case '!=':
        return value !== target
      case '>=':
        return value >= target
      case '<=':
        return value <= target
    }
  }
}
