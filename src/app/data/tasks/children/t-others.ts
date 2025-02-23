import { RwIdEnum } from '../../../constants/enums/rw.enum'
import { JhTask } from '../task.interface'
import { noBodyTasksCommon } from '../zj-tasks/zj-common/task-nobody-common'
import { noBodyTasksGuoXiang } from '../zj-tasks/zj-guoxiang/task-nobody-guoxiang'
import { noBodyTasksLuXiaoFeng } from '../zj-tasks/zj-luxiaofeng/task-nobody-luxiaofeng'
import { noBodyTasksWuMing } from '../zj-tasks/zj-wuming/task-nobody-wuming'
import { noBodyTasksWuQing } from '../zj-tasks/zj-wuqing/task-nobody-wuqing'
import { noBodyTasksXiMenChuiXue } from '../zj-tasks/zj-ximenchuixue/task-nobody-ximenchuixue'
import { noBodyTasksYangGuo } from '../zj-tasks/zj-yangguo/task-nobody-yangguo'

export const taskOthers: JhTask = {
  rwId: RwIdEnum.NoBody,
  name: '无人',
  tasks: [
    ...noBodyTasksCommon,
    ...noBodyTasksWuMing,
    ...noBodyTasksLuXiaoFeng,
    ...noBodyTasksXiMenChuiXue,
    ...noBodyTasksYangGuo,
    ...noBodyTasksGuoXiang,
    ...noBodyTasksWuQing,
  ],
}
