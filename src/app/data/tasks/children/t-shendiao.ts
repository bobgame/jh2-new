import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { WpIdEnum } from '../../../constants/enums/wp.enum'
import { ChIds } from '../../ch'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskShenDiao: JhTask = {
  rwId: RwIdEnum.ShenDiao,
  name: '神雕',
  tasks: [
    {
      id: TaskIds.ShenDiao_ChengHao_MiaoShouHuiChun_1,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.ShenDiao_ChengHao_MiaoShouHuiChun_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_MiaoShouHuiChun, 0] },
          // { type: 'key', rule: '=', value: [KeyIds.YangGuo_RenWuKa, 5] },
          // { type: 'key', rule: '=', value: [KeyIds.SuYing_RenWuKa, 5] },
          { type: 'sw', rule: '>=', value: [30] },
          { type: 'yl', rule: '=', value: [1] },
          { type: 'cyS', rule: '>=', value: [240] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.SiGuoYa] },
          { type: 'city', rule: '=', value: [CityIdEnum.HuaShan] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.ChengHao_MiaoShouHuiChun, value: 5 }],
    },
    {
      id: TaskIds.ShenDiao_ChengHao_MiaoShouHuiChun_2,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.ShenDiao_ChengHao_MiaoShouHuiChun_2,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_MiaoShouHuiChun, 5] },
          { type: 'wp', rule: '>=', value: [WpIdEnum.JiuHuaYuLuWan, 1] },
          { type: 'wp', rule: '>=', value: [WpIdEnum.ShiQuanShiMei, 1] },
          { type: 'wp', rule: '>=', value: [WpIdEnum.WuJiJinDan, 1] },
          { type: 'wp', rule: '>=', value: [WpIdEnum.XiongZhang, 1] },
          { type: 'wp', rule: '>=', value: [WpIdEnum.SheDan, 1] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.SiGuoYa] },
          { type: 'city', rule: '=', value: [CityIdEnum.HuaShan] },
        ],
      ],
      reward: [{ type: 'ch', value: ChIds.MiaoShouHuiChun }],
      endSetKey: [{ keyId: KeyIds.ChengHao_MiaoShouHuiChun, value: 10 }],
    },
  ],
}
