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
import Fuse from "fuse.js";

import CreatableSelect from "react-select/creatable";

const createOption = (label) => ({
  label,
  value: label,
});

const components = {
  DropdownIndicator: null,
};

const PageTitle = "RI Jobs";
const PageDescription = `Find relevant listings so that it's easy to find your dream remote job even when you are based in India 🇮🇳`;

/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, LocationMarkerIcon, UsersIcon, CashIcon, AcademicCapIcon } from '@heroicons/react/solid'

import React, { useState, useEffect, useCallback, useRef } from "react";
import Select from "react-select";

const experience_options = [
  { value: "Intern", label: "Intern" },
  { value: "Entry Level (New Grad)", label: "Entry Level (New Grad)" },
  { value: "Junior (1-2 years)", label: "Junior (1-2 years)" },
  { value: "Mid-level (3-4 years)", label: "Mid-level (3-4 years)" },
  { value: "Senior (5-8 years)", label: "Senior (5-8 years)" },
  { value: "Expert & Leadership (9+ years)", label: "Expert & Leadership (9+ years)" },
];

const category_options = [
  { value: "Engineering", label: "Engineering" },
  {
    value: "Design",
    label: "Design",
  },
  {
    value: "Marketing",
    label: "Marketing",
  },
  {
    value: "Sales",
    label: "Sales",
  },
  {
    value: "Customer Support",
    label: "Customer Support",
  },
  {
    value: "Product",
    label: "Product",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const full_time_options = [
  { value: "Full-time", label: "Full-time" },
  {
    value: "Part-time",
    label: "Part-time",
  },
];

const Jobs = ({ jobs }) => {

  jobs = jobs.map(job => job.fields)

  const fuse = new Fuse(jobs, {
    keys: ["Description", "Job Title"],
    useExtendedSearch: true,
    minMatchCharLength: 2,
    threshold: 0.5
  });

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const [keywords, setKeywords] = useState({
    inputValue: '',
    value: [],
  });

  const filters = useRef({});

  const inputSkills = useRef(null);

  const handleChange = (value, action) => {

    if (action.action == "clear") {
      delete filters.current[action.name];
    } else {
      Object.assign(filters.current, { [action.name]: value.value });
    }

    setFilteredJobs(() => getFilteredJobs());
  }

  const handleChange2 = (value, actionMeta) => {
    setKeywords({...keywords, value });
  };
  
  const handleInputChange = (inputValue) => {
    setKeywords({ ...keywords, inputValue });
  };
  
  const handleKeyDown = (event) => {
    const { inputValue, value } = keywords;
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        inputSkills.current.state.inputValue = ""
        
        setKeywords({ ...keywords,
          inputValue: "",
          value: [...value, createOption(inputValue)],
        });        
        event.preventDefault();
    }
  };

  function getFilteredJobs() {
    const results = fuse.search(keywords.value.map(item => item.value).join(" "));

    const searchResults =
      keywords.value.length > 0 ? results.map((job) => job.item) : jobs;

    return searchResults.filter(function (job) {
      for (var key in filters.current) {
        if (job[key] === undefined || job[key] != filters.current[key])
          return false;
      }
      return true;
    });
  }

  useEffect(() => {
    setFilteredJobs( () => getFilteredJobs());
  }, [keywords.value]);

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
            <div className="grid grid-cols-1 md:grid-cols-4  gap-8">
              <Select
                name="Experience"
                instanceId="Experience"
                isClearable={true}
                onChange={handleChange}
                placeholder="Experience"
                options={experience_options}
              />

              <Select
                name="Category"
                instanceId="Category"
                isClearable={true}
                onChange={handleChange}
                placeholder="Category"
                options={category_options}
              />

              <Select
                name="full-time"
                instanceId="full-time"
                isClearable={true}
                onChange={handleChange}
                placeholder="Commitment"
                options={full_time_options}
              />

              <CreatableSelect
                name="skills"
                instanceId="skills"
                components={components}
                inputValue={keywords.inputkeywords}
                isClearable
                isMulti
                menuIsOpen={false}
                onChange={handleChange2}
                onInputChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type keyword and press Enter..."
                value={keywords.value}
                ref={inputSkills}
              />

              {/* <input
                type="text"
                value={query}
                onChange={onSearch}
                placeholder="Keyword eg. Ruby"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-5">
        <div className="mx-auto max-w-screen-xl">
          <div className="px-10 py-10">
            <JobsTable jobs={filteredJobs} />
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

  if (!jobs.length) {
    return <p>There are no results for your query.</p>;
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {jobs.map((position) => (
          <li key={position["Index"]}>
            <a
              href={`/jobs/${position["final-slug"]}`}
              target="_blank"
              className="block hover:bg-gray-50"
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">
                    {`${position["Job Title"]} @ ${position["Company name"]}`}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {position["full-time"]}
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
                      {position.Category}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <LocationMarkerIcon
                        className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position["Final Location"]}
                    </p>
                    {position["Experience"] && (
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <AcademicCapIcon
                          className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {position["Experience"]}
                      </p>
                    )}
                    {position["Salary range"] && (
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <CashIcon
                          className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {position["Salary range"]}
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
                        .utc(position["Created at"])
                        .local()
                        .startOf("hour")
                        .fromNow()}
                      {/* Created on{" "}
                      {/* <time dateTime={position["Created at"]}>
                        {position["Created at"]}
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
