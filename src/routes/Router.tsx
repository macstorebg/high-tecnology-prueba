import { LayoutMain } from '../Layout/LayoutMain'
import { HomePage, ProductsPage, ServicesPage, PageError } from '../pages/index'
import { Routes, Route } from 'react-router-dom'


export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutMain />}>
        <Route index element={<HomePage />}/>
        <Route path='products' element={<ProductsPage />}/>
        <Route path='services' element={<ServicesPage />}/>
      </Route>
      <Route path='/*' element={<PageError />}/>
      
    </Routes>
  )
}
