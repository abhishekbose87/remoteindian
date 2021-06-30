import Helmet from "components/helmet";
import DefaultLayout from "layouts/default/index";
import Nav from "components/nav";
import PageFooter from "components/page-footer/index";
import PageHeader from "components/page-header";
import {
  faCodeBranch,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BadgeLink,
  BadgesList,
  PrimaryBadge,
  SecondaryBadge,
} from "components/badges";
import siteConfig from "content/site";
import RowBlock from "components/row-block";
import Product from "components/product";
import moment from "moment";

const PageTitle = "RI Jobs";
const PageDescription = `Find relevant listings so that it's easy to find your dream remote job even when you are based in India 🇮🇳`;

/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, LocationMarkerIcon, UsersIcon, CashIcon, AcademicCapIcon } from '@heroicons/react/solid'

// const positions = [
//   {
//     id: 1,
//     title: 'Back End Developer',
//     type: 'Full-time',
//     location: 'Remote',
//     department: 'Engineering',
//     closeDate: '2020-01-07',
//     closeDateFull: 'January 7, 2020',
//   },
//   {
//     id: 2,
//     title: 'Front End Developer',
//     type: 'Full-time',
//     location: 'Remote',
//     department: 'Engineering',
//     closeDate: '2020-01-07',
//     closeDateFull: 'January 7, 2020',
//   },
//   {
//     id: 3,
//     title: 'User Interface Designer',
//     type: 'Full-time',
//     location: 'Remote',
//     department: 'Design',
//     closeDate: '2020-01-14',
//     closeDateFull: 'January 14, 2020',
//   },
// ]

const Jobs = ({ jobs }) => {
  return (
    <DefaultLayout>
      <Helmet title={PageTitle} description={PageDescription} />
      <Nav />

      <PageHeader title={PageTitle} subtitle={PageDescription}>
        {/* <div class="mt-4 mb-2 px-40 italic text-sm">
          Disclosure: This page contains affliate links, meaning when you click
          the links and make a purchase, we receive a commission. This income
          plays a small part in keeping the RemoteIndian project{" "}
          <a href="support" class="underline">
            independent and inclusive
          </a>{" "}
          for everyone.
        </div> */}
        <BadgesList className="mt-4">
          <BadgeLink href={siteConfig.url.addJob} target="_blank">
            <SecondaryBadge>
              <FontAwesomeIcon icon={faCodeBranch} />
              Submit a job
            </SecondaryBadge>
          </BadgeLink>
          {/* <BadgeLink href={siteConfig.url.signUp}>
              <PrimaryBadge>
                <FontAwesomeIcon icon={faEnvelope} />
                Send me Updates
              </PrimaryBadge>
            </BadgeLink> */}
        </BadgesList>
      </PageHeader>
      <div className="pt-5 pb-5 bg-gray-100 border-t">
        <div className="mx-auto max-w-screen-xl">
          <div className="px-10 py-10">
            <JobsTable jobs={jobs} />
            {/* <div className="grid grid-cols-12 gap-8">
              {products["data"].map((product) => (
                <Product product={product} />
              ))}
            </div> */}
          </div>
        </div>
      </div>
      <PageFooter />
    </DefaultLayout>
  );
};

const JobsTable = ({jobs}) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {jobs.map((position) => (
          <li key={position.id}>
            <a
              href={`/jobs/${position.fields["final-slug"]}`}
              target="_blank"
              className="block hover:bg-gray-50"
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">
                    {`${position.fields["Job Title"]} @ ${position.fields["Company name"]}`}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {position.fields["full-time"]}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <UsersIcon
                        className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.fields.Category}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <LocationMarkerIcon
                        className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.fields["Final Location"]}
                    </p>
                    {position.fields["Experience new"] && (
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <AcademicCapIcon
                          className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {position.fields["Experience new"]}
                      </p>
                    )}
                    {position.fields["Salary range"] && (
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <CashIcon
                          className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {position.fields["Salary range"]}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon
                      className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>
                      {moment
                        .utc(position.fields["Created at"])
                        .local()
                        .startOf("hour")
                        .fromNow()}
                      {/* Created on{" "}
                      {/* <time dateTime={position.fields["Created at"]}>
                        {position.fields["Created at"]}
                      </time> */}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

  
export async function getStaticProps() {
  try {
    let jobs = await callingFn();

    return {
      props: {
        jobs: jobs["records"],
      },
    };
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function callingFn() {
  try {
    const response = await fetch(
      "https://v1.nocodeapi.com/avi/airtable/fkrHLRfYUVqICrzi?tableName=Listing&view=Reviewed Jobs&sortBy=Created at&sortDirection=desc",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    // console.log("Success:", JSON.stringify(json));
    return json;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default Jobs;
