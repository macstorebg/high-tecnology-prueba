import { useState } from 'react';
import Logo from '../../assets/Logo-blanco.png';
import IconMenu from '../../assets/menumovil.svg';
import Close from '../../assets/close.svg'
import NavList from '../../utils/NavList';
import { NavLink } from 'react-router-dom';

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="text-white md:hidden flex items-center justify-between relative">
        <div>
          <img src={Logo} alt="Logo" className="size-20" />
        </div>
        <div>
          <button onClick={() => setOpen(!open)}>
            <img src={IconMenu} alt="" className={`size-6 cursor-pointer transform transition-transform duration-500 ${open ? 'rotate-90' : 'rotate-0'}`} />
          </button>
        </div>
        {open && (
          <div className="absolute top-0 left-0 rounded-lg shadow-lg w-6/6 m-0 bg-gray-800">
            <div className='flex flex-col text-left'>
              <NavLink className="flex items-center justify-between p-4 border-b-2 border-gray-700" to="/" >
                    <img src={Logo} alt="Logo" className="size-20" />
                    <span className='border-r-2 border-slate-600 h-12 mr-12' ></span>
                    <button className='cursor-pointer' onClick={() => setOpen(!true)}>
                      <img src={Close} alt="" className='size-7'/>
                    </button>
                </NavLink>  
              {NavList.map((item, index) => (
                <NavLink 
                    key={index} 
                    to={item.to} 
                    className="py-2 px-4 cursor-pointer hover:bg-gray-600 hover:rounded-lg"
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
