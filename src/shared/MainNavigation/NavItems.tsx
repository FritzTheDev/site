import { Link } from 'react-router-dom';
import { BLOG_INDEX_ROUTE, DEMO_INDEX_ROUTE } from '../../routing';
import styles from './MainNavigation.module.css';

const items = [{ path: BLOG_INDEX_ROUTE, label: 'Blog' }, { path: DEMO_INDEX_ROUTE, label: 'Demos'}];

export const NavItems = () => {
  return (
    <ul className={styles.navList}>
      {items.map(({ path, label }) => (
        <Link key={path} to={path}>
          <li className={styles.navItem}>{label}</li>
        </Link>
      ))}{' '}
    </ul>
  );
};
