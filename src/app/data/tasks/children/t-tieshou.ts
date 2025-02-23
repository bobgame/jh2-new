import { HeroIdEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask, NoReward } from '../task.interface'

export const taskTieShou: JhTask = {
  rwId: RwIdEnum.TieShou,
  name: '铁手',
  tasks: [
    {
      id: TaskIds.TieShou_WuQing_AnZi,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.TieShou_WuQing_AnZi_1,
      allNeed: [[{ type: 'key', rule: '=', value: [KeyIds.WuQing_MinJia_1, 1] }]],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.WuQing_MinJia_1, value: 2 }],
      endAddTsk: {
        stRw: RwIdEnum.WuQing,
        id: TaskIds.WuQing_RenWuKa,
        toRw: RwIdEnum.WuQing,
        talkId: TaskTalkIds.WuQing_RenWuKa_1,
      },
    },

    // WuQing
    {
      id: TaskIds.WuQing_ZJ_JingCheng_TieShou,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_1,
      allNeed: [
        [
          { type: 'zj', rule: '=', value: [HeroIdEnum.WuQing] },
          { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_Main, 15] },
          { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_JingCheng_TieShou, 0] },
          { type: 'keyDay', rule: '>=', value: [KeyIds.WuQing_ZJ_Day_Check_TieShou, 1] },
          { type: 'city', rule: '=', value: [CityIdEnum.JingCheng] },
        ],
      ],
      reward: [...NoReward],
      endSetKey: [{ keyId: KeyIds.WuQing_ZJ_JingCheng_TieShou, value: 5 }],
    },
    {
      id: TaskIds.WuQing_ZJ_TieShou_RenWuKa,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.WuQing_ZJ_TieShou_RenWuKa_1,
      allNeed: [
        [
          { type: 'zj', rule: '=', value: [HeroIdEnum.WuQing] },
          { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_Main, 15] },
          { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_JingCheng_TieShou, 5] },
          { type: 'keyDay', rule: '>=', value: [KeyIds.WuQing_ZJ_Day_Check_TieShou, 1] },
          { type: 'city', rule: '=', value: [CityIdEnum.JingCheng] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.TieShou }],
      endSetKey: [{ keyId: KeyIds.WuQing_ZJ_JingCheng_TieShou, value: 15 }],
    },
  ],
}
