export default function Footer() {
  return (
    <section class="footer">
      <div class="container-footer">
        <a href="/">
          <img src="../img/ipsum.png" alt='Ipsum' />
        </a>
        <div class="footer-layout">
          <div class="footer-navigation-wrapper">
            <p>PAGES</p><a href="/">Home</a><a href="#company">Company</a><a href="#blog">Blog</a>
          </div>
          <div class="footer-form-wrapper">
            <p>SIGN UP TO OUR NEWSLETTER</p>
            <form>
              <input type="email" placeholder="Email address" />
              <button type='submit'>Get Started</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}