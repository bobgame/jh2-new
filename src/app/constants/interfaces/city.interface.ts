import { MapCity } from '../../data/map'
import { CityGroupEnum, CityRwSpIdEnum } from '../enums/base.enum'
import { CityIdEnum } from '../enums/city.enum'
import { RwIdEnum } from '../enums/rw.enum'
import { WpIdEnum } from '../enums/wp.enum'

export interface City {
  id: number
  name: string
  key: string
  img: string
  spx: number
  spp: CitySpecialPrice[]
  sleep: number
  group: CityGroup[]
}

export interface CitySpecialPrice {
  id: WpIdEnum
  price: number
}

export type CityCroupKeyType =
  | 'jw'
  | 'dp'
  | 'wg'
  | 'dc'
  | 'kz'
  | 'mj'
  | 'jg'
  | 'gmd'
  | 'hzmt'
  | 'xdmt'
  | 'xdky'
  | 'emhs'
  | 'wdhs'
  | 'zwd'
  | 'jjc'
  | 'sgy'
  | 'zqt'
  | 'grf'
  | 'slhs'
  | 'lht'
  | 'dmy'
  | 'cjg'
  | 'sldd'
  | 'qt'
  | 'mairu'
  | 'maichu'
  | 'tq'
  | 'hua'
  | 'qi'
  | 'shu'
  | 'qin'
  | 'xiwu'
  | 'xiulian'
  | 'daxiao'
  | 'yipei'
  | 'touzi'
  | 'chuhai'
  | 'jianbao'

export interface CityGroup {
  id: number
  name: string
  key: CityCroupKeyType
  npcs: CityGroupNpc[]
  sp?: boolean
}

export interface CityGroupNpc {
  id: number
  rate: number
}

export interface CitySheShiImages {
  [key: number]: string
}
export type CityGroupNames = {
  [key in CityGroupEnum]: string
}
export type CityRwSpNames = {
  [key in CityRwSpIdEnum]: string
}
export type JiaoWaiCityMap = {
  [key in CityIdEnum]: CityGroupEnum
}

export interface CityRwSp {
  id: CityRwSpIdEnum
  need: {
    inSS?: CityGroupEnum
    inCity?: CityIdEnum
    heart?: number
  }
}

export interface CityRwSpItem {
  id: RwIdEnum
  sps: CityRwSp[]
}

export interface CitySSItem {
  id: number
  name: string
  key: CityCroupKeyType
}

export interface SelectCityItem {
  isCH?: boolean
  isBJ?: boolean
  notEnterCity?: boolean
  isLHXS?: boolean
}
