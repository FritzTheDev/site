import styles from './WelcomeBar.module.css';

export const WelcomeBar = () => {
  return (
    <div className={styles.welcomeBar}>
      <img src='/fritz-transparent.png' alt='Portrait of Fritz Johnson' />
      <div>
        <h1>My name is Fritz. I like using React, Express, & TailwindCSS</h1>
        <p>
          I've been programming since 2017, mostly self-taught. During that time, I've
          worked on dozens of important projects for various employers including{' '}
          <a className={styles.link} href='https://bitwiseindustries.com/'>
            Bitwise Industries
          </a>
          ,{' '}
          <a className={styles.link} href='https://sixdegreesmrm.com/'>
            Six Degrees MRM
          </a>
          , and The Water Agency, Inc.
        </p>
        <p>
          My background is mostly in HTML, CSS, & JavaScript / TypeScript (Mostly React Frontends &
          Express Backends) but I'm also proficient with Python (Django) and lately I've been using
          Java to improve my grasp on the CS side of things.
        </p>
        <p>
          I've been working contract to contract since November of 2020, and I'm eager to pursue bigger
          & more permanent opportunities. I'd encourage you to follow me on twitter at{' '}
          <a className={styles.link} href='https://twitter.com/FritzTheDev'>
            @FritzTheDev
          </a>{' '}
          - and don't hesitate to send me a DM to say hi!
        </p>
      </div>
    </div>
  );
};
