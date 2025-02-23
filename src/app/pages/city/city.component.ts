import { CommonModule } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { HeaderComponent } from '../../common/ui/header/header.component'
import { GlobalService } from '../../services/global.service'
import { PopMenuComponent } from '../../common/pop/pop-menu/pop-menu.component'
import { BtnNpcComponent } from '../../common/ui/btn-npc/btn-npc.component'
import { PopPropsComponent } from '../../common/pop/pop-props/pop-props.component'
import { CityGroupEnum, PageEnum } from '../../constants/enums/base.enum'
import { CityNamePipe } from '../../pipes/city-name.pipe'
import { clone, getKeyByValue, getSSKey, rand, randInt, sampleItem } from '../../units/Base'
import { RwIdEnum } from '../../constants/enums/rw.enum'
import { RwItem } from '../../data/rw'
import { PopTalkComponent } from '../../common/pop/pop-talk/pop-talk.component'
import { UiCityBgComponent } from '../../common/ui/ui-city-bg/ui-city-bg.component'
import { normalCityDefault, ssGroupMap, cityGroupNames, citySheShiImages } from './city-data'
import { MapService } from '../../services/map.service'
import { CityIdEnum } from '../../constants/enums/city.enum'
import { DbType, NoticeData, TalkData, XlType } from '../../constants/interfaces/base.interface'
import { UiProgressComponent } from '../../common/ui/ui-progress/ui-progress.component'
import { UiNoticeComponent } from '../../common/ui/ui-notice/ui-notice.component'
import { CityCroupKeyType, CitySSItem } from '../../constants/interfaces/city.interface'
import { CityService } from '../../services/city.service'
import { TaskService } from '../../services/task.service'
import { PopTaskComponent } from '../../common/pop/pop-task/pop-task.component'
import { environment } from '../../../environments/environment'
import { MsgService } from '../../services/msg.service'
import { JhToastService } from '../../services/jh-toast.service'
import { KeyIds } from '../../data/tasks/keys.interface'
import { Subscription } from 'rxjs'
import { WpIdEnum } from '../../constants/enums/wp.enum'
import { getTimeDay } from '../../units/time'

@Component({
  selector: 'jh-city',
  imports: [
    CommonModule,
    UiCityBgComponent,
    HeaderComponent,
    PopMenuComponent,
    BtnNpcComponent,
    PopPropsComponent,
    PopTalkComponent,
    CityNamePipe,
    UiProgressComponent,
    UiNoticeComponent,
    PopTaskComponent,
  ],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
})
export class CityComponent implements OnInit, OnDestroy {
  constructor(
    public g: GlobalService,
    private m: MapService,
    private c: CityService,
    public t: TaskService,
    private jt: JhToastService,
    private msgService: MsgService,
  ) {}

  showMenu = false
  showDPLB = true
  showMJZZ = false
  showZZFQ = false
  isXiaoDao = false

  noticeData: NoticeData = {
    show: false,
    content: '',
  }
  progressData = {
    show: false,
    value: 0,
  }

  ssGroupMap = ssGroupMap

  CityGroupEnum = CityGroupEnum

  citySheShiImages = citySheShiImages
  cityGroupNames = cityGroupNames

  normalCityDefault = clone(normalCityDefault)

  currentNormalCity = [{ name: '郊外', key: 'jw' }]
  currentSheShiRws = [{ id: 1, name: '苏樱', type: 'rw', subId: RwIdEnum.SuYing }]
  currentRwActions: CitySSItem[] = [{ id: 1, name: '绘画', key: 'hua' }]
  allBJCities: { id: CityIdEnum; name: string }[] = []

  propsData: PropsDataInCity = {
    show: false,
    type: 'rw',
    npc: this.g.getRw(1),
  }

  talkData: TalkData = {
    show: false,
    npc: this.g.getRw(1),
    talkType: 'bc',
  }

  subscriber: Subscription = new Subscription()
  ngOnInit(): void {
    this.subscriber = this.msgService.getMsg.subscribe(msg => {
      if (msg.type === 'fight') {
        this.exitNpc()
      } else if (msg.type === 'tqToast') {
        this.g.show.hideInfo = false
        this.exitNpc()
      }
    })

    if (!environment.production) {
      // this.g.hero.jq = 100000 * 1000

      // this.g.hero.jn.dl = 1
      // this.g.hero.jn.xb = 1
      // this.g.hero.jn.fq = 1
      // this.g.hero.jn.yl = 1
      // this.g.hero.jn.yr = 1
      // this.g.hero.wg = 12
      // this.g.hero.sw = 25
      // this.g.hero.wy.gf = 5

      // this.g.hero.age = 60

      // this.g.hero.time = { mm: 8, dd: 14, hh: 10 }
      // this.g.hero.time = { mm: 2, dd: 29, hh: 10 }
      // this.g.hero.time = { mm: 1, dd: 29, hh: 10 }
      // for test
      // this.g.addTimeHH(12 * 30 * 4)

      this.g.getRw(RwIdEnum.HuaManLou).heart = 100
      this.g.hero.jn.tq = 1
      // this.g.hero.wg = 94
      // this.g.hero.sw = 41
      // this.g.hero.sw = 41

      // { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 40] },
      //   { type: 'keyDay', rule: '>=', value: [KeyIds.XiMenChuiXue_ZJ_Day_Check, 3] },
      //   { type: 'citySS', rule: '=', value: [CityGroupEnum.ZiZhai] },
      //   { type: 'tl', rule: '>=', value: [100] },
      // this.g.getKey(KeyIds.XiMenChuiXue_ZJ_Main).value = 40
      // this.g.hero.time = { mm: 3, dd: 25, hh: 10 }
      // const testTime = { mm: 3, dd: 20, hh: 10 }
      // this.g.getKey(KeyIds.XiMenChuiXue_ZJ_Day_Check).value = getTimeDay(this.g.hero.age, testTime)

      // this.g.getKey(KeyIds.WuQing_ZJ_Main).value = 15
      // this.g.getKey(KeyIds.WuQing_ZJ_JingCheng_LengXie).value = 5
      // this.g.getKey(KeyIds.WuQing_ZJ_JingCheng_TieShou).value = 5
      // this.g.getKey(KeyIds.WuQing_ZJ_JingCheng_ZhuiMing).value = 5
      // // this.g.hero.jn.xb = 1
      // this.g.getRw(RwIdEnum.SuYing).heart = 100
      // this.g.hero.time = { mm: 3, dd: 25, hh: 9 }
      // const testTime = { mm: 3, dd: 20, hh: 10 }
      // this.g.getKey(KeyIds.WuQing_ZJ_Day_Check_LengXie).value = getTimeDay(this.g.hero.age, testTime)
      // this.g.getKey(KeyIds.WuQing_ZJ_Day_Check_TieShou).value = getTimeDay(this.g.hero.age, testTime)
      // this.g.getKey(KeyIds.WuQing_ZJ_Day_Check_ZhuiMing).value = getTimeDay(this.g.hero.age, testTime)

      // console.log(`Count_DuBo_Win_JQ`, this.g.getKey(KeyIds.Count_DuBo_Win_JQ).value)
      // console.log(`Count_DuBo_Lose_JQ`, this.g.getKey(KeyIds.Count_DuBo_Lose_JQ).value)

      // this.g.mjs.forEach(mj => {
      //   this.g.addMj(mj.id)
      // })

      // this.g.rws.forEach(rw => {
      //   rw.heart = 40
      // })
      // this.t.generateTxdyRws()

      // console.log(this.g.rws.length)

      // this.g.gmData.dl.type = 'normal'
      // this.g.goToPage(PageEnum.GameMg)
      // this.g.mjs.forEach(mj => {
      //   console.log(mj.name)
      // })
    }

    this.initCity()

    // this.g.addTimeHH(30 * 12 * 12 - 12 * 6)

    // this.m.calcMovePrice(CityIdEnum.KunLun, CityIdEnum.ChangAn)

    // this.g.rws.forEach(rw => {
    //   rw.heart = 20
    // })

    // setTimeout(() => {
    //   this.m.moveToMap(sampleItem([CityIdEnum.HangZhou, CityIdEnum.ChangAn, CityIdEnum.ChangSha, CityIdEnum.KunLun]))
    // }, 2000)

    // this.g.cities.forEach(city => {
    //   city.group.forEach(c => {
    //     // check in this group npc id if repeat
    //     const idArr: number[] = []
    //     c.npcs.forEach(n => {
    //       if (idArr.includes(n.id)) {
    //         console.log(`%c ${this.g.getRw(n.id).name} 重复了`, 'color:red; font-size:40px')
    //       } else {
    //         idArr.push(n.id)
    //       }
    //     })
    //   })
    // })
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe()
  }
  initCity() {
    if (this.g.hero.jq <= 0) {
      this.setAsQT()
      return
    }
    this.talkData.talkType = 'bc'
    switch (this.g.current.cityGroup) {
      case CityGroupEnum.Normal:
        this.setNormalCity()
        break
      case CityGroupEnum.RenWu:
        this.g.current.cityGroup = this.g.current.preCityGroup
        this.handleSheShiNpcClick(this.g.current.rw.id)
        break
      case CityGroupEnum.ZiZhai:
        this.enterSS(CityGroupEnum.ZiZhai)
        break
      case CityGroupEnum.ZiZhaiBJ:
        this.zzBJ()
        break
      case CityGroupEnum.ZiZhaiXL:
        this.zzXL()
        break

      default:
        const key = getKeyByValue(ssGroupMap, this.g.current.cityGroup)
        if (key) {
          // console.log('initCity, key', key)
          this.getClickedItemNpcs(key, this.g.current.cityGroup)
          // console.log('city.components.ts - initCity - enterSSCheck(ssGroupMap[key])')
          this.t.enterSSCheck(ssGroupMap[key])
        } else {
          // console.log('initCity else cityGroup', this.g.current.cityGroup)
        }
        break
    }

    if (this.g.current.city.key === 'dali') {
      this.showDPLB = false
    }
    if (this.g.current.house === this.g.current.city.id) {
      this.showMJZZ = true
    }
    if (this.g.current.city.id === CityIdEnum.XiaoDao) {
      this.isXiaoDao = true
    }
  }

  setNormalCity() {
    this.currentNormalCity = this.g.current.city.group.filter(city => {
      return this.normalCityDefault.find(g => g.key === city.key) || city.sp
    })
    this.t.checkNoBodyTasks()
  }

  handleNormalCityClick(ssKey: string, cityGroup: CityGroupEnum) {
    this.g.addTimeHH(1)
    this.g.useJq(200)
    // if (!environment.production) {
    //   this.g.addTimeHH(11)
    // }
    this.getClickedItemNpcs(ssKey, cityGroup)
    this.enterSS(cityGroup || CityGroupEnum.Normal)
    // check if rw has task
    // console.log('city.components.ts - handleNormalCityClick - enterSSCheck(cityGroup)')
    this.t.enterSSCheck(cityGroup)
    this.g.current.rwIn = this.g.current.cityGroup
  }

  handleSheShiNpcClick(rwId: RwIdEnum) {
    if (!environment.production) {
      // this.g.getRw(rwId).heart = 51 // for test
      // this.g.hero.jq = 99999
    }
    if (this.g.hero.jq <= 0) {
      this.setAsQT()
      return
    }
    this.currentRwActions = []
    if (this.g.hero.jn.tq > 0) {
      this.currentRwActions.push({ id: 1, name: '偷窃', key: 'tq' })
    }
    const sps = this.c.getSpRwItems(rwId)
    if (sps.length > 0) {
      this.currentRwActions = [...this.currentRwActions, ...sps]
    }
    const ssKey = getSSKey(this.g.current.rwIn)
    const ssKeyInCityGroup = ssGroupMap[ssKey]
    this.citySheShiImages[CityGroupEnum.RenWu] = this.citySheShiImages[ssKeyInCityGroup]
    this.cityGroupNames[CityGroupEnum.RenWu] = this.cityGroupNames[ssKeyInCityGroup]

    if (!environment.production) {
      // this.g.getRw(rwId).heart += 80 // for test
    }

    this.propsData.npc = this.g.getRw(rwId)
    this.talkData.npc = this.g.getRw(rwId)

    this.g.current.preCityGroup = this.g.current.cityGroup
    this.g.current.prePage = PageEnum.City
    this.g.current.rw.id = rwId
    this.g.current.rw.ssImg = this.citySheShiImages[this.g.current.cityGroup]

    this.g.current.cityGroup = CityGroupEnum.RenWu

    this.t.enterRwCheck(rwId)
  }

  rwDianXiaoEr() {
    this.handleSheShiNpcClick(RwIdEnum.DianXiaoEr)
  }
  rwLaoBanNiang() {
    this.handleSheShiNpcClick(RwIdEnum.LaoBanNiang)
  }
  rwZhuangJia() {
    this.handleSheShiNpcClick(RwIdEnum.ZhuangJia)
  }
  rwWuShi() {
    this.handleSheShiNpcClick(RwIdEnum.WuShi)
  }
  rwLaoBan() {
    this.handleSheShiNpcClick(RwIdEnum.LaoBan)
  }

  exitNpc() {
    // console.log('exitNpc')
    // check if a key in ssGroupMap can match this.g.current.rwIn's city group
    const ssKey = getSSKey(this.g.current.rwIn)

    this.handleNormalCityClick(ssKey, this.g.current.rwIn)
    // setTimeout(() => {
    //   console.log('city.components.ts - exitNpc - enterSSCheck(this.g.current.cityGroup)')
    //   this.t.enterSSCheck(this.g.current.cityGroup)
    // }, 0)
  }

  setAsQT() {
    this.g.current.cityGroup = CityGroupEnum.QiTao
    cityGroupNames[CityGroupEnum.QiTao] = this.g.current.city.name
    this.talkData.talkType = 'qt'
  }

  handleRwClick(key: CityCroupKeyType) {
    // console.log('handleRwClick', key)
    switch (key) {
      case 'hua':
        this.enterHua()
        break
      case 'qi':
        this.enterQi()
        break
      case 'shu':
        // this.enterShu()
        break
      case 'qin':
        this.enterQin()
        break
      case 'maichu':
        this.openShopPop('sale')
        break
      case 'mairu':
        this.openShopPop('buy')
        break
      case 'xiwu':
        this.startXiWu()
        break
      case 'tq':
        this.startTQ()
        break
      case 'touzi':
        this.enterDB('tz')
        break
      case 'yipei':
        this.enterDB('yp')
        break
      case 'daxiao':
        this.enterDB('dx')
        break
      case 'chuhai':
        this.m.moveToMap(this.g.current.city.id === CityIdEnum.XiaoDao ? CityIdEnum.HangZhou : CityIdEnum.XiaoDao, { isCH: true })
        break
      case 'jianbao':
        this.t.jianBao()
        break
      default:
        break
    }
  }

  getClickedItemNpcs(key: string, cityGroup: CityGroupEnum) {
    this.currentSheShiRws = []
    let max = 7
    const max5Arr = ['jw', 'gmd', 'emhs', 'wdhs', 'sgy', 'grf', 'slhs', 'xdky']
    if (max5Arr.includes(key)) max = 5
    const tempNpcs = clone(this.g.current.city.group.find(g => g.key === key)?.npcs || [])
    // console.log(tempNpcs)

    const tempIds: RwIdEnum[] = []
    if (tempNpcs.length > 0) {
      tempNpcs.forEach(npc => {
        const thisRw = this.g.getRw(npc.id)
        if (rand() * 100 < npc.rate && thisRw.name !== this.g.hero.name && this.currentSheShiRws.length < max) {
          let canPush = true
          if (npc.id === RwIdEnum.GuoXiang && this.g.getKey(KeyIds.YangGuo_ZJ_No_GuoXiang).value === 1) {
            canPush = false
          }
          if (
            (npc.id === RwIdEnum.GuoJing || npc.id === RwIdEnum.HuangRong) &&
            this.g.getKey(KeyIds.GuoXiang_ZJ_XiangYang_YiChengPo).value === 1
          ) {
            canPush = false
          }
          if (canPush) {
            this.currentSheShiRws.push({
              id: npc.id,
              name: thisRw.name,
              type: 'rw',
              subId: npc.id,
            })
            tempIds.push(npc.id)
          }
        }
      })
      this.t.ssRws = clone(tempIds)
    }
  }

  openMenuPop() {
    this.showMenu = true
  }

  closeMenuPop() {
    this.showMenu = false
  }

  openPropsPop() {
    this.propsData.type = 'zj'
    this.propsData.show = true
  }

  closePropsPop() {
    this.propsData.show = false
  }

  openShopPop(type: 'sale' | 'buy') {
    this.g.addTimeHH(2)
    this.g.useJq(400)
    this.g.itemData.type = type
    this.g.show.pop.items = true
  }

  openNpcPropsPop() {
    this.propsData.type = 'rw'
    this.propsData.show = true
  }

  openNpcTalkPop() {
    this.talkData.show = true
  }

  closeNpcTalkPop() {
    this.talkData.show = false
    if (this.talkData.talkType === 'qt') {
      if (this.g.hero.jq > 0) {
        this.g.current.cityGroup = CityGroupEnum.Normal
        this.initCity()
      } else {
        this.g.current.cityGroup = CityGroupEnum.QiTao
      }
    } else {
      this.exitNpc()
    }
  }

  fight(isTq = false) {
    this.g.fight.rw = this.g.getRw(this.talkData.npc.id)
    this.g.addTimeHH(3)
    this.g.useJq(600)
    this.g.fight.type = isTq ? 'tq' : 'normal'
    // this.g.goToPage(PageEnum.Fight, true)
    this.g.goToPage(PageEnum.Fight)
  }
  // 自宅搬家
  zzBJ() {
    this.allBJCities = []
    this.g.cities.forEach(city => {
      if (city.group.find(g => g.key === 'mj') && city.id !== this.g.current.house && city.id !== CityIdEnum.XiaoDao) {
        this.allBJCities.push({ id: city.id, name: city.name })
      }
    })
    this.g.current.cityGroup = CityGroupEnum.ZiZhaiBJ
  }
  zzBJTo(cityId: CityIdEnum) {
    this.g.current.house = cityId
    this.m.moveToMap(cityId, { isBJ: true })
  }
  // 自宅修炼
  zzXL() {
    this.g.current.preCityGroup = this.g.current.cityGroup
    this.g.current.cityGroup = CityGroupEnum.ZiZhaiXL
  }
  zzXLExit() {
    this.enterSS(CityGroupEnum.ZiZhai)
    this.t.checkNoBodyTasks()
  }
  xlWithType(xlType: XlType) {
    this.startXiWu(xlType)
  }
  // 自宅休息
  zzXX() {
    this.sleep()
  }
  // 自宅抚琴
  zzFQ() {
    this.g.goToPage(PageEnum.GameQin)
  }
  // 自宅配药
  zzPY() {
    this.g.goToPage(PageEnum.GamePy)
  }

  exit() {
    this.g.goToPage(PageEnum.Map)
  }
  enterZZ() {
    this.enterSS(CityGroupEnum.ZiZhai)
    this.t.checkNoBodyTasks()
  }
  // Special
  enterSS(cityGroup: CityGroupEnum) {
    this.g.current.cityGroup = cityGroup
    this.g.current.citySS = cityGroup
    if (cityGroup === CityGroupEnum.ZiZhai) {
      this.showZZFQ = this.g.hero.jn.fq > 0
    }
    // if (!environment.production) {
    //   this.g.hero.time = { mm: 1, dd: 15, hh: 1 }
    // }
  }
  exitSS() {
    this.g.current.cityGroup = CityGroupEnum.Normal
    this.g.current.citySS = CityGroupEnum.Normal
    this.initCity()
  }
  exitZZ() {
    this.handleNormalCityClick('mj', CityGroupEnum.MinJia)
  }

  // 采药
  enterCy() {
    this.g.useJq(800)
    this.g.addTimeHH(4)
    this.g.goToPage(PageEnum.GameCy)
  }
  // 寻宝
  enterXb() {
    this.g.useJq(800)
    this.g.addTimeHH(4)
    this.g.goToPage(PageEnum.GameXb)
  }
  // 打猎
  enterDl() {
    this.g.useJq(800)
    this.g.addTimeHH(4)
    this.g.gmData.dl.type = 'normal'
    this.g.goToPage(PageEnum.GameDl)
  }
  // 绘画
  enterHua() {
    this.g.goToPage(PageEnum.GameHua)
  }
  // 对弈
  enterQi() {
    this.g.goToPage(PageEnum.GameQi)
  }
  // 抚琴
  enterQin() {
    this.g.goToPage(PageEnum.GameQin)
  }
  // 迷宫
  enterMG() {
    this.g.goToPage(PageEnum.GameMg)
  }
  // 骰子 大小 壹配
  enterDB(dbType: DbType) {
    this.g.useJq(600)
    this.g.addTimeHH(3)
    this.g.dbGlobalData.type = dbType
    this.g.dbGlobalData.rwId = this.talkData.npc.id
    this.g.goToPage(PageEnum.GameDb)
  }

  sleep() {
    this.g.show.hideInfo = true
    this.progressData.show = true
    this.g.addTimeHH(12)
    this.g.useJq(this.g.current.city.sleep || 4100)
    let count = 0
    const timer = setInterval(() => {
      count++
      this.progressData.value = count * 4
      if (this.progressData.value >= 100) {
        this.progressData.value = 100
        clearInterval(timer)
        this.g.hero.tl = this.g.hero.tlM
        this.progressData.show = false
        this.showNotice('休息了一天')
        this.progressData.value = 0
      }
    }, 30)
  }

  startXiWu(xlType: XlType = '10t') {
    let time = 12 * 10
    let xlCount = 1
    let isOneDay = false
    switch (xlType) {
      case '1n':
        time = 12 * 30 * 12 - 12 * 6
        xlCount = 3 * 12
        break
      case '1y':
        time = 12 * 30
        xlCount = 3
        break
      case '10t':
        time = 12 * 10
        xlCount = 1
        break
      case '1t':
        time = 12
        xlCount = 1
        isOneDay = true
        break
      default:
        break
    }
    this.g.show.hideInfo = true
    this.progressData.show = true

    if (this.g.hero.jq < 120 * 200) {
      xlCount = 1
      isOneDay = true
    } else if (this.g.hero.jq < time * 200) {
      xlCount = Math.floor(this.g.hero.jq / (120 * 200))
      if (xlCount < 1) xlCount = 1
    }
    this.g.addTimeHH(time)
    this.g.useJq(time * 200)
    let count = 0
    const timer = setInterval(() => {
      count++
      this.progressData.value = count * 4
      if (this.progressData.value >= 100) {
        this.progressData.value = 100
        clearInterval(timer)
        this.progressData.show = false
        // start calc
        const results: boolean[] = []
        for (let i = 0; i < xlCount; i++) {
          results.push(this.c.getXWResult(isOneDay))
        }
        if (results.includes(true)) {
          this.showNotice('小有所成')
        } else {
          this.showNotice('一无所成')
        }
        this.g.current.cityGroup = this.g.current.preCityGroup
        // end calc
        this.progressData.value = 0
      }
    }, 30)
  }

  // 未被发现 午时到酉时 被发现 子时到午时 包含战斗的时间
  startTQ() {
    this.g.show.hideInfo = true
    this.progressData.show = true
    this.g.addTimeHH(3)
    this.g.useJq(600)
    let count = 0
    const timer = setInterval(() => {
      count++
      this.progressData.value = count * 4
      if (this.progressData.value >= 100) {
        this.progressData.value = 100
        clearInterval(timer)
        this.progressData.show = false
        this.tqCheck()
        this.progressData.value = 0
      }
    }, 30)
  }

  tqStatus = true

  tqCheck() {
    const thisNpc = this.g.getRw(this.g.current.rw.id)
    let isSuccess = true
    const npcHasZhenCha = thisNpc.jn.zc > 0
    const heroHasYiRong = this.g.hero.jn.yr > 0
    let floatRate = 0
    if (thisNpc.wg > 0 && this.g.hero.wg / thisNpc.wg > 2) {
      floatRate = 0.15
    } else if (thisNpc.wg > 0 && this.g.hero.wg / thisNpc.wg < 0.5) {
      floatRate = -0.15
    }
    let successRate = 0.6 + floatRate
    if (npcHasZhenCha) {
      successRate = 0
    } else if (heroHasYiRong) {
      successRate = 0.7 + floatRate
    }
    if (rand() > successRate) {
      isSuccess = false
    }

    if (isSuccess) {
      if (rand() < 0.7) {
        // 声望绝对值 + 5~7
        const add = Math.abs(this.g.hero.sw) + randInt(7, 5)
        this.g.addJq(add * 1000)
        this.jt.toast = { show: true, type: 'jq', subType: 'tq', content: `偷到${add}两`, id: 0, nextExit: true }
      } else {
        const randWp = sampleItem(this.g.wps)
        this.g.addWp(randWp.id)
        this.jt.toast = {
          show: true,
          type: 'wp',
          subType: 'tq',
          content: `得到：${randWp.name}`,
          id: randWp.id,
          nextExit: true,
        }
      }
      this.tqStatus = true
    } else {
      this.showNotice('糟糕！被发现了！')
      this.g.addSw(-2)
      this.tqStatus = false
    }
  }

  showNotice(content: string) {
    this.noticeData.content = content
    this.noticeData.show = true
  }

  closeNotice() {
    this.noticeData.show = false
    this.g.show.hideInfo = false
    if (!this.tqStatus) {
      this.fight(true)
    }
  }

  startQT() {
    // 开始乞讨
    this.talkData.talkType = 'qt'
    this.talkData.show = true
    this.g.addTimeHH(1)
  }
}

interface PropsDataInCity {
  show: boolean
  type: 'zj' | 'rw'
  npc: RwItem
}

interface shopDataInCity {
  show: boolean
  type: 'sale' | 'buy'
}
