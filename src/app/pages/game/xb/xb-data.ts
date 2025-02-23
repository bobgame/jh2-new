import { CityIdEnum } from '../../../constants/enums/city.enum'
import { ZbIdEnum } from '../../../constants/enums/zb.enum'

export interface XbItem {
  id: number
  rate: number
}
// 杭州 长沙 襄阳 京城 华山 洛阳 武当 长安 峨眉 大理
export const xbBaseItems: XbItem[] = [
  { id: 0, rate: 50 },
  { id: ZbIdEnum.MuGun, rate: 10 },
  { id: ZbIdEnum.HuafuJian, rate: 10 },
  { id: ZbIdEnum.XiSha, rate: 5 },
]
// 小岛
const xbXDItems: XbItem[] = [
  { id: 0, rate: 50 },
  { id: ZbIdEnum.MuGun, rate: 10 },
  { id: ZbIdEnum.HuafuJian, rate: 10 },
  { id: ZbIdEnum.ZiWeiJian, rate: 5 },
  { id: ZbIdEnum.XiSha, rate: 5 },
  { id: ZbIdEnum.GeLuDao, rate: 2 },
]
// 苏州
const xbSZItems: XbItem[] = [
  { id: 0, rate: 50 },
  { id: ZbIdEnum.HuafuJian, rate: 10 },
  { id: ZbIdEnum.MuGun, rate: 10 },
  { id: ZbIdEnum.XiSha, rate: 5 },
  { id: ZbIdEnum.JinQianBiao, rate: 15 },
]
// 少林
const xbSLItems: XbItem[] = [
  { id: 0, rate: 50 },
  { id: ZbIdEnum.MuGun, rate: 10 },
  { id: ZbIdEnum.HuafuJian, rate: 10 },
  { id: ZbIdEnum.XiSha, rate: 5 },
  { id: ZbIdEnum.YiTianJian, rate: 3 },
]
// 泰山
const xbTSItems: XbItem[] = [
  { id: 0, rate: 50 },
  { id: ZbIdEnum.MuGun, rate: 10 },
  { id: ZbIdEnum.HuafuJian, rate: 10 },
  { id: ZbIdEnum.XiSha, rate: 5 },
  { id: ZbIdEnum.XuanTieJian, rate: 3 },
]
// 昆仑
const xbKLItems: XbItem[] = [
  { id: 0, rate: 50 },
  { id: ZbIdEnum.MuGun, rate: 10 },
  { id: ZbIdEnum.HuafuJian, rate: 10 },
  { id: ZbIdEnum.XiSha, rate: 5 },
  { id: ZbIdEnum.XianHeShenZhen, rate: 3 },
]

export const xbAllItems: { [key: number]: XbItem[] } = {
  [CityIdEnum.XiaoDao]: xbXDItems,
  [CityIdEnum.SuZhou]: xbSZItems,
  [CityIdEnum.ShaoLin]: xbSLItems,
  [CityIdEnum.TaiShan]: xbTSItems,
  [CityIdEnum.KunLun]: xbKLItems,
}
