import { SetStateAction, Dispatch } from 'react';
import { NavItems } from './NavItems';

import styles from './MobileNav.module.css';

export const MobileNav = ({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`${styles.mobileNavBackdrop} ${open ? 'fade-in' : 'hidden'}`}
      ></div>
      <nav className={`${styles.mobileNavMenu} ${open ? 'fade-in' : 'hidden'}`}>
        <div className={styles.mobileNavContentWrapper}>
          <h3 className={styles.mobileNavMenuHeader}>Menu</h3>
          <ul className={styles.mobileNavList}>
            <NavItems />
            <li onClick={() => setOpen(false)} className={`${styles.lastNavItem} ${styles.closeButton}`}>
              Close Menu
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
