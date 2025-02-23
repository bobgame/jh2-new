import { JhTime } from '../constants/interfaces/base.interface'
// 子（zǐ） 、丑（chǒu） 、寅（yín） 、卯（mǎo） 、辰（chén） 、巳（sì） 、午（wǔ） 、未（wèi）、申（shēn） 、酉（yǒu） 、戌（xū） 、亥（hài）. [1]
const mms = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊']
const dds = [
  '初一',
  '初二',
  '初三',
  '初四',
  '初五',
  '初六',
  '初七',
  '初八',
  '初九',
  '初十',
  '十一',
  '十二',
  '十三',
  '十四',
  '十五',
  '十六',
  '十七',
  '十八',
  '十九',
  '二十',
  '廿一',
  '廿二',
  '廿三',
  '廿四',
  '廿五',
  '廿六',
  '廿七',
  '廿八',
  '廿九',
  '三十',
]
const hhs = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
export const getJhTime = (time: JhTime): string => {
  const { mm, dd, hh } = time
  if (mm && dd && hh) {
    return `${mms[mm - 1]}月${dds[dd - 1]}${hhs[hh - 1]}时`
  }
  return `正月初一子时`
}
// 这个时间是农历时间，mm是月，dd是日，hh是时辰，一天12个时辰，农历一年12个月，每个月天数不一样，一般是29天或30天，这里定为单数月是30天，双数月是29天
// 单数月是大月，双数月是小月
export const addJhTime = (time: JhTime, add: JhTime): { endTime: JhTime; addYear: number } => {
  const { mm, dd, hh } = time
  const { mm: addMm, dd: addDd, hh: addHh } = add
  const endTime = { mm, dd, hh }
  let addYear = 0
  if (addHh) {
    endTime.hh += addHh
    if (endTime.hh > 12) {
      endTime.hh -= 12
      endTime.dd++
      // const mmMax = mm % 2 === 0 ? 29 : 30
      const mmMax = 30
      if (endTime.dd > mmMax) {
        endTime.dd -= mmMax
        endTime.mm++
        if (endTime.mm > 12) {
          endTime.mm -= 12
          addYear++
        }
      }
    }
  }
  if (addDd) {
    endTime.dd += addDd
    const mmMax = mm % 2 === 0 ? 29 : 30
    if (endTime.dd > mmMax) {
      endTime.dd -= mmMax
      endTime.mm++
      if (endTime.mm > 12) {
        endTime.mm -= 12
        addYear++
      }
    }
  }
  if (addMm) {
    endTime.mm += addMm
    if (endTime.mm > 12) {
      endTime.mm -= 12
      addYear++
    }
  }
  return { endTime, addYear }
}

export function getTimeValue(year: number, time: JhTime): number {
  return year * 365 * 30 * 12 + time.mm * 30 * 12 + time.dd * 12 + time.hh
}

export function getTimeDay(year: number, time: JhTime): number {
  return year * 360 + time.mm * 30 + time.dd
}
