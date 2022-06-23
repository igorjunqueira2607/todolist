import React from 'react';

function Header () {
  return (
    <header className="top-0 lg:fixed w-full h-16 bg-red-500 flex justify-center items-center shadow-sm shadow-gray-700">
      <h1 className="font-medium text-xl text-white">Junqueira's To Do List</h1>
    </header>
  )
}

export default Header;