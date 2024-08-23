import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  const navLinks = [
    { label: 'Pricing', route: '/pricing' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Login', route: '/login' },
  ];
  return (
    <nav className='hidden md:flex items-center justify-between w-full px-8 py-4 bg-white shadow-md'>
      <Link href='/'>
        <span className='text-2xl text-gray-800 font-bold'>
          ImageRestore
        </span>
      </Link>
      <ul className='flex items-center gap-8'>
        {navLinks.map((link) => (
          <li key={link.route}>
            <Link href={link.route}>
              <span className='text-lg text-gray-800 font-semibold'>
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href='/sign-up'>
        <button className='px-4 py-2 text-lg text-white bg-primary rounded-md'>
          Retouch Image
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
