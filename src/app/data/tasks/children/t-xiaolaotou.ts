import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskXiaoLaoTou: JhTask = {
  rwId: RwIdEnum.XiaoLaoTou,
  name: '小老头',
  tasks: [
    {
      id: TaskIds.XiaoLaoTou_NianHuaZhi,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.XiaoLaoTou_NianHuaZhi, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.NianHuaZhi }],
      endSetKey: [{ keyId: KeyIds.XiaoLaoTou_NianHuaZhi, value: 1 }],
    },
    {
      id: TaskIds.XiaoLaoTou_RenWuKa,
      type: 'ss',
      rate: 40,
      talkId: TaskTalkIds.XiaoLaoTou_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.XiaoLaoTou_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [100] },
          { type: 'city', rule: '=', value: [CityIdEnum.XiaoDao] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.DuChang] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.XiaoLaoTou }],
      endSetKey: [{ keyId: KeyIds.XiaoLaoTou_RenWuKa, value: 5 }],
    },
    {
      id: TaskIds.XiaoLaoTou_Du,
      type: 'ss',
      rate: 30,
      talkId: TaskTalkIds.XiaoLaoTou_Du_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.Rand_Key_1, 0] },
          { type: 'key', rule: '=', value: [KeyIds.XiaoLaoTou_RenWuKa, 5] },
          { type: 'city', rule: '=', value: [CityIdEnum.XiaoDao] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.DuChang] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.Rand_Key_1, value: 1 }],
      endFailSetKey: [{ keyId: KeyIds.Rand_Key_1, value: 1 }],
    },
  ],
}
