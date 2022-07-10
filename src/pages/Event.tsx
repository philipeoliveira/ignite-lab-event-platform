import { MonitorIcon } from '../components/MonitorIcon';
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Event() {
   const { slug } = useParams<{ slug: string }>();

   return (
      <div className='flex flex-col'>
         <Header />
         <div className='flex flex-1 justify-center'>
            <main>
               <section className='min-h-full flex flex-col'>
                  <div className='flex-1 max-w-[1100px]'>
                     {slug ? (
                        <Video lessonSlug={slug} />
                     ) : (
                        <div className='flex justify-center items-center h-64 gap-2'>
                           <div className='text-blue-500 mt-[0.4rem]'>
                              <MonitorIcon />
                           </div>
                           <div className='my-pulse'>
                              <h1 className='text-[2.5rem] leading-tight'>
                                 Eventos do{' '}
                                 <strong className='text-blue-500'>
                                    Ignite Lab
                                 </strong>
                              </h1>
                              <p>
                                 Escolha uma aula em{' '}
                                 <span className='text-blue-500'>
                                    Cronograma de Aulas
                                 </span>{' '}
                                 e bons estudos!
                              </p>
                           </div>
                        </div>
                     )}

                     <Card />
                  </div>

                  <Footer />
               </section>
            </main>

            <Sidebar />
         </div>
      </div>
   );
}
