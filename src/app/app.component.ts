import { Component, HostListener, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { GlobalService } from './services/global.service'
import { PageEnum } from './constants/enums/base.enum'
import { SettingsComponent } from './pages/settings/settings.component'
import { PlayGuideComponent } from './pages/play-guide/play-guide.component'
import { GameComponent } from './pages/game/game.component'
import { CardsComponent } from './pages/cards/cards.component'
import { ChooseHeroComponent } from './pages/choose-hero/choose-hero.component'
import packageJson from '../../package.json'
import { CityComponent } from './pages/city/city.component'
import { MapComponent } from './pages/map/map.component'
import { FightComponent } from './pages/fight/fight.component'
import { allLazyImg } from '../pre/lazy-img-src'
import { XbComponent } from './pages/game/xb/xb.component'
import { DlComponent } from './pages/game/dl/dl.component'
import { CyComponent } from './pages/game/cy/cy.component'
import { QinComponent } from './pages/game/qin/qin.component'
import { QiComponent } from './pages/game/qi/qi.component'
import { ShuComponent } from './pages/game/shu/shu.component'
import { HuaComponent } from './pages/game/hua/hua.component'
import { PopItemsComponent } from './common/pop/pop-items/pop-items.component'
import { PopMijiComponent } from './common/pop/pop-miji/pop-miji.component'
import { MgComponent } from './pages/game/mg/mg.component'
import { ClipboardModule, ClipboardService } from 'ngx-clipboard'
import { QiPanComponent } from './pages/tool/qi-pan/qi-pan.component'
import { DbComponent } from './pages/game/db/db.component'
import { PeiYaoComponent } from './pages/pei-yao/pei-yao.component'
import { SlComponent } from './pages/sl/sl.component'
import { UiToastComponent } from './common/ui/ui-toast/ui-toast.component'
import { JhToastService } from './services/jh-toast.service'
import { ZBComponent } from './pages/tool/zb/zb.component'
import { environment } from '../environments/environment'
import { taskTalks } from './data/tasks/task-talks'
import { TaskAnswerActions, TaskTalkIds } from './data/tasks/task.enum'
import { allTasksDefault } from './data/tasks/all-tasks'
import { PopChooseComponent } from './common/pop/pop-choose/pop-choose.component'
import { TaskQaItem } from './data/tasks/task.interface'
import { AnswerItem } from './constants/interfaces/base.interface'
import { HelpComponent } from './pages/help/help.component'
import { Msg, MsgService } from './services/msg.service'
import { TaskService } from './services/task.service'
import { UpdateService } from './services/update.service'
import { PopUpdateComponent } from './common/pop/pop-update/pop-update.component'
import { taskQaItems } from './data/tasks/task-qa'
import { SettingsService } from './services/settings.service'

declare let preFetchImageDoneNumPer: number
declare let cordova: any
declare let navigator: any

@Component({
  selector: 'jh-root',
  imports: [
    CommonModule,
    ClipboardModule,
    RouterOutlet,
    HomeComponent,
    HelpComponent,
    SettingsComponent,
    PlayGuideComponent,
    GameComponent,
    CardsComponent,
    ChooseHeroComponent,
    CityComponent,
    MapComponent,
    FightComponent,
    XbComponent,
    DlComponent,
    CyComponent,
    MgComponent,
    QinComponent,
    QiComponent,
    ShuComponent,
    HuaComponent,
    DbComponent,
    SlComponent,
    PopItemsComponent,
    PopMijiComponent,
    PeiYaoComponent,
    QiPanComponent,
    ZBComponent,
    PopChooseComponent,
    PopUpdateComponent,
    UiToastComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'JH2'
  PageEnum = PageEnum

  showQP = false
  showZB = false

  version = packageJson.version

  isLoading = true

  showQaChoose = false
  qaTitle = '[red]要退出游戏吗？[/red]'
  qaAnswers: AnswerItem[] = [
    { id: 1, text: '是', actionType: 1, actionValue: 0 },
    { id: 2, text: '否', actionType: 2, actionValue: 0 },
  ]

  constructor(
    public g: GlobalService,
    private clipboardService: ClipboardService,
    public jt: JhToastService,
    private msgService: MsgService,
    private t: TaskService,
    private u: UpdateService,
    public s: SettingsService,
  ) {}

  ngOnInit(): void {
    this.msgService.getMsg.subscribe(msg => {
      this.handleMsg(msg)
    })
    this.checkPreloadStatus()
    this.resize()
    window.onresize = this.resize

    this.initApp()

    setTimeout(() => {
      this.hideLoading()
    }, 5000)
    // npc name and mjs
    // this.g.rws.forEach(rw => {
    //   // console.log(rw.name + '\t' + rw.mjs.map(mj => this.g.getMj(mj).name).join('\t'))
    //   if (rw.wg <= 70 && rw.sw >= 0) {
    //     console.log(rw.name + '\t' + rw.wg)
    //   }
    // })
    if (!environment.production) {
      const taskTalkIds: TaskTalkIds[] = []
      taskTalks.forEach(tt => {
        if (taskTalkIds.includes(tt.id)) {
          console.log(`%c taskTalks id 重复: ${TaskTalkIds[tt.id]}`, 'font-size: 24px; color: #cb4d0c')
        } else {
          taskTalkIds.push(tt.id)
        }
        let id = 0
        tt.talks.forEach(t => {
          if (t.id === id + 1) {
            id++
          } else {
            console.log(`%c taskTalks talks id 错误: ${TaskTalkIds[tt.id]} ${t.id}`, 'font-size: 24px; color: #cb4d0c')
          }
        })
      })
      const taskQaIds: TaskTalkIds[] = []
      taskQaItems.forEach(qa => {
        if (taskQaIds.includes(qa.id)) {
          console.log(`%c taskQaItems id 重复: ${TaskTalkIds[qa.id]}`, 'font-size: 24px; color: #cb4d0c')
        } else {
          taskQaIds.push(qa.id)
        }

        qa.qa.answers.forEach(a => {
          if (a.id === 0) {
            console.log(`%c taskQaItems answers id 错误: ${TaskTalkIds[qa.id]} ${a.id}`, 'font-size: 24px; color: #cb4d0c')
          }
        })
      })
    }

    this.u.getUpdate()
    try {
      document.addEventListener('deviceready', this.onDeviceReady, false)
    } catch (error) {
      console.log(error)
    }
  }

  handleMsg(msg: Msg) {
    if (msg.type === 'go') {
      this.showGameoverQa()
    }
  }

  showGameoverQa() {
    this.qaTitle = '[red]要退出游戏吗？[/red]'
    this.qaAnswers = [
      { id: 1, text: '是', actionType: TaskAnswerActions.Gameover, actionValue: 1 },
      { id: 2, text: '否', actionType: TaskAnswerActions.Gameover, actionValue: 0 },
    ]
    this.showQaChoose = true
  }

  showExitQa() {
    this.qaTitle = '[red]要退出游戏吗？[/red]'
    this.qaAnswers = [
      { id: 1, text: '是', actionType: TaskAnswerActions.Exit, actionValue: 1 },
      { id: 2, text: '否', actionType: TaskAnswerActions.Exit, actionValue: 0 },
    ]
    this.showQaChoose = true
  }

  onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)
  }

  initApp() {
    this.g.initStorage().finally(() => {
      this.s.initSettings()
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    })
  }

  resize() {
    const loadingContentDom = document.querySelector('.jh2-web-loading-content') as HTMLElement
    const pageContainerDom = document.querySelector('.page-container') as HTMLElement
    const innerWidth = window.innerWidth
    const innerHeight = window.innerHeight

    let transform = 'translate(-50%, -50%) scale(1)'
    if ((innerWidth * 472) / 400 < innerHeight && innerWidth < 810) {
      transform = ' translate(-50%, -50%) scale(' + innerWidth / 410 + ')'
    } else if ((innerHeight * 400) / 472 < innerWidth && innerHeight < 1000) {
      transform = ' translate(-50%, -50%) scale(' + innerHeight / 500 + ')'
    } else {
      transform = 'translate(-50%, -50%) scale(2)'
    }

    if (pageContainerDom) pageContainerDom.style.transform = transform
    if (loadingContentDom) loadingContentDom.style.transform = transform
  }

  copy() {
    this.clipboardService.copy('701030167')
    // console.log('已复制到剪贴板')
  }

  checkPreloadStatus() {
    let num = 20
    const self = this
    const checkPreloadTimer = setInterval(() => {
      if (preFetchImageDoneNumPer >= 99) {
        self.setLoadingPercent(100)
        setTimeout(() => {
          self.hideLoading()
          self.lazyPreFetchImages()
        }, 100)
        clearInterval(checkPreloadTimer)
      }
      if (num > 0) {
        num--
      } else {
        self.hideLoading()
        clearInterval(checkPreloadTimer)
      }
    }, 500)
  }

  lazyPreFetchImageDoneNum = 0
  lazyPreFetchImageList = []
  lazyPreFetchPer = 0
  loadImage() {
    allLazyImg.forEach(item => {
      const img = new Image()
      img.onload = this.preFetchImageLoadHandler
      img.onload = this.preFetchImageLoadHandler
      img.src = item
    })
  }
  preFetchImageLoadHandler = () => {
    this.lazyPreFetchImageDoneNum++
  }
  preFetchImageErrorHandler = (e: HTMLImageElement) => {
    console.error('preFetchImageErrorHandler', e, typeof e)
  }

  lazyPreFetchImages() {
    this.loadImage()
    let num = 20
    const self = this
    const checkProgress = setInterval(() => {
      let tempPre = Math.floor((self.lazyPreFetchImageDoneNum * 1000) / (allLazyImg.length - 1)) / 10
      if (tempPre >= 98) {
        tempPre = 98
      }
      self.lazyPreFetchPer = tempPre
      if (tempPre >= 98) {
        tempPre = 100
        clearInterval(checkProgress)
      }
      if (num > 0) {
        num--
      } else {
        // console.log('lazyPreFetchImages timeout')
        clearInterval(checkProgress)
      }
    }, 1000)
  }

  hideLoading() {
    const jh2WebLoading = document.getElementById('jh2-web-loading')
    if (jh2WebLoading) jh2WebLoading.style.display = 'none'
  }

  showLoading() {
    const jh2WebLoading = document.getElementById('jh2-web-loading')
    if (jh2WebLoading) jh2WebLoading.style.display = 'block'
  }

  setLoadingPercent(per: number) {
    preFetchImageDoneNumPer = per
    const jh2WebLoadingTP = document.getElementById('jh2-web-loading-text-percent')
    if (jh2WebLoadingTP) jh2WebLoadingTP.innerText = per + ''
    const jh2WebLoadingTH = document.getElementById('jh2-web-loading-highlight')
    if (jh2WebLoadingTH) jh2WebLoadingTH.style.width = per + '%'
  }

  exitAnswer(answer: AnswerItem) {
    if (answer.actionType === TaskAnswerActions.Exit) {
      if (answer.actionValue === 1) {
        navigator.app.exitApp()
      } else {
        this.showQaChoose = false
      }
    } else if (answer.actionType === TaskAnswerActions.Gameover) {
      if (answer.actionValue === 1) {
        this.g.od.show = true
        this.t.taskData.show = false
        this.g.goToPage(PageEnum.Home)
      }
      this.showQaChoose = false
      this.t.taskData.show = false
    }
  }

  checkUpdate() {}

  @HostListener('document:backbutton', ['$event'])
  backButtonHandler(event: MessageEvent) {
    if (!this.g.od.show) {
      if (!this.showQaChoose) {
        this.showExitQa()
      } else {
        this.showQaChoose = false
      }
    }
    return false
  }

  @HostListener('document:contextmenu', ['$event'])
  contextmenuHandler(event: MessageEvent) {
    event.preventDefault()
  }

  @HostListener('document:selectstart', ['$event'])
  selectstartHandler(event: MessageEvent) {
    event.preventDefault()
  }
}
