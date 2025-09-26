import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Header/Navbar'


export const LayoutMain = () => {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
