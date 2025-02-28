import { Route, Routes } from 'react-router-dom'

import { Bookmark } from '@/pages/Bookmark'
import { BookmarkDetail } from '@/pages/BookmarkDetail'
import { Explorer } from '@/pages/Explorer'
import { ExplorerDetail } from '@/pages/ExplorerDetail'
import { Home } from '@/pages/Home'
import { MyFonts } from '@/pages/MyFonts'
import { MyFontsDetail } from '@/pages/MyFontsDetail'

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explorer" element={<Explorer />} />
      <Route path="/explorer/detail/:id" element={<ExplorerDetail />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/bookmark/detail/:id" element={<BookmarkDetail />} />
      <Route path="/my-fonts" element={<MyFonts />} />
      <Route path="/my-fonts/detail/:id" element={<MyFontsDetail />} />
    </Routes>
  )
}
