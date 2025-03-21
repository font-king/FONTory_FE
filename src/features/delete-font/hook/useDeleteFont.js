import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useDeleteFontMutation } from '../api/useDeleteFont.mutation'

export const useDeleteFont = () => {
  const navigate = useNavigate()
  const { id: fontId } = useParams()

  const { mutate: deleteFont } = useDeleteFontMutation()

  const handleDeleteFont = () => {
    deleteFont(
      { urls: { fontId } },
      {
        onSuccess: () => {
          toast.success('폰트가 삭제되었습니다.')
          navigate('/my-font/custom-font', { replace: true })
        },
        onError: () => toast.error('폰트 삭제 과정에서 문제가 발생했습니다.'),
      },
    )
  }

  return { handleDeleteFont }
}
