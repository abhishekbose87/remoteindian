import { FeaturedWrap } from './style';
import FeaturedGuides from './guides';
import FeaturedInterviews from './interviews';
// import FeaturedRoadmaps from './roadmaps';

const FeaturedContent = (props) => (
  <section>
    <div className="mx-auto">
      <div className="py-6 md:py-10 ">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
          <h1 className="header">A community of peer learning</h1>
          <h1 className="header">and sharing knowledge</h1>
          <p className="tagline">
            Learn through the experience of folks who have been doing remote work for
            a while.
          </p>
        </div>

        <FeaturedWrap>
          <FeaturedGuides />
          <FeaturedInterviews />
        </FeaturedWrap>
      </div>
    </div>
  </section>
);

FeaturedContent.defaultProps = {
  className: '',
};

export default FeaturedContent;
