import Header from "./components/layout/Header"
import ScrollToTop from "./components/layout/ScrollToTop"
import { Outlet } from "react-router-dom"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  )
}

export default App