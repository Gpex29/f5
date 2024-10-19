import styles from '../../styles/section4.module.scss';

export default function SectionRegular4() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.icon}>
            <img src="../img/section4/search.png" alt='search' />
          </div>
          <div className={styles.text}>
            <h4>Explore a job now!</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus pharetra cursus. Suspendisse sodales porta leo, ac placerat ex pretium quis.</p>
          </div>
          <div className={styles.search}>
            <form>
              <input type="search" placeholder="Search..." />
              <button type='submit' >Search</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}