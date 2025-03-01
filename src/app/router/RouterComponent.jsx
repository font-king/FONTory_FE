import { Route, Routes } from 'react-router-dom'

import { Bookmark } from '@/pages/bookmark/Bookmark'
import { FontDetail } from '@/pages/detail/FontDetail'
import { Explore } from '@/pages/explore/Explore'
import { Home } from '@/pages/home/Home'
import { MyFont } from '@/pages/my-font/MyFont'
import { FontDesignProgress } from '@/pages/myFonts/ui/FontDesignProgress'
import { MyCustomFont } from '@/pages/myFonts/ui/MyCustomFont'

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/detail/:id" element={<FontDetail />} />
      <Route path="/my-font" element={<MyFont />} />
      <Route path="/my-font/custom-font" element={<MyCustomFont />} />
      <Route path="/my-font/font-design-progress" element={<FontDesignProgress />} />
    </Routes>
  )
}
