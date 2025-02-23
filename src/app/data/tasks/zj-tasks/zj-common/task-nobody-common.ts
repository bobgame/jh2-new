import { CityGroupEnum, HeroIdEnum } from '../../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../../constants/enums/city.enum'
import { MjIdEnum } from '../../../../constants/enums/mj.enum'
import { RwIdEnum } from '../../../../constants/enums/rw.enum'
import { ZbIdEnum } from '../../../../constants/enums/zb.enum'
import { ChIds } from '../../../ch'
import { KeyIds } from '../../keys.interface'
import { TaskIds, TaskTalkIds } from '../../task.enum'
import { TaskItem } from '../../task.interface'

export const noBodyTasksCommon: TaskItem[] = [
  {
    id: TaskIds.NoBody_WuQing_MinJia,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.NoBody_WuQing_MinJia_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.WuQing_MinJia_1, 0] },
        { type: 'yearTime', rule: '>=', value: [0, 4, 1, 1] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.MinJia] },
        { type: 'zj', rule: '=', value: [HeroIdEnum.WuMing] },
      ],
    ],
    reward: [{ type: 'none', value: 0 }],
    endSetKey: [{ keyId: KeyIds.WuQing_MinJia_1, value: 1 }],
    endAddTsk: {
      stRw: RwIdEnum.TieShou,
      id: TaskIds.TieShou_WuQing_AnZi,
      toRw: RwIdEnum.TieShou,
      talkId: TaskTalkIds.TieShou_WuQing_AnZi_1,
    },
  },
  {
    id: TaskIds.NoBody_HuanShiBiShen,
    type: 'time',
    rate: 100,
    talkId: TaskTalkIds.NoTalkHuanShiBiShen,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.HuanShiBiShen_1, 0] },
        { type: 'xb', rule: '=', value: [1] },
        { type: 'city', rule: '=', value: [CityIdEnum.SuZhou] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.JiaoWai] },
      ],
    ],
    reward: [{ type: 'mj', value: MjIdEnum.HuanShiBiShen }],
    endSetKey: [{ keyId: KeyIds.HuanShiBiShen_1, value: 2 }],
  },
  {
    id: TaskIds.NoBody_JiuYangZhenJing,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.NoTalkJiuYangZhenJing,
    allNeed: [
      [
        { type: 'zj', rule: '!=', value: [HeroIdEnum.LuXiaoFeng] },
        { type: 'key', rule: '=', value: [KeyIds.JiuYangZhenJing_1, 0] },
        { type: 'dl', rule: '=', value: [1] },
        { type: 'city', rule: '=', value: [CityIdEnum.KunLun] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.GuangMingDing] },
      ],
    ],
    reward: [{ type: 'mj', value: MjIdEnum.JiuYangZhenJing }],
    endSetKey: [{ keyId: KeyIds.JiuYangZhenJing_1, value: 2 }],
  },
  {
    id: TaskIds.NoBoDy_RenYingYing_YiLiao,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.RenYingYing_YiLiao_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.RenYingYing_YiLiao, 0] },
        { type: 'fq', rule: '=', value: [1] },
        { type: 'rwHeart', rule: '>=', value: [RwIdEnum.RenYingYing, 50] },
        { type: 'rwHeart', rule: '>=', value: [RwIdEnum.LingHuChong, 50] },
        { type: 'city', rule: '=', value: [CityIdEnum.LuoYang] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.MinJia] },
      ],
    ],
    reward: [
      { type: 'jn', value: 'yl' },
      { type: 'rw', value: RwIdEnum.RenYingYing },
    ],
    endSetKey: [{ keyId: KeyIds.RenYingYing_YiLiao, value: 5 }],
    endFailSetKey: [{ keyId: KeyIds.RenYingYing_YiLiao, value: 1 }],
  },
  {
    id: TaskIds.NoBody_PanTao,
    type: 'time',
    rate: 100,
    talkId: TaskTalkIds.PanTao_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.DianXiaoEr_PanTao, 0] },
        { type: 'day', rule: '=', value: [30] },
        { type: 'city', rule: '!=', value: [CityIdEnum.XiaoDao] },
        { type: 'cityGroup', rule: '!=', value: [CityGroupEnum.Normal] },
      ],
    ],
    reward: [{ type: 'none', value: 0 }],
    endSetKey: [{ keyId: KeyIds.DianXiaoEr_PanTao, value: 5 }],
    endFailSetKey: [{ keyId: KeyIds.DianXiaoEr_PanTao, value: 1 }],
  },
  {
    id: TaskIds.NoBody_YeKai_XiaoLiFeiDao,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YeKai_XiaoLiFeiDao_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.LiXunHuan_RenWuKa, 10] },
        { type: 'key', rule: '=', value: [KeyIds.YeKai_XiaoLiFeiDao, 0] },
        { type: 'city', rule: '=', value: [CityIdEnum.DaLi] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.JiaoWai] },
      ],
    ],
    reward: [{ type: 'mj', value: MjIdEnum.XiaoLiFeiDao }],
    endSetKey: [{ keyId: KeyIds.YeKai_XiaoLiFeiDao, value: 5 }],
  },
  {
    id: TaskIds.WuMingLaoSeng_DaMoZhangFa,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.WuMingLaoSeng_DaMoZhangFa_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.WuMingLaoSeng_RenWuKa, 10] },
        { type: 'key', rule: '=', value: [KeyIds.WuMingLaoSeng_DaMoZhangFa, 0] },
        { type: 'gf', rule: '>=', value: [5] },
        { type: 'city', rule: '=', value: [CityIdEnum.ShaoLin] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.DaMoYuan] },
      ],
    ],
    reward: [{ type: 'mj', value: MjIdEnum.DaMoZhangFa }],
    endSetKey: [{ keyId: KeyIds.WuMingLaoSeng_DaMoZhangFa, value: 5 }],
    endFailSetKey: [{ keyId: KeyIds.WuMingLaoSeng_DaMoZhangFa, value: 4 }],
  },
  {
    id: TaskIds.XiaoShiYiLang_RenWuKa,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiaoShiYiLang_RenWuKa_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.XiaoShiYiLang_RenWuKa, 5] },
        { type: 'rwHeart', rule: '>=', value: [RwIdEnum.XiaoShiYiLang, 50] },
        { type: 'xb', rule: '=', value: [1] },
        { type: 'sw', rule: '>=', value: [30] },
        { type: 'city', rule: '=', value: [CityIdEnum.TaiShan] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.GuanRiFeng] },
      ],
    ],
    reward: [
      { type: 'zb', value: ZbIdEnum.GeLuDao },
      { type: 'rw', value: RwIdEnum.XiaoShiYiLang },
    ],
    failReward: [{ type: 'zb', value: ZbIdEnum.GeLuDao }],
    endSetKey: [{ keyId: KeyIds.XiaoShiYiLang_RenWuKa, value: 10 }],
    endFailSetKey: [{ keyId: KeyIds.XiaoShiYiLang_RenWuKa, value: 9 }],
  },
  {
    id: TaskIds.XiaoShiYiLang_WangQingTianShu,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.XiaoShiYiLang_WangQingTianShu_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.XiaoShiYiLang_RenWuKa, 10] },
        { type: 'key', rule: '=', value: [KeyIds.XiaoShiYiLang_WangQingTianShu, 0] },
        { type: 'city', rule: '=', value: [CityIdEnum.EMei] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.EMeiHouShan] },
      ],
    ],
    reward: [{ type: 'mj', value: MjIdEnum.WangQingTianShu }],
    endSetKey: [{ keyId: KeyIds.XiaoShiYiLang_WangQingTianShu, value: 5 }],
  },
  {
    id: TaskIds.GuoJing_TiaoZhan,
    type: 'ss',
    rate: 2,
    talkId: TaskTalkIds.GuoJing_TiaoZhan_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.Rand_Key_1, 0] },
        { type: 'sw', rule: '>=', value: [49] },
        { type: 'wg', rule: '>=', value: [96] },
        { type: 'zj', rule: '!=', value: [HeroIdEnum.GuoXiang] },
        { type: 'cityGroup', rule: '=', value: [CityGroupEnum.MinJia, CityGroupEnum.KeZhan, CityGroupEnum.DuChang] },
      ],
    ],
    reward: [{ type: 'none', value: 0 }],
    endSetKey: [{ keyId: KeyIds.Rand_Key_1, value: 1 }],
    endFailSetKey: [{ keyId: KeyIds.Rand_Key_1, value: 1 }],
  },

  {
    id: TaskIds.YangGuo_XuanTieJian,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.YangGuo_XuanTieJian_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.DianXiaoEr_LingZhi, 10] },
        { type: 'key', rule: '=', value: [KeyIds.YangGuo_XuanTieJian, 0] },
        { type: 'city', rule: '=', value: [CityIdEnum.EMei] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.EMeiHouShan] },
      ],
    ],
    reward: [{ type: 'none', value: 0 }],
    endSetKey: [{ keyId: KeyIds.YangGuo_XuanTieJian, value: 5 }],
    endFailSetKey: [{ keyId: KeyIds.YangGuo_XuanTieJian, value: 1 }],
    failReward: [{ type: 'zb', value: ZbIdEnum.XuanTieJian }],
  },
  {
    id: TaskIds.HeShang_ChengHao_ZaiShiMengChang,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.HeShang_ChengHao_ZaiShiMengChang_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.ChengHao_ZaiShiMengChang, 0] },
        { type: 'jq', rule: '>=', value: [500 * 1000] },
        { type: 'cHeart', rule: '>=', value: [105] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.JiaoWai] },
      ],
    ],
    reward: [{ type: 'ch', value: ChIds.ZaiShiMengChang }],
    endSetKey: [{ keyId: KeyIds.ChengHao_ZaiShiMengChang, value: 5 }],
    endFailSetKey: [{ keyId: KeyIds.ChengHao_ZaiShiMengChang, value: 1 }],
  },
  {
    id: TaskIds.ChengHao_TianXiaDiYi_1,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.ChengHao_TianXiaDiYi_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.ChengHao_TianXiaDiYi, 0] },
        { type: 'year3', rule: '=', value: [0] },
        { type: 'time', rule: '>=', value: [0, 8, 15, 1] },
        { type: 'time', rule: '<=', value: [0, 8, 17, 1] },
        { type: 'cityGroup', rule: '!=', value: [CityGroupEnum.Normal] },
      ],
    ],
    reward: [{ type: 'none', value: 0 }],
    endSetKey: [{ keyId: KeyIds.ChengHao_TianXiaDiYi, value: 5 }],
  },
  {
    id: TaskIds.ChengHao_TianXiaDiYi_2,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.ChengHao_TianXiaDiYi_7,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.ChengHao_TianXiaDiYi, 5] },
        { type: 'time', rule: '>=', value: [0, 8, 18, 1] },
        { type: 'time', rule: '<=', value: [0, 9, 18, 1] },
        { type: 'wg', rule: '>=', value: [95] },
        { type: 'cityGroup', rule: '!=', value: [CityGroupEnum.Normal] },
      ],
    ],
    reward: [{ type: 'none', value: 0 }],
    endSetKey: [{ keyId: KeyIds.ChengHao_TianXiaDiYi, value: 10 }],
  },
  {
    id: TaskIds.ChengHao_TianXiaDiYi_3,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.ChengHao_TianXiaDiYi_8,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.ChengHao_TianXiaDiYi, 10] },
        { type: 'time', rule: '>=', value: [0, 8, 18, 1] },
        { type: 'time', rule: '<=', value: [0, 9, 18, 1] },
        { type: 'wg', rule: '>=', value: [99] },
        { type: 'cityGroup', rule: '!=', value: [CityGroupEnum.Normal] },
      ],
    ],
    reward: [{ type: 'ch', value: ChIds.TianXiaDiYi }],
    endSetKey: [{ keyId: KeyIds.ChengHao_TianXiaDiYi, value: 15 }],
    endFailSetKey: [{ keyId: KeyIds.ChengHao_TianXiaDiYi, value: 12 }],
  },
  {
    id: TaskIds.ChengHao_BaiBuChuanYang,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.ChengHao_BaiBuChuanYang_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.ChengHao_BaiBuChuanYang, 0] },
        { type: 'key', rule: '=', value: [KeyIds.LiXunHuan_RenWuKa, 10] },
        { type: 'dl', rule: '=', value: [1] },
        { type: 'dlS', rule: '>=', value: [600] },
        { type: 'cityGroup', rule: '!=', value: [CityGroupEnum.Normal] },
        // { type: 'dlS', rule: '>=', value: [environment.production ? 600 : 6] },
      ],
      [
        { type: 'key', rule: '=', value: [KeyIds.ChengHao_BaiBuChuanYang, 0] },
        { type: 'key', rule: '=', value: [KeyIds.LingHuChong_RenWuKa, 5] },
        { type: 'dl', rule: '=', value: [1] },
        { type: 'dlS', rule: '>=', value: [600] },
        { type: 'cityGroup', rule: '!=', value: [CityGroupEnum.Normal] },
      ],
    ],
    reward: [{ type: 'ch', value: ChIds.BaiBuChuanYang }],
    endSetKey: [{ keyId: KeyIds.ChengHao_BaiBuChuanYang, value: 5 }],
    endFailSetKey: [{ keyId: KeyIds.ChengHao_BaiBuChuanYang, value: 4 }],
  },
  {
    id: TaskIds.ChengHao_DiYiDuTu,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.ChengHao_DiYiDuTu_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.ChengHao_DiYiDuTu, 0] },
        { type: 'dbW', rule: '>=', value: [3333] },
        // { type: 'dbW', rule: '>=', value: [environment.production ? 5555 : 10] },
        { type: 'citySS', rule: '=', value: [CityGroupEnum.DuChang] },
      ],
    ],
    reward: [{ type: 'ch', value: ChIds.DiYiDuTu }],
    endSetKey: [{ keyId: KeyIds.ChengHao_DiYiDuTu, value: 5 }],
    endFailSetKey: [{ keyId: KeyIds.ChengHao_DiYiDuTu, value: 4 }],
  },

  {
    id: TaskIds.HuaManLou_LingXiYiZhi,
    type: 'ss',
    rate: 100,
    talkId: TaskTalkIds.HuaManLou_LingXiYiZhi_1,
    allNeed: [
      [
        { type: 'key', rule: '=', value: [KeyIds.HuaManLou_LingXiYiZhi, 0] },
        { type: 'zj', rule: '=', value: [HeroIdEnum.WuMing] },
        { type: 'rwHeart', rule: '>=', value: [RwIdEnum.HuaManLou, 100] },
        { type: 'cityGroup', rule: '=', value: [CityGroupEnum.JiaoWai, CityGroupEnum.ShaoLinHouShan, CityGroupEnum.GuangMingDing] },
      ],
    ],
    reward: [{ type: 'mj', value: MjIdEnum.LingXiYiZhi }],
    endSetKey: [{ keyId: KeyIds.HuaManLou_LingXiYiZhi, value: 5 }],
  },

  {
    id: TaskIds.LaoSi_Gameover,
    type: 'ss',
    rate: 6,
    talkId: TaskTalkIds.LaoSi_Gameover,
    allNeed: [[{ type: 'year', rule: '>=', value: [65] }]],
    reward: [{ type: 'none', value: 0 }],
  },
]
