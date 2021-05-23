import { MainNav } from './MainNav';

export const MainLayout = ({ children }: { children?: JSX.Element }) => (
  <>
    <MainNav />
    {children}
  </>
);
