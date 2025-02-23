import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskFangZheng: JhTask = {
  rwId: RwIdEnum.FangZheng,
  name: '方证',
  tasks: [
    {
      id: TaskIds.FangZheng_LuoHanGunFa,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.FangZheng_LuoHanGunFa, 0] },
          { type: 'heart', rule: '>=', value: [100] },
          { type: 'mj', rule: '!=', value: [MjIdEnum.LuoHanGunFa] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.LuoHanGunFa }],
      endSetKey: [{ keyId: KeyIds.FangZheng_LuoHanGunFa, value: 1 }],
    },
  ],
}
// 同 打狗棒法
// 得到： 弹指神通
