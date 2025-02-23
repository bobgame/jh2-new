import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskWuMingLaoSeng: JhTask = {
  rwId: RwIdEnum.WuMingLaoSeng,
  name: '无名老僧',
  tasks: [
    {
      id: TaskIds.WuMingLaoSeng_NianHuaZhi,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.WuMingLaoSeng_NianHuaZhi, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.NianHuaZhi }],
      endSetKey: [{ keyId: KeyIds.WuMingLaoSeng_NianHuaZhi, value: 1 }],
    },
    {
      id: TaskIds.WuMingLaoSeng_RenWuKa,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.WuMingLaoSeng_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.WuMingLaoSeng_RenWuKa, 5] },
          { type: 'heart', rule: '>=', value: [25] },
          { type: 'wg', rule: '>=', value: [90] },
          { type: 'city', rule: '=', value: [CityIdEnum.ShaoLin] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.CangJingGe] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.WuMingLaoSeng }],
      endSetKey: [{ keyId: KeyIds.WuMingLaoSeng_RenWuKa, value: 10 }],
    },
  ],
}
