// TODO: mock pray list data

// 최근 20개의 셀 기도제목을 가져온다.
// 자신의 기도제목은 조회
import { PrayType } from '@/app/(layout)/pray/pray.type'

export const prays: PrayType[] = [
  {
    seq: 1,
    title: '',
    contents: [{
      seq: 1,
      text: '가족 건강',
      description: '엄마가 류마티스 관절염이 있으신데 치료가 무리되지 않고 잘 회복되시길/ 장모님이 항암 치료가 끝나시고 일상에 무리없이 잘 회복되시도록'
    }, {
      seq: 2,
      text: '연말이 다가오니 나의 삶을 되돌아볼 수 있기를',
    }, {
      seq: 3,
      text: '감기(목) 낫고, 체력 회복!!',
    }, {
      seq: 4,
      text: '생각을 하면서 삶을 살고싶다~ 생각을 잘 하고 싶다!',
    }, {
      seq: 5,
      text: '큐티 할 수 있기를!! (지니 누나가 준)',
    }, {
      seq: 6,
      text: '장년 교구에 가는 과정을 기도하며 준비하고 싶다!',
    }],
    description: 'Description 1',
    author: 'jy',
    authorId: 1,
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    deletedAt: null,
    tags: ['가족', '건강', '연말', '감기', '생각', '큐티', '장년교구']
  }, {
    seq: 2,
    title: 'Pray 1',
    contents: [{
      seq: 1,
      text: '감기 나을 수 있기를',
    }, {
      seq: 2,
      text: '생각을 하면서 살고 싶다~ 요즘 물 흐르듯이 지나가는데, 돌이켜보면 고민할 게 많지만 집중해서 직면할 수 있도록'
    }],
    author: 'bs',
    authorId: 2,
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    deletedAt: null,
  }, {
    seq: 3,
    contents: [
      {
        seq: 1,
        text: '큐티! 큰숲맑은샘 잘하기!!',
      },
      {
        seq: 2,
        text: '결혼 준비하는데 체력 지치지 않고 잘 준비되어가도록'
      }
    ],
    description: 'Description 1',
    author: 'js',
    authorId: 3,
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    deletedAt: null,
  }, {
    seq: 4,
    contents: [
      {
        seq: 1,
        text: '주변 사람들에게 관심이 없었는데, 관심도 갖고 기도도 하도록',
      },
    ],
    description: 'Description 1',
    author: 'ms',
    authorId: 4,
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    deletedAt: null,
  }, {
    seq: 5,
    contents: [
      {
        seq: 1,
        text: '면접 성실하게 잘 보고, 일에 대해 고민하는 영역을 하나님께 맡기며 해결할 수 있기를',
      },
      {
        seq: 1,
        text: '장년 교구에 가는 과정을 기도하고 싶다!',
      },
    ],
    description: 'Description 1',
    author: 'my',
    authorId: 5,
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    deletedAt: null,
  }
]
