import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskZhuGeXianSheng: JhTask = {
  rwId: RwIdEnum.ZhuGeXianSheng,
  name: '诸葛先生',
  tasks: [
    {
      id: TaskIds.ZhuGeXianSheng_RenWuKa,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.ZhuGeXianSheng_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ZhuGeXianSheng_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [75] },
          { type: 'sw', rule: '>=', value: [20] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.WuQing, 50] },
        ],
        [
          { type: 'key', rule: '=', value: [KeyIds.ZhuGeXianSheng_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [75] },
          { type: 'sw', rule: '>=', value: [20] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.TieShou, 50] },
        ],
        [
          { type: 'key', rule: '=', value: [KeyIds.ZhuGeXianSheng_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [75] },
          { type: 'sw', rule: '>=', value: [20] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.ZhuiMing, 50] },
        ],
        [
          { type: 'key', rule: '=', value: [KeyIds.ZhuGeXianSheng_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [75] },
          { type: 'sw', rule: '>=', value: [20] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.LengXie, 50] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.ZhuGeXianSheng }],
      endSetKey: [{ keyId: KeyIds.ZhuGeXianSheng_RenWuKa, value: 5 }],
    },
    {
      id: TaskIds.ZhuGeXianSheng_ZhenCha,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.ZhuGeXianSheng_ZhenCha_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ZhuGeXianSheng_RenWuKa, 5] },
          { type: 'key', rule: '=', value: [KeyIds.ZhuGeXianSheng_ZhenCha, 0] },
        ],
      ],
      reward: [{ type: 'jn', value: 'zc' }],
      endSetKey: [{ keyId: KeyIds.ZhuGeXianSheng_ZhenCha, value: 5 }],
    },
    {
      id: TaskIds.ZhuGeXianSheng_GuoShiWuShuang,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.ZhuGeXianSheng_GuoShiWuShuang_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ZhuGeXianSheng_ZhenCha, 5] },
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_GuoShiWuShuang, 0] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.ChengHao_GuoShiWuShuang, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.ChengHao_GuoShiWuShuang, value: 4 }],
    },
    {
      id: TaskIds.ZhuGeXianSheng_DuiYi,
      type: 'rw',
      rate: 25,
      talkId: TaskTalkIds.ZhuGeXianSheng_DuiYi_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.Rand_Key_1, 0] },
          { type: 'heart', rule: '>=', value: [75] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.Rand_Key_1, value: 1 }],
      endFailSetKey: [{ keyId: KeyIds.Rand_Key_1, value: 1 }],
    },
    {
      id: TaskIds.ZhuGeXianSheng_FuJiaTianXia_LanTingJiXu,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.ZhuGeXianSheng_FuJiaTianXia_LanTingJiXu_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_FuJiaTianXia, 5] },
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_FuJiaTianXia_LanTingJiXu, 0] },
          { type: 'jq', rule: '>=', value: [80000 * 1000] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.ChengHao_FuJiaTianXia_LanTingJiXu, value: 5 }],
    },
  ],
}
