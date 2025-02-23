import { environment } from '../../environments/environment'
import { HeroIdEnum } from '../constants/enums/base.enum'
import { MjIdEnum } from '../constants/enums/mj.enum'
import { RwIdEnum } from '../constants/enums/rw.enum'
import { WpIdEnum } from '../constants/enums/wp.enum'
import { ZbIdEnum } from '../constants/enums/zb.enum'
import { JhTime } from '../constants/interfaces/base.interface'
import { TaskIds, TaskTalkIds } from './tasks/task.enum'
import { ZbSubType } from './zb'

export const defaultHero: Hero = {
  id: HeroIdEnum.WuMing,
  name: '吴茗',
  desc: '吴茗',
  tl: 100,
  tlM: 100,
  sex: 1,
  avatar: '1',
  isIn: false,
  isActive: true,
  age: 23,
  time: { mm: 1, dd: 1, hh: 1 },
  wg: environment.heroWg,
  qgz: 0,
  sw: 1,
  jq: 50 * 1000,
  wps: [],
  zbs: [],
  mjs: [],
  tsks: [],
  equip: {
    weapon: { id: ZbIdEnum.HuafuJian, name: '', subType: 'sword', value: 1, active: false },
    armor: { id: ZbIdEnum.HuafuJian, name: '', subType: '', value: 1, active: false },
    horse: { id: ZbIdEnum.HuafuJian, name: '', subType: '', value: 1, active: false },
  },
  wy: { ng: 0, qg: 0, jf: 0, gf: 0, zf: 0, aq: 0 },
  jn: { tq: 0, yr: 0, zc: 0, dl: 0, xb: 0, fq: 0, sy: 0, yl: 0 },
}

export const heroes: any[] = [
  {
    id: HeroIdEnum.WuMing,
    name: '吴茗',
    desc: '胸怀大志初入江湖的毛头小伙子',
    avatar: '1',
    isActive: true,
    sex: 1,
  },
  {
    id: HeroIdEnum.LuXiaoFeng,
    name: '陆小凤',
    desc: '四条眉毛的浪子，名动江湖',
    avatar: '2',
    age: 36,
    sex: 1,
    wg: 88,
    sw: 40,
    mjs: [MjIdEnum.FengWuJiuTian, MjIdEnum.LingXiYiZhi],
    wy: { ng: 9, qg: 9, jf: 0, gf: 0, zf: 9, aq: 5 },
    jn: { tq: 0, yr: 1, zc: 1, dl: 0, xb: 0, fq: 0, sy: 0, yl: 0 },
  },
  {
    id: HeroIdEnum.XiMenChuiXue,
    name: '西门吹雪',
    desc: '冰山一般冷酷的寂寞绝世剑客',
    avatar: '3',
    age: 28,
    sex: 1,
    wg: 90,
    sw: 42,
    wy: { ng: 5, qg: 9, jf: 9, gf: 0, zf: 0, aq: 0 },
    jn: { tq: 0, yr: 0, zc: 0, dl: 0, xb: 0, fq: 0, sy: 0, yl: 1 },
  },
  {
    id: HeroIdEnum.YangGuo,
    name: '杨过',
    desc: '神雕侠侣，绝迹江湖',
    avatar: '4',
    age: 20,
    sex: 1,
    wg: 86,
    sw: 40,
    wy: { ng: 9, qg: 5, jf: 9, gf: 0, zf: 5, aq: 0 },
    jn: { tq: 0, yr: 0, zc: 0, dl: 1, xb: 0, fq: 0, sy: 1, yl: 0 },
  },
  {
    id: HeroIdEnum.GuoXiang,
    name: '郭襄',
    desc: '清秀脱俗的如花少女，郭靖次女',
    avatar: '5',
    age: 16,
    sex: 2,
    wg: 70,
    sw: 20,
    wy: { ng: 5, qg: 5, jf: 5, gf: 0, zf: 0, aq: 0 },
    jn: { tq: 0, yr: 0, zc: 0, dl: 0, xb: 0, fq: 1, sy: 0, yl: 0 },
  },
  {
    id: HeroIdEnum.WuQing,
    name: '无情',
    desc: '四大名捕之首，精轻功，擅暗器',
    avatar: '6',
    age: 24,
    sex: 1,
    wg: 80,
    sw: 33,
    mjs: [MjIdEnum.QingRenJian, MjIdEnum.KongQueLing],
    wy: { ng: 2, qg: 9, jf: 0, gf: 0, zf: 0, aq: 9 },
    jn: { tq: 0, yr: 0, zc: 1, dl: 0, xb: 0, fq: 0, sy: 0, yl: 0 },
  },
]

export interface HeroTask {
  /** 触发的人物 */
  stRw: RwIdEnum
  id: TaskIds
  toRw: RwIdEnum
  talkId: TaskTalkIds
  backRw?: RwIdEnum
  isPreAdd?: boolean
}

export interface Hero {
  id: number
  name: string
  desc: string
  avatar: string
  /** 确认是否为有效存档 */
  isIn: boolean
  isActive?: boolean
  /** 体力 */
  tl: number
  /** 体力最大值 */
  tlM: number
  age: number
  /** 1 man 2 woman */
  sex: number
  wps: HeroItem[]
  zbs: HeroItem[]
  mjs: number[]
  tsks: HeroTask[]
  equip: HeroEquip
  /** 时间 换算成 正月初一亥时 */
  time: JhTime
  /** 武功 */
  wg: number
  /** 轻功 */
  qgz: number
  /** 声望 */
  sw: number
  /** 金钱 铜钱 使用时 换算成 银两+铜钱 */
  jq: number
  /** 武艺 */
  wy: PersonWy
  /** 技能 */
  jn: PersonJn
}

export interface PersonWy {
  /** 内功 */
  ng: number
  /** 轻功 */
  qg: number
  /** 剑法 */
  jf: number
  /** 棍法 */
  gf: number
  /** 掌法 */
  zf: number
  /** 暗器 */
  aq: number
}

export const personJnKeys: (keyof PersonJn)[] = ['tq', 'yr', 'zc', 'dl', 'xb', 'fq', 'sy', 'yl']

export interface PersonJn {
  /** 偷窃 */
  tq: number
  /** 易容 */
  yr: number
  /** 侦察 */
  zc: number
  /** 打猎 */
  dl: number
  /** 寻宝 */
  xb: number
  /** 抚琴 */
  fq: number
  /** 商业 */
  sy: number
  /** 医疗 */
  yl: number
}

// export interface HeroMerge {
//   id: number
//   name: string
//   desc: string
//   avatar: string
//   isActive?: boolean
//   /** 武功 */
//   wg: number
//   /** 声望 */
//   sw: number
//   /** 体力 */
//   tl: number
//   /** 内功 */
//   gNg: number
//   /** 轻功 */
//   gQg: number
//   /** 剑法 */
//   gJf: number
//   /** 棍法 */
//   gGf: number
//   /** 掌法 */
//   gZf: number
//   /** 暗器 */
//   gAq: number
// }

export interface HeroItem {
  id: WpIdEnum
  count: number
}

export interface HeroEquip {
  weapon: HeroEquipItem
  armor: HeroEquipItem
  horse: HeroEquipItem
}

export interface HeroEquipItem {
  id: ZbIdEnum
  name: string
  value: number
  subType: ZbSubType
  active: boolean
}

export type WeaponTypeWy = {
  [key in ZbSubType]: keyof PersonWy
}
