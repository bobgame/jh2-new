import { CityGroupEnum, HeroIdEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskLuXiaoFeng: JhTask = {
  rwId: RwIdEnum.LuXiaoFeng,
  name: '陆小凤',
  tasks: [
    {
      id: TaskIds.LuXiaoFeng_FengWuJiuTian,
      type: 'win',
      rate: 100,
      talkId: TaskTalkIds.NoTalkThenReward,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.HuangRong_DaGouBangFa, 0] },
          { type: 'heart', rule: '>=', value: [100] },
          { type: 'mj', rule: '!=', value: [MjIdEnum.FengWuJiuTian] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.FengWuJiuTian }],
      endSetKey: [{ keyId: KeyIds.HuangYaoShi_TanZhiShenTong, value: 1 }],
    },
    {
      id: TaskIds.LuXiaoFeng_QiuYin,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.LuXiaoFeng_QiuYin_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_QiuYin, 0] },
          { type: 'heart', rule: '>=', value: [25] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.LuXiaoFeng_QiuYin, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.LuXiaoFeng_QiuYin, value: 5 }],
    },
    {
      id: TaskIds.LuXiaoFeng_RenWuKa,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.LuXiaoFeng_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.SiKongZhaiXing_LuXiaoFeng, 5] },
          { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_QiuYin, 5] },
          { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
        [
          { type: 'key', rule: '=', value: [KeyIds.MuDaoRen_TaiJiJianFa, 5] },
          { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_QiuYin, 5] },
          { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [100] },
        ],
      ],
      reward: [{ type: 'zj', value: HeroIdEnum.LuXiaoFeng }],
      endSetKey: [{ keyId: KeyIds.LuXiaoFeng_RenWuKa, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.LuXiaoFeng_RenWuKa, value: 4 }],
    },
    {
      id: TaskIds.LuXiaoFeng_XunBao,
      type: 'rw',
      rate: 25,
      talkId: TaskTalkIds.LuXiaoFeng_XunBao,
      allNeed: [[{ type: 'heart', rule: '>=', value: [50] }]],
      reward: [{ type: 'none', value: 0 }],
    },
  ],
}
// 同 打狗棒法
// 得到： 弹指神通
