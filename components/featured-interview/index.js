import formatDate from 'date-fns/format';

import { Author, AuthorImage, AuthorName, BlockLink, BlockMeta, BlockSubtitle, BlockTitle, PublishDate, BlockImage } from './style';
import { findByUsername } from 'lib/author';

const FeaturedGuide = ({ guide }) => {
  const author = findByUsername(guide.author) || {};
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <BlockLink href={guide.url}>
        <div className="col-span-12 px-0">
          <BlockImage className="img-fluid" src={guide.image} />
        </div>
        <BlockTitle>{guide.title}</BlockTitle>
        <BlockSubtitle>
          {guide.featuredDescription || guide.description}
        </BlockSubtitle>
        <BlockMeta>
          <Author>
            <AuthorImage src={author.picture} />
            <AuthorName>{author.name}</AuthorName>
          </Author>
          <PublishDate>
            {formatDate(new Date(guide.createdAt), "MMMM d, yyyy")}
          </PublishDate>
        </BlockMeta>
      </BlockLink>
    </div>
  );
};

export default FeaturedGuide;
