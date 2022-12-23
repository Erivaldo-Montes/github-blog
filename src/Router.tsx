import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Home } from './pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<h1>post</h1>} />
      </Route>
    </Routes>
  )
}
