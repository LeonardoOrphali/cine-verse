import Header from "./components/layout/Header"
import ScrollToTop from "./components/layout/ScrollToTop"
import { Outlet } from "react-router-dom"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <ScrollToTop />
      <div className="min-w-0 flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
