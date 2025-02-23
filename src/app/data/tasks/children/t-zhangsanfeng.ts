import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskZhangSanFeng: JhTask = {
  rwId: RwIdEnum.ZhangSanFeng,
  name: '张三丰',
  tasks: [
    {
      id: TaskIds.ZhangSanFeng_TaiJiQuan,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ZhangSanFeng_TaiJiQuan, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.TaiJiQuan }],
      endSetKey: [{ keyId: KeyIds.ZhangSanFeng_TaiJiQuan, value: 1 }],
    },
  ],
}
// 同 打狗棒法
// 得到：太极拳
