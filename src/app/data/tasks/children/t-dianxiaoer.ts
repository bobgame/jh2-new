import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { WpIdEnum } from '../../../constants/enums/wp.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskDianXiaoEr: JhTask = {
  rwId: RwIdEnum.DianXiaoEr,
  name: '店小二',
  tasks: [
    {
      id: TaskIds.DianXiaoEr_ZhaoRen,
      type: 'rw',
      rate: 40,
      talkId: TaskTalkIds.DianXiaoEr_ZhaoRen_1,
      allNeed: [[{ type: 'key', rule: '=', value: [KeyIds.DianXiaoEr_ZhaoRen, 0] }]],
      reward: [{ type: 'jq', value: 20 * 1000 }],
    },
    {
      id: TaskIds.DianXiaoEr_DengHui_1,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.DianXiaoEr_DengHui_1_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.DianXiaoEr_DengHui_1, 0] },
          { type: 'time', rule: '>=', value: [0, 1, 15, 1] },
          { type: 'time', rule: '<', value: [0, 1, 16, 1] },
        ],
      ],
      reward: [{ type: 'jq', value: 30 * 1000 }],
      endSetKey: [{ keyId: KeyIds.DianXiaoEr_DengHui_1, value: 1 }],
      endFailSetKey: [{ keyId: KeyIds.DianXiaoEr_DengHui_1, value: 1 }],
    },
    {
      id: TaskIds.LiXunHuan_RenWuKa,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.LiXunHuan_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.LiXunHuan_RenWuKa, 0] },
          { type: 'rwHeart', rule: '>=', value: [RwIdEnum.LiXunHuan, 100] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.JiuGuan] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.LiXunHuan }],
      endSetKey: [{ keyId: KeyIds.LiXunHuan_RenWuKa, value: 10 }],
      endFailSetKey: [{ keyId: KeyIds.LiXunHuan_RenWuKa, value: 1 }],
    },
    {
      id: TaskIds.DianXiaoEr_LingZhi_1,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.LingZhi_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.DianXiaoEr_PanTao, 5] },
          { type: 'key', rule: '=', value: [KeyIds.DianXiaoEr_LingZhi, 0] },
          { type: 'day', rule: '=', value: [30] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.DianXiaoEr_LingZhi, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.DianXiaoEr_LingZhi, value: 1 }],
    },
    {
      id: TaskIds.DianXiaoEr_LingZhi_2,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.LingZhi_2,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.DianXiaoEr_LingZhi, 5] },
          // { type: 'day', rule: '<', value: [30] },
          { type: 'wp', rule: '>=', value: [WpIdEnum.LingZhi, 1] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.DianXiaoEr_LingZhi, value: 10 }],
    },
  ],
}
