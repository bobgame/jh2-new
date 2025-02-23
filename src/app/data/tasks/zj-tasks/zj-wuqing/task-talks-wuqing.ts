import { CityGroupEnum } from '../../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../../constants/enums/city.enum'
import { RwIdEnum } from '../../../../constants/enums/rw.enum'
import { KeyIds } from '../../keys.interface'
import { TaskEndValueEnum, TaskIds, TaskTalkActions, TaskTalkIds } from '../../task.enum'
import { TaskTalk } from '../../task.interface'

export const taskTalksWuQing: TaskTalk[] = [
  {
    id: TaskTalkIds.WuQing_ZJ_Start_1,
    talks: [
      {
        id: 1,
        rwId: RwIdEnum.ZhuGeXianSheng,
        type: 'rw',
        text: '再来一局',
        actionType: TaskTalkActions.DuiYi,
        actionValue: TaskTalkIds.WuQing_ZJ_Start_2,
        actionFailValue: TaskTalkIds.WuQing_ZJ_Start_2,
        setKey: [{ keyId: KeyIds.WuQing_ZJ_Main, value: 1 }],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_Start_2,
    talks: [
      { id: 1, rwId: RwIdEnum.ZhuGeXianSheng, type: 'rw', text: '[red]无情[/red]，你的心不静' },
      { id: 2, rwId: 0, type: 'zj', text: '世叔教训的是' },
      { id: 3, rwId: RwIdEnum.ZhuGeXianSheng, type: 'rw', text: '心中有事？' },
      {
        id: 4,
        rwId: 0,
        type: 'zj',
        text: '世叔小心！',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.HeiYiRen,
        actionValue: TaskTalkIds.WuQing_ZJ_Start_3,
        actionFailValue: TaskTalkIds.WuQing_ZJ_Start_3,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_Start_3,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '呼……最近颇多刺客啊' },
      { id: 2, rwId: RwIdEnum.ZhuGeXianSheng, type: 'rw', text: '可惜搅乱了这一局残棋' },
      { id: 3, rwId: RwIdEnum.ZhuGeXianSheng, type: 'rw', text: '[red]无情[/red]，你可是想外出探案？' },
      { id: 4, rwId: 0, type: 'zj', text: '不错。洛阳一案扑朔迷离，我想亲自去看一看，只是……' },
      { id: 5, rwId: RwIdEnum.ZhuGeXianSheng, type: 'rw', text: '只是他们三个都不在你不放心我？' },
      { id: 6, rwId: 0, type: 'zj', text: '世叔明见' },
      { id: 7, rwId: RwIdEnum.ZhuGeXianSheng, type: 'rw', text: '你放心去吧' },
      { id: 8, rwId: 0, type: 'zj', text: '多谢世叔！' },
      { id: 9, rwId: RwIdEnum.ZhuGeXianSheng, type: 'rw', text: '盘缠带好，路上用得着' },
      { id: 10, rwId: RwIdEnum.ZhuGeXianSheng, type: 'rw', text: '另外，这“[green]仙鹤神针[/green]”你装备着，或有用途' },
      {
        id: 11,
        rwId: 0,
        type: 'zj',
        text: '我三日后出发，世叔保重',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.WuQing_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_1,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '一切收拾停当，是该动身了',
        actionType: TaskTalkActions.Move,
        moveToCity: CityIdEnum.LuoYang,
        moveToCityGroup: CityGroupEnum.Normal,
        actionValue: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_2,
        setKey: [{ keyId: KeyIds.WuQing_ZJ_Main, value: 8 }],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '（先梳理下这个案子，照说，案情并不复杂）', setCityGroup: CityGroupEnum.Normal },
      { id: 2, rwId: 0, type: 'zj', text: '（凶嫌已经在押，种种迹象表明，他应当就是凶手）' },
      { id: 3, rwId: 0, type: 'zj', text: '（可既找不到赃物，又找不到凶器，这可麻烦）' },
      {
        id: 4,
        rwId: 0,
        type: 'zj',
        text: '先去哪里看看呢？',
        actionType: TaskTalkActions.Qa,
        actionValue: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_2,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_3,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '小二哥', setCityGroup: CityGroupEnum.JiuGuan },
      { id: 2, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '客官何事？' },
      { id: 3, rwId: 0, type: 'zj', text: '上次那谁是不是在你们这里寄存了一样东西啊？' },
      { id: 4, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '啊？他只留下一句话，说是什么“一点一点分一点”' },
      { id: 5, rwId: 0, type: 'zj', text: '一点一点分一点？小二，你们这里有没有窖藏的汾酒？' },
      {
        id: 6,
        rwId: RwIdEnum.DianXiaoEr,
        type: 'rw',
        text: '有啊，我带你看看去？',
        actionType: TaskTalkActions.MiGong,
        actionValue: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_7,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_7,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '是了！就是这东西了！有了这凶器，大概这个案子就差不多了' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '忽然白光一闪！',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.HeiYiRen,
        actionValue: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_6,
        actionFailValue: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_6,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_4,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '这客栈透着古怪！', setCityGroup: CityGroupEnum.KeZhan },
      { id: 2, rwId: 0, type: 'zj', text: '这门推不开？还有机关？好似是要填入一个数字？' },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '五五数之余三，七七数之余三，九九数之余三？',
        actionType: TaskTalkActions.Qa,
        actionValue: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_4,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_5,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '诶？好像是赃物？看来这个案子差不多了' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '忽然白光一闪！',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.HeiYiRen,
        actionValue: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_6,
        actionFailValue: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_6,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_6,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '阴魂不散……小石头，你怎么来了？' },
      {
        id: 2,
        rwId: RwIdEnum.WangXiaoShi,
        type: 'rw',
        text: '师叔让我带话，说此间事了，你可赶往长安一行，相助[red]铁手[/red]；或襄阳相助[red]追命[/red]',
      },
      { id: 3, rwId: 0, type: 'zj', text: '谢谢你，小石头', actionType: TaskTalkActions.EndTask, actionValue: TaskEndValueEnum.Success },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '是时候去襄阳相助[red]追命[/red]了' },
      { id: 2, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '大师兄，你来了', setCityGroup: CityGroupEnum.JiuGuan },
      { id: 3, rwId: 0, type: 'zj', text: '可有一些头绪没有？' },
      {
        id: 4,
        rwId: RwIdEnum.ZhuiMing,
        type: 'rw',
        text: '头绪倒是有一些，大师兄且随我来',
        actionType: TaskTalkActions.MiGong,
        actionValue: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_2,
        setKey: [{ keyId: KeyIds.WuQing_ZJ_XiangYang_ZhuiMing, value: 8 }],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '此地路线为何如此复杂？', setCityGroup: CityGroupEnum.JiaoWai },
      { id: 2, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '这里有个三岔路口' },
      { id: 3, rwId: 0, type: 'zj', text: '有个字？“主”？' },
      {
        id: 4,
        rwId: RwIdEnum.ZhuiMing,
        type: 'rw',
        text: '这字看来是个提示？',
        actionType: TaskTalkActions.Qa,
        actionValue: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_2,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_3,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '应该走左边' },
      { id: 2, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '怎么说？' },
      { id: 3, rwId: 0, type: 'zj', text: '主者，“往”字去掉左边是也，“往左去”，所以要走左边' },
      {
        id: 4,
        rwId: RwIdEnum.ZhuiMing,
        type: 'rw',
        text: '不错！',
        actionType: TaskTalkActions.Talk,
        actionValue: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_4,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_4,
    talks: [
      { id: 1, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '怎么又有个岔路口？' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '这次提示是，“句”',
        actionType: TaskTalkActions.Qa,
        actionValue: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_4,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_5,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '还是左边' },
      { id: 2, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '这次是“向左去”？' },
      { id: 3, rwId: 0, type: 'zj', text: '不错！' },
      { id: 4, rwId: 0, type: 'zj', text: '总算到了……这个山洞应该就是线索所在了吧？' },
      {
        id: 5,
        rwId: RwIdEnum.ZhuiMing,
        type: 'rw',
        text: '小心',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.HeiYiRen,
        actionValue: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_6,
        actionFailValue: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_6,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_XiangYang_ZhuiMing_6,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '这家伙，居然服毒死了……' },
      { id: 2, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '没关系，我刚才搜过这个山洞，破案应当不成问题' },
      { id: 3, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '多谢大师兄相助' },
      { id: 4, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '据说[red]冷血[/red]在苏州遇到一些麻烦，我先走一步，你随后也去吧' },
      { id: 5, rwId: 0, type: 'zj', text: '好', actionType: TaskTalkActions.EndTask, actionValue: TaskEndValueEnum.Success },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '是时候去长安相助[red]铁手[/red]了' },
      { id: 2, rwId: RwIdEnum.TieShou, type: 'rw', text: '大师兄，你来了' },
      { id: 3, rwId: 0, type: 'zj', text: '怎么样？' },
      { id: 4, rwId: RwIdEnum.TieShou, type: 'rw', text: '案子基本破了，只是凶嫌人数较多，我一个人对付，殊无把握' },
      { id: 5, rwId: 0, type: 'zj', text: '凶嫌现在何处？' },
      { id: 6, rwId: RwIdEnum.TieShou, type: 'rw', text: '就在这长安郊外，如今大师兄来了，我们可一同拿他们归案' },
      { id: 7, rwId: 0, type: 'zj', text: '甚妙' },
      { id: 8, rwId: RwIdEnum.HeiYiRen, type: 'rw', text: '[red]铁手[/red]，你居然敢来送死？', setCityGroup: CityGroupEnum.JiaoWai },
      { id: 9, rwId: RwIdEnum.TieShou, type: 'rw', text: '大师兄助我一臂之力！' },
      {
        id: 10,
        rwId: 0,
        type: 'zj',
        text: '好！',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.HeiYiRen,
        actionValue: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_3,
        actionFailValue: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_2,
        setKey: [{ keyId: KeyIds.WuQing_ZJ_ChangAn_TieShou, value: 8 }],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_2,
    talks: [
      { id: 1, rwId: RwIdEnum.TieShou, type: 'rw', text: '大师兄小心！' },
      { id: 2, rwId: 0, type: 'zj', text: '[red]铁手[/red]拦住了敌人', hideHeroAvatar: true },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '多谢！',
        upTl: 40,
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.HeiYiRen,
        actionValue: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_3,
        actionFailValue: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_2,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_3,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '还有……',
        upTl: 40,
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.HeiYiRen,
        actionValue: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_5,
        actionFailValue: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_4,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_4,
    talks: [
      { id: 1, rwId: RwIdEnum.TieShou, type: 'rw', text: '大师兄小心！' },
      { id: 2, rwId: 0, type: 'zj', text: '[red]铁手[/red]拦住了敌人', hideHeroAvatar: true },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '多谢！',
        upTl: 40,
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.HeiYiRen,
        actionValue: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_5,
        actionFailValue: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_4,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_5,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '……',
        upTl: 40,
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.LanYiRen,
        actionValue: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_7,
        actionFailValue: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_6,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_6,
    talks: [
      { id: 1, rwId: RwIdEnum.TieShou, type: 'rw', text: '小心！' },
      { id: 2, rwId: 0, type: 'zj', text: '[red]铁手[/red]和[red]无情[/red]一起打败了敌人', hideHeroAvatar: true },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '多谢！',
        actionType: TaskTalkActions.Talk,
        actionValue: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_7,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_ChangAn_TieShou_7,
    talks: [
      { id: 1, rwId: RwIdEnum.TieShou, type: 'rw', text: '总算肃清这里了……多谢大师兄了' },
      { id: 2, rwId: RwIdEnum.TieShou, type: 'rw', text: '对了，据说[red]冷血[/red]在苏州遇到一些麻烦，我先走一步，大师兄随后也去吧' },
      { id: 3, rwId: 0, type: 'zj', text: '好！', actionType: TaskTalkActions.EndTask, actionValue: TaskEndValueEnum.Success },
    ],
  },

  {
    id: TaskTalkIds.WuQing_ZJ_SuZhou_LengXie_1,
    talks: [
      { id: 1, rwId: RwIdEnum.TieShou, type: 'rw', text: '大师兄，你终于到了' },
      { id: 2, rwId: 0, type: 'zj', text: '嗯，怎样了？' },
      { id: 3, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '[red]冷血[/red]这次怕是遇上麻烦了' },
      { id: 4, rwId: 0, type: 'zj', text: '什么麻烦？' },
      { id: 5, rwId: RwIdEnum.TieShou, type: 'rw', text: '被指证谋财害命，人证物证一应俱全' },
      { id: 6, rwId: 0, type: 'zj', text: '你们相信[red]冷血[/red]会作出这样事来？' },
      { id: 7, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '不相信，但一时找不到反驳的理由' },
      { id: 8, rwId: 0, type: 'zj', text: '我们一起再去看看' },
      {
        id: 9,
        rwId: RwIdEnum.ZhuiMing,
        type: 'rw',
        text: '这里便是现场了，过了这许多时日，应该也查不出什么了吧',
        setCityGroup: CityGroupEnum.MinJia,
      },
      {
        id: 10,
        rwId: 0,
        type: 'zj',
        text: '待我再仔细看看',
        actionType: TaskTalkActions.XunBao,
        actionValue: TaskTalkIds.WuQing_ZJ_SuZhou_LengXie_2,
        actionFailValue: TaskTalkIds.WuQing_ZJ_SuZhou_LengXie_2,
        setKey: [{ keyId: KeyIds.WuQing_ZJ_Main, value: 12 }],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_SuZhou_LengXie_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '这个血迹，是[red]冷血[/red]的指纹？' },
      { id: 2, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '看起来是，事实对四师弟很不利啊' },
      { id: 3, rwId: RwIdEnum.TieShou, type: 'rw', text: '未必，这个血迹，说不定是对他有利的证据' },
      { id: 4, rwId: 0, type: 'zj', text: '为何？' },
      { id: 5, rwId: RwIdEnum.TieShou, type: 'rw', text: '因为，我昨天检查时，这个地方，并没有血迹' },
      { id: 6, rwId: 0, type: 'zj', text: '嗯……' },
      { id: 7, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '大师兄你在做什么？' },
      { id: 8, rwId: 0, type: 'zj', text: '我在听这地底的声音' },
      { id: 9, rwId: RwIdEnum.TieShou, type: 'rw', text: '地底有声音？我知道了，来，大师兄，三师弟，跟我一起喊' },
      { id: 10, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '喊什么？' },
      { id: 11, rwId: RwIdEnum.TieShou, type: 'rw', text: '失~火~了~' },
      { id: 12, rwId: 0, type: 'zj', text: '好办法！' },
      { id: 13, rwId: 0, type: 'zj', text: '忽然一道暗门打开了！', hideHeroAvatar: true },
      {
        id: 14,
        rwId: 0,
        type: 'zj',
        text: '小心！',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.BaiYiRen,
        actionValue: TaskTalkIds.WuQing_ZJ_SuZhou_LengXie_3,
        actionFailValue: TaskTalkIds.WuQing_ZJ_SuZhou_LengXie_3,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_SuZhou_LengXie_3,
    talks: [
      {
        id: 1,
        rwId: RwIdEnum.LengXie,
        type: 'rw',
        text: '哎呀，厉害！',
        actionType: TaskTalkActions.Talk,
        actionValue: TaskTalkIds.WuQing_ZJ_SuZhou_LengXie_4,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_SuZhou_LengXie_4,
    talks: [
      { id: 1, rwId: RwIdEnum.BaiYiRen, type: 'rw', text: '居然被你们识破了……那也无话可说' },
      { id: 2, rwId: RwIdEnum.TieShou, type: 'rw', text: '[red]冷血[/red]，你来了' },
      {
        id: 3,
        rwId: RwIdEnum.LengXie,
        type: 'rw',
        text: '多谢三位师兄',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_LengXie_1,
    talks: [
      { id: 1, rwId: RwIdEnum.LengXie, type: 'rw', text: '大师兄' },
      { id: 2, rwId: 0, type: 'zj', text: '怎么了？' },
      { id: 3, rwId: RwIdEnum.LengXie, type: 'rw', text: '前两天那案子你也听说了吧？' },
      { id: 4, rwId: 0, type: 'zj', text: '所知不详，怎么了？' },
      { id: 5, rwId: RwIdEnum.LengXie, type: 'rw', text: '前一阵子有人在家中被刺死' },
      { id: 6, rwId: RwIdEnum.LengXie, type: 'rw', text: '奇怪的是，除了地上有一滩水之外，找不到凶器' },
      { id: 7, rwId: 0, type: 'zj', text: '是冬天的事？' },
      { id: 8, rwId: RwIdEnum.LengXie, type: 'rw', text: '不错，师兄如何知道？' },
      { id: 9, rwId: 0, type: 'zj', text: '那武器，想来是冰刀了，那滩水，就是凶器化了之后留下的' },
      { id: 10, rwId: RwIdEnum.LengXie, type: 'rw', text: '有理！' },
      { id: 11, rwId: 0, type: 'zj', text: '凶嫌可抓到了？' },
      { id: 12, rwId: RwIdEnum.LengXie, type: 'rw', text: '凶嫌倒有一个，不过他有不在场证据' },
      { id: 13, rwId: 0, type: 'zj', text: '什么证据？' },
      { id: 14, rwId: RwIdEnum.LengXie, type: 'rw', text: '他事发前一天晚上还在三百里外的旅店歇脚，有很多人为证' },
      { id: 15, rwId: 0, type: 'zj', text: '日行三百，也未足奇' },
      { id: 16, rwId: RwIdEnum.LengXie, type: 'rw', text: '第二天他卧病在床，一天未出门，晚饭时方起，吃过晚饭才走，亦有人证' },
      { id: 17, rwId: 0, type: 'zj', text: '那如何证明他呆在房内？' },
      { id: 18, rwId: RwIdEnum.LengXie, type: 'rw', text: '早饭午饭，皆有人送去，吃完后又拿出来，自可为证' },
      { id: 19, rwId: 0, type: 'zj', text: '这倒奇了……除此之外有何异常？' },
      { id: 20, rwId: RwIdEnum.LengXie, type: 'rw', text: '许是生病，吃的比前一天少，也是人之常情，不过……' },
      { id: 21, rwId: 0, type: 'zj', text: '不过什么？' },
      { id: 22, rwId: RwIdEnum.LengXie, type: 'rw', text: '不过他第一天吃的也太多了些，足足抵上平常人两倍有余' },
      { id: 23, rwId: 0, type: 'zj', text: '哦？那你有没有想过，这是偷梁换柱之策或者第一天根本就住着两个人？' },
      { id: 24, rwId: RwIdEnum.LengXie, type: 'rw', text: '这个自然想过，不过那小客栈，想藏个人应该也不太容易' },
      { id: 25, rwId: 0, type: 'zj', text: '前一天下过雪？有没有注意到雪人什么的？' },
      {
        id: 26,
        rwId: RwIdEnum.LengXie,
        type: 'rw',
        text: '师兄明见！我再去问问，多谢了',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_LengXie_RenWuKa_1,
    talks: [
      { id: 1, rwId: RwIdEnum.LengXie, type: 'rw', text: '想向大师兄讨教一二' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '请',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.LengXie,
        actionValue: TaskTalkIds.WuQing_ZJ_LengXie_RenWuKa_2,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_LengXie_RenWuKa_2,
    talks: [
      {
        id: 1,
        rwId: RwIdEnum.LengXie,
        taskId: TaskIds.WuQing_ZJ_LengXie_RenWuKa,
        type: 'rw',
        text: '大师兄高明！',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_1,
    talks: [
      { id: 1, rwId: RwIdEnum.TieShou, type: 'rw', text: '大师兄来得正好' },
      { id: 2, rwId: 0, type: 'zj', text: '又有新案子了？' },
      { id: 3, rwId: RwIdEnum.TieShou, type: 'rw', text: '这件案子大不寻常' },
      { id: 4, rwId: 0, type: 'zj', text: '如何不寻常？' },
      {
        id: 5,
        rwId: RwIdEnum.TieShou,
        type: 'rw',
        text: '你且随我来',
        actionType: TaskTalkActions.MiGong,
        actionValue: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_2,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '这是什么地方？', setCityGroup: CityGroupEnum.MinJia },
      { id: 2, rwId: RwIdEnum.TieShou, type: 'rw', text: '据说线索就藏在这里面，可我们连进都进不去' },
      { id: 3, rwId: 0, type: 'zj', text: '为什么？这琴是？' },
      { id: 4, rwId: RwIdEnum.TieShou, type: 'rw', text: '似乎是打开这密室的钥匙' },
      {
        id: 5,
        rwId: 0,
        type: 'zj',
        text: '我试试',
        actionType: TaskTalkActions.FuQin,
        actionValue: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_3,
        actionFailValue: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_4,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_3,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '成了！' },
      { id: 2, rwId: RwIdEnum.TieShou, type: 'rw', text: '这盘残局难道也是机关？' },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '我来看看',
        actionType: TaskTalkActions.DuiYi,
        actionValue: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_5,
        actionFailValue: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_4,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_4,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '好似不行……只好改日再试了',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Fail,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_5,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '就是这里？' },
      { id: 2, rwId: RwIdEnum.TieShou, type: 'rw', text: '线索在哪里呢？' },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '墙上这幅画，怎么不对劲？',
        actionType: TaskTalkActions.Hua,
        actionValue: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_6,
        actionFailValue: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_4,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_TieShou_6,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '拼好了！' },
      { id: 2, rwId: RwIdEnum.TieShou, type: 'rw', text: '没错！这便是案发现场的图形！' },
      {
        id: 3,
        rwId: RwIdEnum.TieShou,
        type: 'rw',
        text: '多谢大师兄相助',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_TieShou_RenWuKa_1,
    talks: [
      { id: 1, rwId: RwIdEnum.TieShou, type: 'rw', text: '想向大师兄讨教一二棋艺' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '请',
        actionType: TaskTalkActions.DuiYi,
        actionValue: TaskTalkIds.WuQing_ZJ_TieShou_RenWuKa_2,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_TieShou_RenWuKa_2,
    talks: [
      {
        id: 1,
        rwId: RwIdEnum.TieShou,
        taskId: TaskIds.WuQing_ZJ_TieShou_RenWuKa,
        type: 'rw',
        text: '大师兄果然高明！',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_1,
    talks: [
      { id: 1, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '大师兄，如此好天气，何不去郊外打猎？' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '甚妙！',
        setCityGroup: CityGroupEnum.JiaoWai,
        actionType: TaskTalkActions.DaLie,
        actionValue: TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_2,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '诶？这鸽子身上有东西！', setCityGroup: CityGroupEnum.JiaoWai },
      { id: 2, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '是血书！怎么看不懂……' },
      { id: 3, rwId: 0, type: 'zj', text: '想是秘密切口了，待我看看' },
      { id: 4, rwId: 0, type: 'zj', text: '今秋花夜不比子春花时落留酒与诗馆人仔外细吟' },
      { id: 5, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '什么呀……' },
      { id: 6, rwId: 0, type: 'zj', text: '我知道了！你试着隔两字一读？' },
      {
        id: 7,
        rwId: 0,
        type: 'zj',
        text: '今秋花夜不比子春花时落留酒与诗馆人仔外细吟',
        actionType: TaskTalkActions.Qa,
        actionValue: TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_2,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_3,
    talks: [
      {
        id: 1,
        rwId: 0,
        taskId: TaskIds.WuQing_ZJ_ZhuiMing_RenWuKa,
        type: 'zj',
        text: '好像不对，我们改天再来……',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Fail,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_4,
    talks: [
      { id: 1, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '今夜子时酒馆外？' },
      { id: 2, rwId: 0, type: 'zj', text: '不错，其实另一句也是暗号' },
      { id: 3, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '秋花不比春花落，留与诗人仔细吟' },
      { id: 4, rwId: 0, type: 'zj', text: '嗯，这是一个组织，叫“落菊”，今晚可能有恶战' },
      { id: 5, rwId: 0, type: 'zj', text: '来了！', setCityGroup: CityGroupEnum.JiuGuan },
      {
        id: 6,
        rwId: RwIdEnum.BaiYiRen,
        type: 'rw',
        text: '怎么又是你？',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.BaiYiRen,
        actionValue: TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_5,
        actionFailValue: TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_6,
        setKey: [{ keyId: KeyIds.WuQing_ZJ_JingCheng_ZhuiMing, value: 13 }],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_5,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '终于抓到你了', actionType: TaskTalkActions.EndTask, actionValue: TaskEndValueEnum.Success },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JingCheng_ZhuiMing_6,
    talks: [{ id: 1, rwId: 0, type: 'zj', text: '让他给跑了！', actionType: TaskTalkActions.EndTask, actionValue: TaskEndValueEnum.Fail }],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_ZhuiMing_RenWuKa_1,
    talks: [
      { id: 1, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '据说大师兄赌技也相当了得？' },
      { id: 2, rwId: 0, type: 'zj', text: '哪里' },
      {
        id: 3,
        rwId: RwIdEnum.ZhuiMing,
        type: 'rw',
        text: '何妨一试？',
        actionType: TaskTalkActions.DuBo,
        dbType: 'tz',
        actionValue: TaskTalkIds.WuQing_ZJ_ZhuiMing_RenWuKa_2,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_ZhuiMing_RenWuKa_2,
    talks: [
      {
        id: 1,
        rwId: RwIdEnum.ZhuiMing,
        type: 'rw',
        text: '大师兄果然高明！',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [
          { keyId: KeyIds.WuQing_ZJ_Day_Check_LengXie },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_ZhuiMing },
          { keyId: KeyIds.WuQing_ZJ_Day_Check_TieShou },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JieJu_1,
    talks: [
      { id: 1, rwId: RwIdEnum.LengXie, type: 'rw', text: '大师兄，出大事了！' },
      { id: 2, rwId: 0, type: 'zj', text: '何事如此激动？' },
      { id: 3, rwId: RwIdEnum.LengXie, type: 'rw', text: '那权相，昨夜被人刺杀了！' },
      { id: 4, rwId: 0, type: 'zj', text: '哦？其实那种人早该死了，不是？' },
      { id: 5, rwId: RwIdEnum.TieShou, type: 'rw', text: '大师兄，话虽这么说，但查案缉凶，也是我们份内事啊' },
      { id: 6, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '二师兄言之有理，我们还是去现场看看吧' },
      {
        id: 7,
        rwId: 0,
        type: 'zj',
        text: '先四处看看吧',
        actionType: TaskTalkActions.XunBao,
        actionValue: TaskTalkIds.WuQing_ZJ_JieJu_2,
        actionFailValue: TaskTalkIds.WuQing_ZJ_JieJu_2,
        setKey: [{ keyId: KeyIds.WuQing_ZJ_Main, value: 16 }],
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JieJu_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '小石头？' },
      { id: 2, rwId: RwIdEnum.TieShou, type: 'rw', text: '看来这石头便是凶器了，这凶手一定是暗器高手' },
      { id: 3, rwId: RwIdEnum.LengXie, type: 'rw', text: '大师兄，你看！' },
      { id: 4, rwId: 0, type: 'zj', text: '血字？' },
      { id: 5, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '好像是个“二”字……但明显没写完' },
      { id: 6, rwId: RwIdEnum.LengXie, type: 'rw', text: '我知道了！一定是小石头干的！王小石的王，可不是要先写“二”字么？' },
      { id: 7, rwId: RwIdEnum.TieShou, type: 'rw', text: '这石头似也符合，大师兄，你怎么看？' },
      { id: 8, rwId: 0, type: 'zj', text: '……' },
      {
        id: 9,
        rwId: RwIdEnum.ZhuiMing,
        type: 'rw',
        text: '大师兄今日似乎精神不佳啊，走，我们去找小石头问个明白',
        actionType: TaskTalkActions.Talk,
        actionValue: TaskTalkIds.WuQing_ZJ_JieJu_3,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JieJu_3,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '小石头？' },
      { id: 2, rwId: RwIdEnum.WangXiaoShi, type: 'rw', text: '四位齐来，不知有何贵干？' },
      { id: 3, rwId: 0, type: 'zj', text: '没事，打个招呼' },
      { id: 4, rwId: RwIdEnum.WangXiaoShi, type: 'rw', text: '那我先走一步了' },
      { id: 5, rwId: 0, type: 'zj', text: '请' },
      { id: 6, rwId: RwIdEnum.LengXie, type: 'rw', text: '大师兄你葫芦里卖的什么药？怎么把他放走了？' },
      { id: 7, rwId: 0, type: 'zj', text: '因为我知道不是他干的' },
      { id: 8, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '不是他是谁？' },
      { id: 9, rwId: 0, type: 'zj', text: '我' },
      { id: 10, rwId: RwIdEnum.TieShou, type: 'rw', text: '你？' },
      { id: 11, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '这……' },
      { id: 12, rwId: RwIdEnum.LengXie, type: 'rw', text: '不可能！' },
      { id: 13, rwId: 0, type: 'zj', text: '大家冷静一下想一想，石子人人可用，只要暗器手法高强，是不是？' },
      { id: 14, rwId: RwIdEnum.TieShou, type: 'rw', text: '不错' },
      { id: 15, rwId: 0, type: 'zj', text: '而那“二”字，又为何不能是“无”字起笔？' },
      { id: 16, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '可是大师兄你姓成啊' },
      { id: 17, rwId: 0, type: 'zj', text: '不错，可成崖余这个名字，除你们外，有谁知道？[red]无情[/red]就不同了' },
      { id: 18, rwId: RwIdEnum.LengXie, type: 'rw', text: '那……大师兄你为何要这样做？' },
      { id: 19, rwId: 0, type: 'zj', text: '于私，是为了复仇，于公，则是为了社稷' },
      { id: 20, rwId: RwIdEnum.TieShou, type: 'rw', text: '二十多年前的灭门血案，大师兄你查清楚了？' },
      { id: 21, rwId: 0, type: 'zj', text: '不错。不过这并不能成为下手的理由' },
      { id: 22, rwId: 0, type: 'zj', text: '昨夜实在是机缘巧合，听到这奸相正密谋一桩大事' },
      { id: 23, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '里通外国？' },
      { id: 24, rwId: 0, type: 'zj', text: '还不止于此，首先是篡权夺位，其次是割地卖国' },
      { id: 25, rwId: 0, type: 'zj', text: '家仇可以不报，国难却不可不赴，三位师弟，就请拿我去见官吧' },
      { id: 26, rwId: RwIdEnum.TieShou, type: 'rw', text: '大师兄你以为我们是何等样人？拿你见官？想也莫想' },
      { id: 27, rwId: RwIdEnum.ZhuiMing, type: 'rw', text: '大师兄，珍重' },
      { id: 28, rwId: RwIdEnum.LengXie, type: 'rw', text: '保重！' },
      { id: 29, rwId: 0, type: 'zj', text: '……谢谢' },
      { id: 30, rwId: RwIdEnum.ZhuGeXianSheng, type: 'rw', text: '且慢' },
      { id: 31, rwId: 0, type: 'zj', text: '世叔？' },
      { id: 32, rwId: RwIdEnum.ZhuGeXianSheng, type: 'rw', text: '[red]无情[/red]，你出手吧' },
      { id: 33, rwId: 0, type: 'zj', text: '[red]无情[/red]不敢' },
      {
        id: 34,
        rwId: RwIdEnum.ZhuGeXianSheng,
        type: 'rw',
        text: '快！',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.ZhuGeXianSheng,
        actionValue: TaskTalkIds.WuQing_ZJ_JieJu_4,
        actionFailValue: TaskTalkIds.WuQing_ZJ_JieJu_4,
      },
    ],
  },
  {
    id: TaskTalkIds.WuQing_ZJ_JieJu_4,
    talks: [
      { id: 1, rwId: RwIdEnum.ZhuGeXianSheng, type: 'rw', text: '好！' },
      { id: 2, rwId: 0, type: 'zj', text: '[red]无情[/red]甘愿束手就缚' },
      { id: 3, rwId: RwIdEnum.ZhuGeXianSheng, type: 'rw', text: '我们拦你不住，是我们无能；说起来，也无可深责' },
      { id: 4, rwId: 0, type: 'zj', text: ' ……多谢世叔成全！', actionType: TaskTalkActions.EndTask, actionValue: TaskEndValueEnum.Success },
    ],
  },
]
// WuQing_ZJ_JieJu_1
// LengXie - 大师兄，出大事了！
// zj - 何事如此激动？
// LengXie - 那权相，昨夜被人刺杀了！
// zj - 哦？其实那种人早该死了，不是？
// TieShou - 大师兄，话虽这么说，但查案缉凶，也是我们份内事啊
// ZhuiMing - 二师兄言之有理，我们还是去现场看看吧
// zj - 先四处看看吧 // ** XunBao

// WuQing_ZJ_JieJu_2
// zj - 小石头？
// TieShou - 看来这石头便是凶器了，这凶手一定是暗器高手
// LengXie - 大师兄，你看！
// zj - 血字？
// ZhuiMing - 好像是个“二”字……但明显没写完
// TieShou - “二”？如果是想写凶手的名字的话……
// LengXie - 我知道了！一定是小石头干的！[red]王小石[/red]的王，可不是要先写“二”字么？
// TieShou - 这石头似也符合，大师兄，你怎么看？
// zj - ……
// ZhuiMing - 大师兄今日似乎精神不佳啊，走，我们去找小石头问个明白 // talk 2

// WuQing_ZJ_JieJu_3
// TieShou - 小石头？
// WangXiaoShi - 四位齐来，不知有何贵干？
// zj - 没事，打个招呼
// WangXiaoShi - 那我先走一步了
// zj - 请
// LengXie - 大师兄你葫芦里卖的什么药？怎么把他放走了？
// zj - 因为我知道不是他干的
// ZhuiMing - 不是他是谁？
// zj - 我
// TieShou - 你？
// ZhuiMing - 这……
// LengXie - 不可能！
// zj - 大家冷静一下想一想，石子人人可用，只要暗器手法高强，是不是？
// TieShou - 不错
// zj - 而那“二”字，又为何不能是“无”字起笔？
// ZhuiMing - 可是大师兄你姓成啊
// zj - 不错，可成崖余这个名字，除你们外，有谁知道？[red]无情[/red]就不同了
// LengXie - 那……大师兄你为何要这样做？
// zj - 于私，是为了复仇，于公，则是为了社稷
// TieShou - 二十多年前的灭门血案，大师兄你查清楚了？
// zj - 不错。不过这并不能成为下手的理由
// zj - 昨夜实在是机缘巧合，听到这奸相正密谋一桩大事
// ZhuiMing - 里通外国？
// zj - 还不止于此，首先是篡权夺位，其次是割地卖国
// zj - 家仇可以不报，国难却不可不赴，三位师弟，就请拿我去见官吧
// TieShou - 大师兄你以为我们是何等样人？拿你见官？想也莫想
// ZhuiMing - 大师兄，珍重
// LengXie - 保重！
// zj - ……谢谢
// ZhuGeXianSheng - 且慢
// zj - 世叔？
// ZhuGeXianSheng - [red]无情[/red]，你出手吧
// zj - [red]无情[/red]不敢
// ZhuGeXianSheng - 快！// ** Fight with ZhuGeXianSheng 输赢都可以
// ZhuGeXianSheng - 好！
// zj - [red]无情[/red]甘愿束手就缚
// ZhuGeXianSheng - 痴儿，你此时不走，更待何时？
// ZhuGeXianSheng - 我们拦你不住，是我们无能；说起来，也无可深责
// zj - ……多谢世叔成全！

// 从此?绝迹江湖。“四大名捕”只余三人，只是人们传说，在其余三人遇到危险时，常常会见到一个腿有残疾的白衣少年的身影……
// ---

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ZhuGeXianSheng - 再来一局 // ** DuiYi 输赢都可以

// ZhuGeXianSheng - [red]无情[/red]，你的心不静
// zj - 世叔教训的是
// ZhuGeXianSheng - 心中有事？
// zj - 世叔小心！// ** Fight with HeiYiRen 输赢都可以

// zj - 呼……最近颇多刺客啊
// ZhuGeXianSheng - 可惜搅乱了这一局残棋
// ZhuGeXianSheng - [red]无情[/red]，你可是想外出探案？
// zj - 不错。洛阳一案扑朔迷离，我想亲自去看一看，只是……
// ZhuGeXianSheng - 只是他们三个都不在你不放心我？
// zj - 世叔明见
// ZhuGeXianSheng - 你放心去吧
// zj - 多谢世叔！
// ZhuGeXianSheng - 盘缠带好，路上用得着
// ZhuGeXianSheng - 另外，这“[green]仙鹤神针[/green]”你装备着，或有用途
// zj - 我三日后出发，世叔保重
// ** 金钱加500两，仙鹤神针

// TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_1
// zj - 一切收拾停当，是该动身了 // ** moveToCity: CityIdEnum.LuoYang, moveToCityGroup: CityGroupEnum.Normal

// TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_2
// zj - （先梳理下这个案子，照说，案情并不复杂）// ** setCityGroup: CityGroupEnum.Normal
// zj - （凶嫌已经在押，种种迹象表明，他应当就是凶手）
// zj - （可既找不到赃物，又找不到凶器，这可麻烦）
// zj - 先去哪里看看呢？
// ** QA: 先去哪里看看呢？|酒馆|客栈

// TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_3
// zj - 小二哥
// DianXiaoEr - 客官何事？
// zj - 上次那谁是不是在你们这里寄存了一样东西啊？
// DianXiaoEr - 啊？他只留下一句话，说是什么“一点一点分一点”
// zj - 一点一点分一点？小二，你们这里有没有窖藏的汾酒？
// DianXiaoEr - 有啊，我带你看看去？ // ** actionType: TaskTalkActions.MiGong
// zj - 是了！就是这东西了！有了这凶器，大概这个案子就差不多了
// zj - 忽然白光一闪！ // ** Fight with HeiYiRen 输赢都行 ** hideHeroAvatar: true

// TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_4
// zj - 这客栈透着古怪！
// zj - 这门推不开？还有机关？好似是要填入一个数字？
// zj - 五五数之余三，七七数之余三，九九数之余三？
// ** Qa: 应该填入的数字是？|三|四|十|一

// TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_5
// zj - 诶？好像是赃物？看来这个案子差不多了
// zj - 忽然白光一闪！ // ** Fight with HeiYiRen 输赢都行 ** hideHeroAvatar: true

// TaskTalkIds.WuQing_ZJ_LuoYang_DiaoCha_6
// zj - 阴魂不散……小石头，你怎么来了？
// XiaoShiTou - 师叔让我带话，说此间事了，你可赶往长安一行，相助[red]铁手[/red]；或襄阳相助[red]追命[/red]
// zj - 谢谢你，小石头

//

// --------------------------------------
// zj - 是时候去襄阳相助[red]追命[/red]了
// ZhuiMing - 大师兄，你来了 // ** setCityGroup: CityGroupEnum.JiuGuan
// zj - 可有一些头绪没有？
// ZhuiMing - 头绪倒是有一些，大师兄且随我来 // ** MiGong

// zj - 此地路线为何如此复杂？
// ZhuiMing - 这里有个三岔路口
// zj - 有个字？“主”？
// ZhuiMing - 这字看来是个提示？
// ** Qa: 应该走哪边呢？|左|右

// zj - 应该走左边
// ZhuiMing - 怎么说？
// zj - 主者，“往”字去掉左边是也，“往左去”，所以要走左边
// ZhuiMing - 不错！

// ZhuiMing - 怎么又有个岔路口？
// zj - 这次提示是，“句”
// ** Qa: 应该走哪边呢？|左|右

// zj - 还是左边
// ZhuiMing - 这次是“向左去”？
// zj - 不错！
// ZhuiMing - 总算到了……这个山洞应该就是线索所在了吧？
// zj - 小心 // ** Fight with HeiYiRen 输赢都行

// zj - 这家伙，居然服毒死了……
// ZhuiMing - 没关系，我刚才搜过这个山洞，破案应当不成问题
// ZhuiMing - 多谢大师兄相助
// zj - 据说[red]冷血[/red]在苏州遇到一些麻烦，我先走一步，你随后也去吧
// ZhuiMing - 好

// ------------------------------

// zj - 是时候去长安相助[red]铁手[/red]了
// TieShou - 大师兄，你来了 // ** setCityGroup: CityGroupEnum.JiuGuan
// zj - 怎么样？
// TieShou - 案子基本破了，只是凶嫌人数较多，我一个人对付，殊无把握
// zj - 凶嫌现在何处？
// TieShou - 就在这长安郊外，如今大师兄来了，我们可一同拿他们归案
// zj - 甚妙
// HeiYiRen - [red]铁手[/red]，你居然敢来送死？ // ** setCityGroup: CityGroupEnum.JiaoWai
// TieShou - 大师兄助我一臂之力！
// zj - 好！ // ** Fight with HeiYiRen / LanYiRen / BaiYiRen 输赢都行 // 之后就是一场三连战（每一场战斗后会加一点血，但不一定会加满；所以还是有一定难度的，不过战斗失败后铁手会帮忙，所以没有太大的关系）

// ** 输了会回血到40，然后重新战斗 // +30 tl
// TieShou - 大师兄小心！
// zj - [red]铁手[/red]拦住了[red]黑衣人[/red] // hideHeroAvatar: true
// zj - 多谢！//  // ** Fight with HeiYiRen 赢，输了重打 upTl: 30
// ** 输了会回血到40，然后重新战斗
// TieShou - 小心！
// zj - [red]铁手[/red]拦住了[red]黑衣人[/red] // hideHeroAvatar: true
// zj - 多谢！//  // ** Fight with LanYiRen 输赢都行

// TieShou - 总算肃清这里了……多谢大师兄了
// TieShou - 对了，据说[red]冷血[/red]在苏州遇到一些麻烦，我先走一步，大师兄随后也去吧
// zj - 好！

// * WuQing_ZJ_SuZhou_LengXie_1
// TieShou - 大师兄，你终于到了
// zj - 嗯，怎样了？
// ZhuiMing - [red]冷血[/red]这次怕是遇上麻烦了
// zj - 什么麻烦？
// TieShou - 被指证谋财害命，人证物证一应俱全
// zj - 你们相信[red]冷血[/red]会作出这样事来？
// ZhuiMing - 不相信，但一时找不到反驳的理由
// zj - 我们一起再去看看
// ZhuiMing - 这里便是现场了，过了这许多时日，应该也查不出什么了吧 // ** setCityGroup: CityGroupEnum.MinJia
// zj - 待我再仔细看看 // ** XunBao

// * WuQing_ZJ_SuZhou_LengXie_2
// zj - 这个血迹，是[red]冷血[/red]的指纹？
// ZhuiMing - 看起来是，事实对四师弟很不利啊
// TieShou - 未必，这个血迹，说不定是对他有利的证据
// zj - 为何？
// TieShou - 因为，我昨天检查时，这个地方，并没有血迹
// zj - 嗯……
// ZhuiMing - 大师兄你在做什么？
// zj - 我在听这地底的声音
// TieShou - 地底有声音？我知道了，来，大师兄，三师弟，跟我一起喊
// ZhuiMing - 喊什么？
// TieShou - 失~火~了~
// zj - 好办法！
// zj - 忽然一道暗门打开了！ // ** hideHeroAvatar: true
// zj - 小心！ // Fight with BaiYiRen 输赢都可以

// * WuQing_ZJ_SuZhou_LengXie_3
// LengXie - 哎呀，厉害！
// BaiYiRen - 居然被你们识破了……那也无话可说
// TieShou - [red]冷血[/red]，你来了
// LengXie - 多谢三位师兄
// ---------------------------
// LengXie - 大师兄
// zj - 何事？
// LengXie - 前两天那案子你也听说了吧？
// zj - 所知不详，怎么了？
// LengXie - 前一阵子有人在家中被刺死
// LengXie - 奇怪的是，除了地上有一滩水之外，找不到凶器
// zj - 是冬天的事？
// LengXie - 不错，师兄如何知道？
// zj - 那武器，想来是冰刀了，那滩水，就是凶器化了之后留下的
// LengXie - 有理！
// zj - 凶嫌可抓到了？
// LengXie - 凶嫌倒有一个，不过他有不在场证据
// zj - 什么证据？
// LengXie - 他事发前一天晚上还在三百里外的旅店歇脚，有很多人为证
// zj - 日行三百，也未足奇
// LengXie - 第二天他卧病在床，一天未出门，晚饭时方起，吃过晚饭才走，亦有人证
// zj - 那如何证明他呆在房内？
// LengXie - 早饭午饭，皆有人送去，吃完后又拿出来，自可为证
// zj - 这倒奇了……除此之外有何异常？
// LengXie - 许是生病，吃的比前一天少，也是人之常情，不过……
// zj - 不过什么？
// LengXie - 不过他第一天吃的也太多了些，足足抵上平常人两倍有余
// zj - 哦？那你有没有想过，这是偷梁换柱之策或者第一天根本就住着两个人？
// LengXie - 这个自然想过，不过那小客栈，想藏个人应该也不太容易
// zj - 前一天下过雪？有没有注意到雪人什么的？
// LengXie - 师兄明见！我再去问问，多谢了
// TieShou - 大师兄来得正好
// zj - 又有新案子了？
// TieShou - 这件案子大不寻常
// zj - 如何不寻常？
// TieShou - 你切随我来 // MiGong

// zj - 这是什么地方？ // setCityGroup: CityGroupEnum.MinJia
// TieShou - 据说线索就藏在这里面，可我们连进都进不去
// zj - 为什么？这琴是？
// TieShou - 似乎是打开这密室的钥匙
// zj - 我试试 // ** FuQin

// zj - 好似不行……只好改日再试了 // 1天后再能触发

// zj - 成了！
// TieShou - 这盘残局难道也是机关？
// zj - 我来看看 // ** DuiYi

// zj - 就是这里？
// TieShou - 线索在哪里呢？
// zj - 墙上这幅画，怎么不对劲？ // ** Hua

// zj - 拼好了！
// TieShou - 没错！这便是案发现场的图形！
// TieShou - 多谢大师兄相助

// ----------------------------
// ZhuiMing - 大师兄，如此好天气，何不去郊外打猎？
// zj - 甚妙！ // ** DaLie - setCityGroup: CityGroupEnum.JiaoWai

// zj - 诶？这鸽子身上有东西！ // setCityGroup: CityGroupEnum.JiaoWai
// ZhuiMing - 是血书！怎么看不懂……
// zj - 想是秘密切口了，待我看看
// zj - 今秋花夜不比子春花时落留酒与诗馆人仔外细吟
// ZhuiMing - 什么呀……
// zj - 我知道了！你试着隔两字一读？
// zj - 今秋花夜不比子春花时落留酒与诗馆人仔外细吟
// ** Qa: 根据读出来的结果，应该去什么地方呢？|酒馆|客栈|赌场|民家

// ZhuiMing - 今夜子时酒馆外？
// zj - 不错，其实另一句也是暗号
// ZhuiMing - 秋花不比春花落，留与诗人仔细吟
// zj - 嗯，这是一个组织，叫“落菊”，今晚可能有恶战
// zj - 来了！ // ** setCityGroup: CityGroupEnum.JiuGuan
// BaiYiRen - 怎么又是你？// ** Fight with BaiYiRen 要赢，输了就无法再次触发了
// zj - 终于抓到你了

// zj - 让他给跑了！
// ----------------------------

// LengXie - 想向大师兄讨教一二
// zj - 请 // ** Fight with LengXie 赢
// LengXie - 大师兄高明！ // ** 获得： LengXie
// ---------------------------------

// TieShou - 想向大师兄讨教一二棋艺
// zj - 请 // ** DuiYi 赢
// TieShou - 大师兄果然高明！ // ** 获得： TieShou

// ---------------------------

// ZhuiMing - 据说大师兄赌技也相当了得？
// zj - 哪里
// ZhuiMing - 何妨一试？
// ZhuiMing - 大师兄果然高明！ // ** 获得： ZhuiMing
