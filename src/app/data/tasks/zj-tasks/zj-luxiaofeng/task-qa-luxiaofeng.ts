import { TaskTalkIds, TaskAnswerActions, TaskEndValueEnum } from '../../task.enum'
import { TaskQa } from '../../task.interface'

export const taskQaItemsLuXiaoFeng: TaskQa[] = [
  {
    id: TaskTalkIds.LuXiaoFeng_ZJ_DC_SiKongZhaiXing_1,
    qa: {
      question: '要和[red]司空摘星[/red]一赌吗？',
      answers: [
        { id: 1, text: '是', actionType: TaskAnswerActions.ToTaskTalkId, actionValue: [TaskTalkIds.LuXiaoFeng_ZJ_DC_SiKongZhaiXing_2] },
        { id: 2, text: '否', actionType: TaskAnswerActions.EndTask, actionValue: [TaskEndValueEnum.Fail] },
      ],
    },
  },
]
