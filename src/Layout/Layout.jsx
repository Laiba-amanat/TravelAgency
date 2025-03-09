
import Header from '../Componenets/Common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Componenets/Common/Footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
