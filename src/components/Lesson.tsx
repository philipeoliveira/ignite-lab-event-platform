import { CheckCircle, Lock } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { toggleMenu } from '../utils/toggleMenu';

interface LessonProps {
   title: string;
   slug: string;
   availableAt: Date;
   type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
   const { slug } = useParams<{ slug: string }>();

   const isLessonAvailable = isPast(props.availableAt);
   const availableDateFormatted = format(
      props.availableAt,
      "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
      {
         locale: ptBR,
      }
   );
   /**
    * slug = aula ativa, a que vem da url
    * props.slug = slug da aula específica do componente, vinda do db
    */
   const isActiveLesson = slug === props.slug;

   return (
      <li>
         <Link
            to={`/event/lesson/${props.slug}`}
            onClick={() => toggleMenu()}
            className='group'
         >
            <span className='text-gray-300 text-xs xl:text-base'>
               {availableDateFormatted}
            </span>
            <div
               className={classNames(
                  'rounded border border-gray-500 p-3 xl:p-4 mt-2 group-hover:border-green-500 relative',
                  {
                     'bg-green-500': isActiveLesson,
                     'border-green-500': isActiveLesson,
                  }
               )}
            >
               {isActiveLesson && <span className={'lesson-left-arrow'}></span>}
               <header className='flex items-center justify-between'>
                  {isLessonAvailable ? (
                     <span
                        className={classNames(
                           'text-sm font-medium flex gap-2 items-center',
                           {
                              'text-white': isActiveLesson,
                              'text-blue-500': !isActiveLesson,
                           }
                        )}
                     >
                        <CheckCircle size={20} />
                        Conteúdo liberado
                     </span>
                  ) : (
                     <span className='text-sm text-orange-500 font-medium flex gap-2 items-center'>
                        <Lock size={20} />
                        Em breve
                     </span>
                  )}
                  <span
                     className={classNames(
                        'text-xs rounded py-[0.125rem] px-2 text-white border font-bold uppercase',
                        {
                           'border-white': isActiveLesson,
                           'border-green-300': !isActiveLesson,
                        }
                     )}
                  >
                     {props.type == 'live' ? 'Ao vivo' : 'Aula Prática'}
                  </span>
               </header>
               <strong
                  className={classNames('mt-3 xl:mt-5 block', {
                     'text-white': isActiveLesson,
                     'text-gray-200': !isActiveLesson,
                  })}
               >
                  {props.title}
               </strong>
            </div>
         </Link>
      </li>
   );
}
