import { WpIdEnum } from '../../constants/enums/wp.enum'

export const pyItems = [
  {
    id: WpIdEnum.JinChuangYao,
    needs: [
      { id: WpIdEnum.HuangJing, count: 3 },
      { id: WpIdEnum.XuDuan, count: 2 },
      { id: WpIdEnum.JingTian, count: 3 },
    ],
  },
  {
    id: WpIdEnum.XingJunDan,
    needs: [
      { id: WpIdEnum.HuangJing, count: 1 },
      { id: WpIdEnum.LingZhi, count: 2 },
      { id: WpIdEnum.LongDan, count: 1 },
    ],
  },
  {
    id: WpIdEnum.XiaoHuanDan,
    needs: [
      { id: WpIdEnum.XuDuan, count: 1 },
      { id: WpIdEnum.JingTian, count: 1 },
      { id: WpIdEnum.LongDan, count: 1 },
      { id: WpIdEnum.RenShen, count: 1 },
    ],
  },
  {
    id: WpIdEnum.DaHuanDan,
    needs: [
      { id: WpIdEnum.XuDuan, count: 1 },
      { id: WpIdEnum.JingTian, count: 1 },
      { id: WpIdEnum.RenShen, count: 1 },
      { id: WpIdEnum.WuMingJing, count: 1 },
    ],
  },
  {
    id: WpIdEnum.WuJiJinDan,
    needs: [
      { id: WpIdEnum.HuangJing, count: 2 },
      { id: WpIdEnum.LingZhi, count: 2 },
      { id: WpIdEnum.QingHua, count: 2 },
      { id: WpIdEnum.RenShen, count: 2 },
    ],
  },
  {
    id: WpIdEnum.XiaoYaoSan,
    needs: [
      { id: WpIdEnum.XuDuan, count: 1 },
      { id: WpIdEnum.JingTian, count: 2 },
      { id: WpIdEnum.WuMingJing, count: 2 },
      { id: WpIdEnum.HeDingHong, count: 1 },
    ],
  },
  {
    id: WpIdEnum.ChengQiYin,
    needs: [
      { id: WpIdEnum.LingZhi, count: 2 },
      { id: WpIdEnum.LongDan, count: 2 },
      { id: WpIdEnum.RenShen, count: 2 },
      { id: WpIdEnum.WuMingJing, count: 2 },
    ],
  },
  {
    id: WpIdEnum.QiXingHaiTang,
    needs: [
      { id: WpIdEnum.DuanChangCao, count: 1 },
      { id: WpIdEnum.XuDuan, count: 1 },
      { id: WpIdEnum.JingTian, count: 1 },
      { id: WpIdEnum.LingZhi, count: 1 },
      { id: WpIdEnum.LongDan, count: 1 },
      { id: WpIdEnum.WuMingJing, count: 1 },
      { id: WpIdEnum.HeDingHong, count: 1 },
    ],
  },
  {
    id: WpIdEnum.BeiSuQingFeng,
    needs: [
      { id: WpIdEnum.DuanChangCao, count: 2 },
      { id: WpIdEnum.QingHua, count: 2 },
      { id: WpIdEnum.RenShen, count: 1 },
      { id: WpIdEnum.WuMingJing, count: 2 },
    ],
  },
  {
    id: WpIdEnum.ShiQuanShiMei,
    needs: [
      { id: WpIdEnum.DuanChangCao, count: 1 },
      { id: WpIdEnum.HuangJing, count: 1 },
      { id: WpIdEnum.XuDuan, count: 1 },
      { id: WpIdEnum.JingTian, count: 1 },
      { id: WpIdEnum.LingZhi, count: 1 },
      { id: WpIdEnum.QingHua, count: 1 },
      { id: WpIdEnum.LongDan, count: 1 },
      { id: WpIdEnum.RenShen, count: 1 },
      { id: WpIdEnum.WuMingJing, count: 1 },
      { id: WpIdEnum.HeDingHong, count: 1 },
    ],
  },
  {
    id: WpIdEnum.JiuHuaYuLuWan,
    needs: [
      { id: WpIdEnum.DuanChangCao, count: 2 },
      { id: WpIdEnum.HuangJing, count: 2 },
      { id: WpIdEnum.XuDuan, count: 2 },
      { id: WpIdEnum.JingTian, count: 2 },
      { id: WpIdEnum.LingZhi, count: 2 },
      { id: WpIdEnum.QingHua, count: 2 },
      { id: WpIdEnum.LongDan, count: 2 },
      { id: WpIdEnum.RenShen, count: 2 },
      { id: WpIdEnum.WuMingJing, count: 2 },
    ],
  },
]
