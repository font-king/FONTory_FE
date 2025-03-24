import { useMutation, useQueryClient } from '@tanstack/react-query'

import { instance } from '@/app/api'
import { fontQueryKeys } from '@/entities/font/api/useFont.query'

export const useDeleteFontMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ urls }) => instance.delete(`/fonts/members/${urls.fontId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fontQueryKeys.all })
    },
  })
}
