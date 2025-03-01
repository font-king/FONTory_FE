import { Route, Routes } from 'react-router-dom'

import { Bookmark } from '@/pages/bookmark/Bookmark'
import { FontDetail } from '@/pages/detail/ui/FontDetail'
import { Explore } from '@/pages/explore/Explore'
import { Home } from '@/pages/home/Home'
import { FontDesignProgress } from '@/pages/myFonts/ui/FontDesignProgress'
import { MyCustomFont } from '@/pages/myFonts/ui/MyCustomFont'
import { MyFonts } from '@/pages/myFonts/ui/MyFonts'

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/detail/:id" element={<FontDetail />} />
      <Route path="/my-fonts" element={<MyFonts />} />
      <Route path="/my-fonts/custom-font" element={<MyCustomFont />} />
      <Route path="/my-fonts/font-design-progress" element={<FontDesignProgress />} />
    </Routes>
  )
}
