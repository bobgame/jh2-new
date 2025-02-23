import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskFengSiNiang: JhTask = {
  rwId: RwIdEnum.FengSiNiang,
  name: '风四娘',
  tasks: [
    {
      id: TaskIds.FengSiNiang_RenWuKa,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.FengSiNiang_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.XiaoShiYiLang_RenWuKa, 10] },
          { type: 'key', rule: '=', value: [KeyIds.FengSiNiang_RenWuKa, 0] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.FengSiNiang }],
      endSetKey: [{ keyId: KeyIds.FengSiNiang_RenWuKa, value: 5 }],
    },
  ],
}
