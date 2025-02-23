import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { ChIds } from '../../ch'
import { KeyIds } from '../keys.interface'
import { TaskAnswerActions, TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask, TaskQa, TaskTalkItem } from '../task.interface'

export const taskSiKongZhaiXing: JhTask = {
  rwId: RwIdEnum.SiKongZhaiXing,
  name: '司空摘星',
  tasks: [
    {
      id: TaskIds.SiKongZhaiXing_TanZhiShenTong,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.SiKongZhaiXing_TanZhiShenTong, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.TanZhiShenTong }],
      endSetKey: [{ keyId: KeyIds.SiKongZhaiXing_TanZhiShenTong, value: 1 }],
    },
    {
      id: TaskIds.SiKongZhaiXing_TouWangZhiWang_1,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.SiKongZhaiXing_TouWangZhiWang_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChuLiuXiang_RenWuKa, 5] },
          { type: 'key', rule: '=', value: [KeyIds.SiKongZhaiXing_TouWangZhiWang, 0] },
          { type: 'key', rule: '=', value: [KeyIds.WuMingLaoSeng_RenWuKa, 0] },
          { type: 'tq', rule: '=', value: [1] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [
        { keyId: KeyIds.SiKongZhaiXing_TouWangZhiWang, value: 5 },
        { keyId: KeyIds.WuMingLaoSeng_RenWuKa, value: 5 },
      ],
    },
    {
      id: TaskIds.SiKongZhaiXing_TouWangZhiWang_2,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.SiKongZhaiXing_TouWangZhiWang_2,
      allNeed: [
        // 易筋经，六脉神剑和小李飞刀
        [
          { type: 'key', rule: '=', value: [KeyIds.SiKongZhaiXing_TouWangZhiWang, 5] },
          { type: 'key', rule: '=', value: [KeyIds.LingHuChong_YiJinJing, 5] },
          { type: 'key', rule: '=', value: [KeyIds.DuanZiYu_LiuMaiShenJian, 1] },
          { type: 'key', rule: '=', value: [KeyIds.YeKai_XiaoLiFeiDao, 5] },
        ],
      ],
      reward: [{ type: 'ch', value: ChIds.TouWangZhiWang }],
      showGameover: true,
      endSetKey: [{ keyId: KeyIds.SiKongZhaiXing_TouWangZhiWang, value: 10 }],
      endFailSetKey: [{ keyId: KeyIds.SiKongZhaiXing_TouWangZhiWang, value: 9 }],
    },
    {
      id: TaskIds.SiKongZhaiXing_LuXiaoFeng,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.SiKongZhaiXing_LuXiaoFeng_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.WuShi_DuChang, 5] },
          { type: 'key', rule: '=', value: [KeyIds.SiKongZhaiXing_LuXiaoFeng, 0] },
          { type: 'cityGroup', rule: '=', value: [CityGroupEnum.DuChang] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.SiKongZhaiXing_LuXiaoFeng, value: 5 }],
    },
  ],
}

export const taskSKZXJianBaoTalks: TaskTalkItem[] = [
  { id: 1, taskId: TaskIds.SiKongZhaiXing_JianBao, rwId: 0, type: 'rw', text: '我这儿有件东西，二百两，要不要？' },
]
export const jbQa: TaskQa = {
  id: TaskTalkIds.SiKongZhaiXing_JianBao,
  qa: {
    question: '要买吗？',
    answers: [
      {
        id: 1,
        text: '是',
        actionType: TaskAnswerActions.JianBao,
        actionValue: [0],
      },
      { id: 2, text: '否', actionType: TaskAnswerActions.Exit, actionValue: [0] },
    ],
  },
}
// <red>司空摘星</red>，可愿与在下一战？
// 请
// <red>司空摘星</red>，多有得罪

// 输了
// 对面说 得罪

// 司空摘星
// - 我这儿有件东西，二百两，要不要？

// ** 要买吗？
// 是
// 否

// 是：
// 主角： 好，买了！

// 弹出提示：金钱减200两
// 【图片加底色】
// 得到：倚天剑
// 金钱减少200两

// 否：
// 退出聊天
