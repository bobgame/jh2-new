import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { ChIds } from '../../ch'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskMuDaoRen: JhTask = {
  rwId: RwIdEnum.MuDaoRen,
  name: '木道人',
  tasks: [
    {
      id: TaskIds.MuDaoRen_TaiJiJianFa,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.MuDaoRen_TaiJiJianFa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.DianXiaoEr_PanTao, 5] },
          { type: 'key', rule: '=', value: [KeyIds.MuDaoRen_TaiJiJianFa, 0] },
          { type: 'city', rule: '=', value: [CityIdEnum.WuDang] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.ZhenWuDian] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.TaiJiJianFa }],
      endSetKey: [{ keyId: KeyIds.MuDaoRen_TaiJiJianFa, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.MuDaoRen_TaiJiJianFa, value: 1 }],
    },
    {
      id: TaskIds.MuDaoRen_RenWuKa,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.MuDaoRen_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.MuDaoRen_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.MuDaoRen }],
      endSetKey: [{ keyId: KeyIds.MuDaoRen_RenWuKa, value: 5 }],
    },
    {
      id: TaskIds.MuDaoRen_GuoShiWuShuang,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.MuDaoRen_GuoShiWuShuang_1,
      allNeed: [[{ type: 'key', rule: '=', value: [KeyIds.ChengHao_GuoShiWuShuang, 5] }]],
      reward: [{ type: 'ch', value: ChIds.GuoShiWuShuang }],
      endSetKey: [{ keyId: KeyIds.ChengHao_GuoShiWuShuang, value: 10 }],
      endFailSetKey: [{ keyId: KeyIds.ChengHao_GuoShiWuShuang, value: 8 }],
    },
    {
      id: TaskIds.MuDaoRen_DuiYi,
      type: 'rw',
      rate: 25,
      talkId: TaskTalkIds.MuDaoRen_DuiYi_1,
      allNeed: [[{ type: 'heart', rule: '>=', value: [75] }]],
      reward: [{ type: 'none', value: 0 }],
    },
  ],
}
