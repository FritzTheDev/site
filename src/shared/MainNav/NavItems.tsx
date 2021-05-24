import { Link } from 'react-router-dom';
import { CONTACT_ROUTE, PROJECTS_ROUTE, INDEX_ROUTE } from '../../routing';
import styles from './MainNav.module.css';

const items = [
  { path: INDEX_ROUTE, label: 'Home' },
  { path: PROJECTS_ROUTE, label: 'Projects' },
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
