import Logo from '../../assets/Logo-blanco.png'

export const Navbar = () => {

  return (
    <div className="relative py-2 px-4 flex items-center justify-center bg-transparent z-50">
       <img src={Logo} alt="" className='size-30 md:size-40'/>
    </div>
  );
};


