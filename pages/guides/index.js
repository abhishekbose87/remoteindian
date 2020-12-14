import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BadgeLink, BadgesList, PrimaryBadge, SecondaryBadge } from 'components/badges';
import FeaturedGuide from 'components/featured-guide';
import DefaultLayout from 'layouts/default/index';
import PageHeader from 'components/page-header';
import PageFooter from 'components/page-footer';
import SiteNav from 'components/site-nav';
import Nav from "components/nav";
import IconRowBlock from "components/icon-row-block";
import RowBlock from "components/row-block";
import { getAllGuides } from 'lib/guide';
import siteConfig from 'content/site';
import Helmet from 'components/helmet';

const PageTitle = "RI Guides";
const PageDescription = "Easy to follow guides on complex topics written and maintained by the community";

function getBadgeText(guide) {
  if (guide.upcoming) {
    return "Upcoming";
  }

  return "";
}

const GuidesList = () => (
  <DefaultLayout>
    <Helmet title={PageTitle} desciption={PageDescription} />
    <Nav />
    <PageHeader title={PageTitle} subtitle={PageDescription}>
      <BadgesList className="mt-4">
        <BadgeLink href={siteConfig.url.addGuide} target="_blank">
          <SecondaryBadge>
            <FontAwesomeIcon icon={faCodeBranch} />
            Write a Guide
          </SecondaryBadge>
        </BadgeLink>
        <BadgeLink href={siteConfig.url.signUp}>
          <PrimaryBadge>
            <FontAwesomeIcon icon={faEnvelope} />
            Send me Updates
          </PrimaryBadge>
        </BadgeLink>
      </BadgesList>
    </PageHeader>
    <div className="pt-5 pb-5 bg-gray-100 border-t">
      <div className="mx-auto max-w-screen-xl">
        <div className="px-10">
          <div className="grid grid-cols-12">
            {getAllGuides().map((guide) => (
              // <FeaturedGuide guide={guide} key={guide.url} />
              <RowBlock
                key={guide.url}
                title={guide.title}
                subtitle={guide.featuredDescription || guide.description}
                url={guide.url}
                disabled={guide.upcoming}
                badge={getBadgeText(guide)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <PageFooter />
  </DefaultLayout>
);

export default GuidesList;
