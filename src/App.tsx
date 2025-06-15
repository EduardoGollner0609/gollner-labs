import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page from './routes/Page'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<h1>Olá</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
