import { CityGroupEnum, HeroIdEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskHuangTaoShi: JhTask = {
  rwId: RwIdEnum.HuangYaoShi,
  name: '黄药师',
  tasks: [
    {
      id: TaskIds.HuangYaoShi_TanZhiShenTong,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.HuangYaoShi_TanZhiShenTong, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.TanZhiShenTong }],
      endSetKey: [{ keyId: KeyIds.HuangYaoShi_TanZhiShenTong, value: 1 }],
    },
    {
      id: TaskIds.HuangYaoShi_DanQingMiaoBi,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.HuangYaoShi_DanQingMiaoBi_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_DanQingMiaoBi, 5] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.MinJia] },
          { type: 'city', rule: '=', value: [CityIdEnum.XiaoDao] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.ChengHao_DanQingMiaoBi, value: 10 }],
      endFailSetKey: [{ keyId: KeyIds.ChengHao_DanQingMiaoBi, value: 7 }],
    },

    // GuoXiang
    {
      id: TaskIds.GuoXiang_ZJ_HuangYaoShi_RenWuKa,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.GuoXiang_ZJ_HuangYaoShi_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_HuangYaoShi_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [75] },
          { type: 'zj', rule: '=', value: [HeroIdEnum.GuoXiang] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.HuangYaoShi }],
      endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_HuangYaoShi_RenWuKa, value: 5 }],
    },
  ],
}
