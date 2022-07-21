import { Logo } from './Logo';
import { toggleMenu } from '../utils/toggleMenu';
import { List, X } from 'phosphor-react';

export function Header() {
   return (
      <header className='w-full h-[75px] fixed top-0 left-0 z-40 py-5 px-5 sm:px-8 flex items-center justify-between xl:justify-center bg-gray-700 border-b border-gray-600'>
         <div className='w-40 md:w-44 lg:w-52 xl:w-[237px]'>
            <Logo />
         </div>
         <button
            id='hamburger-full'
            className='flex flex-row justify-center items-center gap-1 py-2 px-2.5 text-blue-500 hover:opacity-80 text-sm z-50 xl:hidden'
            onClick={() => toggleMenu()}
         >
            <span>Aulas</span>
            <span id='hamburger-on'>
               <List size={30} />
            </span>
            <span id='hamburger-off' className='hidden'>
               <X size={30} />
            </span>
         </button>
      </header>
   );
}
