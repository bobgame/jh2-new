import { TaskAnswerActions, TaskTalkIds } from './task.enum'
import { TaskQa } from './task.interface'
import { taskQaItemsCommon } from './zj-tasks/zj-common/task-qa-common'
import { taskQaItemsGuoXiang } from './zj-tasks/zj-guoxiang/task-qa-guoxiang'
import { taskQaItemsLuXiaoFeng } from './zj-tasks/zj-luxiaofeng/task-qa-luxiaofeng'
import { taskQaItemsWuMing } from './zj-tasks/zj-wuming/task-qa-wuming'
import { taskQaItemsWuQing } from './zj-tasks/zj-wuqing/task-qa-wuqing'
import { taskQaItemsXiMenChuiXue } from './zj-tasks/zj-ximenchuixue/task-qa-ximenchuixue'
import { taskQaItemsYangGuo } from './zj-tasks/zj-yangguo/task-qa-yangguo'

export const taskQaItems: TaskQa[] = [
  ...taskQaItemsCommon,
  ...taskQaItemsWuMing,
  ...taskQaItemsLuXiaoFeng,
  ...taskQaItemsXiMenChuiXue,
  ...taskQaItemsYangGuo,
  ...taskQaItemsGuoXiang,
  ...taskQaItemsWuQing,
]

/** 灯谜 */
export const dengMiQa: TaskQa = {
  id: TaskTalkIds.DengMi,
  qa: {
    question: '',
    answers: [
      {
        id: 1,
        text: ' ',
        actionType: TaskAnswerActions.ToTaskTalkId,
        actionValue: [TaskTalkIds.DianXiaoEr_DengHui_1_4],
      },
      {
        id: 2,
        text: ' ',
        actionType: TaskAnswerActions.ToTaskTalkId,
        actionValue: [TaskTalkIds.DianXiaoEr_DengHui_1_3],
      },
    ],
  },
}

export const allDms = [
  { q: '八，打一鸟名。', a: ['画眉', '孔雀', '杜鹃', '乌鸦'] },
  { q: '微雨燕双飞，打一字。', a: ['八', '入', '人'] },
  { q: '无上下之交也，打一字。', a: ['八', '入', '人'] },
  { q: '凤头虎尾，打一字。', a: ['几', '又', '七', '鸟'] },
  { q: '入门无犬吠，打一字。', a: ['问', '门', '大', '同'] },
  { q: '两点天上来，打一字。', a: ['关', '飞', '兑', '夫'] },
  { q: '不在上面，且在下面，正在两头，卡在中间，打一字。', a: ['一', '孬', '且', '歪'] },
]
