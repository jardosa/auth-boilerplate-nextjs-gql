import React from 'react';
import Navbar from '../Navbar';

const MainLayout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto h-[calc(100vh-56px)]">
      <Navbar />
      <div className="h-full grid place-items-center">{children}</div>
    </div>
  );
};

export default MainLayout;
