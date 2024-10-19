import { blogs } from '../../fakeData/data';
import styles from '../../styles/blogs.module.scss';
import Blog from '../elements/Blog';

export default function Blogs() {
  return (
    <section className={styles.section} id="blog">
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Get the latest news about jobs!</h3>
          <div className="buttons-group">
            <div>
              <button type='submit'><img className="button-img" src="./img/buttons/previous.png" alt='previous' /></button>
            </div>
            <div>
              <button type='submit'><img className="button-img" src="./img/buttons/next.png" alt='next' /></button>
            </div>
          </div>
        </div>
        <div className={styles.carousel}>
          <div className={styles.sliderMask}>
            {blogs.map((blog) => <Blog blog={blog} key={blog.id}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}