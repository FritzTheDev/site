import { Link } from 'react-router-dom';
import { BLOG_INDEX_ROUTE, CONTACT_ROUTE, ABOUT_ROUTE } from '../../routing';

import styles from './MobileNav.module.css';

const items = [
  { path: BLOG_INDEX_ROUTE, label: 'My Blog' },
  { path: CONTACT_ROUTE, label: 'Contact Me' },
  { path: ABOUT_ROUTE, label: 'About Fritz' }
];

export const NavItems = () => {
  return (
    <>
      {items.map(({ path, label }) => (
        <Link key={path} to={path}>
          <li className={styles.navItem}>{label}</li>
        </Link>
      ))}
    </>
  );
};
