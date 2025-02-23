import { CityGroupEnum, CityRwSpIdEnum } from '../../constants/enums/base.enum'
import { CityIdEnum } from '../../constants/enums/city.enum'
import { RwIdEnum } from '../../constants/enums/rw.enum'
import { CityRwSp, CityRwSpItem, CitySSItem } from '../../constants/interfaces/city.interface'

const getDCRW = (id: RwIdEnum, more: CityRwSp[] = []): CityRwSpItem => {
  const tempCityRwSpItem: CityRwSpItem = {
    id: id,
    sps: [
      {
        id: CityRwSpIdEnum.YiPei,
        need: {
          inSS: CityGroupEnum.DuChang,
        },
      },
      {
        id: CityRwSpIdEnum.TouZi,
        need: {
          inSS: CityGroupEnum.DuChang,
        },
      },
    ],
  }
  if (more.length > 0) {
    more.forEach(item => {
      tempCityRwSpItem.sps.push(item)
    })
  }
  return tempCityRwSpItem
}

export const cityRwSp: CityRwSpItem[] = [
  // Special
  {
    id: RwIdEnum.DuanZiYu,
    sps: [
      {
        id: CityRwSpIdEnum.MaiRu,
        need: {
          inSS: CityGroupEnum.DangPu,
          inCity: CityIdEnum.DaLi,
        },
      },
      {
        id: CityRwSpIdEnum.MaiChu,
        need: {
          inSS: CityGroupEnum.DangPu,
          inCity: CityIdEnum.DaLi,
        },
      },
    ],
  },

  // Normal
  {
    id: RwIdEnum.LaoHuLi,
    sps: [
      {
        id: CityRwSpIdEnum.ChuHai,
        need: {
          inSS: CityGroupEnum.XiaoDaoMaTou,
          heart: 19,
        },
      },
      {
        id: CityRwSpIdEnum.ChuHai,
        need: {
          inSS: CityGroupEnum.HangZhouMaTou,
          heart: 19,
        },
      },
    ],
  },
  {
    id: RwIdEnum.LaoBan,
    sps: [
      {
        id: CityRwSpIdEnum.MaiRu,
        need: {
          inSS: CityGroupEnum.DangPu,
        },
      },
      {
        id: CityRwSpIdEnum.MaiChu,
        need: {
          inSS: CityGroupEnum.DangPu,
        },
      },
    ],
  },
  {
    id: RwIdEnum.WuShi,
    sps: [
      {
        id: CityRwSpIdEnum.XiWu,
        need: {
          inSS: CityGroupEnum.WuGuan,
        },
      },
    ],
  },
  {
    id: RwIdEnum.ZhuangJia,
    sps: [
      {
        id: CityRwSpIdEnum.DaXiao,
        need: {
          inSS: CityGroupEnum.DuChang,
        },
      },
      {
        id: CityRwSpIdEnum.YiPei,
        need: {
          inSS: CityGroupEnum.DuChang,
        },
      },
      {
        id: CityRwSpIdEnum.TouZi,
        need: {
          inSS: CityGroupEnum.DuChang,
        },
      },
    ],
  },
  // 黄药师	对弈 绘画 抚琴
  {
    id: RwIdEnum.HuangYaoShi,
    sps: [
      {
        id: CityRwSpIdEnum.Qi,
        need: {
          heart: 50,
        },
      },
      {
        id: CityRwSpIdEnum.Hua,
        need: {
          heart: 50,
        },
      },
      {
        id: CityRwSpIdEnum.Qin,
        need: {
          heart: 50,
        },
      },
    ],
  },
  // 木道人	对弈
  {
    id: RwIdEnum.MuDaoRen,
    sps: [
      {
        id: CityRwSpIdEnum.Qi,
        need: {
          heart: 50,
        },
      },
    ],
  },
  // 任盈盈	抚琴
  {
    id: RwIdEnum.RenYingYing,
    sps: [
      {
        id: CityRwSpIdEnum.Qin,
        need: {
          heart: 50,
        },
      },
    ],
  },
  // 苏蓉蓉	对弈 绘画
  {
    id: RwIdEnum.SuRongRong,
    sps: [
      {
        id: CityRwSpIdEnum.Qi,
        need: {
          heart: 50,
        },
      },
      {
        id: CityRwSpIdEnum.Hua,
        need: {
          heart: 50,
        },
      },
    ],
  },
  // 郭襄	抚琴
  {
    id: RwIdEnum.GuoXiang,
    sps: [
      {
        id: CityRwSpIdEnum.Qin,
        need: {
          heart: 50,
        },
      },
    ],
  },
  // 苏樱	绘画
  {
    id: RwIdEnum.SuYing,
    sps: [
      {
        id: CityRwSpIdEnum.Hua,
        need: {
          heart: 50,
        },
      },
    ],
  },
  // 诸葛先生	对弈
  {
    id: RwIdEnum.ZhuGeXianSheng,
    sps: [
      {
        id: CityRwSpIdEnum.Qi,
        need: {
          heart: 50,
        },
      },
    ],
  },

  getDCRW(RwIdEnum.LingHuChong),
  getDCRW(RwIdEnum.XiaoShiYiLang),
  getDCRW(RwIdEnum.ZhuiMing),
  getDCRW(RwIdEnum.SiKongZhaiXing, [
    {
      id: CityRwSpIdEnum.JianBao,
      need: {
        heart: 50,
      },
    },
  ]),
  getDCRW(RwIdEnum.LuXiaoFeng),
  getDCRW(RwIdEnum.XiaoLaoTou),
  getDCRW(RwIdEnum.ShaMan),
]
