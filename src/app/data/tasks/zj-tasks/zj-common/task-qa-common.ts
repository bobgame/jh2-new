import { TaskTalkIds, TaskAnswerActions, TaskEndValueEnum } from '../../task.enum'
import { TaskQa } from '../../task.interface'

export const taskQaItemsCommon: TaskQa[] = [
  {
    id: TaskTalkIds.DianXiaoEr_ZhaoRen_1,
    qa: {
      question: '愿意赚点小钱吗？',
      answers: [
        {
          id: 1,
          text: '是',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.DianXiaoEr_ZhaoRen_2, TaskTalkIds.DianXiaoEr_ZhaoRen_5],
        },
        { id: 2, text: '否', actionType: TaskAnswerActions.Exit, actionValue: [0] },
      ],
    },
  },
  {
    id: TaskTalkIds.DuanZiYu_LiuMaiShenJian_1,
    qa: {
      question: '要借给[red]段子羽[/red]一万两吗？',
      answers: [
        {
          id: 1,
          text: '是',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.DuanZiYu_LiuMaiShenJian_2],
        },
        { id: 2, text: '否', actionType: TaskAnswerActions.Exit, actionValue: [0] },
      ],
    },
  },
  {
    id: TaskTalkIds.TieShou_WuQing_AnZi_1,
    qa: {
      question: '案犯是？',
      answers: [
        {
          id: 1,
          text: '张三',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.TieShou_WuQing_AnZi_2],
        },
        {
          id: 2,
          text: '李四',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.TieShou_WuQing_AnZi_2],
        },
        {
          id: 3,
          text: '王五',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.TieShou_WuQing_AnZi_2],
        },
        {
          id: 4,
          text: '赵六',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.TieShou_WuQing_AnZi_3],
        },
      ],
    },
  },
  {
    id: TaskTalkIds.DianXiaoEr_DengHui_1_1,
    qa: {
      question: '要猜灯谜吗',
      answers: [
        {
          id: 1,
          text: '是',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.DianXiaoEr_DengHui_1_2],
        },
        {
          id: 2,
          text: '否',
          actionType: TaskAnswerActions.EndTask,
          actionValue: [0],
        },
      ],
    },
  },
  {
    id: TaskTalkIds.ZhouBoTong_ZuoYouHuBo_1,
    qa: {
      question: '想学左右互搏吗？',
      answers: [
        {
          id: 1,
          text: '是',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.ZhouBoTong_ZuoYouHuBo_2],
        },
        { id: 2, text: '否', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
  {
    id: TaskTalkIds.PanTao_1,
    qa: {
      question: '要帮[red]店小二</span>带<span class="green">蟠桃[/red]吗？',
      answers: [
        {
          id: 1,
          text: '是',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.PanTao_2],
        },
        { id: 2, text: '否', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
  {
    id: TaskTalkIds.WangXiaoShi_WanLiuJian_1,
    qa: {
      question: '要留下来看看吗？',
      answers: [
        {
          id: 1,
          text: '是',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.WangXiaoShi_WanLiuJian_2],
        },
        { id: 2, text: '否', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
  {
    id: TaskTalkIds.DuanZiYu_RenWuKa_1,
    qa: {
      question: '愿意帮[red]段子羽[/red]拿宝物吗？',
      answers: [
        {
          id: 1,
          text: '是',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.DuanZiYu_RenWuKa_2],
        },
        { id: 2, text: '否', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
  {
    id: TaskTalkIds.DuanZiYu_BeiMingShenGong_1,
    qa: {
      question: '北冥有鱼，其名为？',
      answers: [
        {
          id: 1,
          text: '鲲',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.DuanZiYu_BeiMingShenGong_2],
        },
        { id: 2, text: '鹏', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
  // ** 五音之首是？|宫|商|角|羽
  {
    id: TaskTalkIds.RenYingYing_YiLiao_1,
    qa: {
      question: '五音之首是？',
      answers: [
        { id: 1, text: '商', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        { id: 2, text: '角', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        {
          id: 3,
          text: '宫',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.RenYingYing_YiLiao_2],
        },
        { id: 4, text: '羽', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
  // ** 十二律之首是？|黄钟|大吕|姑洗|无射
  {
    id: TaskTalkIds.RenYingYing_YiLiao_2,
    qa: {
      question: '十二律之首是？',
      answers: [
        { id: 1, text: '大吕', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        { id: 2, text: '姑洗', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        { id: 3, text: '无射', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        {
          id: 4,
          text: '黄钟',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.RenYingYing_YiLiao_3],
        },
      ],
    },
  },
  {
    id: TaskTalkIds.SuRongRong_RenWuKa_1,
    qa: {
      question: '可“他”是谁呢？',
      answers: [
        { id: 1, text: '李寻欢', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        {
          id: 2,
          text: '楚留香',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.SuRongRong_RenWuKa_2],
        },
        { id: 3, text: '胡铁花', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        { id: 4, text: '陆小凤', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
  // SuRongRong_RenWuKa_3
  // 兰花先生究竟是谁呢？|苏蓉蓉|李红袖|宋甜儿|林还玉
  {
    id: TaskTalkIds.SuRongRong_RenWuKa_3,
    qa: {
      question: '兰花先生究竟是谁呢？',
      answers: [
        { id: 1, text: '李红袖', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        { id: 2, text: '宋甜儿', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        {
          id: 3,
          text: '苏蓉蓉',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.SuRongRong_RenWuKa_5],
        },
        { id: 4, text: '林还玉', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
    // { id: 1, text: '玉杯', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.SuRongRong_RenWuKa_5] },
  },
  // QA
  // 清圣浊贤是？|酒|茶|烟
  {
    id: TaskTalkIds.MuDaoRen_RenWuKa_1,
    qa: {
      question: '清圣浊贤是？',
      answers: [
        { id: 1, text: '茶', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        { id: 2, text: '烟', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        {
          id: 3,
          text: '酒',
          actionType: TaskAnswerActions.ToTaskTalkId,
          actionValue: [TaskTalkIds.MuDaoRen_RenWuKa_2],
        },
      ],
    },
  },
  // TaskTalkIds.LingHuChong_RenWuKa_1
  // 饮汾酒当用？|玉杯|玻璃杯|夜光杯|青铜杯
  {
    id: TaskTalkIds.LingHuChong_RenWuKa_1,
    qa: {
      question: '饮汾酒当用？',
      answers: [
        { id: 1, text: '玉杯', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.LingHuChong_RenWuKa_3] },
        { id: 2, text: '玻璃杯', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.LingHuChong_RenWuKa_2] },
        { id: 3, text: '夜光杯', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.LingHuChong_RenWuKa_2] },
        { id: 4, text: '青铜杯', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.LingHuChong_RenWuKa_2] },
      ],
    },
  },
  // 大禹最大的功绩是？|造酒|治水
  {
    id: TaskTalkIds.LingHuChong_RenWuKa_3,
    qa: {
      question: '大禹最大的功绩是？',
      answers: [
        { id: 1, text: '治水', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.LingHuChong_RenWuKa_2] },
        { id: 2, text: '造酒', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.LingHuChong_RenWuKa_4] },
      ],
    },
  },
  {
    id: TaskTalkIds.LingHuChong_RenWuKa_4,
    qa: {
      question: '要和令狐冲比武吗？',
      answers: [
        { id: 1, text: '是', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.LingHuChong_RenWuKa_5] },
        { id: 2, text: '否', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.LingHuChong_RenWuKa_2] },
      ],
    },
  },
  // 答案是？|二十三|二十四|八十一|三十一
  {
    id: TaskTalkIds.DuanZiYu_ShangYe_1,
    qa: {
      question: '答案是？',
      answers: [
        { id: 1, text: '二十四', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        { id: 2, text: '八十一', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        { id: 3, text: '三十一', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
        { id: 4, text: '二十三', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.DuanZiYu_ShangYe_2] },
      ],
    },
  },
  // TaskTalkIds.WuMingLaoSeng_DaMoZhangFa_1
  // 要学习达摩杖法吗？是|否
  {
    id: TaskTalkIds.WuMingLaoSeng_DaMoZhangFa_1,
    qa: {
      question: '要学习达摩杖法吗？',
      answers: [
        { id: 1, text: '是', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuMingLaoSeng_DaMoZhangFa_2] },
        { id: 2, text: '否', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuMingLaoSeng_DaMoZhangFa_3] },
      ],
    },
  },
  {
    id: TaskTalkIds.XiaoLaoTou_RenWuKa_2,
    qa: {
      question: '要和[red]小老头[/red]比武吗？',
      answers: [
        { id: 1, text: '是', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.XiaoLaoTou_RenWuKa_3] },
        { id: 2, text: '否', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
  {
    id: TaskTalkIds.MuDaoRen_DuiYi_1,
    qa: {
      question: '要和[red]木道人[/red]下棋吗？',
      answers: [
        { id: 1, text: '是', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.MuDaoRen_DuiYi_2] },
        { id: 2, text: '否', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.MuDaoRen_DuiYi_3] },
      ],
    },
  },
  // SuYing_YiLiao_1
  // **要帮她吗？ 是 否
  {
    id: TaskTalkIds.SuYing_YiLiao_1,
    qa: {
      question: '要帮她吗？',
      answers: [
        { id: 1, text: '是', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.SuYing_YiLiao_2] },
        { id: 2, text: '否', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
  {
    id: TaskTalkIds.XiaoShiYiLang_RenWuKa_4,
    qa: {
      question: '要不要把[green]割鹿刀[/green]给[red]萧十一郎[/red]呢？',
      answers: [
        { id: 1, text: '给', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.XiaoShiYiLang_RenWuKa_6] },
        { id: 2, text: '不给', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.XiaoShiYiLang_RenWuKa_5] },
      ],
    },
  },
  {
    id: TaskTalkIds.GuoXiang_FuQin_1,
    qa: {
      question: '要帮[red]郭襄[/red]吗？',
      answers: [
        { id: 1, text: '是', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.GuoXiang_FuQin_2] },
        { id: 2, text: '否', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
  {
    id: TaskTalkIds.YangGuo_XuanTieJian_2,
    qa: {
      question: '要把[green]玄铁剑[/green]让给[red]杨过[/red]吗？',
      answers: [
        { id: 1, text: '是', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.YangGuo_XuanTieJian_3] },
        { id: 2, text: '否', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.YangGuo_XuanTieJian_4] },
      ],
    },
  },
  {
    id: TaskTalkIds.HeShang_ChengHao_ZaiShiMengChang_1,
    qa: {
      question: '要给[red]和尚[/red]三百两银子吗？',
      answers: [
        { id: 1, text: '是', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.HeShang_ChengHao_ZaiShiMengChang_2] },
        { id: 2, text: '否', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
  {
    id: TaskTalkIds.ChengHao_BaiBuChuanYang_2,
    qa: {
      question: '要给[red]令狐冲[/red]二百两么？',
      answers: [
        { id: 1, text: '是', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.ChengHao_BaiBuChuanYang_3] },
        { id: 2, text: '否', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
  {
    id: TaskTalkIds.WuShi_DuChang_1,
    qa: {
      question: '要跟[red]武师[/red]去赌场吗？',
      answers: [
        { id: 1, text: '是', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuShi_DuChang_2] },
        { id: 2, text: '否', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
]
