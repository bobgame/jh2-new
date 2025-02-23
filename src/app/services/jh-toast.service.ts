import { Injectable } from '@angular/core'
import { MsgService } from './msg.service'
import { TaskRewardType } from '../data/tasks/task.interface'

@Injectable({
  providedIn: 'root',
})
export class JhToastService {
  constructor(private msgService: MsgService) {}

  toast: TaskToast = {
    show: false,
    type: 'jq',
    subType: '',
    content: '',
    id: 0,
  }

  closeToast() {
    this.toast.show = false
    if (this.toast.type === 'ch') {
      this.msgService.sendMsg({
        type: 'go',
        status: true,
      })
    } else if (this.toast.subType === 'tq') {
      this.msgService.sendMsg({
        type: 'tqToast',
        status: false,
      })
    } else {
      this.msgService.sendMsg({
        type: 'toast',
        status: false,
      })
    }
  }
}

export interface TaskToast {
  show: boolean
  type: TaskRewardType
  subType: '' | 'tq'
  content: string
  id: number | string
  nextExit?: boolean
}
