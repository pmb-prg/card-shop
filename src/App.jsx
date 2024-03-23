
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import Products from './pages/Products';
import DetailPage from './pages/DetailPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';

import Layout from './layout/Layout'
function App() {


  return (    
        <Layout>
          <Routes>
            <Route path='/' element={<Navigate to='/products' replace/>} />
            <Route path='/products/' element={ <Products />}/>
            <Route path='/products/:id' element={ <DetailPage />}/>
            <Route path='/checkout' element={ <CheckoutPage />}/>
            <Route path='/*' element={ <NotFoundPage />}/>
          </Routes>
        </Layout>
  )
}

export default App
