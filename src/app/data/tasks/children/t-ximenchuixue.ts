import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskXiMenChuiXue: JhTask = {
  rwId: RwIdEnum.XiMenChuiXue,
  name: '西门吹雪',
  tasks: [
    {
      id: TaskIds.XiMenChuiXue_QianShuHanMei,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.XiMenChuiXue_QianShuHanMei, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.QianShuHanMei }],
      endSetKey: [{ keyId: KeyIds.XiMenChuiXue_QianShuHanMei, value: 1 }],
    },
  ],
}
// 得到：千树寒梅
