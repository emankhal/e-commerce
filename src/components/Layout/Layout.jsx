
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import style from'./Layout.module.css'

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto mt-10 py-8">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
