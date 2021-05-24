import { MainLayout } from '../../shared';
import styles from './HomeLayout.module.css';
import { WelcomeBar } from './WelcomeBar';

export const Home = () => (
  <>
    <MainLayout />
    <main className={styles.mainGrid}>
      <WelcomeBar />
    </main>
  </>
);
