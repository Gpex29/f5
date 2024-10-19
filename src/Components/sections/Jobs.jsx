import {jobListData} from '../../fakeData/data';
import Job from '../elements/Job';
import styles from '../../styles/jobs.module.scss';

export default function Jobs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            <h3>Explore the latest job openings</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna.</p>
          </div>
          <a href='/somewhere'>
            <button type='submit'>See All Jobs</button>
          </a>
        </div>
        <div className={styles.list}>
          {jobListData.map((job) => <Job job={job} key={job.id} />)}
        </div>
      </div>
    </section>
  )
}