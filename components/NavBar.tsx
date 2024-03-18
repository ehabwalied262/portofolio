import React from 'react';
import ToggleDarkMode from './ToggleDarkMode';

export default function NavBar() {
  
  return (
    <nav className="flex justify-between items-center py-4 px-8">
      <div className="font-bold">Ehab.dev</div>
      <div className='flex items-center gap-4'>
        {/* <a href="#"  >Home</a>
        <a href="#"  >About</a>
        <a href="#"  >Projects</a>
        <a href="#">Contact</a> */}
        <ToggleDarkMode />
      </div>
    </nav>
  );
}