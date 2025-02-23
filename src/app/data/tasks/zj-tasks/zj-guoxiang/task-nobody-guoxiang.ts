import { CityGroupEnum, HeroIdEnum } from '../../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../../constants/enums/rw.enum'
import { WpIdEnum } from '../../../../constants/enums/wp.enum'
import { ZbIdEnum } from '../../../../constants/enums/zb.enum'
import { ChIds } from '../../../ch'
import { KeyIds } from '../../keys.interface'
import { TaskIds, TaskTalkIds } from '../../task.enum'
import { NoReward, TaskItem, TaskItemNeed } from '../../task.interface'

const GuoXiangBaseNeed: TaskItemNeed[] = [{ type: 'zj', rule: '=', value: [HeroIdEnum.GuoXiang] }]

export const noBodyTasksGuoXiang: TaskItem[] = [
  {
    id: TaskIds.GuoXiang_ZJ_Start,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.GuoXiang_ZJ_Start,
    allNeed: [[...GuoXiangBaseNeed, { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_Main, 0] }]],
    reward: [{ type: 'wp', value: WpIdEnum.JiuHuaYuLuWan }],
    endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 5 }],
  },
  {
    id: TaskIds.GuoXiang_ZJ_LiWu,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.GuoXiang_ZJ_LiWu_1,
    allNeed: [
      [
        ...GuoXiangBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_Main, 5] },
        { type: 'time', rule: '>=', value: [0, 1, 1, 3] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 10 }],
  },
  {
    id: TaskIds.GuoXiang_ZJ_XiangYang_GaoTai,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.GuoXiang_ZJ_XiangYang_GaoTai_1,
    allNeed: [
      [
        ...GuoXiangBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_Main, 10] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.GuoXiang_ZJ_Day_Check, 7] },
        { type: 'city', rule: '=', value: [CityIdEnum.XiangYang] },
        { type: 'cityGroup', rule: '=', value: [CityGroupEnum.JiaoWai] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 15 }],
    endFailSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 14 }],
  },
  {
    id: TaskIds.GuoXiang_ZJ_YouLi_GaoBie,
    type: 'ss',
    rate: 100,
    ...GuoXiangBaseNeed,
    talkId: TaskTalkIds.GuoXiang_ZJ_YouLi_GaoBie_1,
    allNeed: [
      [
        ...GuoXiangBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_Main, 15] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.GuoXiang_ZJ_Day_Check, 4] },
        { type: 'city', rule: '=', value: [CityIdEnum.XiangYang] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.MinJia] },
      ],
    ],
    reward: [{ type: 'zb', value: ZbIdEnum.RuanWeiJia }],
    endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 20 }],
  },
  {
    id: TaskIds.GuoXiang_ZJ_ShaoLin,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.GuoXiang_ZJ_ShaoLin_1,
    allNeed: [
      [
        ...GuoXiangBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_Main, 20] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.GuoXiang_ZJ_Day_Check, 3] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.JiuGuan] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 25 }],
  },
  {
    id: TaskIds.GuoXiang_ZJ_HeZuDao_ChuShi,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.GuoXiang_ZJ_HeZuDao_ChuShi_1,
    allNeed: [
      [
        ...GuoXiangBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_Main, 25] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.GuoXiang_ZJ_Day_Check, 2] },
        { type: 'cityGroup', rule: '=', value: [CityGroupEnum.JiaoWai, CityGroupEnum.ShaoLinHouShan, CityGroupEnum.GuangMingDing] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 30 }],
  },
  {
    id: TaskIds.GuoXiang_ZJ_HeZuDao_RenWuKa,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.GuoXiang_ZJ_HeZuDao_RenWuKa_1,
    allNeed: [
      [
        ...GuoXiangBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_Main, 30] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.GuoXiang_ZJ_Day_Check, 2] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.JiaoWai, CityGroupEnum.ShaoLinHouShan, CityGroupEnum.GuangMingDing] },
      ],
    ],
    reward: [{ type: 'rw', value: RwIdEnum.HeZuDao }],
    endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 35 }],
    endFailSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 35 }],
  },
  {
    id: TaskIds.GuoXiang_ZJ_JueYuan,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.GuoXiang_ZJ_JueYuan_1,
    allNeed: [
      [
        ...GuoXiangBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_Main, 35] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.GuoXiang_ZJ_Day_Check, 2] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.JiaoWai, CityGroupEnum.ShaoLinHouShan, CityGroupEnum.GuangMingDing] },
      ],
    ],
    reward: [{ type: 'mj', value: MjIdEnum.JiuYangZhenJing }],
    endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 40 }],
    endFailSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 40 }],
  },
  {
    id: TaskIds.GuoXiang_ZJ_XiangYang_ChengPo,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.GuoXiang_ZJ_XiangYang_ChengPo_1,
    allNeed: [
      [
        ...GuoXiangBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_Main, 40] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.GuoXiang_ZJ_Day_Check, 90] },
      ],
    ],
    reward: [
      { type: 'rw', value: RwIdEnum.GuoJing },
      { type: 'rw', value: RwIdEnum.HuangRong },
    ],
    endSetKey: [
      { keyId: KeyIds.GuoXiang_ZJ_Main, value: 45 },
      { keyId: KeyIds.GuoXiang_ZJ_XiangYang_YiChengPo, value: 1 },
    ],
  },
  {
    id: TaskIds.GuoXiang_ZJ_XiangYang_HuiJia,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.GuoXiang_ZJ_XiangYang_HuiJia_1,
    allNeed: [
      [
        ...GuoXiangBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_Main, 45] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.GuoXiang_ZJ_Day_Check, 1] },
      ],
    ],
    reward: [
      { type: 'mj', value: MjIdEnum.JiuYinZhenJing },
      { type: 'zb', value: ZbIdEnum.YiTianJian },
      { type: 'rw', value: RwIdEnum.HuangShang },
    ],
    endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 50 }],
  },
  {
    id: TaskIds.GuoXiang_ZJ_DaLi_DuanZiYu,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.GuoXiang_ZJ_DaLi_DuanZiYu_1,
    allNeed: [
      [
        ...GuoXiangBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_Main, 50] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.GuoXiang_ZJ_Day_Check, 180] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 55 }],
  },
  {
    id: TaskIds.GuoXiang_ZJ_EMei_JieJu,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.GuoXiang_ZJ_EMei_JieJu_1,
    allNeed: [
      [
        ...GuoXiangBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_Main, 55] },
        { type: 'city', rule: '=', value: [CityIdEnum.EMei] },
      ],
    ],
    reward: [
      { type: 'rw', value: RwIdEnum.ZhangSanFeng },
      { type: 'ch', value: ChIds.XiangQiEMei },
    ],
    endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_Main, value: 60 }],
  },
]
