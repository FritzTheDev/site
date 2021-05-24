import { Link } from 'react-router-dom';
import { CONTACT_ROUTE, ABOUT_ROUTE, INDEX_ROUTE } from '../../routing';
import styles from './MainNav.module.css';

const items = [
  { path: INDEX_ROUTE, label: 'Home' },
  { path: ABOUT_ROUTE, label: 'About' },
  { path: CONTACT_ROUTE, label: 'Contact' }
];

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
