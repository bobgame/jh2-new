import { TaskTalk } from './task.interface'
import { taskTalksCommon } from './zj-tasks/zj-common/task-talks-common'
import { taskTalksGuoXiang } from './zj-tasks/zj-guoxiang/task-talks-guoxiang'
import { taskTalksLuXiaoFeng } from './zj-tasks/zj-luxiaofeng/task-talks-luxiaofeng'
import { taskTalksWuMing } from './zj-tasks/zj-wuming/task-talks-wuming'
import { taskTalksWuQing } from './zj-tasks/zj-wuqing/task-talks-wuqing'
import { taskTalksXiMenChuiXue } from './zj-tasks/zj-ximenchuixue/task-talks-ximenchuixue'
import { taskTalksYangGuo } from './zj-tasks/zj-yangguo/task-talks-yangguo'

export const taskTalks: TaskTalk[] = [
  ...taskTalksCommon,
  ...taskTalksWuMing,
  ...taskTalksLuXiaoFeng,
  ...taskTalksXiMenChuiXue,
  ...taskTalksYangGuo,
  ...taskTalksGuoXiang,
  ...taskTalksWuQing,
]
