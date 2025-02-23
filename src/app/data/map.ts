import { CityIdEnum } from '../constants/enums/city.enum'

/**
 * 昆仑 kunlun
 * 长安
 * 峨眉
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
 */
export const defaultMapCities: MapCity[] = [
  { id: CityIdEnum.KunLun, name: '昆仑', key: 'kunlun', left: 31, top: 89, img: 'mountain-1' },
  { id: CityIdEnum.ChangAn, name: '长安', key: 'changan', left: 122, top: 203, img: 'city-3' },
  { id: CityIdEnum.EMei, name: '峨眉', key: 'emei', left: 100, top: 320, img: 'mountain-3', imgReverse: true },
  { id: CityIdEnum.DaLi, name: '大理', key: 'dali', left: 36, top: 425, img: 'city-1', imgReverse: true },
  { id: CityIdEnum.WuDang, name: '武当', key: 'wudang', left: 213, top: 239, img: 'mountain-2' },
  { id: CityIdEnum.LuoYang, name: '洛阳', key: 'luoyang', left: 258, top: 196, img: 'city-1' },
  { id: CityIdEnum.HuaShan, name: '华山', key: 'huashan', left: 236, top: 156, img: 'mountain-2', imgReverse: true },
  { id: CityIdEnum.JingCheng, name: '京城', key: 'jingcheng', left: 308, top: 100, img: 'city-2' },
  { id: CityIdEnum.TaiShan, name: '泰山', key: 'taishan', left: 348, top: 158, img: 'mountain-4' },
  { id: CityIdEnum.ShaoLin, name: '少林', key: 'shaolin', left: 310, top: 214, img: 'mountain-3' },
  { id: CityIdEnum.XiangYang, name: '襄阳', key: 'xiangyang', left: 305, top: 286, img: 'city-1' },
  { id: CityIdEnum.ChangSha, name: '长沙', key: 'changsha', left: 322, top: 404, img: 'city-1', imgReverse: true },
  { id: CityIdEnum.SuZhou, name: '苏州', key: 'suzhou', left: 428, top: 315, img: 'city-1' },
  { id: CityIdEnum.HangZhou, name: '杭州', key: 'hangzhou', left: 404, top: 366, img: 'city-1', imgReverse: true },
  { id: CityIdEnum.XiaoDao, name: '小岛', key: 'xiaodao', left: 532, top: 328 },
]

export interface MapCity {
  id: number
  name: string
  key: string
  left: number
  top: number
  img?: string
  imgReverse?: boolean
}
