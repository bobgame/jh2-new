import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskSuRongRong: JhTask = {
  rwId: RwIdEnum.SuRongRong,
  name: '苏蓉蓉',
  tasks: [
    {
      id: TaskIds.SuRongRong_RenWuKa_1,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.SuRongRong_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.SuRongRong_RenWuKa, 0] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.ChuLiuXiang, 100] },
          { type: 'sw', rule: '>=', value: [30] },
          { type: 'yr', rule: '=', value: [1] },
        ],
        [
          { type: 'key', rule: '=', value: [KeyIds.SuRongRong_RenWuKa, 0] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.SuRongRong, 50] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.ChuLiuXiang, 50] },
          { type: 'sw', rule: '>=', value: [30] },
          { type: 'yr', rule: '=', value: [1] },
        ],
        [
          { type: 'key', rule: '=', value: [KeyIds.SuRongRong_RenWuKa, 0] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.ChuLiuXiang, 100] },
          { type: 'sw', rule: '>=', value: [30] },
          { type: 'zc', rule: '=', value: [1] },
        ],
        [
          { type: 'key', rule: '=', value: [KeyIds.SuRongRong_RenWuKa, 0] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.SuRongRong, 50] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.ChuLiuXiang, 50] },
          { type: 'sw', rule: '>=', value: [30] },
          { type: 'zc', rule: '=', value: [1] },
        ],
        [
          { type: 'key', rule: '=', value: [KeyIds.SuRongRong_RenWuKa, 0] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.ChuLiuXiang, 100] },
          { type: 'sw', rule: '>=', value: [30] },
          { type: 'tq', rule: '=', value: [1] },
        ],
        [
          { type: 'key', rule: '=', value: [KeyIds.SuRongRong_RenWuKa, 0] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.SuRongRong, 50] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.ChuLiuXiang, 50] },
          { type: 'sw', rule: '>=', value: [30] },
          { type: 'tq', rule: '=', value: [1] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.SuRongRong_RenWuKa, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.SuRongRong_RenWuKa, value: 2 }],
    },
    {
      id: TaskIds.SuRongRong_YiRong,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.SuRongRong_YiRong_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.SuRongRong_RenWuKa, 15] },
          { type: 'key', rule: '=', value: [KeyIds.SuRongRong_YiRong, 0] },
        ],
      ],
      reward: [{ type: 'jn', value: 'yr' }],
      endSetKey: [{ keyId: KeyIds.SuRongRong_YiRong, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.SuRongRong_YiRong, value: 0 }],
    },
  ],
}
