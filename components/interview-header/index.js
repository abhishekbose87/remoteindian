import formatDate from 'date-fns/format'
import {
  ActionItems,
  AuthorImage,
  EditGuide,
  GuideAuthor,
  GuideDate,
  GuideMeta,
  GuideSubtitle,
  GuideTitle,
  HeaderWrap,
  BlockImage,
} from './style';
import { getContributionUrl } from "lib/guide";
import { getTwitterUrl } from "lib/url";
import { faClock, faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { BadgeLink, BadgesList, PrimaryBadge, SecondaryBadge, DarkBadge } from 'components/badges';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GuideHeader = ({ guide, guide: { author = {} } = {} }) => (
  <HeaderWrap className="border-b">
    <div className="col-span-12 px-0">
      <BlockImage className="img-fluid" src={guide.image} />
    </div>
    <GuideTitle>{guide.title}</GuideTitle>
    <GuideSubtitle>{guide.description}</GuideSubtitle>
    <GuideMeta>
      {/* <GuideAuthor href={getTwitterUrl(author.twitter)} target="_blank">
        <AuthorImage src={author.picture} />
        {author.name}
      </GuideAuthor>
      &middot; */}
      <GuideDate>
        {formatDate(new Date(guide.createdAt), "MMMM d, yyyy")}
      </GuideDate>
      {/* <EditGuide href={ getContributionUrl(guide) } target="_blank">Improve this Guide</EditGuide> */}
    </GuideMeta>
    <ActionItems>
      <BadgesList className="mt-4">
        <BadgeLink href="/interviews">
          <SecondaryBadge>
            <FontAwesomeIcon icon={faArrowLeft} />
            Other Interviews
          </SecondaryBadge>
        </BadgeLink>
        <BadgeLink href={siteConfig.url.signUp}>
          <PrimaryBadge>
            <FontAwesomeIcon icon={faEnvelope} />
            Send me Updates
          </PrimaryBadge>
        </BadgeLink>
      </BadgesList>
    </ActionItems>
  </HeaderWrap>
);

export default GuideHeader;
