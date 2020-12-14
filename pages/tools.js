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

const PageTitle = "WFH Tools";
const PageDescription = "60+ Products curated by the RemoteIndian community 👨‍💻🇮🇳👩‍💻";


const Tools = ({products}) => {

    return (
      <DefaultLayout>
        <Helmet
          title="Make WFH work for you 👨‍💻👩‍💻"
          description="Find 60+ products that that will help you to be productive while working from home 🏠</p>"
        />
        <Nav />
        <PageHeader title={PageTitle} subtitle={PageDescription}>
          <div class="mt-4 mb-2 px-40 italic">
            ⚠️ Disclaimer: If you buy using the below affiliate links, you play
            a big part in keeping the RemoteIndian project <a href="support" class="underline">independent and inclusive</a> for everyone.
          </div>
          <BadgesList className="mt-4">
            <BadgeLink href={siteConfig.url.addProduct} target="_blank">
              <SecondaryBadge>
                <FontAwesomeIcon icon={faCodeBranch} />
                Submit a product
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
          <div className="px-10">
            <div className="grid grid-cols-12 gap-8">
              {products["data"].map((product) => (
                <Product product={product} />
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
    let products = await callingFn();

    return {
      props: {
        products: products,
      },
    };
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function callingFn() {
  try {
    const response = await fetch(
      "https://v1.nocodeapi.com/avi/google_sheets/alYEYpogMFHpLuIQ?tabId=Sheet1",
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

export default Tools;
