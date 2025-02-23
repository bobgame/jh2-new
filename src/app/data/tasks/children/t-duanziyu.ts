import { environment } from '../../../../environments/environment'
import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { MjIdEnum } from '../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { ZbIdEnum } from '../../../constants/enums/zb.enum'
import { ChIds } from '../../ch'
import { KeyIds } from '../keys.interface'
import { TaskIds, TaskTalkIds } from '../task.enum'
import { JhTask } from '../task.interface'

export const taskDuanZiYu: JhTask = {
  rwId: RwIdEnum.DuanZiYu,
  name: '段子羽',
  tasks: [
    {
      id: TaskIds.DuanZiYu_LiuMaiShenJian,
      type: 'rw',
      rate: 50,
      talkId: TaskTalkIds.DuanZiYu_LiuMaiShenJian_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.DuanZiYu_LiuMaiShenJian, 0] },
          { type: 'heart', rule: '>=', value: [75] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.MinJia] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.LiuMaiShenJian }],
      endSetKey: [{ keyId: KeyIds.DuanZiYu_LiuMaiShenJian, value: 1 }],
    },
    {
      id: TaskIds.DuanZiYu_RenWuKa,
      type: 'rw',
      rate: 95,
      talkId: TaskTalkIds.DuanZiYu_RenWuKa_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.DuanZiYu_RenWuKa, 0] },
          { type: 'heart', rule: '>=', value: [50] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.DangPu] },
        ],
      ],
      reward: [{ type: 'rw', value: RwIdEnum.DuanZiYu }],
      endSetKey: [{ keyId: KeyIds.DuanZiYu_RenWuKa, value: 5 }],
    },
    {
      id: TaskIds.DuanZiYu_XunBao,
      type: 'rw',
      rate: 85,
      talkId: TaskTalkIds.DuanZiYu_XunBao_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.DuanZiYu_RenWuKa, 5] },
          { type: 'key', rule: '=', value: [KeyIds.DuanZiYu_XunBao, 0] },
          { type: 'heart', rule: '>=', value: [50] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.JiaoWai] },
        ],
      ],
      reward: [{ type: 'jn', value: 'xb' }],
      endSetKey: [{ keyId: KeyIds.DuanZiYu_XunBao, value: 5 }],
    },
    {
      id: TaskIds.DuanZiYu_BeiMingShenGong,
      type: 'rw',
      rate: 20,
      talkId: TaskTalkIds.DuanZiYu_BeiMingShenGong_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.DuanZiYu_BeiMingShenGong, 0] },
          { type: 'heart', rule: '>=', value: [100] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.MinJia] },
        ],
        [
          { type: 'key', rule: '=', value: [KeyIds.DuanZiYu_BeiMingShenGong, 0] },
          { type: 'heart', rule: '>=', value: [100] },
          { type: 'citySS', rule: '=', value: [CityGroupEnum.DangPu] },
        ],
      ],
      reward: [{ type: 'mj', value: MjIdEnum.BeiMingShenGong }],
      endSetKey: [{ keyId: KeyIds.DuanZiYu_BeiMingShenGong, value: 5 }],
    },
    {
      id: TaskIds.DuanZiYu_ShangYe,
      type: 'rw',
      rate: 85,
      talkId: TaskTalkIds.DuanZiYu_ShangYe_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.DuanZiYu_RenWuKa, 5] },
          { type: 'key', rule: '=', value: [KeyIds.DuanZiYu_ShangYe, 0] },
          { type: 'heart', rule: '>=', value: [50] },
        ],
      ],
      reward: [{ type: 'jn', value: 'sy' }],
      endSetKey: [{ keyId: KeyIds.DuanZiYu_ShangYe, value: 5 }],
    },
    {
      id: TaskIds.DuanZiYu_CaiYao,
      type: 'rw',
      rate: 15,
      talkId: TaskTalkIds.DuanZiYu_CaiYao_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.Rand_Key_1, 0] },
          { type: 'heart', rule: '>=', value: [0] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.Rand_Key_1, value: 1 }],
      endFailSetKey: [{ keyId: KeyIds.Rand_Key_1, value: 1 }],
    },
    {
      id: TaskIds.DuanZiYu_FuJiaTianXia_1,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.DuanZiYu_FuJiaTianXia_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_FuJiaTianXia, 0] },
          { type: 'jq', rule: '>=', value: [90000 * 1000] },
        ],
      ],
      reward: [{ type: 'none', value: 0 }],
      endSetKey: [{ keyId: KeyIds.ChengHao_FuJiaTianXia, value: 5 }],
    },
    {
      id: TaskIds.DuanZiYu_FuJiaTianXia_2,
      type: 'rw',
      rate: 100,
      talkId: TaskTalkIds.DuanZiYu_FuJiaTianXia_2,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_FuJiaTianXia, 5] },
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_FuJiaTianXia_BaiYuMeiRen, 5] },
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_FuJiaTianXia_LanTingJiXu, 5] },
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_FuJiaTianXia_XiaoAoJiangHuPu, 5] },
        ],
      ],
      reward: [{ type: 'ch', value: ChIds.FuJiaTianXia }],
      endSetKey: [{ keyId: KeyIds.ChengHao_FuJiaTianXia, value: 10 }],
    },
    {
      id: TaskIds.ChengHao_ZhuBaoQiXia,
      type: 'ss',
      rate: 100,
      talkId: TaskTalkIds.ChengHao_ZhuBaoQiXia_1,
      allNeed: [
        [
          { type: 'key', rule: '=', value: [KeyIds.ChengHao_ZhuBaoQiXia, 0] },
          // { type: 'key', rule: '=', value: [KeyIds.LuXiaoFeng_RenWuKa, 5] },
          { type: 'key', rule: '=', value: [KeyIds.DuanZiYu_RenWuKa, 5] },
          { type: 'xb', rule: '=', value: [1] },
          { type: 'xbS', rule: '>=', value: [80] },
          // { type: 'xbS', rule: '>=', value: [environment.production ? 80 : 1] },
        ],
      ],
      reward: [
        { type: 'zb', value: ZbIdEnum.XuanYuanJian },
        { type: 'ch', value: ChIds.ZhuBaoQiXia },
      ],
      endSetKey: [{ keyId: KeyIds.ChengHao_ZhuBaoQiXia, value: 5 }],
      endFailSetKey: [{ keyId: KeyIds.ChengHao_ZhuBaoQiXia, value: 4 }],
    },
  ],
}

// - 客官可愿帮我采一味药？
// - 什么药？
// - 你采后便知
// --- 采药 黄精 黄精 续断
// 段子羽 - 多谢
