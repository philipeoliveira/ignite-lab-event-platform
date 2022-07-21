import { CaretRight, FileArrowDown } from 'phosphor-react';

export function Card() {
   return (
      <div className='gap-8 mx-8 my-3 xl:my-8 grid xl:grid-cols-2'>
         <a
            href='#'
            className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-5 xl:gap-6 hover:bg-gray-600 transitions-colors'
         >
            <div className='bg-green-700 h-full p-3 xl:p-6 flex items-center'>
               <FileArrowDown className='text-3xl xl:text-[40px]' />
            </div>
            <div className='py-3 pr-5 xl:pr-0 xl:py-6 flex-1 leading-relaxed'>
               <strong className='text-lg xl:text-xl'>
                  Material Complementar
               </strong>
               <p className='text-xs xl:text-sm text-gray-200 mr-2 my-1.5 xl:my-2'>
                  Acesse o material complementar para acelerar o seu
                  desenvolvimento
               </p>
            </div>
            <div className='h-full p-3 xl:p-6 hidden xl:flex xl:items-center'>
               <CaretRight size={24} />
            </div>
         </a>
         <a
            href='#'
            className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-5 xl:gap-6 hover:bg-gray-600 transitions-colors'
         >
            <div className='bg-green-700 h-full p-3 xl:p-6 flex items-center'>
               <FileArrowDown className='text-3xl xl:text-[40px]' />
            </div>
            <div className='py-3 pr-5 xl:pr-0 xl:py-6 flex-1 leading-relaxed'>
               <strong className='text-lg xl:text-xl'>
                  Wallpapers exclusivos
               </strong>
               <p className='text-xs xl:text-sm text-gray-200 my-1.5 xl:my-2'>
                  Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                  máquina
               </p>
            </div>
            <div className='h-full p-3 xl:p-6 hidden xl:flex xl:items-center'>
               <CaretRight size={24} />
            </div>
         </a>
      </div>
   );
}
