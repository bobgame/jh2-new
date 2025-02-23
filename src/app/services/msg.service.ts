import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/internal/Subject'

@Injectable({
  providedIn: 'root',
})
export class MsgService {
  private msgSubject = new Subject<Msg>()

  getMsg = this.msgSubject.asObservable()

  public sendMsg(msg: Msg) {
    this.msgSubject.next(msg)
  }
}

export type MsgType = 'toast' | 'fight' | 'tqToast' | 'go'

export interface Msg {
  type: MsgType
  status?: boolean
  message?: string
}
