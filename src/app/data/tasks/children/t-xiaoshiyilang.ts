import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { ZbIdEnum } from '../../../constants/enums/zb.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskXiaoShiYiLang: JhTask = {
  rwId: RwIdEnum.XiaoShiYiLang,
  name: '萧十一郎',
  tasks: [
    {
      id: TaskIds.XiaoShiYiLang_RenWuKa_pre,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.XiaoShiYiLang_RenWuKa_pre_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.XiaoShiYiLang_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [25] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.XiaoShiYiLang_RenWuKa, value: 5 }],
    },
  ],
}
