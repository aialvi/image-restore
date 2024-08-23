import MobileNav from '@/components/shared/MobileNav';
import Sidebar from '@/components/shared/Sidebar';
import { SignedIn } from '@clerk/nextjs';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root'>
      <SignedIn>
        <Sidebar />
      </SignedIn>
      <MobileNav />

      <div className='root-container'>
        <div className='wrapper'>
          <div className='content'>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
