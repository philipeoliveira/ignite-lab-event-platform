import { MonitorIcon } from '../components/MonitorIcon';
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Video } from '../components/Video';

export function Event() {
   const { slug } = useParams<{ slug: string }>();

   return (
      <div className='flex flex-col'>
         <Header />
         <div className='xl:flex xl:flex-1 xl:justify-center h-full mt-[75px] mx-auto'>
            <main id='main' className='xl:block'>
               <section className='z-0 min-h-full flex flex-col'>
                  <div className='flex-1 max-w-[1100px]'>
                     {slug ? (
                        <Video lessonSlug={slug} />
                     ) : (
                        <div className='flex flex-col xl:flex-row justify-center items-center m-10 min-h-[200px] gap-2'>
                           <div className='text-blue-500 mt-[0.4rem]'>
                              <MonitorIcon />
                           </div>
                           <div className='my-pulse text-center xl:text-left'>
                              <h1 className='text-3xl xl:text-[2.5rem] leading-tight'>
                                 Eventos do{' '}
                                 <strong className='text-blue-500'>
                                    Ignite Lab
                                 </strong>
                              </h1>
                              <p className='text-sm xl:text-base'>
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

            <Navbar />
         </div>
      </div>
   );
}
