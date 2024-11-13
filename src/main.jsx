import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

//import HomePage from './components/HomePage.jsx'
//import Shop from './components/shopPage.jsx'
import routes from './components/routes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CartProvider } from './components/context.jsx'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <CartProvider>
<RouterProvider router = {router}/>
</CartProvider>
  </StrictMode>,
)
