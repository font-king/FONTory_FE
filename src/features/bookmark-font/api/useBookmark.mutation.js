import { useMutation, useQueryClient } from '@tanstack/react-query'

import { instance } from '@/app/api'
import { fontQueryKeys } from '@/entities/font/api/useFont.query'

export const useAddBookmarkMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ urls }) => instance.post(`/bookmarks/${urls.fontId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fontQueryKeys.all })
    },
  })
}

export const useRemoveBookmarkMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ urls }) => instance.delete(`/bookmarks/${urls.fontId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fontQueryKeys.all })
    },
  })
}
