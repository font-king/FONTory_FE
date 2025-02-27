import { DownloadIcon } from '@/shared/ui/icons/NonPropIcons'

export const DownloadButton = () => {
  const handleDownload = (event) => {
    event.stopPropagation()
    event.preventDefault()
  }

  return (
    <button type="button" onClick={handleDownload}>
      <DownloadIcon />
    </button>
  )
}
