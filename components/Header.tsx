import React from 'react';

export default function Header() {
  return (
    <div className="text-center">
      <h1 className='mb-6 text-2xl font-bold'>Hello, I am Ehab Fullstack developer</h1>
      <div className="flex justify-center gap-2">
        <div className='px-4 py-1 rounded-md cursor-pointer' style={{background: '#212121'}}>
            <i className='pi pi-envelope pr-2 pt-1'></i>
            <span>Email</span>
        </div>
        <div className='px-4 py-1 rounded-md cursor-pointer' style={{background: '#212121'}}>
        <i className='pi pi-github pr-2 pt-1'></i>
        <span>Github</span>
        </div>
        <div className='px-4 py-1 rounded-md cursor-pointer' style={{background: '#212121'}}>
        <i className='pi pi-linkedin pr-2 pt-1'></i>
        <span>Linkedin</span>
        </div>
      </div>
    </div>
  );
}