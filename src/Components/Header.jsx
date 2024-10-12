import { logos } from '../fakeData/data';

export default function Header() {
  return (
    <section class="header" id="company">
      <div class="container-header">
        <div class="header-top-layout">
          <div class="left-layout">
            <p><span>NEW</span> Stay connected to get upcoming jobs</p>
            <h1>Find the most <br/> exciting jobs in tech</h1>
          </div>
          <div class="right-layout">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi<br/>rhoncus, pharetra leo et. Sign in or sign up to get started!</p>
          </div>
        </div>
        <div class="header-middle-layout">
          <form>
            <input type="search" placeholder="Search..." />
            <button type='submit'>Search</button>
          </form>
           <img src="./img/sectionHeader/background.png" alt="high-rise building" />
        </div>
        <div class="header-bottom-layout">
          {logos.map((logo) => <img key={logo.alt} src={logo.src} alt={logo.alt} />)}
          <img src="./img/sectionHeader/openTable.png" alt="OpenTable" />
          <img src="./img/sectionHeader/hubSpot.png" alt="HubSpot" />
          <img src="./img/sectionHeader/amazon.png" alt="Amazon" />
          <img src="./img/sectionHeader/shopify.png" alt="Shopify" />
          <img src="./img/sectionHeader/slack.png" alt="Slack" />
          <img src="./img/sectionHeader/dropbox.png" alt="Dropbox" />
        </div>
      </div>
    </section>
  )
}