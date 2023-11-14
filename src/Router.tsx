import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DefaultLayout from './layouts/DefaultLayout'
import IssuePage from './pages/IssuePage'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue" element={<IssuePage />} />
      </Route>
    </Routes>
  )
}
