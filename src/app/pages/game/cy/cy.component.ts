import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { UiFrameComponent } from '../../../common/ui/ui-frame/ui-frame.component'
import { GlobalService } from '../../../services/global.service'
import { WpIdEnum } from '../../../constants/enums/wp.enum'
import { clone, rand, sampleItem } from '../../../units/Base'
import { CityGroupEnum, PageEnum } from '../../../constants/enums/base.enum'
import { cyAllItems, cyBaseItems } from './cy-data'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { CityIdEnumSp, jiaoWaiCityMap } from '../../city/city-data'
import { TaskService } from '../../../services/task.service'
import { KeyIds } from '../../../data/tasks/keys.interface'
import { TaskTalkIds } from '../../../data/tasks/task.enum'

@Component({
  selector: 'jh-cy',
  standalone: true,
  imports: [CommonModule, UiFrameComponent],
  templateUrl: './cy.component.html',
  styleUrl: './cy.component.scss',
})
export class CyComponent implements OnInit {
  constructor(
    private g: GlobalService,
    private t: TaskService,
  ) {}

  cyList: WpIdEnum[] = []

  gzList = clone(new Array(15).fill({ img: 'not-get' }))

  currentGzIndex = -1
  inWork = false
  showCyResult = false
  cyProgress = 0
  result = {
    img: 'not-get',
    name: '未知',
  }
  cyCount = 0

  ngOnInit() {
    this.init()
  }

  init() {
    if (cyAllItems[this.g.current.city.id]) {
      this.cyList = clone(cyAllItems[this.g.current.city.id])
    } else {
      this.cyList = clone(cyBaseItems)
    }
    this.g.getKey(KeyIds.Count_CaiYao_Game).value++
  }

  cy(index: number) {
    this.currentGzIndex = index
    const currentGz = this.gzList[index]
    if (this.inWork || currentGz.img !== 'not-get') {
      return
    }
    this.inWork = true
    this.showCyResult = false
    setTimeout(() => {
      this.cyProgress = 100
    }, 0)
    setTimeout(() => {
      // this.inWork = false
      this.addCyItem(index)
    }, 700)
  }

  addCyItem(index: number) {
    const currentGz = this.gzList[index]
    if (currentGz.img === 'not-get') {
      this.cyCount++
      let emptyTarget = 0.55
      if (this.g.hero.jn.xb > 0) {
        emptyTarget = 1
      }
      const dccMust = this.cyCount === 3 && this.g.gmData.cy.successTId === TaskTalkIds.YangGuo_ZJ_FangSheng_DuanChangCao_3
      if (rand() > emptyTarget && !dccMust) {
        this.gzList[index].img = 'empty'
        this.checkResult()
      } else {
        let gotItem = this.g.getWp(sampleItem(this.cyList))
        if (dccMust) gotItem = this.g.getWp(WpIdEnum.DuanChangCao)
        if (gotItem) {
          this.gzList[index].img = gotItem.avatar + ''
          this.result.img = gotItem.avatar + ''
          this.result.name = gotItem.name
          this.g.addWp(gotItem.id)
          this.showCyResult = true
          this.g.gmData.cy.get = true
          this.g.getKey(KeyIds.Count_CaiYao_Success).value++
        }
      }
      this.g.getKey(KeyIds.Count_CaiYao_Total).value++
    }
  }

  closeResult() {
    this.showCyResult = false
    this.checkResult()
  }

  checkResult() {
    this.inWork = false
    this.cyProgress = 0
    if (this.cyCount >= 3) {
      let talkId = 0
      if (this.g.gmData.cy.get && this.g.gmData.cy.successTId > 0) {
        talkId = this.g.gmData.cy.successTId
      } else if (this.g.gmData.cy.failTId > 0 && !this.g.gmData.cy.get) {
        talkId = this.g.gmData.cy.failTId
      }
      if (talkId > 0) {
        this.t.isInTask = true
        setTimeout(() => {
          this.t.taskData.talkId = talkId
          this.t.taskData.show = true
          this.g.gmData.cy.successTId = 0
          this.g.gmData.cy.failTId = 0
          this.g.gmData.cy.get = false
          setTimeout(() => {
            this.t.isInTask = false
          }, 20)
        }, 50)
      } else {
        this.g.gmData.cy.successTId = 0
        this.g.gmData.cy.failTId = 0
        this.g.gmData.cy.get = false
      }
      this.g.current.cityGroup = jiaoWaiCityMap[this.g.current.city.id as CityIdEnumSp] || CityGroupEnum.JiaoWai
      this.g.goToPage(PageEnum.City)
    }
  }
}
