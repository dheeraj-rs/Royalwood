import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRouter from './routes/UserRouter'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<UserRouter />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App