import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage/index'
import { Shop } from './pages/Shop/index'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/id" element={<ProductPage />} />
      <Route path="/products" element={<Shop />} />
    </Routes>
  )
}
