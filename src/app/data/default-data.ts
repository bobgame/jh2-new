import { CityGroupEnum, PageEnum } from '../constants/enums/base.enum'
import { CityIdEnum } from '../constants/enums/city.enum'
import { RwIdEnum } from '../constants/enums/rw.enum'
import { defaultCities } from './city'
import { GmTaskData } from './tasks/task.interface'

export const defaultCurrent = {
  city: defaultCities[CityIdEnum.DaLi - 1],
  preCityGroup: CityGroupEnum.Normal,
  citySS: CityGroupEnum.JiuGuan,
  cityGroup: CityGroupEnum.Normal,
  prePage: PageEnum.Map,
  rwIn: CityGroupEnum.JiuGuan,
  rw: {
    id: RwIdEnum.DuanZiYu,
    ssImg: 'jg',
  },
  page: PageEnum.Home,
  house: CityIdEnum.DaLi,
  guides: {
    db: {
      tz: false,
      yp: false,
      dx: false,
    },
    // 配药
    py: {
      home: false,
      pei: false,
    },
  },
}

export const gmDataDefault: GmTaskData = {
  xb: {
    get: false,
    successTId: 0,
    failTId: 0,
  },
  cy: {
    get: false,
    successTId: 0,
    failTId: 0,
  },
  dl: {
    type: 'normal',
    point: 0,
    target: 16,
    successTId: 0,
    failTId: 0,
  },
  mg: {
    canBack: false,
    successTId: 0,
    failTId: 0,
  },
  qi: {
    successTId: 0,
    failTId: 0,
  },
  hua: {
    target: 0,
    successTId: 0,
    failTId: 0,
  },
  db: {
    type: 'tz',
    successTId: 0,
    failTId: 0,
  },
  qin: {
    target: 20,
    successTId: 0,
    failTId: 0,
  },
  ft: {
    successTId: 0,
    failTId: 0,
  },
}
