import { SpinnerGap } from 'phosphor-react';
import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

export function Navbar() {
   const { data } = useGetLessonsQuery();

   return (
      <nav
         id='nav'
         className='absolute w-full xl:w-[400px] top-[75px] left-0 z-30 xl:static'
      >
         <div
            id='menu'
            className='h-[calc(100vh-75px)] overflow-auto xl:h-full bg-gray-700 p-6 border-l border-gray-600 hidden xl:block'
         >
            <div className='font-bold text-xl xl:text-2xl pb-4 mb-4 xl:pb-6 xl:mb-6 border-b border-gray-500 block'>
               Cronograma de aulas
            </div>

            {!data ? (
               <div className='flex flex-1 justify-center items-center m-20 animate-spin'>
                  <SpinnerGap size={32} />
               </div>
            ) : (
               <ul className='flex flex-col gap-5 xl:gap-8'>
                  {data?.lessons.map((lesson) => {
                     return (
                        <Lesson
                           key={lesson.id}
                           title={lesson.title}
                           slug={lesson.slug}
                           availableAt={new Date(lesson.availableAt)}
                           type={lesson.lessonType}
                        />
                     );
                  })}
               </ul>
            )}
         </div>
      </nav>
   );
}
