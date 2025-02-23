import { CityGroupEnum } from '../../constants/enums/base.enum'
import { CityIdEnum } from '../../constants/enums/city.enum'
import { RwIdEnum } from '../../constants/enums/rw.enum'
import { WpIdEnum } from '../../constants/enums/wp.enum'
import { DbType } from '../../constants/interfaces/base.interface'
import { HeroTask, PersonJn, PersonWy } from '../hero'
import { KeyIds } from './keys.interface'
import { TaskAnswerActions, TaskIds, TaskTalkActions, TaskTalkIds, TaskType } from './task.enum'

export interface JhTask {
  rwId: RwIdEnum
  name: string
  tasks: TaskItem[]
}

export interface TaskItem {
  id: TaskIds
  type: TaskType
  /** 触发概率 0-100 */
  rate: number
  allNeed?: TaskItemNeed[][]
  talkId: TaskTalkIds
  reward: TaskReward[]
  failReward?: TaskReward[]
  endSetKey?: TaskEndSetKey[]
  endFailSetKey?: TaskEndSetKey[]
  endAddTsk?: HeroTask
  isPreAdd?: boolean
  showGameover?: boolean
}

export interface TaskEndSetKey {
  keyId: KeyIds
  value: number
}
export interface TaskRmWp {
  wpId: WpIdEnum
  value: number
}

export interface TaskReward {
  type: TaskRewardType
  value: number | keyof PersonJn | keyof PersonWy
}

export interface TaskItemNeed {
  type: TaskItemNeedType
  rule: TaskItemNeedRule
  value: number[]
}

export type TaskItemNeedType =
  | 'heart'
  | 'rwHeart'
  | 'year'
  | 'month'
  | 'year3'
  | 'city'
  | 'cityGroup'
  | 'citySS'
  | 'key'
  | 'day'
  | 'time'
  | 'keyDay'
  | 'yearTime'
  | 'zj'
  | 'mj'
  | 'jq'
  | 'wg'
  | 'sw'
  | 'tl'
  | 'ng'
  | 'qg'
  | 'jf'
  | 'gf'
  | 'zf'
  | 'aq'
  | 'tq'
  | 'yr'
  | 'zc'
  | 'dl'
  | 'xb'
  | 'fq'
  | 'sy'
  | 'yl'
  | 'wp'
  | 'cyS'
  | 'xbS'
  | 'dlS'
  | 'cHeart'
  | 'dbW'

export type TaskRewardType = 'jq' | 'wp' | 'zb' | 'mj' | 'rw' | 'ch' | 'zj' | 'jn' | 'none'

export type TaskItemNeedRule = '>' | '<' | '=' | '!=' | '>=' | '<='

export type TaskActionType = 'toId' | 'toRw' | 'addWp' | 'addMj' | 'addRw' | 'addCh' | 'showChoose'

export interface TaskTalkItem {
  id: number
  taskId?: number
  type: 'rw' | 'zj'
  rwId: number | RwIdEnum
  text: string
  isActive?: boolean
  isShow?: boolean
  actionType?: TaskTalkActions
  fightRwId?: RwIdEnum
  dbRwId?: RwIdEnum
  /** 谁家玉笛听落梅 */
  sjydtlm?: boolean
  huaId?: number
  dbType?: DbType
  dlType?: 'zyhb' | 'normal'
  upAge?: number
  upTime?: number
  upTl?: number
  actionValue?: number
  setCity?: CityIdEnum
  setCityGroup?: CityGroupEnum
  hideNpc?: boolean
  hideHero?: boolean
  hideNpcAvatar?: boolean
  hideHeroAvatar?: boolean
  setKeyDay?: { keyId: KeyIds }[]
  actionFailValue?: number
  moveToCity?: CityIdEnum
  moveToCityGroup?: CityGroupEnum
  setKey?: TaskEndSetKey[]
  rmWps?: TaskRmWp[]
  minusJq?: number
}

export interface TaskTalk {
  id: TaskTalkIds
  talks: TaskTalkItem[]
}

export interface TaskQaItem {
  question: string
  answers: TaskAnswerItem[]
}

export interface TaskAnswerItem {
  id: number
  text: string
  actionType: TaskAnswerActions
  actionValue: number[]
  setKey?: TaskEndSetKey[]
}

export interface TaskQa {
  id: TaskTalkIds
  qa: TaskQaItem
}

// xb: {
//   get: false,
//   successTId: 0,
//   failTId: 0,
// },
// dl: {
//   type: 'zyhb',
//   point: 0,
//   target: 30,
//   successTId: 0,
//   failTId: 0,
// },
export interface GmTaskData {
  xb: {
    get: boolean
    successTId: number
    failTId: number
  }
  cy: {
    get: boolean
    successTId: number
    failTId: number
  }
  dl: {
    /**
     * normal: 正常
     * zyhb: 左右互搏
     */
    type: 'zyhb' | 'normal'
    point: number
    target: number
    successTId: number
    failTId: number
  }
  mg: {
    canBack: boolean
    successTId: number
    failTId: number
  }
  /** 下棋 */
  qi: {
    successTId: number
    failTId: number
  }
  /** 画 */
  hua: {
    target: number
    successTId: number
    failTId: number
  }
  db: {
    type: 'tz' | 'yp' | 'dx'
    successTId: number
    failTId: number
  }
  qin: {
    target: number
    successTId: number
    failTId: number
  }
  /** fight */
  ft: {
    successTId: number
    failTId: number
  }
}

export const NoReward: TaskReward[] = [{ type: 'none', value: 0 }]
