import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center border-b border-gray-700'>
            <nav className='flex w-full screen-max-width  items-center'>
                <img src={appleImg} alt="Apple" width={14} height={18} />
    
                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {navLists.map((nav)=>(
                    <div key={nav} className='px-10 text-sm cursor-pointer text-white hover:text-[rgb(223,212,194)]  transition-all '>
                        {nav}
                    </div>
                    ))}
                </div>
    
                
                
            </nav>
        </header>
  )
}

export default Navbar