import { Link } from "react-router-dom"

const Header = () => {

  return (
    <header className="bg-slate-800">
      <div className="mx-auto px-5 py-16 container">
        <div className="flex justify-between items-center">
          <div className="w-32">
            <img src="/logo.svg" alt="logotipo" />
          </div>
          <nav className="flex gap-5">
            <Link
              to="/"
              className="text-white text-xl bg-orange-500 px-4 py-1 rounded-lg hover:bg-orange-600 transition-all"
            >Inicio</Link>
            <Link
              to="/favoritos"
              className="text-white text-xl bg-orange-500 px-4 py-1 rounded-lg hover:bg-orange-600 transition-all"
            >Favoritos</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header