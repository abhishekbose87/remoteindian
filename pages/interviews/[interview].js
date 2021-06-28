import Error from "next/error";
import GuideLayout from 'layouts/guide';
import { serverOnlyProps } from 'lib/server';
import GuideHeader from 'components/interview-header';
import GuideBody from 'components/interview-body';
import GuideFooter from 'components/interview-footer';
import { getRequestedInterview } from 'lib/interview';
import Helmet from 'components/helmet';
import siteConfig from 'content/site';

const Interview = ({ guide, canonical }) => {
  if (!guide) {
    return <Error statusCode={ 404 } />
  }

  return (
    <GuideLayout>
      <Helmet
        title={ guide.title }
        description={ guide.description }
        og_image = {guide.og_image}
        canonical={ guide.canonical || canonical }
      />
      <GuideHeader guide={ guide } />
      <GuideBody guide={ guide } />
      <GuideFooter guide={ guide } />
    </GuideLayout>
  );
};

// Interview.getInitialProps = serverOnlyProps(async ({ req }) => {
//   return {
//     canonical: `${siteConfig.url.web}${req.url}`,
//     guide: await getRequestedInterview(req),
//   };
// });

export async function getStaticProps({ params }) {
  const guide = await getRequestedInterview(params.interview)

  return {
    props: {
      guide,
    },
  }
}

export async function getStaticPaths() {
  const interviews = require("../../content/interviews.json");

  const paths = interviews.map((interview) => ({
    params: {
      interview: interview.fileName,
    }
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Interview;
