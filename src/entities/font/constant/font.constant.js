export const FILTER_OPTIONS = [
  { name: '전체', key: 'createdAt' },
  { name: '조회순', key: 'downloadCount' },
  { name: '북마크순', key: 'bookmarkCount' },
]
export const FILTER_OPTIONS_NAME = FILTER_OPTIONS.map((option) => option.name)
export const FILTER_OPTIONS_KEY = FILTER_OPTIONS.map((option) => option.key)
