import { CityGroupEnum, HeroIdEnum } from '../../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../../constants/enums/rw.enum'
import { ZbIdEnum } from '../../../../constants/enums/zb.enum'
import { ChIds } from '../../../ch'
import { KeyIds } from '../../keys.interface'
import { TaskIds, TaskTalkIds } from '../../task.enum'
import { NoReward, TaskItem, TaskItemNeed } from '../../task.interface'

const WuQingBaseNeed: TaskItemNeed[] = [{ type: 'zj', rule: '=', value: [HeroIdEnum.WuQing] }]

export const noBodyTasksWuQing: TaskItem[] = [
  {
    id: TaskIds.WuQing_ZJ_Start,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.WuQing_ZJ_Start_1,
    allNeed: [[...WuQingBaseNeed, { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_Main, 0] }]],
    reward: [
      { type: 'jq', value: 500 * 1000 },
      { type: 'zb', value: ZbIdEnum.XianHeShenZhen },
    ],
    endSetKey: [{ keyId: KeyIds.WuQing_ZJ_Main, value: 5 }],
  },
  {
    id: TaskIds.WuQing_ZJ_LuoYang_DiaoCha,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_1,
    allNeed: [
      [
        ...WuQingBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_Main, 5] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.WuQing_ZJ_Day_Check, 3] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.WuQing_ZJ_Main, value: 10 }],
  },
  {
    id: TaskIds.WuQing_ZJ_XiangYang_ZhuiMing,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_1,
    allNeed: [
      [
        ...WuQingBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_Main, 10] },
        { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_XiangYang_ZhuiMing, 0] },
        { type: 'city', rule: '=', value: [CityIdEnum.XiangYang] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [
      { keyId: KeyIds.WuQing_ZJ_ChangAn_TieShou, value: 10 },
      { keyId: KeyIds.WuQing_ZJ_XiangYang_ZhuiMing, value: 10 },
    ],
  },
  {
    id: TaskIds.WuQing_ZJ_ChangAn_TieShou,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_1,
    allNeed: [
      [
        ...WuQingBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_Main, 10] },
        { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_ChangAn_TieShou, 0] },
        { type: 'city', rule: '=', value: [CityIdEnum.ChangAn] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [
      { keyId: KeyIds.WuQing_ZJ_ChangAn_TieShou, value: 10 },
      { keyId: KeyIds.WuQing_ZJ_XiangYang_ZhuiMing, value: 10 },
    ],
  },
  {
    id: TaskIds.WuQing_ZJ_SuZhou_LengXie,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.WuQing_ZJ_SuZhou_LengXie_1,
    allNeed: [
      [
        ...WuQingBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_Main, 10] },
        { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_XiangYang_ZhuiMing, 10] },
        { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_ChangAn_TieShou, 10] },
        { type: 'city', rule: '=', value: [CityIdEnum.SuZhou] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.WuQing_ZJ_Main, value: 15 }],
  },

  {
    id: TaskIds.WuQing_ZJ_JieJu,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.WuQing_ZJ_JieJu_1,
    allNeed: [
      [
        ...WuQingBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_Main, 15] },
        { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_JingCheng_ZhuiMing, 15] },
        { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_JingCheng_LengXie, 15] },
        { type: 'key', rule: '=', value: [KeyIds.WuQing_ZJ_JingCheng_TieShou, 15] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.WuQing_ZJ_Day_Check_ZhuiMing, 30] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.WuQing_ZJ_Day_Check_LengXie, 30] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.WuQing_ZJ_Day_Check_TieShou, 30] },
        { type: 'city', rule: '=', value: [CityIdEnum.JingCheng] },
      ],
    ],
    reward: [{ type: 'ch', value: ChIds.SiDaMingBu }],
    endSetKey: [{ keyId: KeyIds.WuQing_ZJ_Main, value: 20 }],
  },
]
