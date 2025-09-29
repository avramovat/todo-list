import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopPage from './pages/DesktopPage';
import TabletPage from './pages/TabletPage';
import MobilePage from './pages/MobilePage';

const ResponsiveRouter = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  if (isMobile) return <MobilePage />;
  if (isTablet) return <TabletPage />;
  if (isDesktop) return <DesktopPage />;
  
  return null; 
};

export default ResponsiveRouter;


