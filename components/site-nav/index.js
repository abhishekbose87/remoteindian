import { HeaderWrap } from './style';
import siteConfig from "content/site";

const SiteNav = () => (
  <HeaderWrap>
    <div className="flex max-w-screen-xl mx-auto flex items-center justify-between md:px-24 inline-block text-sm text-bold text-gray-700 border-b py-2">
      <div className="flex-grow-1 brand">
        <a href="/">
          <img src="/brand.png" alt="" />
        </a>
      </div>
      <div className="nav-links">
        <a href="/interviews">Interviews</a>
        <a href="/guides">Guides</a>
        <a href="/sponsor">
          Sponsor
        </a>
        {/* <a href='/sponsors' className='d-none d-md-inline-block'>Sponsors</a>
        <a href='/about' className='d-none d-md-inline-block'>FAQ</a>*/}
        <a href={siteConfig.url.signUp} className="signup">
          Join Us
        </a>
      </div>
    </div>
  </HeaderWrap>
);

export default SiteNav;
