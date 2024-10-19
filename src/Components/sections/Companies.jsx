import { companies } from '../../fakeData/data';
import styles from '../../styles/companies.module.scss';
import Company from '../elements/Company';

export default function Companies() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h3>Work with exciting companies</h3>
            <p>Discover more than 1,600 open positions</p>
          </div>
          <div className={styles.buttons}>
            <div>
              <button type='submit' className="prev-btn"><img src="../img/buttons/previous.png" alt='previous' /></button>
            </div>
            <div>
              <button type='submit' className="next-btn"><img src="../img/buttons/next.png" alt='next' /></button>
            </div>
          </div>
        </div>
        <div className={styles.carousel}>
          <div className={styles.slider}>
            {companies.map((company) => <Company company={company} key={company.id}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}