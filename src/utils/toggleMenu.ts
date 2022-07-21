export function toggleMenu() {
   const nav = document.getElementById('nav');
   const menu = document.getElementById('menu');
   const hamburgerFull = document.getElementById('hamburger-full');
   const hamburgerOn = document.getElementById('hamburger-on');
   const hamburgerOff = document.getElementById('hamburger-off');
   const main = document.getElementById('main');
   const active = nav?.classList.toggle('active');

   if (active) {
      menu?.classList.remove('hidden');
      hamburgerFull?.classList.replace('text-blue-500', 'text-red-500');
      hamburgerOff?.classList.remove('hidden');
      hamburgerOn?.classList.add('hidden');
      main?.classList.add('hidden');
   } else {
      menu?.classList.add('hidden');
      hamburgerFull?.classList.replace('text-red-500', 'text-blue-500');
      hamburgerOn?.classList.remove('hidden');
      hamburgerOff?.classList.add('hidden');
      main?.classList.remove('hidden');
   }

   return active;
}
