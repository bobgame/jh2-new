import { RwIdEnum } from '../../constants/enums/rw.enum'
import { HeroTask } from '../hero'
import { taskChuLiuXiang } from './children/t-chuliuxiang'
import { taskDianXiaoEr } from './children/t-dianxiaoer'
import { taskDuanZiYu } from './children/t-duanziyu'
import { taskFangZheng } from './children/t-fangzheng'
import { taskFengSiNiang } from './children/t-fengsiniang'
import { taskGuoJing } from './children/t-guojing'
import { taskGuoXiang } from './children/t-guoxiang'
import { taskHeZuDao } from './children/t-hezudao'
import { taskHuaManLou } from './children/t-huamanlou'
import { taskHuangRong } from './children/t-huangrong'
import { taskHuangTaoShi } from './children/t-huangyaoshi'
import { taskLaoShiHeShang } from './children/t-laoshiheshang'
import { taskLengXie } from './children/t-lengxie'
import { taskLingHuChong } from './children/t-linghuchong'
import { taskLuXiaoFeng } from './children/t-luxiaofeng'
import { taskMuDaoRen } from './children/t-mudaoren'
import { taskOthers } from './children/t-others'
import { taskRenYingYing } from './children/t-renyingying'
import { taskShenDiao } from './children/t-shendiao'
import { taskSiKongZhaiXing } from './children/t-sikongzhaixing'
import { taskSuRongRong } from './children/t-surongrong'
import { taskSuYing } from './children/t-suying'
import { taskTieShou } from './children/t-tieshou'
import { taskWangXiaoShi } from './children/t-wangxiaoshi'
import { taskWuMingLaoSeng } from './children/t-wuminglaoseng'
import { taskWuQing } from './children/t-wuqing'
import { taskXiaoLaoTou } from './children/t-xiaolaotou'
import { taskXiaoShiYiLang } from './children/t-xiaoshiyilang'
import { taskXiMenChuiXue } from './children/t-ximenchuixue'
import { taskYangGuo } from './children/t-yangguo'
import { taskZhangSanFeng } from './children/t-zhangsanfeng'
import { taskZhouBoTong } from './children/t-zhoubotong'
import { taskZhuGeXianSheng } from './children/t-zhugexiansheng'
import { taskZhuiMing } from './children/t-zhuiming'
import { TaskIds, TaskTalkIds } from './task.enum'
import { JhTask } from './task.interface'

export const allTasksDefault: JhTask[] = [
  taskDianXiaoEr,
  taskDuanZiYu,
  taskTieShou,
  taskWuQing,

  taskHuangRong,
  taskZhangSanFeng,
  taskXiMenChuiXue,
  taskSiKongZhaiXing,
  taskHuangTaoShi,
  taskLuXiaoFeng,
  taskXiaoLaoTou,
  taskFangZheng,
  taskLingHuChong,
  taskZhouBoTong,
  taskLaoShiHeShang,
  taskMuDaoRen,
  taskWangXiaoShi,
  taskWuMingLaoSeng,
  taskSuRongRong,
  taskChuLiuXiang,
  taskZhuGeXianSheng,
  taskSuYing,
  taskXiaoShiYiLang,
  taskFengSiNiang,
  taskRenYingYing,
  taskHeZuDao,
  taskYangGuo,
  taskShenDiao,
  taskLengXie,
  taskZhuiMing,
  taskHuaManLou,

  taskGuoJing,
  taskGuoXiang,

  taskOthers,
]

export const tDianXiaoErDengHui = {
  stRw: RwIdEnum.DianXiaoEr,
  id: TaskIds.DianXiaoEr_DengHui_1,
  toRw: RwIdEnum.DianXiaoEr,
  talkId: TaskTalkIds.DianXiaoEr_DengHui_1_1,
  isPreAdd: true,
}

export const baseStartInputTsks: HeroTask[] = []
