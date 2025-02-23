import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskRenYingYing: JhTask = {
  rwId: RwIdEnum.RenYingYing,
  name: '任盈盈',
  tasks: [
    {
      id: TaskIds.RenYingYing_FuJiaTianXia_XiaoAoJiangHuPu,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.RenYingYing_FuJiaTianXia_XiaoAoJiangHuPu_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_FuJiaTianXia, 5] },
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_FuJiaTianXia_XiaoAoJiangHuPu, 0] },
          { type: 'jq', rule: '>=', value: [70000 * 1000] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.ChengHao_FuJiaTianXia_XiaoAoJiangHuPu, value: 5 }],
    },
  ],
}
