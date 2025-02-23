import { HeroIdEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask, NoReward } from '../task.interface'

export const taskZhuiMing: JhTask = {
  rwId: RwIdEnum.ZhuiMing,
  name: '追命',
  tasks: [
    // WuQing
    {
      id: TaskIds.WuQing_ZJ_JingCheng_ZhuiMing,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_1,
      allNeed: [
        [
          { type: 'zj', rule: '=', value: [HeroIdEnum.WuQing] },
          { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_Main, 15] },
          { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_JingCheng_ZhuiMing, 0] },
          { type: 'keyDay', rule: '>=', value: [KeyIds.WuQing_ZJ_Day_Check_ZhuiMing, 1] },
          { type: 'city', rule: '=', value: [CityIdEnum.JingCheng] },
        ],
      ],
      reward: [...NoReward],
      endSetKey: [{ keyId: KeyIds.WuQing_ZJ_JingCheng_ZhuiMing, value: 5 }],
    },
    {
      id: TaskIds.WuQing_ZJ_ZhuiMing_RenWuKa,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.WuQing_ZJ_ZhuiMing_RenWuKa_1,
      allNeed: [
        [
          { type: 'zj', rule: '=', value: [HeroIdEnum.WuQing] },
          { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_Main, 15] },
          { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_JingCheng_ZhuiMing, 5] },
          { type: 'keyDay', rule: '>=', value: [KeyIds.WuQing_ZJ_Day_Check_ZhuiMing, 1] },
          { type: 'city', rule: '=', value: [CityIdEnum.JingCheng] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.ZhuiMing }],
      endSetKey: [{ keyId: KeyIds.WuQing_ZJ_JingCheng_ZhuiMing, value: 15 }],
    },
  ],
}
