import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask, NoReward } from '../task.interface'

export const taskZhouBoTong: JhTask = {
  rwId: RwIdEnum.ZhouBoTong,
  name: '周伯通',
  tasks: [
    {
      id: TaskIds.ZhouBoTong_ZuoYouHuBo,
      type: 'rw',
      rate: 80,
      talkId: TaskTalkIds.ZhouBoTong_ZuoYouHuBo_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ZhouBoTong_ZuoYouHuBo, 0] },
          { type: 'heart', rule: '>=', value: [35] },
          { type: 'wg', rule: '>=', value: [10] },
          { type: 'wg', rule: '<=', value: [20] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.ZuoYouHuBo }],
      endSetKey: [{ keyId: KeyIds.ZhouBoTong_ZuoYouHuBo, value: 2 }],
    },
    {
      id: TaskIds.ZhouBoTong_RenWuKa,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.ZhouBoTong_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ZhouBoTong_ZuoYouHuBo, 2] },
          { type: 'key', rule: '=', value: [KeyIds.ZhouBoTong_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.ZhouBoTong }],
      endSetKey: [{ keyId: KeyIds.ZhouBoTong_RenWuKa, value: 6 }],
    },
    {
      id: TaskIds.ZhouBoTong_ZhuaMiFeng,
      type: 'rw',
      rate: 15,
      talkId: TaskTalkIds.ZhouBoTong_ZhuaMiFeng_1,
      allNeed: [[{ type: 'heart', rule: '>=', value: [70] }]],
      reward: [...NoReward],
    },
  ],
}
