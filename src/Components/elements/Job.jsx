import styles from '../../styles/elements/job.module.scss';

export default function Job({ job }) {
    return (
        <div className={styles.item} >
            <div className={styles.header}>
                <div className={styles.iconLayot}>
                    <img src={`./img/section1/${job.icon}`} alt={job.company} />
                </div>
                <div className={styles.title}>
                    <div>{job.company}</div>
                    <p>{job.date}</p>
                </div>
            </div>
            <h6>{job.title}</h6>
            <div className={styles.tags}>
                <div className={styles.category}>{job.category}</div>
                <div className={styles.type}>{job.type}</div>
            </div>
            <div className={styles.details}>
                <div>
                    <img src="./img/section1/location.png" alt="location" />
                    <span>
                        {job.location}
                    </span>
                </div>
                <div>
                    <img src="../img/section1/money.png" alt="money" />
                    <span>
                        {job.salary}
                    </span>
                </div>
            </div>
        </div>
    )
}