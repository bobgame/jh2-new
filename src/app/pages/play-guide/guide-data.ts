import { RwIdEnum } from '../../constants/enums/rw.enum'
import { QaItem } from '../../constants/interfaces/base.interface'

export const guideTalkDefault: GuideTalkItem[] = [
  {
    id: 1,
    rwId: 1,
    type: 'zj',
    text: '什么人？',
  },
  {
    id: 2,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '你是新，新，新来的吧？',
  },
  {
    id: 3,
    rwId: 1,
    type: 'zj',
    text: '初入江湖，还请多指教',
  },
  {
    id: 4,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '指教一二，倒也不妨',
  },
  {
    id: 5,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '先从城内开始吧',
    actionType: 'pop-choose',
    actionValue: 1,
  },
  {
    id: 6,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '这城内大致有“酒馆”、“民家”、“客栈”、“赌场”、“武馆”、“当铺”、“郊外”',
  },
  {
    id: 7,
    rwId: 1,
    type: 'zj',
    text: '都有何用处？',
  },
  {
    id: 8,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '“酒馆”人员最杂，消息最灵；多去转转会有好处',
  },
  {
    id: 9,
    rwId: 1,
    type: 'zj',
    text: '那“民家”呢？',
  },
  {
    id: 10,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '“民家”自是此城住户的家，你可以上门拜访，不过主人可能不在',
  },
  {
    id: 11,
    rwId: 1,
    type: 'zj',
    text: '“客栈”便是休息之处了？',
  },
  {
    id: 12,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '不错，不过客栈休息比较贵，“赌场”自然是赌博之处',
  },
  {
    id: 13,
    rwId: 1,
    type: 'zj',
    text: '“武馆”便是学武之处，那“当铺”呢？',
  },
  {
    id: 14,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '“当铺”实际上兼作各种买卖，最后说那“郊外”',
  },
  {
    id: 15,
    rwId: 1,
    type: 'zj',
    text: '“郊外”不就是城郊吗？有何可说？',
  },
  {
    id: 16,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '不然。这“郊外”可“打猎”，可“采药”，可“寻宝”',
  },
  {
    id: 17,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '弄到的东西都可用来换钱',
  },
  {
    id: 18,
    rwId: 1,
    type: 'zj',
    text: '那钱有什么用处呢？',
  },
  {
    id: 19,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '这个稍后再讲',
    actionType: 'pop-choose',
    actionValue: 2,
  },
  {
    id: 20,
    rwId: 1,
    type: 'zj',
    text: '请',
  },
  {
    id: 21,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '千万不要以为你住的城市便是江湖的全部了，选择“离开”你就会看到大地图',
  },
  {
    id: 22,
    rwId: 1,
    type: 'zj',
    text: '然后呢？',
  },
  {
    id: 23,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '从大地图上你就可以去其他城市了，当然也是要花时间的',
    actionType: 'pop-choose',
    actionValue: 3,
  },
  {
    id: 24,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '除城市外，我辈江湖人，少林武当峨嵋这样的地方也不可不去，而且……',
  },
  {
    id: 25,
    rwId: 1,
    type: 'zj',
    text: '而且什么？',
  },
  {
    id: 26,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '而且据说某些人只会在名山出现，某些东西只能在名山采到',
    actionType: 'pop-choose',
    actionValue: 4,
  },
  {
    id: 27,
    rwId: 1,
    type: 'zj',
    text: '请讲',
  },
  {
    id: 28,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '俗话说，出门靠朋友，跟人搞好关系总是没错的',
  },
  {
    id: 29,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '不过江湖弱肉强食，你强了才能让别人看得起',
  },
  {
    id: 30,
    rwId: 1,
    type: 'zj',
    text: '还有什么？',
  },
  {
    id: 31,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '别以为大侠都是不食人间烟火的，每天都要花银子的',
  },
  {
    id: 32,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '你明天看看钱包里，是不是少了几两银？',
  },
  {
    id: 33,
    rwId: 1,
    type: 'zj',
    text: '没了又如何？',
  },
  {
    id: 34,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '没了就只能当街“乞讨”，指望好心人帮你了。所以挣钱也是很重要的',
  },
  {
    id: 35,
    rwId: 1,
    type: 'zj',
    text: '那如何挣钱呢？',
  },
  {
    id: 36,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '当然是卖东西了，至于这东西是你打猎来的，',
  },
  {
    id: 37,
    rwId: RwIdEnum.WuShi,
    type: 'rw',
    text: '偷来的，抢来的，或是怎么来的，就不管了',
  },
  {
    id: 38,
    rwId: 1,
    type: 'zj',
    text: '……多谢教诲',
    // actionType: 'pop-choose',
    // actionValue: 5,
  },
]

export const guideQa: QaItem[] = [
  {
    id: 1,
    question: '要听城内建筑介绍吗？',
    answers: [
      {
        id: 1,
        text: '是',
        actionType: 1,
        actionValue: 1,
        toId: 6,
      },
      {
        id: 2,
        text: '否',
        actionType: 1,
        actionValue: 2,
      },
    ],
  },
  {
    id: 2,
    question: '要听大地图介绍吗？',
    answers: [
      {
        id: 1,
        text: '是',
        actionType: 1,
        actionValue: 1,
        toId: 20,
      },
      {
        id: 2,
        text: '否',
        actionType: 1,
        actionValue: 2,
      },
    ],
  },
  {
    id: 3,
    question: '要听各名山大川的介绍吗？',
    answers: [
      {
        id: 1,
        text: '是',
        actionType: 1,
        actionValue: 1,
        toId: 24,
      },
      {
        id: 2,
        text: '否',
        actionType: 1,
        actionValue: 2,
      },
    ],
  },
  {
    id: 4,
    question: '要听其他注意事项吗？',
    answers: [
      {
        id: 1,
        text: '是',
        actionType: 1,
        actionValue: 1,
        toId: 27,
      },
      {
        id: 2,
        text: '否',
        actionType: 1,
        actionValue: 2,
      },
    ],
  },
  // {
  //   id: 5,
  //   question: '要听战斗流程吗？',
  //   answers: [
  //     {
  //       id: 1,
  //       text: '是',
  //       actionType: 1,
  //       actionValue: 1,
  //     },
  //     {
  //       id: 2,
  //       text: '否',
  //       actionType: 1,
  //       actionValue: 2,
  //     },
  //   ],
  // },
]

export interface GuideTalkItem {
  id: number
  type: 'rw' | 'zj'
  rwId: number | RwIdEnum
  text: string
  isActive?: boolean
  isShow?: boolean
  actionType?: 'go-to-id' | 'pop-choose'
  actionValue?: number
}

export const ftGuide = [
  // 战斗开始时将根据你的内功等级，发给你五到八张战斗牌。
  // 战斗牌分剑法、掌法、棍法、暗器四种类型，获得什么类型的战斗牌由你装备的武器决定。
  // 每回合选择三张牌，点击选择，点出手出牌。
  // 牌大的一方获胜，可以攻击对方一次。
  // 攻击造成的伤害由双方的武功决定。
  // 三张牌可以组合成套牌，下面介绍这些组合。
  // 当有且仅有两张牌相同时，叫作“对”，比一般的牌大。
  // 下面介绍另一套组合。三张连续的牌，叫作“连”，比“对”大。
  // 下面介绍最后一套组合。三张相同的牌，叫作“顺”，比“连”大。
  // 除了这些一般的战斗牌之外，很多人还有自己的独门绝学。
  // 这些独门绝学比一般的战斗牌大，不过一次只能出一张。
  // 据说跟某人的好感度到了一定程度，就可以学习他的秘籍哦！
  // 秘籍之间也有大小，就不详细介绍了，你在今后的江湖生涯中慢慢摸索吧。',
]
