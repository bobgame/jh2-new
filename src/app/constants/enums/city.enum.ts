/**
 * 昆仑 1
 * 长安 2
 * 峨眉 3
 * 大理
 * 武当
 * 洛阳
 * 华山
 * 京城
 * 泰山
 * 少林
 * 襄阳
 * 长沙
 * 苏州
 * 杭州
 * 小岛
 */

import { CityGroupEnum } from './base.enum'

export enum CityIdEnum {
  KunLun = 1,
  ChangAn = 2,
  EMei = 3,
  DaLi = 4,
  WuDang = 5,
  LuoYang = 6,
  HuaShan = 7,
  JingCheng = 8,
  TaiShan = 9,
  ShaoLin = 10,
  XiangYang = 11,
  ChangSha = 12,
  SuZhou = 13,
  HangZhou = 14,
  XiaoDao = 15,
}

export const AllJiaoWai = [
  CityGroupEnum.JiaoWai,
  CityGroupEnum.EMeiHouShan,
  CityGroupEnum.WuDangHouShan,
  CityGroupEnum.ShaoLinHouShan,
  CityGroupEnum.SiGuoYa,
  CityGroupEnum.GuangMingDing,
  CityGroupEnum.GuanRiFeng,
  CityGroupEnum.XiaoDaoKuangYe,
]
