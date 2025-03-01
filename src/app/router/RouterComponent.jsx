import { Route, Routes } from 'react-router-dom'

import { Bookmark } from '@/pages/bookmark/ui/Bookmark'
import { FontDetail } from '@/pages/detail/ui/FontDetail'
import { Explorer } from '@/pages/explorer/ui/Explorer'
import { Home } from '@/pages/home/ui/Home'
import { MyFonts } from '@/pages/myFonts/ui/MyFonts'

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explorer" element={<Explorer />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/detail/:id" element={<FontDetail />} />
      <Route path="/my-fonts" element={<MyFonts />} />
    </Routes>
  )
}
