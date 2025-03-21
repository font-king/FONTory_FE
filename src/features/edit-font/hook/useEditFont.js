import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useEditFontMutation } from '../api/useEditFont.mutation'

export const useEditFont = (closeModal) => {
  const { id: fontId } = useParams()

  const { mutate: editFont } = useEditFontMutation()

  const handleEditFont = (formData) => {
    editFont(
      { urls: { fontId }, body: formData },
      {
        onSuccess: () => {
          toast.success('폰트 정보가 수정되었습니다.')
          closeModal()
        },
        onError: () => toast.error('폰트 수정 중에 문제가 발생했습니다.'),
      },
    )
  }

  return { handleEditFont }
}
