import { Route, Routes } from 'react-router-dom'

import { Home } from '../containers/Home'

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
