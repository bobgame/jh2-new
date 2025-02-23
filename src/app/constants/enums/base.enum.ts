export enum PageEnum {
  Home,
  ChooseHero,
  Cards,
  Help,
  About,
  Game,
  GameDl,
  GameCy,
  GameXb,
  GameQin,
  GameQi,
  GameShu,
  GameHua,
  GameMg,
  GameDb,
  GamePy,
  City,
  Fight,
  Map,
  PlayGuide,
  Settings,
}

// export type FightCardType = 'single' | 'onePairs' | 'straight' | 'flush' | 'straightFlush' | 'threeOfAKing'
/**
 * 乱张 对子 顺子 同花 同花顺 豹子
 * */
export enum FightCardEnum {
  Single,
  OnePairs,
  Straight,
  Flush, // not use
  StraightFlush, // not use
  ThreeOfAKing,
}

export enum CityGroupEnum {
  /** 正常地点显示的内容 */
  Normal,
  /** 码头 */
  HangZhouMaTou,
  /** 郊外 */
  JiaoWai,
  /** 当铺 */
  DangPu,
  /** 武馆 */
  WuGuan,
  /** 赌场 */
  DuChang,
  /** 客栈 */
  KeZhan,
  /** 民家 */
  MinJia,
  /** 酒馆 */
  JiuGuan,

  /** Special */
  /** 光明顶 */
  GuangMingDing,
  /** 峨眉后山 */
  EMeiHouShan,

  /** 武当后山 */
  WuDangHouShan,
  /** 真武殿 */
  ZhenWuDian,
  /** 解剑池 */
  JieJianChi,
  /** 思过崖 */
  SiGuoYa,
  /** 正气堂 */
  ZhengQiTang,
  /** 观日峰 */
  GuanRiFeng,
  /** 少林后山 */
  ShaoLinHouShan,
  /** 罗汉堂 */
  LuoHanTang,
  /** 达摩院 */
  DaMoYuan,
  /** 藏经阁 */
  CangJingGe,
  /** 少林大殿 */
  ShaolinDaDian,
  /** 码头 */
  XiaoDaoMaTou,
  /** 紫禁城 */
  ZiJinCheng,
  /** 旷野 */
  XiaoDaoKuangYe,
  /** 旷野 */
  LvZhuXiang,
  /** 自宅 */
  ZiZhai,
  ZiZhaiBJ,
  ZiZhaiXL,

  /** 乞讨 */
  QiTao,

  /** 人物 */
  RenWu,
}

export enum CityRwSpIdEnum {
  MaiRu = 1,
  MaiChu,
  XiWu,
  XiuLian,

  Qin,
  Qi,
  Shu,
  Hua,

  DaXiao,
  YiPei,
  TouZi,

  ChuHai,

  JianBao,
}

export enum HeroIdEnum {
  WuMing = 1,
  LuXiaoFeng,
  XiMenChuiXue,
  YangGuo,
  GuoXiang,
  WuQing,
}
