import { CommonModule } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { GlobalService } from '../../../services/global.service'
import { WpIdEnum } from '../../../constants/enums/wp.enum'
import { sampleItem } from '../../../units/Base'
import { CityGroupEnum, CityRwSpIdEnum, PageEnum } from '../../../constants/enums/base.enum'
import { TaskService } from '../../../services/task.service'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { CityIdEnumSp, jiaoWaiCityMap } from '../../city/city-data'
import { KeyIds } from '../../../data/tasks/keys.interface'
@Component({
  selector: 'jh-dl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dl.component.html',
  styleUrl: './dl.component.scss',
})
export class DlComponent implements OnInit, OnDestroy {
  constructor(
    private g: GlobalService,
    private t: TaskService,
  ) {}

  gzList: LwItem[] = [
    { id: 1, img: 'ss', itemId: WpIdEnum.TuRou, isActive: false },
    { id: 2, img: 'gz', itemId: WpIdEnum.TuRou, isActive: false },
    { id: 3, img: '', itemId: WpIdEnum.TuRou, isActive: false },
    { id: 4, img: '', itemId: WpIdEnum.TuRou, isActive: false },
    { id: 5, img: '', itemId: WpIdEnum.TuRou, isActive: false },
    { id: 6, img: '', itemId: WpIdEnum.TuRou, isActive: false },
    { id: 7, img: 'tz', itemId: WpIdEnum.TuRou, isActive: false },
    { id: 8, img: 'x', itemId: WpIdEnum.TuRou, isActive: false },
    { id: 9, img: 's', itemId: WpIdEnum.TuRou, isActive: false },
  ]

  randLists: Randlist[] = [
    {
      id: 1,
      items: [
        { itemId: WpIdEnum.SongShuRou, img: 'ss' },
        { itemId: WpIdEnum.GeRou, img: 'gz' },
      ],
    },
    { id: 2, items: [{ itemId: WpIdEnum.GeRou, img: 'gz' }] },
    {
      id: 3,
      items: [
        { itemId: WpIdEnum.SongShuRou, img: 'ss' },
        { itemId: WpIdEnum.GeRou, img: 'gz' },
      ],
    },
    { id: 4, items: [{ itemId: WpIdEnum.GeRou, img: 'gz' }] },
    { id: 5, items: [{ itemId: WpIdEnum.GeRou, img: 'gz' }] },
    { id: 6, items: [{ itemId: WpIdEnum.GeRou, img: 'gz' }] },
    {
      id: 7,
      items: [
        { itemId: WpIdEnum.TuRou, img: 'tz' },
        { itemId: WpIdEnum.SheDan, img: 's' },
      ],
    },
    {
      id: 8,
      items: [
        { itemId: WpIdEnum.TuRou, img: 'tz' },
        { itemId: WpIdEnum.SheDan, img: 's' },
        { itemId: WpIdEnum.XiongZhang, img: 'x' },
      ],
    },
    {
      id: 9,
      items: [
        { itemId: WpIdEnum.TuRou, img: 'tz' },
        { itemId: WpIdEnum.SheDan, img: 's' },
      ],
    },
  ]

  showDlResult = false
  canClose = false

  result = [
    { id: WpIdEnum.TuRou, name: '兔肉', count: 0 },
    { id: WpIdEnum.GeRou, name: '鸽肉', count: 0 },
    { id: WpIdEnum.SheDan, name: '蛇胆', count: 0 },
    { id: WpIdEnum.SongShuRou, name: '松鼠肉', count: 0 },
    { id: WpIdEnum.XiongZhang, name: '熊掌', count: 0 },
  ]

  dlCount = 0
  dlTimer: number = 0
  timeTimer: number = 0
  totalTime = 40
  arrowCount = 20

  displaySpeed = 1000 // 1300

  removeTimer: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }

  currentDlGz = {
    id: 9,
    showBZ: false,
  }

  ngOnInit() {
    if (this.g.hero.jn.dl > 0) {
      this.arrowCount = 30
    }
    this.init()
    this.g.getKey(KeyIds.Count_DaLie_Game).value++
  }

  ngOnDestroy(): void {
    this.clearAllTimer()
  }

  clearAllTimer() {
    if (this.dlTimer) {
      clearInterval(this.dlTimer)
    }
    if (this.timeTimer) {
      clearInterval(this.timeTimer)
    }
    ;[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(id => {
      if (this.removeTimer[id]) {
        clearTimeout(this.removeTimer[id])
      }
    })
  }

  init() {
    this.setDefault()
    this.startCountDown()
    this.startRandomLW()
  }

  setDefault() {
    this.gzList.forEach(gz => {
      gz.img = ''
      gz.isActive = false
    })
  }

  startCountDown() {
    this.timeTimer = window.setInterval(() => {
      this.totalTime--
      if (this.totalTime <= 0) {
        clearInterval(this.timeTimer)
        this.totalTime = 0
        this.showResult()
      }
    }, 1000)
  }

  startRandomLW() {
    this.dlTimer = window.setInterval(() => {
      this.randomLW()
    }, this.displaySpeed)
  }

  randomLW() {
    if (this.g.gmData.dl.type === 'zyhb') {
      this.randFromLists([1, 4, 7])
      this.randFromLists([3, 6, 9])
    } else {
      this.randFromLists([1, 2, 3, 4, 5, 6, 7, 8, 9], false)
    }
  }

  randFromLists(listIds: number[], needOther = true) {
    const randLists = this.randLists.filter(item => listIds.includes(item.id))
    const randList = sampleItem(randLists)
    const randItem = sampleItem(randList.items)
    const gzItem = this.gzList.find(gz => gz.id === randList.id)
    if (gzItem && gzItem.img === '') {
      gzItem.img = randItem.img
      gzItem.itemId = randItem.itemId
      this.removeTimer[randList.id] = window.setTimeout(() => {
        gzItem.img = ''
      }, this.displaySpeed + 100)
    } else {
      if (!needOther) {
        return
      }
      const otherListIds = listIds.filter(id => id !== randList.id)
      const otherLists = this.randLists.filter(item => otherListIds.includes(item.id))
      const randListOther = sampleItem(otherLists)
      const randItemOther = sampleItem(randListOther.items)
      const gzItemOther = this.gzList.find(gz => gz.id === randListOther.id)
      if (gzItemOther && gzItemOther.img === '') {
        gzItemOther.img = randItemOther.img
        gzItemOther.itemId = randItemOther.itemId
        this.removeTimer[randListOther.id] = window.setTimeout(() => {
          gzItemOther.img = ''
        }, this.displaySpeed + 100)
      }
    }
  }

  dl(lw: LwItem) {
    if (this.showDlResult) {
      return
    }
    this.arrowCount--
    this.g.getKey(KeyIds.Count_Dalie_Total_Hit).value++
    if (lw.img === '') {
      if (this.arrowCount <= 0) {
        this.arrowCount = 0
        this.showResult()
      }
      return
    }
    this.result.find(item => item.id === lw.itemId)!.count++
    this.g.addWp(lw.itemId)
    lw.img = ''
    this.currentDlGz.id = lw.id
    this.currentDlGz.showBZ = true
    this.g.getKey(KeyIds.Count_DaLie_Success_Hit).value++
    setTimeout(() => {
      this.currentDlGz.id = 0
      this.currentDlGz.showBZ = false
    }, 300)
    if (this.removeTimer[lw.id]) {
      clearTimeout(this.removeTimer[lw.id])
      this.removeTimer[lw.id] = 0
    }
    if (this.arrowCount <= 0) {
      this.arrowCount = 0
      this.showResult()
    }
  }

  showResult() {
    this.clearAllTimer()
    this.setDefault()
    this.showDlResult = true
    setTimeout(() => {
      this.canClose = true
    }, 1500)
  }

  goBack() {
    if (this.g.gmData.dl.type === 'zyhb') {
      this.g.current.cityGroup = CityGroupEnum.ShaoLinHouShan
    } else {
      this.g.current.cityGroup = jiaoWaiCityMap[this.g.current.city.id as CityIdEnumSp] || CityGroupEnum.JiaoWai
    }
    this.g.goToPage(PageEnum.City)
  }

  closeResult() {
    if (!this.canClose) {
      return
    }
    if (this.g.gmData.dl.target > 0) {
      this.t.isInTask = true
      setTimeout(() => {
        const allResultCount = this.result.reduce((total, item) => total + item.count, 0)
        if (allResultCount >= this.g.gmData.dl.target && this.g.gmData.dl.successTId > 0) {
          this.t.taskData.talkId = this.g.gmData.dl.successTId
          this.t.taskData.show = true
        } else if (this.g.gmData.dl.failTId > 0) {
          this.t.taskData.talkId = this.g.gmData.dl.failTId
          this.t.taskData.show = true
        }
        this.g.gmData.dl.successTId = 0
        this.g.gmData.dl.failTId = 0
        this.g.gmData.dl.target = 0
        setTimeout(() => {
          this.t.isInTask = false
        }, 20)
      }, 0)
    } else {
      this.g.gmData.dl.successTId = 0
      this.g.gmData.dl.failTId = 0
      this.g.gmData.dl.target = 0
    }
    this.goBack()
  }
}

interface LwItem {
  id: number
  img: string
  itemId: WpIdEnum
  isActive: boolean
}

interface Randlist {
  id: number
  items: { itemId: WpIdEnum; img: string }[]
}
