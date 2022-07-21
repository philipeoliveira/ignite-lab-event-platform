import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';

import codeImage from '../assets/code-mockup.png';

import { useCreateSubscriberMutation } from '../graphql/generated';

export function Subscribe() {
   const navigate = useNavigate();

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');

   const [createSubscriber, { loading }] = useCreateSubscriberMutation();

   async function handleSubscribe(event: FormEvent) {
      event.preventDefault();

      await createSubscriber({
         variables: {
            name,
            email,
         },
      });

      navigate('/event');
   }

   return (
      <div className='bg-blurBackground bg-cover bg-no-repeat'>
         <main className='flex flex-col items-center md:mx-10'>
            <div className='bg-reactIconBackground bg-no-repeat bg-top'>
               <div className='w-full max-w-[1100px] flex flex-col xl:flex-row items-center justify-between mt-16 md:mt-20 mx-auto gap-12'>
                  <div className='flex flex-col items-center justify-center xl:items-start xl:max-w-[640px] px-10 md:px-0 text-center xl:text-left'>
                     <div className='w-[237px]'>
                        <Logo />
                     </div>
                     <h1 className='mt-8 text-3xl md:text-[2.5rem] leading-tight'>
                        Construa uma
                        <strong className='text-blue-500'>
                           {' '}
                           aplicação completa
                        </strong>
                        , do zero, com
                        <strong className='text-blue-500'> React</strong>
                     </h1>
                     <p className='mt-4 text-gray-200 leading-relaxed'>
                        Em apenas uma semana você vai dominar na prática uma das
                        tecnologias mais utilizadas e com alta demanda para
                        acessar as melhores oportunidades do mercado.
                     </p>
                  </div>
                  <div className='w-full xl:w-auto p-8 bg-gray-700 border border-gray-500 rounded'>
                     <strong className='text-xl xl:text-2xl mb-6 block'>
                        Inscreva-se gratuitamente
                     </strong>
                     <form
                        onSubmit={handleSubscribe}
                        className='flex flex-col gap-2 w-full'
                     >
                        <input
                           type='text'
                           required
                           className='bg-gray-900 rounded px-5 h-12 xl:h-14 hover:outline hover:outline-1 hover:outline-green-500 focus:outline focus:outline-green-500 focus:invalid:outline-red-500'
                           placeholder='Seu nome completo'
                           onChange={(event) => setName(event.target.value)}
                        />
                        <input
                           type='email'
                           required
                           className='bg-gray-900 rounded px-5 h-12 xl:h-14 hover:outline hover:outline-1 hover:outline-green-500 focus:outline focus:outline-green-500 focus:invalid:outline-red-500'
                           placeholder='Digite seu e-mail'
                           onChange={(event) => setEmail(event.target.value)}
                        />
                        <button
                           type='submit'
                           className='mt-4 bg-green-500 uppercase py-3 xl:py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
                           disabled={loading}
                        >
                           Garantir minha vaga
                        </button>
                     </form>
                  </div>
               </div>

               <img
                  src={codeImage}
                  alt='Imagem ilustrativa de códigos de programação'
                  className='px-5 md:px-0'
               />
            </div>
         </main>

         <Footer />
      </div>
   );
}
