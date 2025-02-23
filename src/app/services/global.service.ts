import { Injectable } from '@angular/core'
import { CityGroupEnum, HeroIdEnum, PageEnum } from '../constants/enums/base.enum'
import { calcWyIds, clone, cloneDeep } from '../units/Base'
import { HeroItem, HeroTask, PersonJn, PersonWy, defaultHero, heroes } from '../data/hero'
import { defaultChs } from '../data/ch'
import { defaultJns } from '../data/jn'
import { defaultMjs } from '../data/mj'
import { defaultRws } from '../data/rw'
import { defaultWps } from '../data/wp'
import { defaultWys } from '../data/wy'
import { ZbItem, ZbType, defaultZbs } from '../data/zb'
import { defaultCities } from '../data/city'
import { RwIdEnum } from '../constants/enums/rw.enum'
import { CityIdEnum } from '../constants/enums/city.enum'
import { defaultMapCities } from '../data/map'
import { addJhTime, getTimeValue } from '../units/time'
import { ItemData, DbGlobalData, SaveItem, CollectItem, CollectItemKey, JhTime } from '../constants/interfaces/base.interface'
import { cityRwSp } from '../pages/city/city-rw-sp'
import { allTasksDefault, tDianXiaoErDengHui } from '../data/tasks/all-tasks'
import { keysDefault } from '../data/tasks/keys'
import localforage from 'localforage'
import { vs } from '../app.config'
import { SlEnum, defaultClc, defaultSaveItem } from '../data/base'
import { KeyIds } from '../data/tasks/keys.interface'
import { defaultCurrent, gmDataDefault } from '../data/default-data'
import { GmTaskData } from '../data/tasks/task.interface'
import { environment } from '../../environments/environment'
import { GameoverEnum } from '../data/gameover'
import { settingsDefault } from '../data/settings'

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {
    if (!environment.production) {
      // this.goToPage(PageEnum.GameQin)
    }
  }

  hero = clone(defaultHero)
  zjs = clone(heroes)
  rws = clone(defaultRws)
  jns = clone(defaultJns)
  wys = clone(defaultWys)
  wps = clone(defaultWps)
  zbs = clone(defaultZbs)
  mjs = clone(defaultMjs)
  chs = clone(defaultChs)
  cities = clone(defaultCities)
  tsks = clone(allTasksDefault)
  keys = clone(keysDefault)
  settings = clone(settingsDefault)
  mapCities = clone(defaultMapCities)

  cityRwSp = clone(cityRwSp)

  sls = ['e', 'g', 'i', 'k', 'o', 'p']

  clc: CollectItem[] = clone(defaultClc)

  current = clone(defaultCurrent)

  gmData: GmTaskData = clone(gmDataDefault)

  allSlItems: SaveItem[] = []
  show = {
    mapPosFlash: false,
    hideInfo: false,
    rwPreGroup: CityGroupEnum.Normal,
    pop: {
      items: false,
      miJi: false,
      sl: false,
      exit: false,
      up: false,
    },
  }
  huaTemp = {
    id: 0,
  }

  od = {
    show: false,
    id: GameoverEnum.LaoSi,
    texts: '',
  }

  itemData: ItemData = {
    type: 'hero',
  }

  dbGlobalData: DbGlobalData = {
    type: 'dx',
    rwId: RwIdEnum.DuanZiYu,
  }

  fight = {
    /**
     * normal 正常
     * tq 偷窃
     * tsk 任务
     * */
    type: 'normal',
    rw: this.rws[0],
  }

  getZj(id: number) {
    return this.zjs.find(zj => zj.id === id) || this.zjs[0]
  }
  getRw(id: RwIdEnum) {
    return this.rws.find(rw => rw.id === id) || this.rws[0]
  }
  getJn(key: keyof PersonJn) {
    return this.jns.find(jn => jn.key === key) || this.jns[0]
  }
  getWy(key: keyof PersonWy) {
    return this.wys.find(wy => wy.key === key) || this.wys[0]
  }
  getWp(id: number) {
    return this.wps.find(wp => wp.id === id) || this.wps[0]
  }
  getZb(id: number) {
    return this.zbs.find(zb => zb.id === id) || this.zbs[0]
  }
  getMj(id: number) {
    return this.mjs.find(mj => mj.id === id) || this.mjs[0]
  }
  getCh(id: number) {
    return this.chs.find(ch => ch.id === id) || this.chs[0]
  }
  getCity(id: number) {
    return this.cities.find(city => city.id === id) || this.cities[0]
  }
  getMapCity(id: number) {
    return this.mapCities.find(city => city.id === id) || this.mapCities[0]
  }
  getCityRwSp(id: number) {
    return this.cityRwSp.find(sp => sp.id === id) || this.cityRwSp[0]
  }
  getTsk(id: number) {
    return this.tsks.find(tsk => tsk.rwId === id)
  }
  getKey(id: number) {
    return this.keys.find(tsk => tsk.id === id) || this.keys[0]
  }
  getSetting(id: number) {
    return this.settings.find(tsk => tsk.id === id) || this.settings[0]
  }

  addClc(key: CollectItemKey, id: number, count: number = 1) {
    const item = this.clc.find(item => item.key === key)
    if (item) {
      const card = item.cards.find(card => card.id === id)
      if (card) {
        card.count += count
      } else {
        item.cards.push({ id, count })
      }
    } else {
      this.clc.push({ key, cards: [{ id, count }] })
    }
    this.saveHis()
  }

  addWp(id: number, count: number = 1) {
    const item = this.hero.wps.find(item => item.id === id)
    if (item) {
      item.count += count
    } else {
      this.hero.wps.push({ id, count })
    }
    this.addClc('wp', id, count)
  }

  removeWp(id: number, count: number = 1) {
    const item = this.hero.wps.find(item => item.id === id)
    if (item) {
      item.count -= count
      if (item.count <= 0) {
        this.hero.wps = this.hero.wps.filter(item => item.id !== id)
      }
    }
  }

  useWp(id: number) {
    const item = this.hero.wps.find(item => item.id === id)
    if (item) {
      this.addTl(this.getWp(id).value)
      this.removeWp(id)
    }
  }

  addTl(value: number) {
    this.hero.tl += value
    if (this.hero.tl > this.hero.tlM) {
      this.hero.tl = this.hero.tlM
    } else if (this.hero.tl < 0) {
      this.hero.tl = 0
    }
  }

  addZb(id: number, count: number = 1) {
    const item = this.hero.zbs.find(item => item.id === id)
    if (item) {
      item.count += count
    } else {
      this.hero.zbs.push({ id, count })
    }
    this.addClc('zb', id, count)
  }

  removeZb(id: number, count: number = 1) {
    const item = this.hero.zbs.find(item => item.id === id)
    if (item) {
      item.count -= count
      if (item.count <= 0) {
        this.hero.zbs = this.hero.zbs.filter(item => item.id !== id)
      }
    }
  }

  equipZb(id: number) {
    const zbItem = this.getZb(id)
    // 获取装备的类型，看是武器 防具 还是 坐骑
    // 根据类型判断是否可以装备
    // 如果可以装备，判断是否已经装备了，如果已经装备了，卸下旧装备，装备新装备
    // 如果没有装备，直接装备
    // 装备完毕后，刷新人物属性
    const type = zbItem.type
    if (this.hero.equip[type].active) {
      this.unEquipZb(type)
    }
    this.hero.equip[type].id = zbItem.id
    this.hero.equip[type].name = zbItem.name
    this.hero.equip[type].subType = zbItem.subType
    this.hero.equip[type].value = zbItem.value
    this.hero.equip[type].active = true
    switch (zbItem.type) {
      case 'weapon':
        this.hero.wg += zbItem.value
        break
      case 'armor':
        this.hero.tl += zbItem.value
        this.hero.tlM += zbItem.value
        break
      case 'horse':
        this.hero.qgz += zbItem.value
        break
    }
    this.removeZb(id)
  }

  unEquipZb(type: ZbType) {
    if (!this.hero.equip[type].active) {
      return
    }
    const oldZbId = this.hero.equip[type].id
    switch (type) {
      case 'weapon':
        this.hero.wg -= this.hero.equip[type].value
        break
      case 'armor':
        this.hero.tl -= this.hero.equip[type].value
        this.hero.tlM -= this.hero.equip[type].value
        if (this.hero.tl < 1) {
          this.hero.tl = 1
        }
        break
      case 'horse':
        this.hero.qgz -= this.hero.equip[type].value
        break
    }
    this.hero.equip[type].id = 0
    this.hero.equip[type].name = ''
    this.hero.equip[type].subType = ''
    this.hero.equip[type].value = 0
    this.hero.equip[type].active = false
    this.addZb(oldZbId)
  }

  addMj(id: number) {
    if (!this.hero.mjs.includes(id)) {
      this.hero.mjs.push(id)
    }
    this.addClc('mj', id)
  }

  addZj(id: HeroIdEnum) {
    this.addClc('zj', id)
  }

  addRw(id: number) {
    this.addClc('rw', id)
  }

  addCh(id: number) {
    this.addClc('ch', id)
  }

  addJn(key: keyof PersonJn) {
    this.hero.jn[key] = 1
    this.addJyClc(key)
  }

  addJyClc(key: keyof PersonJn) {
    const inJn = this.jns.find(jn => jn.key === key)
    if (inJn) {
      this.addClc('jn', inJn.id)
    }
  }

  addWy(key: keyof PersonWy, value: number) {
    this.hero.wy[key] += value
    if (this.hero.wy[key] > 9) {
      this.hero.wy[key] = 9
    }
    this.checkWyUpdate(this.hero.wy)
  }

  checkWyUpdate(heroWy: PersonWy) {
    // ng 2 5 9 -> id 1 2 3
    // qg 2 5 9 -> id 4 5 6
    // jf 2 5 9 -> id 7 8 9
    // gf 2 5 9 -> id 10 11 12
    // zf 2 5 9 -> id 13 14 15
    // aq 2 5 9 -> id 16 17 18
    let wyIds: number[] = []
    if (heroWy.ng >= 2) {
      wyIds = [...wyIds, ...calcWyIds(heroWy.ng, 1)]
    }
    if (heroWy.qg >= 2) {
      wyIds = [...wyIds, ...calcWyIds(heroWy.qg, 4)]
    }
    if (heroWy.jf >= 2) {
      wyIds = [...wyIds, ...calcWyIds(heroWy.jf, 7)]
    }
    if (heroWy.gf >= 2) {
      wyIds = [...wyIds, ...calcWyIds(heroWy.gf, 10)]
    }
    if (heroWy.zf >= 2) {
      wyIds = [...wyIds, ...calcWyIds(heroWy.zf, 13)]
    }
    if (heroWy.aq >= 2) {
      wyIds = [...wyIds, ...calcWyIds(heroWy.aq, 16)]
    }
    if (wyIds.length > 0) {
      let clcWy = this.clc.find(item => item.key === 'wy')
      if (!clcWy) {
        clcWy = { key: 'wy', cards: [] }
        this.clc.push(clcWy)
        clcWy = this.clc.find(item => item.key === 'wy')
      }
      if (clcWy) {
        wyIds.forEach(id => {
          const card = clcWy?.cards.find(card => card.id === id)
          if (card) {
            card.count = 1
          } else {
            clcWy?.cards.push({ id, count: 1 })
          }
        })
      }
      this.saveHis()
    }
  }

  useJq(value: number) {
    this.hero.jq -= value
    if (this.hero.jq < 0) this.hero.jq = 0
  }
  addJq(value: number) {
    if (value > 99999000) {
      return
    }
    this.hero.jq += value
  }

  addSw(value: number) {
    if (value > 200) {
      return
    }
    this.hero.sw += value
    if (this.hero.sw > 50) {
      this.hero.sw = 50
    } else if (this.hero.sw < -50) {
      this.hero.sw = -50
    }
  }

  addWg(value: number) {
    if (value > 200) {
      return
    }
    this.hero.wg += value
    const maxValue = 100 + this.hero.equip.weapon.value
    if (this.hero.wg > maxValue) {
      this.hero.wg = maxValue
    } else if (this.hero.wg < 2) {
      this.hero.sw = 2
    }
  }

  addTask(heroTask: HeroTask) {
    const hasTask = this.hero.tsks.find(t => t.stRw === heroTask.stRw)
    if (!hasTask) {
      this.hero.tsks.push(clone(heroTask))
    }
  }

  addTimeHH(addHH: number) {
    let tempHH = addHH
    const nowTime = this.hero.time
    const nowAge = this.hero.age
    while (tempHH > 0) {
      if (tempHH > 12) {
        this.addTimeHH12(12)
        tempHH -= 12
      } else {
        this.addTimeHH12(tempHH)
        tempHH = 0
      }
    }
    const endTime = this.hero.time
    const endAge = this.hero.age
    this.checkTimeChanges(nowTime, endTime, nowAge, endAge)
  }

  addTimeHH12(addHH: number) {
    const add = addJhTime(this.hero.time, { mm: 0, dd: 0, hh: addHH })
    this.hero.time = add.endTime
    this.hero.age += add.addYear
  }

  checkTimeChanges(nowTime: JhTime, endTime: JhTime, nowAge: number, endAge: number) {
    // 检查是否有时间相关的变化，比如年龄增长，秘籍的使用时间，任务时间
    if (this.getKey(KeyIds.DianXiaoEr_DengHui_1).value === 1 && !(this.hero.time.mm === 1 && this.hero.time.dd === 15)) {
      this.getKey(KeyIds.DianXiaoEr_DengHui_1).value = 0
    }
    if (this.getKey(KeyIds.DianXiaoEr_PanTao).value === 1 && !(this.hero.time.dd === 30)) {
      this.getKey(KeyIds.DianXiaoEr_PanTao).value = 0
    }
    if (nowTime.dd !== endTime.dd || nowTime.mm !== endTime.mm || nowAge !== endAge) {
      if (this.getKey(KeyIds.LingHuChong_RenWuKa).value === 1) {
        this.getKey(KeyIds.LingHuChong_RenWuKa).value = 0
      }
      if (this.getKey(KeyIds.Rand_Key_1).value === 1) {
        this.getKey(KeyIds.Rand_Key_1).value = 0
      }

      if (this.getKey(KeyIds.LuXiaoFeng_RenWuKa).value === 4) {
        this.getKey(KeyIds.LuXiaoFeng_RenWuKa).value = 0
      }
    }
    if ([5, 10, 15].includes(this.getKey(KeyIds.ChengHao_TianXiaDiYi).value)) {
      if (
        getTimeValue(0, this.hero.time) > getTimeValue(0, { mm: 9, dd: 20, hh: 1 }) ||
        getTimeValue(0, this.hero.time) < getTimeValue(0, { mm: 8, dd: 10, hh: 1 }) ||
        this.hero.age % 3 !== 0
      ) {
        this.getKey(KeyIds.ChengHao_TianXiaDiYi).value = 0
      }
    }
  }

  getHeroInRwId() {
    let rwId = RwIdEnum.NoBody
    switch (this.hero.id) {
      case HeroIdEnum.LuXiaoFeng:
        rwId = RwIdEnum.LuXiaoFeng
        break
      case HeroIdEnum.XiMenChuiXue:
        rwId = RwIdEnum.XiMenChuiXue
        break
      case HeroIdEnum.YangGuo:
        rwId = RwIdEnum.YangGuo
        break
      case HeroIdEnum.GuoXiang:
        rwId = RwIdEnum.GuoXiang
        break
      case HeroIdEnum.WuQing:
        rwId = RwIdEnum.WuQing
        break
      default:
        break
    }
    return rwId
  }

  goToPage(page: PageEnum, setPre = true) {
    if (setPre) {
      this.current.preCityGroup = this.current.cityGroup
      this.current.prePage = this.current.page
    }
    this.current.page = page
  }

  goBack() {
    this.current.cityGroup = this.current.preCityGroup
    this.current.page = this.current.prePage
  }

  async initStorage() {
    localforage.config({
      name: 'actiondofsimplejhll',
    })
    try {
      await localforage.ready()
      return localforage
        .getItem(SlEnum.a)
        .then((value: any) => {
          if (value) {
            return this.startLoad()
          } else {
            return this.writeStorage()
          }
        })
        .catch(function (err: any) {
          console.error(err)
          return false
        })
    } catch (e) {
      console.error(e) // `No available storage method found.`
    }
  }

  async writeStorage() {
    const heroStr = JSON.stringify(defaultHero)
    await localforage.setItem(SlEnum.a, heroStr)
    await localforage.setItem(SlEnum.b, heroStr)
    await localforage.setItem(SlEnum.c, heroStr)
    await localforage.setItem(SlEnum.d, heroStr)
    await localforage.setItem(SlEnum.e, heroStr)
    await localforage.setItem(SlEnum.f, heroStr)
    await localforage.setItem(SlEnum.g, heroStr)
    await localforage.setItem(SlEnum.h, heroStr)
    await localforage.setItem(SlEnum.i, heroStr)
    await localforage.setItem(SlEnum.j, heroStr)
    await localforage.setItem(SlEnum.k, heroStr)
    await localforage.setItem(SlEnum.l, heroStr)
    await localforage.setItem(SlEnum.m, heroStr)
    await localforage.setItem(SlEnum.n, heroStr)
    await localforage.setItem(SlEnum.o, heroStr)
  }

  async startLoad() {
    await this.loadAll()
    await this.loadHis()
  }

  async loadHis() {
    return localforage
      .getItem(SlEnum.m)
      .then((value: any) => {
        if (value && typeof value === 'string') {
          const loadValue = JSON.parse(value)
          if (loadValue && loadValue.dog && loadValue.dog.hisV && loadValue.dog.hisV === vs.hv) {
            const res = loadValue.dog
            this.clc = cloneDeep(res.c)
            if (res.s && res.s.length > 100) {
              this.settings = cloneDeep(res.s)
            }
          }
        }
      })
      .catch((err: any) => {
        console.error(err)
      })
  }

  async loadAll() {
    this.allSlItems = []
    const eValue = await this.getDbInfo(SlEnum.e)
    const gValue = await this.getDbInfo(SlEnum.g)
    const iValue = await this.getDbInfo(SlEnum.i)
    const kValue = await this.getDbInfo(SlEnum.k)
    const oValue = await this.getDbInfo(SlEnum.o)
    const pValue = await this.getDbInfo(SlEnum.p)
    const res = [eValue, gValue, iValue, kValue, oValue, pValue]
    res.forEach(item => {
      this.allSlItems.push(clone(item))
    })
    return this.allSlItems
  }

  async getDbInfo(key: SlEnum): Promise<SaveItem> {
    return localforage
      .getItem(key)
      .then((value: any) => {
        if (value && typeof value === 'string') {
          const loadValue = JSON.parse(value)
          if (loadValue && loadValue.dog && loadValue.dog.dv && loadValue.dog.dv === vs.dv) {
            const res = loadValue.dog
            if (res.h.isIn) {
              return {
                active: true,
                id: res.h.id,
                name: res.h.name,
                avatar: res.h.avatar,
                time: res.h.time,
                pos: res.c.city.name,
              }
            }
          }
        }
        return clone(defaultSaveItem)
      })
      .catch((err: any) => {
        console.error(err)
        return clone(defaultSaveItem)
      })
  }

  async loadGame(index: number) {
    const key = SlEnum[this.sls[index] as keyof typeof SlEnum]
    return localforage
      .getItem(key)
      .then((value: any) => {
        if (value && typeof value === 'string') {
          const loadValue = JSON.parse(value)
          if (loadValue && loadValue.dog && loadValue.dog.dv && loadValue.dog.dv === vs.dv) {
            const res = loadValue.dog
            this.hero = cloneDeep(res.h)
            this.keys = cloneDeep(res.k)
            this.current = cloneDeep(res.c)
            this.rws = cloneDeep(res.r)
            this.gmData = cloneDeep(res.g)

            if (this.keys.length < 220) {
              for (let i = 211; i < 411; i++) {
                this.keys.push({ id: i, value: 0 })
              }
            }
            // console.log(this.current)
          } else {
          }
        }
      })
      .catch((err: any) => {
        console.error(err)
      })
  }

  async save(index: number) {
    await this.saveHis()
    await this.saveGame(index)
  }
  async saveHis() {
    const hisDefault: any = clone(defaultHero)
    hisDefault.dog = {
      hisV: vs.hv,
      c: cloneDeep(this.clc),
      s: cloneDeep(this.settings),
    }
    return localforage
      .setItem(SlEnum.m, JSON.stringify(hisDefault))
      .then((value: any) => {
        // console.log('hs保存成功')
        // toast('保存成功')
        // closeSaveBox()
      })
      .catch((err: any) => {
        console.error(err)
      })
  }
  async saveGame(index: number) {
    const key = SlEnum[this.sls[index] as keyof typeof SlEnum]
    const dvDefault: any = clone(defaultHero)
    dvDefault.dog = {
      dv: vs.dv,
      h: cloneDeep(this.hero),
      k: cloneDeep(this.keys),
      c: cloneDeep(this.current),
      r: cloneDeep(this.rws),
      g: cloneDeep(this.gmData),
    }
    return localforage
      .setItem(key, JSON.stringify(dvDefault))
      .then((value: any) => {
        // console.log('保存成功')
        // console.log(this.allSlItems)

        // this.toast('保存成功')
        // this.closeSaveBox()
        if (this.allSlItems[index]) {
          this.allSlItems[index] = {
            active: true,
            id: this.hero.id,
            name: this.hero.name,
            avatar: this.hero.avatar,
            time: this.hero.time,
            pos: this.current.city.name,
          }
        } else {
          this.allSlItems.push({
            active: true,
            id: this.hero.id,
            name: this.hero.name,
            avatar: this.hero.avatar,
            time: this.hero.time,
            pos: this.current.city.name,
          })
        }
      })
      .catch((err: any) => {
        console.error(err)
      })
  }

  resetGmData() {
    this.gmData = clone(gmDataDefault)
  }

  newGame() {
    this.hero = clone(defaultHero)
    this.keys = clone(keysDefault)
    this.current = clone(defaultCurrent)
    this.rws = clone(defaultRws)
    this.gmData = clone(gmDataDefault)
  }
}
