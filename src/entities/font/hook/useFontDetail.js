import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useFetchFontDetail } from '../api/useFont.query'
import { useFontDetailActions } from '../model/fontDetail.store'

export const useFontDetail = () => {
  const { id } = useParams()

  const queries = useFetchFontDetail(id)

  const { setFontDetail } = useFontDetailActions()

  const font = queries[0].data
  const recommendList = queries[1].data || []

  useEffect(() => {
    setFontDetail(font)
  }, [font, setFontDetail])

  return { font, recommendList }
}
