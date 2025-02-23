import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskWangXiaoShi: JhTask = {
  rwId: RwIdEnum.WangXiaoShi,
  name: '王小石',
  tasks: [
    {
      id: TaskIds.WangXiaoShi_WanLiuJian,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.WangXiaoShi_WanLiuJian_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.WangXiaoShi_WanLiuJian, 0] },
          { type: 'heart', rule: '>=', value: [75] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.WanLiuJian }],
      endSetKey: [{ keyId: KeyIds.WangXiaoShi_WanLiuJian, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.WangXiaoShi_WanLiuJian, value: 7 }],
    },
    {
      id: TaskIds.WangXiaoShi_RenWuKa,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.WangXiaoShi_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.WangXiaoShi_WanLiuJian, 5] },
          { type: 'key', rule: '=', value: [KeyIds.WangXiaoShi_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.WangXiaoShi }],
      endSetKey: [{ keyId: KeyIds.WangXiaoShi_RenWuKa, value: 5 }],
    },
  ],
}

// 所有任务没有了以后得常规
// zj - 小石头
// WangXiaoShi - 你看这花，开谢的漂亮
// WangXiaoShi - 来，画下它
