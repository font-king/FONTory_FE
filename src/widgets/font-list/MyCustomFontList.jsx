import InfiniteScroll from 'react-infinite-scroller'

import { GridContainer } from '@/app/styles/commonStyle'
import { useFetchMyCustomFontList } from '@/entities/font/api/useFont.query'
import { useSearchKeyword } from '@/features/search/model/search.store'
import { EmptyMessage } from '@/shared/ui/EmptyMessage'

import { FontItemWithoutProfile } from './item/FontItemWithoutProfile'

export const MyCustomFontList = () => {
  const searchKeyword = useSearchKeyword()

  const { data: fontList, hasNextPage, fetchNextPage } = useFetchMyCustomFontList(searchKeyword)

  if (!fontList || !fontList.length) return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <InfiniteScroll hasMore={hasNextPage} threshold={250} loadMore={() => fetchNextPage()}>
      <GridContainer $columns="minmax(0, 1fr) minmax(0, 1fr)" $gap="lg">
        {fontList.map((font) => (
          <FontItemWithoutProfile key={font.id} font={font} />
        ))}
      </GridContainer>
    </InfiniteScroll>
  )
}
