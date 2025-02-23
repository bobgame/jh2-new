import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { ChIds } from '../../ch'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskGuoXiang: JhTask = {
  rwId: RwIdEnum.GuoXiang,
  name: '郭襄',
  tasks: [
    {
      id: TaskIds.GuoXiang_FuQin_1,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.GuoXiang_FuQin_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.GuoXiang_FuQin, 0] },
          { type: 'zj', rule: '=', value: [1] },
          { type: 'yearTime', rule: '>=', value: [0, 3, 1, 1] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.GuoXiang_FuQin, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.GuoXiang_FuQin, value: 4 }],
    },
    {
      id: TaskIds.GuoXiang_FuQin_2,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.GuoXiang_FuQin_11,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.GuoXiang_FuQin, 5] },
          { type: 'zj', rule: '=', value: [1] },
        ],
      ],
      reward: [{ type: 'jn', value: 'fq' }],
      endSetKey: [{ keyId: KeyIds.GuoXiang_FuQin, value: 10 }],
    },
  ],
}
