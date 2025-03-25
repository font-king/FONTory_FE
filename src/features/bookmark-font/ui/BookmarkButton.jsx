import { Button } from '@/shared/ui/Button'
import { FilledBookmarkIcon, UnfilledBookmarkIcon } from '@/shared/ui/icons/NonPropIcons'

import { useBookmark } from '../hook/useBookmark'

export const BookmarkButton = ({ fontId, isButtonType = false, isBookmarked }) => {
  const { handleBookmark } = useBookmark(fontId, isBookmarked)

  if (isButtonType) {
    return (
      <Button size="sm" onClick={handleBookmark}>
        {isBookmarked ? '북마크 취소' : '북마크'}
      </Button>
    )
  }

  return (
    <button type="button" onClick={handleBookmark}>
      {isBookmarked ? <UnfilledBookmarkIcon /> : <FilledBookmarkIcon />}
    </button>
  )
}
