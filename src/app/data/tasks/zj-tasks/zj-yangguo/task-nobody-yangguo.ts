import { CityGroupEnum, HeroIdEnum } from '../../../../constants/enums/base.enum'
import { CityIdEnum, AllJiaoWai } from '../../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../../constants/enums/rw.enum'
import { WpIdEnum } from '../../../../constants/enums/wp.enum'
import { ZbIdEnum } from '../../../../constants/enums/zb.enum'
import { ChIds } from '../../../ch'
import { KeyIds } from '../../keys.interface'
import { TaskIds, TaskTalkIds } from '../../task.enum'
import { NoReward, TaskItem, TaskItemNeed } from '../../task.interface'

const YangGuoBaseNeed: TaskItemNeed[] = [{ type: 'zj', rule: '=', value: [HeroIdEnum.YangGuo] }]

export const noBodyTasksYangGuo: TaskItem[] = [
  {
    id: TaskIds.YangGuo_ZJ_ShenDiao_JiaoWai,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_ZJ_ShenDiao_JiaoWai_1,
    allNeed: [
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 0] },
        { type: 'jq', rule: '>=', value: [200 * 1000] },
        { type: 'citySS', rule: '=', value: AllJiaoWai },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 5 }],
  },
  {
    id: TaskIds.YangGuo_ZJ_ShenDiao_JianMo,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_ZJ_ShenDiao_JianMo_1,
    allNeed: [
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 5] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.YangGuo_ZJ_ShenDiao_To_Seven_day, 7] },
      ],
    ],
    reward: [{ type: 'zb', value: ZbIdEnum.XuanTieJian }],
    endSetKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 10 }],
  },
  {
    id: TaskIds.YangGuo_ZJ_ShenDiao_Fight,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_ZJ_ShenDiao_Fight_1,
    allNeed: [
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 10] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.YangGuo_ZJ_ShenDiao_Fight_Three_day, 3] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
    ],
    reward: [
      { type: 'mj', value: MjIdEnum.DuGuJiuJian },
      { type: 'rw', value: RwIdEnum.ShenDiao },
      { type: 'rw', value: RwIdEnum.DuGuQiuBai },
    ],
    endSetKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 15 }],
    failReward: [{ type: 'wp', value: WpIdEnum.SheDan }],
  },
  {
    id: TaskIds.YangGuo_ZJ_FangSheng_DuanChangCao,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_ZJ_FangSheng_DuanChangCao_1,
    allNeed: [
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 15] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.YangGuo_ZJ_ShenDiao_FangSheng_Three_day, 3] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 20 }],
  },

  {
    id: TaskIds.YangGuo_ZJ_ShiLiuNian,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_ZJ_ShiLiuNian_1,
    allNeed: [
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 20] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.YangGuo_ZJ_ShenDiao_ShiLiuNian_Three_day, 3] },
      ],
    ],
    reward: [
      { type: 'mj', value: MjIdEnum.AnRanXiaoHunZhang },
      { type: 'jq', value: 1000 * 1000 },
    ],
    endSetKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 25 }],
  },

  {
    id: TaskIds.YangGuo_ZJ_GuoXiang_ShenDiaoXia,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_ZJ_GuoXiang_ShenDiaoXia_1,
    allNeed: [
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 25] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.YangGuo_ZJ_Three_day, 3] },
        { type: 'cityGroup', rule: '=', value: [CityGroupEnum.JiuGuan] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 30 }],
  },

  {
    id: TaskIds.YangGuo_ZJ_GuoXiang_LaoWanTong,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_ZJ_GuoXiang_LaoWanTong_1,
    allNeed: [
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 30] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.YangGuo_ZJ_Three_day, 3] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 35 }],
  },

  {
    id: TaskIds.YangGuo_ZJ_GuoXiang_Leave,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_ZJ_GuoXiang_Leave_1,
    allNeed: [
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 35] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.YangGuo_ZJ_Three_day, 2] },
        { type: 'cityGroup', rule: '=', value: [CityGroupEnum.MinJia] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 40 }],
  },

  {
    id: TaskIds.YangGuo_ZJ_LiWu_Prepare,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_1,
    allNeed: [
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 40] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.YangGuo_ZJ_Three_day, 90] },
        { type: 'keyDay', rule: '<=', value: [KeyIds.YangGuo_ZJ_Three_day, 165] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 40] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.YangGuo_ZJ_Three_day_LiWu_Prepare, 3] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 45 }],
  },

  {
    id: TaskIds.YangGuo_ZJ_GuoXiang_ZhuShou,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_ZJ_GuoXiang_ZhuShou_1,
    allNeed: [
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 45] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.YangGuo_ZJ_ZhuShou_day, 15] },
      ],
    ],
    reward: [...NoReward],
    endSetKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 50 }],
  },

  {
    id: TaskIds.YangGuo_ZJ_GuoXiang_JinLunFaWang,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_ZJ_GuoXiang_JinLunFaWang_1,
    allNeed: [
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 50] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.YangGuo_ZJ_XiangYang_JinLunFaWang, 6] },
        { type: 'cityGroup', rule: '=', value: [CityGroupEnum.JiuGuan] },
      ],
    ],
    reward: [{ type: 'zj', value: HeroIdEnum.GuoXiang }],
    endSetKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 55 }],
  },

  {
    id: TaskIds.YangGuo_ZJ_JieJu,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_ZJ_JieJu_1,
    allNeed: [
      [
        ...YangGuoBaseNeed,
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_ZJ_Main, 55] },
        { type: 'keyDay', rule: '>=', value: [KeyIds.YangGuo_ZJ_New_Three_day, 3] },
        { type: 'tl', rule: '>=', value: [100] },
      ],
    ],
    reward: [
      { type: 'rw', value: RwIdEnum.JinLunFaWang },
      { type: 'rw', value: RwIdEnum.XiaoLongNv },
      { type: 'ch', value: ChIds.ShenDiaoXiaLv }, // 添加神雕侠侣 结局
    ],
    endSetKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 60 }],
  },
]
