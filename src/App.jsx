import { useContext, useState } from 'react'
import './App.css'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Brands from './components/Brands/Brands'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Products from './components/Products/Products'
import Notfound from './components/Notfound/Notfound'
import WishList from './components/Wish-list/Wish-list'
import Catrgories from './components/Catrgories/Catrgories'
import Card from './components/Card/Card'
import CreatContext from './components/CreatContext/CreatContext'
import ProtectRoute from './components/ProtectRoute/ProtectRoute'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductDetails from './components/ProductDetails/ProductDetails'

const queryClient = new QueryClient()

function App() {
  let router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { path: "", element: <ProtectRoute><Home /></ProtectRoute> },
        { path: "home", element: <ProtectRoute><Home /></ProtectRoute> },
        { path: "brands", element: <ProtectRoute><Brands /></ProtectRoute> },
        { path: "wishList", element: <ProtectRoute><WishList /> </ProtectRoute>},
        { path: "catrgories", element: <ProtectRoute><Catrgories /></ProtectRoute> },
        { path: "card", element: <ProtectRoute><Card /></ProtectRoute> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "productDetails/:id/:category", element: <ProductDetails /> },
        { path: "products", element: <ProtectRoute><Products/></ProtectRoute> },
        { path: "*", element: <Notfound /> },
      ]
    }
  ]);
  // let token=useContext(TokenContext)
  // console.log(token);
  
  return (<QueryClientProvider client={queryClient}>
     <CreatContext>
        <RouterProvider router={router} />
    </CreatContext>
  </QueryClientProvider>
 
    
  );
}

export default App;