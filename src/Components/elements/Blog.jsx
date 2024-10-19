import styles from '../../styles/elements/blog.module.scss';

export default function Blog({blog}) {
    return (
        <div className={styles.listItem}>
            <div className={styles.card}>
                <img src={`../img/blog/${blog.category.toLowerCase()}.png`} alt={blog.category} />
            </div>
            <div className={styles.text}>
                <div className={styles.category}>
                    <p>{blog.category}</p>
                </div>
                <h5>{blog.text}</h5>
                <div className={styles.data}>
                    <div> </div>
                    <p>{blog.data}</p>
                </div>
                <a href='/somewhere'>
                    <span>Read More </span>
                    <img src="./img/buttons/next.png" alt='next' />
                </a>
            </div>
        </div>
    )
}