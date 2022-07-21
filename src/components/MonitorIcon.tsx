export function MonitorIcon() {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         fill='currentColor'
         viewBox='0 0 256 256'
         className='animated-monitor w-20 xl:w-24'
      >
         <rect width='256' height='256' fill='none'></rect>
         <polygon
            points='160 120 112 88 112 152 160 120'
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='5'
         ></polygon>
         <rect
            x='32'
            y='48'
            width='190'
            height='144'
            rx='16'
            transform='translate(256 240) rotate(180)'
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='5'
         ></rect>
         <line
            x1='160'
            y1='224'
            x2='96'
            y2='224'
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='5'
         ></line>
      </svg>
   );
}
