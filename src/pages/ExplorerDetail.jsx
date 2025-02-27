import { FontDetail } from '@/shared/ui/FontDetail'

const dummyFont = {
  profile: {
    name: '가나다체',
    designer: '고로케',
  },
  bookmark: 32,
  download: 422,
  preview: '동해물과 백두산이 마르고 닳도록',
  isBookmarked: false,
  recommend: [
    {
      id: 0,
      name: '가나다체',
      designer: '고로케',
      preview: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
    },
    {
      id: 1,
      name: '가나다체',
      designer: '고로케',
      preview: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
    },
    {
      id: 2,
      name: '가나다체',
      designer: '고로케',
      preview: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
    },
  ],
}

export const ExplorerDetail = () => {
  return <FontDetail font={dummyFont} />
}
