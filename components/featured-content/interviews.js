import Link from 'next/link';
import { FeaturedContentWrap } from './style';
import FeaturedGuide from 'components/featured-interview';
import { getFeaturedInterviews } from 'lib/interview';

const FeaturedInterviews = () => (
  <FeaturedContentWrap className="featured-content-wrap">
    <div className="mx-10">
      <div className="swim-lane grid grid-cols-12 gap-4">
        {getFeaturedInterviews().map((guide) => (
          <FeaturedGuide guide={guide} key={guide.url} />
        ))}
      </div>
      <p className="hidden md:block border-through featured-separator">
        <span>
          {/* Interviews most visited by the community&nbsp; */}
          <a href="/interviews" className="dark-link hidden md:inline">
            View all Interviews &rarr;
          </a>
        </span>
      </p>
      <p className="block md:hidden featured-separator">
        {/* Interviews most visited by the community&nbsp; */}
        <a href="/interviews" className="dark-link inline-block mt-2">
          View all Interviews &rarr;
        </a>
      </p>
    </div>
  </FeaturedContentWrap>
);

export default FeaturedInterviews;
