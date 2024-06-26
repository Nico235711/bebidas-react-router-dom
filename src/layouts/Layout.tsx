import Header from '../components/Header';
import Modal from '../components/Modal';
import Notification from '../components/Notification';
import { Outlet } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';
import { useEffect } from 'react';

const Layout = () => {

  const { loadFromStorage } = useAppStore()

  useEffect(() => {
    loadFromStorage()
  }, []);

  return (
    <>
      <Header />
      <main className="mx-auto py-16 container">
      {/* Outlet mantiene el contenido de mi componente pero tambien inyecta 
      el contenido de mis páginas */}
        <Outlet />
      </main>

      <Modal />
      <Notification />
    </>
  )
}

export default Layout