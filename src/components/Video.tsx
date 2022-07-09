import { DefaultUi, Player, Youtube } from '@vime/react';
import { useGetLessonBySlugQuery } from '../graphql/generated';
import { DiscordLogo, Lightning, SpinnerGap } from 'phosphor-react';

import '@vime/core/themes/default.css';
import { Card } from './Card';

interface VideoProps {
   lessonSlug: string;
}

export function Video(props: VideoProps) {
   const { data } = useGetLessonBySlugQuery({
      variables: {
         slug: props.lessonSlug,
      },
   });

   if (!data || !data.lesson) {
      return (
         <div className='flex flex-1 justify-center items-center'>
            <SpinnerGap size={32} />
         </div>
      );
   }

   return (
      <div className='flex-1'>
         <div className='bg-black flex justify-center'>
            <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
               <Player>
                  <Youtube
                     videoId={data.lesson.videoId}
                     key={data.lesson.videoId}
                  />
                  <DefaultUi />
               </Player>
            </div>
         </div>

         <div className='p-8 max-w-[1100px] mx-auto'>
            <div className='flex items-start gap-16'>
               <div className='flex-1'>
                  <h1 className='text-2xl font-bold'>{data.lesson.title}</h1>
                  <p className='mt-4 text-gray-200 leading-relaxed'>
                     {data.lesson.description}
                  </p>
                  {data.lesson.teacher && (
                     <div className='flex items-center gap-4 mt-6'>
                        <img
                           className='h-16 rounded-full border-2 border-blue-500'
                           src={data.lesson.teacher.avatarURL}
                           alt={`Foto de ${data.lesson.teacher.name}`}
                        />
                        <div className='leading-relaxed'>
                           <span className='font-bold text-xl block'>
                              {data.lesson.teacher.name}
                           </span>
                           <span className='text-gray-200 text-sm block'>
                              {data.lesson.teacher.bio}
                           </span>
                        </div>
                     </div>
                  )}
               </div>

               <div className='flex flex-col gap-4'>
                  <a
                     href='#'
                     className='p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors'
                  >
                     <DiscordLogo size={24} />
                     Comunidade do Discord
                  </a>
                  <a
                     href='#'
                     className='p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors'
                  >
                     <Lightning size={24} />
                     Acesse o Desafio
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
