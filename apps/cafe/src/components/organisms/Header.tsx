'use client';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md w-full h-24">
      <div className="container mx-auto flex justify-around items-center px-4">
        <nav className="space-x-8">
          <Link href="/">Hello</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
