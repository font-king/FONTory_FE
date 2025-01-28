import { Route, Routes } from 'react-router-dom'

import { Bookmark } from '../containers/Bookmark'
import { BookmarkDetail } from '../containers/BookmarkDetail'
import { Explorer } from '../containers/Explorer'
import { ExplorerDetail } from '../containers/ExplorerDetail'
import { Home } from '../containers/Home'

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explorer" element={<Explorer />} />
      <Route path="/explorer/detail/:id" element={<ExplorerDetail />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/bookmark/detail/:id" element={<BookmarkDetail />} />
    </Routes>
  )
}
