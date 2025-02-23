import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core'
import { GlobalService } from '../../../services/global.service'
import { CommonModule } from '@angular/common'
import { UiBtnCloseComponent } from '../../../common/ui/ui-btn-close/ui-btn-close.component'
import { AnswerItem } from '../../../constants/interfaces/base.interface'
import { CityGroupEnum, PageEnum } from '../../../constants/enums/base.enum'
import { PopChooseComponent } from '../../../common/pop/pop-choose/pop-choose.component'
import { exitQa } from '../../../data/base'
import { clone } from '../../../units/Base'
import { TaskService } from '../../../services/task.service'
import { TaskIds, TaskTalkIds } from '../../../data/tasks/task.enum'
import { KeyIds } from '../../../data/tasks/keys.interface'
import { environment } from '../../../../environments/environment'
import { CityIdEnumSp, jiaoWaiCityMap } from '../../city/city-data'
import { MazeComponent } from './maze/maze.component'

@Component({
  selector: 'jh-mg',
  imports: [CommonModule, UiBtnCloseComponent, PopChooseComponent, MazeComponent],
  templateUrl: './mg.component.html',
  styleUrl: './mg.component.scss',
})
export class MgComponent implements OnInit {
  constructor(
    public g: GlobalService,
    private t: TaskService,
  ) {}

  showChoose = false

  showIframe = false

  showMlMask = true

  showExitBtn = true

  isProd = environment.production

  exitQa = clone(exitQa)

  ngOnInit(): void {
    this.exitQa.question = '放弃吗？'
    if (this.g.gmData.mg.successTId > 0 && !this.g.gmData.mg.canBack) {
      this.showExitBtn = false
    }
    this.g.getKey(KeyIds.Count_MiGong_Game).value++

    // if (!environment.production) {
    //   this.showMlMask = false
    // }
  }

  // ngAfterViewInit(): void {
  //   window.addEventListener('message', this.listenIframe.bind(this), false)
  // }

  // ngOnDestroy(): void {
  //   window.removeEventListener('message', this.listenIframe)
  // }

  listenIframe(e: MessageEvent) {
    if (e && e.data && e.data.type === 'maze-to-jh2' && e.data.data && e.data.data.key === 'maze-win' && e.data.data.status === true) {
      this.win()
    }
  }

  winMaze() {
    this.win()
  }

  showExit() {
    this.showChoose = true
  }

  exitAnswer(answer: AnswerItem) {
    if (answer.actionValue === 1) {
      this.forceClose()
    } else {
      this.showChoose = false
    }
  }

  forceClose() {
    this.g.current.cityGroup = CityGroupEnum.Normal
    this.g.goToPage(PageEnum.City)
    setTimeout(() => {
      if (this.g.gmData.mg.failTId > 0 && this.g.gmData.mg.canBack) {
        if (this.g.gmData.mg.failTId === TaskTalkIds.NoTalkJiuYangZhenJing_removeTask) {
          this.g.getKey(KeyIds.JiuYangZhenJing_1).value = 0
          this.t.removeTask(TaskIds.NoBody_JiuYangZhenJing)
        } else {
          this.t.taskData.talkId = this.g.gmData.mg.failTId
          this.t.taskData.show = true
        }
      }
      this.g.gmData.mg.successTId = 0
      this.g.gmData.mg.failTId = 0
    }, 0)
  }

  win() {
    this.g.getKey(KeyIds.Count_MiGong_Success).value++
    if (this.g.gmData.mg.successTId > 0) {
      this.t.isInTask = true
      setTimeout(() => {
        if (this.g.gmData.mg.successTId === TaskTalkIds.NoTalkJiuYangZhenJing_toDL) {
          this.g.gmData.dl.type = 'normal'
          this.g.gmData.dl.point = 0
          this.g.gmData.dl.target = 1
          this.g.gmData.dl.successTId = TaskTalkIds.JiuYangZhenJing_1
          this.g.gmData.dl.failTId = TaskTalkIds.JiuYangZhenJing_1
          this.g.goToPage(PageEnum.GameDl)
        } else {
          this.t.taskData.talkId = this.g.gmData.mg.successTId
          this.t.taskData.show = true
        }
        this.g.gmData.mg.successTId = 0
        this.g.gmData.mg.failTId = 0
        setTimeout(() => {
          this.t.isInTask = false
        }, 20)
      }, 0)
    }
    this.g.current.cityGroup = jiaoWaiCityMap[this.g.current.city.id as CityIdEnumSp] || CityGroupEnum.JiaoWai
    this.g.goBack()
  }

  @HostListener('window:message', ['$event'])
  myMethodOnPopstate(event: MessageEvent) {
    this.listenIframe(event)
  }
}
