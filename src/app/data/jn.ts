// /** 偷窃 */
// tq: number
// /** 易容 */
// yr: number
// /** 侦察 */
// zc: number
// /** 打猎 */
// dl: number
// /** 寻宝 */
// xb: number
// /** 抚琴 */
// fq: number
// /** 商业 */
// sy: number
// /** 医疗 */
// yl: number
export const defaultJns: JnItem[] = [
  { id: 1, key: 'tq', name: '偷窃', desc: '偷窃物品和金钱', avatar: 'tq', isActive: false },
  { id: 2, key: 'yr', name: '易容', desc: '降低遇敌概率', avatar: 'yr', isActive: false },
  { id: 3, key: 'zc', name: '侦察', desc: '“偷窃”和“易容”失效', avatar: 'zc', isActive: false },
  { id: 4, key: 'dl', name: '打猎', desc: '提高打猎效率，触发特殊事件', avatar: 'dl', isActive: false },
  { id: 5, key: 'xb', name: '寻宝', desc: '提高寻宝效率，触发特殊事件', avatar: 'xb', isActive: false },
  { id: 6, key: 'fq', name: '抚琴', desc: '主要用于触发特殊事件', avatar: 'fq', isActive: false },
  { id: 7, key: 'sy', name: '商业', desc: '提高买卖效率，触发特殊事件', avatar: 'sy', isActive: false },
  { id: 8, key: 'yl', name: '医疗', desc: '战斗时每回合恢复体力', avatar: 'yl', isActive: false },
]

export interface JnItem {
  id: number
  key: string
  name: string
  desc: string
  avatar: string
  isActive: boolean
}
