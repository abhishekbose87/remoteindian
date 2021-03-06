import FeaturedContent from 'components/featured-content/index';
import HeroSection from 'components/hero-section/index';
import PageFooter from 'components/page-footer/index';
import Nav from 'components/nav';
import SiteNav from 'components/site-nav';
import Helmet from 'components/helmet';
import Hero from "components/hero";
import Logo from "components/logo"
import SlackSection from "components/slack-section";
import Testimonials from "components/testimonials";
import CTA from "components/cta";
import Sponsors from "components/sponsors";
import DefaultLayout from 'layouts/default/index';

const Home = (props) => (
  <DefaultLayout>
    <Helmet />
    {/* <SiteNav /> */}
    <Nav />
    <Hero />

    {/*<HeroSection /> */}
    <SlackSection />
    <Logo />
    <FeaturedContent />
    <Testimonials />
    <Sponsors />
    <CTA />
    <PageFooter />
  </DefaultLayout>
);

export default Home;