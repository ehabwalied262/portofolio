import React from 'react'
import ToggleDarkMode from './ToggleDarkMode'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 text-white">
    <div className="font-bold">Ehab.dev</div>
      {/* <ToggleDarkMode /> */}
    <div>
        <a href="#" className="mr-4">Home</a>
        <a href="#" className="mr-4">Projects</a>
        <a href="#" className="mr-4">About</a>
        <a href="#">Contact</a>
    </div>
    </nav>
  )
}
