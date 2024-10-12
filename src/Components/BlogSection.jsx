import { blogs } from '../fakeData/data';
import styles from '../styles/blog.module.scss';

export default function BlogSection() {
  return (
    <section class={styles.section} id="blog">
      <div class={styles.container}>
        <div class={styles.title}>
          <h3>Get the latest news about jobs!</h3>
          <div class="buttons-group">
            <div>
              <button type='submit'><img class="button-img" src="./img/buttons/previous.png" alt='previous' /></button>
            </div>
            <div>
              <button type='submit'><img class="button-img" src="./img/buttons/next.png" alt='next' /></button>
            </div>
          </div>
        </div>
        <div class={styles.carousel}>
          <div class={styles.sliderMask}>
            {blogs.map((blog) => {
              <div class={styles.listItem}>
                <div class={styles.card}>
                  <img src="../img/blog/resources.png" alt='resources' />
                </div>
                <div class={styles.text}>
                  <div class={styles.category}>
                    <p>{blog.category}</p>
                  </div>
                  <h5>{blog.text}</h5>
                  <div class={styles.data}>
                    <div> </div>
                    <p>{blog.data}</p>
                  </div>
                  <a href='/somewhere'>
                    <span>Read More </span>
                    <img src="./img/buttons/next.png" alt='next' />
                  </a>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}