import styles from '../../styles/elements/feature.module.scss';

export default function Feature() {
    return (
        <div className={styles.content}>
            <div className={styles.icon}>
                <img src="../img/section2/icon.png" alt='icon' />
            </div>
            <div>
                <h6>Add a feature point here</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    )
}