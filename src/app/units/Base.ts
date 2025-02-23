import { CityGroupEnum } from '../constants/enums/base.enum'
import { ssGroupMap } from '../pages/city/city-data'

export const rand = (): number => crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296

export const sampleItem = <T>(arr: T[]): T => arr[Math.floor(arr.length * rand())]

export const clone = <T>(source: T): T => JSON.parse(JSON.stringify(source))

export const numToNumArray = (num: number) =>
  num
    .toString()
    .split('')
    .map(n => parseFloat(n))

export const addToArr = <T>(item: T, arr: T[]) => {
  if (!arr.includes(item)) {
    arr.push(item)
  }
}

export const rand100 = (): number => rand() * 100
/** maxNum, ...,  minNum */
export const randInt = (maxNum: number, minNum = 0): number => Math.floor(rand() * (maxNum - minNum + 1) + minNum)
export const randBoolean = (): boolean => rand() > 0.5

export const randCoding = (count?: number) => {
  const result: string[] = []
  let n = randInt(128, 100) // 这个值可以改变的，对应的生成多少个字母，根据自己需求所改
  if (count) {
    n = randInt(count + 20, count)
  }
  for (let i = 0; i < n; i++) {
    // 生成一个0到25的数字
    const ranNum = Math.ceil(Math.random() * 25)
    // 大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;
    // 然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
    result.push(String.fromCharCode(65 + ranNum))
  }
  return result.join('').toLocaleLowerCase()
}

export const getById = <T>(arr: T[], id: number): T => arr.find((p: any) => p.id && p.id === id) || arr[0]

export const cloneDeep = <T>(obj: T, parent: any = null): T => {
  let result
  let parentInner = parent
  while (parentInner) {
    if (parentInner.originalParent === obj) {
      return parentInner.currentParent
    }
    parentInner = parentInner.parent
  }
  if (obj && typeof obj === 'object') {
    if (obj instanceof RegExp) {
      result = new RegExp(obj.source, obj.flags)
    } else if (obj instanceof Date) {
      result = new Date(obj.getTime())
    } else {
      if (obj instanceof Array) {
        result = []
      } else {
        const proto = Object.getPrototypeOf(obj)
        result = Object.create(proto)
      }
      for (const i in obj) {
        if (obj[i] && typeof obj[i] === 'object') {
          result[i] = cloneDeep(obj[i], {
            originalParent: obj,
            currentParent: result,
            parent,
          })
        } else {
          result[i] = obj[i]
        }
      }
    }
  } else {
    return obj
  }
  return result
}

export const getRandNumArr = (maxAmount: number, maxValue: number): number[] => {
  const arr: number[] = []
  for (let i = 0; i < 999; i++) {
    const num = randInt(maxValue)
    if (!arr.includes(num)) {
      arr.push(num)
      if (arr.length >= maxAmount) {
        break
      }
    }
  }
  if (arr.length < maxAmount) {
    return getRandNumArr(maxAmount, maxValue)
  }
  return arr
}

export const randomCoding = (count?: number) => {
  const result: string[] = []
  let n = randInt(128, 100) // 这个值可以改变的，对应的生成多少个字母，根据自己需求所改
  if (count) {
    n = randInt(count + 20, count)
  }
  for (let i = 0; i < n; i++) {
    // 生成一个0到25的数字
    const ranNum = Math.ceil(Math.random() * 25)
    // 大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;
    // 然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
    result.push(String.fromCharCode(65 + ranNum))
  }
  return result.join('').toLocaleLowerCase()
}

export function getKeyByValue(obj: any, value: any): string | undefined {
  for (const key in obj) {
    if (obj[key] === value) {
      return key
    }
  }
  return undefined
}

export function getWyLv(lv: number): number {
  let wyLv = 0
  if (lv >= 9) {
    wyLv = 3
  } else if (lv >= 5) {
    wyLv = 2
  } else if (lv >= 2) {
    wyLv = 1
  }
  return wyLv
}

export function getTransHeart(value: number): number {
  let result = value
  if (value > 100) {
    result = 100
  }
  if (value < 0) {
    result = 0
  }
  // if value in 0-18 return 0-33, if value in 18-50 return 33-66, if value in 50-100 return 66-100
  if (value >= 0 && value <= 18) {
    result = (value * 33) / 18
  } else if (value > 18 && value <= 50) {
    result = 33 + ((value - 18) * 33) / 32
  } else if (value > 50 && value <= 100) {
    result = 66 + ((value - 50) * 34) / 50
  }
  return result
}

export function getSSKey(cityGroup: CityGroupEnum) {
  let ssKey = 'jg'
  for (const key in ssGroupMap) {
    if (ssGroupMap[key] === cityGroup) {
      ssKey = key
      break
    }
  }
  return ssKey
}

export function replaceTalk(text: string, options: { npcName?: string }) {
  let allText = text
  const { npcName } = options
  if (npcName) {
    allText = allText.replaceAll('[rw]', `[red]${npcName}[/red]`)
  }
  allText = allText
    .replaceAll('[red]', '<span class="red">')
    .replaceAll('[/red]', '</span>')
    .replaceAll('[green]', '<span class="green">')
    .replaceAll('[/green]', '</span>')
  return allText
}

export function calcWyIds(wyValue: number, base = 1) {
  const arr = []
  if (wyValue >= 2) {
    arr.push(base)
    if (wyValue >= 5) {
      arr.push(base + 1)
      if (wyValue >= 9) {
        arr.push(base + 2)
      }
    }
  }
  return arr
}
