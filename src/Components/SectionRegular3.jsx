export default function SectionRegular3() {
  return (
    <section class="section-3">
      <div class="container-regular-3">
        <div class="container-regular-3-title">
          <div class="mobeile-detail">TESTIMONIAL</div>
          <h3>See what users say about our job platform</h3>
        </div>
        <div class="section-3-carousel">
          <div class="mobile-img"><img src="../img/mobile/monkey.png" alt="" /></div>
          <div class="section-3-slider-mask">
            <div class="testimonial-content-wrap">
              <p class="section-3-paragraph-1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna”</p>
              <p class="section-3-paragraph-2">David Sinclair - Senior Frontend Developer</p>
            </div>
            <img src="../img/section3/photo.png" alt='the man' />
          </div>
          <div class="buttons-group-3">
            <div>
              <button type='submit'>
                <img class="button-img" src="./img/buttons/previous.png" alt='previous' />
                </button>
            </div>
            <div>
              <button type='submit'>
                <img class="button-img" src="./img/buttons/next.png" alt='next' />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}