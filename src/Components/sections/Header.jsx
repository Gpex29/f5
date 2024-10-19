import { logos } from '../../fakeData/data';
import styles from '../../styles/header.module.scss';

export default function Header() {
  return (
    <section className={styles.section} id="company">
      <div className={styles.container}>
        <div className={styles.topLayout}>
          <div className={styles.leftLayout}>
            <p><span>NEW</span> Stay connected to get upcoming jobs</p>
            <h1>Find the most <br/> exciting jobs in tech</h1>
          </div>
          <div className={styles.rightLayout}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi<br/>rhoncus, pharetra leo et. Sign in or sign up to get started!</p>
          </div>
        </div>
        <div className={styles.middleLayout}>
          <form>
            <input type="search" placeholder="Search..." />
            <button type='submit'>Search</button>
          </form>
           <img src="./img/sectionHeader/background.png" alt="high-rise building" />
        </div>
        <div className={styles.bottomLayout}>
          {logos.map((logo) => <img key={logo.alt} src={logo.src} alt={logo.alt} />)}
        </div>
      </div>
    </section>
  )
}