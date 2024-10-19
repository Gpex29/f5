import styles from '../../styles/footer.module.scss';

export default function Footer() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <a href="/">
          <img src="../img/ipsum.png" alt='Ipsum' />
        </a>
        <div className={styles.layout}>
          <div className={styles.navigation}>
            <p>PAGES</p><a href="/">Home</a><a href="#company">Company</a><a href="#blog">Blog</a>
          </div>
          <div className={styles.formWrapper}>
            <p>SIGN UP TO OUR NEWSLETTER</p>
            <form>
              <input type="email" placeholder="Email address" />
              <button type='submit'>Get Started</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}