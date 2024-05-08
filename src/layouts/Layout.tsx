import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"

const Layout = () => {

  return (
    <>
      <Header />
      <main className="mx-auto py-16 container">
      {/* Outlet mantiene el contenido de mi componente pero tambien inyecta 
      el contenido de mis páginas */}
        <Outlet />
      </main>

      <Modal />
    </>
  )
}

export default Layout