import { MainNavigation } from './MainNavigation';

export const MainLayout = ({ children }: { children?: JSX.Element }) => (
  <>
    <MainNavigation />
    {children}
  </>
);
