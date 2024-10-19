import styles from '../../styles/features.module.scss';
import Feature from '../elements/Feature';

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.photo}>
          <img src="../img/section2/photo.png" alt='icon'  />
          <div>Partnership with Glassdoor and LinkedIn</div>
        </div>
        <div className={styles.mobile}>WHY CHOOSE US</div>
        <div className={styles.content}>
          <h3>Build a custom membership site with locked content.</h3>
          <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna, sit amet pulvinar diam. Sed laoreet feugiat consequat.</p>
          <div className={styles.featureContentLayout}>
            <Feature />
            <Feature />
            <Feature />
          </div>
        </div>
      </div>
    </section>
  )
}