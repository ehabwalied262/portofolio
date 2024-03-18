import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div className="text-center flex flex-col items-center mt-6">
      <h1 className='mb-6 text-2xl font-bold'>Fullstack developer 👋 </h1>
      <p className='mb-6 text-base font-normal max-w-96'>Hey, it's Ehab! I'm a versatile Fullstack Developer, Based in Egypt. 🎈</p>
      <div className="flex justify-center gap-2">
        <div className='px-4 py-1 rounded-md cursor-pointer hover:opacity-90 shadow-lg'>
            <i className='pi pi-envelope pr-2 pt-1'></i>
            <span>Email</span>
        </div>
        <div className='px-4 py-1 rounded-md cursor-pointer hover:opacity-90 shadow-lg' >
        <i className='pi pi-github pr-2 pt-1'></i>
        <span>Github</span>
        </div>
        <div className='px-4 py-1 rounded-md cursor-pointer hover:opacity-90 shadow-lg' >
        <i className='pi pi-linkedin pr-2 pt-1'></i>
        <span>Linkedin</span>
        </div>
      </div>
        <h4 className='pt-8 pb-4'>Tech stack : </h4>
      <div className='flex gap-4 items-center'>
        <Image src='/html.png' alt={'html'} width={40} height={40} />
        <Image src='/css.png' alt={'css'} width={40} height={40} />
        <Image src='/js-icon.png' alt={'js'} width={40} height={40} />
        <Image src='/flutter.png' alt={'flutter'} width={40} height={40} />
        <Image src='/react.png' alt={'react'} width={40} height={40} />
        <Image src='/tailwind.png' alt={'tailwind'} width={40} height={40} />
        <Image src='/node.png' alt={'node'} width={40} height={40} />
        <Image src='/postgres.png' alt={'postgres'} width={40} height={40} />
      </div>
    </div>
  );
}