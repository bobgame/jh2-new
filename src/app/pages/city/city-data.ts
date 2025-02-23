import { CityGroupEnum, CityRwSpIdEnum } from '../../constants/enums/base.enum'
import { CityIdEnum } from '../../constants/enums/city.enum'
import { WpIdEnum } from '../../constants/enums/wp.enum'
import { ZbIdEnum } from '../../constants/enums/zb.enum'
import { CityGroupNames, CityRwSpNames, CitySSItem, CitySheShiImages, JiaoWaiCityMap } from '../../constants/interfaces/city.interface'

export const normalCityDefault = [
  { name: '郊外', key: 'jw' },
  { name: '当铺', key: 'dp' },
  { name: '武馆', key: 'wg' },
  { name: '赌场', key: 'dc' },
  { name: '客栈', key: 'kz' },
  { name: '民家', key: 'mj' },
  { name: '酒馆', key: 'jg' },
]
export const ssGroupMap: { [key: string]: CityGroupEnum } = {
  hzmt: CityGroupEnum.HangZhouMaTou,
  jw: CityGroupEnum.JiaoWai,
  dp: CityGroupEnum.DangPu,
  wg: CityGroupEnum.WuGuan,
  dc: CityGroupEnum.DuChang,
  kz: CityGroupEnum.KeZhan,
  mj: CityGroupEnum.MinJia,
  jg: CityGroupEnum.JiuGuan,

  gmd: CityGroupEnum.GuangMingDing,

  emhs: CityGroupEnum.EMeiHouShan,

  wdhs: CityGroupEnum.WuDangHouShan,
  zwd: CityGroupEnum.ZhenWuDian,
  jjc: CityGroupEnum.JieJianChi,
  sgy: CityGroupEnum.SiGuoYa,
  zqt: CityGroupEnum.ZhengQiTang,
  grf: CityGroupEnum.GuanRiFeng,
  slhs: CityGroupEnum.ShaoLinHouShan,
  lht: CityGroupEnum.LuoHanTang,
  dmy: CityGroupEnum.DaMoYuan,
  cjg: CityGroupEnum.CangJingGe,
  sldd: CityGroupEnum.ShaolinDaDian,
  zjc: CityGroupEnum.ZiJinCheng,
  xdmt: CityGroupEnum.XiaoDaoMaTou,
  xdky: CityGroupEnum.XiaoDaoKuangYe,
}

export const citySheShiImages: CitySheShiImages = {
  [CityGroupEnum.JiaoWai]: 'jw',
  [CityGroupEnum.DangPu]: 'dp',
  [CityGroupEnum.WuGuan]: 'wg',
  [CityGroupEnum.DuChang]: 'dc',
  [CityGroupEnum.KeZhan]: 'kz',
  [CityGroupEnum.MinJia]: 'mj',
  [CityGroupEnum.JiuGuan]: 'jg',
  [CityGroupEnum.QiTao]: 'qt',
  [CityGroupEnum.RenWu]: 'qt',
  [CityGroupEnum.ZiZhai]: 'mj',
  [CityGroupEnum.ZiZhaiBJ]: 'mj',
  [CityGroupEnum.ZiZhaiXL]: 'mj',

  [CityGroupEnum.ZiJinCheng]: 'changsha',
  [CityGroupEnum.HangZhouMaTou]: 'changsha',
  [CityGroupEnum.XiaoDaoMaTou]: 'xiaodao',
  [CityGroupEnum.XiaoDaoKuangYe]: 'jw',

  [CityGroupEnum.GuangMingDing]: 'kunlun',
  [CityGroupEnum.EMeiHouShan]: 'emei',
  [CityGroupEnum.WuDangHouShan]: 'kunlun',
  [CityGroupEnum.ZhenWuDian]: 'wudang',
  [CityGroupEnum.JieJianChi]: 'kunlun',
  [CityGroupEnum.SiGuoYa]: 'huashan',
  [CityGroupEnum.ZhengQiTang]: 'wudang',
  [CityGroupEnum.GuanRiFeng]: 'taishan',
  [CityGroupEnum.ShaoLinHouShan]: 'taishan',
  [CityGroupEnum.LuoHanTang]: 'shaolin',
  [CityGroupEnum.DaMoYuan]: 'shaolin',
  [CityGroupEnum.CangJingGe]: 'shaolin',
  [CityGroupEnum.ShaolinDaDian]: 'shaolin',

  [CityGroupEnum.LvZhuXiang]: 'changsha',
}

export const cityGroupNames: CityGroupNames = {
  [CityGroupEnum.Normal]: '',
  [CityGroupEnum.JiaoWai]: '郊外',
  [CityGroupEnum.DangPu]: '当铺',
  [CityGroupEnum.WuGuan]: '武馆',
  [CityGroupEnum.DuChang]: '赌场',
  [CityGroupEnum.KeZhan]: '客栈',
  [CityGroupEnum.MinJia]: '民家',
  [CityGroupEnum.JiuGuan]: '酒馆',
  [CityGroupEnum.QiTao]: '乞讨',
  [CityGroupEnum.RenWu]: '酒馆',

  [CityGroupEnum.ZiZhai]: '自宅',
  [CityGroupEnum.ZiZhaiBJ]: '自宅',
  [CityGroupEnum.ZiZhaiXL]: '自宅',

  [CityGroupEnum.GuangMingDing]: '光明顶',
  [CityGroupEnum.EMeiHouShan]: '后山',
  [CityGroupEnum.WuDangHouShan]: '后山',
  [CityGroupEnum.ZhenWuDian]: '真武殿',
  [CityGroupEnum.JieJianChi]: '解剑池',
  [CityGroupEnum.SiGuoYa]: '思过崖',
  [CityGroupEnum.ZhengQiTang]: '正气堂',
  [CityGroupEnum.GuanRiFeng]: '观日峰',
  [CityGroupEnum.ShaoLinHouShan]: '后山',
  [CityGroupEnum.LuoHanTang]: '罗汉堂',
  [CityGroupEnum.DaMoYuan]: '达摩院',
  [CityGroupEnum.CangJingGe]: '藏经阁',
  [CityGroupEnum.ShaolinDaDian]: '大殿',

  [CityGroupEnum.ZiJinCheng]: '紫禁城',
  [CityGroupEnum.HangZhouMaTou]: '码头',
  [CityGroupEnum.XiaoDaoMaTou]: '码头',
  [CityGroupEnum.XiaoDaoKuangYe]: '旷野',

  [CityGroupEnum.LvZhuXiang]: '绿竹巷',
}

export const citySaleItems = {
  zb: [
    ZbIdEnum.HuafuJian,
    ZbIdEnum.ZiWeiJian,
    ZbIdEnum.MuGun,
    ZbIdEnum.ShaoHuoGun,
    ZbIdEnum.XiSha,
    ZbIdEnum.JinQianBiao,
    ZbIdEnum.XianHeShenZhen,
  ],
  wp: [
    WpIdEnum.TuRou,
    WpIdEnum.GeRou,
    WpIdEnum.SheDan,
    WpIdEnum.SongShuRou,
    WpIdEnum.XiongZhang,
    WpIdEnum.KaoYa,
    WpIdEnum.PanTao,
    WpIdEnum.JinJu,
    WpIdEnum.ChouDuan,
    WpIdEnum.MaiSui,
    WpIdEnum.PuEr,
    WpIdEnum.DuanChangCao,
    WpIdEnum.HuangJing,
    WpIdEnum.XuDuan,
    WpIdEnum.JingTian,
    WpIdEnum.LingZhi,
    WpIdEnum.QingHua,
    WpIdEnum.LongDan,
    WpIdEnum.RenShen,
  ],
}

export const cityRwSpMap: Record<CityRwSpIdEnum, CitySSItem> = {
  [CityRwSpIdEnum.MaiRu]: {
    id: 2,
    name: '买入',
    key: 'mairu',
  },
  [CityRwSpIdEnum.MaiChu]: {
    id: 3,
    name: '卖出',
    key: 'maichu',
  },
  [CityRwSpIdEnum.XiWu]: {
    id: 4,
    name: '习武',
    key: 'xiwu',
  },
  [CityRwSpIdEnum.XiuLian]: {
    id: 5,
    name: '修炼',
    key: 'xiulian',
  },
  [CityRwSpIdEnum.Qin]: {
    id: 6,
    name: '抚琴',
    key: 'qin',
  },
  [CityRwSpIdEnum.Qi]: {
    id: 7,
    name: '对弈',
    key: 'qi',
  },
  [CityRwSpIdEnum.Shu]: {
    id: 8,
    name: '书法',
    key: 'shu',
  },
  [CityRwSpIdEnum.Hua]: {
    id: 9,
    name: '绘画',
    key: 'hua',
  },
  // 大小
  [CityRwSpIdEnum.DaXiao]: {
    id: 10,
    name: '大小',
    key: 'daxiao',
  },
  // 壹配
  [CityRwSpIdEnum.YiPei]: {
    id: 11,
    name: '壹配',
    key: 'yipei',
  },
  // 骰子
  [CityRwSpIdEnum.TouZi]: {
    id: 12,
    name: '骰子',
    key: 'touzi',
  },
  // 出海
  [CityRwSpIdEnum.ChuHai]: {
    id: 12,
    name: '出海',
    key: 'chuhai',
  },
  // 鉴宝
  [CityRwSpIdEnum.JianBao]: {
    id: 13,
    name: '鉴宝',
    key: 'jianbao',
  },
}

export type CityIdEnumSp =
  | CityIdEnum.KunLun
  | CityIdEnum.EMei
  | CityIdEnum.WuDang
  | CityIdEnum.HuaShan
  | CityIdEnum.TaiShan
  | CityIdEnum.ShaoLin
  | CityIdEnum.XiaoDao

export const jiaoWaiCityMap: Record<CityIdEnumSp, CityGroupEnum> = {
  [CityIdEnum.KunLun]: CityGroupEnum.GuangMingDing,
  [CityIdEnum.EMei]: CityGroupEnum.EMeiHouShan,
  [CityIdEnum.WuDang]: CityGroupEnum.WuDangHouShan,
  [CityIdEnum.HuaShan]: CityGroupEnum.SiGuoYa,
  [CityIdEnum.TaiShan]: CityGroupEnum.GuanRiFeng,
  [CityIdEnum.ShaoLin]: CityGroupEnum.ShaoLinHouShan,
  [CityIdEnum.XiaoDao]: CityGroupEnum.XiaoDaoKuangYe,
}
