import { CityGroupEnum, HeroIdEnum } from '../../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../../constants/enums/rw.enum'
import { ZbIdEnum } from '../../../../constants/enums/zb.enum'
import { ChIds } from '../../../ch'
import { KeyIds } from '../../keys.interface'
import { TaskIds, TaskTalkIds } from '../../task.enum'
import { NoReward, TaskItem, TaskItemNeed } from '../../task.interface'

const LuXiaoFengBaseNeed: TaskItemNeed[] = [{ type: 'zj', rule: '=', value: [HeroIdEnum.LuXiaoFeng] }]

export const noBodyTasksLuXiaoFeng: TaskItem[] = [
  {
    id: TaskIds.LuXiaoFeng_ZJ_Start,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.LuXiaoFeng_ZJ_DC_SiKongZhaiXing_1,
    allNeed: [
      [
        ...LuXiaoFengBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_ZJ_Main, 0] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.DuChang] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.LuXiaoFeng_ZJ_Main, value: 5 }],
  },
  {
    id: TaskIds.LuXiaoFeng_ZJ_DuanDai,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.LuXiaoFeng_ZJ_DuanDai_1,
    allNeed: [
      [
        ...LuXiaoFengBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_ZJ_Main, 5] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.LuXiaoFeng_ZJ_Day_Check, 1] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.LuXiaoFeng_ZJ_Main, value: 10 }],
  },
  {
    id: TaskIds.LuXiaoFeng_ZJ_ZiJinCheng,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.LuXiaoFeng_ZJ_ZiJinCheng_1,
    allNeed: [
      [
        ...LuXiaoFengBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_ZJ_Main, 10] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.LuXiaoFeng_ZJ_Day_Check, 1] },
        { type: 'city', rule: '=', value: [CityIdEnum.JingCheng] },
      ],
    ],
    reward: [{ type: 'zj', value: HeroIdEnum.XiMenChuiXue }],
    endSetKey: [{ keyId: KeyIds.LuXiaoFeng_ZJ_Main, value: 15 }],
    endFailSetKey: [{ keyId: KeyIds.LuXiaoFeng_ZJ_Main, value: 12 }],
  },
  {
    id: TaskIds.LuXiaoFeng_ZJ_GOTO_XiaoDao,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.LuXiaoFeng_ZJ_GOTO_XiaoDao_1,
    allNeed: [
      [
        ...LuXiaoFengBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_ZJ_Main, 15] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.LuXiaoFeng_ZJ_Day_Check, 3] },
        { type: 'sw', rule: '>=', value: [40] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.LuXiaoFeng_ZJ_Main, value: 20 }],
  },
  {
    id: TaskIds.LuXiaoFeng_ZJ_XiaoDao_XiaoLaoTou,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.LuXiaoFeng_ZJ_XiaoDao_XiaoLaoTou_1,
    allNeed: [
      [
        ...LuXiaoFengBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_ZJ_Main, 20] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.DuChang] },
        { type: 'city', rule: '=', value: [CityIdEnum.XiaoDao] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.LuXiaoFeng_ZJ_Main, value: 25 }],
    endFailSetKey: [{ keyId: KeyIds.LuXiaoFeng_ZJ_Main, value: 24 }],
  },
  {
    id: TaskIds.LuXiaoFeng_ZJ_XiaoLaoTou_YinXingRen,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.LuXiaoFeng_ZJ_XiaoLaoTou_YinXingRen_1,
    allNeed: [
      [
        ...LuXiaoFengBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_ZJ_Main, 25] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.LuXiaoFeng_ZJ_Day_Check, 2] },
        { type: 'city', rule: '=', value: [CityIdEnum.XiaoDao] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.LuXiaoFeng_ZJ_Main, value: 30 }],
    endFailSetKey: [{ keyId: KeyIds.LuXiaoFeng_ZJ_Main, value: 26 }],
  },
  {
    id: TaskIds.LuXiaoFeng_ZJ_JieJu,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.LuXiaoFeng_ZJ_JieJu_1,
    allNeed: [
      [
        ...LuXiaoFengBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_ZJ_Main, 30] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.LuXiaoFeng_ZJ_Day_Check, 1] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
    ],
    reward: [
      { type: 'rw', value: RwIdEnum.ShaMan },
      { type: 'ch', value: ChIds.FengWuJiuTian },
    ],
    failReward: [
      { type: 'rw', value: RwIdEnum.LaoShiHeShang },
      { type: 'rw', value: RwIdEnum.GongJiu },
      { type: 'rw', value: RwIdEnum.SiKongZhaiXing },
    ],
    endSetKey: [{ keyId: KeyIds.LuXiaoFeng_ZJ_Main, value: 35 }],
    endFailSetKey: [{ keyId: KeyIds.LuXiaoFeng_ZJ_Main, value: 32 }],
  },
]
