import { CityGroupEnum } from '../../../../constants/enums/base.enum'
import { CityIdEnum } from '../../../../constants/enums/city.enum'
import { RwIdEnum } from '../../../../constants/enums/rw.enum'
import { KeyIds } from '../../keys.interface'
import { TaskEndValueEnum, TaskTalkActions, TaskTalkIds } from '../../task.enum'
import { TaskTalk } from '../../task.interface'

export const taskTalksYangGuo: TaskTalk[] = [
  {
    id: TaskTalkIds.YangGuo_ZJ_Start,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '这花倒也开谢的漂亮' },
      { id: 2, rwId: 0, type: 'zj', text: '且走近看看。哎呀！居然被扎了一下' },
      { id: 3, rwId: 0, type: 'zj', text: '出血了……要是姑姑在身边就好了' },
      { id: 4, rwId: 0, type: 'zj', text: '啊哟！怎么这么疼？刚才明明没事的' },
      { id: 5, rwId: RwIdEnum.HeShang, type: 'rw', text: '阿弥陀佛，施主这厢有礼了' },
      { id: 6, rwId: 0, type: 'zj', text: '大师有礼，哎哟！' },
      { id: 7, rwId: RwIdEnum.HeShang, type: 'rw', text: '施主可是为这花刺所伤？' },
      { id: 8, rwId: 0, type: 'zj', text: '正是' },
      { id: 9, rwId: RwIdEnum.HeShang, type: 'rw', text: '那可大大不妙，此花名曰[green]情花[/green]……' },
      { id: 10, rwId: 0, type: 'zj', text: '[green]情花[/green]？这名字倒也别致' },
      { id: 11, rwId: RwIdEnum.HeShang, type: 'rw', text: '可惜名字虽美，却有剧毒，这毒也奇怪，只需不动男女之念，便无大碍' },
      { id: 12, rwId: 0, type: 'zj', text: '这个……却不知如何解毒？' },
      { id: 13, rwId: RwIdEnum.HeShang, type: 'rw', text: '阿弥陀佛，这个我就不知了，不过天下之大，想来当有解毒之物' },
      { id: 14, rwId: RwIdEnum.HeShang, type: 'rw', text: '施主或有机缘也未可知' },
      { id: 15, rwId: RwIdEnum.HeShang, type: 'rw', text: '告辞了' },
      { id: 16, rwId: 0, type: 'zj', text: '不行，一定要想办法解去此毒，否则日后见了姑姑也同不见，却如何是好？' },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShenDiao_JiaoWai_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '哎哟……又疼起来了，这毒还真是厉害' },
      { id: 2, rwId: RwIdEnum.ShenDiao, type: 'rw', text: '########' },
      { id: 3, rwId: 0, type: 'zj', text: '好大一只雕……诶？怎么不动？' },
      { id: 4, rwId: RwIdEnum.ShenDiao, type: 'rw', text: '########' },
      {
        id: 5,
        rwId: 0,
        type: 'zj',
        text: '好像受伤了……来，我帮你弄些草药来',
        actionType: TaskTalkActions.CaiYao,
        actionValue: TaskTalkIds.YangGuo_ZJ_ShenDiao_JiaoWai_2,
        actionFailValue: TaskTalkIds.YangGuo_ZJ_ShenDiao_JiaoWai_2,
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShenDiao_JiaoWai_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '好，来帮你敷上，对，这样就好了' },
      { id: 2, rwId: RwIdEnum.ShenDiao, type: 'rw', text: '####谢谢####' },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '诶？雕兄还通人语？要回家了，雕兄保重',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_ShenDiao_To_Seven_day }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShenDiao_JianMo_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '雕兄？' },
      { id: 2, rwId: RwIdEnum.ShenDiao, type: 'rw', text: '####走####' },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '雕兄要带我去哪里？',
        actionType: TaskTalkActions.MiGong,
        actionValue: TaskTalkIds.YangGuo_ZJ_ShenDiao_JianMo_2,
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShenDiao_JianMo_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '这么复杂……' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '看来这是一位奇人的埋骨之所，且仔细看看',
        actionType: TaskTalkActions.XunBao,
        actionValue: TaskTalkIds.YangGuo_ZJ_ShenDiao_JianMo_3,
        actionFailValue: TaskTalkIds.YangGuo_ZJ_ShenDiao_JianMo_3,
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShenDiao_JianMo_3,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '纵横江湖三十余载，杀尽仇寇，败尽英雄，天下更无抗手。' },
      { id: 2, rwId: 0, type: 'zj', text: '无可奈何，惟隐居深谷，以雕为友。呜呼，生平求一敌手而不可得，诚寂寥难堪也。' },
      { id: 3, rwId: 0, type: 'zj', text: '落款是——剑魔[red]独孤求败[/red]' },
      { id: 4, rwId: 0, type: 'zj', text: '原来雕兄还是大有来头的人物，哎哟！' },
      { id: 5, rwId: 0, type: 'zj', text: '这毒还真是厉害……他日若能埋骨于此，与独孤大侠为伴，也不失为妙事一件' },
      { id: 6, rwId: 0, type: 'zj', text: '这里是？剑冢？' },
      { id: 7, rwId: 0, type: 'zj', text: '剑魔[red]独孤求败[/red]既无敌于天下，乃埋剑于斯。' },
      { id: 8, rwId: 0, type: 'zj', text: '呜呼！群雄束手，长剑空利，不亦悲夫！' },
      { id: 9, rwId: 0, type: 'zj', text: '这位前辈好气派。诶？这里有三把剑？' },
      { id: 10, rwId: 0, type: 'zj', text: '凌厉刚猛，无坚不摧，弱冠前以之与河朔群雄争锋。' },
      { id: 11, rwId: 0, type: 'zj', text: '得到：[green]画符剑[/green]' },
      { id: 12, rwId: 0, type: 'zj', text: '[red]杨过[/red]将剑放下，又开始四处观看' },
      { id: 13, rwId: 0, type: 'zj', text: '失去：[green]画符剑[/green]' },
      { id: 14, rwId: 0, type: 'zj', text: '紫薇软剑，三十岁前所用，误伤义不祥，乃弃之深谷。' },
      { id: 15, rwId: 0, type: 'zj', text: '得到：[green]紫薇剑[/green]' },
      { id: 16, rwId: 0, type: 'zj', text: '[red]杨过[/red]将剑放下，又开始四处观看' },
      { id: 17, rwId: 0, type: 'zj', text: '失去：[green]紫薇剑[/green]' },
      { id: 18, rwId: 0, type: 'zj', text: '重剑无锋，大巧不工。四十岁前恃之横行天下。' },
      { id: 19, rwId: 0, type: 'zj', text: '重剑无锋，大巧不工；重剑无锋，大巧不工。这字里似是剑术至理啊' },
      { id: 20, rwId: 0, type: 'zj', text: '四十岁后，不滞于物，草木竹石均可为剑。自此精修，渐进于无剑胜有剑之境。' },
      { id: 21, rwId: 0, type: 'zj', text: '无剑胜有剑？似乎一时尚不能体会……' },
      {
        id: 22,
        rwId: 0,
        type: 'zj',
        text: '多谢雕兄，后会有期',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_ShenDiao_Fight_Three_day }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShenDiao_Fight_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '雕兄？' },
      {
        id: 2,
        rwId: RwIdEnum.ShenDiao,
        type: 'rw',
        text: '####来####',
        actionType: TaskTalkActions.MiGong,
        actionValue: TaskTalkIds.YangGuo_ZJ_ShenDiao_Fight_2,
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShenDiao_Fight_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '雕兄又把我带到这里干什么？' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '诶，怎么动上手了？哦，雕兄是想传我独孤大侠的剑术？',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.ShenDiao,
        actionValue: TaskTalkIds.YangGuo_ZJ_ShenDiao_Fight_3,
        actionFailValue: TaskTalkIds.YangGuo_ZJ_ShenDiao_Fight_4,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_ShenDiao_Fight_Three_day }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShenDiao_Fight_3,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '呼……多谢雕兄相让' },
      { id: 2, rwId: 0, type: 'zj', text: '独孤九剑，独孤九剑，就是如此了！' },
      { id: 3, rwId: RwIdEnum.ShenDiao, type: 'rw', text: '####拿####' },
      {
        id: 4,
        rwId: 0,
        type: 'zj',
        text: '多谢雕兄！',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_ShenDiao_FangSheng_Three_day }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShenDiao_Fight_4,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '哎呀，还是打不过雕兄……' },
      { id: 2, rwId: RwIdEnum.ShenDiao, type: 'rw', text: '####吃####' },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '这[green]蛇胆[/green]似乎颇有神效……',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.FailWithReward,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_ShenDiao_Fight_Three_day }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_FangSheng_DuanChangCao_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '[red]方生[/red]大师？' },
      { id: 2, rwId: RwIdEnum.FangSheng, type: 'rw', text: '阿弥陀佛，听说施主身中[green]情花[/green]剧毒？' },
      { id: 3, rwId: 0, type: 'zj', text: '大师如何得知？' },
      { id: 4, rwId: RwIdEnum.FangSheng, type: 'rw', text: '听一个师侄说起，这[green]情花[/green]之毒，委实难解' },
      { id: 5, rwId: 0, type: 'zj', text: '然则大师可有何指教？' },
      { id: 6, rwId: RwIdEnum.FangSheng, type: 'rw', text: '听一位舍身试毒的前辈说起，凡剧毒之物，周围必生有克制之物' },
      {
        id: 7,
        rwId: RwIdEnum.FangSheng,
        type: 'rw',
        text: '那位前辈试了多次，才发现[green]情花</span>周围，必然生有<span class="green">断肠草[/green]',
      },
      { id: 8, rwId: 0, type: 'zj', text: '所以？' },
      { id: 9, rwId: RwIdEnum.FangSheng, type: 'rw', text: '所以施主去襄阳城郊，或可挖到' },
      {
        id: 10,
        rwId: 0,
        type: 'zj',
        text: '多谢大师',
        actionType: TaskTalkActions.Move,
        moveToCity: CityIdEnum.XiangYang,
        moveToCityGroup: CityGroupEnum.JiaoWai,
        actionValue: TaskTalkIds.YangGuo_ZJ_FangSheng_DuanChangCao_2,
        setKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 16 }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_FangSheng_DuanChangCao_2,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '[green]断肠草[/green]……',
        actionType: TaskTalkActions.CaiYao,
        actionValue: TaskTalkIds.YangGuo_ZJ_FangSheng_DuanChangCao_3,
        actionFailValue: TaskTalkIds.YangGuo_ZJ_FangSheng_DuanChangCao_3,
        setCityGroup: CityGroupEnum.JiaoWai,
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_FangSheng_DuanChangCao_3,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '[green]断肠草[/green]？诶？怎么旁边还有一行字？' },
      { id: 2, rwId: 0, type: 'zj', text: '“十六年后，在此相会，夫妻情深，勿失信约。”' },
      { id: 3, rwId: 0, type: 'zj', text: '“[red]小龙女[/red]书嘱夫君杨郎，珍重万千，务求相聚。”' },
      { id: 4, rwId: 0, type: 'zj', text: '龙儿来过这里？十六年后，十六年后……' },
      {
        id: 5,
        rwId: 0,
        type: 'zj',
        text: '好！我便等你十六年！',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_ShenDiao_ShiLiuNian_Three_day }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShiLiuNian_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '一十六年……算来还早，何不去访雕兄？' },
      { id: 2, rwId: RwIdEnum.ShenDiao, type: 'rw', text: '####好####' },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '雕兄？拉着我去哪里？',
        actionType: TaskTalkActions.Move,
        moveToCity: CityIdEnum.XiaoDao,
        moveToCityGroup: CityGroupEnum.Normal,
        actionValue: TaskTalkIds.YangGuo_ZJ_ShiLiuNian_2,
        setKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 21 }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShiLiuNian_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '雕兄带我来这东海之滨干什么？' },
      {
        id: 2,
        rwId: 0,
        type: 'zj',
        text: '诶？怎么又向我出招了？',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.ShenDiao,
        actionValue: TaskTalkIds.YangGuo_ZJ_ShiLiuNian_3,
        actionFailValue: TaskTalkIds.YangGuo_ZJ_ShiLiuNian_3,
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShiLiuNian_3,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '雕兄你又是来带我练武的？' },
      { id: 2, rwId: 0, type: 'zj', text: '这里波澜壮阔，倒确实是个上佳的练武之所' },
      { id: 3, rwId: 0, type: 'zj', text: '景致也颇不错，若能与龙儿携手归隐于此……' },
      { id: 4, rwId: 0, type: 'zj', text: '唉……' },
      { id: 5, rwId: 0, type: 'zj', text: '黯然销魂者，唯别而已。黯然销魂者，唯别而已' },
      { id: 6, rwId: 0, type: 'zj', text: '对了！' },
      {
        id: 7,
        rwId: 0,
        type: 'zj',
        text: '之后某日风雨如晦，[red]杨过[/red]心有所感，悄然西去，自此足迹所至，踏遍中原江南。',
        actionType: TaskTalkActions.Move,
        moveToCity: CityIdEnum.HangZhou,
        moveToCityGroup: CityGroupEnum.Normal,
        actionValue: TaskTalkIds.YangGuo_ZJ_ShiLiuNian_4,
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_ShiLiuNian_4,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '屈指算来，已是十六载寒暑',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        upAge: 16,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_Three_day }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_GuoXiang_ShenDiaoXia_1,
    talks: [
      { id: 1, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '姑娘可曾听说过“[red]神雕侠[/red]”这名字？' },
      { id: 2, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '最近这名字倒是颇听人提起，不知为何起了这般名字？' },
      { id: 3, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '姑娘有所不知，这位大侠行侠仗义从来不说自己姓名' },
      {
        id: 4,
        rwId: RwIdEnum.DianXiaoEr,
        type: 'rw',
        text: '江湖上朋友见他和一头怪鸟形影不离，便叫他作“[red]神雕大侠[/red]”',
      },
      { id: 5, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '那又如何叫做“[red]神雕侠[/red]”了？' },
      { id: 6, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '这就是他谦虚之处了。他说“大侠”两字决不敢当' },
      {
        id: 7,
        rwId: RwIdEnum.DianXiaoEr,
        type: 'rw',
        text: '旁人只好叫他作“[red]神雕侠[/red]”，其实凭他的所作所为，有什么当不起？',
      },
      { id: 8, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '[red]神雕大侠[/red]……却不知他有何事迹？' },
      { id: 9, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '这[red]神雕侠[/red]的事迹，怕是三天三夜也说不完' },
      { id: 10, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '别的不说，据说连那奸相丁大全，也吃过他的苦头呢！' },
      { id: 11, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '却不知这[red]神雕侠[/red]是何模样……' },
      { id: 12, rwId: 0, type: 'zj', text: '其实[red]神雕侠[/red]你见过的' },
      { id: 13, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '杨大哥？难道，你就是[red]神雕侠[/red]？' },
      { id: 14, rwId: 0, type: 'zj', text: '先不说这个，有没有兴趣跟我一起去找老顽童？' },
      {
        id: 15,
        rwId: RwIdEnum.GuoXiang,
        type: 'rw',
        text: '好呀',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_Three_day }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_GuoXiang_LaoWanTong_1,
    talks: [
      { id: 1, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '你找老顽童什么事？' },
      { id: 2, rwId: 0, type: 'zj', text: '受人之托，请他去一见' },
      { id: 3, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '那也没什么难的' },
      {
        id: 4,
        rwId: 0,
        type: 'zj',
        text: '你有所不知，这人老顽童不想见，得想个什么办法，骗骗他才好',
        actionType: TaskTalkActions.Move,
        moveToCity: CityIdEnum.XiangYang,
        moveToCityGroup: CityGroupEnum.JiaoWai,
        actionValue: TaskTalkIds.YangGuo_ZJ_GuoXiang_LaoWanTong_2,
        setKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 31 }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_GuoXiang_LaoWanTong_2,
    talks: [
      { id: 1, rwId: RwIdEnum.ZhouBoTong, type: 'rw', text: '杨兄弟，怎地到今日才来找我？', setCityGroup: CityGroupEnum.JiaoWai },
      { id: 2, rwId: 0, type: 'zj', text: '老顽童，你怎地返老还童，头发反而变黑了？' },
      { id: 3, rwId: RwIdEnum.ZhouBoTong, type: 'rw', text: '这头发胡子，爱由黑变白，由白变黑，我也没有法子' },
      { id: 4, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '将来你越变越小，人人叫你小弟弟，那才好玩呢' },
      { id: 5, rwId: RwIdEnum.ZhouBoTong, type: 'rw', text: '这个……却如何是好？' },
      { id: 6, rwId: 0, type: 'zj', text: '周兄，只要你去见了一人。我保证你不会越变越小' },
      { id: 7, rwId: RwIdEnum.ZhouBoTong, type: 'rw', text: '除段皇爷和他的贵妃瑛姑之外，谁都见得' },
      { id: 8, rwId: 0, type: 'zj', text: '原来你见了他们害怕' },
      { id: 9, rwId: RwIdEnum.ZhouBoTong, type: 'rw', text: '不是，不是！老顽童没脸和他们相见' },
      { id: 10, rwId: 0, type: 'zj', text: '难道他命在旦夕，你也不肯伸手相救么？' },
      { id: 11, rwId: RwIdEnum.ZhouBoTong, type: 'rw', text: '这个……' },
      { id: 12, rwId: RwIdEnum.ZhouBoTong, type: 'rw', text: '不对，不对，这小姑娘笑吟吟的，定然没有这事' },
      { id: 13, rwId: 0, type: 'zj', text: '说不得只好请教一二了，如果周兄输了，就跟我去见瑛姑成不？' },
      { id: 14, rwId: RwIdEnum.ZhouBoTong, type: 'rw', text: '不成，不成' },
      {
        id: 15,
        rwId: 0,
        type: 'zj',
        text: '这个……',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.ZhouBoTong,
        actionValue: TaskTalkIds.YangGuo_ZJ_GuoXiang_LaoWanTong_3,
        actionFailValue: TaskTalkIds.YangGuo_ZJ_GuoXiang_LaoWanTong_3,
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_GuoXiang_LaoWanTong_3,
    talks: [
      { id: 1, rwId: RwIdEnum.ZhouBoTong, type: 'rw', text: '杨兄弟这掌法叫什么名堂？' },
      { id: 2, rwId: 0, type: 'zj', text: '我告诉你，你随我去好不好？' },
      { id: 3, rwId: RwIdEnum.ZhouBoTong, type: 'rw', text: '不好，不好。你这掌法虽妙，总不如我这一手画圆一手为方神奇' },
      { id: 4, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '这有何难？我也可以' },
      {
        id: 5,
        rwId: RwIdEnum.ZhouBoTong,
        type: 'rw',
        text: '小姑娘口出大言，你且试试？能行我便跟你去',
        actionType: TaskTalkActions.DaLie,
        dlType: 'zyhb',
        actionValue: TaskTalkIds.YangGuo_ZJ_GuoXiang_LaoWanTong_4,
        actionFailValue: TaskTalkIds.YangGuo_ZJ_GuoXiang_LaoWanTong_4,
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_GuoXiang_LaoWanTong_4,
    talks: [
      { id: 1, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '怎么样？' },
      { id: 2, rwId: RwIdEnum.ZhouBoTong, type: 'rw', text: '啊……去就去！' },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '谢谢你啦',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_Three_day }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_GuoXiang_Leave_1,
    talks: [
      { id: 1, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '杨大哥，我要走了' },
      { id: 2, rwId: 0, type: 'zj', text: '珍重' },
      { id: 3, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '我还有一事，你和你夫人什么时候相会啊？' },
      { id: 4, rwId: 0, type: 'zj', text: '当是在一年后吧' },
      { id: 5, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '你会到你夫人后，叫人带个讯到襄阳给我，也好让我代你欢喜' },
      { id: 6, rwId: 0, type: 'zj', text: '谢谢你……' },
      { id: 7, rwId: 0, type: 'zj', text: '你今年当是十六了吧？真快……一十六年了。' },
      { id: 8, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '杨大哥，我真的要走了' },
      { id: 9, rwId: 0, type: 'zj', text: '这里有三枚金针，你先拿着，半年后该是你生日了吧？' },
      { id: 10, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '你记得真清楚' },
      { id: 11, rwId: 0, type: 'zj', text: '等你生日时候，我再来襄阳，送你三样礼物' },
      {
        id: 12,
        rwId: RwIdEnum.GuoXiang,
        type: 'rw',
        text: '多谢杨大哥',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_Three_day }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_1,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '疑似快到[red]郭襄[/red]小妹子的寿辰了……' },
      { id: 2, rwId: 0, type: 'zj', text: '该准备些什么礼物好呢？' },
      {
        id: 3,
        rwId: 0,
        type: 'zj',
        text: '对了，上少林一趟',
        actionType: TaskTalkActions.Move,
        moveToCity: CityIdEnum.ShaoLin,
        moveToCityGroup: CityGroupEnum.Normal,
        actionValue: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_11,
        setKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 41 }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_11,
    talks: [
      { id: 1, rwId: RwIdEnum.FangSheng, type: 'rw', text: '阿弥陀佛，杨大侠有何贵干？' },
      { id: 2, rwId: 0, type: 'zj', text: '想请大师相赠一物' },
      { id: 3, rwId: RwIdEnum.FangSheng, type: 'rw', text: '那套罗汉' },
      { id: 4, rwId: 0, type: 'zj', text: '按你我交情，本该赠与你，不过……' },
      {
        id: 5,
        rwId: RwIdEnum.FangSheng,
        type: 'rw',
        text: '许久不见，不知你功夫如何了？且让我相试一下',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.FangSheng,
        actionValue: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_3,
        actionFailValue: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_2,
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_2,
    talks: [
      {
        id: 1,
        rwId: RwIdEnum.FangSheng,
        type: 'rw',
        text: '承让',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Fail,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_Three_day }, { keyId: KeyIds.YangGuo_ZJ_Three_day_LiWu_Prepare }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_3,
    talks: [
      { id: 1, rwId: RwIdEnum.FangSheng, type: 'rw', text: '好功夫！想来你要这罗汉也无用，定然是……吧？' },
      { id: 2, rwId: 0, type: 'zj', text: '大师明见' },
      { id: 3, rwId: RwIdEnum.FangSheng, type: 'rw', text: '呵呵，我就借花献佛，到时候亲自走一趟襄阳，把这个送给郭二姑娘吧' },
      { id: 4, rwId: 0, type: 'zj', text: '如此有劳大师了' },
      {
        id: 5,
        rwId: 0,
        type: 'zj',
        text: '还有一样……且去武当后山看看',
        actionType: TaskTalkActions.Move,
        moveToCity: CityIdEnum.WuDang,
        moveToCityGroup: CityGroupEnum.Normal,
        actionValue: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_4,
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_4,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '我来找找……',
        actionType: TaskTalkActions.CaiYao,
        actionValue: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_5,
        actionFailValue: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_5,
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_LiWu_Prepare_5,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '终于采到这个了……',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_ZhuShou_day }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_GuoXiang_ZhuShou_1,
    talks: [
      {
        id: 1,
        rwId: 0,
        type: 'zj',
        text: '差不多该出发去襄阳了',
        actionType: TaskTalkActions.Move,
        moveToCity: CityIdEnum.XiangYang,
        moveToCityGroup: CityGroupEnum.Normal,
        actionValue: TaskTalkIds.YangGuo_ZJ_GuoXiang_ZhuShou_2,
        setKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 46 }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_GuoXiang_ZhuShou_2,
    talks: [
      { id: 1, rwId: RwIdEnum.FangSheng, type: 'rw', text: '姑娘请看，这是敝寺特制铁罗汉，一套罗汉拳打得也颇有声有色' },
      { id: 2, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '多谢大师' },
      { id: 3, rwId: RwIdEnum.FangSheng, type: 'rw', text: '不必谢我，老纳只是借花献佛，送你这礼物的另有其人' },
      { id: 4, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '杨大哥？他人现在何处？' },
      { id: 5, rwId: RwIdEnum.FangSheng, type: 'rw', text: '请往外看' },
      { id: 6, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '烟火？' },
      { id: 7, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '这烟火倒像是字？“恭”，“祝”？' },
      { id: 8, rwId: RwIdEnum.FangSheng, type: 'rw', text: '却是“恭祝郭二姑娘多福多寿”十个字' },
      { id: 9, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '多谢杨大哥……不知第三件礼物是什么……' },
      { id: 10, rwId: 0, type: 'zj', text: '你过会便知' },
      { id: 11, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '杨大哥，你来了！' },
      { id: 12, rwId: RwIdEnum.GuoJing, type: 'rw', text: '过儿，一别十余年不见' },
      { id: 13, rwId: 0, type: 'zj', text: '过儿见过郭伯伯' },
      { id: 14, rwId: RwIdEnum.WuShi, type: 'rw', text: '郭大侠，南面似乎有火光' },
      { id: 15, rwId: RwIdEnum.GuoJing, type: 'rw', text: '南阳大火？' },
      { id: 16, rwId: 0, type: 'zj', text: '正是，这是送给襄儿的第三件薄礼，烧了蒙古二十万大军的粮草。' },
      { id: 17, rwId: RwIdEnum.GuoJing, type: 'rw', text: '过儿你立此大功，襄阳军民感激不尽' },
      {
        id: 18,
        rwId: 0,
        type: 'zj',
        text: '郭伯伯说哪里话，过儿尚有事在身，就此告辞',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_XiangYang_JinLunFaWang }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_GuoXiang_JinLunFaWang_1,
    talks: [
      { id: 1, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '有个消息，好叫客官知道' },
      { id: 2, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '据说郭大侠幼女被一个叫什么金什么法王的擒住了' },
      { id: 3, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '那法王还在襄阳城外建了一座高台，说要烧死郭二姑娘呢！' },
      {
        id: 4,
        rwId: 0,
        type: 'zj',
        text: '不好！',
        actionType: TaskTalkActions.Move,
        moveToCity: CityIdEnum.XiangYang,
        moveToCityGroup: CityGroupEnum.JiaoWai,
        actionValue: TaskTalkIds.YangGuo_ZJ_GuoXiang_JinLunFaWang_2,
        setKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 51 }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_GuoXiang_JinLunFaWang_2,
    talks: [
      {
        id: 1,
        rwId: RwIdEnum.JinLunFaWang,
        type: 'rw',
        text: '小[red]郭襄[/red]，快叫你父亲投降',
        setCityGroup: CityGroupEnum.JiaoWai,
      },
      { id: 2, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '我从一数到十，你父亲不降，我便下令举火了。' },
      { id: 3, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '你爱数便数' },
      { id: 4, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '你道我当真不敢烧死你吗？' },
      { id: 5, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '我只觉得你挺可怜的。' },
      { id: 6, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '我可怜甚么？' },
      {
        id: 7,
        rwId: RwIdEnum.GuoXiang,
        type: 'rw',
        text: '你打不过我爹爹妈妈，打不过我大哥哥[red]杨过[/red]，只有本事把我绑在这里。',
      },
      { id: 8, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '法王，我倒劝你一句话。' },
      { id: 9, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '你劝我甚么？' },
      { id: 10, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '如你这般为人，活在世上有何意味？不如跳下高台，图个自尽罢！' },
      { id: 11, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '你你你！[red]郭靖[/red]，我数到十，你再不投降，你的爱女便成焦炭！' },
      { id: 12, rwId: RwIdEnum.GuoXiang, type: 'rw', text: '这么好玩的世界，我却快要死了。但不知杨大哥此时在那里？' },
      { id: 13, rwId: 0, type: 'zj', text: '襄儿莫怕，我来救你！' },
      { id: 14, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '[red]杨过[/red]？你又来坏我好事！' },
      { id: 15, rwId: 0, type: 'zj', text: '贼秃！你还有脸再入中原？' },
      {
        id: 16,
        rwId: RwIdEnum.JinLunFaWang,
        type: 'rw',
        text: '正要找你见个真章！',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.JinLunFaWang,
        actionValue: TaskTalkIds.YangGuo_ZJ_GuoXiang_JinLunFaWang_3,
        setKey: [
          { keyId: KeyIds.YangGuo_ZJ_Main, value: 52 },
          { keyId: KeyIds.YangGuo_ZJ_No_GuoXiang, value: 1 },
        ],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_GuoXiang_JinLunFaWang_3,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '啊哟，这贼秃忒也厉害！' },
      { id: 2, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '哎呀！什么人暗算我？' },
      { id: 3, rwId: RwIdEnum.XiaoLongNv, type: 'rw', text: '过儿！' },
      { id: 4, rwId: 0, type: 'zj', text: '龙儿？' },
      { id: 5, rwId: 0, type: 'zj', text: '龙儿？怎么不见了？龙儿？龙儿！' },
      { id: 6, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '这是什么掌法？哎呀！' },
      { id: 7, rwId: RwIdEnum.WuShi, type: 'rw', text: '掉下去了！掉下去了！' },
      { id: 8, rwId: 0, type: 'zj', text: '黯然销魂掌……黯然销魂者，唯别而已……龙儿……' },
      {
        id: 9,
        rwId: RwIdEnum.GuoXiang,
        type: 'rw',
        text: '杨大哥，你不要难过',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
        setKeyDay: [{ keyId: KeyIds.YangGuo_ZJ_New_Three_day }],
        setKey: [{ keyId: KeyIds.YangGuo_ZJ_No_GuoXiang, value: 0 }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_JieJu_1,
    talks: [
      { id: 1, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '客官' },
      { id: 2, rwId: 0, type: 'zj', text: '又怎么？' },
      { id: 3, rwId: RwIdEnum.DianXiaoEr, type: 'rw', text: '据说蒙古大汗亲征，数十万大军围困襄阳，郭大侠说，誓与城共存亡' },
      { id: 4, rwId: 0, type: 'zj', text: '哦' },
      {
        id: 5,
        rwId: 0,
        type: 'zj',
        text: '遍寻龙儿不着……何不去助郭伯伯一臂之力？能战死疆场，也不失男儿本色',
        actionType: TaskTalkActions.Move,
        moveToCity: CityIdEnum.XiangYang,
        moveToCityGroup: CityGroupEnum.Normal,
        actionValue: TaskTalkIds.YangGuo_ZJ_JieJu_2,
        setKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 56 }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_JieJu_2,
    talks: [
      { id: 1, rwId: 0, type: 'zj', text: '好像激战正酣，那面旗下莫非就是所谓大汗蒙哥？' },
      { id: 2, rwId: 0, type: 'zj', text: '何妨擒贼擒王？' },
      { id: 3, rwId: 0, type: 'zj', text: '你这贼秃，怎么还没摔死？' },
      {
        id: 4,
        rwId: RwIdEnum.JinLunFaWang,
        type: 'rw',
        text: '少废话，拿命来吧！',
        actionType: TaskTalkActions.Fight,
        fightRwId: RwIdEnum.JinLunFaWang,
        actionValue: TaskTalkIds.YangGuo_ZJ_JieJu_3,
        setKey: [{ keyId: KeyIds.YangGuo_ZJ_Main, value: 56 }],
      },
    ],
  },
  {
    id: TaskTalkIds.YangGuo_ZJ_JieJu_3,
    talks: [
      { id: 1, rwId: RwIdEnum.JinLunFaWang, type: 'rw', text: '你……' },
      { id: 2, rwId: 0, type: 'zj', text: '不好，那大汗要逃！' },
      { id: 3, rwId: 0, type: 'zj', text: '追之不及……看我的！' },
      { id: 4, rwId: 0, type: 'zj', text: '[red]杨过[/red]飞步抢上，左手早已拾得一块拳头大小的石块' },
      { id: 5, rwId: 0, type: 'zj', text: '呼的一声掷出，正中蒙哥后心。蒙哥筋折骨断，倒撞下马，登时毙命。' },
      { id: 6, rwId: 0, type: 'zj', text: '蒙古兵将见大汗落马，哪里还有心恋战，一路溃不成军，襄阳再次得保太平。' },
      { id: 7, rwId: RwIdEnum.GuoJing, type: 'rw', text: '过儿，你今日立此大功，天下扬名固不待言，合城军民，无不重感恩德' },
      { id: 8, rwId: 0, type: 'zj', text: '郭伯伯，小侄幼时若非蒙你抚养教诲，焉能得有今日？' },
      { id: 9, rwId: RwIdEnum.GuoJing, type: 'rw', text: '过儿，且随我入城，共饮三杯' },
      {
        id: 10,
        rwId: RwIdEnum.GuoJing,
        type: 'rw',
        text: '过儿？',
        actionType: TaskTalkActions.EndTask,
        actionValue: TaskEndValueEnum.Success,
      },
    ],
  },
]
