export interface KeyItem {
  id: KeyIds | number
  value: number
}

export enum KeyIds {
  DianXiaoEr_ZhaoRen = 1,
  DuanZiYu_LiuMaiShenJian,
  WuQing_MinJia_1,
  DianXiaoEr_DengHui_1,
  HuanShiBiShen_1,
  JiuYangZhenJing_1,
  MuDaoRen_TaiJiJianFa,
  FangZheng_LuoHanGunFa,
  GuoJing_XiangLongShiBaZhang,
  HuangRong_DaGouBangFa,
  HuangYaoShi_TanZhiShenTong,
  LaoShiHeShang_ZhangFa,
  LingHuChong_DuGuJiuJian,
  SiKongZhaiXing_TanZhiShenTong,
  WuQing_QingRenJian,
  XiaoLaoTou_NianHuaZhi,
  XiMenChuiXue_QianShuHanMei,
  ZhangSanFeng_TaiJiQuan,
  ZhouBoTong_ZuoYouHuBo,
  ZhouBoTong_RenWuKa,
  WangXiaoShi_WanLiuJian,
  DuanZiYu_BeiMingShenGong,
  DuanZiYu_RenWuKa,
  DuanZiYu_XunBao,
  DuanZiYu_ShangYe,
  RenYingYing_YiLiao,
  WuMingLaoSeng_NianHuaZhi,
  SuRongRong_RenWuKa,
  ChuLiuXiang_RenWuKa,
  ChuLiuXiang_TouQie,
  MuDaoRen_RenWuKa,
  ChuLiuXiang_WuJianZhiJian,
  SuRongRong_YiRong,
  WangXiaoShi_RenWuKa,
  LingHuChong_RenWuKa,
  LingHuChong_YiJinJing,
  YeKai_XiaoLiFeiDao,
  LiXunHuan_RenWuKa,
  SiKongZhaiXing_TouWangZhiWang,
  WuMingLaoSeng_RenWuKa,
  WuMingLaoSeng_DaMoZhangFa,
  XiaoLaoTou_RenWuKa,
  ZhuGeXianSheng_RenWuKa,
  SuYing_RenWuKa,
  SuYing_YiLiao,
  XiaoShiYiLang_RenWuKa,
  FengSiNiang_RenWuKa,
  XiaoShiYiLang_WangQingTianShu,
  ZhuGeXianSheng_ZhenCha,
  ChengHao_GuoShiWuShuang,
  LingHuChong_DaLie,
  GuoXiang_FuQin,
  ChengHao_FuJiaTianXia,
  ChengHao_FuJiaTianXia_BaiYuMeiRen,
  ChengHao_FuJiaTianXia_XiaoAoJiangHuPu,
  ChengHao_FuJiaTianXia_LanTingJiXu,
  ChengHao_DanQingMiaoBi,
  ChengHao_LiuZhiQinMo,
  DianXiaoEr_PanTao,
  DianXiaoEr_LingZhi,
  YangGuo_XuanTieJian,
  YangGuo_RenWuKa,
  ChengHao_MiaoShouHuiChun,
  ChengHao_ZaiShiMengChang,
  ChengHao_TianXiaDiYi,
  ChengHao_BaiBuChuanYang,
  ChengHao_ZhuBaoQiXia,
  ChengHao_DiYiDuTu,
  LuXiaoFeng_RenWuKa,
  WuShi_DuChang,
  SiKongZhaiXing_LuXiaoFeng,
  LuXiaoFeng_QiuYin,
  YuLuoCha_RenWuKa,
  HuaManLou_RenWuKa,
  HuaManLou_LingXiYiZhi,

  Rand_Key_1 = 140,
  // Below are count keys
  Count_XunBao_Game = 150,
  Count_XunBao_Success,
  Count_XunBao_Total,
  Count_XunBao_Backup_1,
  Count_XunBao_Backup_2,
  Count_CaiYao_Game,
  Count_CaiYao_Success,
  Count_CaiYao_Total,
  Count_CaiYao_Backup_1,
  Count_CaiYao_Backup_2,
  Count_DaLie_Game,
  Count_DaLie_Success_Hit,
  Count_Dalie_Total_Hit,
  Count_Dalie_backup_1,
  Count_Dalie_backup_2,
  Count_MiGong_Game,
  Count_MiGong_Success,
  Count_MiGong_Backup_1,
  Count_DuiYi_Game,
  Count_DuiYi_Success,
  Count_DuiYi_Backup_1,
  Count_Hua_Game,
  Count_Hua_Move,
  Count_Hua_Success,
  Count_Hua_Total_Score,
  Count_Hua_Backup_1,
  Count_Hua_Backup_2,
  Count_FuQin_Game,
  Count_FuQin_Total_Score,
  Count_FuQin_Hit_Success,
  Count_FuQin_Hit_Total,
  Count_FuQin_Backup_1,
  Count_FuQin_Backup_2,
  Count_DuBo_Game,
  Count_DuBo_DaXiao,
  Count_DuBo_YiPei,
  Count_DuBo_TouZi,
  Count_DuBo_Win_JQ,
  Count_DuBo_Lose_JQ,
  Count_DuBo_Win_Count,
  Count_DuBo_Lose_Count,
  Count_DuBo_Backup_3,
  Count_Fight_Game,
  Count_Fight_Win,
  Count_Fight_Lose,
  Count_Fight_Backup_1,
  Count_Fight_Backup_2,
  Count_Fight_Backup_3,

  // below are zj related keys
  WuMing_ZJ_Main = 221,

  LuXiaoFeng_ZJ_Main = 241,
  LuXiaoFeng_ZJ_Day_Check,

  XiMenChuiXue_ZJ_Main = 271,
  XiMenChuiXue_ZJ_QianShuHanMei,
  XiMenChuiXue_ZJ_Day_Check,
  XiMenChuiXue_ZJ_TianXiaYouXue,

  YangGuo_ZJ_Main = 301,
  YangGuo_ZJ_ShenDiao_To_Seven_day,
  YangGuo_ZJ_ShenDiao_Fight_Three_day,
  YangGuo_ZJ_ShenDiao_FangSheng_Three_day,
  YangGuo_ZJ_ShenDiao_ShiLiuNian_Three_day,
  YangGuo_ZJ_Three_day,
  YangGuo_ZJ_Three_day_LiWu_Prepare,
  YangGuo_ZJ_ZhuShou_day,
  YangGuo_ZJ_XiangYang_JinLunFaWang,
  YangGuo_ZJ_No_GuoXiang,
  YangGuo_ZJ_New_Three_day,

  GuoXiang_ZJ_Main = 331,
  GuoXiang_ZJ_Day_Check,
  GuoXiang_ZJ_HuangRong_FanZhou,
  GuoXiang_ZJ_ChuLiuXiang_JinLvYi,
  GuoXiang_ZJ_Day_Check_ChuLiuXiang_JinLvYi,
  GuoXiang_ZJ_HuangYaoShi_RenWuKa,
  GuoXiang_ZJ_HuangYong_Food_Day_Check,
  GuoXiang_ZJ_XiangYang_YiChengPo,

  WuQing_ZJ_Main = 361,
  WuQing_ZJ_Day_Check,
  WuQing_ZJ_XiangYang_ZhuiMing,
  WuQing_ZJ_ChangAn_TieShou,
  WuQing_ZJ_JingCheng_ZhuiMing,
  WuQing_ZJ_JingCheng_TieShou,
  WuQing_ZJ_JingCheng_LengXie,
  WuQing_ZJ_Day_Check_ZhuiMing,
  WuQing_ZJ_Day_Check_TieShou,
  WuQing_ZJ_Day_Check_LengXie,

  // end
}
