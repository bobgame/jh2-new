import { TaskTalkIds, TaskAnswerActions, TaskEndValueEnum } from '../../task.enum'
import { TaskQa } from '../../task.interface'

export const taskQaItemsXiMenChuiXue: TaskQa[] = [
  {
    id: TaskTalkIds.XiMenChuiXue_ZJ_LuXiaoFeng_Help_3,
    qa: {
      question: '愿意一个月后再和[red]玉罗刹[/red]一战吗？',
      answers: [
        { id: 1, text: '是', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.XiMenChuiXue_ZJ_LuXiaoFeng_Help_4] },
        { id: 2, text: '否', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
]
