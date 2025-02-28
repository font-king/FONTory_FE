import { Button } from '@/shared/ui/Button'
import { DownloadIcon } from '@/shared/ui/icons/NonPropIcons'

export const DownloadButton = ({ isButtonType = false }) => {
  const handleDownload = (event) => {
    event.stopPropagation()
    event.preventDefault()
  }

  if (isButtonType) {
    return (
      <Button size="sm" onClick={handleDownload}>
        다운로드
      </Button>
    )
  }

  return (
    <button type="button" onClick={handleDownload}>
      <DownloadIcon />
    </button>
  )
}
