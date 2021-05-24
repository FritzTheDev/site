import { useState } from 'react';
import { MainNav } from './MainNav';
import { MobileNav } from './MobileNav';

export const MainLayout = ({ children }: { children?: JSX.Element }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MainNav open={open} setOpen={setOpen} />
      <MobileNav open={open} setOpen={setOpen} />
      {children}
    </>
  );
};
