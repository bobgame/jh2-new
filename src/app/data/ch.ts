export enum ChIds {
  TianXiaDiYi = 1,
  XiaZhiDaZhe,
  FuJiaTianXia,
  ZaiShiMengChang,
  TouWangZhiWang,
  MiaoShouHuiChun,
  DiYiDuTu,
  BaiBuChuanYang,
  DanQingMiaoBi,
  LiuZhiQinMo,
  ZhuBaoQiXia,
  GuoShiWuShuang,

  ShenDiaoXiaLv,
  JianZhongZhiShen,
  FengWuJiuTian,
  SiDaMingBu,
  XiangQiEMei,
}
/**
 * 天下第一 整个江湖已经没有人是你的对手
 * 侠之大者 为国为民侠之大者
 * 富甲天下 家财万贯，富可敌国
 * 再世孟尝 义薄云天，仗义疏财，交友满天下
 * 偷王之王 凡是想要的东西没有偷不到的
 * 妙手回春 医术精妙，有起死回生之能
 * 第一赌徒 逢人必赌，逢赌必胜
 * 百步穿杨 江湖上路人皆知的神箭手
 * 丹青妙笔 笔下万物栩栩如生
 * 六指琴魔 琴技已臻化境，犹有六指
 * 珠宝奇侠 天下宝藏，皆入我手
 * 国士无双 棋艺天下第一，从此再无对手
 *
 * 神雕侠侣 神雕侠侣，绝迹江湖
 * 剑中之神 剑法已臻化境，犹如剑中之神
 * 风舞九天 龙游四海，凤舞九天
 * 四大名捕 冷血无情追命铁手
 * 襄启峨眉 一切有为法，如梦幻泡影，如露亦如电，当做如是观
 */
export const defaultChs: ChItem[] = [
  { id: ChIds.TianXiaDiYi, name: '天下第一', avatar: '1', desc: '整个江湖已经没有人是你的对手' },
  { id: ChIds.XiaZhiDaZhe, name: '侠之大者', avatar: '2', desc: '为国为民侠之大者' },
  { id: ChIds.FuJiaTianXia, name: '富甲天下', avatar: '3', desc: '家财万贯，富可敌国' },
  { id: ChIds.ZaiShiMengChang, name: '再世孟尝', avatar: '4', desc: '义薄云天，仗义疏财，交友满天下' },
  { id: ChIds.TouWangZhiWang, name: '偷王之王', avatar: '5', desc: '凡是想要的东西没有偷不到的' },
  { id: ChIds.MiaoShouHuiChun, name: '妙手回春', avatar: '6', desc: '医术精妙，有起死回生之能' },
  { id: ChIds.DiYiDuTu, name: '第一赌徒', avatar: '7', desc: '逢人必赌，逢赌必胜' },
  { id: ChIds.BaiBuChuanYang, name: '百步穿杨', avatar: '8', desc: '江湖上路人皆知的神箭手' },
  { id: ChIds.DanQingMiaoBi, name: '丹青妙笔', avatar: '9', desc: '笔下万物栩栩如生' },
  { id: ChIds.LiuZhiQinMo, name: '六指琴魔', avatar: '10', desc: '琴技已臻化境，犹有六指' },
  { id: ChIds.ZhuBaoQiXia, name: '珠宝奇侠', avatar: '11', desc: '天下宝藏，皆入我手' },
  { id: ChIds.GuoShiWuShuang, name: '国士无双', avatar: '12', desc: '棋艺天下第一，从此再无对手' },
  { id: ChIds.ShenDiaoXiaLv, name: '神雕侠侣', avatar: '13', desc: '神雕侠侣，绝迹江湖' },
  { id: ChIds.JianZhongZhiShen, name: '剑中之神', avatar: '14', desc: '剑法已臻化境，犹如剑中之神' },
  { id: ChIds.FengWuJiuTian, name: '风舞九天', avatar: '15', desc: '龙游四海，凤舞九天' },
  { id: ChIds.SiDaMingBu, name: '四大名捕', avatar: '16', desc: '冷血无情追命铁手' },
  { id: ChIds.XiangQiEMei, name: '襄启峨眉', avatar: '17', desc: '一切有为法，如梦幻泡影，如露亦如电，当做如是观' },
]

export interface ChItem {
  id: number
  name: string
  avatar: string
  desc: string
  isActive?: boolean
}
