import { Author, AuthorImage, AuthorName, BlockLink, BlockMeta, BlockSubtitle, BlockTitle, PublishDate, BlockImage } from './style';

const Product = ({ product }) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <BlockLink href={product.url} target="_blank">
        <div className="col-span-12 px-0">
          <BlockImage className="img-fluid" src={product.image_url} />
        </div>
        <BlockTitle>{product.title}</BlockTitle>
        {/* <BlockSubtitle>{product.category}</BlockSubtitle> */}
        <BlockMeta>
          <Author>
            {/* <AuthorImage src={author.picture} /> */}
            <AuthorName>{product.category}</AuthorName>
          </Author>
        </BlockMeta>
      </BlockLink>
    </div>
  );
};

export default Product;
