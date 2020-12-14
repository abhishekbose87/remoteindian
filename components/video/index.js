import { Author, AuthorImage, AuthorName, BlockLink, BlockMeta, BlockSubtitle, BlockTitle, PublishDate, BlockImage } from './style';

const Video = ({ video }) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4" key={video.id}>
      <BlockLink href={video.url} target="_blank">
        <div className="col-span-12 px-0">
          <BlockImage className="img-fluid" src={`/videos/${video.image_id}`} />
        </div>
        <BlockTitle>{video.title}</BlockTitle>
        {/* <BlockSubtitle>{video.description}</BlockSubtitle> */}
        <div
          className="text-sm text-gray-600 mt-4"
          dangerouslySetInnerHTML={{
            __html: video.description,
          }}
        ></div>
        <BlockMeta>
          <Author>
            {/* <AuthorImage src={author.picture} /> */}
            {/* <AuthorName>{video.category}</AuthorName> */}
          </Author>
        </BlockMeta>
      </BlockLink>
    </div>
  );
};

export default Video;
