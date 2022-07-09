import { LogoRocket } from './LogoRocket';

export function Footer() {
   return (
      <div className='bg-gray-900 px-8 mt-10'>
         <footer className='max-w-[1100px] py-5 mx-auto flex justify-between items-center border-t border-gray-600'>
            <div>
               <LogoRocket />
            </div>
            <p className='text-gray-300'>
               Rocketseat - Todos os direitos reservados
            </p>
         </footer>
      </div>
   );
}
