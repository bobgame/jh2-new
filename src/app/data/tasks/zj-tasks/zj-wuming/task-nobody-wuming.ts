import { CityGroupEnum, HeroIdEnum } from '../../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../../constants/enums/rw.enum'
import { ZbIdEnum } from '../../../../constants/enums/zb.enum'
import { ChIds } from '../../../ch'
import { KeyIds } from '../../keys.interface'
import { TaskIds, TaskTalkIds } from '../../task.enum'
import { TaskItem, TaskItemNeed } from '../../task.interface'

const WuMingBaseNeed: TaskItemNeed[] = [{ type: 'zj', rule: '=', value: [HeroIdEnum.WuMing] }]

export const noBodyTasksWuMing: TaskItem[] = [
  {
    id: TaskIds.WuShi_DuChang,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.WuShi_DuChang_1,
    allNeed: [
      [
        ...WuMingBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.WuShi_DuChang, 0] },
        { type: 'cityGroup', rule: '!=', value: [CityGroupEnum.Normal] },
        { type: 'time', rule: '>=', value: [0, 1, 16, 1] },
      ],
    ],
    reward: [{ type: 'none', value: 0 }],
    endSetKey: [{ keyId: KeyIds.WuShi_DuChang, value: 5 }],
    endFailSetKey: [{ keyId: KeyIds.WuShi_DuChang, value: 1 }],
  },
]
