import Error from "next/error";
// import { serverOnlyProps } from "lib/server";
// import { getRequestedJob } from "lib/jobs";
import DefaultLayout from "layouts/default/index";
import Helmet from "components/helmet";
import siteConfig from "content/site";
import Nav from "components/nav";
import PageFooter from "components/page-footer/index";
import PageHeader from "components/page-header";

/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid'

const PageTitle = "WFH Tools";
const PageDescription =
  "60+ Products curated by the RemoteIndian community 👨‍💻🇮🇳👩‍💻";

const JobDetail = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900">Margot Foster</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Application for</dt>
            <dd className="mt-1 text-sm text-gray-900">Backend Developer</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900">margotfoster@example.com</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
            <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}


const Job = () => {
  // if (!job) {
  //   return <Error statusCode={404} />;
  // }

  return (
    <DefaultLayout>
      <Helmet title={PageTitle} description={PageDescription} />
      <Nav />
      
      <div className="pt-5 pb-5 bg-gray-100 border-t">
        <div className="mx-auto max-w-screen-xl">
          <div className="px-10 py-10">
            <JobDetail />
          </div>
        </div>
      </div>
      <PageFooter />
    </DefaultLayout>
  );
};

// Job.getInitialProps = serverOnlyProps(async ({ req }) => {
//   return {
//     canonical: `${siteConfig.url.web}${req.url}`,
//     jobs: await getRequestedJob(req),
//   };
// });

// export async function getStaticProps({ params }) {
//   const jobs = await getRequestedJob(params.jobs);

//   return {
//     props: {
//       jobs,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const jobs = require("../../content/jobs.json");

//   const paths = jobs.map((jobs) => ({
//     params: {
//       jobs: jobs.fileName,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

export default Job;
