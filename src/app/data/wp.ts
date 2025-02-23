import { WpIdEnum } from '../constants/enums/wp.enum'

/**
 * 兔肉 兔肉，可恢复体力
 * 鸽肉 鸽肉，可恢复体力
 * 蛇胆 蛇胆，可恢复体力
 * 松鼠肉 松鼠肉，可恢复体力
 * 熊掌 熊掌，可恢复体力
 * 烤鸭 京城特产，可恢复少许体力
 * 蟠桃 长安特产猕猴桃，可恢复少许体力
 * 金桔 洛阳特产，可恢复少许体力
 * 绸缎 苏杭特产的绫罗绸缎
 * 麦穗 两户特产的麦穗，可用作装饰
 * 普洱 大力特产的茶叶，可恢复少许体力
 * 断肠草 断人肝肠的小草，但可解情花之毒
 * 黄精 百合科多年生草本植物
 * 续断 味苦，微温，具续断生命之效
 * 景天 藏人尊为“苏罗玛宝”，意为“神药”
 * 灵芝 素有“仙草”之誉，效果非同凡响
 * 情花 据说服用之人饱受相思之苦
 * 龙胆 龙胆科多年生草本植物
 * 人参 效果虽不如人参果，亦弥足珍贵
 * 无名精 药寂寂无名，故以无名名之
 * 鹤顶红 毒中之王，无可救药
 * 金疮药 3黄精加2续断加3景天配制而成
 * 行军丹 1黄精加2灵芝加1龙胆配制而成
 * 小还丹 续断加景天加龙胆加人参配制而成
 * 大还丹 续断加景天加人参加无名精配制而成
 * 无极金丹 2黄精加2灵芝加2情花加2人参配制而成
 * 逍遥散 1续断加2景天加2无名精加1鹤顶红配制而成
 * 承气饮 2灵芝加2龙胆加2人参加2无名精配制而成
 * 七星海棠 断肠草加续断加景天加灵芝加龙胆加无名精加鹤顶红配制而成
 * 悲酥清风 2断肠草加2情花加1人参加2无名精配制而成
 * 十全十美 由十种草药各一份配制而成
 * 九花玉露丸 由除鹤顶红之外的九种草药各两份配制而成
 */
export const defaultWps: WpItem[] = [
  { id: WpIdEnum.TuRou, name: '兔肉', desc: '兔肉，可恢复体力', avatar: '1', type: 'zh', value: 1, price: 200 },
  { id: WpIdEnum.GeRou, name: '鸽肉', desc: '鸽肉，可恢复体力', avatar: '2', type: 'zh', value: 4, price: 600 },
  { id: WpIdEnum.SheDan, name: '蛇胆', desc: '蛇胆，可恢复体力', avatar: '3', type: 'zh', value: 8, price: 1200 },
  { id: WpIdEnum.SongShuRou, name: '松鼠肉', desc: '松鼠肉，可恢复体力', avatar: '4', type: 'zh', value: 10, price: 1400 },
  { id: WpIdEnum.XiongZhang, name: '熊掌', desc: '熊掌，可恢复体力', avatar: '5', type: 'zh', value: 10, price: 3600 },
  { id: WpIdEnum.KaoYa, name: '烤鸭', desc: '京城特产，可恢复少许体力', avatar: '6', type: 'zh', value: 1, price: 30400 },
  { id: WpIdEnum.PanTao, name: '蟠桃', desc: '长安特产猕猴桃，可恢复少许体力', avatar: '7', type: 'zh', value: 1, price: 48800 },
  { id: WpIdEnum.JinJu, name: '金桔', desc: '洛阳特产，可恢复少许体力', avatar: '8', type: 'zh', value: 1, price: 18200 },
  { id: WpIdEnum.ChouDuan, name: '绸缎', desc: '苏杭特产的绫罗绸缎', avatar: '9', type: 'zh', value: 0, price: 61000 },
  { id: WpIdEnum.MaiSui, name: '麦穗', desc: '两户特产的麦穗，可用作装饰', avatar: '10', type: 'zh', value: 1, price: 6000 },
  { id: WpIdEnum.PuEr, name: '普洱', desc: '大力特产的茶叶，可恢复少许体力', avatar: '11', type: 'zh', value: 1, price: 73200 },
  { id: WpIdEnum.DuanChangCao, name: '断肠草', desc: '断人肝肠的小草，但可解情花之毒', avatar: '12', type: 'cy', value: -10, price: 4800 },
  { id: WpIdEnum.HuangJing, name: '黄精', desc: '百合科多年生草本植物', avatar: '13', type: 'cy', value: 5, price: 2400 },
  { id: WpIdEnum.XuDuan, name: '续断', desc: '味苦，微温，具续断生命之效', avatar: '14', type: 'cy', value: 8, price: 4800 },
  { id: WpIdEnum.JingTian, name: '景天', desc: '藏人尊为“苏罗玛宝”，意为“神药”', avatar: '15', type: 'cy', value: 10, price: 7200 },
  { id: WpIdEnum.LingZhi, name: '灵芝', desc: '素有“仙草”之誉，效果非同凡响', avatar: '16', type: 'cy', value: 15, price: 12200 },
  { id: WpIdEnum.QingHua, name: '情花', desc: '据说服用之人饱受相思之苦', avatar: '17', type: 'cy', value: -20, price: 12200 },
  { id: WpIdEnum.LongDan, name: '龙胆', desc: '龙胆科多年生草本植物', avatar: '18', type: 'cy', value: 20, price: 18200 },
  { id: WpIdEnum.RenShen, name: '人参', desc: '效果虽不如人参果，亦弥足珍贵', avatar: '19', type: 'cy', value: 30, price: 36600 },
  { id: WpIdEnum.WuMingJing, name: '无名精', desc: '药寂寂无名，故以无名名之', avatar: '20', type: 'cy', value: 10, price: 62200 },
  { id: WpIdEnum.HeDingHong, name: '鹤顶红', desc: '毒中之王，无可救药', avatar: '21', type: 'cy', value: -40, price: 62200 },
  { id: WpIdEnum.JinChuangYao, name: '金疮药', desc: '3黄精加2续断加3景天配制而成', avatar: '22', type: 'yw', value: 20, price: 62200 },
  { id: WpIdEnum.XingJunDan, name: '行军丹', desc: '1黄精加2灵芝加1龙胆配制而成', avatar: '23', type: 'yw', value: 25, price: 80400 },
  { id: WpIdEnum.XiaoHuanDan, name: '小还丹', desc: '续断加景天加龙胆加人参配制而成', avatar: '24', type: 'yw', value: 30, price: 97600 },
  { id: WpIdEnum.DaHuanDan, name: '大还丹', desc: '续断加景天加人参加无名精配制而成', avatar: '25', type: 'yw', value: 50, price: 183000 },
  {
    id: WpIdEnum.WuJiJinDan,
    name: '无极金丹',
    desc: '2黄精加2灵芝加2情花加2人参配制而成',
    avatar: '26',
    type: 'yw',
    value: 60,
    price: 229200,
  },
  {
    id: WpIdEnum.XiaoYaoSan,
    name: '逍遥散',
    desc: '1续断加2景天加2无名精加1鹤顶红配制而成',
    avatar: '27',
    type: 'yw',
    value: 80,
    price: 305000,
  },
  {
    id: WpIdEnum.ChengQiYin,
    name: '承气饮',
    desc: '2灵芝加2龙胆加2人参加2无名精配制而成',
    avatar: '28',
    type: 'yw',
    value: 90,
    price: 439200,
  },
  {
    id: WpIdEnum.QiXingHaiTang,
    name: '七星海棠',
    desc: '断肠草加续断加景天加灵芝加龙胆加无名精加鹤顶红配制而成',
    avatar: '29',
    type: 'yw',
    value: -90,
    price: 146400,
  },
  {
    id: WpIdEnum.BeiSuQingFeng,
    name: '悲酥清风',
    desc: '2断肠草加2情花加1人参加2无名精配制而成',
    avatar: '30',
    type: 'yw',
    value: -50,
    price: 292800,
  },
  { id: WpIdEnum.ShiQuanShiMei, name: '十全十美', desc: '由十种草药各一份配制而成', avatar: '31', type: 'yw', value: 100, price: 366000 },
  {
    id: WpIdEnum.JiuHuaYuLuWan,
    name: '九花玉露丸',
    desc: '由除鹤顶红之外的九种草药各两份配制而成',
    avatar: '32',
    type: 'yw',
    value: 125,
    price: 488000,
  },
]

export interface WpItem {
  id: WpIdEnum
  name: string
  desc: string
  avatar: string
  isActive?: boolean
  type: WpType
  value: number
  price: number
}
/**
 * zh 杂货
 * cy 草药
 * yw 药物
 */
export type WpType = 'zh' | 'cy' | 'yw'
