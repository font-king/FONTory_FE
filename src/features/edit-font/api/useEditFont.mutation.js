import { useMutation, useQueryClient } from '@tanstack/react-query'

import { instance } from '@/app/api'
import { fontQueryKeys } from '@/entities/font/api/useFont.query'

export const useEditFontMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ urls, body }) => instance.put(`/fonts/${urls.fontId}`, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fontQueryKeys.all })
    },
  })
}
