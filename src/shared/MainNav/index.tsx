import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { INDEX_ROUTE } from '../../routing';

import styles from './MainNav.module.css';
import { NavItems } from './NavItems';

export const MainNav = ({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav className={styles.navigation}>
      <Link to={INDEX_ROUTE}>
        <h1 className={styles.navBrand}>Fritz Johnson</h1>
      </Link>
      <button onClick={() => setOpen(true)} className={styles.mobileMenuButton}>
        Menu
      </button>
      <NavItems />
    </nav>
  );
};
