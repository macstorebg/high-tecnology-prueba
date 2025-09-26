import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo-blanco.png';
import NavList from '../../utils/NavList';

export const DesktopNav = () => {
  return (
    <div>
        <div className='hidden md:flex items-center justify-between text-white'>
            <div>
                <img 
                    src={Logo} 
                    alt="Logo de Hightecnology" 
                    className='size-20'    
                />
            </div>
            <div className='flex items-center justify-content-center gap-4'>
                {NavList.map((item, index) => (
                    <NavLink 
                        key={index} 
                        to={item.to}
                        className={`hover:scale-125 transition-transform duration-300 
                        ease-in-out relative group`} 
                    >
                        {item.title}
                        <span 
                            className='absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r 
                            from-10% from-fuchsia-600 to-rose-500 group-hover:w-full transition-all duration-500'
                        >
                        </span>
                    </NavLink>
                ))}
            </div>
        </div>
    </div>
  )
}
