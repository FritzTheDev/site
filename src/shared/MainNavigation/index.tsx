import { Link } from 'react-router-dom';

import { INDEX_ROUTE } from '../../routing';

import styles from './MainNavigation.module.css';
import { NavItems } from './NavItems';

export const MainNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link to={INDEX_ROUTE}>
        <h1 className={styles.navBrand}>Fritz Johnson</h1>
      </Link>
      <button className={styles.mobileMenuButton}>Menu</button>
      <NavItems />
    </nav>
  );
};
