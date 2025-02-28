import { useToggle } from '../hook/useToggle'

import { FilledBookmarkIcon, UnfilledBookmarkIcon } from './icons/NonPropIcons'

export const BookmarkButton = ({ initialBookmarkState }) => {
  const [isBookmarked, toggleBookmark] = useToggle(initialBookmarkState)

  const handleBookmark = (event) => {
    event.stopPropagation()
    event.preventDefault()
    toggleBookmark()
  }

  return (
    <button type="button" onClick={handleBookmark}>
      {isBookmarked ? <FilledBookmarkIcon /> : <UnfilledBookmarkIcon />}
    </button>
  )
}
