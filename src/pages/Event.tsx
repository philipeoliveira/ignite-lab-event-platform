import { MonitorPlay } from 'phosphor-react';
import { useParams } from 'react-router-dom';
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
               <section className='min-h-full flex flex-1 flex-col'>
                  {slug ? (
                     <Video lessonSlug={slug} />
                  ) : (
                     <h1 className='flex flex-1 justify-center items-center gap-2'>
                        <MonitorPlay size={32} />
                        Escolha uma aula em{' '}
                        <span className='font-bold'>Cronograma de Aulas</span> e
                        bons estudos!
                     </h1>
                  )}

                  <div className='px-8 mt-10'>
                     <Footer />
                  </div>
               </section>
            </main>

            <Sidebar />
         </div>
      </div>
   );
}
