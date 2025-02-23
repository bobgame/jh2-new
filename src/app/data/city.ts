import { CityIdEnum } from '../constants/enums/city.enum'
import { RwIdEnum } from '../constants/enums/rw.enum'
import { WpIdEnum } from '../constants/enums/wp.enum'
import { City } from '../constants/interfaces/city.interface'

/**
 * 昆仑 kunlun
 * 长安
 * 峨眉
 * 大理
 * 武当
 * 洛阳
 * 华山
 * 京城
 * 泰山
 * 少林
 * 襄阳
 * 长沙
 * 苏州
 * 杭州
 */
export const defaultCities: City[] = [
  {
    id: CityIdEnum.KunLun,
    name: '昆仑',
    key: 'kunlun',
    img: 'kunlun',
    spx: 1,
    spp: [],
    sleep: 4100,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '光明顶',
        key: 'gmd',
        sp: true,
        npcs: [
          { id: RwIdEnum.DuGuQiuBai, rate: 20 },
          { id: RwIdEnum.ShenDiao, rate: 50 },
          { id: RwIdEnum.YuLuoCha, rate: 50 },
          { id: RwIdEnum.HeZuDao, rate: 50 },
        ],
      },
    ],
  },
  {
    id: CityIdEnum.ChangAn,
    name: '长安',
    key: 'changan',
    img: 'changan',
    spx: 945 / 915,
    spp: [{ id: WpIdEnum.PanTao, price: 10000 }],
    sleep: 4100,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '郊外',
        key: 'jw',
        npcs: [
          { id: RwIdEnum.ChuLiuXiang, rate: 25 },
          { id: RwIdEnum.GuoXiang, rate: 25 },
          { id: RwIdEnum.LingHuChong, rate: 25 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 25 },
          { id: RwIdEnum.LuXiaoFeng, rate: 25 },
        ],
      },
      { id: 2, name: '当铺', key: 'dp', npcs: [] },
      { id: 3, name: '武馆', key: 'wg', npcs: [] },
      {
        id: 4,
        name: '赌场',
        key: 'dc',
        npcs: [
          { id: RwIdEnum.LingHuChong, rate: 35 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 25 },
          { id: RwIdEnum.ZhuiMing, rate: 25 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 40 },
          { id: RwIdEnum.LuXiaoFeng, rate: 60 },
        ],
      },
      { id: 5, name: '客栈', key: 'kz', npcs: [] },
      { id: 6, name: '民家', key: 'mj', npcs: [{ id: RwIdEnum.LiXunHuan, rate: 50 }] },
      {
        id: 7,
        name: '酒馆',
        key: 'jg',
        npcs: [
          { id: RwIdEnum.FengSiNiang, rate: 15 },
          { id: RwIdEnum.SuRongRong, rate: 15 },
          { id: RwIdEnum.SuYing, rate: 15 },
          { id: RwIdEnum.LengXie, rate: 20 },
          { id: RwIdEnum.ZhuiMing, rate: 20 },
          { id: RwIdEnum.WuQing, rate: 20 },
          { id: RwIdEnum.TieShou, rate: 20 },
          { id: RwIdEnum.ShaMan, rate: 20 },
          { id: RwIdEnum.HuaManLou, rate: 30 },
          { id: RwIdEnum.ZhouBoTong, rate: 30 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 15 },
          { id: RwIdEnum.RenYingYing, rate: 15 },
          { id: RwIdEnum.GuoXiang, rate: 30 },
          { id: RwIdEnum.HuangYaoShi, rate: 30 },
          { id: RwIdEnum.MuDaoRen, rate: 30 },
          { id: RwIdEnum.ChuLiuXiang, rate: 30 },
          { id: RwIdEnum.LaoShiHeShang, rate: 30 },
          { id: RwIdEnum.LingHuChong, rate: 30 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 30 },
          { id: RwIdEnum.LiXunHuan, rate: 25 },
        ],
      },
    ],
  },
  {
    id: CityIdEnum.EMei,
    name: '峨眉',
    key: 'emei',
    img: 'emei',
    spx: 1,
    spp: [],
    sleep: 4100,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '后山',
        key: 'emhs',
        sp: true,
        npcs: [
          { id: RwIdEnum.DuGuQiuBai, rate: 20 },
          { id: RwIdEnum.ShenDiao, rate: 30 },
          { id: RwIdEnum.YangGuo, rate: 30 },
          { id: RwIdEnum.GuoXiang, rate: 30 },
          { id: RwIdEnum.SunXiuQing, rate: 65 },
        ],
      },
    ],
  },
  {
    id: CityIdEnum.DaLi,
    name: '大理',
    key: 'dali',
    img: 'dali',
    spx: 630 / 915,
    spp: [{ id: WpIdEnum.PuEr, price: 10000 }],
    sleep: 3600,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '郊外',
        key: 'jw',
        npcs: [
          { id: RwIdEnum.LuXiaoFeng, rate: 30 },
          { id: RwIdEnum.ChuLiuXiang, rate: 20 },
          { id: RwIdEnum.LingHuChong, rate: 40 },
          { id: RwIdEnum.GuoXiang, rate: 30 },
          { id: RwIdEnum.YangGuo, rate: 30 },
          { id: RwIdEnum.DuanZiYu, rate: 30 },
        ],
      },
      { id: 2, name: '当铺', key: 'dp', npcs: [{ id: RwIdEnum.DuanZiYu, rate: 100 }] },
      { id: 3, name: '武馆', key: 'wg', npcs: [] },
      {
        id: 4,
        name: '赌场',
        key: 'dc',
        npcs: [
          { id: RwIdEnum.LingHuChong, rate: 35 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 25 },
          { id: RwIdEnum.ZhuiMing, rate: 25 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 40 },
          { id: RwIdEnum.LuXiaoFeng, rate: 60 },
        ],
      },
      { id: 5, name: '客栈', key: 'kz', npcs: [] },
      { id: 6, name: '民家', key: 'mj', npcs: [{ id: RwIdEnum.DuanZiYu, rate: 90 }] },
      {
        id: 7,
        name: '酒馆',
        key: 'jg',
        npcs: [
          { id: RwIdEnum.LengXie, rate: 25 },
          { id: RwIdEnum.WuQing, rate: 25 },
          { id: RwIdEnum.TieShou, rate: 25 },
          { id: RwIdEnum.ZhuiMing, rate: 25 },
          { id: RwIdEnum.ShaMan, rate: 25 },
          { id: RwIdEnum.GuoXiang, rate: 32 },
          { id: RwIdEnum.HuangYaoShi, rate: 32 },
          { id: RwIdEnum.HuaManLou, rate: 32 },
          { id: RwIdEnum.MuDaoRen, rate: 32 },
          { id: RwIdEnum.FengSiNiang, rate: 32 },
          { id: RwIdEnum.LaoShiHeShang, rate: 32 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 32 },
          { id: RwIdEnum.SuRongRong, rate: 32 },
          { id: RwIdEnum.SuYing, rate: 52 },
          { id: RwIdEnum.ZhouBoTong, rate: 32 },
          { id: RwIdEnum.ChuLiuXiang, rate: 32 },
          { id: RwIdEnum.RenYingYing, rate: 32 },
          { id: RwIdEnum.LingHuChong, rate: 32 },
          { id: RwIdEnum.LiXunHuan, rate: 32 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 65 },
        ],
      },
    ],
  },
  {
    id: CityIdEnum.WuDang,
    name: '武当',
    key: 'wudang',
    img: 'wudang',
    spx: 1,
    spp: [],
    sleep: 4100,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '后山',
        key: 'wdhs',
        sp: true,
        npcs: [
          { id: RwIdEnum.DuGuQiuBai, rate: 20 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 20 },
          { id: RwIdEnum.ChuLiuXiang, rate: 30 },
          { id: RwIdEnum.ShenDiao, rate: 30 },
          { id: RwIdEnum.YangGuo, rate: 30 },
        ],
      },
      {
        id: 2,
        name: '真武殿',
        key: 'zwd',
        sp: true,
        npcs: [
          { id: RwIdEnum.ZhangSanFeng, rate: 50 },
          { id: RwIdEnum.MuDaoRen, rate: 50 },
        ],
      },
      { id: 3, name: '解剑池', key: 'jjc', sp: true, npcs: [{ id: RwIdEnum.ZhuoFeiFan, rate: 90 }] },
    ],
  },
  {
    id: CityIdEnum.LuoYang,
    name: '洛阳',
    key: 'luoyang',
    img: 'luoyang',
    spx: 1290 / 915,
    spp: [{ id: WpIdEnum.JinJu, price: 5000 }],
    sleep: 4700,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '郊外',
        key: 'jw',
        npcs: [
          { id: RwIdEnum.XiaoShiYiLang, rate: 30 },
          { id: RwIdEnum.LiXunHuan, rate: 40 },
          { id: RwIdEnum.LingHuChong, rate: 40 },
          { id: RwIdEnum.YangGuo, rate: 30 },
          { id: RwIdEnum.LuXiaoFeng, rate: 40 },
        ],
      },
      { id: 2, name: '当铺', key: 'dp', npcs: [] },
      { id: 3, name: '武馆', key: 'wg', npcs: [] },
      {
        id: 4,
        name: '赌场',
        key: 'dc',
        npcs: [
          { id: RwIdEnum.LingHuChong, rate: 35 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 25 },
          { id: RwIdEnum.ZhuiMing, rate: 25 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 40 },
          { id: RwIdEnum.LuXiaoFeng, rate: 60 },
        ],
      },
      { id: 5, name: '客栈', key: 'kz', npcs: [] },
      {
        id: 6,
        name: '民家',
        key: 'mj',
        npcs: [],
      },
      {
        id: 7,
        name: '酒馆',
        key: 'jg',
        npcs: [
          { id: RwIdEnum.SuRongRong, rate: 15 },
          { id: RwIdEnum.TieShou, rate: 30 },
          { id: RwIdEnum.WuQing, rate: 30 },
          { id: RwIdEnum.LengXie, rate: 30 },
          { id: RwIdEnum.ZhuiMing, rate: 30 },
          { id: RwIdEnum.ShaMan, rate: 30 },
          { id: RwIdEnum.SuYing, rate: 30 },
          { id: RwIdEnum.HuangYaoShi, rate: 15 },
          { id: RwIdEnum.ChuLiuXiang, rate: 30 },
          { id: RwIdEnum.HuaManLou, rate: 50 },
          { id: RwIdEnum.ZhouBoTong, rate: 30 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 30 },
          { id: RwIdEnum.MuDaoRen, rate: 50 },
          { id: RwIdEnum.FengSiNiang, rate: 40 },
          { id: RwIdEnum.GuoXiang, rate: 30 },
          { id: RwIdEnum.LaoShiHeShang, rate: 50 },
          { id: RwIdEnum.LingHuChong, rate: 30 },
          { id: RwIdEnum.LiXunHuan, rate: 30 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 45 },
          { id: RwIdEnum.RenYingYing, rate: 15 },
        ],
      },
    ],
  },
  {
    id: CityIdEnum.HuaShan,
    name: '华山',
    key: 'huashan',
    img: 'huashan',
    spx: 1,
    spp: [],
    sleep: 4100,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '思过崖',
        key: 'sgy',
        sp: true,
        npcs: [
          { id: RwIdEnum.DuGuQiuBai, rate: 20 },
          { id: RwIdEnum.ShenDiao, rate: 55 },
          { id: RwIdEnum.GuoXiang, rate: 30 },
          { id: RwIdEnum.HeZuDao, rate: 15 },
          { id: RwIdEnum.RenYingYing, rate: 50 },
          { id: RwIdEnum.LingHuChong, rate: 50 },
        ],
      },
      { id: 2, name: '正气堂', key: 'zqt', sp: true, npcs: [{ id: RwIdEnum.YueBuQun, rate: 90 }] },
    ],
  },
  {
    id: CityIdEnum.JingCheng,
    name: '京城',
    key: 'jingcheng',
    img: 'jingcheng',
    spx: 1275 / 915,
    spp: [{ id: WpIdEnum.KaoYa, price: 8400 }],
    sleep: 4600,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '郊外',
        key: 'jw',
        npcs: [
          { id: RwIdEnum.XiaoShiYiLang, rate: 20 },
          { id: RwIdEnum.LiXunHuan, rate: 30 },
          { id: RwIdEnum.LingHuChong, rate: 20 },
          { id: RwIdEnum.GuoXiang, rate: 20 },
          { id: RwIdEnum.LuXiaoFeng, rate: 60 },
        ],
      },
      { id: 2, name: '当铺', key: 'dp', npcs: [] },
      { id: 3, name: '武馆', key: 'wg', npcs: [] },
      {
        id: 4,
        name: '赌场',
        key: 'dc',
        npcs: [
          { id: RwIdEnum.LingHuChong, rate: 35 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 25 },
          { id: RwIdEnum.ZhuiMing, rate: 25 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 40 },
          { id: RwIdEnum.LuXiaoFeng, rate: 60 },
        ],
      },
      { id: 5, name: '客栈', key: 'kz', npcs: [] },
      {
        id: 6,
        name: '民家',
        key: 'mj',
        npcs: [
          { id: RwIdEnum.WuQing, rate: 60 },
          { id: RwIdEnum.TieShou, rate: 60 },
          { id: RwIdEnum.LengXie, rate: 60 },
          { id: RwIdEnum.ZhuiMing, rate: 60 },
          { id: RwIdEnum.WangXiaoShi, rate: 60 },
          { id: RwIdEnum.ZhuGeXianSheng, rate: 90 },
        ],
      },
      {
        id: 7,
        name: '酒馆',
        key: 'jg',
        npcs: [
          { id: RwIdEnum.SuRongRong, rate: 15 },
          { id: RwIdEnum.TieShou, rate: 30 },
          { id: RwIdEnum.WuQing, rate: 30 },
          { id: RwIdEnum.LengXie, rate: 30 },
          { id: RwIdEnum.ZhuiMing, rate: 30 },
          { id: RwIdEnum.ShaMan, rate: 30 },
          { id: RwIdEnum.SuYing, rate: 30 },
          { id: RwIdEnum.HuangYaoShi, rate: 15 },
          { id: RwIdEnum.ChuLiuXiang, rate: 20 },
          { id: RwIdEnum.HuaManLou, rate: 50 },
          { id: RwIdEnum.ZhouBoTong, rate: 30 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 30 },
          { id: RwIdEnum.MuDaoRen, rate: 50 },
          { id: RwIdEnum.FengSiNiang, rate: 40 },
          { id: RwIdEnum.GuoXiang, rate: 30 },
          { id: RwIdEnum.LaoShiHeShang, rate: 50 },
          { id: RwIdEnum.LingHuChong, rate: 30 },
          { id: RwIdEnum.LiXunHuan, rate: 30 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 45 },
          { id: RwIdEnum.RenYingYing, rate: 15 },
        ],
      },
    ],
  },
  {
    id: CityIdEnum.TaiShan,
    name: '泰山',
    key: 'taishan',
    img: 'taishan',
    spx: 1,
    spp: [],
    sleep: 4100,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '观日峰',
        key: 'grf',
        sp: true,
        npcs: [
          { id: RwIdEnum.DuGuQiuBai, rate: 10 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 20 },
          { id: RwIdEnum.LiXunHuan, rate: 30 },
          { id: RwIdEnum.GuoXiang, rate: 30 },
          { id: RwIdEnum.ShenDiao, rate: 30 },
          { id: RwIdEnum.ChuLiuXiang, rate: 35 },
        ],
      },
    ],
  },
  {
    id: CityIdEnum.ShaoLin,
    name: '少林',
    key: 'shaolin',
    img: 'shaolin',
    spx: 1,
    spp: [],
    sleep: 4100,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '后山',
        key: 'slhs',
        sp: true,
        npcs: [
          { id: RwIdEnum.XiaoShiYiLang, rate: 30 },
          { id: RwIdEnum.DuGuQiuBai, rate: 20 },
          { id: RwIdEnum.ShenDiao, rate: 30 },
          { id: RwIdEnum.YangGuo, rate: 30 },
          { id: RwIdEnum.HeZuDao, rate: 15 },
          { id: RwIdEnum.ZhangSanFeng, rate: 30 },
          { id: RwIdEnum.JueYuan, rate: 30 },
          { id: RwIdEnum.LaoShiHeShang, rate: 50 },
        ],
      },
      {
        id: 2,
        name: '罗汉堂',
        key: 'lht',
        sp: true,
        npcs: [
          { id: RwIdEnum.GuoXiang, rate: 30 },
          { id: RwIdEnum.HeShang, rate: 100 },
        ],
      },
      {
        id: 3,
        name: '达摩院',
        key: 'dmy',
        sp: true,
        npcs: [
          { id: RwIdEnum.LiXunHuan, rate: 30 },
          { id: RwIdEnum.LingHuChong, rate: 40 },
          { id: RwIdEnum.FangSheng, rate: 100 },
        ],
      },
      {
        id: 4,
        name: '藏经阁',
        key: 'cjg',
        sp: true,
        npcs: [
          { id: RwIdEnum.SiKongZhaiXing, rate: 45 },
          { id: RwIdEnum.WuMingLaoSeng, rate: 45 },
        ],
      },
      {
        id: 5,
        name: '大殿',
        key: 'sldd',
        sp: true,
        npcs: [
          { id: RwIdEnum.HuaManLou, rate: 30 },
          { id: RwIdEnum.FangZheng, rate: 90 },
        ],
      },
    ],
  },
  {
    id: CityIdEnum.XiangYang,
    name: '襄阳',
    key: 'xiangyang',
    img: 'xiangyang',
    spx: 690 / 915,
    spp: [{ id: WpIdEnum.MaiSui, price: 800 }],
    sleep: 3700,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '郊外',
        key: 'jw',
        npcs: [
          { id: RwIdEnum.XiaoShiYiLang, rate: 10 },
          { id: RwIdEnum.LingHuChong, rate: 20 },
          { id: RwIdEnum.GuoXiang, rate: 35 },
          { id: RwIdEnum.YangGuo, rate: 35 },
        ],
      },
      { id: 2, name: '当铺', key: 'dp', npcs: [] },
      { id: 3, name: '武馆', key: 'wg', npcs: [] },
      {
        id: 4,
        name: '赌场',
        key: 'dc',
        npcs: [
          { id: RwIdEnum.LingHuChong, rate: 35 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 25 },
          { id: RwIdEnum.ZhuiMing, rate: 25 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 40 },
          { id: RwIdEnum.LuXiaoFeng, rate: 60 },
        ],
      },
      { id: 5, name: '客栈', key: 'kz', npcs: [] },
      {
        id: 6,
        name: '民家',
        key: 'mj',
        npcs: [
          { id: RwIdEnum.GuoJing, rate: 95 },
          { id: RwIdEnum.HuangRong, rate: 60 },
          { id: RwIdEnum.GuoXiang, rate: 35 },
        ],
      },
      {
        id: 7,
        name: '酒馆',
        key: 'jg',
        npcs: [
          { id: RwIdEnum.SuRongRong, rate: 15 },
          { id: RwIdEnum.TieShou, rate: 30 },
          { id: RwIdEnum.WuQing, rate: 30 },
          { id: RwIdEnum.LengXie, rate: 30 },
          { id: RwIdEnum.ZhuiMing, rate: 30 },
          { id: RwIdEnum.ShaMan, rate: 30 },
          { id: RwIdEnum.SuYing, rate: 30 },
          { id: RwIdEnum.HuangYaoShi, rate: 30 },
          { id: RwIdEnum.ChuLiuXiang, rate: 20 },
          { id: RwIdEnum.HuaManLou, rate: 50 },
          { id: RwIdEnum.ZhouBoTong, rate: 30 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 30 },
          { id: RwIdEnum.MuDaoRen, rate: 50 },
          { id: RwIdEnum.FengSiNiang, rate: 40 },
          { id: RwIdEnum.GuoXiang, rate: 30 },
          { id: RwIdEnum.LaoShiHeShang, rate: 50 },
          { id: RwIdEnum.LingHuChong, rate: 30 },
          { id: RwIdEnum.LiXunHuan, rate: 30 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 45 },
          { id: RwIdEnum.RenYingYing, rate: 15 },
        ],
      },
    ],
  },
  {
    id: CityIdEnum.ChangSha,
    name: '长沙',
    key: 'changsha',
    img: 'changsha',
    spx: 690 / 915,
    spp: [{ id: WpIdEnum.MaiSui, price: 800 }],
    sleep: 3700,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '郊外',
        key: 'jw',
        npcs: [
          { id: RwIdEnum.LuXiaoFeng, rate: 10 },
          { id: RwIdEnum.LingHuChong, rate: 10 },
          { id: RwIdEnum.GuoXiang, rate: 15 },
          { id: RwIdEnum.YangGuo, rate: 20 },
        ],
      },
      { id: 2, name: '当铺', key: 'dp', npcs: [] },
      { id: 3, name: '武馆', key: 'wg', npcs: [] },
      {
        id: 4,
        name: '赌场',
        key: 'dc',
        npcs: [
          { id: RwIdEnum.LingHuChong, rate: 35 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 25 },
          { id: RwIdEnum.ZhuiMing, rate: 25 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 40 },
          { id: RwIdEnum.LuXiaoFeng, rate: 60 },
        ],
      },
      { id: 5, name: '客栈', key: 'kz', npcs: [] },
      { id: 6, name: '民家', key: 'mj', npcs: [] },
      {
        id: 7,
        name: '酒馆',
        key: 'jg',
        npcs: [
          { id: RwIdEnum.SuRongRong, rate: 15 },
          { id: RwIdEnum.TieShou, rate: 30 },
          { id: RwIdEnum.WuQing, rate: 30 },
          { id: RwIdEnum.LengXie, rate: 30 },
          { id: RwIdEnum.ZhuiMing, rate: 30 },
          { id: RwIdEnum.ShaMan, rate: 30 },
          { id: RwIdEnum.SuYing, rate: 30 },
          { id: RwIdEnum.HuangYaoShi, rate: 15 },
          { id: RwIdEnum.ChuLiuXiang, rate: 20 },
          { id: RwIdEnum.HuaManLou, rate: 50 },
          { id: RwIdEnum.ZhouBoTong, rate: 30 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 30 },
          { id: RwIdEnum.MuDaoRen, rate: 50 },
          { id: RwIdEnum.FengSiNiang, rate: 40 },
          { id: RwIdEnum.GuoXiang, rate: 30 },
          { id: RwIdEnum.LaoShiHeShang, rate: 50 },
          { id: RwIdEnum.LingHuChong, rate: 30 },
          { id: RwIdEnum.LiXunHuan, rate: 30 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 45 },
          { id: RwIdEnum.RenYingYing, rate: 15 },
        ],
      },
    ],
  },
  {
    id: CityIdEnum.SuZhou,
    name: '苏州',
    key: 'suzhou',
    img: 'suzhou',
    spx: 945 / 915,
    spp: [{ id: WpIdEnum.ChouDuan, price: 12600 }],
    sleep: 4100,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      {
        id: 1,
        name: '郊外',
        key: 'jw',
        npcs: [
          { id: RwIdEnum.GuoXiang, rate: 25 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 25 },
          { id: RwIdEnum.ChuLiuXiang, rate: 25 },
          { id: RwIdEnum.LingHuChong, rate: 25 },
          { id: RwIdEnum.SuYing, rate: 45 },
          { id: RwIdEnum.LuXiaoFeng, rate: 25 },
        ],
      },
      { id: 2, name: '当铺', key: 'dp', npcs: [] },
      { id: 3, name: '武馆', key: 'wg', npcs: [] },
      {
        id: 4,
        name: '赌场',
        key: 'dc',
        npcs: [
          { id: RwIdEnum.LingHuChong, rate: 35 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 25 },
          { id: RwIdEnum.ZhuiMing, rate: 25 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 40 },
          { id: RwIdEnum.LuXiaoFeng, rate: 60 },
        ],
      },
      { id: 5, name: '客栈', key: 'kz', npcs: [] },
      {
        id: 6,
        name: '民家',
        key: 'mj',
        npcs: [
          { id: RwIdEnum.SuRongRong, rate: 65 },
          { id: RwIdEnum.XiMenChuiXue, rate: 65 },
        ],
      },
      {
        id: 7,
        name: '酒馆',
        key: 'jg',
        npcs: [
          { id: RwIdEnum.SuRongRong, rate: 15 },
          { id: RwIdEnum.TieShou, rate: 30 },
          { id: RwIdEnum.WuQing, rate: 30 },
          { id: RwIdEnum.LengXie, rate: 30 },
          { id: RwIdEnum.ZhuiMing, rate: 30 },
          { id: RwIdEnum.ShaMan, rate: 30 },
          { id: RwIdEnum.SuYing, rate: 30 },
          { id: RwIdEnum.HuangYaoShi, rate: 15 },
          { id: RwIdEnum.ChuLiuXiang, rate: 20 },
          { id: RwIdEnum.HuaManLou, rate: 50 },
          { id: RwIdEnum.ZhouBoTong, rate: 30 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 30 },
          { id: RwIdEnum.MuDaoRen, rate: 50 },
          { id: RwIdEnum.FengSiNiang, rate: 40 },
          { id: RwIdEnum.GuoXiang, rate: 30 },
          { id: RwIdEnum.LaoShiHeShang, rate: 50 },
          { id: RwIdEnum.LingHuChong, rate: 30 },
          { id: RwIdEnum.LiXunHuan, rate: 30 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 45 },
          { id: RwIdEnum.RenYingYing, rate: 15 },
        ],
      },
    ],
  },
  {
    id: CityIdEnum.HangZhou,
    name: '杭州',
    key: 'hangzhou',
    img: 'hangzhou',
    spx: 1,
    spp: [{ id: WpIdEnum.ChouDuan, price: 12200 }],
    sleep: 4100,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      { id: 1, name: '码头', key: 'hzmt', sp: true, npcs: [{ id: RwIdEnum.LaoHuLi, rate: 100 }] },
      {
        id: 1,
        name: '郊外',
        key: 'jw',
        npcs: [
          { id: RwIdEnum.XiaoShiYiLang, rate: 15 },
          { id: RwIdEnum.ChuLiuXiang, rate: 25 },
          { id: RwIdEnum.GuoXiang, rate: 25 },
          { id: RwIdEnum.SuYing, rate: 45 },
          { id: RwIdEnum.LingHuChong, rate: 35 },
        ],
      },
      { id: 2, name: '当铺', key: 'dp', npcs: [] },
      { id: 3, name: '武馆', key: 'wg', npcs: [] },
      {
        id: 4,
        name: '赌场',
        key: 'dc',
        npcs: [
          { id: RwIdEnum.LingHuChong, rate: 35 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 25 },
          { id: RwIdEnum.ZhuiMing, rate: 25 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 40 },
          { id: RwIdEnum.LuXiaoFeng, rate: 60 },
        ],
      },
      { id: 5, name: '客栈', key: 'kz', npcs: [] },
      {
        id: 6,
        name: '民家',
        key: 'mj',
        npcs: [
          { id: RwIdEnum.RenYingYing, rate: 45 },
          { id: RwIdEnum.LingHuChong, rate: 65 },
          { id: RwIdEnum.HuaManLou, rate: 65 },
        ],
      },
      {
        id: 7,
        name: '酒馆',
        key: 'jg',
        npcs: [
          { id: RwIdEnum.SuRongRong, rate: 15 },
          { id: RwIdEnum.TieShou, rate: 30 },
          { id: RwIdEnum.WuQing, rate: 30 },
          { id: RwIdEnum.LengXie, rate: 30 },
          { id: RwIdEnum.ZhuiMing, rate: 30 },
          { id: RwIdEnum.ShaMan, rate: 30 },
          { id: RwIdEnum.SuYing, rate: 30 },
          { id: RwIdEnum.HuangYaoShi, rate: 15 },
          { id: RwIdEnum.ChuLiuXiang, rate: 20 },
          { id: RwIdEnum.HuaManLou, rate: 50 },
          { id: RwIdEnum.ZhouBoTong, rate: 30 },
          { id: RwIdEnum.XiaoShiYiLang, rate: 30 },
          { id: RwIdEnum.MuDaoRen, rate: 50 },
          { id: RwIdEnum.FengSiNiang, rate: 40 },
          { id: RwIdEnum.GuoXiang, rate: 30 },
          { id: RwIdEnum.LaoShiHeShang, rate: 50 },
          { id: RwIdEnum.LingHuChong, rate: 30 },
          { id: RwIdEnum.LiXunHuan, rate: 30 },
          { id: RwIdEnum.SiKongZhaiXing, rate: 45 },
          { id: RwIdEnum.RenYingYing, rate: 15 },
        ],
      },
    ],
  },

  {
    id: CityIdEnum.XiaoDao,
    name: '小岛',
    key: 'xiaodao',
    img: 'xiaodao',
    spx: 1,
    spp: [],
    sleep: 4100,
    group: [
      { id: 0, name: '乞讨', key: 'qt', npcs: [] },
      { id: 1, name: '码头', key: 'xdmt', sp: true, npcs: [{ id: RwIdEnum.LaoHuLi, rate: 100 }] },
      {
        id: 2,
        name: '旷野',
        key: 'xdky',
        sp: true,
        npcs: [],
      },
      {
        id: 3,
        name: '民家',
        key: 'mj',
        npcs: [
          { id: RwIdEnum.HuangYaoShi, rate: 30 },
          { id: RwIdEnum.GongJiu, rate: 55 },
          { id: RwIdEnum.XiaoLaoTou, rate: 70 },
        ],
      },
      {
        id: 4,
        name: '赌场',
        key: 'dc',
        npcs: [
          { id: RwIdEnum.XiaoShiYiLang, rate: 25 },
          { id: RwIdEnum.LuXiaoFeng, rate: 25 },
          { id: RwIdEnum.XiaoLaoTou, rate: 50 },
          { id: RwIdEnum.ShaMan, rate: 60 },
        ],
      },
    ],
  },
]
