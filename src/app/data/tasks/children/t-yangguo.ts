import { CityGroupEnum, HeroIdEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskYangGuo: JhTask = {
  rwId: RwIdEnum.YangGuo,
  name: '杨过',
  tasks: [
    {
      id: TaskIds.YangGuo_RenWuKa,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.YangGuo_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.YangGuo_XuanTieJian, 5] },
          { type: 'key', rule: '=', value: [KeyIds.YangGuo_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'zj', value: HeroIdEnum.YangGuo }],
      endSetKey: [{ keyId: KeyIds.YangGuo_RenWuKa, value: 5 }],
    },
  ],
}
