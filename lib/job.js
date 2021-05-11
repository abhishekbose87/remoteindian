import guides from 'content/guides';
import authors from 'content/authors';
import siteConfig from 'content/site';

export const getAllJobs = async() => {
  try {
    let jobs = await callingFn();

    return jobs;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getRequestedJob = async(id) => {
  try {
    let job = await callingFn2(id);

    // console.log(job);

    if (!job) {
      return null;
    }
    return job;

  } catch (error) {
    console.log("Error: ", error);
  }

  return null;
};

async function callingFn2(id) {
  try {
    const response = await fetch(
      `https://v1.nocodeapi.com/avi/airtable/fkrHLRfYUVqICrzi?tableName=Listing&view=Reviewed Jobs&filterByFormula={final-slug}="${id}"`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    // console.log("Get single job:\n\n", JSON.stringify(json));
    return json.records[0];
  } catch (error) {
    console.error("Error:", error);
  }
}


async function callingFn() {
  try {
    const response = await fetch(
      "https://v1.nocodeapi.com/avi/airtable/fkrHLRfYUVqICrzi?tableName=Listing&fields=final-slug&view=Reviewed Jobs",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    let test = json["records"].map((rec) => {
      return rec.fields["final-slug"];
    });
    // console.log("Paths:\n\n", JSON.stringify(json));
    // console.log(
    //   "\n\nUrl: \n",
    //   test
    // );
    return test;
  } catch (error) {
    console.error("Error:", error);
  }
}
