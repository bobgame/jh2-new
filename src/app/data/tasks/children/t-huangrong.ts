import { CityGroupEnum, HeroIdEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { WpIdEnum } from '../../../constants/enums/wp.enum'
import { ChIds } from '../../ch'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask, NoReward } from '../task.interface'

export const taskHuangRong: JhTask = {
  rwId: RwIdEnum.HuangRong,
  name: '黄蓉',
  tasks: [
    {
      id: TaskIds.HuangRong_DaGouBangFa,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.HuangRong_DaGouBangFa, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.DaGouBangFa }],
      endSetKey: [{ keyId: KeyIds.HuangRong_DaGouBangFa, value: 1 }],
    },
    {
      id: TaskIds.HuangRong_DanQingMiaoBi_1,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.HuangRong_DanQingMiaoBi_1,
      allNeed: [
        [
          { type: 'zj', rule: '!=', value: [HeroIdEnum.GuoXiang] },
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_DanQingMiaoBi, 0] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.SuYing, 100] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.WangXiaoShi, 100] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.SuRongRong, 100] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.ChengHao_DanQingMiaoBi, value: 5 }],
    },
    {
      id: TaskIds.HuangRong_DanQingMiaoBi_2,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.HuangRong_DanQingMiaoBi_2,
      allNeed: [[{ type: 'key', rule: '=', value: [KeyIds.ChengHao_DanQingMiaoBi, 10] }]],
      reward: [{ type: 'ch', value: ChIds.DanQingMiaoBi }],
      endSetKey: [{ keyId: KeyIds.ChengHao_DanQingMiaoBi, value: 15 }],
    },

    // GuoXiang
    {
      id: TaskIds.GuoXiang_ZJ_HuangRong_FanZhou,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.GuoXiang_ZJ_HuangRong_FanZhou_1,
      allNeed: [
        [
          { type: 'zj', rule: '=', value: [HeroIdEnum.GuoXiang] },
          { type: 'key', rule: '=', value: [KeyIds.GuoXiang_ZJ_HuangRong_FanZhou, 0] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.HuangRong, 100] },
        ],
      ],
      reward: [...NoReward],
      endSetKey: [{ keyId: KeyIds.GuoXiang_ZJ_HuangRong_FanZhou, value: 5 }],
    },
    {
      id: TaskIds.GuoXiang_ZJ_HuangYong_Food,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.GuoXiang_ZJ_HuangYong_Food_1,
      allNeed: [
        [
          { type: 'zj', rule: '=', value: [HeroIdEnum.GuoXiang] },
          { type: 'key', rule: '>=', value: [KeyIds.GuoXiang_ZJ_Main, 5] },
          { type: 'keyDay', rule: '>=', value: [KeyIds.GuoXiang_ZJ_HuangYong_Food_Day_Check, 1] },
          // 兔肉 鸽肉 蛇胆 黄精 灵芝
          { type: 'wp', rule: '>=', value: [WpIdEnum.TuRou, 1] },
          { type: 'wp', rule: '>=', value: [WpIdEnum.GeRou, 1] },
          { type: 'wp', rule: '>=', value: [WpIdEnum.SheDan, 1] },
          { type: 'wp', rule: '>=', value: [WpIdEnum.HuangJing, 1] },
          { type: 'wp', rule: '>=', value: [WpIdEnum.LingZhi, 1] },
        ],
      ],
      reward: [...NoReward],
    },
  ],
}

// 黄蓉满心，战胜，直接获得打狗棒法，没有对话
// 得到：打狗棒法
// <red>黄蓉</red>，多有得罪
