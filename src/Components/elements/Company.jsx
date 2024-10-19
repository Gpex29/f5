import styles from '../../styles/elements/company.module.scss';

export default function Company({company}) {
    return (
        <div className={styles.item}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <img src={`../img/sectionCompanies/${company.name.toLowerCase()}.png`} alt='' />
                </div>
                <h6>{company.name}</h6>
            </div>
            <p>{company.text}</p>
            <div className={styles.card}>
                <div>{company.employees}</div>
                <div>employees</div>
            </div>
        </div>
    )
}