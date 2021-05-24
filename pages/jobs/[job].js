import Error from "next/error";
// import { serverOnlyProps } from "lib/server";
import { getRequestedJob, getAllJobs } from "lib/job";
import DefaultLayout from "layouts/default/index";
import Helmet from "components/helmet";
import siteConfig from "content/site";
import Nav from "components/nav";
import PageFooter from "components/page-footer/index";
import PageHeader from "components/page-header";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import { Twitter, Linkedin, Mail, Whatsapp } from "react-social-sharing";

/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid'

import gfm from "remark-gfm";

const JobDetail = ({job: {fields}, encoded_summary}) => {

  let title = `${fields["Job Title"]} @ ${fields["Company name"]}`

  let static_url = `https://remoteindian.com/jobs/${fields["final-slug"]}`

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-lg leading-6 font-medium text-indigo-600">
            {`${fields["Job Title"]} @ ${fields["Company name"]}`}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {"Posted "}
            {moment.utc(fields["Created at"]).local().startOf("hour").fromNow()}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">🌐 Location</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {fields["Final Location"]}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">🗃️ Category</dt>
            <dd className="mt-1 text-sm text-gray-900">{fields.Category}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">⌛ Commitment</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {fields["full-time"]}
            </dd>
          </div>
          {fields["Experience"] && (
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                💼 Experience
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {fields["Experience"]}
              </dd>
            </div>
          )}
          {fields["Salary range"] && (
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                💰 Salary range/Hourly rate:
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {fields["Salary range"]}
              </dd>
            </div>
          )}
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">
              📝 Description
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ReactMarkdown
                remarkPlugins={[gfm]}
                children={fields["Description"]}
                className="line-break"
              />
            </dd>
          </div>

          {fields["Attachment"] && (
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  {fields["Attachment"].map((attachment) => (
                    <li
                      key={attachment.id}
                      className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                    >
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">
                          {attachment.filename}
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={attachment.url}
                          target="_blank"
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          )}

          <div className="sm:col-span-2">
            <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full">
              <a
                href={fields["Final link to apply"]}
                target="_blank"
                className="font-medium"
              >
                Apply
              </a>
            </button>
          </div>
        </dl>
      </div>
      <div className="border-t border-gray-200 px-4 py-2 sm:px-6 flex flex-col md:flex-row justify-between">
        <div className="flex items-center ">
          <div
            className="hidden md:block text-lg leading-6"
            style={{ marginRight: "8px" }}
          >
            Share this with a friend 👉
          </div>
          <Twitter
            solid
            small
            message={encoded_summary}
            style={{ marginLeft: "-8px" }}
            link={static_url}
          />
          <Linkedin solid small message={encoded_summary} link={static_url} />
          <Mail solid small subject={encoded_summary} link={static_url} />
          <Whatsapp solid small message={encoded_summary} link={static_url} />
        </div>
        <div className="flex items-center py-4">
          <div className="text-sm">
            <a href="https://airtable.com/shrWN4JNoN6PIfXZ5">
              📍 Report this listing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


const Job = ({job}) => {

  let title = `${job.fields["Job Title"]}`
  let description = `${moment
    .utc(job.fields["Created at"])
    .local()
    .format("MMM Do YYYY")} - ${job.fields["Company name"]} is hiring ${
    job.fields["Job Title"]
  } 🎉 : ${job.fields["Final Location"]}, ${job.fields["full-time"]}, ${
    job.fields["Category"]
  }`;

  // console.log("Inside React Component:\n", job)
  
  if (!job) {
    return <Error statusCode={404} />;
  }

  return (
    <DefaultLayout>
      <Helmet title={title} description={description} />
      <Nav />

      <div className="pt-5 pb-5 bg-gray-100 border-t">
        <div className="mx-auto max-w-screen-xl">
          <div className="px-10 py-10">
            <JobDetail
              job={job}
              encoded_summary={encodeURIComponent(description + "\n\n")}
            />
          </div>
        </div>
      </div>
      <PageFooter />
    </DefaultLayout>
  );
};

export async function getStaticProps({ params }) {
  const job = await getRequestedJob(params.job);

  // console.log("Inside getStaticProps:\n\n", job);

  return {
    props: {
      job: job,
    },
  };
}

export async function getStaticPaths() {
  const jobs = await getAllJobs();

  const paths = jobs.map((index) => ({
    params: {
      job: String(index),
    },
  }));

  // console.log("Paths:\n\n", paths);

  return {
    paths,
    fallback: false,
  };
}

export default Job;
