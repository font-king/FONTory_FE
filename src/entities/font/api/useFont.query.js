import { useSuspenseQuery } from '@tanstack/react-query'

import { instance } from '@/app/api'

export const fontQueryKeys = {
  all: ['fonts'],
  detail: (fontId) => [...fontQueryKeys.all, 'detail', fontId],
}

export const useFetchFontDetail = ({ fontId }) =>
  useSuspenseQuery({
    queryKey: fontQueryKeys.detail(fontId),
    queryFn: () => instance.get(`/fonts/${fontId}`),
  })
