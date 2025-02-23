import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { GlobalService } from '../../../services/global.service'

@Component({
    selector: 'jh-ui-avatar',
    imports: [],
    templateUrl: './ui-avatar.component.html',
    styleUrl: './ui-avatar.component.scss'
})
export class UiAvatarComponent implements OnInit, OnChanges {
  constructor(private g: GlobalService) {}

  @Input() avatarData: AvatarItem = {
    type: 'rw',
    id: RwIdEnum.WuShi,
  }

  showAvatar = {
    type: 'rw',
    name: '',
    avatar: '301',
  }

  ngOnInit(): void {
    this.init()
  }

  ngOnChanges(): void {
    this.init()
  }

  init() {
    switch (this.avatarData.type) {
      case 'rw': {
        const rw = this.g.getRw(this.avatarData.id as RwIdEnum)
        this.showAvatar = {
          type: 'rw',
          name: rw.name,
          avatar: rw.avatar,
        }
        break
      }
      case 'zj': {
        const zj = this.g.getZj(this.avatarData.id as number)
        this.showAvatar = {
          type: 'zj',
          name: zj.name,
          avatar: zj.avatar,
        }
        break
      }
    }
  }
}

export interface AvatarItem {
  type: 'rw' | 'zj'
  id: number | RwIdEnum
}
