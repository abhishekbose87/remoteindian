import { faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BadgeLink, BadgesList, PrimaryBadge, SecondaryBadge } from 'components/badges';
import FeaturedGuide from 'components/featured-interview';
import DefaultLayout from 'layouts/default/index';
import PageHeader from 'components/page-header';
import PageFooter from 'components/page-footer';
import SiteNav from 'components/site-nav';
import Nav from 'components/nav';
import { getAllInterviews } from 'lib/interview';
import siteConfig from 'content/site';
import Helmet from 'components/helmet';

const PageTitle = "RI Interviews";
const PageDescription = "Get inspired by reading stories of folks who are working remotely in India 🇮🇳";

const GuidesList = () => (
  <DefaultLayout>
    <Helmet title={PageTitle} desciption={PageDescription} />
    <SiteNav />
    <PageHeader title={PageTitle} subtitle={PageDescription}>
      <BadgesList className="mt-4">
        <BadgeLink href={siteConfig.url.addInterview} target="_blank">
          <SecondaryBadge>
            <FontAwesomeIcon icon={faCodeBranch} />
            Share your story
          </SecondaryBadge>
        </BadgeLink>
        <BadgeLink href="/signup">
          <PrimaryBadge>
            <FontAwesomeIcon icon={faEnvelope} />
            Send me Updates
          </PrimaryBadge>
        </BadgeLink>
      </BadgesList>
    </PageHeader>
    <div className="pt-5 pb-5 bg-light border-top">
      <div className="px-10">
        <div className="grid grid-cols-12 gap-6">
          {getAllInterviews().map((guide) => (
            <FeaturedGuide guide={guide} key={guide.url} />
          ))}
        </div>
      </div>
    </div>
    <PageFooter />
  </DefaultLayout>
);

export default GuidesList;
