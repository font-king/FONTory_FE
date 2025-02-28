import { Route, Routes } from 'react-router-dom'

import { Bookmark } from '@/pages/bookmark/ui/Bookmark'
import { BookmarkDetail } from '@/pages/bookmark/ui/BookmarkDetail'
import { Explorer } from '@/pages/explorer/ui/Explorer'
import { ExplorerDetail } from '@/pages/explorer/ui/ExplorerDetail'
import { Home } from '@/pages/home/ui/Home'
import { MyFonts } from '@/pages/myFonts/ui/MyFonts'
import { MyFontsDetail } from '@/pages/myFonts/ui/MyFontsDetail'

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
