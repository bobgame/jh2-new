import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { ChIds } from '../../ch'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskHeZuDao: JhTask = {
  rwId: RwIdEnum.HeZuDao,
  name: '何足道',
  tasks: [
    {
      id: TaskIds.HeZuDao_LiuZhiQinMo,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.HeZuDao_LiuZhiQinMo_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_LiuZhiQinMo, 0] },
          { type: 'heart', rule: '>=', value: [80] },
          { type: 'fq', rule: '=', value: [1] },
          { type: 'city', rule: '=', value: [CityIdEnum.KunLun] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.GuangMingDing] },
        ],
      ],
      reward: [{ type: 'ch', value: ChIds.LiuZhiQinMo }],
      endSetKey: [{ keyId: KeyIds.ChengHao_LiuZhiQinMo, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.ChengHao_LiuZhiQinMo, value: 1 }],
    },
  ],
}

// 黄蓉满心，战胜，直接获得打狗棒法，没有对话
// 得到：打狗棒法
// <red>黄蓉</red>，多有得罪
