import { CityGroupEnum } from '../../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../../constants/enums/city.enum'
import { RwIdEnum } from '../../../../constants/enums/rw.enum'
import { WpIdEnum } from '../../../../constants/enums/wp.enum'
import { KeyIds } from '../../keys.interface'
import { TaskEndValueEnum, TaskTalkActions, TaskTalkIds } from '../../task.enum'
import { TaskTalk } from '../../task.interface'

export const taskTalksGuoXiang: TaskTalk[] = [
  {
    id: TaskTalkIds.GuoXiang_ZJ_Start,
    talks: [
      { id: 1, rwId: RwIdEnum.HuangRong, type: 'rw', text: '[red]襄儿[/red]襄儿' },
      { id: 2, rwId: 0, type: 'zj', text: '妈妈？爹爹呢？没一起过来？' },
      { id: 3, rwId: RwIdEnum.HuangRong, type: 'rw', text: '你爹爹忙于城内守备，一时脱身不得' },
      { id: 4, rwId: RwIdEnum.HuangRong, type: 'rw', text: '今日是你十六岁的生日，说说，你想要什么样礼物？' },
      { id: 5, rwId: 0, type: 'zj', text: '（想要很多礼物……不知道杨大哥答应送我的三样礼物是什么……）' },
      { id: 6, rwId: RwIdEnum.HuangRong, type: 'rw', text: '有心事了？怎么不说话？' },
      { id: 7, rwId: 0, type: 'zj', text: '哦，没事' },
      { id: 8, rwId: RwIdEnum.HuangRong, type: 'rw', text: '你还想瞒我？少女怀春，也是正常事情；没什么不好意思' },
      { id: 9, rwId: RwIdEnum.HuangRong, type: 'rw', text: '你放心，我不会追问你' },
      {
        id: 10,
        rwId: RwIdEnum.HuangRong,
        type: 'rw',
        text: '今日一时也没准备什么礼物，这“[green]九花玉露丸[/green]”先送了给你吧',
      },
      { id: 11, rwId: 0, type: 'zj', text: '多谢妈妈！' },
      { id: 12, rwId: 0, type: 'zj', text: '其实，我最想要的生日礼物，是再尝尝妈妈的“谁家玉笛听落梅”' },
      { id: 13, rwId: RwIdEnum.GuoJing, type: 'rw', text: '我也想尝尝' },
      { id: 14, rwId: 0, type: 'zj', text: '爹爹？你也来了？' },
      { id: 15, rwId: RwIdEnum.GuoJing, type: 'rw', text: '嗯，襄儿生日，为父没什么东西送你，实在惭愧' },
      { id: 16, rwId: 0, type: 'zj', text: '爹爹能来襄儿就很开心了！' },
      {
        id: 17,
        rwId: RwIdEnum.HuangRong,
        type: 'rw',
        text: '襄儿，你以后如果还想尝妈的手艺，只需备齐[green]兔肉</span>、<span class="green">鸽肉</span>、<span class="green">蛇胆</span>、<span class="green">黄精</span>、<span class="green">灵芝[/green]即可',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_HuangYong_Food_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_HuangRong_FanZhou_1,
    talks: [
      { id: 1, rwId: RwIdEnum.HuangRong, type: 'rw', text: '襄儿，随我出去走走吧' },
      { id: 2, rwId: 0, type: 'zj', text: '（那夜，我随母亲泛舟汉水之上）' },
      { id: 3, rwId: RwIdEnum.HuangRong, type: 'rw', text: '桃李春风一杯酒，江湖夜雨十年灯' },
      { id: 4, rwId: 0, type: 'zj', text: '母亲突然念出这句诗，然后惘然说道，这是本朝黄山谷的佳句。', hideHeroAvatar: true },
      { id: 5, rwId: 0, type: 'zj', text: '那夜嫩寒锁江，薄雾萦回，远处襄阳城寂无人声。', hideHeroAvatar: true },
      { id: 6, rwId: 0, type: 'zj', text: '母亲时常茫然出神，人们说她是江湖上最聪明的女子，', hideHeroAvatar: true },
      { id: 7, rwId: 0, type: 'zj', text: '而只有我看得见她迷惘时时，多年以来我不得不怀疑母亲总是困惑。', hideHeroAvatar: true },
      {
        id: 8,
        rwId: 0,
        type: 'zj',
        text: '她在每一个时刻无不明断如神，然而她在一生漫长的岁月中却迷惑无措。',
        hideHeroAvatar: true,
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_LiWu_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '杨大哥怎么还不来？且回家看看' },
      { id: 2, rwId: 0, type: 'zj', text: '大师？你怎么来了？', setCityGroup: CityGroupEnum.MinJia },
      { id: 3, rwId: RwIdEnum.FangSheng, type: 'rw', text: '阿弥陀佛，老衲受人之托，为郭二小姐祝寿' },
      { id: 4, rwId: RwIdEnum.FangSheng, type: 'rw', text: '姑娘请看，这是敝寺特制铁罗汉，一套罗汉拳打得也颇有声有色' },
      { id: 5, rwId: 0, type: 'zj', text: '多谢大师' },
      { id: 6, rwId: RwIdEnum.FangSheng, type: 'rw', text: '不必谢我，老纳只是借花献佛，送你这礼物的另有其人' },
      { id: 7, rwId: 0, type: 'zj', text: '杨大哥？他人现在何处？' },
      { id: 8, rwId: RwIdEnum.FangSheng, type: 'rw', text: '请往外看' },
      { id: 9, rwId: 0, type: 'zj', text: '烟火？' },
      { id: 10, rwId: 0, type: 'zj', text: '这烟火倒像是字？“恭”，“祝”？' },
      { id: 11, rwId: RwIdEnum.FangSheng, type: 'rw', text: '却是“恭祝郭二姑娘多福多寿”十个字' },
      { id: 12, rwId: 0, type: 'zj', text: '多谢杨大哥……不知第三件礼物是什么……' },
      { id: 13, rwId: RwIdEnum.YangGuo, type: 'rw', text: '你过会便知' },
      { id: 14, rwId: 0, type: 'zj', text: '杨大哥，你来了！' },
      { id: 15, rwId: RwIdEnum.GuoJing, type: 'rw', text: '过儿，一别十余年不见' },
      { id: 16, rwId: RwIdEnum.YangGuo, type: 'rw', text: '过儿见过郭伯伯' },
      { id: 17, rwId: RwIdEnum.WuShi, type: 'rw', text: '郭大侠，南面似乎有火光' },
      { id: 18, rwId: RwIdEnum.GuoJing, type: 'rw', text: '南阳大火？' },
      { id: 19, rwId: RwIdEnum.YangGuo, type: 'rw', text: '正是，这是送给襄儿的第三件薄礼，烧了蒙古二十万大军的粮草。' },
      { id: 20, rwId: RwIdEnum.GuoJing, type: 'rw', text: '过儿你立此大功，襄阳军民感激不尽' },
      { id: 21, rwId: RwIdEnum.YangGuo, type: 'rw', text: '郭伯伯说哪里话，过儿尚有事在身，就此告辞' },
      { id: 22, rwId: 0, type: 'zj', text: '杨大哥，你这就要走了？' },
      {
        id: 23,
        rwId: RwIdEnum.YangGuo,
        type: 'rw',
        text: '嗯……襄儿保重',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_XiangYang_GaoTai_1,
    talks: [
      { id: 1, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '小姑娘，跟我走罢！' },
      { id: 2, rwId: 0, type: 'zj', text: '老和尚，为什么要跟你走啊？' },
      { id: 3, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '因为你是[red]郭靖[/red]的女儿啊！' },
      { id: 4, rwId: 0, type: 'zj', text: '我看你不像蒙古人啊，为何要帮着他们？' },
      {
        id: 5,
        rwId: RwIdEnum.JinLunFaWang,
        type: 'rw',
        text: '因为蒙古奉我做国师，我只好路过友情帮他们一下了',
      },
      { id: 6, rwId: 0, type: 'zj', text: '可我不想跟你走，怎么办？' },
      {
        id: 7,
        rwId: RwIdEnum.JinLunFaWang,
        type: 'rw',
        text: '那可由不得你',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.JinLunFaWang,
        actionValue: TaskTalkIds.GuoXiang_ZJ_XiangYang_GaoTai_2,
        actionFailValue: TaskTalkIds.GuoXiang_ZJ_XiangYang_GaoTai_3,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_XiangYang_GaoTai_2,
    talks: [
      {
        id: 1,
        rwId: RwIdEnum.JinLunFaWang,
        type: 'rw',
        text: '……',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Fail,
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_XiangYang_GaoTai_3,
    talks: [
      { id: 1, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '你看，我说由不得你吧' },
      { id: 2, rwId: 0, type: 'zj', text: '如是过了数日，[red]郭襄[/red]被[red]金轮法王[/red]带到蒙古营中', hideHeroAvatar: true },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '却说[red]郭襄[/red]为那[red]金轮法王[/red]带去蒙古营中，初始是欲以她为质劝降[red]郭靖[/red]',
        hideHeroAvatar: true,
        hideNpc: true,
        setCityGroup: CityGroupEnum.Normal,
      },
      {
        id: 4,
        rwId: 0,
        type: 'zj',
        text: '不料[red]郭靖[/red]势不投降，[red]金轮法王[/red]一怒之下，在城外建了一座高台，要烧死[red]郭襄[/red]',
        hideHeroAvatar: true,
      },
      {
        id: 5,
        rwId: RwIdEnum.JinLunFaWang,
        type: 'rw',
        text: '小[red]郭襄[/red]，快叫你父亲投降',
        setCityGroup: CityGroupEnum.JiaoWai,
      },
      { id: 6, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '我从一数到十，你父亲不降，我便下令举火了。' },
      { id: 7, rwId: 0, type: 'zj', text: '你爱数便数' },
      { id: 8, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '你道我当真不敢烧死你吗？' },
      { id: 9, rwId: 0, type: 'zj', text: '我只觉得你挺可怜的。' },
      { id: 10, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '我可怜甚么？' },
      {
        id: 11,
        rwId: 0,
        type: 'zj',
        text: '你打不过我爹爹妈妈，打不过我大哥哥[red]杨过[/red]，只有本事把我绑在这里。',
      },
      { id: 12, rwId: 0, type: 'zj', text: '法王，我倒劝你一句话。' },
      { id: 13, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '你劝我甚么？' },
      { id: 14, rwId: 0, type: 'zj', text: '如你这般为人，活在世上有何意味？不如跳下高台，图个自尽罢！' },
      { id: 15, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '你你你！[red]郭靖[/red]，我数到十，你再不投降，你的爱女便成焦炭！' },
      { id: 16, rwId: 0, type: 'zj', text: '这么好玩的世界，我却快要死了。但不知杨大哥此时在那里？' },
      { id: 17, rwId: RwIdEnum.YangGuo, type: 'rw', text: '襄儿莫怕，我来救你！' },
      { id: 18, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '[red]杨过[/red]？你又来坏我好事！' },
      { id: 19, rwId: RwIdEnum.YangGuo, type: 'rw', text: '贼秃！你还有脸再入中原？' },
      { id: 20, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '正要找你见个真章！' },
      { id: 21, rwId: 0, type: 'zj', text: '两人交起手来……', hideHeroAvatar: true },
      { id: 22, rwId: RwIdEnum.YangGuo, type: 'rw', text: '啊哟，这贼秃忒也厉害！' },
      { id: 23, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '哎呀！什么人暗算我？' },
      { id: 24, rwId: RwIdEnum.XiaoLongNv, type: 'rw', text: '过儿！' },
      { id: 25, rwId: RwIdEnum.YangGuo, type: 'rw', text: '龙儿？' },
      { id: 26, rwId: RwIdEnum.YangGuo, type: 'rw', text: '龙儿？怎么不见了？龙儿？龙儿！' },
      { id: 27, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '这是什么掌法？哎呀！' },
      { id: 28, rwId: RwIdEnum.WuShi, type: 'rw', text: '掉下去了！掉下去了！' },
      { id: 29, rwId: RwIdEnum.YangGuo, type: 'rw', text: '黯然销魂掌……黯然销魂者，唯别而已……龙儿……' },
      { id: 30, rwId: 0, type: 'zj', text: '杨大哥，你不要难过' },
      {
        id: 31,
        rwId: 0,
        type: 'zj',
        text: '谢谢你…',
        upTime: 4 * 12,
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_YouLi_GaoBie_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '爹爹妈妈' },
      { id: 2, rwId: RwIdEnum.GuoJing, type: 'rw', text: '怎么了？襄儿？' },
      { id: 3, rwId: 0, type: 'zj', text: '我想出去游历一番' },
      { id: 4, rwId: RwIdEnum.GuoJing, type: 'rw', text: '好呀，去什么地方？' },
      { id: 5, rwId: 0, type: 'zj', text: '没什么一定的地方，四处走走' },
      { id: 6, rwId: RwIdEnum.GuoJing, type: 'rw', text: '你是想找寻过儿？' },
      { id: 7, rwId: 0, type: 'zj', text: '……' },
      { id: 8, rwId: RwIdEnum.GuoJing, type: 'rw', text: '襄儿你放心去吧，穿上这个防身' },
      {
        id: 9,
        rwId: 0,
        type: 'zj',
        text: '年轻时每次我出门游荡，母亲以哀悯的目光送我出门，',
        hideHeroAvatar: true,
      },
      {
        id: 10,
        rwId: 0,
        type: 'zj',
        text: '而父亲的目光却让我难以捉摸。我告诉他们我要去寻找杨大哥。',
        hideHeroAvatar: true,
      },
      {
        id: 11,
        rwId: 0,
        type: 'zj',
        text: '我想恐怕是偏偏父亲猜出我真正的癖好，而聪明的母亲却相信了我痴情的借口。',
        hideHeroAvatar: true,
      },
      {
        id: 12,
        rwId: 0,
        type: 'zj',
        text: '这个世界上，有些人爱好桃李春风一杯酒念念不忘，',
        hideHeroAvatar: true,
      },
      {
        id: 13,
        rwId: 0,
        type: 'zj',
        text: '而有些人爱好的就是江湖夜雨的漂泊。',
        hideHeroAvatar: true,
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }, { keyId: KeyIds.GuoXiang_ZJ_Day_Check_ChuLiuXiang_JinLvYi }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_ChuLiuXiang_JinLvYi_1,
    talks: [
      { id: 1, rwId: RwIdEnum.ChuLiuXiang, type: 'rw', text: '久仰姑娘妙解音律，不知能否为我弹奏一曲金缕曲？' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '敢不从命',
        actionType: TaskTalkActions.FuQin,
        actionValue: TaskTalkIds.GuoXiang_ZJ_ChuLiuXiang_JinLvYi_2,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check_ChuLiuXiang_JinLvYi }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_ChuLiuXiang_JinLvYi_2,
    talks: [
      { id: 1, rwId: RwIdEnum.ChuLiuXiang, type: 'rw', text: '果然高明！' },
      {
        id: 2,
        rwId: RwIdEnum.ChuLiuXiang,
        type: 'rw',
        text: '这个赠与姑娘，以谢弦歌雅意',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check_ChuLiuXiang_JinLvYi }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_ChuLiuXiang_NiChangYuYi_1,
    talks: [
      { id: 1, rwId: RwIdEnum.ChuLiuXiang, type: 'rw', text: '这次不知能否弹奏一曲霓裳羽衣曲？' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '敢不从命',
        actionType: TaskTalkActions.FuQin,
        actionValue: TaskTalkIds.GuoXiang_ZJ_ChuLiuXiang_NiChangYuYi_2,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check_ChuLiuXiang_JinLvYi }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_ChuLiuXiang_NiChangYuYi_2,
    talks: [
      {
        id: 1,
        rwId: RwIdEnum.ChuLiuXiang,
        type: 'rw',
        text: '果然仙曲！区区薄礼，不成敬意',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check_ChuLiuXiang_JinLvYi }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_ShaoLin_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '上次[red]方生[/red]大师送我罗汉，或许杨大哥的消息他知道一二？' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '且去少林看看，也是好的',
        actionType: TaskTalkActions.Move,
        moveToCity: CityIdEnum.ShaoLin,
        moveToCityGroup: CityGroupEnum.Normal,
        actionValue: TaskTalkIds.GuoXiang_ZJ_ShaoLin_2,
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_ShaoLin_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '欢乐趣，离别苦，就中更有痴儿女。' },
      { id: 2, rwId: 0, type: 'zj', text: '君应有语，渺万里层云，千山暮雪，只影向谁去？' },
      { id: 3, rwId: RwIdEnum.JueYuan, type: 'rw', text: '由爱故生忧，由爱故生怖；若离于爱者，无忧亦无怖。' },
      { id: 4, rwId: 0, type: 'zj', text: '这位是？我要问他，如何才能离于爱，如何能无忧无怖？' },
      { id: 5, rwId: 0, type: 'zj', text: '大师，请留步' },
      { id: 6, rwId: RwIdEnum.JueYuan, type: 'rw', text: '……' },
      { id: 7, rwId: 0, type: 'zj', text: '[red]觉远[/red]大师？你如何变成了这等模样？谁用铁链绑住了你？' },
      { id: 8, rwId: RwIdEnum.JueYuan, type: 'rw', text: '……' },
      { id: 9, rwId: 0, type: 'zj', text: '我是[red]郭襄[/red]啊，大师，认不出我了么？' },
      { id: 10, rwId: RwIdEnum.JueYuan, type: 'rw', text: '……' },
      { id: 11, rwId: 0, type: 'zj', text: '不见了……不行，一定要查个清楚' },
      { id: 12, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '郭姑娘' },
      { id: 13, rwId: 0, type: 'zj', text: '你怎么在这儿？你师傅怎么了？' },
      { id: 14, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '没怎么啊？' },
      { id: 15, rwId: 0, type: 'zj', text: '不行，我要去后山看看' },
      { id: 16, rwId: RwIdEnum.HeShang, type: 'rw', text: '阿弥陀佛，女施主请留步', setCityGroup: CityGroupEnum.ShaoLinHouShan },
      { id: 17, rwId: 0, type: 'zj', text: '既是施主，为何要留步？' },
      { id: 18, rwId: RwIdEnum.HeShang, type: 'rw', text: '这个……本寺禁地，一向禁止女眷入内' },
      { id: 19, rwId: 0, type: 'zj', text: '小师傅，佛说众生平等，没有女眷，哪来你呢？' },
      {
        id: 20,
        rwId: RwIdEnum.HeShang,
        type: 'rw',
        text: '……那只好得罪女施主了',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.HeShang,
        actionValue: TaskTalkIds.GuoXiang_ZJ_ShaoLin_3,
        actionFailValue: TaskTalkIds.GuoXiang_ZJ_ShaoLin_3,
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_ShaoLin_3,
    talks: [
      { id: 1, rwId: RwIdEnum.FangSheng, type: 'rw', text: '阿弥陀佛，快快住手' },
      { id: 2, rwId: 0, type: 'zj', text: '[red]方生[/red]大师？' },
      { id: 3, rwId: RwIdEnum.FangSheng, type: 'rw', text: '郭二姑娘所来为何？' },
      { id: 4, rwId: 0, type: 'zj', text: '不知大师可否知道……' },
      { id: 5, rwId: RwIdEnum.FangSheng, type: 'rw', text: '姑娘后来有否见过[red]杨过[/red]？' },
      { id: 6, rwId: 0, type: 'zj', text: '……那没事了，对了，贵寺[red]觉远[/red]大师，' },
      { id: 7, rwId: 0, type: 'zj', text: '不知为何被人用铁链绑住，还不得不下山挑水？' },
      { id: 8, rwId: RwIdEnum.FangSheng, type: 'rw', text: '[red]觉远[/red]师弟犯了戒律，自是有此惩罚，既是姑娘问起，那便免了好了' },
      { id: 9, rwId: 0, type: 'zj', text: '多谢大师，后会有期' },
      { id: 10, rwId: RwIdEnum.FangSheng, type: 'rw', text: '走好，不送' },
      { id: 11, rwId: RwIdEnum.FangSheng, type: 'rw', text: '留步' },
      { id: 12, rwId: 0, type: 'zj', text: '大师有何见教？' },
      { id: 13, rwId: RwIdEnum.FangSheng, type: 'rw', text: '姑娘可曾听说“昆仑三圣”这三人？' },
      { id: 14, rwId: 0, type: 'zj', text: '没听说' },
      {
        id: 15,
        rwId: RwIdEnum.FangSheng,
        type: 'rw',
        text: '那不打扰了，后会有期',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_HeZuDao_ChuShi_1,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '居然有人在此操琴？',
        actionType: TaskTalkActions.FuQin,
        actionValue: TaskTalkIds.GuoXiang_ZJ_HeZuDao_ChuShi_2,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_HeZuDao_ChuShi_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '哪里来这许多鸟？莫非这一曲便是传说中的空山鸟语？' },
      { id: 2, rwId: 0, type: 'zj', text: '不然，好似是百鸟朝凤？' },
      { id: 3, rwId: RwIdEnum.HeZuDao, type: 'rw', text: '抚长剑，一扬眉，清水白石何离离？世间苦无知音，纵活千载，亦复何益？' },
      { id: 4, rwId: 0, type: 'zj', text: '他这把剑倒好，难道他要舞剑？不对，这在地下画格子的，是什么剑法？' },
      {
        id: 5,
        rwId: 0,
        type: 'zj',
        text: '哦，原来他是在画棋盘',
        actionType: TaskTalkActions.DuiYi,
        actionValue: TaskTalkIds.GuoXiang_ZJ_HeZuDao_ChuShi_3,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_HeZuDao_ChuShi_3,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '何不径弃中原，反取西域？' },
      { id: 2, rwId: RwIdEnum.HeZuDao, type: 'rw', text: '妙！' },
      { id: 3, rwId: 0, type: 'zj', text: '哪一位高人承教，在下感激不尽。' },
      { id: 4, rwId: 0, type: 'zj', text: '适才听得先生雅奏，空山鸟语，百禽来朝，实深钦佩。' },
      { id: 5, rwId: 0, type: 'zj', text: '又见先生画地为局，黑白交锋，引人入胜，一时忘形，忍不住多嘴，还祈见谅。' },
      { id: 6, rwId: RwIdEnum.HeZuDao, type: 'rw', text: '姑娘深通琴理，若蒙不弃，愿闻清音。' },
      {
        id: 7,
        rwId: 0,
        type: 'zj',
        text: '好罢，我弹便弹一曲，你却不许取笑。',
        actionType: TaskTalkActions.FuQin,
        actionValue: TaskTalkIds.GuoXiang_ZJ_HeZuDao_ChuShi_4,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_HeZuDao_ChuShi_4,
    talks: [
      { id: 1, rwId: RwIdEnum.HeZuDao, type: 'rw', text: '考在槃涧，硕人之宽，独寐寤言，永矢勿谖。' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '考檗在陆，硕人之轴，独寐独宿，永矢勿告。',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_HeZuDao_RenWuKa_1,
    talks: [
      { id: 1, rwId: RwIdEnum.HeZuDao, type: 'rw', text: '姑娘，我们又见面了' },
      { id: 2, rwId: 0, type: 'zj', text: '还未请教尊姓大名' },
      { id: 3, rwId: RwIdEnum.HeZuDao, type: 'rw', text: '昆仑三圣，昆仑三圣[red]何足道[/red]' },
      { id: 4, rwId: 0, type: 'zj', text: '你是昆仑三圣？那其余两个呢？' },
      { id: 5, rwId: RwIdEnum.HeZuDao, type: 'rw', text: '昆仑三圣只有一人。' },
      {
        id: 6,
        rwId: RwIdEnum.HeZuDao,
        type: 'rw',
        text: '昆仑当地的朋友说我琴剑棋三绝，是以给了我一个外号，叫作‘昆仑三圣’',
      },
      { id: 7, rwId: RwIdEnum.HeZuDao, type: 'rw', text: '但我想这‘圣’岂是轻易称得的？' },
      { id: 8, rwId: RwIdEnum.HeZuDao, type: 'rw', text: '因此我改名叫‘足道’，联起来说，便是‘昆仑三圣[red]何足道[/red]’' },
      { id: 9, rwId: 0, type: 'zj', text: '你这人倒有趣' },
      {
        id: 10,
        rwId: RwIdEnum.HeZuDao,
        type: 'rw',
        text: '待我再为姑娘弹奏一曲',
        actionType: TaskTalkActions.FuQin,
        actionValue: TaskTalkIds.GuoXiang_ZJ_HeZuDao_RenWuKa_3,
        actionFailValue: TaskTalkIds.GuoXiang_ZJ_HeZuDao_RenWuKa_2,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_HeZuDao_RenWuKa_2,
    talks: [{ id: 1, rwId: 1, type: 'zj', text: '……', actionType: TaskTalkActions.EndTask, actionValue: TaskEndValueEnum.Fail }],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_HeZuDao_RenWuKa_3,
    talks: [
      { id: 1, rwId: RwIdEnum.HeZuDao, type: 'rw', text: '考槃在涧，硕人之宽。蒹葭苍苍，白露为霜，所谓伊人，在天一方……' },
      { id: 2, rwId: RwIdEnum.HeZuDao, type: 'rw', text: '硕人之宽，硕人之宽……溯回从之，道阻且长，溯游从之，宛在水中央……' },
      { id: 3, rwId: RwIdEnum.HeZuDao, type: 'rw', text: '独寐寤言，永矢勿谖，永矢勿谖……' },
      { id: 4, rwId: 0, type: 'zj', text: '（他琴中说的‘伊人’，难道是我么？' },
      { id: 5, rwId: 0, type: 'zj', text: '这琴韵何以如此缠绵，充满了思慕之情？）' },
      {
        id: 6,
        rwId: RwIdEnum.HeZuDao,
        type: 'rw',
        text: '姑娘，后会有期',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_JueYuan_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '[red]觉远[/red]大师？你师徒二人怎么会在这里？' },
      { id: 2, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '此事说来话长……乃是那昆仑三圣……' },
      { id: 3, rwId: 0, type: 'zj', text: '何足道？他怎么了？' },
      { id: 4, rwId: RwIdEnum.JueYuan, type: 'rw', text: '唉，不必说了。' },
      { id: 5, rwId: RwIdEnum.JueYuan, type: 'rw', text: '寺规如此，你这武功既是未经拜师指点，他们拿你，也情有可原……' },
      { id: 6, rwId: 0, type: 'zj', text: '这帮和尚，真正不讲理！' },
      { id: 7, rwId: RwIdEnum.JueYuan, type: 'rw', text: '咳！咳！' },
      {
        id: 8,
        rwId: 0,
        type: 'zj',
        text: '大师，你先休息，我去弄些吃的',
        actionType: TaskTalkActions.DaLie,
        actionValue: TaskTalkIds.GuoXiang_ZJ_JueYuan_3,
        actionFailValue: TaskTalkIds.GuoXiang_ZJ_JueYuan_2,
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_JueYuan_2,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '……',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Fail,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_JueYuan_3,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '再弄点药给你',
        actionType: TaskTalkActions.CaiYao,
        actionValue: TaskTalkIds.GuoXiang_ZJ_JueYuan_4,
        actionFailValue: TaskTalkIds.GuoXiang_ZJ_JueYuan_4,
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_JueYuan_4,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '弄好了，大师？' },
      { id: 2, rwId: RwIdEnum.JueYuan, type: 'rw', text: '……先以心使身，从人不从己，从身能从心，由己仍从人……' },
      { id: 3, rwId: 0, type: 'zj', text: '大师？你先歇息，吃点东西再念不迟' },
      { id: 4, rwId: RwIdEnum.JueYuan, type: 'rw', text: '……合便是收，开便是放。能懂得开合，便知阴阳……' },
      { id: 5, rwId: 0, type: 'zj', text: '怎么没声音了？' },
      { id: 6, rwId: RwIdEnum.FangSheng, type: 'rw', text: '善哉善哉！' },
      { id: 7, rwId: 0, type: 'zj', text: '大师，你也是来追他们师徒的？' },
      { id: 8, rwId: RwIdEnum.FangSheng, type: 'rw', text: '阿弥陀佛，老衲尚分是非，岂是拘泥陈年旧规之人？' },
      { id: 9, rwId: RwIdEnum.FangSheng, type: 'rw', text: '觉远师弟，达摩堂弟子正向东追寻，你们快快往西去罢！' },
      { id: 10, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '师父醒醒！' },
      { id: 11, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '啊？师父去世了！' },
      { id: 12, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '师父！师父！' },
      { id: 13, rwId: 0, type: 'zj', text: '[red]觉远[/red]大师……' },
      { id: 14, rwId: RwIdEnum.FangSheng, type: 'rw', text: '诸方无云翳，四面皆清明，微风吹香气，众山静无声。' },
      { id: 15, rwId: RwIdEnum.FangSheng, type: 'rw', text: '今日大欢喜，舍却危脆身。无嗔亦无忧，宁不当欣庆？' },
      { id: 16, rwId: 0, type: 'zj', text: '我也要走了，小兄弟，后会有期，倘若有缘，当可江湖再见吧' },
      {
        id: 17,
        rwId: RwIdEnum.ZhangSanFeng,
        type: 'rw',
        text: '师父临终所念，当是九阳真经了……',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_HuangYaoShi_RenWuKa_1,
    talks: [
      { id: 1, rwId: RwIdEnum.HuangYaoShi, type: 'rw', text: '襄儿你看这桃花' },
      { id: 2, rwId: RwIdEnum.HuangYaoShi, type: 'rw', text: '你看这风吹花落，有的落入沟渠，有的飘入坐毡，它们自己什么办法都没有啊' },
      { id: 3, rwId: RwIdEnum.HuangYaoShi, type: 'rw', text: '哈哈哈哈，襄儿你看这多么好玩啊' },
      {
        id: 4,
        rwId: 0,
        type: 'zj',
        text: '不知怎地，我想到的却是南华经云，大知闲闲，小知间间',
        hideHeroAvatar: true,
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_HuangYong_Food_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '妈妈，原料我都找齐啦！' },
      { id: 2, rwId: RwIdEnum.HuangRong, type: 'rw', text: '好，我这就做给你吃' },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '失去：[green]兔肉</span>、<span class="green">鸽肉</span>、<span class="green">蛇胆</span>、<span class="green">黄精</span>、<span class="green">灵芝[/green]。',
        hideHeroAvatar: true,
      },
      {
        // 谁家玉笛听落梅
        id: 4,
        rwId: 0,
        type: 'zj',
        text: '嗯，好吃！谢谢妈妈！',
        sjydtlm: true,
        rmWps: [
          { wpId: WpIdEnum.TuRou, value: 1 },
          { wpId: WpIdEnum.GeRou, value: 1 },
          { wpId: WpIdEnum.SheDan, value: 1 },
          { wpId: WpIdEnum.HuangJing, value: 1 },
          { wpId: WpIdEnum.LingZhi, value: 1 },
        ],
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_HuangYong_Food_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_XiangYang_ChengPo_1,
    talks: [
      { id: 1, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '姑娘' },
      { id: 2, rwId: 0, type: 'zj', text: '何事？' },
      { id: 3, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '听说，昨日襄阳城破，郭大侠夫妇不知下落……' },
      {
        id: 4,
        rwId: 0,
        type: 'zj',
        text: '啊？',
        actionType: TaskTalkActions.MiGong,
        actionValue: TaskTalkIds.GuoXiang_ZJ_XiangYang_ChengPo_2,
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_XiangYang_ChengPo_2,
    talks: [
      { id: 1, rwId: RwIdEnum.GuoJing, type: 'rw', text: '襄儿……', setCityGroup: CityGroupEnum.JiaoWai },
      { id: 2, rwId: RwIdEnum.HuangRong, type: 'rw', text: '襄儿……' },
      { id: 3, rwId: 0, type: 'zj', text: '爹爹妈妈！', setCity: CityIdEnum.XiangYang },
      { id: 4, rwId: RwIdEnum.GuoJing, type: 'rw', text: '死之前还能再见你一面……真好……' },
      { id: 5, rwId: RwIdEnum.HuangRong, type: 'rw', text: '襄儿，今后爹爹妈妈不能再照料你了……' },
      { id: 6, rwId: 0, type: 'zj', text: '呜……爹爹……妈妈……' },
      { id: 7, rwId: RwIdEnum.GuoJing, type: 'rw', text: '襄儿……珍重……' },
      { id: 8, rwId: RwIdEnum.HuangRong, type: 'rw', text: '襄儿……你回家看看……' },
      { id: 9, rwId: RwIdEnum.GuoJing, type: 'rw', text: '蓉儿……我们终于……终于能死在一起……' },
      { id: 10, rwId: RwIdEnum.HuangRong, type: 'rw', text: '靖哥哥……' },
      { id: 11, rwId: RwIdEnum.HuangRong, type: 'rw', text: '活，你背着我！死，你背着我！' },
      { id: 12, rwId: 0, type: 'zj', text: '爹爹！妈妈！' },
      { id: 13, rwId: 0, type: 'zj', text: '我亲眼看着父母一同死去，亲手在襄阳城边埋葬了他们。', hideHeroAvatar: true },
      { id: 14, rwId: 0, type: 'zj', text: '夜雾弥江，废城寂无人声。', hideHeroAvatar: true },
      { id: 15, rwId: 0, type: 'zj', text: '我站在他们的坟茔前忽然想起母亲多年前念过的那句诗', hideHeroAvatar: true },
      {
        id: 16,
        rwId: 0,
        type: 'zj',
        text: '我已无复当年的青梅少女，而这诗，也已是前朝遗句。',
        hideHeroAvatar: true,
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_XiangYang_HuiJia_1,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '不知妈妈说回家看什么……',
        setCityGroup: CityGroupEnum.MinJia,
        actionType: TaskTalkActions.XunBao,
        actionValue: TaskTalkIds.GuoXiang_ZJ_XiangYang_HuiJia_2,
        actionFailValue: TaskTalkIds.GuoXiang_ZJ_XiangYang_HuiJia_2,
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_XiangYang_HuiJia_2,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '原来是这些……',
        setCityGroup: CityGroupEnum.MinJia,
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_DaLi_DuanZiYu_1,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '大理……',
        actionType: TaskTalkActions.Move,
        moveToCity: CityIdEnum.DaLi,
        moveToCityGroup: CityGroupEnum.Normal,
        actionValue: TaskTalkIds.GuoXiang_ZJ_DaLi_DuanZiYu_2,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_DaLi_DuanZiYu_2,
    talks: [
      { id: 1, rwId: RwIdEnum.DuanZiYu, type: 'rw', text: '姑娘可愿让在下为你算一卦？' },
      { id: 2, rwId: 0, type: 'zj', text: '请' },
      { id: 3, rwId: RwIdEnum.DuanZiYu, type: 'rw', text: '……' },
      { id: 4, rwId: 0, type: 'zj', text: '怎么了？' },
      { id: 5, rwId: RwIdEnum.DuanZiYu, type: 'rw', text: '这卦辞颇为奇怪' },
      { id: 6, rwId: 0, type: 'zj', text: '卦辞是什么？' },
      { id: 7, rwId: RwIdEnum.DuanZiYu, type: 'rw', text: '土反其宅，水归其壑，昆虫勿作，草木归其泽' },
      { id: 8, rwId: 0, type: 'zj', text: '何解？' },
      {
        id: 9,
        rwId: RwIdEnum.DuanZiYu,
        type: 'rw',
        text: '去峨嵋自知',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.GuoXiang_ZJ_Day_Check }],
      },
    ],
  },
  {
    id: TaskTalkIds.GuoXiang_ZJ_EMei_JieJu_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '洪椿坪，真正好名字' },
      { id: 2, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '你怎么在这里？' },
      { id: 3, rwId: 0, type: 'zj', text: '我来这里解一卦辞' },
      { id: 4, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '什么卦辞？' },
      { id: 5, rwId: 0, type: 'zj', text: '土反其宅，水归其壑，昆虫勿作，草木归其泽' },
      { id: 6, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '……' },
      { id: 7, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '你知道，他死了' },
      { id: 8, rwId: 0, type: 'zj', text: '谁？' },
      { id: 9, rwId: 0, type: 'zj', text: '他迟疑地看我一眼，我忽然明白了', hideHeroAvatar: true },
      { id: 10, rwId: 0, type: 'zj', text: '“一切有为法，如梦幻泡影，如露亦如电，当做如是观，”' },
      { id: 11, rwId: 0, type: 'zj', text: '你从小应该在少林寺见过这话' },
      { id: 12, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '此经还说：“须菩提，过去心不可得，现在心不可得，未来心不可得。”' },
      { id: 13, rwId: 0, type: 'zj', text: '怎解？' },
      { id: 14, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '过去已逝，未来未现，现在虚妄' },
      { id: 15, rwId: 0, type: 'zj', text: '洪椿坪从何得名？' },
      { id: 16, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '上古有大椿者，以八千岁为春，八千岁为秋，而彭祖乃今以久特名' },
      { id: 17, rwId: RwIdEnum.ZhangSanFeng, type: 'rw', text: '众人匹之，不亦悲乎，此是庄子内篇逍遥游' },
      { id: 18, rwId: 0, type: 'zj', text: '于是我们两人都沉默不语，片刻之后，他告辞离去', hideHeroAvatar: true },
      { id: 19, rwId: 0, type: 'zj', text: '红颜易老，芳华刹那？春风一度桃李，终不免，江湖夜雨', hideHeroAvatar: true },
      { id: 20, rwId: 0, type: 'zj', text: '土反其宅，水归其壑，昆虫勿作，草木归其泽？' },
      { id: 21, rwId: 0, type: 'zj', text: '大约是时候了', actionType: TaskTalkActions.EndTask, actionValue: TaskEndValueEnum.Success },
    ],
  },
]
// zj - 洪椿坪，真正好名字
// ZhangSanFeng - 你怎么在这里？
// zj - 我来这里解一卦辞
// ZhangSanFeng - 什么卦辞？
// zj - 土反其宅，水归其壑，昆虫勿作，草木归其泽
// ZhangSanFeng - ……
// ZhangSanFeng - 你知道，他死了
// zj - 谁？
// zj - 他迟疑地看我一眼，我忽然明白了 // hideHeroAvatar: true
// zj - “一切有为法，如梦幻泡影，如露亦如电，当做如是观，”
// zj - 你从小应该在少林寺见过这话
// ZhangSanFeng - 此经还说：“须菩提，过去心不可得，现在心不可得，未来心不可得。”
// zj - 怎解？
// ZhangSanFeng - 过去已逝，未来未现，现在虚妄
// zj - 洪椿坪从何得名？
// ZhangSanFeng - 上古有大椿者，以八千岁为春，八千岁为秋，而彭祖乃今以久特名
// ZhangSanFeng - 众人匹之，不亦悲乎，此是庄子内篇逍遥游
// zj - 于是我们两人都沉默不语，片刻之后，他告辞离去 // hideHeroAvatar: true
// zj - 红颜易老，芳华刹那？春风一度桃李，终不免，江湖夜雨 // hideHeroAvatar: true
// zj - 土反其宅，水归其壑，昆虫勿作，草木归其泽？
// zj - 大约是时候了 // EndTask
// ---------------------------
// 次年二月初三，?在峨嵋剃度，成为比丘尼。一切有为法，如梦幻泡影，如露亦如电，当做如是观。
// ---------------------------

// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------

// zj - 上次[red]方生[/red]大师送我罗汉，或许杨大哥的消息他知道一二？
// zj - 且去少林看看，也是好的 // ** Move to ShaoLin

// zj - 欢乐趣，离别苦，就中更有痴儿女。
// zj - 君应有语，渺万里层云，千山暮雪，只影向谁去？
// JueYuan - 由爱故生忧，由爱故生怖；若离于爱者，无忧亦无怖。
// zj - 这位是？我要问他，如何才能离于爱，如何能无忧无怖？
// zj - 大师，请留步
// JueYuan - ……
// zj - [red]觉远[/red]大师？你如何变成了这等模样？谁用铁链绑住了你？
// JueYuan - ……
// zj - 我是[red]郭襄[/red]啊，大师，认不出我了么？
// JueYuan - ……
// zj - 不见了……不行，一定要查个清楚
// ZhangSanFeng - 郭姑娘
// zj - 你怎么在这儿？你师傅怎么了？
// ZhangSanFeng - 没怎么啊？
// zj - 不行，我要去后山看看
// HeShang - 阿弥陀佛，女施主请留步 // setCityGroup: CityGroupEnum.ShaoLinHouShan
// zj - 既是施主，为何要留步？
// HeShang - 这个……本寺禁地，一向禁止女眷入内
// zj - 小师傅，佛说众生平等，没有女眷，哪来你呢？
// HeShang - ……那只好得罪女施主了 // Fight with HeShang

// FangSheng - 阿弥陀佛，快快住手
// zj - [red]方生[/red]大师？
// FangSheng - 郭二姑娘所来为何？
// zj - 不知大师可否知道……
// FangSheng - 姑娘后来有否见过[red]杨过[/red]？
// zj - ……那没事了，对了，贵寺[red]觉远[/red]大师，
// zj - 不知为何被人用铁链绑住，还不得不下山挑水？
// FangSheng - [red]觉远[/red]师弟犯了戒律，自是有此惩罚，既是姑娘问起，那便免了好了
// zj - 多谢大师，后会有期
// FangSheng - 走好，不送
// FangSheng - 留步
// zj - 大师有何见教？
// FangSheng - 姑娘可曾听说“昆仑三圣”这三人？
// zj - 没听说
// FangSheng - 那不打扰了，后会有期

// ---------------------------

// ChuLiuXiang - 久仰姑娘妙解音律，不知能否为我弹奏一曲金缕曲？
// zj - 敢不从命
// 果然高明！
// 这个赠与姑娘，以谢弦歌雅意
// ** 金缕衣

// ---------------------------
// zj - 爹爹妈妈
// HuangRong - 怎么了？襄儿？
// zj - 我想出去游历一番
// HuangRong - 好呀，去什么地方？
// zj - 没什么一定的地方，四处走走
// HuangRong - 你是想找寻过儿？
// zj - ……
// GuoJing - 襄儿你放心去吧，穿上这个防身
// zj - 年轻时每次我出门游荡，母亲以哀悯的目光送我出门， // ** hideHeroAvatar: true
// zj - 而父亲的目光却让我难以捉摸。我告诉他们我要去寻找杨大哥。 // ** hideHeroAvatar: true
// zj - 我想恐怕是偏偏父亲猜出我真正的癖好，而聪明的母亲却相信了我痴情的借口。 // ** hideHeroAvatar: true
// zj - 这个世界上，有些人爱好桃李春风一杯酒念念不忘， // ** hideHeroAvatar: true
// zj - 而有些人爱好的就是江湖夜雨的漂泊。 // ** hideHeroAvatar: true
// ---------------------------
// JinLunFaWang - 小姑娘，跟我走罢！
// zj - 老和尚，为什么要跟你走啊？
// JinLunFaWang - 因为你是[red]郭靖[/red]的女儿啊！
// zj - 我看你不像蒙古人啊，为何要帮着他们？
// JinLunFaWang - 因为蒙古奉我做国师，我只好路过友情帮他们一下了
// zj - 可我不想跟你走，怎么办？
// JinLunFaWang - 那可由不得你 // Fight with JinLunFaWang

// ** 输了走下面剧情：
// JinLunFaWang - 你看，我说由不得你吧
// zj - 如是过了数日，[red]郭襄[/red]被[red]金轮法王[/red]带到蒙古营中
// zj - 却说[red]郭襄[/red]为那[red]金轮法王[/red]带去蒙古营中，初始是欲以她为质劝降[red]郭靖[/red] // ** hideHeroAvatar: true, hideNpc: true, setCityGroup: CityGroupEnum.Normal
// zj - 不料[red]郭靖[/red]势不投降，[red]金轮法王[/red]一怒之下，在城外建了一座高台，要烧死[red]郭襄[/red] // ** hideHeroAvatar: true
// {
//   rwId: RwIdEnum.JinLunFaWang,
//   type: 'rw',
//   text: '小[red]郭襄[/red]，快叫你父亲投降',
//   setCityGroup: CityGroupEnum.JiaoWai,
// },
// { rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '我从一数到十，你父亲不降，我便下令举火了。' },
// { rwId: 0, type: 'zj', text: '你爱数便数' },
// { rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '你道我当真不敢烧死你吗？' },
// { rwId: 0, type: 'zj', text: '我只觉得你挺可怜的。' },
// { rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '我可怜甚么？' },
// {
//   rwId: 0, type: 'zj',
//   text: '你打不过我爹爹妈妈，打不过我大哥哥[red]杨过[/red]，只有本事把我绑在这里。',
// },
// { rwId: 0, type: 'zj', text: '法王，我倒劝你一句话。' },
// { rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '你劝我甚么？' },
// { rwId: 0, type: 'zj', text: '如你这般为人，活在世上有何意味？不如跳下高台，图个自尽罢！' },
// { rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '你你你！[red]郭靖[/red]，我数到十，你再不投降，你的爱女便成焦炭！' },
// { rwId: 0, type: 'zj', text: '这么好玩的世界，我却快要死了。但不知杨大哥此时在那里？' },
// { rwId: RwIdEnum.YangGuo, type: 'rw', text: '襄儿莫怕，我来救你！' },
// { rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '[red]杨过[/red]？你又来坏我好事！' },
// { rwId: RwIdEnum.YangGuo, type: 'rw', text: '贼秃！你还有脸再入中原？' },
// {
//   rwId: RwIdEnum.JinLunFaWang,
//   type: 'rw',
//   text: '正要找你见个真章！'
// },
// { rwId: RwIdEnum.YangGuo, type: 'rw', text: '两人交起手来……' },
// { rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '啊哟，这贼秃忒也厉害！' },
// { rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '哎呀！什么人暗算我？' },
// { rwId: RwIdEnum.XiaoLongNv, type: 'rw', text: '过儿！' },
// { rwId: RwIdEnum.YangGuo, type: 'rw', text: '龙儿？' },
// { rwId: RwIdEnum.YangGuo, type: 'rw', text: '龙儿？怎么不见了？龙儿？龙儿！' },
// { rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '这是什么掌法？哎呀！' },
// { rwId: RwIdEnum.WuShi, type: 'rw', text: '掉下去了！掉下去了！' },
// { rwId: RwIdEnum.YangGuo, type: 'rw', text: '黯然销魂掌……黯然销魂者，唯别而已……龙儿……' },
// {
//   rwId: 0,
//   type: 'zj',
//   text: '杨大哥，你不要难过',
// },
// zj - 谢谢你… // EndTask + 4 天
// ------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

// HuangRong - 襄儿
// zj - 妈妈？爹爹呢？没一起过来？
// HuangRong - 你爹爹忙于城内守备，一时脱身不得
// HuangRong - 今日是你十六岁的生日，说说，你想要什么样礼物？
// zj - （想要很多礼物……不知道杨大哥答应送我的三样礼物是什么……） // ** hideHeroAvatar: true
// HuangRong - 有心事了？怎么不说话？
// zj - 哦，没事
// HuangRong - 你还想瞒我？少女怀春，也是正常事情；没什么不好意思
// HuangRong - 你放心，我不会追问你
// HuangRong - 今日一时也没准备什么礼物，这“[green]九花玉露丸[/green]”先送了给你吧
// zj - 多谢妈妈！
// zj - 其实，我最想要的生日礼物，是再尝尝妈妈的“谁家玉笛听落梅”
// GuoJing - 我也想尝尝
// zj - 爹爹？你也来了？
// GuoJing - 嗯，襄儿生日，为父没什么东西送你，实在惭愧
// zj - 爹爹能来襄儿就很开心了！
// GuoJing - 嗯，好吃
// HuangRong - 襄儿，你以后如果还想尝妈的手艺，只需备齐[green]兔肉</span>、<span class="green">鸽肉</span>、<span class="green">蛇胆</span>、<span class="green">黄精</span>、<span class="green">灵芝[/green]即可
// ** HuangRong 三心触发
// HuangRong - 襄儿，随我出去走走吧
// zj - （那夜，我随母亲泛舟汉水之上）
// HuangRong - 桃李春风一杯酒，江湖夜雨十年灯
// zj - 母亲突然念出这句诗，然后惘然说道，这是本朝黄山谷的佳句。 // ** hideHeroAvatar: true
// zj - 那夜嫩寒锁江，薄雾萦回，远处襄阳城寂无人声。 // ** hideHeroAvatar: true
// zj - 母亲时常茫然出神，人们说她是江湖上最聪明的女子， // ** hideHeroAvatar: true
// zj - 而只有我看得见她迷惘时时，多年以来我不得不怀疑母亲总是困惑。 // ** hideHeroAvatar: true
// zj - 她在每一个时刻无不明断如神，然而她在一生漫长的岁月中却迷惑无措。 // ** hideHeroAvatar: true

// ---------------------------
// ---------------------------
// zj - 居然有人在此操琴？ // FuQin - 这次要弹好，不然还得重来

// zj - 哪里来这许多鸟？莫非这一曲便是传说中的空山鸟语？
// zj - 不然，好似是百鸟朝凤？
// HeZuDao - 抚长剑，一扬眉，清水白石何离离？世间苦无知音，纵活千载，亦复何益？
// zj - 他这把剑倒好，难道他要舞剑？不对，这在地下画格子的，是什么剑法？
// zj - 哦，原来他是在画棋盘 // DuiYi - 要对，不然还得重来

// zj - 何不径弃中原，反取西域？
// HeZuDao - 妙！
// HeZuDao - 哪一位高人承教，在下感激不尽。
// zj - 适才听得先生雅奏，空山鸟语，百禽来朝，实深钦佩。
// zj - 又见先生画地为局，黑白交锋，引人入胜，一时忘形，忍不住多嘴，还祈见谅。
// HeZuDao - 姑娘深通琴理，若蒙不弃，愿闻清音。
// zj - 好罢，我弹便弹一曲，你却不许取笑。 // FuQin - 这次要弹好，不然还得重来

// HeZuDao - 考在槃涧，硕人之宽，独寐寤言，永矢勿谖。
// zj - 考檗在陆，硕人之轴，独寐独宿，永矢勿告。// EndTask

// ---------------------------
// HeZuDao - 姑娘，我们又见面了
// zj - 还未请教尊姓大名
// HeZuDao - 昆仑三圣，昆仑三圣[red]何足道[/red]
// zj - 你是昆仑三圣？那其余两个呢？
// HeZuDao - 昆仑三圣只有一人。
// HeZuDao - 昆仑当地的朋友说我琴剑棋三绝，是以给了我一个外号，叫作‘昆仑三圣’
// HeZuDao - 但我想这‘圣’岂是轻易称得的？
// HeZuDao - 因此我改名叫‘足道’，联起来说，便是‘昆仑三圣[red]何足道[/red]’
// zj - 你这人倒有趣
// HeZuDao - 待我再为姑娘弹奏一曲 // FuQin - 弹好才能拿卡，不弹好也能过后面的剧情
// zj - …… // EndTask

// HeZuDao - 考槃在涧，硕人之宽。蒹葭苍苍，白露为霜，所谓伊人，在天一方……
// HeZuDao - 硕人之宽，硕人之宽……溯回从之，道阻且长，溯游从之，宛在水中央……
// HeZuDao - 独寐寤言，永矢勿谖，永矢勿谖……
// zj - （他琴中说的‘伊人’，难道是我么？
// zj - 这琴韵何以如此缠绵，充满了思慕之情？）
// HeZuDao - 姑娘，后会有期 // EndTask
// ** 得到：何足道

// ---------------------------
// zj - [red]觉远[/red]大师？你师徒二人怎么会在这里？
// ZhangSanFeng - 此事说来话长……乃是那昆仑三圣……
// zj - [red]何足道[/red]？他怎么了？
// JueYuan - 唉，不必说了。
// JueYuan - 寺规如此，你这武功既是未经拜师指点，他们拿你，也情有可原……
// zj - 这帮和尚，真正不讲理！
// JueYuan - 咳！咳！
// zj - 大师，你先休息，我去弄些吃的 // DaLie - 要高分

// zj - 再弄点药给你 // CaiYao

// zj - 弄好了，大师？
// JueYuan - ……先以心使身，从人不从己，从身能从心，由己仍从人……
// zj - 大师？你先歇息歇息，吃点东西再念不迟
// JueYuan - ……合便是收，开便是放。能懂得开合，便知阴阳……
// zj - 怎么没声音了？
// FangSheng - 善哉善哉！
// zj - 大师，你也是来追他们师徒的？
// FangSheng - 阿弥陀佛，老衲尚分是非，岂是拘泥陈年旧规之人？
// FangSheng - [red]觉远[/red]师弟，达摩堂弟子正向东追寻，你们快快往西去罢！
// ZhangSanFeng - 师父醒醒！
// ZhangSanFeng - 啊？师父去世了！
// ZhangSanFeng - 师父！师父！
// zj - [red]觉远[/red]大师……
// FangSheng - 诸方无云翳，四面皆清明，微风吹香气，众山静无声。
// FangSheng - 今日大欢喜，舍却危脆身。无嗔亦无忧，宁不当欣庆？
// zj - 我也要走了，小兄弟，后会有期，倘若有缘，当可江湖再见吧
// ZhangSanFeng - 师父临终所念，当是九阳真经了……
// **得到：九阳真经

// ---------------------------

// ** 跟黄药师对话触发
// HuangYaoShi - 襄儿你看这桃花
// HuangYaoShi - 你看这风吹花落，有的落入沟渠，有的飘入坐毡，它们自己什么办法都没有啊
// HuangYaoShi - 哈哈哈哈，襄儿你看这多么好玩啊
// zj - 不知怎地，我想到的却是南华经云，大知闲闲，小知间间 // hideHeroAvatar: true
// ** 得到：黄药师
// ---------------------------

// 妈妈，原料我都找齐啦！
// 好，我这就做给你吃
// 失去：
// 嗯，好吃！谢谢妈妈！
// ** 武功+1/+2 内功 40%概率+1 轻功 40%概率+1
// DianXiaoEr - 姑娘
// zj - 何事？
// DianXiaoEr - 听说，昨日襄阳城破，郭大侠夫妇不知下落……
// zj - 啊？ // MiGong

// GuoJing - 襄儿…… // setCityGroup: CityGroupEnum.JiaoWai
// HuangRong - 襄儿……
// zj - 爹爹妈妈！
// GuoJing - 死之前还能再见你一面……真好……
// HuangRong - 襄儿，今后爹爹妈妈不能再照料你了……
// zj - 呜……爹爹……妈妈……
// GuoJing - 襄儿……珍重……
// HuangRong - 襄儿……你回家看看……
// GuoJing - 蓉儿……我们终于……终于能死在一起……
// HuangRong - 靖哥哥……
// HuangRong - 活，你背着我！死，你背着我！
// zj - 爹爹！妈妈！
// zj - 我亲眼看着父母一同死去，亲手在襄阳城边埋葬了他们。 // hideHeroAvatar: true
// zj - 夜雾弥江，废城寂无人声。 // hideHeroAvatar: true
// zj - 我站在他们的坟茔前忽然想起母亲多年前念过的那句诗 // hideHeroAvatar: true
// zj - 我已无复当年的青梅少女，而这诗，也已是前朝遗句。 // hideHeroAvatar: true
// zj - 大理……
// DuanZiYu - 姑娘可愿让在下为你算一卦？
// zj - 请
// DuanZiYu - ……
// zj - 怎么了？
// DuanZiYu - 这卦辞颇为奇怪
// zj - 卦辞是什么？
// DuanZiYu - 土反其宅，水归其壑，昆虫勿作，草木归其泽
// zj - 何解？
// DuanZiYu - 去峨嵋自知
