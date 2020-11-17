import FeaturedContent from 'components/featured-content/index';
import HeroSection from 'components/hero-section/index';
import PageFooter from 'components/page-footer/index';
import SiteNav from 'components/site-nav';
import Helmet from 'components/helmet';
import Hero from "components/hero";
import Logo from "components/logo"
import DefaultLayout from 'layouts/default/index';

const Home = (props) => (
  <DefaultLayout>
    <Helmet />
    <Hero />
    <Logo />
    {/* <SiteNav />
    <HeroSection /> */}
    <FeaturedContent />
    <PageFooter />
  </DefaultLayout>
);

export default Home;
