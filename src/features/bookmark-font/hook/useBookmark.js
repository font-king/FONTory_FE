import { toast } from 'react-toastify'

import { useAddBookmarkMutation, useRemoveBookmarkMutation } from '../api/useBookmark.mutation'

export const useBookmark = (fontId, isBookmarked) => {
  const { mutate: addBookmark } = useAddBookmarkMutation()
  const { mutate: removeBookmark } = useRemoveBookmarkMutation()

  const handleBookmark = (event) => {
    event.stopPropagation()
    event.preventDefault()

    if (isBookmarked) {
      removeBookmark(
        { urls: { fontId } },
        {
          onSuccess: () => toast.success('성공적으로 북마크에서 삭제되었습니다.'),
          onError: () => toast.error('북마크 삭제에 실패했습니다. 다시 시도해 주세요.'),
        },
      )
    }

    if (!isBookmarked) {
      addBookmark(
        { urls: { fontId } },
        {
          onSuccess: () => toast.success('성공적으로 북마크에 추가되었습니다.'),
          onError: () => toast.error('북마크 추가에 실패했습니다. 다시 시도해 주세요.'),
        },
      )
    }
  }

  return { handleBookmark }
}
