import { Link } from 'react-router-dom';
import { BLOG_INDEX_ROUTE, CONTACT_ROUTE, MAILING_LIST_ROUTE } from '../../routing';
import styles from './MainNavigation.module.css';

const items = [
  { path: BLOG_INDEX_ROUTE, label: 'My Blog' },
  { path: CONTACT_ROUTE, label: 'Contact' },
  { path: MAILING_LIST_ROUTE, label: 'Mailing List' }
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
