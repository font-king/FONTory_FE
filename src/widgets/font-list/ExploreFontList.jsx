import InfiniteScroll from 'react-infinite-scroller'

import { GridContainer } from '@/app/styles/commonStyle'
import { useFetchExploreFontList } from '@/entities/font/api/useFont.query'
import { EmptyMessage } from '@/shared/ui/EmptyMessage'

import { FontItemWithProfile } from './item/FontItemWithProfile'

export const ExploreFontList = () => {
  const { data: fontList, hasNextPage, fetchNextPage } = useFetchExploreFontList()

  if (!fontList || !fontList.length) return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <InfiniteScroll hasMore={hasNextPage} threshold={250} loadMore={() => fetchNextPage()}>
      <GridContainer $columns="minmax(0, 1fr) minmax(0, 1fr)" $gap="lg">
        {fontList.map((font) => (
          <FontItemWithProfile key={font.id} font={font} />
        ))}
      </GridContainer>
    </InfiniteScroll>
  )
}
