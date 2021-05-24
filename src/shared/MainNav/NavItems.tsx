import { Link } from 'react-router-dom';
import { BLOG_INDEX_ROUTE, CONTACT_ROUTE, ABOUT_ROUTE } from '../../routing';
import styles from './MainNav.module.css';

const items = [
  { path: BLOG_INDEX_ROUTE, label: 'Blog' },
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
