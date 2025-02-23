import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskLaoShiHeShang: JhTask = {
  rwId: RwIdEnum.LaoShiHeShang,
  name: '老实和尚',
  tasks: [
    {
      id: TaskIds.LaoShiHeShang_FengMoZhangFa,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.LaoShiHeShang_ZhangFa, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.FengMoZhangFa }],
      endSetKey: [{ keyId: KeyIds.LaoShiHeShang_ZhangFa, value: 2 }],
    },
    {
      id: TaskIds.LaoShiHeShang_LaoShiGunFa,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.LaoShiHeShang_ZhangFa, 2] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.LaoShiGunFa }],
      endSetKey: [{ keyId: KeyIds.LaoShiHeShang_ZhangFa, value: 4 }],
    },
  ],
}
// 同 打狗棒法
// 得到：太极拳
