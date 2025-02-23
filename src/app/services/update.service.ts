import { Injectable } from '@angular/core'
import { GlobalService } from './global.service'
import { HttpClient } from '@angular/common/http'
import { clone } from '../units/Base'
import { appConfig, vs } from '../app.config'
import { environment } from '../../environments/environment'

interface UpDataItem {
  p: string
  v: number
  vt: string
  u: string
  b: string
  d: {
    t: string
    l: string[]
  }[]
}

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  upData: UpDataItem = {
    p: 'A',
    v: 2,
    vt: '0.7.8',
    u: '',
    b: '',
    d: [
      {
        t: '新增',
        l: ['更新了xxx', '更新了xxx'],
      },
      {
        t: '修复',
        l: ['修复了xxx', '修复了xxx'],
      },
    ],
  }

  constructor(
    private g: GlobalService,
    private http: HttpClient,
  ) {}

  getUpdate() {
    this.http.get('http://jh2up.llbnew.com/upup.json').subscribe(data => {
      if (data) {
        const upDataItems = data as UpDataItem[]
        const upData = upDataItems.find(item => item.p === environment.deploy)
        if (upData && upData.v > vs.up) {
          this.upData = clone(upData)
          this.g.show.pop.up = true
        }
      }
    })
  }
}
