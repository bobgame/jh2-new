import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskWuQing: JhTask = {
  rwId: RwIdEnum.WuQing,
  name: '无情',
  tasks: [
    {
      id: TaskIds.WuQing_RenWuKa,
      type: 'ss',
      rate: 60,
      talkId: TaskTalkIds.WuQing_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.WuQing_MinJia_1, 2] },
          { type: 'heart', rule: '>=', value: [75] },
        ],
      ],
      reward: [{ type: 'zj', value: 6 }],
      endSetKey: [{ keyId: KeyIds.WuQing_MinJia_1, value: 3 }],
    },
    {
      id: TaskIds.WuQing_QingRenJian,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.WuQing_QingRenJian, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.QingRenJian }],
      endSetKey: [{ keyId: KeyIds.WuQing_QingRenJian, value: 1 }],
    },
  ],
}
