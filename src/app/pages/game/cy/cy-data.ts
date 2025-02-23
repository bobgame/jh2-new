import { CityIdEnum } from '../../../constants/enums/city.enum'
import { WpIdEnum } from '../../../constants/enums/wp.enum'

// 小岛 苏州 长沙 少林 华山 洛阳 武当 峨眉 大理
// 景天 续断 黄精 龙胆
export const cyBaseItems: WpIdEnum[] = [WpIdEnum.HuangJing, WpIdEnum.XuDuan, WpIdEnum.JingTian, WpIdEnum.LongDan]
// 杭州 襄阳
// 景天 续断 黄精 龙胆 断肠草 情花
const cyHZItems: WpIdEnum[] = [
  WpIdEnum.HuangJing,
  WpIdEnum.XuDuan,
  WpIdEnum.JingTian,
  WpIdEnum.LongDan,
  WpIdEnum.DuanChangCao,
  WpIdEnum.QingHua,
]
// 泰山 长安
// 景天 续断 黄精 龙胆 灵芝
const cyTSItems: WpIdEnum[] = [WpIdEnum.HuangJing, WpIdEnum.XuDuan, WpIdEnum.JingTian, WpIdEnum.LongDan, WpIdEnum.LingZhi]
// 京城
// 景天 续断 黄精 龙胆 人参
const cyJCItems: WpIdEnum[] = [WpIdEnum.HuangJing, WpIdEnum.XuDuan, WpIdEnum.JingTian, WpIdEnum.LongDan, WpIdEnum.RenShen]
// 昆仑
// 景天 续断 黄精 龙胆 灵芝 鹤顶红
const cyKLItems: WpIdEnum[] = [
  WpIdEnum.HuangJing,
  WpIdEnum.XuDuan,
  WpIdEnum.JingTian,
  WpIdEnum.LongDan,
  WpIdEnum.LingZhi,
  WpIdEnum.HeDingHong,
]

export const cyAllItems: { [key: number]: WpIdEnum[] } = {
  [CityIdEnum.HangZhou]: cyHZItems,
  [CityIdEnum.XiangYang]: cyHZItems,
  [CityIdEnum.TaiShan]: cyTSItems,
  [CityIdEnum.ChangAn]: cyTSItems,
  [CityIdEnum.JingCheng]: cyJCItems,
  [CityIdEnum.KunLun]: cyKLItems,
}
