import { FeaturedWrap } from './style';
import FeaturedGuides from './guides';
import FeaturedInterviews from './interviews';
// import FeaturedRoadmaps from './roadmaps';

const FeaturedContent = (props) => (
  <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center ">
          <h2 className="h2">
            A community of peer learning and sharing knowledge
          </h2>
        </div>

        <FeaturedWrap className="">
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
