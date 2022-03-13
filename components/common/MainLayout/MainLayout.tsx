import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useWhoAmILazyQuery } from '../../../generated/graphql';
import logout from '../../../utils/logout';
import Navbar from '../Navbar';

const MainLayout: React.FunctionComponent = ({ children }) => {
  const router = useRouter();
  const [getProfile] = useWhoAmILazyQuery({ onError: logout });

  useEffect(() => {
    const { pathname } = router;
    if (!pathname.startsWith('/auth/login')) {
      getProfile();
    }
  }, [router, getProfile]);

  return (
    <div className="max-w-[1440px] mx-auto h-[calc(100vh-56px)]">
      <Navbar />
      <div className="h-full grid place-items-center">{children}</div>
    </div>
  );
};

export default MainLayout;
