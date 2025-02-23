import { TaskTalkIds, TaskAnswerActions, TaskEndValueEnum } from '../../task.enum'
import { TaskQa } from '../../task.interface'

export const taskQaItemsWuQing: TaskQa[] = [
  {
    id: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_2,
    qa: {
      question: '先去哪里看看呢？',
      answers: [
        { id: 1, text: '酒馆', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_3] },
        { id: 2, text: '客栈', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_4] },
      ],
    },
  },
  {
    id: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_4,
    qa: {
      question: '先去哪里看看呢？',
      answers: [
        { id: 1, text: '四', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_4] },
        { id: 2, text: '三', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_5] },
        { id: 3, text: '十', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_4] },
        { id: 4, text: '一', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_4] },
      ],
    },
  },
  {
    id: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_2,
    qa: {
      question: '应该走哪边呢？',
      answers: [
        { id: 1, text: '左', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_3] },
        { id: 2, text: '右', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_2] },
      ],
    },
  },
  {
    id: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_4,
    qa: {
      question: '应该走哪边呢？',
      answers: [
        { id: 1, text: '左', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_5] },
        { id: 2, text: '右', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_4] },
      ],
    },
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_2,
    qa: {
      question: '根据读出来的结果，应该去什么地方呢？',
      answers: [
        { id: 1, text: '客栈', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_3] },
        { id: 2, text: '赌场', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_3] },
        { id: 3, text: '民家', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_3] },
        { id: 4, text: '酒馆', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_4] },
      ],
    },
  },
]
