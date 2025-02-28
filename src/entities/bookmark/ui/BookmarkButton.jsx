import { useToggle } from '@/shared/hook/useToggle'
import { Button } from '@/shared/ui/Button'
import { FilledBookmarkIcon, UnfilledBookmarkIcon } from '@/shared/ui/icons/NonPropIcons'

export const BookmarkButton = ({ isButtonType = false, initialBookmarkState }) => {
  const [isBookmarked, toggleBookmark] = useToggle(initialBookmarkState)

  const handleBookmark = (event) => {
    event.stopPropagation()
    event.preventDefault()
    toggleBookmark()
  }

  if (isButtonType) {
    return (
      <Button size="sm" onClick={handleBookmark}>
        {isBookmarked ? '북마크 취소' : '북마크'}
      </Button>
    )
  }
  return (
    <button type="button" onClick={handleBookmark}>
      {isBookmarked ? <FilledBookmarkIcon /> : <UnfilledBookmarkIcon />}
    </button>
  )
}
