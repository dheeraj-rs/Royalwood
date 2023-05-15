import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/user/Homepage'
function UserRouter() {
  return (
    <Routes>
      <Route element={<Homepage />} path='/*' />

    </Routes>
  )
}

export default UserRouter