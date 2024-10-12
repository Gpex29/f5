import {jobListData} from '../fakeData/data';

export default function SectionRegular1() {
  return (
    <section class="section-1">
      <div class="container-regular-1">
        <div class="container-1-title-wrap">
          <div>
            <h3>Explore the latest job openings</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna.</p>
          </div>
          <a href='/somewhere'>
            <button type='submit'>See All Jobs</button>
          </a>
        </div>
        <div class="list">
          {jobListData.map((job) => {
            <div class="list-item">
              <div class="list-item-header">
                <div class="icon-layout">
                  <picture><img class="icon" src={`./img/section1/${job.icon}`} alt={job.company} /></picture>
                </div>
                <div class="list-item-header-title">
                  <div>{job.company}</div>
                  <p>{job.date}</p>
                </div>
              </div>
              <h6>{job.title}</h6>
              <div class="list-item-job-tags">
                <div class="job-category">{job.category}</div>
                <div class="job-tags">{job.type}</div>
              </div>
              <div class="list-item-job-details">
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
          })}
        </div>
      </div>
    </section>
  )
}