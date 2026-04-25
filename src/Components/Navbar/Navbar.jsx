import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react' 
// Importing React so we can use JSX (HTML-like syntax inside JavaScript)

const Navbar = () => {  
  // This is a FUNCTION COMPONENT in React
  // It returns JSX (UI) that will be rendered on the screen
  const[menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);


  return (
    // RETURN → Whatever is inside this will be displayed in the browser

    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20'>
      {/* 
        <nav> = Semantic HTML tag used for navigation bars (better for SEO & accessibility)
         */}

      <span className="text-xl font-bold tracking-wide">
        {/* 
          <span> = Inline element used for small text or branding
        */}
        Jai Ganesh Bhagwan Ji
      </span>

      <ul 
        className= {`${menu ? "block" : "hidden"}
            mx-24 py-2 mt-4 font-semibold bg-black px-2 rounded-xl bg-opacity-30 text-center md:bg-transparent md:border-none md:static md:mx-0 md:flex gap-16`}
            >
    

        <a href='About'>
          {/* 
            <a> = Anchor tag (used for navigation links)
            href='' → Destination (currently empty, will link later)
          */}
          <li className='text-md transition-all duration-300 p-1 md:p-0'>
            {/*
              <li> = List Item (each menu option)
            */}
            About
          </li>
        </a>

        <a href='Experience'>
          <li className='text-md transition-all duration-300 p-1 md:p-0'>
            Experience
          </li>
        </a>

        <a href='Projects'>
          <li className='text-md transition-all duration-300 p-1 md:p-0'>
            Projects
          </li>
        </a>

        <a href='Contact'>
          <li className='text-md transition-all duration-300 p-1 md:p-0'>
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line size={30}
        className='md:hidden absolute right-10 top-6 transition-all duration-300'
        onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
        }}
        />
    ): (
        <RiCloseLine size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300'/>
    )}
    </nav>
  )
}

export default Navbar
// This allows you to IMPORT this component into other files (like App.jsx)
