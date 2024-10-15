import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"

function Root() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default Root