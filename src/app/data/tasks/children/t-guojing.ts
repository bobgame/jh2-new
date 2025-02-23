import { CityGroupEnum, HeroIdEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { ChIds } from '../../ch'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskGuoJing: JhTask = {
  rwId: RwIdEnum.GuoJing,
  name: '郭靖',
  tasks: [
    {
      id: TaskIds.GuoJing_XiangLongShiBaZhang,
      type: 'rw',
      rate: 80,
      talkId: TaskTalkIds.GuoJing_XiangLongShiBaZhang_1,
      allNeed: [
        [
          { type: 'zj', rule: '!=', value: [HeroIdEnum.GuoXiang] },
          { type: 'key', rule: '=', value: [KeyIds.GuoJing_XiangLongShiBaZhang, 0] },
          { type: 'heart', rule: '>=', value: [75] },
        ],
      ],
      reward: [
        { type: 'mj', value: MjIdEnum.XiangLongShiBaZhang },
        // { type: 'rw', value: RwIdEnum.GuoJing },
      ],
      endSetKey: [{ keyId: KeyIds.GuoJing_XiangLongShiBaZhang, value: 1 }],
    },
    {
      id: TaskIds.GuoJing_XiaZhiDaZhe,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.GuoJing_XiaZhiDaZhe_1,
      allNeed: [
        [
          { type: 'zj', rule: '!=', value: [HeroIdEnum.GuoXiang] },
          { type: 'key', rule: '=', value: [KeyIds.WuMingLaoSeng_RenWuKa, 10] },
          { type: 'key', rule: '=', value: [KeyIds.LiXunHuan_RenWuKa, 10] },
          { type: 'key', rule: '=', value: [KeyIds.ChuLiuXiang_RenWuKa, 5] },
          { type: 'sw', rule: '>=', value: [50] },
          { type: 'wg', rule: '>=', value: [97] },
        ],
      ],
      reward: [{ type: 'ch', value: ChIds.XiaZhiDaZhe }],
    },
  ],
}
