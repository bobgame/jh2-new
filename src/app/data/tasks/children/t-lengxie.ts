import { HeroIdEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask, NoReward } from '../task.interface'

export const taskLengXie: JhTask = {
  rwId: RwIdEnum.LengXie,
  name: '冷血',
  tasks: [
    // WuQing
    {
      id: TaskIds.WuQing_ZJ_JingCheng_LengXie,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.WuQing_ZJ_JingCheng_LengXie_1,
      allNeed: [
        [
          { type: 'zj', rule: '=', value: [HeroIdEnum.WuQing] },
          { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_Main, 15] },
          { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_JingCheng_LengXie, 0] },
          { type: 'keyDay', rule: '>=', value: [KeyIds.WuQing_ZJ_Day_Check_LengXie, 1] },
          { type: 'city', rule: '=', value: [CityIdEnum.JingCheng] },
        ],
      ],
      reward: [...NoReward],
      endSetKey: [{ keyId: KeyIds.WuQing_ZJ_JingCheng_LengXie, value: 5 }],
    },
    {
      id: TaskIds.WuQing_ZJ_LengXie_RenWuKa,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.WuQing_ZJ_LengXie_RenWuKa_1,
      allNeed: [
        [
          { type: 'zj', rule: '=', value: [HeroIdEnum.WuQing] },
          { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_Main, 15] },
          { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_JingCheng_LengXie, 5] },
          { type: 'keyDay', rule: '>=', value: [KeyIds.WuQing_ZJ_Day_Check_LengXie, 1] },
          { type: 'city', rule: '=', value: [CityIdEnum.JingCheng] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.LengXie }],
      endSetKey: [{ keyId: KeyIds.WuQing_ZJ_JingCheng_LengXie, value: 15 }],
    },
  ],
}
