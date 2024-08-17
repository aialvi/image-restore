import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root'>
      <div className='root-container'>
        <div className='wrapper'>
          <div className='content'>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
