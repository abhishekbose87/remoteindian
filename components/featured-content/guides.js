import Link from 'next/link';
import { FeaturedContentWrap } from './style';
import FeaturedGuide from 'components/featured-guide';
import { getFeaturedGuides } from 'lib/guide';

const FeaturedGuides = () => (
  <FeaturedContentWrap className="featured-content-wrap mb-10">
    <div className="mx-10">
      <div className="swim-lane grid grid-cols-12 gap-6">
        {getFeaturedGuides().map((guide) => (
          <FeaturedGuide guide={guide} key={guide.url} />
        ))}
      </div>
      <p className="hidden md:block border-through featured-separator">
        <span>
          Guides most visited by the community&nbsp;
          <a href="/guides" className="dark-link hidden md:inline">
            View all Guides &rarr;
          </a>
        </span>
      </p>
      <p className="block md:hidden featured-separator">
        Guides most visited by the community&nbsp;
        <a href="/guides" className="dark-link inline-block mt-2">
          View all Guides &rarr;
        </a>
      </p>
    </div>
  </FeaturedContentWrap>
);

export default FeaturedGuides;
