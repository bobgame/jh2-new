import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskSuYing: JhTask = {
  rwId: RwIdEnum.SuYing,
  name: '苏樱',
  tasks: [
    {
      id: TaskIds.SuYing_RenWuKa,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.SuYing_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.SuYing_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.SuYing }],
      endSetKey: [{ keyId: KeyIds.SuYing_RenWuKa, value: 5 }],
    },
    {
      id: TaskIds.SuYing_YiLiao,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.SuYing_YiLiao_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.SuYing_RenWuKa, 5] },
          { type: 'key', rule: '=', value: [KeyIds.SuYing_YiLiao, 0] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.JiaoWai] },
        ],
      ],
      reward: [{ type: 'jn', value: 'yl' }],
      endSetKey: [{ keyId: KeyIds.SuYing_YiLiao, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.SuYing_YiLiao, value: 4 }],
    },
  ],
}
