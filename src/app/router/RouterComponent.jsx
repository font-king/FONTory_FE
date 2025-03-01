import { Route, Routes } from 'react-router-dom'

import { Bookmark } from '@/pages/bookmark/Bookmark'
import { FontDetail } from '@/pages/detail/FontDetail'
import { Explore } from '@/pages/explore/Explore'
import { Home } from '@/pages/home/Home'
import { FontDesignProgress } from '@/pages/my-font/FontDesignProgress'
import { MyCustomFont } from '@/pages/my-font/MyCustomFont'
import { MyFont } from '@/pages/my-font/MyFont'

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
