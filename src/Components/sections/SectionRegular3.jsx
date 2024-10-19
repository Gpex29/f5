import styles from '../../styles/section3.module.scss';

export default function SectionRegular3() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.mobeileDetail}>TESTIMONIAL</div>
          <h3>See what users say about our job platform</h3>
        </div>
        <div className={styles.carousel}>
          <div className={styles.mobeileImg}><img src="../img/mobile/monkey.png" alt="" /></div>
          <div className={styles.slider}>
            <div className={styles.content}>
              <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna”</p>
              <p>David Sinclair - Senior Frontend Developer</p>
            </div>
            <img src="../img/section3/photo.png" alt='the man' />
          </div>
          <div className={styles.buttons}>
            <div>
              <button>
                <img src="./img/buttons/previous.png" alt='previous' />
              </button>
            </div>
            <div>
              <button>
                <img src="./img/buttons/next.png" alt='next' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}