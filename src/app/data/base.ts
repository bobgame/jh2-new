import { CollectItem, QaItem, SaveItem } from '../constants/interfaces/base.interface'

export const exitQa: QaItem = {
  id: 1,
  question: '退出？',
  answers: [
    {
      id: 1,
      text: '是',
      actionType: 1,
      actionValue: 1,
    },
    {
      id: 2,
      text: '否',
      actionType: 1,
      actionValue: 0,
    },
  ],
}

export enum SlEnum {
  a = '0agerajsdkfluaewiamasdfacmxvbglekruqtopegkdfjgdfksgjlkwueoriueifkldghjakldyrfeioqufrkjsdhfvdasfwehretefwehrkjsgnhkjyqiueyrughjksd',
  b = '0agerajsdkfluaewiamwradfaetrgdfgryeswjgdfksgjlkwueoriueifkldghjakldyrfeioqufrkjsdhfvjkqhgiuyweruqwehrkjsgnhkjyqiueyrughjksd',
  c = '0agerajsdkfluaewiamchgfdshmxvbglekruqtopegkdfjgdfksgjlkwueoriueifkldghjakldyrfeioqufrkjssdfgrewtbhchgryehrkjsgnhkjyqiueyrughjksd',
  d = '0agerajsdkfluaewiamhdfghdcmxvbglekruqtopegkdfjgdfksgjlkwueoriueifkldghjakldyrfeioqufrkjwwreyrtydfxhertyruqwehrkjsgnhkjyqiueyrughjksd',
  /** save 1 e */
  e = '0agerajsdkfluaewiamhdfgjcmxvbglekruqtopegkdfjgdfksgjlkwueoriueifkldghjakldyrfeioqufrkjsdnytuyfjndrtyruqwehrkjsgnhkjyqiueyrughjksd',
  f = '0agerajsdkfluaewiadfghjmcmxvbglekruqtopegkdfjgdfksgjlkwueoriueifkldghjakldyrfeioqufrkjsdjtrydtdchdtryrduqwehrkjsgnhkjyqiueyrughjksd',
  /** save 2 g */
  g = '0agerajsdkfluaewifghjamcmxvbglekruqtopegkdfjgdfksgjlkwueoriueifkldghjakljdrtydfghrtyftdjdtrydfjtdweruqwehrkjsgnhkjyqiueyrughjksd',
  h = '0agerajsdkfluaetefghjfrtydfhdrtydtrhgfdytrhhgdfksgjlkwueoriueifkldghjakldyrfeioqufrkjsdhfvjkqhgiuyweruqwehrkjsgnhkjyqiueyrughjksd',
  /** save 3 i */
  i = '0agerajsdkfluaewiafjghjfmcmxvbglekruqtopegkdfjgdfksgjlkwueoriueifkldghjakldyrfeioqufrkjsdhfertyetycfyftycftycykjsgnhkjyqiueyrughjksd',
  j = '0agerajsdkfluaewiamcmfghjxvbglekruqtopegkdfjgdfksgjlkwueoriueifkldghjakldyrfeioqufrkjsdhfvjkqcytfyctrewywertwetgnhkjyqiueyrughjksd',
  // save 4 k
  k = '0agerajsdkfluaewiamcfghjmxvbglekruqtopegkdfjgdfksgm5uj674jdje5uhfjnser5u54ujhfgjhbrthnbrthj65hcytfyctrewywertwetgnhkjyqiueyrughjksd',
  l = '0agerajsdkfluaewiamcmxvbglekruqtopemytjy7i67o78o89qgq34trafzdf34gfsdzff3sgergw4gbrthj65hcytfyctrewywertwetgnhkjyqiueyrughjksd',
  /** save settings history m */
  m = '0agerajsdkfluaewiamcmxvbglekfghjruqtopegkdfjgdfksgjlkasdfgernbcxg4retgsdgeryghrjn673565425tresgtxdfg4w6tsegdxgetgnhkjyqiueyrughjksd',
  n = '0agerajsdkfluaewiamcmxvbglekrfghjuqtopegkdfjgdgmoi4375u9834htijnrjhiyuws90834utjgisjrtklwjk430op8t609grseujtgijwgnhkjyqiueyrughjksd',
  // save 5 o
  o = '0agerajsdkfluaewiamcmxvbfjghfglekruqtopegkdfjglhkhbwqkl349468y590oyhikspjtgwoi34uy5t98324utygisoerjgfklwerwertwetgnhkjyqiueyrughjksd',
  // save 6 p
  p = '0agerajsdkfluaewiamcmxvbfjghfgldatewsgsdag468y590oyhikspjtgwoi34uy5t98324utygisoerjgfklwerwertwetgnhkjyqiueyrughjksd',
  q = '0agerajsdkfluaewiamcmxvbfjghfglekruqtopegkdfjglhkhbwqkl349dasgasdgauy5t98324utygisoerjgfklwerwertwetgnhkjyqiueyrughjksd',
  r = '0agerajsdkfluaewiamcmxvbfjghfglekruqtopegkdfasdgagasghikspjtgwoi34uy5t98324utygisoerjgfklwerwertwetgnhkjyqiueyrughjksd',
}

export const defaultSaveItem: SaveItem = {
  active: false,
  id: 0,
  name: '',
  avatar: '',
  time: { mm: 1, dd: 1, hh: 1 },
  pos: '',
}

export const defaultClc: CollectItem[] = [
  { key: 'zj', cards: [] },
  { key: 'rw', cards: [] },
  { key: 'jn', cards: [] },
  { key: 'wy', cards: [] },
  { key: 'wp', cards: [] },
  { key: 'zb', cards: [] },
  { key: 'mj', cards: [] },
  { key: 'ch', cards: [] },
]
