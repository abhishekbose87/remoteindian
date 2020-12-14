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
import Video from "components/video";

const PageTitle = "📺 RI Campfire Sessions";
const PageDescription = "Selected recordings of zoom calls hosted by the RI community every Saturday";


const Videos = ({videos}) => {

    return (
      <DefaultLayout>
        <Helmet
          title="📺 RI Campfire Sessions"
          description="Find selected recordings of zoom calls hosted by the RI community every Saturday."
        />
        <Nav />
        <PageHeader title={PageTitle} subtitle={PageDescription}>
          <div class="mt-4 mb-2 px-40 italic text-sm">
            Become a{" "}
            <a href="support" class="underline">
              patron
            </a>{" "}
            to unlock recordings of 20+ sessions.
          </div>
        </PageHeader>
        <div className="pt-5 pb-5 bg-gray-100 border-t">
          <div className="px-10">
            <div className="grid grid-cols-12 gap-8">
              {videos["data"].map((video) => (
                <Video video={video} />
              ))}
            </div>
          </div>
        </div>
        <PageFooter />
      </DefaultLayout>
    );
          }

export async function getStaticProps() {
  try {
    let videos = await callingFn();

    return {
      props: {
        videos: videos,
      },
    };
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function callingFn() {
  try {
    const response = await fetch(
      "https://v1.nocodeapi.com/avi/google_sheets/alYEYpogMFHpLuIQ?tabId=Sheet2",
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

export default Videos;
