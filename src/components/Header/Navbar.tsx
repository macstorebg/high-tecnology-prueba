
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export const Navbar = () => {

  return (
    <div className="relative py-2 px-4 bg-black text-white  z-50">
       <div className=''>
          <MobileNav />
       </div>
          <DesktopNav />
    </div>
  );
};


