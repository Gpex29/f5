import { companies } from '../fakeData/data';

export default function SectionCompanies() {
  return (
    <section class="section-companies">
      <div class="container-companies">
        <div class="companies-header">
          <div class="companies-title-wrapper">
            <h3>Work with exciting companies</h3>
            <p>Discover more than 1,600 open positions</p>
          </div>
          <div class="buttons-group-companies">
            <div>
              <button type='submit' class="prev-btn"><img src="../img/buttons/previous.png" alt='previous' /></button>
            </div>
            <div>
              <button type='submit' class="next-btn"><img src="../img/buttons/next.png" alt='next' /></button>
            </div>
          </div>
        </div>
        <div class="region-carousel">
          <div class="slider-mask">
            {companies.map((company) => {
              <div class="carousel-list-item item-0">
                <div class="company-card-header">
                  <div class="icon-wrap-regular">
                    <img src={`../img/sectionCompanies/${company.name.toLowerCase()}.png`} alt='' />
                  </div>
                  <h6>{company.name}</h6>
                </div>
                <p>{company.text}</p>
                <div class="company-card-employees">
                  <div>{company.employees}</div>
                  <div>employees</div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}