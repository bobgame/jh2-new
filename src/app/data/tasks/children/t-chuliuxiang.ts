import { CityGroupEnum, HeroIdEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { ZbIdEnum } from '../../../constants/enums/zb.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskChuLiuXiang: JhTask = {
  rwId: RwIdEnum.ChuLiuXiang,
  name: '楚留香',
  tasks: [
    {
      id: TaskIds.ChuLiuXiang_LanHuaXianSheng,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.SuRongRong_RenWuKa_3,
      allNeed: [[{ type: 'key', rule: '=', value: [KeyIds.SuRongRong_RenWuKa, 5] }]],
      reward: [{ type: 'rw', value: RwIdEnum.SuRongRong }],
      endSetKey: [{ keyId: KeyIds.SuRongRong_RenWuKa, value: 15 }],
      endFailSetKey: [{ keyId: KeyIds.SuRongRong_RenWuKa, value: 8 }],
    },
    {
      id: TaskIds.ChuLiuXiang_RenWuKa,
      type: 'rw',
      rate: 85,
      talkId: TaskTalkIds.ChuLiuXiang_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChuLiuXiang_RenWuKa, 0] },
          { type: 'key', rule: '=', value: [KeyIds.SuRongRong_RenWuKa, 15] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.ChuLiuXiang }],
      endSetKey: [{ keyId: KeyIds.ChuLiuXiang_RenWuKa, value: 5 }],
    },
    {
      id: TaskIds.ChuLiuXiang_TouQie,
      type: 'rw',
      rate: 85,
      talkId: TaskTalkIds.ChuLiuXiang_TouQie_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChuLiuXiang_RenWuKa, 5] },
          { type: 'key', rule: '=', value: [KeyIds.ChuLiuXiang_TouQie, 0] },
        ],
      ],
      reward: [{ type: 'jn', value: 'tq' }],
      endSetKey: [{ keyId: KeyIds.ChuLiuXiang_TouQie, value: 5 }],
    },
    {
      id: TaskIds.ChuLiuXiang_WuJianZhiJian,
      type: 'rw',
      rate: 10,
      talkId: TaskTalkIds.ChuLiuXiang_WuJianZhiJian_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChuLiuXiang_RenWuKa, 5] },
          { type: 'key', rule: '=', value: [KeyIds.ChuLiuXiang_WuJianZhiJian, 0] },
          { type: 'heart', rule: '>=', value: [100] },
          { type: 'sw', rule: '<=', value: [40] },
          { type: 'jf', rule: '>=', value: [2] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.WuJianZhiJian }],
      endSetKey: [{ keyId: KeyIds.ChuLiuXiang_WuJianZhiJian, value: 5 }],
    },
    {
      id: TaskIds.ChuLiuXiang_FuJiaTianXia_BaiYuMeiRen,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.ChuLiuXiang_FuJiaTianXia_BaiYuMeiRen_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_FuJiaTianXia, 5] },
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_FuJiaTianXia_BaiYuMeiRen, 0] },
          { type: 'jq', rule: '>=', value: [60000 * 1000] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.ChengHao_FuJiaTianXia_BaiYuMeiRen, value: 5 }],
    },

    // GuoXiang
    {
      id: TaskIds.GuoXiang_ZJ_ChuLiuXiang_JinLvYi,
      type: 'ss',
      rate: 50,
      talkId: TaskTalkIds.GuoXiang_ZJ_ChuLiuXiang_JinLvYi_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_ChuLiuXiang_JinLvYi, 0] },
          { type: 'keyDay', rule: '>=', value: [KeyIds.GuoXiang_ZJ_Day_Check_ChuLiuXiang_JinLvYi, 1] },
          { type: 'zj', rule: '=', value: [HeroIdEnum.GuoXiang] },
        ],
      ],
      reward: [{ type: 'zb', value: ZbIdEnum.JinLvYi }],
      endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_ChuLiuXiang_JinLvYi, value: 5 }],
    },
    {
      id: TaskIds.GuoXiang_ZJ_ChuLiuXiang_NiChangYuYi,
      type: 'ss',
      rate: 50,
      talkId: TaskTalkIds.GuoXiang_ZJ_ChuLiuXiang_NiChangYuYi_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_ChuLiuXiang_JinLvYi, 5] },
          { type: 'keyDay', rule: '>=', value: [KeyIds.GuoXiang_ZJ_Day_Check_ChuLiuXiang_JinLvYi, 1] },
          { type: 'zj', rule: '=', value: [HeroIdEnum.GuoXiang] },
        ],
      ],
      reward: [{ type: 'zb', value: ZbIdEnum.NiChangYuYi }],
      endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_ChuLiuXiang_JinLvYi, value: 10 }],
    },
  ],
}
