import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskLingHuChong: JhTask = {
  rwId: RwIdEnum.LingHuChong,
  name: '令狐冲',
  tasks: [
    {
      id: TaskIds.LingHuChong_DuGuJiuJian,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.LingHuChong_DuGuJiuJian, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.DuGuJiuJian }],
      endSetKey: [{ keyId: KeyIds.LingHuChong_DuGuJiuJian, value: 1 }],
    },
    {
      id: TaskIds.LingHuChong_RenWuKa,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.LingHuChong_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.RenYingYing_YiLiao, 5] },
          { type: 'key', rule: '=', value: [KeyIds.LingHuChong_RenWuKa, 0] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.DuChang] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [
        { type: 'rw', value: RwIdEnum.LingHuChong },
        { type: 'mj', value: MjIdEnum.DuGuJiuJian },
      ],
      endSetKey: [{ keyId: KeyIds.LingHuChong_RenWuKa, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.LingHuChong_RenWuKa, value: 1 }],
    },
    {
      id: TaskIds.LingHuChong_DaLie,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.LingHuChong_DaLie_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.LingHuChong_DaLie, 0] },
          { type: 'key', rule: '=', value: [KeyIds.LingHuChong_RenWuKa, 5] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.JiaoWai] },
        ],
      ],
      reward: [{ type: 'jn', value: 'dl' }],
      endSetKey: [{ keyId: KeyIds.LingHuChong_DaLie, value: 5 }],
    },
    {
      id: TaskIds.LingHuChong_YiJinJing,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.LingHuChong_YiJinJing_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.DuanZiYu_BeiMingShenGong, 5] },
          { type: 'key', rule: '=', value: [KeyIds.LingHuChong_RenWuKa, 5] },
          { type: 'key', rule: '=', value: [KeyIds.LingHuChong_YiJinJing, 0] },
          { type: 'city', rule: '=', value: [CityIdEnum.HuaShan] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.SiGuoYa] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.YiJinJing }],
      endSetKey: [{ keyId: KeyIds.LingHuChong_YiJinJing, value: 5 }],
    },
  ],
}
