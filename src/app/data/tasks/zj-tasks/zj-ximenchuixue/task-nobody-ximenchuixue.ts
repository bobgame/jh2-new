import { CityGroupEnum, HeroIdEnum } from '../../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../../constants/enums/rw.enum'
import { ZbIdEnum } from '../../../../constants/enums/zb.enum'
import { ChIds } from '../../../ch'
import { KeyIds } from '../../keys.interface'
import { TaskIds, TaskTalkIds } from '../../task.enum'
import { NoReward, TaskItem, TaskItemNeed } from '../../task.interface'

const XiMenChuiXueBaseNeed: TaskItemNeed[] = [{ type: 'zj', rule: '=', value: [HeroIdEnum.XiMenChuiXue] }]

export const noBodyTasksXiMenChuiXue: TaskItem[] = [
  {
    id: TaskIds.XiMenChuiXue_ZJ_Start,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiMenChuiXue_ZJ_Start,
    allNeed: [[...XiMenChuiXueBaseNeed, { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 0] }]],
    reward: [{ type: 'zb', value: ZbIdEnum.HuafuJian }],
    endSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 2 }],
  },
  {
    id: TaskIds.XiMenChuiXue_ZJ_QianShuHanMei,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiMenChuiXue_ZJ_QianShuHanMei_1,
    allNeed: [
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 2] },
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_QianShuHanMei, 0] },
        { type: 'wg', rule: '>=', value: [80] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.ZiZhai] },
      ],
    ],
    reward: [{ type: 'mj', value: MjIdEnum.QianShuHanMei }],
    endSetKey: [
      { keyId: KeyIds.XiMenChuiXue_ZJ_QianShuHanMei, value: 5 },
      { keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 5 },
    ],
  },
  {
    id: TaskIds.XiMenChuiXue_ZJ_MuDaoRen,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiMenChuiXue_ZJ_MuDaoRen_1,
    allNeed: [
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 5] },
        { type: 'wg', rule: '>=', value: [85] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 5] },
        { type: 'sw', rule: '>=', value: [30] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 8] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.XiMenChuiXue_ZJ_Day_Check, 15] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 10 }],
    endFailSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 8 }],
  },
  {
    id: TaskIds.XiMenChuiXue_ZJ_LingHuChong,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiMenChuiXue_ZJ_LingHuChong_1,
    allNeed: [
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 10] },
        { type: 'wg', rule: '>=', value: [87] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 10] },
        { type: 'sw', rule: '>=', value: [33] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 12] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.XiMenChuiXue_ZJ_Day_Check, 15] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 15 }],
    endFailSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 12 }],
  },
  {
    id: TaskIds.XiMenChuiXue_ZJ_ZiTiao,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiMenChuiXue_ZJ_ZiTiao_1,
    allNeed: [
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 15] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.XiMenChuiXue_ZJ_Day_Check, 30] },
        { type: 'sw', rule: '>=', value: [36] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 20 }],
  },
  {
    id: TaskIds.XiMenChuiXue_ZJ_TuiChiBiWu,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiMenChuiXue_ZJ_TuiChiBiWu_1,
    allNeed: [
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 20] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.XiMenChuiXue_ZJ_Day_Check, 5] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 25 }],
  },
  {
    id: TaskIds.XiMenChuiXue_ZJ_JueZhan,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiMenChuiXue_ZJ_JueZhan_1,
    allNeed: [
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 25] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.XiMenChuiXue_ZJ_Day_Check, 5] },
      ],
    ],
    reward: [
      { type: 'rw', value: RwIdEnum.YeGuCheng },
      { type: 'mj', value: MjIdEnum.TianWaiFeiXian },
    ],
    endSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 30 }],
    endFailSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 30 }],
  },
  {
    id: TaskIds.XiMenChuiXue_ZJ_LuXiaoFeng_QingQiu,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiMenChuiXue_ZJ_LuXiaoFeng_QingQiu_1,
    allNeed: [
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 30] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.XiMenChuiXue_ZJ_Day_Check, 15] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.ZiZhai] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 35 }],
  },
  {
    id: TaskIds.XiMenChuiXue_ZJ_LuXiaoFeng_YouLingShanZhuang,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiMenChuiXue_ZJ_LuXiaoFeng_YouLingShanZhuang_1,
    allNeed: [
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 35] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.XiMenChuiXue_ZJ_Day_Check, 3] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 40 }],
  },
  {
    id: TaskIds.XiMenChuiXue_ZJ_LuXiaoFeng_Help,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiMenChuiXue_ZJ_LuXiaoFeng_Help_1,
    allNeed: [
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 40] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.XiMenChuiXue_ZJ_Day_Check, 3] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.ZiZhai] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 45 }],
    endFailSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 42 }],
  },
  {
    id: TaskIds.XiMenChuiXue_ZJ_JianZhongZhiShen,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiMenChuiXue_ZJ_JianZhongZhiShen_1,
    allNeed: [
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_ZJ_Main, 45] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.XiMenChuiXue_ZJ_Day_Check, 20] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
    ],
    reward: [
      { type: 'rw', value: RwIdEnum.YuLuoCha },
      { type: 'ch', value: ChIds.JianZhongZhiShen },
    ],
    endSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 50 }],
    endFailSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_Main, value: 46 }],
  },
  {
    id: TaskIds.XiMenChuiXue_ZJ_TianXiaYouXue,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiMenChuiXue_ZJ_TianXiaYouXue_1,
    allNeed: [
      [
        ...XiMenChuiXueBaseNeed,
        { type: 'key', rule: '>=', value: [KeyIds.XiMenChuiXue_ZJ_TianXiaYouXue, 0] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.ZiZhai] },
        { type: 'wg', rule: '>=', value: [94] },
        { type: 'year', rule: '>=', value: [29] },
        { type: 'month', rule: '=', value: [12] },
      ],
    ],
    reward: [{ type: 'mj', value: MjIdEnum.TianXiaYouXue }],
    endSetKey: [{ keyId: KeyIds.XiMenChuiXue_ZJ_TianXiaYouXue, value: 5 }],
  },
]
