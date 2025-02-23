import { ZbSubType } from './zb'

/**
 * 太极剑法 武当镇山剑法
 * 千树寒梅 西门吹雪独门绝学，由落梅悟出
 * 独孤九剑 独孤求败创下的剑法，共九式
 * 挽留剑 王小石独门绝学
 * 六脉神剑 大理段氏绝技
 * 天外飞仙 叶孤城独门绝学
 * 天下有雪 西门吹雪独门绝学，由落雪悟出
 * 无剑之剑 手中无剑心中有剑，剑道最高境界
 * 罗汉棍法 少林入门棍法
 * 疯魔杖法 使用起来状若疯癫，因此得名
 * 老实棍法 老实和尚独门绝学
 * 打狗棒法 丐帮绝技，专打恶狗
 * 达摩杖法 相传是达摩先师创下的绝技
 * 弹指神通 黄药师独门绝学
 * 太极拳 武当独门绝学，传由张三丰所创
 * 拈花指 达摩先师拈花微笑而创
 * 黯然销魂掌 杨过黯然销魂时悟出的掌法
 * 凤舞九天 陆小凤独门绝学
 * 降龙十八掌 丐帮绝技，降龙伏虎
 * 情人箭 威力很大的袖箭
 * 孔雀翎 孔雀山庄绝技，传由孔雀羽毛制成
 * 小李飞刀 小李飞刀，例不虚发
 * 灵犀一指 三回合内对手攻击伤害为零
 * 忘情天书 五回合内对手特殊攻击牌失效
 * 九阳真经 五回合内对手攻击伤害减半
 * 九阴真经 五回合内自己攻击伤害加五成
 * 易筋经 五回合内以三张普通牌最大的牌计算为三张相同的套牌
 * 左右互搏 三回合内自己攻击伤害加倍
 * 还施彼身 五回合内对方攻击自己会受到同样的伤害
 * 北冥神功 五回合内对方少发一张牌
 */
export const defaultMjs: MjItem[] = [
  {
    id: 1,
    name: '太极剑法',
    avatar: '1',
    desc: '武当镇山剑法',
    value: 10,
    count: 0,
    types: ['sword'],
  },
  { id: 2, name: '千树寒梅', avatar: '2', desc: '西门吹雪独门绝学，由落梅悟出', value: 20, count: 0, types: ['sword'] },
  { id: 3, name: '独孤九剑', avatar: '3', desc: '独孤求败创下的剑法，共九式', value: 30, count: 0, types: ['sword'] },
  { id: 4, name: '挽留剑', avatar: '4', desc: '王小石独门绝学', value: 30, count: 0, types: ['sword'] },
  { id: 5, name: '六脉神剑', avatar: '5', desc: '大理段氏绝技', value: 30, count: 0, types: ['glove', 'hidden'] },
  { id: 6, name: '天外飞仙', avatar: '6', desc: '叶孤城独门绝学', value: 40, count: 0, types: ['sword'] },
  { id: 7, name: '天下有雪', avatar: '7', desc: '西门吹雪独门绝学，由落雪悟出', value: 50, count: 0, types: ['sword'] },
  {
    id: 8,
    name: '无剑之剑',
    avatar: '8',
    desc: '手中无剑心中有剑，剑道最高境界',
    value: 50,
    count: 0,
    types: ['sword', 'glove'],
  },
  { id: 9, name: '罗汉棍法', avatar: '9', desc: '少林入门棍法', value: 10, count: 0, types: ['rod'] },
  { id: 10, name: '疯魔杖法', avatar: '10', desc: '使用起来状若疯癫，因此得名', value: 20, count: 0, types: ['rod'] },
  { id: 11, name: '老实棍法', avatar: '11', desc: '老实和尚独门绝学', value: 30, count: 0, types: ['rod'] },
  { id: 12, name: '打狗棒法', avatar: '12', desc: '丐帮绝技，专打恶狗', value: 40, count: 0, types: ['rod'] },
  { id: 13, name: '达摩杖法', avatar: '13', desc: '相传是达摩先师创下的绝技', value: 50, count: 0, types: ['rod'] },
  { id: 14, name: '弹指神通', avatar: '14', desc: '黄药师独门绝学', value: 10, count: 0, types: ['glove', 'hidden'] },
  { id: 15, name: '太极拳', avatar: '15', desc: '武当独门绝学，传由张三丰所创', value: 20, count: 0, types: ['glove'] },
  { id: 16, name: '拈花指', avatar: '16', desc: '达摩先师拈花微笑而创', value: 20, count: 0, types: ['glove'] },
  { id: 17, name: '黯然销魂掌', avatar: '17', desc: '杨过黯然销魂时悟出的掌法', value: 30, count: 0, types: ['glove'] },
  { id: 18, name: '凤舞九天', avatar: '18', desc: '陆小凤独门绝学', value: 40, count: 0, types: ['glove'] },
  { id: 19, name: '降龙十八掌', avatar: '19', desc: '丐帮绝技，降龙伏虎', value: 40, count: 0, types: ['glove'] },
  { id: 20, name: '情人箭', avatar: '20', desc: '威力很大的袖箭', value: 20, count: 0, types: ['hidden'] },
  {
    id: 21,
    name: '孔雀翎',
    avatar: '21',
    desc: '孔雀山庄绝技，传由孔雀羽毛制成',
    value: 40,
    count: 0,
    types: ['hidden'],
  },
  { id: 22, name: '小李飞刀', avatar: '22', desc: '小李飞刀，例不虚发', value: 50, count: 0, types: ['hidden'] },
  { id: 23, name: '灵犀一指', avatar: '23', desc: '三回合内对手攻击伤害为零', value: -1, count: 3, types: [] },
  { id: 24, name: '忘情天书', avatar: '24', desc: '五回合内对手特殊攻击牌失效', value: -1, count: 5, types: [] },
  { id: 25, name: '九阳真经', avatar: '25', desc: '五回合内对手攻击伤害减半', value: -1, count: 5, types: [] },
  { id: 26, name: '九阴真经', avatar: '26', desc: '五回合内自己攻击伤害加五成', value: -1, count: 5, types: [] },
  {
    id: 27,
    name: '易筋经',
    avatar: '27',
    desc: '五回合内以三张普通牌最大的牌计算为三张相同的套牌',
    value: -1,
    count: 5,
    types: [],
  },
  { id: 28, name: '左右互搏', avatar: '28', desc: '三回合内自己攻击伤害加倍', value: -1, count: 3, types: [] },
  {
    id: 29,
    name: '还施彼身',
    avatar: '29',
    desc: '五回合内对方攻击自己会受到同样的伤害',
    value: -1,
    count: 5,
    types: [],
  },
  { id: 30, name: '北冥神功', avatar: '30', desc: '五回合内对方少发一张牌', value: -1, count: 5, types: [] },
]

export interface MjItem {
  id: number
  name: string
  avatar: string
  desc: string
  value: number
  count: number
  types: ZbSubType[]
  isActive?: boolean
}
