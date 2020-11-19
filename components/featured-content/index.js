import { FeaturedWrap } from './style';
import FeaturedGuides from './guides';
import FeaturedInterviews from './interviews';
// import FeaturedRoadmaps from './roadmaps';

const FeaturedContent = (props) => (
  <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-6 md:py-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center ">
          <h2 className="h2 mb-4">
            A community of peer learning
          </h2>
          <p className="text-xl text-gray-600">
            Easy to follow guides on complex topics written and maintained by
            the community
          </p>
        </div>

        <FeaturedWrap className="">
          <FeaturedGuides />
        </FeaturedWrap>
      </div>
    </div>
  </section>
);

FeaturedContent.defaultProps = {
  className: '',
};

export default FeaturedContent;
