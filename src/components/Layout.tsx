import { Outlet } from "react-router-dom"
import Footer from "./Footer"

function Layout() {
  return (
    <div>
      <div>
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout