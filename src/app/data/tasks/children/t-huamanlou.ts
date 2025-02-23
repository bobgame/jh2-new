import { CityGroupEnum, HeroIdEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { WpIdEnum } from '../../../constants/enums/wp.enum'
import { ChIds } from '../../ch'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask, NoReward } from '../task.interface'

export const taskHuaManLou: JhTask = {
  rwId: RwIdEnum.HuaManLou,
  name: '花满楼',
  tasks: [
    {
      id: TaskIds.LuXiaoFeng_HuaManLou_RenWuKa,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.LuXiaoFeng_HuaManLou_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.HuaManLou_RenWuKa, 0] },
          { type: 'zj', rule: '=', value: [HeroIdEnum.LuXiaoFeng] },
          { type: 'heart', rule: '>=', value: [100] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.MinJia] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.HuaManLou }],
      endSetKey: [{ keyId: KeyIds.HuaManLou_RenWuKa, value: 5 }],
    },
  ],
}
