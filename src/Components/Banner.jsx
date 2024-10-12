import styles from '../styles/banner.module.scss';

export default function Banner() {
  return (
    <header className={styles.banner}>
      <nav className={styles.container}>
        <a href="/">
          <img src="./img/ipsum.png" alt='ipsum' />
        </a>
        <ul className={styles.container.middle}>
          <li><a href="/">Home</a></li>
          <li><a href="#company">Company</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        <div className={styles.container.right}><a href="/post">Post a Job</a>
          <button type='button'>Log in </button>
        </div>
        <div className={styles.mobile}>
          <img src="img/mobile/menu.png" alt="" />
        </div>
      </nav>
    </header>
  )
}